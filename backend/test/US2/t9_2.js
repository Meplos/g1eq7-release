const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

let previousUS = {
    desc: ""
};

console.log("Test modification US");

driver.get("http://localhost:8080")
.then(() => driver.sleep(1000))
.then(() => driver.findElement(By.className("projectCard v-card v-sheet theme--dark elevation-2")))
.then((project) => project.click())
.then(() => driver.sleep(1000))
.then(() => driver.findElements(By.css("td")))
.then((params) => params[1].getText())
.then((description) => previousUS.desc=description)
.then(() => driver.findElements(By.css("tr")))
.then((lignes) => lignes[1].click())
.then(() => driver.sleep(1000))
.then(() => driver.findElement(By.id("description")))
.then((input) => input.sendKeys(" easily"))
.then(() => driver.sleep(1000))
.then(() => driver.findElement(By.className("mr-6 v-btn v-btn--contained theme--dark v-size--default success")))
.then((button) => button.click())
.then(() => driver.sleep(1000))
.then(() => driver.findElements(By.css("td")))
.then((params) => params[1].getText())
.then((description) => {
    if(description==previousUS.desc+" easily"){
        console.log("ok");
    }
    else{
        console.log("non");
    }
})
.then(() => driver.quit());