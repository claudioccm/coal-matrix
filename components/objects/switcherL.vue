<template>
  <ul class="switcher" :style="setVariables()">
    <slot></slot>
  </ul>
</template>

<script>
  export default {
    props: {
      threshold: {
        type: String,
        default: "30rem"
      },
      columns: {
        type: String,
        default: "2"
      },
      space: {
        type: String,
        default: 'var(--s1)'
      }

    },

    methods: {
      setVariables() {
        return {
          '--threshold': this.threshold,
          '--space': this.space,
          '--columns': this.columns,
        }
      }
    }
  }
</script>

<style scoped>
.switcher {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space);
  list-style: none;
}

.switcher > * {
  flex-grow: var(--flex, 1);
  flex-basis: calc(( var(--threshold) - 100%) * 999);
}

.switcher > :nth-last-child(n+ var(--columns)),
.switcher > :nth-last-child(n+ var(--columns)) ~ * {
  flex-basis: 100%;
}
  
</style>
