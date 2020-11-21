const fetch = require("node-fetch");

const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

let count_before = 0;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get("http://localhost:8080/");
driver.sleep(2000)
.then(() => driver.findElement(By.className("v-btn v-btn--contained theme--dark v-size--default success")))
.then((button) => {
    button.click();
    driver.sleep(2000);
})
.then(() => {
    let titre = driver.findElement(By.id("input-15"));
    let desc = driver.findElement(By.id("input-18"));
    titre.sendKeys("CDP");
    desc.sendKeys("Initiation a CDP");
    driver.sleep(1000);

})
.then(() => driver.findElement(By.className("mr-6 v-btn v-btn--contained theme--dark v-size--default success")))
.then((button) => {
    button.click();
    driver.sleep(2000);
})
.then(() => driver.findElement(By.className("mr-6 v-btn v-btn--contained theme--dark v-size--default warning")))
.then((button) => {
    button.click();
    driver.sleep(2000);
})
.then(() => {
    let titre = driver.findElement(By.id("input-52"));
    let desc = driver.findElement(By.id("input-55"));
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
        console.log("ok")
    }
    else{
        console.log("non")
    }
})