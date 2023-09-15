
class loadUtil {

    static CSS(url, isCache) {
        const element = document.createElement("link");
        element.setAttribute("rel", "stylesheet");
        element.setAttribute("type", "text/css");
        if (isCache) {
            element.setAttribute("href", url + "?t=" + new Date().getTime());
        } else {
            element.setAttribute("href", url);
        }
        document.head.appendChild(element);
    }

    static JS(src, isCache) {
        const script = document.createElement("script");
        script.type = "text/JavaScript";
        if (isCache) {
            script.src = src + "?t=" + new Date().getTime();
        } else {
            script.src = src;
        }
        document.head.appendChild(script);
    }

    static Now(fmt = "yyyy-MM-dd HH:mm:ss") {
        let d = new Date();
        return this.convertDate(d, fmt)
    }

    static convertDate(d, fmt = "yyyy-MM-dd HH:mm:ss") {
        let o = {
            "M+": d.getMonth() + 1, //月份 
            "d+": d.getDate(), //日 
            "H+": d.getHours(), //小时 
            "m+": d.getMinutes(), //分 
            "s+": d.getSeconds(), //秒 
            "q+": Math.floor((d.getMonth() + 3) / 3), //季度 
            "S": d.getMilliseconds() //毫秒 
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (let k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
}