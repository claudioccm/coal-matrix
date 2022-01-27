<template>
  <section class="matrix | center">
    <matrix-item pillar='1' phase='1' :resources='a11' active>
        <li>Institutional Governance and Policies</li>
        <li>Stakeholder engagement and participatory planning</li>
        <li>Social inclusion policies</li>
        <li>Spatial Planning</li>
        <li>Coordination across stakeholders</li>
        <li>Political Economy, Stakeholder mapping and engagement</li>
        <li>Regional economic planning</li>
        <li>Energy transition planning</li>
    </matrix-item>

    <matrix-item pillar='2' phase='1'>
        <li>Introduction of improved HSE and Technical Closure Standards</li>
        <li>Special Purpose Entity SPE</li>
        <li>Feasibility studies of transition projects</li>
        <li>Social performance capacity building at regional., municipal and asset levels, including GRM, participatory monitoring</li>
    </matrix-item>
    
    <matrix-item pillar='3' phase='1'>
        <li>SPE coordination between government agencies and investors</li>
        <li>Market soundings of potential investments</li>
    </matrix-item>
    
    <matrix-item pillar='1' phase='2'>
        <li>Worker's policies and rights</li>
        <li>Assessment of short to medium term workforce transition</li>
        <li>Assessment of social impacts and social sustainability outcomes</li>
        <li>Strengthening social protection programs and service delivery capacity</li>
        <li>Identification of social transition projects</li>
    </matrix-item>

    <matrix-item pillar='2' phase='2'>
      <li>Implementation of social protection programs for workers and communities</li>
      <li>Roll out of re-skilling and re-education / active labor market policies</li>
      <li>Mobility assistance</li>
      <li>Support for broader social impacts (GBV, social tensions, alcoholism, etc.)</li>
    </matrix-item>
    
    <matrix-item pillar='3' phase='2'>
      <li>Long term education for jobs of the future</li>
      <li>SME business / skills development</li>
      <li>Access to financing capital</li>
      <li>Community driven development programs</li>
      <li>Smart village investments</li>
    </matrix-item>
    
    <matrix-item pillar='1' phase='3'>
      <li>Assessment of lands and assets for partial environmental remediation and repurposing</li>
      <li>Roles and responsibilities of State and enterprise</li>
      <li>Transfer of surface / sub-surface data and assessment of legacy infrastructure</li>
      <li>Fugitive methane abatement plan</li>
      <li>Community participation in plans for repurposing of land and assets</li>
    </matrix-item>
    
    <matrix-item pillar='2' phase='3'>
      <li>Physical closure / decommissioning to Technical standards</li>
      <li>Spatial planning / repurposing options</li>
      <li>Transfer of lands and assets to government / SPE entities</li>
    </matrix-item>
    
    <matrix-item pillar='3' phase='3'>
      <li>Environmental reclamation of prioritized lands and assets</li>
      <li>Pre-permitting of lands and assets to incoming investors</li>
      <li>New private sector investors</li>
      <li>Special purpose entities that finance private investors with community benefits sharing</li>
    </matrix-item>
  </section>
</template>

<script>
  import matrixItem from '@/components/modules/matrixItem.vue';
  
  export default {
    components: {
      matrixItem,
    },
    data() {
      return {
        'a11': [{
          title: 'Strategy development',
          url: '#'
        },
        {
          title: 'Governance and institutions',
          url: '#'
        },
        {
          title: 'Stakeholder engagement and communication',
          url: '#'
        }],
        'a12': [{
          title: 'Strategy development',
          url: '#'
        },
        {
          title: 'Governance and institutions',
          url: '#'
        },
        {
          title: 'Stakeholder engagement and communication',
          url: '#'
        }]

      }
    },
  }
</script>

<style scoped>
.matrix {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  --measure: 100vw;
}

@media (min-width: 60em) {
  .matrix {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    --measure: 1920px;
  }
  
}
</style>
