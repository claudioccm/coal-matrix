<template>
  <div class="stack" :style="setSpace()">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      space: {
        type: String,
        default: ""
      }
    },

    methods: {
      setSpace() {
        return {'--space': this.space }
      }
    }
  }
</script>

<style>
/* 
=====
Stack
=====

<div class="stack">
  <div><!-- child --></div>
  <div><!-- child --></div>
  <div><!-- etc --></div>
</div>

https://absolutely.every-layout.dev/layouts/stack/#the-component

*/

.stack {
  --space: var(--s0);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.stack > * {
  margin-top: 0;
  margin-bottom: 0;
} 

.stack > * + * {
  margin-top: var(--space);
}
</style>
