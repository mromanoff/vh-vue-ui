<script>
import { VhVueUiSample } from './entry';
export default {
    name:  'VhVueUiLibDev', // vue library dev component
    components: {
        VhVueUiSample,
    },
}
</script>

<template>
    <div class="vh-vue-ui-lib-dev">
        <vh-vue-ui-sample></vh-vue-ui-sample>
    </div>
</template>

<style scoped>
    .vh-vue-ui-lib-dev {
        display: block;
        width: 400px;
        margin: 25px auto;
    }
</style>
