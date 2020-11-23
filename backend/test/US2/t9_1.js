const fetch = require("node-fetch");

const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

let previousUSCount = 0;

console.log("Test création US");

driver.get("http://localhost:8080")
.then(() => driver.sleep(1000))
.then(() => driver.findElement(By.className("projectCard v-card v-sheet theme--dark elevation-2")))
.then((project) => project.click())
.then(() => driver.sleep(1000))
.then(() => driver.findElements(By.css("tr")))
.then((lignes) => previousUSCount=lignes.length)
.then(() => driver.findElement(By.className("mx-2 success v-btn v-btn--contained v-btn--fab v-btn--round theme--dark v-size--default")))
.then((button) => button.click())
.then(() => {
    let desc = driver.findElement(By.id("description"));
    desc.sendKeys("As a developper I wan't to add and US so I can manage them");
})
.then(() => driver.findElement(By.className("mr-6 v-btn v-btn--contained theme--dark v-size--default success")))
.then((button) => button.click())
.then(() => driver.sleep(2000))
.then(() => driver.findElements(By.css("tr")))
.then((lignes) => {
    if(lignes.length>previousUSCount){
        console.log("ok");
    }
    else{
        console.log("non");
    }
})
.then(() => driver.quit());

