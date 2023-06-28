<script>
export default {
  props: {
    name: { String, required: true },
    cost: String,
    img: String,
    index: Number
  },
  methods: {}
}
</script>

<template>
  <div
    @click="$emit('my-champions', { name, img, cost, index }), $emit('refresh-composition')"
    class="mx-auto grid justify-center items-center w-5/5 sm:w-4/5"
  > 
    <span class="hidden sm:flex text-xs text-ellipsis overflow-hidden">{{ name }}</span>
    <div class="">
      <div :class="`h-full w-full border-solid border-4 cost${cost}`">
        <img :src="img" class="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.cost1 {
  border-color: #808080;
}
.cost2 {
  border-color: #1ab187;
}
.cost3 {
  border-color: #2077c3;
}
.cost4 {
  border-color: #b83ccc;
}
.cost5 {
  border-color: #ffb93b;
}
</style>
