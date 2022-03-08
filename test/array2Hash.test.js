import { expect } from "chai";
import { array2Hash } from "../src";

describe("array2Hash test", function () {
  it("normal input | 正常的输入", function () {
    const array = [
      { id: 0, title: "中国", pid: null },
      { id: 1, title: "武汉", pid: 0 }
    ];
    const expected = {
      0: { id: 0, title: "中国", pid: null },
      1: { id: 1, title: "武汉", pid: 0 }
    };
    const inputKeyResult = array2Hash(array, "id");
    const inputFuncResult = array2Hash(array, (value) => value.id);
    expect(inputKeyResult).to.deep.equal(expected);
    expect(inputFuncResult).to.deep.equal(expected);
  });
  it("input array with undefined | 输入带有 undefined 的数组", function () {
    const arrayIncludedUndefined = [
      { id: 0, title: "中国", pid: null },
      undefined
    ];
    const expected = {
      0: { id: 0, title: "中国", pid: null },
      undefined: undefined
    };
    const inputKeyResult = array2Hash(arrayIncludedUndefined, "id");
    const inputFuncResult = array2Hash(arrayIncludedUndefined, (value) =>
      value ? value.id : undefined
    );
    expect(inputKeyResult).to.deep.equal(expected);
    expect(inputFuncResult).to.deep.equal(expected);
  });
  it("input array with null | 输入带有 null 的数组", function () {
    const arrayIncludedNull = [null, { id: 0, title: "中国", pid: null }];
    const expected = {
      0: { id: 0, title: "中国", pid: null },
      undefined: null
    };
    const inputKeyResult = array2Hash(arrayIncludedNull, "id");
    const inputFuncResult = array2Hash(arrayIncludedNull, (value) =>
      value ? value.id : undefined
    );
    expect(inputKeyResult).to.deep.equal(expected);
    expect(inputFuncResult).to.deep.equal(expected);
  });
  it("input array with null and undefined | 输入同时带有 null 和 undefined 的数组", function () {
    const arrayIncludedNullAndUndefined = [undefined, null];
    const expected = {
      undefined: null
    };
    const inputKeyResult = array2Hash(arrayIncludedNullAndUndefined, "id");
    const inputFuncResult = array2Hash(arrayIncludedNullAndUndefined, (value) =>
      value ? value.id : undefined
    );
    expect(inputKeyResult).to.deep.equal(expected);
    expect(inputFuncResult).to.deep.equal(expected);
  });
  it("input arrayLike | 传入 ArrayLike", function () {
    const arrayLike = {
      0: { id: 0, title: "中国", pid: null },
      1: { id: 1, title: "武汉", pid: 0 },
      length: 2
    };
    const expected = {};
    const inputKeyResult = array2Hash(arrayLike, "id");
    const inputFuncResult = array2Hash(arrayLike, (value) => value.id);
    expect(inputKeyResult).to.deep.equal(expected);
    expect(inputFuncResult).to.deep.equal(expected);
  });
  it("no optional parameter | 不传可选参数", function () {
    const array = [
      { id: 0, title: "中国", pid: null },
      { id: 1, title: "武汉", pid: 0 }
    ];
    const expected = {
      "[object Object]": { id: 1, title: "武汉", pid: 0 }
    };
    const result = array2Hash(array);
    expect(result).to.deep.equal(expected);
  });
  it("unexpected first parameter | 第一个参数不符合预期", function () {
    const expected = {};
    const noInputResult = array2Hash();
    const inputNullResult = array2Hash(null);
    const inputBooleanResult = array2Hash(true);
    const inputNumberResult = array2Hash(1);
    const inputStringResult = array2Hash("1");
    const inputObjectResult = array2Hash({ a: 1 });
    expect(noInputResult).to.deep.equal(expected);
    expect(inputNullResult).to.deep.equal(expected);
    expect(inputBooleanResult).to.deep.equal(expected);
    expect(inputNumberResult).to.deep.equal(expected);
    expect(inputStringResult).to.deep.equal(expected);
    expect(inputObjectResult).to.deep.equal(expected);
  });
  it("unexpected second parameter | 第二个参数不符合预期", function () {
    const array = [
      { id: 0, title: "中国", pid: null },
      { id: 1, title: "武汉", pid: 0 }
    ];
    const expected = {};
    const inputNullResult = array2Hash(array, null);
    const inputBooleanResult = array2Hash(array, true);
    const inputNumberResult = array2Hash(array, 1);
    const inputObjectResult = array2Hash(array, { a: 1 });
    const inputArrayResult = array2Hash(array, [1, 2, 3]);
    expect(inputNullResult).to.deep.equal(expected);
    expect(inputBooleanResult).to.deep.equal(expected);
    expect(inputNumberResult).to.deep.equal(expected);
    expect(inputObjectResult).to.deep.equal(expected);
    expect(inputArrayResult).to.deep.equal(expected);
  });
});
