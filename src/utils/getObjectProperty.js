/*
 * @Author: Alfred Joseph
 * @Date: 2020-12-11 17:13:00
 * @Last Modified by: Alfred Joseph
 * @Last Modified time: 2020-12-11 17:13:00
 */

 //! Use 'window.self' instead of 'self' in react
 export const getObjectProperty = (path, obj) => (path.split('.').reduce((prev, cur) => (prev ? prev[cur] : null), obj || window.self));