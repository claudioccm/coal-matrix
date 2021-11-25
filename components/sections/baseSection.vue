<template>
  <section class="base-section" :color="color" :size="size" :text-align="textAlign" :class="classes">
    <slot></slot>
  </section>
</template>

<script>
  export default {
    // color: "base",
    // size: "medium"
    props: {
      color: {
        type: String,
        default: 'white'
      },

      size: {
        type: String,
        default: 'medium'
      },

      width: {
        type: String,
        default: ''
      },

      textAlign: {
        type: String,
        default: ''
      },

      classes: {
        type: String,
        default: ''
      }
    },
  }

</script>

<style lang="scss">
.base-section {
  --color: currentColor;
  --background: transparent;
  --padding: var(--s3); /* fallback value for the padding. Configurable via data-size keywords */

padding-top: var(--padding);
  padding-bottom: var(--padding);
  background: var(--background);
  color: var(--color);
  position: relative;

h2 {
    font-size: 2em;
    font-weight: 700;
  }
}

.base-section * { color: var(--color); }

/* Configs for the Base Section */

/* Colors */
.base-section[color="base-faded"] { 
  --background: hsla(var(--base-hsl), .1); 
  --color: var(--base-color);
  h2 {
    color: hsl(var(--dark-hsl));
  }
}

.base-section[color="base"] { 
  --background: hsla(var(--base-hsl), 1); 
  --color: var(--white-color);
}

.base-section[color="primary"] { 
  --background: hsla(var(--primary-hsl), 1); 
  --color: var(--white-color);
}

.base-section[color="primary-white"] { 
  --background: hsla(var(--primary-hsl), 1); 
  --color: var(--white-color);
}

.base-section[color="primary-faded"] { 
  --background: hsla(var(--primary-hsl), .05); 
  --color: var(--primary-color);
}

.base-section[color="secondary"] { 
  --background: hsla(var(--secondary-hsl), 1); 
  --color: var(--white-color);
}

.base-section[color="secondary-faded"] { 
  --background: hsla(var(--secondary-hsl), .3); 
  --color: var(--secondary-color);
}

.base-section[color="accent"] { 
  --background: hsla(var(--accent-hsl), 1); 
  --color: var(--white-color);
}

.base-section[color="accent-faded"] { 
  --background: hsla(var(--accent-hsl), .3); 
  --color: var(--accent-color);
}

.base-section[color="light"] { 
  --background: hsla(var(--highlight-hsl), 0.05); 
}

.base-section[color="lighter"] { 
  --background: hsla(var(--lighter-hsl), 1); 
}

.base-section[color="light-highlight"] { 
  --background: hsla(var(--highlight-hsl), .1); 
}




.base-section[size="small"]  { --padding: var(--s1); }
.base-section[size="medium"] { --padding: var(--s3); }
.base-section[size="large"]  { --padding: var(--s4); }
.base-section[size="giant"]  { --padding: var(--s5); }

.base-section[width="bleed"] {
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
}

.base-section[text-align="center"]  { text-align: center }
.base-section[text-align="right"]  { text-align: right }
.base-section[text-align="left"]  { text-align: left }

// .subtle {
//   p {
//     font-weight: 400;
//     color: #DEE6EA;
//   }

//   p.subtitle {
//     font-weight: 500;
//     margin: 24px 0 16px;
//     color: var(--white-color);
//   }
// }

// .divider {
//   position: absolute;
//   top: 0;
//   left: 50%;
//   bottom: 0;
//   background-color: #E6EBED;
//   display: block;
//   width: 1px;
//   transform: translateX(-50%);
//   @media (max-width: 36em) {
//     display: none;
//   }
// }

</style>
