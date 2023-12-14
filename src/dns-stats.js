const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arr = [];
  domains.forEach(item => arr.push(item.split('.')));
  arr.forEach((item) => {
    item.forEach((element, index, array) => {
    array[index] = '.' + element
    })
  })
  const totalArr = [];
  arr.forEach((item) => {
    item.forEach((element, index, array) => {
      let part = '';
      for (let i = item.length; i > index; i--) {
        part += array[i -1]
      }
      totalArr.push(part)
    })
  })
  function calculateAmount(value, arr) {
    let amount = 0;
    arr.forEach((item) => {
      if (value === item) {
        amount++;
      }
    })
    return amount;
  }
  const uniqArr = [];
  for (let i = 0; i < totalArr.length; i++) {
    if (!uniqArr.includes(totalArr[i])) {
      uniqArr.push(totalArr[i])
    }
  }
  const obj = {};
  uniqArr.forEach(item => obj[item] = calculateAmount(item, totalArr))
  return obj;
}

module.exports = {
  getDNSStats
};
