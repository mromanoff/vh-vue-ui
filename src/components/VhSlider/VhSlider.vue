<template>
  <div class="VhSlider">
    <vue-glide
      ref="glide"
      v-model="activeIndex"
      bound
      :breakpoints="{
        767: {
          perView: 1.35,
          perTouch: 1,
        },
      }"
      :gap="8"
      :per-view="3.15"
      :per-touch="3"
    >
      <slot />
    </vue-glide>

    <no-ssr>
      <vh-floating-button
        v-show="showLeft"
        class="VhSlider-directionButton VhSlider-directionButton--left"
        size="small"
        @click="handleLeftClick"
      >
        <vh-icon
          name="chevronLeft"
          size="small"
        />
      </vh-floating-button>

      <vh-floating-button
        v-show="showRight"
        class="VhSlider-directionButton VhSlider-directionButton--right"
        size="small"
        @click="handleRightClick"
      >
        <vh-icon
          name="chevronRight"
          size="small"
        />
      </vh-floating-button>
    </no-ssr>
  </div>
</template>

<script>
import { Glide } from 'vue-glide-js';

export default {
  name: 'VhSlider',
  components: {
    [Glide.name]: Glide,
  },
  data() {
    return {
      activeIndex: 0,
      itemsPerView: 1,
    };
  },
  computed: {
    slidesTotal() {
      return this.$slots.default.length;
    },
    showLeft() {
      return this.activeIndex !== 0;
    },
    showRight() {
      return this.activeIndex < this.slidesTotal - Math.floor(this.itemsPerView);
    },
  },
  mounted() {
    if (window.innerWidth > 768) {
      this.itemsPerView = 3.15;
    } else {
      this.itemsPerView = 1.35;
    }
  },
  methods: {
    handleLeftClick() {
      const { activeIndex, itemsPerView } = this;
      const itemsPerViewFloor = Math.floor(itemsPerView);
      const potentialNewIndex = activeIndex - itemsPerViewFloor;
      const minimumIndex = 0;

      if (potentialNewIndex < minimumIndex) {
        this.activeIndex = minimumIndex;
      } else {
        this.activeIndex = activeIndex - itemsPerViewFloor;
      }
    },
    handleRightClick() {
      const { activeIndex, itemsPerView, slidesTotal } = this;
      const itemsPerViewFloor = Math.floor(itemsPerView);
      const potentialNewIndex = activeIndex + itemsPerViewFloor;
      const maximumIndex = slidesTotal - itemsPerViewFloor;

      if (potentialNewIndex > maximumIndex) {
        this.activeIndex = maximumIndex;
      } else {
        this.activeIndex = activeIndex + itemsPerViewFloor;
      }
    },
  },
};
</script>

<style scoped>
.VhSlider {
  position: relative;

  & >>> .VhSlider-directionButton {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    cursor: pointer;
    outline: none;
  }

  & >>> .VhSlider-directionButton--left {
    left: var(--space--medium);
    right: auto;
  }

  & >>> .VhSlider-directionButton--right {
    right: var(--space--medium);
    left: auto;
  }

  & >>> .glide__track {
    overflow-x: hidden;
    overflow-y: visible;
  }

  & >>> .glide__slides {
    overflow-x: hidden;
    overflow-y: visible;
    display: grid;
  }

  & >>> .glide__slide {
    grid-row: 1;
  }

  & >>> .glide__slide > *:first-child {
    height: 100%;
  }

  & >>> .Card-content {
    height: initial;
    margin-top: auto;
  }
}

@media (--viewport--medium-up) {
  .VhSlider {
    & >>> .VhSlider-directionButton {
      height: 48px;
      width: 48px;

      & .Icon {
        height: 36px;
        width: 36px;
      }
    }
  }
}

@media (--viewport--large-up) {
  .VhSlider {
    width: 836px;
  }
}
</style>
