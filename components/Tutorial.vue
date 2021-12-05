<template>
  <div>
    <h3 @click="onClick()">{{ value }}</h3>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      value: 'hoge',
    }
  },
  methods: {
    /**
     * click test
     */
    onClick() {
      const str = this.value
      console.log(str)
    },
  },
})
</script>
