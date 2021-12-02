<template>
  <article>      
    <center-l measure="100vw">
      <switcher-l>
        <hgroup>
          <h1>Closing Coal Production</h1>
          <h2>A just transition for all</h2>
        </hgroup>
        <stack-l>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deleniti laboriosam consequatur delectus, nobis illo, neque quidem et explicabo vitae suscipit expedita perferendis voluptatibus sit commodi atque. Modi, debitis soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deleniti laboriosam consequatur delectus, nobis illo, neque quidem et explicabo vitae suscipit expedita perferendis voluptatibus sit commodi atque. Modi, debitis soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deleniti laboriosam consequatur delectus, nobis illo, neque quidem et explicabo vitae suscipit expedita perferendis voluptatibus sit commodi atque. Modi, debitis soluta?</p>
          <p><strong>The World Bank's three-by-three assessment methodology dashboard supporting energy transitions in coal regions.</strong> Each cell defines an overall objective and contains many discrete activities.</p>
        </stack-l>
      </switcher-l>
    </center-l>

    <div class="matrix-section">
      <matrix-section-2 />
    </div>
      
    

  </article>
</template>

<script>
import baseSection from '@/components/sections/baseSection.vue'
import matrixSection2 from '@/components/sections/matrixSection2.vue'
import centerL from '@/components/objects/centerL.vue'
import switcherL from '@/components/objects/switcherL.vue'
import stackL from '@/components/objects/stackL.vue'

export default {
  components: {
    switcherL,
    centerL,
    stackL,
    matrixSection2,
    baseSection,
  }
}
</script>

<style scoped>
article {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.matrix-section {
  flex: 1;
  display: grid;
  height: 100%;
}

hgroup { text-align: left; }

@media (min-width: 36em) { 
    hgroup { 
      text-align: right; 
      --flex: 0;
    } 

    h1, h2 { white-space: nowrap; }
  }

  h1 { font-size: 140%; }
  h2 { font-size: 110%; }


  
</style>
