// Tentei criar uma prop para configurar o tamanho da logo dentro
// do hero, mas não deu certo. Começou a duplcar as css variables setadas pelo vue

<template>
  <div class="hero-section" :style="setHeight()">
    <div class="hero-section__content | stack">
      <product-logo logo="minimal" :maxWidth=logoSize />
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      minHeight: {
        type: String,
        default: '36vh'
      },
      logoSize: {
        type: String,
        default: '34px'
      },
    },

    methods: {
      setHeight() {
        return {
          '--minHeight': this.minHeight
        }
      }
    }
  }
</script>

<style scoped>

.hero-section {
  background-color: hsla(var(--primary-dark-hsl),1);
  display: flex;
  justify-content: center;
  align-items: center;
  color: hsla(var(--light-hsl),1);
  min-height: var(--minHeight);
}

.hero-section__content {
  --space: var(--s-1);
  max-width: 80ch;
  text-align: center;
}

.hero-section__content > * {
  max-width: 60ch;
}

.hero-title {
  color: hsla(var(--accent-hsl),1);
  font-size: 2em;
  font-weight: 700;
}

.hero-title--alt {
  color:var(--white-color);
  font-size: 3.5em;
  font-weight: 300;
}

.hero-subtitle {
  font-size: 1em;
  font-weight: 500;
}

</style>
