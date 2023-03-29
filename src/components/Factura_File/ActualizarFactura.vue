<template>
    <div class="container-fluid">
        <div class="card">
            <div class="card-header">Actualizar Factura</div>
            <small id="helpId" class="form-text" text-muted>Mofique los apartados que desea cambiar</small>
            <div class="card-body">
                <form v-on:submit.prevent="formulario">
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="razonSocial">ID:</label>
                                <input type="number" class="form-control" name="razonSocial" aria-describedby="helpId"
                                    id="pkUsuario" placeholder="ID" v-model="pkFactura" />
                                <small id="peticion" class="form-text" text-muted>Ingresa id de la factura que desea
                                    actualizar</small>
                                <br>
                                <br>
                                <div id="botonbusca">
                                    <button type="button" class="btn btn-outline-primary"
                                        v-on:click="Buscar(pkFactura)">Buscar</button>
                                    &#160
                                    <router-link :to="{ name: 'faclis' }" class="btn btn-outline-danger">Cancelar</router-link>
                                </div>
                            </div>
                        </div>
                        <div id="user-password" style="display: none;">
                            <div class="col">

                                <div class="form-group">
                                    <label for="razonSocial">razonSocial:</label>
                                    <input type="text" class="form-control" name="razonSocial" aria-describedby="helpId" id="razonSocial"
                                        placeholder="razonSocial" value="" />



                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="rfc">rfc:</label>
                                    <input type="text" class="form-control" name="rfc" id="rfc"
                                        aria-describedby="helpId" placeholder="rfc" value="" />

                                </div>
                            </div>
                        </div>

                    </div>
                    <br>
                    <div id="fk-empleado-rol" class="row" style="display: none;">
                        <div class="col">

                            <div class="form-group">
                                <label for="fkCliente">fkCliente:</label>
                                <input type="number" class="form-control" name="fkCliente" id="fkCliente"
                                    aria-describedby="helpId" placeholder="fkCliente" value="" />
                            </div>
                        </div>
                    </div>
                    <br>
                    <div id="botoncerrar" style="display: none;">|<router-link :to="{name:'faclis'}" type="button" class="btn btn-outline-primary">Finalizar</router-link>|</div>
                    <div id="botones" class="row" style="display: none;">
                        <div class="btn-group" role="group">
                            |<button type="submit" class="btn btn-outline-primary">Actualizar</button>|
                            |<router-link :to="{ name: 'faclis' }" class="btn btn-outline-danger">Cancelar</router-link>|
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
    name: 'putFac',
    components: {

    },

    data() {
        return {
            Facturas: [],
            smg: "",
            pkFactura: 0,
            bad: "",
        };
    },
    methods: {
        formulario() {
            const tiempoTranscurrido = Date.now();
            const hoy = new Date(tiempoTranscurrido);
            var cuerpo = {
                pkFactura: this.pkFactura,
                razonSocial: document.getElementById('razonSocial').value,
                fecha: hoy.toISOString(),
                rfc: document.getElementById('rfc').value,
                fkCliente: document.getElementById('fkCliente').value,


            };
            axios.put('https://localhost:7241/Factura/' + this.pkFactura, cuerpo).then((resutl) => {
                console.log(resutl.data);
                document.getElementById('botones').style.display = "none";
                document.getElementById("alert").style.display = "block";
                this.smg = "Se ha actualizado la factura";
                document.getElementById('botoncerrar').style.display="block";
            })
        },
        Buscar(id) {
            console.log(id)
            if (id > 0) {
                axios.get('https://localhost:7241/Factura/' + id).then((response) => {

                    this.Facturas = response.data.result
                    console.log(response.data.result)
                    if (this.Facturas == null) {
                        document.getElementById('alert2').style.display = "block";
                        this.bad = "No hay ningun registro de ese ID"
                    } else {
                        document.getElementById('botonbusca').style.display = "none";
                        document.getElementById('peticion').style.display = "none";
                        document.getElementById('user-password', 'fk-empleado-rol').style.display = "block";
                        document.getElementById('fk-empleado-rol').style.display = "block";
                        document.getElementById('botones').style.display = "block";
                        document.getElementById('alert2').style.display = "none";


                        document.getElementById('razonSocial').value = this.Facturas[0].razonSocial;
                        document.getElementById('rfc').value = this.Facturas[0].rfc;
                        
                        document.getElementById('fkCliente').value = this.Facturas[0].fkCliente;

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

