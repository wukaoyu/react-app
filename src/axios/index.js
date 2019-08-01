import JsonP from 'jsonp'
export default class Axios {
    static jsonp(opation) {
        return new Promise((resolve, reject) => {
            JsonP(opation.url,{param: 'callback'},function(err, response) {
                // 先空着
            })
        })
    }
}