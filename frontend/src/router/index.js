import Vue from "vue";
import VueRouter from "vue-router";
import ListProject from "../components/ListProject.vue";
import Project from "../components/Project.vue";
import ProjectForm from "../components/form/ProjectForm.vue";
import USForm from "../components/form/USForm.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/project/:idProject",
    name: "Project",
    component: Project,
    props: true,
  },

  {
    path: "/project/:idProject/us/:idUS/modify",
    name: "ModifyUS",
    component: USForm,
    props: true,
  },
  {
    path: "/project/:idProject/us/createUS",
    name: "CreateUS",
    component: USForm,
    props: { isEdit: false },
  },
  {
    path: "/project/:idProject/modify/",
    name: "ModifyProject",
    component: ProjectForm,
    props: true,
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
