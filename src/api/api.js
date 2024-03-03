import { authString } from "../config/auth"

class Api {
    constructor() {
        this.baseUrl = "http://api.valantis.store:40000/";
    }

    async get(body) {
        return await fetch(this.baseUrl, {
            headers: { "X-Auth": authString, "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify(body),
        })
    }
}

export const api = new Api();
