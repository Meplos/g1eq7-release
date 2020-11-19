<template>
  <div class="usCard__container" draggable @dragstart="startDrag($event)">
    <h1>{{ us.id }}</h1>
    <p>{{ us.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    us: Object,
  },
  mounted() {},
  methods: {
    startDrag(evt) {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("usID", this.us.id);
    },
  },
};
</script>

<style>
.usCard__container {
  width: 145px;
  height: 195px;
  margin: 6px;
  background: #413d3d;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 33px;
}
</style>
