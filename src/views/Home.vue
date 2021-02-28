<template lang="pug">
  Header
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import { Button } from '@/components';
import Header from '@/views/Header.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Header,
    Button,
    HelloWorld,
  },
});
</script>
