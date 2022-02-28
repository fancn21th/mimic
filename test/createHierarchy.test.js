import { expect } from "chai";
import { createHierarchy } from "../src";

describe("createHierarchy test", function () {
  it("has two tree nodes | 只有2个节点", function () {
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

  it("has three tree nodes | 3个节点 且 乱序", function () {
    const source = [
      { id: 2, title: "武汉", pid: 1 },
      { id: 0, title: "中国", pid: null },
      { id: 1, title: "湖北", pid: 0 },
    ];

    //  https://www.chaijs.com/api/bdd/

    //  深度比较
    // expect({a: 1}).to.deep.equal({a: 1});

    const result = createHierarchy(source);

    // 中国 children 属性中 有 湖北
    // TODO: 此处有问题
    expect(result.find((item) => item.id === 0)).to.have.property("children");
  });
});
