import { expect } from "chai";
import { array2tree } from '../src'

describe('array2tree test', function () {
    it('normal input | 正常的输入', function () {
        const input = [
            { id: 1, name: "办公管理", pid: 0 , num: 1},
            { id: 2, name: "请假申请", pid: 1 , num: 1},
            { id: 3, name: "出差申请", pid: 1 , num: 2},
            { id: 4, name: "请假记录", pid: 2 , num: 1},
            { id: 5, name: "系统设置", pid: 0 , num: 2},
            { id: 6, name: "权限管理", pid: 5 , num: 1},
            { id: 7, name: "用户角色", pid: 6 , num: 1},
            { id: 8, name: "菜单设置", pid: 6 , num: 2},
        ];
        const expected = [
            {
                "id": 1,
                "name": "办公管理",
                "pid": 0,
                "num": 1,
                "children": [
                    {
                        "id": 2,
                        "name": "请假申请",
                        "pid": 1,
                        "num": 1,
                        "children": [
                            {
                                "id": 4,
                                "name": "请假记录",
                                "pid": 2,
                                "num": 1,
                                "children": null
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "name": "出差申请",
                        "pid": 1,
                        "num": 2,
                        "children": null
                    }
                ]
            },
            {
                "id": 5,
                "name": "系统设置",
                "pid": 0,
                "num": 2,
                "children": [
                    {
                        "id": 6,
                        "name": "权限管理",
                        "pid": 5,
                        "num": 1,
                        "children": [
                            {
                                "id": 7,
                                "name": "用户角色",
                                "pid": 6,
                                "num": 1,
                                "children": null
                            },
                            {
                                "id": 8,
                                "name": "菜单设置",
                                "pid": 6,
                                "num": 2,
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ];
        const result1 = array2tree(input, "pid",0, "id", "");
        const result2 = array2tree(input, "pid",0, "id", "num");
        expect(result1).to.deep.equal(expected)
        expect(result2).to.deep.equal(expected)
    })
    it('empty array | 空数组', function () {
        const input = []
        const expected = []
        const result = array2tree(input)
        expect(result).to.deep.equal(expected)
    })
    it('text | 空字符串', function () {
        const input = [
            { id: 1, name: "办公管理", pid: 0 , num: 1},
            { id: 2, name: "请假申请", pid: 1 , num: 1},
            { id: 3, name: "出差申请", pid: 1 , num: 2},
            { id: 4, name: "请假记录", pid: 2 , num: 1},
            { id: 5, name: "系统设置", pid: 0 , num: 2},
            { id: 6, name: "权限管理", pid: 5 , num: 1},
            { id: 7, name: "用户角色", pid: 6 , num: 1},
            { id: 8, name: "菜单设置", pid: 6 , num: 2},
        ];
        const expected = []
        const result1 = array2tree(input, "pid" ,0, 0,undefined)
        const result2 = array2tree(input, "pid" ,0, 0,null)
        const result3 = array2tree(input, 0 ,0, 0,null)
        expect(result1).to.deep.equal(expected)
        expect(result2).to.deep.equal(expected)
        expect(result3).to.deep.equal(expected)
    })
    it('no parameters | 无参数', function () {
        const expected = []
        const result = array2tree()
        expect(result).to.deep.equal(expected)
    })
})