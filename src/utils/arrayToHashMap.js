module.exports = function (source, id) {
    /* 
        根据第二个参数值作为索引
        source: [
            { id: 0, title: "中国" },
            { id: 1, title: "湖北" },
            { id: 2, title: "武汉" }
        ]
        target: {
            0: { id: 0, title: "中国" },
            1: { id: 1, title: "湖北" },
            2: { id: 2, title: "武汉" }
        }
    */
    const map = source.reduce((acc, cur) => {
        const index = cur[id]
        return {
            ...acc,
            [index]: cur
        }
    }, {})
    return map
}