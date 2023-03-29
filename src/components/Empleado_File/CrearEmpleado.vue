<template>
    <div class="container-fluid">
        <div class="card">
            <div class="card-header">Agregar Empleado</div>
            <div class="card-body">
                <form v-on:submit.prevent="formulario">
                    <div class="form-group">
                        <label for="nombre">Nombre:</label>
                        <input type="text" class="form-control" name="nombre" v-model="Empleados.nombre"
                            aria-describedby="helpId" id="nombre" placeholder="nombre" />
                        <small id="helpId" class="form-text" text-muted>Ingresa el nombre del empleado</small>
                    </div>
                    <div class="form-group">
                        <label for="apellido">Apellidos:</label>
                        <input type="text" class="form-control" name="apellido" v-model="Empleados.apellido"
                            aria-describedby="helpId" id="apellido" placeholder="apellido" />
                        <small id="helpId" class="form-text" text-muted>Ingresa los apellidos del empleado</small>
                    </div>
                    <div class="form-group">
                        <label for="direccion">Direccion:</label>
                        <input type="text" class="form-control" name="direccion" v-model="Empleados.direccion"
                            aria-describedby="helpId" id="direccion" placeholder="direccion" />
                        <small id="helpId" class="form-text" text-muted>Ingresa la direccion del empleado</small>
                    </div>
                    <div class="form-group">
                        <label for="ciudad">Ciudad:</label>
                        <input type="text" class="form-control" name="ciudad" v-model="Empleados.ciudad"
                            aria-describedby="helpId" id="ciudad" placeholder="ciudad" />
                        <small id="helpId" class="form-text" text-muted>Ingresa la ciudad del empleado</small>
                    </div>

                    <br>

                    <div class="row">
                        <div class="col">

                            <div class="form-group">
                                <label for="fkPuesto">fkPuesto:</label>
                                <input type="number" class="form-control" name="fkPuesto" id="fkPuesto"
                                    aria-describedby="helpId" placeholder="fkPuesto" v-model="Empleados.fkPuesto" />
                            </div>
                        </div>
                        <div class="col">

                            <div class="form-group">
                                <label for="fkDepartamento">fkDepartamento:</label>
                                <input type="number" class="form-control" name="fkDepartamento" id="fkDepartamento" aria-describedby="helpId"
                                    placeholder="fkDepartamento" v-model="Empleados.fkDepartamento" />
                            </div>
                        </div>
                    </div>


                    
                    <br>
                    <div class="row">
                        <div class="btn-group" role="group" id="botonesopcion">
                            |<button type="submit" class="btn btn-outline-primary">Agregar</button>|
                            |<router-link :to="{ name: 'emplelis' }" class="btn btn-outline-danger">Cancelar</router-link>|
                        </div>
                        <router-link :to="{ name: 'emplelis' }" class="btn btn-outline-primary" id="finaliza"
                            style="display: none;">Finalizar</router-link>
                    </div>
                    <br>
                    <div class="row">
                        <div id="alert" style="display:none;" class="alert alert-success" role="alert">
                            {{ smg }}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
export default {

    data() {
        return {
            Empleados: {},
            smg: "",
        };
    },
    methods: {
        formulario() {
            var cuerpo = {
                nombre: this.Empleados.nombre,
                apellido: this.Empleados.apellido,
                direccion: this.Empleados.direccion,
                ciudad: this.Empleados.ciudad,
                fkPuesto: this.Empleados.fkPuesto,
                fkDepartamento: this.Empleados.fkDepartamento
            };

            axios.post('https://localhost:7241/Empleado', cuerpo).then((result) => {

                if (result.status == 200) {
                    document.getElementById("alert").style.display = "block";
                    document.getElementById('botonesopcion').style.display = "none";
                    this.smg = "Se agrego el nuevo Empleado";
                    document.getElementById('finaliza').style.display = "block";
                    console.log(result);
                }
                // window.location.href = "dashboard";

            })
        }
    }
}
</script>