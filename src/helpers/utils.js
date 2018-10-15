function convertDate(dataStr) {
    let dataObj = typeof dataStr === "object" ? dataStr : new Date(dataStr)
    let month = dataObj.getMonth() + 1
    let day = dataObj.getDate()

    let str = ''
    str = str + month + "月" + day + "日"

    return str
}

export default {
    /*
    * 给vue增加插件的写法
    * 这种写法，将函数作为一个插件导出
    * 在main.js中引入即可
    * 如需增加新的插件，只需要添加到 Vue.prototype 的后面即可
    * 在main.js 中导入之后全局可用
    *
    * */
    install(Vue, options) {
        Vue.prototype.convertDate = convertDate
    }
}