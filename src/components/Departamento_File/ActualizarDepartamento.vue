<template>
    <div class="container-fluid">
        <div class="card">
            <div class="card-header">Actualizar Departamento</div>
            <small id="helpId" class="form-text" text-muted>Mofique los apartados que desea cambiar</small>
            <div class="card-body">
                <form v-on:submit.prevent="formulario">
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="nombre">ID:</label>
                                <input type="number" class="form-control" name="nombre" aria-describedby="helpId"
                                    id="pkDepartamento" placeholder="ID" v-model="pkDepartamento" />
                                <small id="peticion" class="form-text" text-muted>Ingresa id del Departamento que desea
                                    actualizar</small>
                                <br>
                                <br>
                                <div id="botonbusca">
                                    <button type="button" class="btn btn-outline-primary"
                                        v-on:click="Buscar(pkDepartamento)">Buscar</button>
                                    &#160
                                    <router-link :to="{ name: 'delis' }" class="btn btn-outline-danger">Cancelar</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div id="fk-nombre" class="row" style="display: none;">
                        <div class="col">

                            <div class="form-group">
                                <label for="nombre">Departamento:</label>
                                <input type="text" class="form-control" name="nombre" id="nombre"
                                    aria-describedby="helpId" placeholder="nombre" value="" />
                            </div>
                        </div>
                    </div>
                    <br>
                    <div id="botoncerrar" style="display: none;">|<router-link :to="{name:'delis'}" type="button" class="btn btn-outline-primary">Finalizar</router-link>|</div>
                    <div id="botones" class="row" style="display: none;">
                        <div class="btn-group" role="group">
                            |<button type="submit" class="btn btn-outline-primary">Actualizar</button>|
                            |<router-link :to="{ name: 'delis' }" class="btn btn-outline-danger">Cancelar</router-link>|
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
    name: 'putDe',
    components: {

    },

    data() {
        return {
            Departamento: [],
            smg: "",
            pkDepartamentol: 0,
            bad: "",
        };
    },
    methods: {
        formulario() {
            var cuerpo = {
                pkDepartamento: this.pkDepartamento,
                nombre: document.getElementById('nombre').value
            };
            axios.put('https://localhost:7241/Departamento/' + this.pkDepartamento, cuerpo).then((resutl) => {
                console.log(resutl.data);
                document.getElementById('botones').style.display = "none";
                document.getElementById("alert").style.display = "block";
                this.smg = "Se ha actualizado el Departamento";
                document.getElementById('botoncerrar').style.display="block";
            })
        },
        Buscar(id) {
            console.log(id)
            if (id > 0) {
                axios.get('https://localhost:7241/Departamento/' + id).then((response) => {

                    this.Departamento = response.data.result
                    console.log(response.data.result)
                    if (this.Departamento == null) {
                        document.getElementById('alert2').style.display = "block";
                        this.bad = "No hay ningun registro de ese ID"
                    } else {
                        document.getElementById('botonbusca').style.display = "none";
                        document.getElementById('peticion').style.display = "none";
                        document.getElementById('fk-nombre').style.display = "block";
                        document.getElementById('botones').style.display = "block";
                        document.getElementById('alert2').style.display = "none";


                        document.getElementById('nombre').value = this.Departamento[0].nombre;

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

