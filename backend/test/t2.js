const fetch = require("node-fetch");

const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

let count = 0;

QUnit.test("On affiche bien les projets",function(assert){

    return fetch('http://localhost:3000/project')
    .then(res => res.json())
    .then(res => {
        count = res.projectList.length
        
        driver.get('http://localhost:8080/');
    })
    .then(() => driver.findElements(By.className("projectList__item")) )
    .then((projects) => {
        driver.quit();
        assert.equal(projects.length,count);
    })

})

