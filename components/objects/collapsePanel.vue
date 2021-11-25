<template>
  <div class="collapse">
    <button class="collapse__trigger" :aria-expanded="expanded" @click="toggle"><slot name="trigger"></slot></button>
    <section>
      <slot></slot>
    </section>
    <section class="collapse__content" :hidden="hidden">
        <slot name="collapsible"></slot>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        expanded: false,
        hidden: true
      }
    },
    methods: {
      toggle() {
        this.expanded = !this.expanded;
        this.hidden = !this.hidden;
      },
    },
  }
</script>

<style scoped>
.collapse__trigger { 
  cursor: pointer; 
  border-color: transparent;
  background: none;
  width: 100%;
}

.collapse__content {
    height: auto;
    max-height: 4000px;
    transition: max-height .3s;
  }

.collapse__content[hidden] {
  max-height: 0;
  overflow: hidden;
}
</style>
