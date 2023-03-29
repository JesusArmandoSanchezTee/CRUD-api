<template>
    <div class="container">
        <div class="card">
            <div class="card-header">Agregar Cliente</div>
            <div class="card-body">
                <form v-on:submit.prevent="agregarCliente">
                    <div class="form-group">
                        <label for="nombre">nombre:</label>
                        <input type="text" class="form-control" name="nombre" v-model="Cliente.nombre"
                            aria-describedby="helpId" id="nombre" placeholder="nombre" />
                        <small id="helpId" class="form-text" text-muted>Ingresa el nombre del Cliente</small>
                    </div>
                    <div class="form-group">
                        <label for="apellido">apellido:</label>
                        <input type="text" class="form-control" name="apellido" v-model="Cliente.apellido"
                            aria-describedby="helpId" id="apellido" placeholder="nombre" />
                        <small id="helpId" class="form-text" text-muted>Ingresa el apellido del Cliente</small>
                    </div>
                    <div class="form-group">
                        <label for="telefono">telefono:</label>
                        <input type="text" class="form-control" name="telefono" v-model="Cliente.telefono"
                            aria-describedby="helpId" id="telefono" placeholder="nombre" />
                        <small id="helpId" class="form-text" text-muted>Ingresa el telefono del Cliente</small>
                    </div>
                    <div class="form-group">
                        <label for="email">email:</label>
                        <input type="text" class="form-control" name="email" v-model="Cliente.email"
                            aria-describedby="helpId" id="email" placeholder="email" />
                        <small id="helpId" class="form-text" text-muted>Ingresa el email del Cliente</small>
                    </div>
                    <div class="form-group">
                        <label for="direccion">direccion:</label>
                        <input type="text" class="form-control" name="direccion" v-model="Cliente.direccion"
                            aria-describedby="helpId" id="direccion" placeholder="direccion" />
                        <small id="helpId" class="form-text" text-muted>Ingresa el direccion del Cliente</small>
                    </div>
                    <br />
                    <div class="btn-group" role="group">
                        |<button type="submit" class="btn btn-success">Agregar</button>|
                        |<router-link :to="{ name: 'clili' }" class="btn btn-danger">Cancelar</router-link>|
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
            Cliente: {},
        };
    },

    methods: {
        agregarCliente() {
            console.log(this.articulo);

            var datosEnviar = {
                nombre: this.Cliente.nombre,
                apellido: this.Cliente.apellido,
                telefono: this.Cliente.telefono,
                email: this.Cliente.email,
                direccion: this.Cliente.direccion,
            };

            axios
                .post("https://localhost:7241/Cliente", datosEnviar)
                .then((result) => {
                    console.log(result);
                    window.location.href = "clili";
                });
        },
    },
};
</script>