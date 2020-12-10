const fetch = require("node-fetch");
const assert = require('assert');

const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

let count = 0;

console.log("Test affichage du bon nombre de projets")

fetch('http://localhost:3000/project')
.then(res => res.json())
.then(res => {
    count = res.projectList.length
    driver.get('http://localhost:8080/');
})
.then(() => driver.sleep(2000))
.then(() => driver.findElements(By.className("projectCard mx-auto v-card v-sheet v-sheet--shaped theme--dark elevation-22")) )
.then((projects) => {
    driver.quit();
    if(projects.length==count){
        assert.ok(true);
    }
    else{
        assert.ok(false);
    }
})



