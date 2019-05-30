<template>
  <svg
    class="VHLogo"
    :width="width"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 28"
    xml:space="preserve"
    role="presentation"
  >
    <path
      d="M7.6,4.5c2.7,4.9,5.4,9.7,8.1,14.6l0.8-1.4h5l-4.8,8.7L15.7,28L0.2,0h11.9L9.7,4.5H7.6z M15.9,0H18l-2.5,4.5
	h-2.1L15.9,0z M13,0H15l-2.5,4.5h-2.1L13,0z"
    />
    <path
      d="M21.9,4.7l-0.7,1.2h1.7L23,5.8l0.7-1.3h0l1.9-3.3l0-0.1L26.2,0h5l-0.6,1.1h0l-3.1,5.5l-5.4,9.8h-0.7h-4.3l2.7-5
	l0,0l0-0.1l0,0l0-0.1l0.1-0.1l0,0l0.4-0.7h-1.7l-0.8,1.5h0l-2.3,4.2l-2.3-4.2v0l-0.1-0.2C15,8.2,17.7,3.3,19.5,0h5L21.9,4.7z"
    />
  </svg>
</template>

<script>
export default {
  name: 'VhLogoMini',
  props: {
    /**
     *  Width: Number no units
     */
    width: {
      type: Number,
      default: 28,
    },
  },
};
</script>

<style scoped>
.VHLogo {
  height: auto;
  display: block;
  flex: 0 0 auto;
}

.VHLogo > path {
  fill: var(--color--white);
}
</style>
