async function call(endpoint, params = {}, method = 'GET') {
    let body = null
    let query = ''
    if (method !== 'GET') {
        body = JSON.stringify(params)
    } else {
        const parts = []
        for (const k of Object.keys(params)) {
            parts.push(`${k}=${encodeURIComponent(params[k])}`)
        }
        query = parts.join('&')
    }

    const opts = {
        headers: new Headers({
            'content-type': 'application/json',
        }),
        mode: 'no-cors',
        method,
        body,
    }

    const res = await fetch(`${endpoint}?${query}`, opts)
    const json = await res.json()
    // eslint-disable-next-line
    console.log('response = ', json)
    // if (res.status >= 400 || (json && (json.errorType >= 400 || json.errorMessage))) {
    //     const e = new Error(json.message || json.errorMessage || res.statusText)
    //     e.code = (json && json.errorType) || res.status
    //     throw e
    // }
    return json
}

function get(endpoint, params = {}) {
    return call(endpoint, params, 'GET')
}
function post(endpoint, params = {}) {
    return call(endpoint, params, 'POST')
}
function put(endpoint, params = {}) {
    return call(endpoint, params, 'PUT')
}
function del(endpoint, params = {}) {
    return call(endpoint, params, 'DELETE')
}

export { call, get, put, del, post }
