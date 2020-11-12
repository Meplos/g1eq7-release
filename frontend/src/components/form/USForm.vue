<template>
  <div class="usForm">
    <h1 v-if="isEdit">Edit</h1>
    <h1 v-else>Create US</h1>
    <v-form>
      <v-row>
        <v-col cols="12" sm="8">
          <v-textarea
            label="Description"
            filled
            :v-model="description"
            auto-grow
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="8">
          <v-select
            :items="typeList"
            label="Type"
            filled
            v-model="type"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="8">
          <v-select
            :items="stateList"
            label="State"
            filled
            v-model="state"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-btn color="success" class="mr-6" v-if="isEdit" @click="modify"
          >Save</v-btn
        >
        <v-btn color="success" class="mr-6" v-else @click="create">Add</v-btn>
        <v-btn color="error" @click="cancel" outlined>Cancel</v-btn>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  props: {
    isEdit: Boolean,
  },
  data() {
    return {
      description: "",
      type: "NewFeature",
      state: "OPEN",
      stateList: ["OPEN", "PLANNIFIED", "CLOSED"],
      typeList: ["NewFeature", "BugFix", "Test"],
    };
  },
  methods: {
    create() {
      console.log("Create ");
    },
    modify() {
      console.log("Modify...");
    },
    cancel() {
      console.log("Cancel");
    },
  },
};
</script>

<style></style>
