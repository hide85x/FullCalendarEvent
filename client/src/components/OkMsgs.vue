<template>
  <transition name="fade">
      <p>{{msg}}</p>
      <button class="close" @click="$emit('close')">X</button>
  </transition>
</template>

<script>
export default {
  name: 'OkMsgs',
  props: {
    msg: {
      type: String,
    },
  },
};
</script>

<style>
</style>