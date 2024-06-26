const axios = require("axios").default

const base_url = 'http://127.0.0.1:82543/'

const options = {
  headers: {
    'Content-Type': 'application/json'
  }
}



function open_explorer() {
  let path_to_open = inputPath.value
  let endpoint = base_url + "open-explorer/"
  let req_data = {
    path: path_to_open
  }

  axios.post(endpoint, req_data, options)
    .then((res) => {
      dataResult.innerHTML = res['data']
      apiResult.innerHTML = JSON.stringify(res, null, 4)
    })
    .catch((err) => {
      apiResult.innerHTML = JSON.stringify(err, null, 4)
    })
}