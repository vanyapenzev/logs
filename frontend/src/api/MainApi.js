const BASE_URL = `http://localhost:3000`;

const checkResponse = (response) => (response.ok ? response.json() : Promise.reject(`Упс, произошла ошибка: ${response.statusText}`));

const getToken = () => {
  const token = localStorage.getItem('jwt');
  return {
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
}

export const register = (password, email, name) => {
  let testik = JSON.stringify({
    name: name,
    email: email,
    password: password
  })
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password
    })
  })
  .then(checkResponse);
}

export const authorize = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
  .then(checkResponse);
}

export const getContent = (jwt) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
    }
  })
  .then(checkResponse);
}

export const updateUserInfo = (name, email) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: getToken(),
    body: JSON.stringify({
      name: `${name}`,
      email: `${email}`
    })
  })
  .then(checkResponse)
}

let logs = {
  table: '',
  sql: [],
  order: -1,
  desc: false,
  count: false,
  isOr: false
}

export const getLogs = (table, sql) => {
  if (logs.table != table || logs.sql != sql) {
    logs = {
      table: table,
      sql: sql,
      order: -1,
      desc: false,
      count: false,
      isOr: false
    }
  }
  return fetch(`${BASE_URL}/getLogs`, {
    method: 'POST',
    headers: getToken(),
    body: JSON.stringify({
      table: `${table}`,
      sql: sql,
      order: -1,
      desc: false,
      count: false,
      isOr: false,

    })
  })
  .then(checkResponse)
}

//0 всегда -1
export const getLogsToOrder = (order, desc) => {
  logs.order = order;
  logs.desc = desc;

  return fetch(`${BASE_URL}/getLogs`, {
    method: 'POST',
    headers: getToken(),
    body: JSON.stringify({
      table: `${logs.table}`,
      sql: logs.sql,
      order: order,
      desc: desc,
      count: logs.count,
      isOr: logs.isOr,
    })
  })
  .then(checkResponse)
}

export const getLogsToCount = (count) => {
  logs.count = count;

  return fetch(`${BASE_URL}/getLogs`, {
    method: 'POST',
    headers: getToken(),
    body: JSON.stringify({
      table: `${logs.table}`,
      sql: logs.sql,
      order: logs.order,
      desc: logs.desc,
      count: count,
      isOr: logs.isOr,
    })
  })
  .then(checkResponse)
}

export const getLogsSearch = (table, sql, isOr) => {

  logs.table = table;
  logs.sql = sql;
  logs.isOr = isOr;

  return fetch(`${BASE_URL}/getLogs`, {
    method: 'POST',
    headers: getToken(),
    body: JSON.stringify({
      table: `${table}`,
      sql: sql,
      order: logs.order,
      desc: logs.desc,
      count: logs.count,
      isOr: logs.isOr,
    })
  }).then(checkResponse)
}


export const getRealPage = () => {
  let url = location.href.split("/#/");
  if (url && url.length > 1) {
    return url[1];
  }
  return false;
}
