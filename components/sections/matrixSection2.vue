<template>
  <section class="matrix | center">
    <matrix-item pillar='1' phase='1' :resources='a11'>
        <p>Institutional Governance and Policies</p>
        <p>Stakeholder engagement and participatory planning</p>
        <p>Social inclusion policies</p>
        <p>Spatial Planning</p>
        <p>Coordination across stakeholders</p>
        <p>Political Economy, Stakeholder mapping and engagement</p>
        <p>Regional economic planning</p>
        <p>Energy transition planning</p>
    </matrix-item>

    <matrix-item pillar='2' phase='1'>
        <p>Introduction of improved HSE and Technical Closure Standards</p>
        <p>Special Purpose Entity SPE</p>
        <p>Feasibility studies of transition projects</p>
        <p>Social performance capacity building at regional., municipal and asset levels, including GRM, participatory monitoring</p>
    </matrix-item>
    
    <matrix-item pillar='3' phase='1'>
        <p>SPE coordination between government agencies and investors</p>
        <p>Market soundings of potential investments</p>
    </matrix-item>
    
    <matrix-item pillar='1' phase='2'>
        <p>Worker's policies and rights</p>
        <p>Assessment of short to medium term workforce transition</p>
        <p>Assessment of social impacts and social sustainability outcomes</p>
        <p>Strengthening social protection programs and service delivery capacity</p>
        <p>Identification of social transition projects</p>
    </matrix-item>

    <matrix-item pillar='2' phase='2'>
      <p>Implementation of social protection programs for workers and communities</p>
      <p>Roll out of re-skilling and re-education / active labor market policies</p>
      <p>Mobility assistance</p>
      <p>Support for broader social impacts (GBV, social tensions, alcoholism, etc.)</p>
    </matrix-item>
    
    <matrix-item pillar='3' phase='2'>
      <p>Long term education for jobs of the future</p>
      <p>SME business / skills development</p>
      <p>Access to financing capital</p>
      <p>Community driven development programs</p>
      <p>Smart village investments</p>
    </matrix-item>
    
    <matrix-item pillar='1' phase='3'>
      <p>Assessment of lands and assets for partial environmental remediation and repurposing</p>
      <p>Roles and responsibilities of State and enterprise</p>
      <p>Transfer of surface / sub-surface data and assessment of legacy infrastructure</p>
      <p>Fugitive methane abatement plan</p>
      <p>Community participation in plans for repurposing of land and assets</p>
    </matrix-item>
    
    <matrix-item pillar='2' phase='3'>
      <p>Physical closure / decommissioning to Technical standards</p>
      <p>Spatial planning / repurposing options</p>
      <p>Transfer of lands and assets to government / SPE entities</p>
    </matrix-item>
    
    <matrix-item pillar='3' phase='3'>
      <p>Environmental reclamation of prioritized lands and assets</p>
      <p>Pre-permitting of lands and assets to incoming investors</p>
      <p>New private sector investors</p>
      <p>Special purpose entities that finance private investors with community benefits sharing</p>
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
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  --measure: 1920px;
}
</style>
