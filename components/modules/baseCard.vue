<template>
  <div class="base-card" :class=customClass :id="cardSlug">
    <div class="base-card__content | stack">
      <!-- 
        ACCESSIBILITY ISSUE:
        Right now we have the H2, h3, h4 tags hard coded. We might be able to customize that via props?
      -->
      <h3 v-if="cardBrow">{{cardBrow}}</h3>

      <h2 v-if="cardUrl"><nuxtLink :to="cardUrl">{{cardHeading}}</nuxtLink></h2>
      <h2 v-else-if="cardSlug"><nuxtLink :to="`activities/${cardSlug}/`">{{cardHeading}}</nuxtLink></h2>
      <h2 v-else>{{cardHeading}}</h2>
      
      <h4 v-if="cardTagline">{{cardTagline}}</h4>

      <p v-if="cardExcerpt">{{cardExcerpt}}</p>

      <!-- <span class="button" data-color="primary" aria-hidden="true" :id="cardHeading | slugify">{{ cardActionLabel }}</span> -->
      <span v-if="cardUrl" class="button" data-color="primary" aria-hidden="true" :id="cardHeading | slugify"><nuxtLink :to="cardUrl">More Info</nuxtLink></span>
      <span v-else class="button" data-color="primary" aria-hidden="true" :id="cardHeading | slugify" ><nuxtLink :to="`activities/${cardSlug}/`">More Info</nuxtLink></span>

    </div>
    <div v-if=cardImage class="base-card__img frame">
      <img v-if=cardImageUrl :src=cardImage :alt=cardImageDescription>
      <img v-else src="images/d4d-card-default.svg" alt="D4D.net | Data for Development">
    </div>
  </div>

</template>

<script>
  export default {
    props: {
      cardBrow: {
        type: String,
        default: ''
      },
      cardHeading: {
        type: String,
        default: ''
      },
      cardSlug: {
        type: String,
        default: ''
      },
      cardTagline: {
        type: String,
        default: ''
      },
      cardExcerpt: {
        type: String,
        default: ''
      },
      cardUrl: {
        type: String,
        default: ''
      },
      cardActionLabel: {
        type: String,
        default: 'Read More'
      },
      cardImage: {
        type: Boolean,
        default: false
      },
      cardImageUrl: {
        type: String,
        default: ''
      },
      cardImageDescription: {
        type: String,
        default: ''
      },
      customClass: {
        type: String,
        default: ''
      }
    },
   }

// NÃO SEI O QUE FAZER COM ESSE JS
    // // Function to apply proxy click event on all cards
    // function cardsInit(items) {
    //   const cards = document.querySelectorAll(items);  
    //   Array.prototype.forEach.call(cards, card => {  
    //       let down, up, link = card.querySelector('h2 a');
    //       card.onmousedown = () => down = +new Date();
    //       card.onmouseup = () => {
    //           up = +new Date();
    //           if ((up - down) < 200) {
    //               link.click();
    //           }
    //       }
    //   });
    // }

    // cardsInit('.js-card');


</script>

<style lang="scss" scoped>
/* Structure */
/* It is very unlikely we will need to work on any of the styles below */
.base-card {
  cursor: pointer;
  overflow: hidden;
  scroll-snap-align: start;
}

.base-card, 
.base-card__content {
  display: flex;
  flex-direction: column;
}

.base-card__content {
  order: 1;
  flex-grow: 1;
  max-width: var(--measure);
}

.base-card__content > :last-child { margin-top: auto; }
.base-card__content > :nth-last-child(2) { margin-bottom: var(--s-1); }
.base-card__img { 
  margin-bottom: 0; 
  --n: 5;
  --d: 16;
}

.base-card__img img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

// Temp solution. The official one will have the JS redirect location, instead of the nuxtLink.
.base-card .button a { text-decoration: none; }

.base-card small a {
  position: relative;
  padding: var(--s-2) var(--s-2) var(--s-2) 0;
}

/* Accessibility styles for tab navigation */
.base-card h2 a:focus { text-decoration: underline; }
.base-card h2:focus-within ~ .button { box-shadow: 0 0 0 0.125rem hsla(var(--accent-hsl), 1); }
.base-card:focus-within h2 a:focus { text-decoration: none; }

.card-grid {
  --card-min: 15rem;
}

/* This file has deeper configurations for the card */

.base-card {
  --card-border: 1px solid var(--base-ultralight-color);
  --card-shadow: var(--base-shadow);
  --card-border-radius: 0;
  --card-padding: var(--s1);
  --card-bg: var(--white-color);
}

/* Selectors for the inner element of the card */
.base-card {
  text-align: left;
  background-color: var(--card-bg);
  color: var(--base-light-color);
  
  h4 {
    font-size: 85%;
    letter-spacing: .5px;
    color: inherit;
    font-weight: 400;
  }

  h2 { font-size: 135%; }
  
  h2 a { 
    color: inherit; 
    text-decoration: none;
  }

  h2 a:hover {
    color: var(--accent-dark-color);
    text-decoration: underline;
  }
  
  h3 {
    font-size: 100%;
    font-weight: 600;
    color: hsla(var(--base-hsl), .6);

  }
  p { font-weight: 200; }
  p a {  }
  small {  }
  small a {  }
}

.base-card { 
/* Internal styling for the card. Using the fallback from --base variables */
  border: var(--card-border);
  box-shadow: var(--card-shadow);
  border-radius: var(--card-border-radius);
}

/* Hover Effect for the Card*/
.base-card:hover { box-shadow: var(--card-shadow); }

/* Internal padding for the card__content */
.base-card__content { padding: var(--card-padding); }

/* vertical spacing (stack) */
.base-card__content > * + * { margin-top: var(--s-1); }

</style>

