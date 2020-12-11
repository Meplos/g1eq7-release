const fetch = require("node-fetch");
const assert = require('assert');

const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;


const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

let count_before = 0;

console.log("Test modification de projet");

driver.get("http://localhost:8080/");
driver.sleep(2000)
.then(() => fetch("http://localhost:3000/project"))
.then((res) => res.json())
.then((data) => count_before=data.projectList.length)
.then(() => driver.findElement(By.className("v-btn v-btn--contained theme--dark v-size--default success")))
.then((button) => {
    button.click();
    driver.sleep(2000);
})
.then(() => {
    let titre = driver.findElement(By.id("titre"));
    let desc = driver.findElement(By.id("description"));
    titre.sendKeys("CDP");
    desc.sendKeys("Initiation a CDP");
    driver.sleep(1000);

})
.then(() => driver.findElement(By.className("mr-6 v-btn v-btn--contained theme--dark v-size--default success")))
.then((button) => {
    button.click();
    driver.sleep(2000);
})
.then(() => driver.findElement(By.className("edit v-btn v-btn--flat v-btn--text theme--dark v-size--default warning--text")))
.then((button) => {
    button.click();
    driver.sleep(2000);
})
.then(() => {
    let titre = driver.findElement(By.id("titre"));
    let desc = driver.findElement(By.id("description"));
    titre.clear();
    desc.clear();
    titre.sendKeys("Modif");
    desc.sendKeys("Test de la modif");
    driver.sleep(1000);

})
.then(() => driver.findElement(By.className("mr-6 v-btn v-btn--contained theme--dark v-size--default success")))
.then((button) => {
    button.click();
    driver.sleep(2000);
    driver.quit();
})
.then(() => fetch("http://localhost:3000/project"))
.then((res) => res.json())
.then((data) => {
    if(data.projectList.length==count_before+1){
        assert.ok(true);
    }
    else{
        assert.ok(false);
    }
})