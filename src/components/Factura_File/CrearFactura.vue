<template>
    <div class="container-fluid">
        <div class="card">
            <div class="card-header">Agregar Factura</div>
            <div class="card-body">
                <form v-on:submit.prevent="formulario">
                    <div class="form-group">
                        <label for="razonSocial">RazonSocial:</label>
                        <input type="text" class="form-control" name="razonSocial" v-model="Facturas.razonSocial"
                            aria-describedby="helpId" id="razonSocial" placeholder="razonSocial" />
                        <small id="helpId" class="form-text" text-muted>Ingresa el nombre de la Razon Social</small>
                    </div>
                    <div class="form-group">
                        <label for="rfc">RFC:</label>
                        <input type="text" class="form-control" name="rfc" v-model="Facturas.rfc"
                            aria-describedby="helpId" id="rfc" placeholder="rfc" />
                        <small id="helpId" class="form-text" text-muted>Ingresa el rfc</small>
                    </div>
                    <br>

                    <div class="">
                        <div class="">
                            <div class="form-group">
                                <label for="fkCliente">Cliente:</label>
                                <br>
                                <select class="input" name="fkCliente" id="fkCliente" v-model="Facturas.fkCliente">
                                    <option v-for="cli in Cliente" value="cli.pkCliente" key="cli.pkCliente">{{ cli.nombre }}

                                    </option>

                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <br>
                    <div class="row">
                        <div class="btn-group" role="group" id="botonesopcion">
                            |<button type="submit" class="btn btn-outline-primary">Agregar</button>|
                            |<router-link :to="{ name: 'faclis' }" class="btn btn-outline-danger">Cancelar</router-link>|
                        </div>
                        <router-link :to="{ name: 'faclis' }" class="btn btn-outline-primary" id="finaliza"
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
import { isDate } from '@vue/shared';
import axios from 'axios';
export default {

    data() {
        return {
            Facturas: {},
            smg: "",
            Cliente: [],
        };
    },
    created: function ()
    {
        this.consultar()
    },
    methods: {
        consultar() {
            axios.get("https://localhost:7241/Cliente").then((result) => {
                console.log(result.data.result)
                this.Cliente= result.data.result;
            })
        },
        formulario() {
            //const tiempoTranscurrido = Date.now();
            const hoy = new Date();
            var cuerpo = {
                razonSocial: this.Facturas.razonSocial,
                fecha: hoy.toISOString(),
                rfc: this.Facturas.rfc,
                fkCliente: this.Facturas.fkCliente,
            };

            axios.post('https://localhost:7241/Factura', cuerpo).then((result) => {

                if (result.status == 200) {
                    document.getElementById("alert").style.display = "block";
                    document.getElementById('botonesopcion').style.display = "none";
                    this.smg = "Se agrego una Factura";
                    document.getElementById('finaliza').style.display = "block";
                    console.log(result);
                }
                // window.location.href = "dashboard";

            })
        }
    }
}
</script>

<style scoped>

select{
    width: 80%;
}
</style>