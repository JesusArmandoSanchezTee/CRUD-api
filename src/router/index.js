import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import ListarUsuario from "../components/ListarUsuario.vue"
import CrearUsuario from '../components/CrearUsuario.vue'
import ActualizarUsuario from '../components/ActualizarUsuario.vue'
import ListarRol from '../components/Rol_File/ListarRol.vue'
import CrearRol from '../components/Rol_File/CrearRol.vue'
import ActualizarRol from '../components/Rol_File/ActualizarRol.vue'
import ListarEmpleado from '../components/Empleado_File/ListarEmpleado.vue'
import CrearEmpleado from '../components/Empleado_File/CrearEmpleado.vue'
import ActualizarEmpleado from '../components/Empleado_File/ActualizarEmpleado.vue'
import ListaFactura from '../components/Factura_File/ListaFactura.vue'
import CrearFactura from '../components/Factura_File/CrearFactura.vue'
import ActualizarFactura from '../components/Factura_File/ActualizarFactura.vue'
import ListaPuesto from '../components/Puesto_File/ListaPuesto.vue'
import CrearPuesto from '../components/Puesto_File/CrearPuesto.vue'
import ActualizarPuesto from '../components/Puesto_File/ActualizarPuesto.vue'
import ListaDepartamento from '../components/Departamento_File/ListaDepartamento.vue'
import CrearDepartamento from '../components/Departamento_File/CrearDepartamento.vue'
import ActualizarDepartamento from '../components/Departamento_File/ActualizarDepartamento.vue'
import ListaCliente from '../components/Cliente_File/ListaCliente.vue'
import CrearCliente from '../components/Cliente_File/CrearCliente.vue'
import ActualizarCliente from '../components/Cliente_File/ActualizarCliente.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/listar",
      name: "listar",
      component: ListarUsuario
      // children:[{
      //   path: '/putUsuario',
      //       name: 'putUsuario',
      //       component: () => import('../components/ActualizarUsuario.vue')
      // }

      // ]
    },
    {
      path: "/emplelis",
      name: "emplelis",
      component: ListarEmpleado
    },
    {
      path: "/clili",
      name: "clili",
      component: ListaCliente
    },
    {
      path: "/rollis",
      name: "rollis",
      component: ListarRol
    },
    {
      path:"/delis",
      name: "delis",
      component: ListaDepartamento
    },
    {
      path: "/decre",
      name: "decre",
      component: CrearDepartamento
    },
    {
      path: "/pulis",
      name: "pulis",
      component: ListaPuesto
    },
    {
      path: "/pucre",
      name: "pucre",
      component: CrearPuesto
    },
    {
      path: "/faclis",
      name: "faclis",
      component: ListaFactura
    },
    {
      path: "/facre",
      name: "facre",
      component: CrearFactura
    },
    {
      path: "/crear",
      name: "crear",
      component: CrearUsuario
    },
    {
      path: "/rolcre",
      name: "rolcre",
      component: CrearRol
    },
    {
      path: "/emplecre",
      name: "emplecre",
      component: CrearEmpleado
    },
    {
      path: "/clicre",
      name: "clicre",
      component: CrearCliente
    },
    {
      path: '/Login',
      name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Login
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: "/putUsuario",
      name: "putUsuario",
      component: ActualizarUsuario
    },
    {
      path: "/putRol",
      name: "putRol",
      component: ActualizarRol
    },
    {
      path: "/putEmple",
      name: "putEmple",
      component: ActualizarEmpleado
    },
    {
      path: "/putFac",
      name: "putFac",
      component: ActualizarFactura
    },
    {
      path: "/putPu",
      name: "putPu",
      component: ActualizarPuesto
    },
    {
      path: "/putDe",
      name: "putDe",
      component: ActualizarDepartamento
    },
    {
      path: "/putCli",
      name: "putCli",
      component: ActualizarCliente
    }
  ]
})

export default router
