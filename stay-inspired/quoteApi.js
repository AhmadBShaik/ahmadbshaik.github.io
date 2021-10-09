const BASE_URL = "https://api.quotable.io/"

class QuoteAPI{
    async get(endpoint){
        const response = await fetch(BASE_URL+endpoint)
        const responseData = await response.json()
        return responseData
    }
}