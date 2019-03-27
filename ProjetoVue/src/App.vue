<template>
<div>
  <h1>{{ titulo }}</h1>
  <ul>
    <li v-for="foto of fotos" :key="foto.id">
      <img :src="foto.url" :alt="foto.titulofoto">
    </li>
  </ul>
</div>
</template>

<script>
export default {
  data(){
    return{
      titulo:'ProjetoVue',
      fotos: [
        {
          url: "https://tudosobrecachorros.com.br/wp-content/uploads/Beagle-03.jpg",
          titulofoto: 'Cachorro beagle'
        },
        {
          url:"https://www.gpabrasil.com.br/wp-content/uploads/2018/03/nomes-de-cachorro.jpg",
          titulofoto: 'Cachorro2'
        }
      ]
    }
  }
}
</script>

<style>

</style>
