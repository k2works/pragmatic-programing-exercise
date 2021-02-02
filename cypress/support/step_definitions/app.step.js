const {
  Before,
  After,
  Given,
  Then,
} = require("cypress-cucumber-preprocessor/steps");

import { AppPage } from "../pages/appPage";

// this will get called before each scenario
let page;
Before(() => {
  page = new AppPage();
  cy.wait(0);
});

Given(`{string} を選択する`, (value) => {
  cy.get("#app-select").select(value);
});

Then(`{string} が表示される`, (value) => {
  cy.get("#app-fizz-buzz-counter-counter").should("have.value", value);
});

Then(`フィボナッチ数 {string} が表示される`, (value) => {
  cy.get(":nth-child(8) > :nth-child(3)").should("contain", value);
});
