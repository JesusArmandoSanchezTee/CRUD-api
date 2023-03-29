<template>
    <div class="container">
        <div class="card">
            <div class="card-header">Agregar Puesto</div>
            <div class="card-body">
                <form v-on:submit.prevent="agregarPuesto">
                    <div class="form-group">
                        <label for="nombre">nombre:</label>
                        <input type="text" class="form-control" name="nombre" v-model="Puesto.nombre"
                            aria-describedby="helpId" id="nombre" placeholder="nombre" />
                        <small id="helpId" class="form-text" text-muted>Ingresa el nombre del Puesto</small>
                    </div>
                    <br />
                    <div class="btn-group" role="group">
                        |<button type="submit" class="btn btn-success">Agregar</button>|
                        |<router-link :to="{ name: 'pulis' }" class="btn btn-danger">Cancelar</router-link>|
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
            Puesto: {},
        };
    },

    methods: {
        agregarPuesto() {
            console.log(this.articulo);

            var datosEnviar = {
                nombre: this.Puesto.nombre
            };

            axios
                .post("https://localhost:7241/Puesto", datosEnviar)
                .then((result) => {
                    console.log(result);
                    window.location.href = "pulis";
                });
        },
    },
};
</script>