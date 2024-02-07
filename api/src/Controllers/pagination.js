const axios = require("axios");
const { URL } = process.env;
let _dictionary = {};
const _length = 20;

function pagination() {
  return {
    next: "NEXT",
    prev: "PREV",
  };
}

function responseInfo(count, page) {
  const pag = pagination();
  const obj = {
    count,
    pages: Math.ceil(count / _length),
    next: pag.next,
    prev: pag.prev,
  };
  return obj;
}

function responseResult(data) {
  let key = 1;
  for (let i = 0; i < data.length; i += 20) {
    const setData = data.slice(i, i + _length);
    addDictionary(key, setData);
    key++;
  }
  return _dictionary;
}

function addDictionary(key, data) {
  _dictionary = {
    ..._dictionary,
    [key]: data,
  };
  return _dictionary;
}

function arrayextract() {}

async function detailInfo() {}

// async function pagination() {
//   const page = await axios.get(`${URL}/recipes?page=2`);
//   return {
//     next: page.data,
//     prev: "ACA VA EL FILTRO",
//   };
// }

module.exports = {
  pagination,
  responseInfo,
  responseResult,
};
