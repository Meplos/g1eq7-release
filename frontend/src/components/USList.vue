<template>
  <div class="usList__container">
    <h1>User Stories</h1>

    <v-simple-table class="mt-10 mr-10">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left" id="id">
              Id
            </th>
            <th class="text-center" id="description">
              Description
            </th>
            <th class="text-left" id="importance">
              Importance
            </th>
            <th class="text-left" id="difficulty">
              Difficulty
            </th>
            <th class="text-left" id="sprint">
              Sprint
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="us in usList"
            :key="us.id"
            @click="
              $router.push({
                name: 'ModifyUS',
                params: {
                  projectId: $route.params.projectId,
                  idUS: us.id,
                  us: us,
                  isEdit: true,
                },
              })
            "
          >
            <td>{{ us.id }}</td>
            <td>{{ us.description.substring(0, 250) }}</td>
            <td>{{ us.importance }}</td>
            <td>{{ us.difficulty }}</td>
            <td>{{ us.sprint }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      usList: [
        {
          id: 1,
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo ab iste recusandae eaque inventore reiciendis culpa, adipisci unde quaerat, dolore enim quos qui reprehenderit dolor aliquam, illum ut amet omnis?",
          difficulty: 1,
          importance: 1,
          sprint: 1,
        },
        {
          id: 2,
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo ab iste recusandae eaque inventore reiciendis culpa, adipisci unde quaerat, dolore enim quos qui reprehenderit dolor aliquam, illum ut amet omnis?",
          difficulty: 2,
          importance: 1,
          sprint: 1,
        },
        {
          id: 3,
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo ab iste recusandae eaque inventore reiciendis culpa, adipisci unde quaerat, dolore enim quos qui reprehenderit dolor aliquam, illum ut amet omnis?",
          difficulty: 1,
          importance: 1,
          sprint: 2,
        },
        {
          id: 4,
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo ab iste recusandae eaque inventore reiciendis culpa, adipisci unde quaerat, dolore enim quos qui reprehenderit dolor aliquam, illum ut amet omnis?",
          difficulty: 1,
          importance: 1,
          sprint: 2,
        },
      ],
    };
  },
};
</script>

<style></style>
