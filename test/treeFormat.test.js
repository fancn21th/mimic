import { expect } from "chai";
import { findValueByKey } from "../src/utils/treeFormat";

const treeData = [
  {
    id: 1,
    label: "一级 1",
    children: [
      {
        id: 4,
        label: "二级 1-1",
        children: [
          {
            id: 9,
            label: "三级 1-1-1",
          },
          {
            id: 10,
            label: "三级 1-1-2",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "一级 2",
    children: [
      {
        id: 5,
        label: "二级 2-1",
      },
      {
        id: 6,
        label: "二级 2-2",
      },
    ],
  },
  {
    id: 3,
    label: "一级 3",
    children: [
      {
        id: 7,
        label: "二级 3-1",
      },
      {
        id: 8,
        label: "二级 3-2",
      },
    ],
  },
];
describe("treeFormat test", function () {
  it("获取一个数组集合", function () {
    expect(findValueByKey(treeData, "id", "children"))
      .to.be.an("array")
      .that.includes(9);
  });
  it("获取一个数组集合", function () {
    expect(findValueByKey(treeData, "id")).to.be.an("array").that.includes(9);
  });
  it("获取一个数组长度相等的集合", function () {
    const a = findValueByKey(treeData, "id");
    const b = [9, 10, 4, 1, 5, 6, 2, 7, 8, 3];
    for (let i = 0; i < a.length; i += 1) {
      expect(JSON.stringify(a)).to.equal(JSON.stringify(b));
    }
    expect(a.length).to.equal(b.length);
  });
});
