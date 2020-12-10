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
    git_repo: "https://github.com/max98hash/g1eq7-dev",
    description: "Projet de test"
}

console.log("Test affichage correct des données dans le projet")

let compareProject = {}

function projectsAreEquals(project,compareProject){
    if(project.name==compareProject.name && project.start_date==compareProject.start && project.end_date==compareProject.end && project.git_repo==compareProject.git && project.description==compareProject.description){
        assert.ok(true);
    }
    else{
        assert.ok(false);
    }
}

fetch("http://localhost:3000/project/create", {
  method: "POST",
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(project)
})
.then(() => driver.get("http://localhost:8080"))
.then(() => driver.sleep(2000))
.then(() => driver.findElements(By.id("projet")))
.then((projets) => projets[projets.length-1])
.then((lastProject) => lastProject.click())
.then(() => driver.sleep(2000))
.then(() => driver.findElement(By.id("name")).getText())
.then((name) => compareProject.name=name)
.then(() => driver.findElement(By.id("start")).getText())
.then((start) => compareProject.start=start.split(" ")[1])
.then(() => driver.findElement(By.id("end")).getText())
.then((end) => compareProject.end=end.split(" ")[1])
.then(() => driver.findElement(By.id("description")).getText())
.then((description) => compareProject.description=description)
.then(() => driver.findElement(By.id("git")).getText())
.then((git) => compareProject.git=git)
.then(() => projectsAreEquals(project,compareProject))
.then(() => driver.quit())