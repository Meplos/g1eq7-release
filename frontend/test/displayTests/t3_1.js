const fetch = require("node-fetch");
const assert = require('assert');

const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

let project = {
  id: 1,
  name: "OkOk",
  start_date: "2020-11-12",
  state: "Ouvert",
  end_date: "2020-11-14",
  git_repo: null,
  description: "Projet de test",
}

let variables = [];

console.log("Test affichage correct des variables d'un projet")

fetch("http://localhost:3000/project/create", {
  method: "POST",
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(project)
})
.then(() => {
  driver.get("http://localhost:8080")
  driver.sleep(2000);
})
.then(() =>driver.findElements(By.className("start")))
.then((projects) => projects[projects.length-1].getText())
.then((start) => variables.push((start.split(" ")[2])))
.then(() =>driver.findElements(By.className("end")))
.then((projects) => projects[projects.length-1].getText())
.then((end) => variables.push((end.split(" ")[2])))
.then(() =>driver.findElements(By.className("v-card__title")))
.then((projects) => projects[projects.length-1].getText())
.then((title) => variables.push(title))
.then(() => {
  if(variables[0]==project.start_date && variables[1]==project.end_date && variables[2]==project.name){
    assert.ok(true);
  }
  else{
    assert.ok(false);
  }
  driver.quit();
})
