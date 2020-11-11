import Vue from "vue";
import VueRouter from "vue-router";
import ListProject from "../components/ListProject.vue";
import Project from "../components/Project.vue";
import ProjectForm from "../components/ProjectForm.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/project",
    name: "Project",
    component: Project,
  },
  {
    path: "/createProject",
    name: "CreateProject",
    component: ProjectForm,
    props: { isEdit: false },
  },
  {
    path: "/",
    name: "Home",
    component: ListProject,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
