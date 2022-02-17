module.exports = function (source) {
  // 先做数据结构的预处理
  const map = source.reduce((acc, cur) => {
    // {
    //   0: { id: 0, title: "中国", pid: null },
    //   1: { id: 1, title: "武汉", pid: 0 },
    // }
    const { id } = cur;
    return {
      ...acc,
      [id]: cur,
    };
  }, {});

  source.forEach((item) => {
    const { pid } = item;
    const key = pid + "";
    if (map[key]) {
      if (!map[key].children) {
        map[key].children = [];
      }
      map[key].children.push(item);
    }
  });

  return source;
};
