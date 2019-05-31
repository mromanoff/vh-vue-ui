<template>
  <div
    class="VhImage"
    :class="computedClasses"
  >
    <div
      v-if="backgroundImage"
      class="VhImage-backgroundContainer"
      :style="containerStyles"
    >
      <div
        class="VhImage-sizer"
        :style="sizerStyles"
      />
      <div
        class="VhImage-backgroundImage"
        role="img"
        :style="imageStyles"
        :aria-alt="alt"
      />
      <div
        v-if="lazy"
        v-observe-visibility="visibilityChanged"
        class="VhImage-backgroundImage"
        role="img"
        :style="imageStyles"
        :aria-alt="alt"
      />
    </div>
    <div
      v-else
      class="VhImage-imageContainer"
      :style="containerStyles"
    >
      <img
        v-if="lazy"
        v-observe-visibility="visibilityChanged"
        class="VhImage-image"
        :src="internalSrc"
        :alt="alt"
      >
      <img
        v-else
        class="VhImage-image"
        :src="internalSrc"
        :alt="alt"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'VhImage',
  props: {
    /**
     * Image description
     */
    alt: {
      type: String,
      required: true,
    },
    /**
     * Image will be background image
     */
    backgroundImage: {
      type: Boolean,
      default: false,
    },
    /**
     * Set height
     */
    height: {
      type: [Number, String],
      default: null,
    },
    /**
     * Add 1rem padding around image
     */
    padded: {
      type: Boolean,
      default: false,
    },
    /**
     * Prevents loading of image until visible
     */
    lazy: {
      type: Boolean,
      default: false,
    },
    /**
     * Image source
     */
    src: {
      type: String,
      required: true,
    },
    /**
     * Set width
     */
    width: {
      type: [Number, String],
      default: null,
    },
  },
  data() {
    return {
      calculatedAspectRatio: undefined,
      isActive: false,
    };
  },
  computed: {
    computedClasses() {
      return {
        'VhImage--padded': this.padded,
        'VhImage--setWidth': this.width,
      };
    },
    containerStyles() {
      return {
        width: this.width && `${this.width}px`,
        'max-width': this.width && `${this.width}px`,
        height: this.height && `${this.height}px`,
        'max-height': this.height && `${this.height}px`,
      };
    },
    imageStyles() {
      return {
        backgroundImage: `url(${this.src})`,
        backgroundPosition: 'center center',
      };
    },
    internalSrc() {
      if (this.lazy) {
        return this.isActive ? this.src : null;
      } else {
        return this.src;
      }
    },
    sizerStyles() {
      if (this.calculatedAspectRatio) {
        const paddingBottomPercentage = (1 / this.calculatedAspectRatio) * 100 + '%';
        return { paddingBottom: paddingBottomPercentage };
      } else return {};
    },
  },
  mounted() {
    if (this.backgroundImage) {
      this.initBackgroundImage();
    }
  },
  methods: {
    initBackgroundImage() {
      this.loadImage();
    },
    loadImage() {
      const image = new Image();
      image.src = this.src;
      this.pollForSize(image);
    },
    pollForSize(img, timeout = 100) {
      const poll = () => {
        const { naturalHeight, naturalWidth } = img;

        if (naturalHeight || naturalWidth) {
          this.calculatedAspectRatio = naturalWidth / naturalHeight;
        } else {
          setTimeout(poll, timeout);
        }
      };

      poll();
    },
    visibilityChanged(isVisible, entry) {
      if (!this.isActive && isVisible) {
        this.isActive = true;
      }
    },
  },
};
</script>

<style scoped>
/* BLOCK */

.VhImage {
  padding: 0;
}

/* ELEMENTS */

.VhImage-backgroundContainer {
  position: relative;
  overflow: hidden;
  flex: 1 0 auto;
  display: flex;
}

.VhImage-sizer {
  transition: padding-bottom 0.2s cubic-bezier(0.25, 0.8, 0.5, 1);
  flex: 0 0 0px;
}

.VhImage-backgroundImage {
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.VhImage-image {
  width: 100%;
  max-width: 100%;
  height: auto;
}

/* MODIFIERS */

.VhImage--setWidth {
  max-width: max-content;
}

.VhImage--padded {
  padding: var(--space--medium);
}
</style>
