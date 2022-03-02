import { expect } from "chai";
import { arrayToHashMap } from "../src"

describe("arrayToHashMap test", function () {
  it("works!", function () {
    // expect(helloMimic()).to.be.string("hello mimic!");
    const source = [
        { id: 0, title: "中国" },
        { id: 1, title: "湖北" },
        { id: 2, title: "武汉" }
    ]

    const result = arrayToHashMap(source, "id")

    const expected = {
        0: { id: 0, title: "中国" },
        1: { id: 1, title: "湖北" },
        2: { id: 2, title: "武汉" }
    }

    expect(result).to.deep.equal(expected)
  });
});