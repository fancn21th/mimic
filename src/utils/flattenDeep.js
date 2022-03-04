/**
 * 将array转化为一维数组
 * @param  {Array | string} array=[] 要转化的数组
 * @return {Array} 转化后的数组
 */
const flattenDeep = (array = []) => {
    if (Array.isArray(array) || typeof array === 'string')
        return Array.from(array).flat(Infinity)
    return []
};

module.exports = flattenDeep 