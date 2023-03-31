const requireComponents = import.meta.globEager("./**/index.vue");

const getCamelCaseOfUnderlineName = (aName) => {
    const characters = [...aName];
    characters[0] = characters[0].toUpperCase();
    aName = characters.join("");
    if (aName.toUpperCase() === aName)
        return aName;
    let res = aName;
    while (res.indexOf('-') >= 0) {
        const s = res;
        const po = s.indexOf('-');
        const s1 = s.substring(0, po);
        let s2 = s.substr(po + 1);
        if (s2.length > 0)
            s2 = s2.charAt(0).toUpperCase() + s2.substr(1);
        res = s1 + s2;
    }
    return res;
}

const install = function (Vue) {
    const prefix = "Box"
    for (let fileName in requireComponents) {
        try {
            const componentConfig = requireComponents[fileName];
            const component = componentConfig["default"] || componentConfig;
            let arr = fileName.split("/")
            let componentName = arr[arr.length - 2];
            componentName = getCamelCaseOfUnderlineName(componentName)
            if (false == componentName.includes(prefix)) {
                componentName = prefix + componentName;
            }
            Vue.component(componentName, component);
        } catch (error) {
            console.log(error, fileName)
        }
    }
}

export default {
    install,
};