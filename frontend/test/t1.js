const fetch = require("node-fetch");

QUnit.test("Le serveur front est up",function(assert){

    return fetch("http://localhost:8080/")
        .then(res => assert.true(true))
        .catch(err => assert.true(false,"Le serveur front n'est pas lancé"))
})

QUnit.test("Le serveur back est up",function(assert){

    return fetch("http://localhost:3000/")
        .then(res => assert.true(true))
        .catch(err => assert.true(false,"Le serveur back n'est pas lancé"))
})