<template>
  <div class="taskCard__container" draggable @dragstart="startDrag($event)">
    <h1>{{ task.name }}</h1>
    <p>{{ task.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    task: Object,
  },
  methods: {
    startDrag(evt) {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("taskID", this.task.id);
    },
  },
};
</script>

<style>
.taskCard__container {
  width: 11vw;
  height: 20vh;
  margin: 30px;
  background: #5d5757;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}
</style>
