import axios from 'axios';
// import { key, url } from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`);
            this.result = res.data.recipes; // we create var result to store the data we get from res
		} catch (error) {
            alert(error);
        }
    }
}
