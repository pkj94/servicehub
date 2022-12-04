/*
 * @Author: Alfred Joseph
 * @Date: 2020-12-11 17:13:00
 * @Last Modified by: Alfred Joseph
 * @Last Modified time: 2020-12-11 17:13:00
 */

//! Use 'window.self' instead of 'self' in react
export const getFormValues = (e) => {
    let obj = {}, targets = [];
    for (let i = 0; i < e.target.length; i++) {
        if (e.target[i].nodeName === 'INPUT' || e.target[i].nodeName === 'SELECT' || e.target[i].nodeName === 'RADIO' || e.target[i].nodeName === 'CHECKBOX' || e.target[i].nodeName === 'TEXTAREA') {
            targets.push({ name: e.target[i].attributes.name.value, value: e.target[i].value });
        }
    }
    targets.map(a => {
        obj[a.name] = a.value;
        return a;
    })
    return obj;
};