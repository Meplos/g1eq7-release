<template>
  <div class="sprintList_container">
    <h1>
      Sprints
      <v-btn
        class="mx-2 success"
        fab
        @click="
          $router.push({
            name: 'CreateSprint',
            params: { isEdit: false, idProject: $route.params.idProject },
          })
        "
      >
        <v-icon> mdi-plus</v-icon>
      </v-btn>
    </h1>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
