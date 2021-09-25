import axios from "axios"

export const getRequest = async () => {
    try {
        const res = await axios({
            method: 'GET',
            url: 'https://imdb-api.com/en/API/MostPopularMovies/k_1ml1ilrc',
            headers: { 'Content-Type': 'application/json' }
        })
        console.log(resizeTo)
    } catch (error) {
        console.log(error.response)
    }

}