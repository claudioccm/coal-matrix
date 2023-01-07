<template>
  <section class="matrix | center">
    <matrix-item pillar='1' phase='1' :resources='p1' period="10-18 months">
      <li>Institutional Governance  and Policies</li>
      <li>Stakeholder engagement and participatory planning</li>
      <li>Social inclusion policies</li>
      <li>Spatial Planning</li>
      <li>Coordination across stakeholders</li>
      <li>Political Economy, Stakeholder mapping & engagement</li>
      <li>Regional economic planning</li>
      <li>Energy transition planning</li>
    </matrix-item>

    <matrix-item pillar='2' phase='1' :resources='p2' period="10-18 months">
      <li>Worker’s policies & rights</li>
      <li>Assessment of short to medium term workforce transition</li>
      <li>Assessment of social impacts and social sustainability outcomes</li>
      <li>Strengthening Social Protection Programs and Service Delivery Capacity</li>
      <li>Identification of Social Transition Projects</li>
    </matrix-item>
    
    <matrix-item pillar='3' phase='1' :resources='p3' period="10-18 months">
      <li>Assessment of lands and assets for partial environmental remediation and repurposing</li>
      <li>Roles & Responsibilities of State and Enterprise</li>
      <li>Transfer of Surface / Sub-Surface data and assessment of legacy infrastructure</li>
      <li>Fugitive Methane Abatement Plan</li>
      <li>Community participation in plans for repurposing of land and assets</li>
    </matrix-item>
    
    <matrix-item pillar='1' phase='2' :resources='p1' period="2+ years">
      <li>Introduction of improved HSE and Technical Closure Standards</li>
      <li>Special Purpose Entity SPE</li>
      <li>Feasibility studies of transition projects</li>
      <li>Social performance capacity building at regional, municipal and asset levels, including GRM, participatory monitoring</li>
    </matrix-item>

    <matrix-item pillar='2' phase='2' :resources='p2' period="2+ years">
      <li>Implementation of social protection programs for workers and communities</li>
      <li>Roll out of Re-skilling and Re-Education / Active Labor Market Policies</li>
      <li>Mobility assistance</li>
      <li>Support for broader social impacts (GBV, social tensions, alcoholism, etc. </li>
    </matrix-item>
    
    <matrix-item pillar='3' phase='2' :resources='p3' period="2+ years">
      <li>Physical closure / decommissioning to Technical Standards</li>
      <li>Spatial planning / repurposing options</li>
      <li>Transfer of lands and assets to government / SPE entities</li>
    </matrix-item>
    
    <matrix-item pillar='1' phase='3' :resources='p1' period="5-10 years">
      <li>SPE coordination between government agencies and investors</li>
      <li>Market soundings of potential investments</li>
    </matrix-item>
    
    <matrix-item pillar='2' phase='3' :resources='p2' period="5-10 years">
      <li>Long term education for jobs of the future</li>
      <li>SME business / skills development </li>
      <li>Access to financing capital</li>
      <li>Community Driven Development programs</li>
      <li>Smart Village investments</li>
    </matrix-item>
    
    <matrix-item pillar='3' phase='3' :resources='p3' period="5-10 years">
      <li>Environmental reclamation of prioritized lands and assets</li>
      <li>Pre-permitting of  lands and assets to incoming investors</li>
      <li>New private sector investors</li>
      <li>Special purpose entities that finance  private investors with community benefits sharing</li>
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
        'p1': [
          {
            title: 'Strategy development',
            url: 'kp-strategy.pdf'
          },
          {
            title: 'Governance and institutions',
            url: 'kp-governance.pdf'
          },
          {
            title: 'Stakeholder engagement and communication',
            url: 'kp-stakeholders.pdf'
          }
        ],
        'p2': [
          {
            title: 'Workers and transition',
            url: 'kp-workers.pdf'
          },
          {
            title: 'Communities and transition',
            url: 'kp-communities.pdf'
          },
          {
            title: 'Enterprises and transition',
            url: 'kp-enterprise.pdf'
          }
        ],
        'p3': [
          {
            title: 'Environmental rehabilitation of mining sites and infrastructure',
            url: 'kp-environment.pdf'
          },  
          {
            title: 'Repurposing of mining sites and infrastructure',
            url: 'kp-mining.pdf'
          }
        ],
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
