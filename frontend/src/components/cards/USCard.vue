<template>
  <v-card
    class="usCard__container justify-center"
    max-width="230"
    max-height="230"
    draggable
    @dragstart="startDrag($event)"
  >
    <v-card-text>
      <div class="text--primary">{{ us.description }}</div>
    </v-card-text>
  </v-card>
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
      evt.dataTransfer.setData("usID", this.us._id);
    },
  },
};
</script>

<style>
.usCard__container {
  margin: 6px;
  background: #413d3d;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 33px;
}
</style>
