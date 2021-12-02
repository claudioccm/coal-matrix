<template>
  <section class="matrix">
    <div class="header column column3 | stack">
      <h5>pillar 1</h5>
      <h3>Institutional Governance</h3>
    </div>
    <div class="header column column3 | stack">
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

    <div class="block cell3 | stack">
      
    </div>
    <div class="block cell4 | stack">
      
    </div>
    <div class="block cell5 | stack">
      
    </div>
    <div class="block cell6 | stack">
      
    </div>
    <div class="block cell7 | stack">
      
    </div>
    <div class="block cell8 | stack">
      
    </div>
    <div class="block cell9 | stack">
      
    </div>
  </section>
</template>

<script>

</script>

<style scoped>
.matrix {
  margin-top: var(--s3);
  display: grid;
  height: 100%;
  grid-template-columns: 40px 1fr 1fr 1fr;
  grid-template-rows: 120px 1fr 1fr 1fr;
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
