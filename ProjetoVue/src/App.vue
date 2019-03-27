<template>
<div>
  <h1>{{ titulo }}</h1>
  <img :src="foto.url" :alt="foto.titulofoto">
</div>
</template>

<script>
export default {
  data(){
    return{
      titulo:'ProjetoVue',
      foto: {
        url: "https://tudosobrecachorros.com.br/wp-content/uploads/Beagle-03.jpg",
        titulofoto: 'Cachorro beagle'
      }
    }
  }
}
</script>

<style>

</style>
