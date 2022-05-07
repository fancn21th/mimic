import { expect } from "chai";
import { numToCurrency } from "../src";

// this is a test suite
describe("numToCurrency test", function () {
  // 有货币类型
  it("has type | 有货币类型", function () {
    const source = 1000000000000;
    const type='#';

    const result = numToCurrency(source,type);

    const expected = '#1,000,000,000,000.00'

    expect(result).to.deep.equal(expected);
  });
  // 没有货币类型 （乱序）
  it("no type | 没有货币类型", function () {
    const source = 9999999999999;

    const result = numToCurrency(source);

    const expected = '$9,999,999,999,999.00'
     expect(result).to.deep.equal(expected);
  });
});
