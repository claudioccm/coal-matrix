// Maybe change this to Columns? 
// Or just adapt the .grid object to better fit this purpose

<template>
  <div class="split | center" :simetric=simetric :style="setMaxWidth()">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      maxWidth: {
        type: String,
        default: "80"
      },
      simetric: {
        type: Boolean,
        default: false
      }
    },

    methods: {
      setMaxWidth() {
        return {'--maxWidth': this.maxWidth }
      }
    }
  }
</script>

<style scoped>
.split {
  display: flex;
  justify-content: space-between;
  max-width: calc(var(--maxWidth)*1ch);
  margin-inline: auto;
  gap: var(--s2);
}

.split[simetric] > * {
  flex: 1;
}

</style>
