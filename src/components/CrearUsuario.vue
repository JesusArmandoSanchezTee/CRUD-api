<template>
  <div class="container-fluid">
    <div class="card">
      <div class="card-header">Agregar Usuario</div>
      <div class="card-body">
        <form v-on:submit.prevent="formulario">
          <div class="row">
            <div class="col">

              <div class="form-group">
                <label for="user">user:</label>
                <input type="text" class="form-control" name="user" aria-describedby="helpId" id="user"
                  placeholder="usuario" v-model="Usuarios.user" />
                <small id="helpId" class="form-text" text-muted>Ingresa tu correo de usuario</small>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="password">Password:</label>
                <input type="text" class="form-control" name="password" id="password" aria-describedby="helpId"
                  placeholder="password" v-model="Usuarios.password" />
                <small id="helpId" class="form-text" text-muted>Ingresa tu contraseña</small>
              </div>
            </div>
          </div>
          <br>
          <div class="">
            <div class="form-group">
              <label for="fkEmpleado">fkEmpleado:</label>
              <br>
              <select class="input" name="fkEmpleado" id="fkEmpleado" v-model="Usuarios.fkEmpleado">
                <option v-for="emple in Empleado" value="emple.pkEmpleado" key="emple.pkEmpleado">{{ emple.nombre }}
                </option>
              </select>
            </div>
          <div class="row">

          </div>
            <div class="col">
              <div class="form-group">
                <label for="fkRol">fkRol:</label>
                <input type="text" class="form-control" name="fkRol" id="fkRol" aria-describedby="helpId"
                  placeholder="fkRol" v-model="Usuarios.fkRol" />
              </div>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="btn-group" role="group" id="botonesopcion">
              |<button type="submit" class="btn btn-outline-primary">Agregar</button>|
              |<router-link :to="{ name: 'listar' }" class="btn btn-outline-danger">Cancelar</router-link>|
            </div>
            <router-link :to="{ name: 'listar' }" class="btn btn-outline-primary" id="finaliza"
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
      Usuarios: {},
      smg: "",
      Empleado: [],
    };
  },
  created: function () {
    this.consultar();
  },
  methods: {
    consultar() {
      axios.get("https://localhost:7241/Empleado").then((result) => {
        console.log(result.data.result)
        this.Empleado = result.data.result;
      })
    },
    formulario() {
      const tiempoTranscurrido = Date.now();
      const hoy = new Date(tiempoTranscurrido);
      var cuerpo = {
        user: this.Usuarios.user,
        password: this.Usuarios.password,
        fechaRegistro: hoy.toISOString(),
        fkEmpleado: this.Usuarios.fkEmpleado,
        fkRol: this.Usuarios.fkRol
      };

      axios.post('https://localhost:7241/Usuarios', cuerpo).then((result) => {
        if (result.status == 200) {
          document.getElementById("alert").style.display = "block";
          document.getElementById('botonesopcion').style.display = "none";
          this.smg = "Se agrego el nuevo usuario";
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

label {
  font-weight: bold;
}

select{
    width: 80%;
}

.card-header {
  color: black;
}

label {
  color: black;
}
</style>