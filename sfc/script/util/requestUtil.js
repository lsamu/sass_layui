axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

class requestUtil {

    BASE_URL = "";

    setBaseURL = (url)=>{
        this.BASE_URL = url;
    }

    request = (url, method, data) => {
        let oo = {
            method: method,
            url: BASE_URL + url,
            headers: {
                "content-type": "application/json",
            },
        }
        if (method == "get") {
            oo["params"] = data;
        } else {
            oo["data"] = data;
        }
        return new Promise((resolve, reject) => {
            axios.request(oo).then((response) => {
                resolve(response.data)
            }).catch((error) => {
                reject(error)
            })
        })
    }

    requestForm = (url, method, data) => {
        let oo = {
            method: method,
            url: BASE_URL + url,
            headers: {
                "content-type": "application/x-www-form-urlencoded",
            },
        }
        if (method == "get") {
            oo["params"] = data;
        } else {
            oo["data"] = data;
        }
        return new Promise((resolve, reject) => {
            axios.request(oo).then((response) => {
                resolve(response.data)
            }).catch((error) => {
                reject(error)
            })
        })
    }

    requestFile = (url, data) => {
        var configs = {
            headers: { 'Content-Type': 'multipart/form-data' }
        };
        return new Promise((resolve, reject) => {
            axios.post(BASE_URL + url, data, configs).then(res => {
                resolve(res.data)
            }).catch((error) => {
                reject(error)
            })
        })
    }
}