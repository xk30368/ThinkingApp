// 通用工具类

/*
* 数组去重
* @params Array
* @return 新数组
* */
const uniqueArr = (arr: any[]) => [...new Set(arr)];

/*
* 计算数组平均值
* @params Array
* @return number
* */
const meanArr = (arr: any[]) => arr.reduce((a: number, b: number) => a + b) / arr.length;

/*
* 随机排列数组
* @params Array
* @return Array
* */
const sortRandom = (arr: any[]) => arr.sort(() => 0.5 - Math.random());

/*
* 获取数组交集
* @params Array
* @params String
* @return Array
* */
const intersection = (arr: any[], val: string) => arr.filter(v => val.includes(v));

/*
* 多维数组转换为一维数组
* @params Array
* @return Array
*
* */
// @ts-ignore
const deepFlattenArr = (arr: any[]) => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlattenArr(v) : v )));

/*
* 判断对象是否为空
* */
const isObjEmpty = (obj: object) => JSON.stringify(obj) === "{}";

/*
* 反转字符串
* */
const reverseStr = (str: string) => str.split('').reverse().join('');

/*
* 字符串首字符大写
* */
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

/*
* 检查数字是否为偶数
* 否则为奇数
* */
const isEven = (num: number) => num % 2 === 0;

/*
* 将数字转换为千分位格式
* */
const toDecimal = (num: number) => num.toLocaleString();

/*
* 获取随机布尔值
* */
const getRandomBoolean = () => Math.random() >= 0.5;

export {
  uniqueArr,
  meanArr,
  sortRandom,
  intersection,
  deepFlattenArr,
  isObjEmpty,
  reverseStr,
  capitalize,
  isEven,
  toDecimal,
  getRandomBoolean,
}