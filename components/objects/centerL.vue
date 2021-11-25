<template>
  <div class="center" :style="setMeasure()" :size=this.size>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      measure: {
        type: String,
        default: ""
      },

      size: {
        type: String,
        default: ""
      }
    },

    methods: {
      setMeasure() {
        return {'--measure': this.measure }
      }
    }
  }
</script>

<style>
/*
======
Center
======

https://absolutely.every-layout.dev/layouts/center/#the-generator

*/

.center {
  /* max-width: min(90%, 996px); */
  max-width: var(--measure, 80ch);
  box-sizing: content-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--s0);
  padding-right: var(--s0);
}


/* 
Testes para as configurações do componente.
Acho q devemos manter essas larguras em ch, para que fiquem
mais responsivas e menos travadas pelos PX.

*/

.center[size="narrow"] { --measure: min(90%, 720px); }
.center[size="wide"] { --measure: min(90%, 1080px); }

/* 

Larguras antigas herdadas do DS anterior
.center[width="wrapper"] { --measure: var(--wrapper); }
.center[width="narrow"] { --measure: var(--narrow);  } 
*/

</style>
