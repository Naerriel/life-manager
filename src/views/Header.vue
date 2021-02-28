<template lang="pug">
.header Jestem headerem i dobrze mi z tym
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
  components: {},
});
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';

.header {
  height: 50px;
  background-color: $color-light;
}
</style>
