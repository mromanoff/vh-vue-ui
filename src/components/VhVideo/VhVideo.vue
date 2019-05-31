<template>
  <div class="VhVideo">
    <div class="VhVideo-player">
      <div
        v-if="!loadPlayer"
        class="VhVideo-preview"
        @click="handlePreviewClick"
      >
        <div class="VhVideo-previewImageContainer">
          <img
            class="VhVideo-previewImage"
            :src="previewImgSrc"
          >
        </div>
        <div class="VhVideo-previewPlayButtonContainer">
          <vh-icon
            class="VhVideo-previewPlayButton"
            color="white"
            name="playCircle"
          />
        </div>
      </div>
      <no-ssr v-else>
        <youtube
          ref="youtube"
          :video-id="videoId"
          :player-vars="{ autoplay: 1 }"
          v-on="$listeners"
          @ready="handleForcePlay"
          @playing="handlePlaying"
          @paused="handlePaused"
        />
      </no-ssr>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VhVideoPreview',
  props: {
    /**
     * VhVideo will force play
     */
    forcePlay: {
      type: Boolean,
      default: false,
    },
    /**
     * VhVideoReview will choose quality of preview image
     */
    quality: {
      type: String,
      default: 'hqdefault',
      validator: value => {
        return value.match(/(default|sddefault|mqdefault|hqdefault|maxresdefault)/);
      },
    },
    /**
     * Youtube player will not load until clicked
     */
    lazy: {
      type: Boolean,
      default: false,
    },
    /**
     * Takes a YouTube video source for preview
     */
    videoId: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      loadPlayer: !this.lazy,
      isPlaying: false,
      isPaused: false,
    };
  },

  computed: {
    youtubePlayer() {
      return this.$refs.youtube ? this.$refs.youtube.player : null;
    },
    previewImgSrc() {
      return `https://i.ytimg.com/vi/${this.videoId}/${this.quality}.jpg`;
    },
  },
  watch: {
    loadPlayer(val) {
      if (val) this.$emit('load-player');
    },
  },
  methods: {
    handleForcePlay() {
      if (this.forcePlay) {
        this.play();
      }
    },
    handlePreviewClick() {
      this.loadPlayer = true;
    },
    handlePlaying() {
      this.isPlaying = true;
      this.isPaused = false;
    },
    handlePaused() {
      this.isPaused = true;
      this.isPlaying = false;
    },
    play() {
      this.youtubePlayer.playVideo();
    },
    pause() {
      this.youtubePlayer.pauseVideo();
    },
  },
};
</script>

<style scoped>
.VhVideo {
  /* BLOCK */
  background-color: #000;
}

.VhVideo-player {
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
}

.VhVideo-preview {
  position: relative;
  cursor: pointer;
  background-color: #000;
  width: 100%;
  height: 100%;
}

.VhVideo-player >>> iframe,
.VhVideo-player .VhVideo-preview {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}

.VhVideo-previewImageContainer {
  position: relative;
  height: 100%;
  overflow: hidden;
}

.VhVideo-previewImage {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: auto;
}

.VhVideo-previewPlayButtonContainer {
  cursor: pointer;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.VhVideo-previewPlayButton {
  width: 48px;
  height: 48px;
  opacity: 0.75;
}
</style>
