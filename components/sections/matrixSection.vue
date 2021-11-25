<template>
  <section class="matrix">
    <div class="header column column1 | stack">
      <h5>pillar 1</h5>
      <h3>Institutional Governance</h3>
    </div>
    <div class="header column column2 | stack">
      <h5>pillar 2</h5>
      <h3>People and Communities</h3>
    </div>
    <div class="header column column3 | stack">
      <h5>pillar 3</h5>
      <h3>Environmental Reclamation and Re-purposing of Land and Assets</h3>
    </div>

    <div class="header row row1 | stack">
      <h5>Phase 1</h5>
      <h3>Pre-closure Planning</h3>
    </div>
    <div class="header row row2 | stack">
      <h5>Phase 2</h5>
      <h3>Closure</h3>
    </div>
    <div class="header row row3 | stack">
      <h5>Phase 3</h5>
      <h3>Regional Transition</h3>
    </div>

    <div class="block cell1 | stack">
      <p>Institutional Governance and Policies</p>
      <p>Stakeholder engagement and participatory planning</p>
      <p>Social inclusion policies</p>
      <p>Spatial Planning</p>
      <p>Coordination across stakeholders</p>
      <p>Political Economy, Stakeholder mapping and engagement</p>
      <p>Regional economic planning</p>
      <p>Energy transition planning</p>
    </div>
    <div class="block cell2 | stack">
      <p>Introduction of improved HSE and Technical Closure Standards</p>
      <p>Special Purpose Entity SPE</p>
      <p>Feasibility studies of transition projects</p>
      <p>Social performance capacity building at regional., municipal and asset levels, including GRM, participatory monitoring</p>
    </div>
    <div class="block cell3 | stack">
      <p>SPE coordination between government agencies and investors</p>
      <p>Market soundings of potential investments</p>
    </div>
    <div class="block cell4 | stack">
      <p>Worker's policies and rights</p>
      <p>Assessment of short to medium term workforce transition</p>
      <p>Assessment of social impacts and social sustainability outcomes</p>
      <p>Strengthening social protection programs and service delivery capacity</p>
      <p>Identification of social transition projects</p>
    </div>
    <div class="block cell5 | stack">
      <p>Implementation of social protection programs for workers and communities</p>
      <p>Roll out of re-skilling and re-education / active labor market policies</p>
      <p>Mobility assistance</p>
      <p>Support for broader social impacts (GBV, social tensions, alcoholism, etc.)</p>
    </div>
    <div class="block cell6 | stack">
      <p>Long term education for jobs of the future</p>
      <p>SME business / skills development</p>
      <p>Access to financing capital</p>
      <p>Community driven development programs</p>
      <p>Smart village investments</p>
    </div>
    <div class="block cell7 | stack">
      <p>Assessment of lands and assets for partial environmental remediation and repurposing</p>
      <p>Roles and responsibilities of State and enterprise</p>
      <p>Transfer of surface / sub-surface data and assessment of legacy infrastructure</p>
      <p>Fugitive methane abatement plan</p>
      <p>Community participation in plans for repurposing of land and assets</p>
    </div>
    <div class="block cell8 | stack">
      <p>Physical closure / decommissioning to Technical standards</p>
      <p>Spatial planning / repurposing options</p>
      <p>Transfer of lands and assets to government / SPE entities</p>
    </div>
    <div class="block cell9 | stack">
      <p>Environmental reclamation of prioritized lands and assets</p>
      <p>Pre-permitting of lands and assets to incoming investors</p>
      <p>New private sector investors</p>
      <p>Special purpose entities that finance private investors with community benefits sharing</p>
    </div>
  </section>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.matrix {
  margin-top: var(--s3);
  display: grid;
  height: 100%;
  grid-template-columns: 40px 1fr 1fr 1fr;
  grid-template-rows: 40px 1fr 1fr 1fr;
  grid-template-areas:
    '. headerCol1 headerCol2 headerCol3'
    'headerRow1 cell1 cell2 cell3'
    'headerRow2 cell4 cell5 cell6'
    'headerRow3 cell7 cell8 cell9';
}


.block {
  margin: var(--s-1);
  background-color: #eee;
  transition: all .5s ease;
}

.block:hover {
  transform: scale(1.2);
  box-shadow: 0 0 16px rgba(0,0,0,0.1);
}

.block {
  padding: var(--s0);
}

.header > * {
  text-align: center;
  padding: var(--s0);
}

.header {
  white-space: nowrap;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
}

.header.row {
}

.header.row > * {
  transform: rotate(-90deg);
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;


}

.header.column {
  align-self: center;
}

.row1 {grid-area: headerRow1;}
.row2 {grid-area: headerRow2;}
.row3 {grid-area: headerRow3;}

.column1 {grid-area: headerCol1;}
.column2 {grid-area: headerCol2;}
.column3 {grid-area: headerCol3;}

.cell1 { grid-area: cell1; }
.cell2 { grid-area: cell2; }
.cell3 { grid-area: cell3; }
.cell4 { grid-area: cell4; }
.cell5 { grid-area: cell5; }
.cell6 { grid-area: cell6; }
.cell7 { grid-area: cell7; }
.cell8 { grid-area: cell8; }
.cell9 { grid-area: cell9; }



</style>
