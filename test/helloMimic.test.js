var expect = require("chai").expect;
var lib = require("../src");

describe("helloMimic test", function () {
  it("works!", function () {
    expect(lib.helloMimic()).to.be.string("hello mimic!");
  });
});
