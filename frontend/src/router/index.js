import Vue from "vue";
import VueRouter from "vue-router";
import ProjectList from "../components/list/ProjectList.vue";
import Project from "../components/Project.vue";
import ProjectForm from "../components/form/ProjectForm.vue";
import USForm from "../components/form/USForm.vue";
import TaskForm from "../components/form/TaskForm";
import SprintForm from "../components/form/SprintForm.vue";
import ReleaseForm from "../components/form/ReleaseForm.vue";
import NotFound from "../components/NotFound.vue";
import Burndownchart from "../components/Burndownchart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/project/:idProject",
    name: "Project",
    component: Project,
    props: true,
  },
  {
    path: "/project/:idProject/tasks/create",
    name: "CreateTask",
    component: TaskForm,
    props: { isEdit: false },
  },
  {
    path: "/project/:idProject/release/create",
    name: "CreateRelease",
    component: ReleaseForm,
    props: { isEdit: false },
  },
  {
    path: "/project/:idProject/release/:idRelease/modify",
    name: "ModifyRelease",
    component: ReleaseForm,
    props: true,
  },

  {
    path: "/project/:idProject/burndownchart",
    name: "Burndownchart",
    component: Burndownchart,
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
    path: "/project/:idProject/sprint/create",
    name: "CreateSprint",
    component: SprintForm,
    props: { isEdit: false },
  },
  {
    path: "/project/:idProject/sprint/modify",
    name: "ModifySprint",
    component: SprintForm,
    props: true,
  },
  {
    path: "/project/:idProject/modify",
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
    path: "/404",
    name: "404",
    component: NotFound,
  },
  {
    path: "/",
    name: "Home",
    component: ProjectList,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
