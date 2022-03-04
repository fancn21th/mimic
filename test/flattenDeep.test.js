import { expect } from "chai";
import { flattenDeep } from '../src'

describe('flattenDeep test', function () {
    it('normal input | 正常的输入', function () {
        const input = [1, [2, [3, [4]], 5]]
        const expected = [1, 2, 3, 4, 5]
        const result = flattenDeep(input)
        expect(result).to.deep.equal(expected)
    })
    it('empty array | 空数组', function () {
        const input = []
        const expected = []
        const result = flattenDeep(input)
        expect(result).to.deep.equal(expected)
    })
    it('text | 字符串', function () {
        const input = '12345'
        const expected = ['1', '2', '3', '4', '5']
        const result = flattenDeep(input)
        expect(result).to.deep.equal(expected)
    })
    it('no parameters | 无参数', function () {
        const expected = []
        const result = flattenDeep()
        expect(result).to.deep.equal(expected)
    })
    it('unexpected input | 不符合预期的输入', function () {
        const expected = []
        const inputNullResult = flattenDeep(null)
        const inputObjectResult = flattenDeep({a:1})
        const inputBooleanResult = flattenDeep(true)
        expect(inputNullResult).to.deep.equal(expected)
        expect(inputObjectResult).to.deep.equal(expected)
        expect(inputBooleanResult).to.deep.equal(expected)
    })
})