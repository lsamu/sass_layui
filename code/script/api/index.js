let BASE_URL = "";

// 允许跨域
// axios.defaults.withCredentials = true;

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

const request = (url, method, data) => {
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

const requestForm = (url, method, data) => {
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

const requestFile = (url, data) => {
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

const BoxAPI = {
    request,
    requestForm,
    requestFile,
    login: (data) => {
        return requestForm("/api/dps/account/login", "POST", qs.stringify(data));
    },
    selectHead: (data) => {
        return request("/api/structData/select", 'get', data)
    },
    selectData: (data) => {
        return request("/api/structData/map2", 'get', data)
    },
    selectHeadFormTool: (data) => {
        return request("/api/formImport/select", 'get', data)
    },
    selectDataFormTool: (data) => {
        return request("/api/formImport/map", 'get', data)
    },
    dmtFileDown: (data) => {
        return request("/api/dmtFile/down", 'get', data)
    },
    audit: (data) => {
        return request("/api/webapi/rs/appointment", 'POST', data)
    },
    auditPass: (data) => {
        return request("/api/webapi/rs/audit", 'POST', data)
    },
    updateResStateMeasure: (data) => {
        return request("/api/webapi/rs/updateRsStateMeasure", 'POST', data)
    },
    updateResStateRepair: (data) => {
        return request("/api/webapi/rs/updateRsStateRepair", 'POST', data)
    },
    updateRsMeasureStart: (data) => {
        return request("/api/webapi/rs/updateRsMeasureStart", 'POST', data)
    },
    updateRsMeasureEnd: (data) => {
        return request("/api/webapi/rs/updateRsMeasureEnd", 'POST', data)
    },
    updateRsRepairStart: (data) => {
        return request("/api/webapi/rs/updateRsRepairStart", 'POST', data)
    },
    updateRsRepairEnd: (data) => {
        return request("/api/webapi/rs/updateRsRepairEnd", 'POST', data)
    },
    userImport: (data) => {
        return request("/api/userTdm/importNew", 'POST', data)
    },
    userTemplate:"/api/userTdm/exportTemplate"
}