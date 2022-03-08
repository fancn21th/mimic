/**
 * converts an array of objects to a tree
 * example: menuList to a menuTree
 * @param objList {Array}
 * @param parentFieldName {String}
 * @param parentId {String | Number | null}
 * @param idFieldName {String}
 * @param sortBy {String}
 * @returns {*[]|*}
 */
module.exports = function array2tree(objList =[],
                                     parentFieldName = '',
                                     parentId = 0,
                                     idFieldName = '',
                                     sortBy = '') {

    if (!objList || !Array.isArray(objList) || objList.length === 0) {
        return [];
    }
    if (!parentFieldName || typeof parentFieldName !== 'string') {
        return [];
    }
    if (typeof idFieldName !== 'string') {
        return [];
    }
    if (!sortBy || typeof sortBy !== 'string') {
        sortBy = '';
    }

    function roll(_parentId) {
        return objList.filter(item => {
            if (item[parentFieldName] === _parentId) {
                let children = roll(item[idFieldName]);
                item.children = children.length ? children : null;
                return true;
            }
        })
    }

    if (sortBy === '') {
        return roll(parentId);
    } else {

        function sortTree(_data) {
            _data.length > 1 &&
            _data.sort((a, b) => a[sortBy] - b[sortBy]) &&
            _data.forEach(item => {
                if (item.children && item.children.length > 1) {
                    sortTree(item.children);
                }
            });
            return _data;
        }

        return sortTree(roll(parentId));
    }

}
