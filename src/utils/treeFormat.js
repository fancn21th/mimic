
/**
 * @description: 获取树结构某个属性数组集合
 * @param treeData {Array} 原始树结构
 * @param key {String} 要获取的属性名
 * @param childrenName {String} 树数据中子节点关键字
 * @return valueList {Aarray} 属性值集合
 */

export const findValueByKey = (treeData, key, childrenName = "children") => {
  const valueList = [];
  function loopFunction(arr, key) {
    for (let index = 0; index < arr.length; index++) {
      const item = arr[index];
      for (const eleKey in item) {
        if (item.hasOwnProperty(eleKey) && eleKey === key) {
          if (item[childrenName] && item.children.length !== 0) {
            loopFunction(item[childrenName], key);
          }
          valueList.push(item[key]);
        }
      }
    }
  }
  loopFunction(treeData, key);
  return valueList;
};
