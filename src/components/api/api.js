const URL = 'http://api.dautoeletric.com.br'
const HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

function timeout(ms, promise) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({status: 'timeout'})
    }, ms)
    promise.then(resolve, reject)
  })

}

async function registerUser(payload) {
  try {
    let response = await timeout(15000, fetch(`${URL}/signup`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(payload)
    }))

    return await response.json();

  } catch (e) {
    return e;
  }

}


module.exports = {
  registerUser
}
