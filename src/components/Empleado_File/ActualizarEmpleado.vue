<template>
    <div class="container-fluid">
        <div class="card">
            <div class="card-header">Actualizar Empleado</div>
            <small id="helpId" class="form-text" text-muted>Mofique los apartados que desea cambiar</small>
            <div class="card-body">
                <form v-on:submit.prevent="formulario">
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="nombre">ID:</label>
                                <input type="number" class="form-control" name="nombre" aria-describedby="helpId"
                                    id="pkEmpleado" placeholder="ID" v-model="pkEmpleado" />
                                <small id="peticion" class="form-text" text-muted>Ingresa id del empleado que desea
                                    actualizar</small>
                                <br>
                                <br>
                                <div id="botonbusca">
                                    <button type="button" class="btn btn-outline-primary"
                                        v-on:click="Buscar(pkEmpleado)">Buscar</button>
                                    &#160
                                    <router-link :to="{ name: 'emplelis' }"
                                        class="btn btn-outline-danger">Cancelar</router-link>
                                </div>
                            </div>
                        </div>
                        <div id="nombre-apellido" style="display: none;">
                            <div class="col">

                                <div class="form-group">
                                    <label for="nombre">nombre:</label>
                                    <input type="text" class="form-control" name="nombre" aria-describedby="helpId"
                                        id="nombre" placeholder="nombre" value="" />
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="apellidos">apellido:</label>
                                    <input type="text" class="form-control" name="apellidos" id="apellidos"
                                        aria-describedby="helpId" placeholder="apellidos" value="" />

                                </div>
                            </div>
                        </div>
                        <br>
                        <div id="direccion-ciudad" style="display: none;">
                            <div class="col">
                                <div class="form-group">
                                    <label for="direccion">direccion:</label>
                                    <input type="text" class="form-control" name="direccion" aria-describedby="helpId"
                                        id="direccion" placeholder="direccion" value="" />
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="ciudad">ciudad:</label>
                                    <input type="text" class="form-control" name="ciudad" id="ciudad"
                                        aria-describedby="helpId" placeholder="ciudad" value="" />

                                </div>
                            </div>
                        </div>

                    </div>
                    <br>
                    <div id="fk-puesto-departamento" class="row" style="display: none;">
                        <div class="col">

                            <div class="form-group">
                                <label for="fkPuesto">fkPuesto:</label>
                                <input type="number" class="form-control" name="fkPuesto" id="fkPuesto"
                                    aria-describedby="helpId" placeholder="fkPuesto" value="" />
                            </div>
                        </div>
                        <div class="col">

                            <div class="form-group">
                                <label for="fkDepartamento">fkDepartamento:</label>
                                <input type="number" class="form-control" name="fkDepartamento" id="fkDepartamento"
                                    aria-describedby="helpId" placeholder="fkDepartamento" value="" />
                            </div>
                        </div>
                    </div>
                    <br>
                    <div id="botoncerrar" style="display: none;">|<router-link :to="{ name: 'emplelis' }" type="button"
                            class="btn btn-outline-primary">Finalizar</router-link>|</div>
                    <div id="botones" class="row" style="display: none;">
                        <div class="btn-group" role="group">
                            |<button type="submit" class="btn btn-outline-primary">Actualizar</button>|
                            |<router-link :to="{ name: 'emplelis' }" class="btn btn-outline-danger">Cancelar</router-link>|
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
    name: 'putEmple',
    components: {

    },

    data() {
        return {
            Empleado: [],
            smg: "",
            pkEmpleado: 0,
            bad: "",
        };
    },
    methods: {
        formulario() {
            var cuerpo = {
                pkEmpleado: this.pkEmpleado,
                nombre: document.getElementById('nombre').value,
                apellidos: document.getElementById('apellidos').value,
                direccion: document.getElementById('direccion').value,
                ciudad: document.getElementById('ciudad').value,
                fkPuesto: document.getElementById('fkPuesto').value,
                fkDepartamento: document.getElementById('fkDepartamento').value,


            };
            axios.put('https://localhost:7241/Empleado/' + this.pkEmpleado, cuerpo).then((resutl) => {
                console.log(resutl.data);
                document.getElementById('botones').style.display = "none";
                document.getElementById("alert").style.display = "block";
                this.smg = "Se ha actualizado el empleado";
                document.getElementById('botoncerrar').style.display = "block";
            })
        },
        Buscar(id) {
            console.log(id)
            if (id > 0) {
                axios.get('https://localhost:7241/Empleado/' + id).then((response) => {

                    this.Empleado = response.data.result
                    console.log(response.data.result)
                    if (this.Empleado == null) {
                        document.getElementById('alert2').style.display = "block";
                        this.bad = "No hay ningun registro de ese ID"
                    } else {
                        document.getElementById('botonbusca').style.display = "none";
                        document.getElementById('peticion').style.display = "none";
                        document.getElementById('nombre-apellido').style.display = "block";
                        document.getElementById('direccion-ciudad').style.display= "block";
                        document.getElementById('fk-puesto-departamento').style.display = "block";
                        document.getElementById('botones').style.display = "block";
                        document.getElementById('alert2').style.display = "none";


                        document.getElementById('nombre').value = this.Empleado[0].nombre;
                        document.getElementById('apellidos').value = this.Empleado[0].apellidos;
                        document.getElementById('direccion').value = this.Empleado[0].direccion;
                        document.getElementById('ciudad').value = this.Empleado[0].ciudad;
                        document.getElementById('fkPuesto').value = this.Empleado[0].fkPuesto;
                        document.getElementById('fkDepartamento').value = this.Empleado[0].fkDepartamento;
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

.card-header {
    color: black;
}

label {
    color: black;
}
</style>

