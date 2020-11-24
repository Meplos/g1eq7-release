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

console.log("Test redirection après clic sur un projet")

let id = 0;

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
.then(() => driver.findElements(By.className("col-sm-4 col-12")) )
.then((projects) => {
    return projects[projects.length-1].findElement(By.css("a"));
})
.then((link) => {
    return link.getAttribute("href")
})
.then((link) => {
    id = link.split("/")[4];
})
.then(() => driver.findElements(By.className("col-sm-4 col-12")) )
.then((projects) => {
    projects[projects.length-1].click();
    driver.sleep(2000);
    return driver.getCurrentUrl();
})
.then((url) => {
    driver.quit();
    if(url=="http://localhost:8080/project/"+id){
        assert.ok(true);
    }
    else{
        assert.ok(false);
    }
})