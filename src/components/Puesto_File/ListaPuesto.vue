<template>
    <div class="sidebar active">
        <div class="logo_content">
            <div class="logo">
                <i class="bx bxl-c-plus-plus" style="font-size: 30px"></i>
                <div class="logoname" style="margin-left: 5px">Dashboard</div>
            </div>
        </div>
        <ul class="nav_list">
            <li>
                <a href="http://localhost:5174/listar">
                    <i class="fa fa-user"></i>
                    <span class="link_names">Usuarios</span>
                </a>
                <span class="tooltip">Usuarios</span>
            </li>
            <li>
                <a href="http://localhost:5174/delis">
                    <i class="fa fa-building"></i>
                    <span class="link_names">Departamento</span>
                </a>
                <span class="tooltip">Departamento</span>
            </li>
            <li>
                <a href="http://localhost:5174/emplelis">
                    <i class="fa fa-briefcase"></i>
                    <span class="link_names">Empleado</span>
                </a>
                <span class="tooltip">Empleado</span>
            </li>
            <li>
                <a href="http://localhost:5174/faclis">
                    <i class="fa fa-money"></i>
                    <span class="link_names">Factura</span>
                </a>
                <span class="tooltip">Factura</span>
            </li>
            <li>
                <a href="http://localhost:5174/pulis">
                    <i class="fa fa-id-badge"></i>
                    <span class="link_names">Puesto</span>
                </a>
                <span class="tooltip">Puesto</span>
            </li>
            <li>
                <a href="http://localhost:5174/rollis">
                    <i class="fa fa-address-card"></i>
                    <span class="link_names">Rol</span>
                </a>
                <span class="tooltip">Rol</span>
            </li>
            <li>
                <a href="http://localhost:5174/clili">
                    <i class="fa fa-child"></i>
                    <span class="link_names">Clientes</span>
                </a>
                <span class="tooltip">Clientes</span>
            </li>
            <li>
                <a href="http://localhost:5174/Login">
                    <i class="fa fa-close"></i>
                    <span class="link_names">Exit</span>
                </a>
                <span class="tooltip">Exit</span>
            </li>
        </ul>
    </div>
    <div>
        <div class="card">
            <div class="contenedor">
                <div class="iy">
                    Puestos
                </div>
                <div class="is">
                    <router-link :to="{ path: '/pucre' }" type="button" id="cre" class="btn btn-info">Crear
                        Puesto</router-link>
                    <button type="button" v-on:click="editarPuesto()" class="btn btn-warning">Editar</button>
                </div>
            </div>
            <div class="card_body">
                <table class="table">
                    <thead>
                        <tr>
                            <th>PkPuesto</th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="Puesto in Puestos" :key="Puesto.pkpuesto">
                            <td>{{ Puesto.pkpuesto }}</td>
                            <td>{{ Puesto.nombre }}</td>
                            <td>
                                <div class="btn-group" role="label" aria-label="">
                                    <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                                    |<button type="button" v-on:click="borrarPuesto(Puesto.pkpuesto)"
                                        class="btn btn-danger">
                                        Eliminar</button>|
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            Puestos: []
        }
    },
    created: function () {
        this.consultarArticulos()
    },
    methods: {
        consultarArticulos() {
            axios.get("https://localhost:7241/Puesto").then((result) => {
                console.log(result.data.result)
                this.Puestos = result.data.result;
            })
        },

        borrarPuesto(id) {
            console.log(id);

            axios.delete("https://localhost:7241/Puesto/" + id);

            window.location.href = 'pulis'
        },
        editarPuesto() {
            window.location.href = "/putPu";
        },
    },
};
</script>


<style scoped>
.contenedor {
    display: flex;
}

.iy {
    margin-left: 20px;
    margin-right: 150px;
    font-size: 20px;
}

.is {
    margin-right: 15px;
}

#cre {
    margin-right: 15px;
}
</style>
