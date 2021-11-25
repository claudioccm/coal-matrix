<template>
  <div class="reel" :scrollbar=scrollbar :itemWidth=itemWidth :style="setItemWidth()">
    <slot></slot>   
  </div>
</template>

<script>
  export default {
    props: {
      scrollbar: {
        type: Boolean,
        default: false
      },
      itemWidth: {
        type: String,
        default: '32ch'
      },
    },
    methods: {
      setItemWidth() {
        return {'--itemWidth': this.itemWidth }
      }
    }
  }
</script>

<style scoped lang="scss">
.reel {
  --space: var(--s1);
  --background-color: var(--base-ultralight-color);
  --color: var(--base-light-color);
  --reel-height: auto;
}

.reel {
  display: flex;
  height: var(--reel-height);
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-color: var(--color) var(--background-color);
  gap: var(--space);
  padding-inline: var(--space);
  scroll-snap-type: x mandatory;
  
  @media (min-width: 62em) { 
    justify-content: center;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }
  }
}

.reel[scrollbar=false]::-webkit-scrollbar,
.reel[scrollbar=false]::-webkit-scrollbar-track,
.reel[scrollbar=false]::-webkit-scrollbar-thumb { display: none; }

.reel[scrollbar]::-webkit-scrollbar { height: 1rem; }

.reel[scrollbar]::-webkit-scrollbar-track { background-color: var(--background-color); }

.reel[scrollbar]::-webkit-scrollbar-thumb {
  background-color: var(--background-color);
  background-image: linear-gradient(var(--background-color) 0, var(--background-color) 0.25rem, var(--color) 0.25rem, var(--color) 0.75rem, var(--background-color) 0.75rem);
}

.reel > * { flex: 0 0 var(--itemWidth); }


.reel > img {
  height: 100%;
  flex-basis: auto;
  width: auto;
}

.reel.overflowing { padding-bottom: var(--space); }
</style>
