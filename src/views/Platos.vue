<template>
  <div class="hero is-dark">
    <div class="columns is-centered is-multiline hero-body">
      <div class="column is-6">
        <form class="box" v-on:submit.prevent="checkForm">
          <div class="field">
            <label class="label">Plato</label>
            <input
              type="text"
              value
              class="input column is-two-thirds"
              placeholder="Nombre del plato"
              v-model="Inputs.nombre"
            />
          </div>
          <div class="field">
            <label class="label">Precio</label>
            <input
              type="text"
              value
              class="input column is-4"
              placeholder="Precio del plato"
              v-model="Inputs.precio"
            />
          </div>
          <div class="field">
            <label class="label">Cantidad</label>
            <input
              type="text"
              value
              class="input column is-4"
              placeholder="Cantidad de platos"
              v-model="Inputs.cantidad"
            />
          </div>
          <div v-if="errors.length" class="notification is-danger">
            <!-- <button class="delete"></button> -->
            <b>Porfavor llena los siguientes campos</b>
            <ul>
              <li v-for="(error,index) in errors" :key="index">{{ error }}</li>
            </ul>
          </div>
          <hr class="hr" />
          <input type="submit" class="button is-primary" v-model="bSubmit" />
          <input
            type="button"
            class="button"
            v-if="bSubmit === 'Actualizar'"
            @click="bSubmit = 'Ingresar',Inputs.nombre='',Inputs.precio='',Inputs.cantidad='' "
            value="Cancelar"
          />
        </form>
      </div>
      <div class="column is-5">
        <div class="table-parent box">
          <table class="table is-bordered is-fullwidth">
            <thead>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
            </thead>
            <tbody>
              <tr v-for="(plato,index) in platos" :key="index">
                <td>{{plato.nombre}}</td>
                <td>{{plato.precio}}</td>
                <td>{{plato.cantidad}}</td>
                <td>
                  <button class="button is-danger is-small is-outlined" @click="deletePlato(plato)">
                    <span class="icon">
                      <i class="far fa-trash-alt"></i>
                    </span>
                  </button>
                </td>
                <td>
                  <a class="button is-info is-small is-outlined" @click="getEditPlato(plato)">
                    <span class="icon">
                      <i class="far fa-edit"></i>
                    </span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <notifications group="foo" />
  </div>
</template>
<script>
import Vue from "vue";
import { db } from "../db/db";
let platosRef = db.ref("platos");
var index = 0;

export default {
  name: "App",
  firebase: {
    platos: db.ref("platos")
  },
  data() {
    return {
      errors: [],
      iKey: "",
      bSubmit: "Ingresar",
      Inputs: {
        nombre: "",
        precio: "",
        cantidad: ""
      },
      platos: [
        {
          nombre: null,
          precio: null,
          cantidad: null
        }
      ]
    };
  },
  methods: {
    addPlato() {
      var typeN = "",
        titleN = "";
      if (this.bSubmit == "Ingresar") {
        typeN = "success";
        titleN = "ingreso";
        platosRef.push().set({
          nombre: this.Inputs.nombre,
          precio: this.Inputs.precio,
          cantidad: this.Inputs.cantidad
        });
      } else {
        typeN = "";
        titleN = "actualizo";
        platosRef.child(this.iKey).set({
          nombre: this.Inputs.nombre,
          precio: this.Inputs.precio,
          cantidad: this.Inputs.cantidad
        });
        this.bSubmit = "Ingresar";
      }
      this.Inputs.nombre = "";
      this.Inputs.precio = "";
      this.Inputs.cantidad = "";
      // this.errors = [];
      return this.Notify(
        typeN,
        "Se " + titleN + " correctamente",
        "Lista actualizada"
      );
    },
    deletePlato(plato) {
      if (confirm("Seguro que quiere eliminar este articulo ?")) {
        platosRef.child(plato[".key"]).remove();
        this.Notify("", "Se borro correctamente", "Lista actualizada");
      }
    },
    getEditPlato: function(plato) {
      this.iKey = plato[".key"];
      this.Inputs.nombre = plato.nombre;
      this.Inputs.precio = plato.precio;
      this.Inputs.cantidad = plato.cantidad;
      this.bSubmit = "Actualizar";
      this.errors = [];
    },
    checkForm: function(e) {
      this.errors = [];
      if (this.Inputs.nombre && this.Inputs.precio && this.Inputs.cantidad) {
        this.addPlato();
        // return true;
      } else {
        if (!this.Inputs.nombre) {
          this.errors.push("- Nombre requerido.");
        }
        if (!this.Inputs.precio) {
          this.errors.push("- Precio requerida.");
        }
        if (!this.Inputs.cantidad) {
          this.errors.push("- Cantidad requerida.");
        }
      }

      e.preventDefault();
    },
    Notify(tipo, title, text) {
      Vue.notify({
        group: "foo",
        title: title,
        type: tipo,
        text: text
      });
    }
  }
};
</script>

<style scoped>
</style>