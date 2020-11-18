const fetch = require("node-fetch");

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
.then(() => driver.findElements(By.className("projectList__item")) )
.then((projects) => {
    driver.quit();
    if(projects.length==count){
        console.log("ok")
    }
    else{
        console.log("non")
    }
})



