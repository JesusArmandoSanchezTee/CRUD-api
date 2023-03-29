<template>
    <div class="container-fluid">
        <div class="card">
            <div class="card-header">Actualizar Cliente</div>
            <small id="helpId" class="form-text" text-muted>Mofique los apartados que desea cambiar</small>
            <div class="card-body">
                <form v-on:submit.prevent="formulario">
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="nombre">ID:</label>
                                <input type="number" class="form-control" name="nombre" aria-describedby="helpId"
                                    id="pkCliente" placeholder="ID" v-model="pkCliente" />
                                <small id="peticion" class="form-text" text-muted>Ingresa id del Cliente que desea
                                    actualizar</small>
                                <br>
                                <br>
                                <div id="botonbusca">
                                    <button type="button" class="btn btn-outline-primary"
                                        v-on:click="Buscar(pkCliente)">Buscar</button>
                                    &#160
                                    <router-link :to="{ name: 'clili' }" class="btn btn-outline-danger">Cancelar</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div id="fk-nombre" class="row" style="display: none;">
                        <div class="col">

                            <div class="form-group">
                                <label for="nombre">Nomre:</label>
                                <input type="text" class="form-control" name="nombre" id="nombre"
                                    aria-describedby="helpId" placeholder="nombre" value="" />
                            </div>
                        </div>
                        <div class="col">
                                <div class="form-group">
                                    <label for="apellido">apellido:</label>
                                    <input type="text" class="form-control" name="apellido" id="apellido"
                                        aria-describedby="helpId" placeholder="apellido" value="" />

                                </div>
                            </div>
                    </div>
                    <div id="fk-tele" class="row" style="display: none;">
                        <div class="col">

                            <div class="form-group">
                                <label for="telefono">telefono:</label>
                                <input type="text" class="form-control" name="telefono" id="telefono"
                                    aria-describedby="helpId" placeholder="telefono" value="" />
                            </div>
                        </div>
                        <div class="col">
                                <div class="form-group">
                                    <label for="email">email:</label>
                                    <input type="text" class="form-control" name="email" id="email"
                                        aria-describedby="helpId" placeholder="email" value="" />

                                </div>
                            </div>
                    </div>
                    <div id="fk-dire" class="row" style="display: none;">
                        <div class="col">

                            <div class="form-group">
                                <label for="direccion">direccion:</label>
                                <input type="text" class="form-control" name="direccion" id="direccion"
                                    aria-describedby="helpId" placeholder="direccion" value="" />
                            </div>
                        </div>
                    </div>
                    <br>
                    <div id="botoncerrar" style="display: none;">|<router-link :to="{name:'clili'}" type="button" class="btn btn-outline-primary">Finalizar</router-link>|</div>
                    <div id="botones" class="row" style="display: none;">
                        <div class="btn-group" role="group">
                            |<button type="submit" class="btn btn-outline-primary">Actualizar</button>|
                            |<router-link :to="{ name: 'clili' }" class="btn btn-outline-danger">Cancelar</router-link>|
                        </div>

                    </div>
                    <br>
                    <div class="row">
                        <div id="alert" style="display:none;" class="alert alert-success" role="alert">
                            {{ smg }}
                        </div>
                        <div id="alert2" class="alert alert-warning" role="alert" style="display:none;">{{ bad }}</div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'putCli',
    components: {

    },

    data() {
        return {
            Cliente: [],
            smg: "",
            pkCliente: 0,
            bad: "",
        };
    },
    methods: {
        formulario() {
            var cuerpo = {
                pkCliente: this.pkCliente,
                nombre: document.getElementById('nombre').value,
                apellido: document.getElementById('apellido').value,
                telefono: document.getElementById('telefono').value,
                email: document.getElementById('email').value,
                direccion: document.getElementById('direccion').value
            };
            axios.put('https://localhost:7241/Cliente/' + this.pkCliente, cuerpo).then((resutl) => {
                console.log(resutl.data);
                document.getElementById('botones').style.display = "none";
                document.getElementById("alert").style.display = "block";
                this.smg = "Se ha actualizado el rol";
                document.getElementById('botoncerrar').style.display="block";
            })
        },
        Buscar(id) {
            console.log(id)
            if (id > 0) {
                axios.get('https://localhost:7241/Cliente/' + id).then((response) => {

                    this.Cliente = response.data.result
                    console.log(response.data.result)
                    if (this.Cliente == null) {
                        document.getElementById('alert2').style.display = "block";
                        this.bad = "No hay ningun registro de ese ID"
                    } else {
                        document.getElementById('botonbusca').style.display = "none";
                        document.getElementById('peticion').style.display = "none";
                        document.getElementById('fk-nombre').style.display = "block";
                        document.getElementById('fk-tele').style.display = "block";
                        document.getElementById('fk-dire').style.display = "block";
                        document.getElementById('botones').style.display = "block";
                        document.getElementById('alert2').style.display = "none";


                        document.getElementById('nombre').value = this.Cliente[0].nombre;
                        document.getElementById('apellido').value = this.Cliente[0].apellido;
                        document.getElementById('telefono').value = this.Cliente[0].telefono;
                        document.getElementById('email').value = this.Cliente[0].email;
                        document.getElementById('direccion').value = this.Cliente[0].direccion;

                    }
                })
            } else {
                document.getElementById('alert2').style.display = "block";
                this.bad = "No hay valor de ID"
            }


        }

    },

}

</script>

<style scoped>
label {
    font-weight: bold;
}
.card-header{
    color: black;
}

label{
    color: black;
}
</style>

