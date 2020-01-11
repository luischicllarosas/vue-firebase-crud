<template>
  <div id="app" class>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">Home</router-link>
          <router-link class="navbar-item" to="/platos">Platos</router-link>
        </div>
      </div>
    </nav>
    <router-view></router-view>

  </div>
</template>

<script>
import Vue from "vue";
// import { db } from "./db/db";
// let platosRef = db.ref("platos");
// var index = 0;

export default {
  //   name: "App",
  //   firebase: {
  //     platos: db.ref("platos")
  //   },
  //   data() {
  //     return {
  //       errors: [],
  //       iKey: "",
  //       bSubmit: "Ingresar",
  //       Inputs: {
  //         nombre: "",
  //         precio: "",
  //         cantidad: ""
  //       },
  //       platos: [
  //         {
  //           nombre: null,
  //           precio: null,
  //           cantidad: null
  //         }
  //       ]
  //     };
  //   },
  //   methods: {
  //     addPlato() {
  //       var typeN = '',titleN = ''
  //       if (this.bSubmit == "Ingresar") {
  //         typeN = "success";
  //         titleN = "ingreso";
  //         platosRef.push().set({
  //           nombre: this.Inputs.nombre,
  //           precio: this.Inputs.precio,
  //           cantidad: this.Inputs.cantidad
  //         });
  //       } else {
  //         typeN = "";
  //         titleN = "actualizo";
  //         platosRef.child(this.iKey).set({
  //           nombre: this.Inputs.nombre,
  //           precio: this.Inputs.precio,
  //           cantidad: this.Inputs.cantidad
  //         });
  //         this.bSubmit = 'Ingresar'
  //       }
  //       this.Inputs.nombre = "";
  //       this.Inputs.precio = "";
  //       this.Inputs.cantidad = "";
  //       // this.errors = [];
  //       return this.Notify(typeN,'Se '+ titleN +' correctamente','Lista actualizada');
  //     },
  //     deletePlato(plato) {
  //       if (confirm('Seguro que quiere eliminar este articulo ?')) {
  //         platosRef.child(plato[".key"]).remove();
  //         this.Notify('','Se borro correctamente','Lista actualizada')
  //       }
  //     },
  //     getEditPlato: function(plato) {
  //       this.iKey = plato[".key"];
  //       this.Inputs.nombre = plato.nombre;
  //       this.Inputs.precio = plato.precio;
  //       this.Inputs.cantidad = plato.cantidad;
  //       this.bSubmit = "Actualizar";
  //       this.errors = [];
  //     },
  //     checkForm: function(e) {
  //       this.errors = [];
  //       if (this.Inputs.nombre && this.Inputs.precio && this.Inputs.cantidad) {
  //         this.addPlato();
  //         // return true;
  //       }else{
  //         if (!this.Inputs.nombre) {
  //           this.errors.push("- Nombre requerido.");
  //         }
  //         if (!this.Inputs.precio) {
  //           this.errors.push("- Precio requerida.");
  //         }
  //         if (!this.Inputs.cantidad) {
  //           this.errors.push("- Cantidad requerida.");
  //         }
  //       }
  //       e.preventDefault();
  //     },
  //     Notify(tipo,title,text){
  //       Vue.notify({
  //         group: "foo",
  //         title: title,
  //         type: tipo,
  //         text: text
  //       });
  //     }
  //   }
};
</script>

<style scoped>
/* @import "~ /src/noty.scss"; */
/* @import "~noty/src/themes/mint.scss"; */

.table-parent {
  overflow-y: auto;
  max-height: 40vh;
}
/* width */
.table-parent::-webkit-scrollbar {
  width: 10px;
}

/* Track */
.table-parent::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
.table-parent::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
.table-parent::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>