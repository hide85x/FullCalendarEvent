<template>
  <transition name="fade">
      <p>{{msg}}</p>
      <button class="close" @click="$emit('close')">X</button>
  </transition>
</template>

<script>
export default {
  name: 'ErrorMsgs',
  props: {
    msg: {
      type: String,
    },
  },
};
</script>

<style>
</style>