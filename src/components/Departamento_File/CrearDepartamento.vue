<template>
    <div class="container">
        <div class="card">
            <div class="card-header">Agregar Departamento</div>
            <div class="card-body">
                <form v-on:submit.prevent="agregarDepartamento">
                    <div class="form-group">
                        <label for="nombre">nombre:</label>
                        <input type="text" class="form-control" name="nombre" v-model="Departamento.nombre"
                            aria-describedby="helpId" id="nombre" placeholder="nombre" />
                        <small id="helpId" class="form-text" text-muted>Ingresa el nombre del Departamento</small>
                    </div>
                    <br />
                    <div class="btn-group" role="group">
                        |<button type="submit" class="btn btn-success">Agregar</button>|
                        |<router-link :to="{ name: 'delis' }" class="btn btn-danger">Cancelar</router-link>|
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            Departamento: {},
        };
    },

    methods: {
        agregarDepartamento() {
            console.log(this.articulo);

            var datosEnviar = {
                nombre: this.Departamento.nombre
            };

            axios
                .post("https://localhost:7241/Departamento", datosEnviar)
                .then((result) => {
                    console.log(result);
                    window.location.href = "delis";
                });
        },
    },
};
</script>