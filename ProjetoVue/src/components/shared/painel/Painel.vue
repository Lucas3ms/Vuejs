<template>
    <div class="painel"> 
        <h2 class="painel-titulo" @dblclick="visible = !visible">{{ titulo }}</h2>
        <transition name="painel-fade">
          <div class="painel-conteudo" v-show="visible">
            <slot></slot>
          </div>
        </transition>  
    </div>    
</template>

<script>
export default {
    props: ['titulo'] ,

    data() {
      return {
        visible: true
      } 
    }
}
</script>

<style scoped>

  /* estilo do painel */ 

  .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 15px;
    box-shadow: 10px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .painel .painel-titulo {
    text-align:  center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 0px 0;
    padding: 10px;
    text-transform: uppercase;
  }

  * {
    box-shadow: 5px 5px 5px;
  }

  .painel-fade-enter, .painel-fade-leave-active {

    opacity: 0;
  }
  
  .painel-fade-enter-active, .painel-fade-leave-active {

    transition: .4s;
  }

</style>
