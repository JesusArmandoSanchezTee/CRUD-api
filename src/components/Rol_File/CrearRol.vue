<template>
    <div class="container">
        <div class="card">
            <div class="card-header">Agregar Rol</div>
            <div class="card-body">
                <form v-on:submit.prevent="agregarRol">
                    <div class="form-group">
                        <label for="nombre">nombre:</label>
                        <input type="text" class="form-control" name="nombre" v-model="Rol.nombre"
                            aria-describedby="helpId" id="nombre" placeholder="nombre" />
                        <small id="helpId" class="form-text" text-muted>Ingresa el nombre del Rol</small>
                    </div>
                    <br />
                    <div class="btn-group" role="group">
                        |<button type="submit" class="btn btn-success">Agregar</button>|
                        |<router-link :to="{ name: 'rollis' }" class="btn btn-danger">Cancelar</router-link>|
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
            Rol: {},
        };
    },

    methods: {
        agregarRol() {
            console.log(this.articulo);

            var datosEnviar = {
                nombre: this.Rol.nombre
            };

            axios
                .post("https://localhost:7241/Rol", datosEnviar)
                .then((result) => {
                    console.log(result);
                    window.location.href = "rollis";
                });
        },
    },
};
</script>