<template>
  <div class="matrix-item" :active='active' @click="activate()">
    <div class="stack">
      <div class="base | stack">
        <div class="index">
          <span class="track">Phase <span class="phase">{{phase}}</span></span> 
          <span class="track">Pillar <span class="pillar">{{pillar}}</span></span>
        </div>
        <h3>
          <span v-if="phase == '1'">Pre-closure Planning</span>
          <span v-if="phase == '2'">Closure</span>
          <span v-if="phase == '3'">Regional Transition</span>
        </h3>
        <h4>
          <span v-if="pillar =='1'">Institutional Governance</span>
          <span v-if="pillar =='2'">People and Communities</span>
          <span v-if="pillar =='3'">Environmental Reclamation and Re-purposing of Land and Assets</span>
        </h4>

        <div class="resources" :disabled="resources.length > 0 ? false : true">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/></svg>
        </div>
        
      </div>
      <div class="extra">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: false
      }
    },
    props: {
      pillar: {
        type: String,
        default: ''
      },
      phase: {
        type: String,
        default: ''
      },
      resources: {
        type: Array,
        default() {
          return []
        } 
      }
    },
    methods: {
      activate() {
        this.active =  !this.active;
      }
    },
  }
</script>

<style scoped>
.matrix-item {
  display: flex;
  align-items: stretch;
  justify-content: stretch;
}


.matrix-item > div {
  width: 100%;
  width: -webkit-fill-available;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: var(--s-1);
  padding: var(--s1);
  background-color: #f4f6f7;
  transform: scale(1);
  transform-origin: center;
  transition: all .5s ease;
}

.matrix-item > div:hover {
  transform: scale(1.1);
  transition: all .5s ease;
  box-shadow: 4px 4px 16px hsla(var(--base-hsl), .3);
}


.base {
  text-align: center;
  gap: var(--s-3);
}

.index {
  font-family: var(--display-font);
  text-transform: uppercase;
  font-weight: 600;
  display: flex;
  gap: var(--s2);
  align-items: flex-end;
  justify-content: center;
  margin-bottom: var(--s1);
  height: 3rem;
  
}

.index .phase,
.index .pillar {
  position: absolute;
  bottom: -300%;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 6rem;
  opacity: .1;
  font-weight: 700;
  color: var(--base-color);
}

.index .track { 
  font-size: 80%; 
  position: relative;
  color: var(--primary-color);
}

h3, h4 {
  --space: 0;
  font-size: 100%;
  color: var(--base-color);
}

h3 {
  text-transform: uppercase;
  font-weight: 400;
  color:var(--base-color);
}

.matrix-item:not([active]) .extra { display: none; }

.matrix-item[active] > div {
  --maxWidth: 96vw;
  position: fixed;
  box-sizing: border-box;
  z-index: 1000;
  box-shadow: 4px 4px 16px hsla(var(--base-hsl), .3);
  width: var(--maxWidth);
  left:2vw;
  padding: var(--s4) var(--s2);
}

.matrix-item[active] > div:hover {
  transform: scale(1);
}


.resources svg { fill: var(--base-color); }
.resources[disabled] { opacity: .2; }


</style>
