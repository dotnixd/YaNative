var axios = require("axios").default;

export class YaKlass {
    URI = "https://www.yaklass.ru/";
    async Get(action , parameters) {
        return axios.get(`${this.URI}${action}`, {
            params: parameters
        });
    }
}