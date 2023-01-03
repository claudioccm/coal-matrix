<template>
  <div class="matrix-item" :active='active' @click="activate()">
    <div class="grid-item | stack">
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
        <h5>{{ period }}</h5>

        <div class="resources" :disabled="resources.length > 0 ? false : true">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/></svg>
        </div>
        
      </div>
    </div>

    <div class="modal | stack">
      <div class="modal-content">
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
        </div>
        <ul class="extra">
          <slot></slot>
        </ul>
        <ul v-if="resources.length > 0" class="files">
          <h4>Resources</h4>
          <li v-for="i in resources" :key="title"><a :href='`/files/${i.url}`' targe="_blank">{{i.title}}</a></li>
        </ul>
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
      period: {
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
    }
  
  }
</script>

<style scoped>
h3, h4 {
  --space: 0;
  font-size: 100%;
  color: var(--white-color);
}

h3 {
  text-transform: uppercase;
  font-weight: 400;
}

h4 {
  
}

h5 {
  position: relative;
  padding-bottom: var(--s1);
  color: white;
  font-size: 85%;
}

h5:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: -1rem;
  height: 4px;
  width: 80px;
  background-color: var(--primary-color);
}

.matrix-item {
  display: flex;
  align-items: stretch;
  justify-content: stretch;
}

.grid-item {
  width: 100%;
  width: -webkit-fill-available;
  display: flex;
  justify-content: center;
  margin: var(--s-1);
  padding: var(--s1);
  padding-left: 5rem;
  
  transform: scale(1);
  transform-origin: center;
  transition: all .5s ease;
  color: var(--white-color);
}

.grid-item, 
.modal-content {
  background-image: url('/images/bg.jpg');
  color: var(--white-color);
  background-size: cover;
}


.extra li {
  list-style: none;
  line-height: 1.3;
  padding-block: var(--s-1);
}

.extra li + li {
  border-top: 1px solid var(--white-color);
}

.matrix-item:not([active]) .modal { display: none; }

.matrix-item[active] .grid-item {
  opacity: .3;
}

.modal {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: hsla(var(--white-hsl), .8);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.matrix-item[active] .modal-content {
  --maxWidth: calc(100vw - 2rem);
  margin: 0;
  top: 10vh;
  padding: var(--s0);
  margin: var(--s0);
  width: 100%;
  position: fixed;
  box-sizing: border-box;
  z-index: 1000;
  box-shadow: 4px 4px 16px hsla(var(--black-hsl), .4);
  width: var(--maxWidth);
  left:0;
}

.matrix-item[active] .modal {

}

@media (min-width: 60em) {
  .matrix-item[active] .modal-content {
    --maxWidth: 100ch;  
    margin: 0 calc(50% - 50ch);
    top: unset;
    padding: var(--s4) var(--s2);
  }

  .matrix-item[active] .modal-content {
    /* padding-left: 4rem; */
  }
}


.resources {
  --space: var(--s1);
  text-align: center;
}
.resources svg { fill: var(--white-color); }
.resources[disabled] { opacity: .2; }


.files h4 { padding-bottom: 0; }
.files h4:after { display: none; }


ul {
  display: flex;
  flex-direction: column;
}

.base,
.extra,
.files,
li {
  max-width: 60ch;
  width: 100%;
  margin-left: auto;
}

li a {
  color: var(--color-white);
  text-decoration: underline;
}



</style>
