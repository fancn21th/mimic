// var expect = require("chai").expect;
// var lib = require("../src");
import { expect } from "chai";
import { helloMimic } from "../src";

describe("helloMimic test", function () {
  it("works!", function () {
    expect(helloMimic()).to.be.string("hello mimic!");
  });
});
