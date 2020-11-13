const fetch = require("node-fetch");

const pObject = {
  id: 1,
  name: "Test",
  start_date: "2020-11-12",
  state: "Ouvert",
  end_date: "2020-11-12",
  git_repo: null,
  description: "Projet de test",
};

QUnit.test("add project", (assert) => {
  fetch("localhost:3000/project/create", {
    method: "POST",
    body: pObject,
  }).then((res) => {
    assert.equal(res.status, 200);
  });
});
