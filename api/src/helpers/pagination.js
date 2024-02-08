const { URL } = process.env;
let _dictionary = {};
const _length = 20;

function pagination(page, pages, name) {
  if (page > pages) {
    throw Error`The page you are looking for does not exist.`;
  }
  if (page <= 1) {
    if (name) {
      return {
        next: `${URL}/recipes?page=2&name=${name}`,
        prev: null,
      };
    }
    return {
      next: `${URL}/recipes?page=2`,
      prev: null,
    };
  } else if (page < pages) {
    if (name) {
      return {
        next: `${URL}/recipes?page=${+page + 1}&name=${name}`,
        prev: `${URL}/recipes?page=${page - 1}&name=${name}`,
      };
    }
    return {
      next: `${URL}/recipes?page=${+page + 1}`,
      prev: `${URL}/recipes?page=${page - 1}`,
    };
  } else {
    if (name) {
      return {
        next: null,
        prev: `${URL}/recipes?page=${page - 1}&name=${name}`,
      };
    }
    return {
      next: null,
      prev: `${URL}/recipes?page=${page - 1}`,
    };
  }
}

function responseInfo(count, page, name) {
  if (count <= _length) {
    return {
      count,
      page,
      next: null,
      prev: null,
    };
  }

  const pages = Math.ceil(count / _length);
  const pag = pagination(page, pages, name);
  const obj = {
    count,
    pages,
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

module.exports = {
  pagination,
  responseInfo,
  responseResult,
};
