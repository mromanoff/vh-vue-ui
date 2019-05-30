<template>
  <div class="Gallery u-sm-containerNoGutter">
    <div class="Gallery-label">
      <vh-label> {{ activeIndex + 1 }} / {{ images.length }} </vh-label>
    </div>
    <div class="Gallery-container">
      <vue-glide
        v-model="activeIndex"
        type="carousel"
        :gap="0"
        :per-view="1"
        @glide:run-after="handleSlideChange"
      >
        <!-- first image is not lazy loaded -->
        <vue-glide-slide>
          <vh-image
            class="Gallery-image"
            :src="`${baseImageUrl}${firstImage.source.medium}`"
            :alt="firstImage.description"
          />
        </vue-glide-slide>
        <template v-if="restImages && restImages.length">
          <vue-glide-slide
            v-for="(image, index) in restImages"
            :key="index"
          >
            <vh-image
              lazy
              class="Gallery-image"
              :src="`${baseImageUrl}${image.source.medium}`"
              :alt="image.description"
            />
          </vue-glide-slide>
        </template>
        <template slot="control">
          <vh-floating-button
            class="Gallery-directionButton Gallery-directionButton--left"
            size="small"
            data-glide-dir="<"
          >
            <vh-icon
              name="chevronLeft"
              size="small"
            />
          </vh-floating-button>
          <vh-floating-button
            class="Gallery-directionButton Gallery-directionButton--right"
            size="small"
            data-glide-dir=">"
          >
            <vh-icon
              name="chevronRight"
              size="small"
            />
          </vh-floating-button>
        </template>
      </vue-glide>
    </div>
  </div>
</template>

<script>
import { Glide, GlideSlide } from 'vue-glide-js';
// . import 'vue-glide-js/dist/vue-glide.css';

export default {
  name: 'VhGallery',
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
  },
  inheritAttrs: false,

  props: {
    /**
     * Images: array of objects
     */
    images: {
      type: Array,
      required: true,
    },

    /**
     * Loop gallery items
     */
    loop: {
      type: Boolean,
      default: false,
    },
    /**
     * Used internally by v-model for index
     */
    value: {
      type: [Number, String],
      default: 0,
    },
  },

  data() {
    return {
      activeIndex: this.value,
      baseImageUrl: process.env.baseImageUrl,
    };
  },

  computed: {
    computedClasses() {
      return {
        [`Gallery--${this.size}`]: this.size,
      };
    },
    firstImage() {
      return this.images[0];
    },
    restImages() {
      return this.images.slice(1);
    },
  },

  watch: {
    // v-model value updater
    value(val) {
      this.activeIndex = val;
    },
    // v-model emitter
    activeIndex(val) {
      this.$emit('input', val);
    },
  },

  methods: {
    handleSlideChange() {
      this.$emit('slide-change');
    },
  },
};
</script>

<style scoped>
/* BLOCK */

.Gallery {
  position: relative;

  & .glide {
    position: static;
  }

  & >>> .Gallery-directionButton {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    cursor: pointer;
    outline: none;
  }

  & >>> .Gallery-directionButton--left {
    left: var(--space--medium);
    right: auto;
  }

  & >>> .Gallery-directionButton--right {
    right: var(--space--medium);
    left: auto;
  }
}

/* ELEMENTS */

.Gallery-label {
  position: absolute;
  top: var(--space--xSmall);
  right: var(--space--medium);
  z-index: var(--z-index--low);
}

.Gallery-container {
  margin-left: auto;
  margin-right: auto;
}

>>> [data-glide-el='controls[nav]'] {
  & .glide__bullet {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--color--grey300);
    margin: 0 4px;
  }

  & .glide__bullet--active {
    background-color: var(--color--grey600);
    width: 9px;
    height: 9px;
  }
}

@media (--viewport--small) {
  .Gallery-directionButton {
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 50%;

    & >>> .Icon {
      width: var(--Icon-size--medium);
      height: var(--Icon-size--medium);
    }
  }
}

@media (--viewport--medium-up) {
  .Gallery-directionButton {
    padding: var(--space--medium);
  }

  .Gallery {
    & >>> .Gallery-directionButton {
      height: 48px;
      width: 48px;

      & .Icon {
        height: 36px;
        width: 36px;
      }
    }
  }

  .Gallery-container {
    width: 600px;
  }

  .Gallery-directionButton--left {
    left: 0;
  }

  .Gallery-directionButton--right {
    right: 0;
  }
}
</style>
