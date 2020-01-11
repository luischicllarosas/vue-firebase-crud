<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <form v-on:submit.prevent="addNombre">
      <input class="input" type="text" placeholder="Nombre" v-model="newPlato.nombre" />
      <input class="input" type="text" placeholder="Costo del plato" v-model="newPlato.costo" />
      <button class="button is-primary has-margin">Agregar</button>
    </form>
    <hr />
    <table class="table is-bordered">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Costo del plato</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
  </div>
</template>

<script>
import Firebase from "firebase"
import 'firebase/firestore'
let config = {
  apiKey: "AIzaSyDsga5PYGs6nbOz4OBE_qKew6kt231KnNE",
  authDomain: "fir-b46af.firebaseapp.com",
  databaseURL: "https://fir-b46af.firebaseio.com",
  projectId: "fir-b46af",
  storageBucket: "fir-b46af.appspot.com",
  messagingSenderId: "695775373770",
  appId: "1:695775373770:web:c8665fae8d36d228fb0733"
}
let db = Firebase.initializeApp(config).database();
// let db = con.database();

let platosRef = db.ref("platos");
// console.log(this.lista);
// console.table(platosRef)

export default {
  name: "App",

  data(){
    totalPlatos : []
    return {
      newPlato: {
        nombre: '',
        costo: '',
        url : ''
      }
    };
  },
  methods: {
    addNombre(){
      platosRef.push(this.newPlato)
    }
  },
  firestore: {
    todos: db.collection('platos'),
  },
  
};
</script>

<style>
</style>
