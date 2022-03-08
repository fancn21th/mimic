// 这些方法可能会在之后的版本中加入 mimic
const baseProperty = (key) => (object) =>
  object == null ? undefined : object[key];

const baseIteratee = (value) =>
  typeof value === "function" ? value : baseProperty(value);

const baseAssignValue = (object, key, value) => {
  return Object.assign({}, object, { [key]: value });
};

const identity = (value) => value;

/**
 * 创建一个对象，它的 keys 由每次迭代生成的 key 组成，每个 key 对应的 value 为最后一个生成它的对象(不同的迭代生成的 key 可以相同，后者覆盖前者)
 * @param  {Array} collection 要迭代的数组
 * @param  {Function|string} [key=identity] 每次迭代转换 key 的方法(接收一个参数 value )；或指定一个字段，每次迭代取其对应的值作为 key
 * @return {Object} 生成的对象
 * @example
 *
 * var array = [
 *   { id: 0, title: "中国", pid: null },
 *   { id: 1, title: "武汉", pid: 0 },
 * ]
 *
 * array2Hash(array, 'id');
 * // => { 0: { id: 0, title: "中国", pid: null }, 1: { id: 1, title: "武汉", pid: 0 } }
 *
 * array2Hash(array, function(item) {
 *   return item.title
 * });
 * // => { 中国: { id: 0, title: "中国", pid: null }, 武汉: { id: 1, title: "武汉", pid: 0 } }
 */

const array2Hash = (collection, key = identity) => {
  // 先做入参类型检查，类型不符直接返回 {}
  const legality =
    Array.isArray(collection) &&
    (typeof key === "function" || typeof key === "string");
  if (!legality) {
    return {};
  }
  // 获取每次迭代转换 key 的方法
  const iteratee = baseIteratee(key);
  // 聚合器，每次迭代获取一个 key ，更新其 value
  const aggregator = (acc, item) => baseAssignValue(acc, iteratee(item), item);
  return collection.reduce(aggregator, {});
};

module.exports = array2Hash;
