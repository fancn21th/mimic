import { expect } from "chai";
import { createHierarchy } from "../src";

// this is a test suite
describe("createHierarchy test", function () {
  // 两个节点的测试
  it("has two tree nodes | 2个节点", function () {
    const source = [
      { id: 0, title: "中国", pid: null },
      { id: 1, title: "武汉", pid: 0 },
    ];

    //  https://www.chaijs.com/api/bdd/

    //  深度比较
    // expect({a: 1}).to.deep.equal({a: 1});

    const result = createHierarchy(source);

    const expected = [
      {
        id: 0,
        title: "中国",
        pid: null,
        children: [{ id: 1, title: "武汉", pid: 0 }],
      },
      { id: 1, title: "武汉", pid: 0 },
    ];

    expect(result).to.deep.equal(expected);
  });
  // 三个节点的测试 （乱序）
  it("has three tree nodes | 3个节点 且 乱序", function () {
    const source = [
      { id: 2, title: "武汉", pid: 1, children: [] },
      { id: 0, title: "中国", pid: null, children: [] },
      { id: 1, title: "湖北", pid: 0, children: [] },
    ];

    const result = createHierarchy(source);

    console.log("result", result);

    /**
     *  第一步
     *    中国 children 属性中 有 湖北
     *
     *  第二步
     *    湖北 children 属性中 有 武汉
     *
     */
    const china = result.find((item) => item.id === 0);
    const hubei = result.find((item) => item.id === 1);
    const wuhan = result.find((item) => item.id === 2);

    expect(china).to.have.property("children").includes(hubei);
    expect(hubei).to.have.property("children").includes(wuhan);
  });
});
