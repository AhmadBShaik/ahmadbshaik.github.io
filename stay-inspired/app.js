const api = new QuoteAPI;

document.getElementById("new-quote").addEventListener('click',getQuote)
const tags = []

function getQuote(){
    let endpoint=endPoint()
    getRandomQuote(endpoint)
}

function getRandomQuote(ep){
    api.get(ep)
    .then(data => {
        document.getElementById("random-quote").innerHTML = `"${data.content}"`;
        document.getElementById("author").innerHTML = `— <strong>${data.author}</strong>`;
    }) 
    .catch(err => console.log(err))

}

getRandomQuote("random")

document.getElementById("business").addEventListener("click",toggle)
document.getElementById("education").addEventListener("click",toggle)
document.getElementById("faith").addEventListener("click",toggle)
document.getElementById("famous-quotes").addEventListener("click",toggle)
document.getElementById("friendship").addEventListener("click",toggle)
document.getElementById("future").addEventListener("click",toggle)
document.getElementById("happiness").addEventListener("click",toggle)
document.getElementById("history").addEventListener("click",toggle)
document.getElementById("inspirational").addEventListener("click",toggle)
document.getElementById("life").addEventListener("click",toggle)
document.getElementById("literature").addEventListener("click",toggle)
document.getElementById("love").addEventListener("click",toggle)
document.getElementById("nature").addEventListener("click",toggle)
document.getElementById("politics").addEventListener("click",toggle)
document.getElementById("religion").addEventListener("click",toggle)
document.getElementById("proverb").addEventListener("click",toggle)
document.getElementById("science").addEventListener("click",toggle)
document.getElementById("success").addEventListener("click",toggle)
document.getElementById("technology").addEventListener("click",toggle)
document.getElementById("wisdom").addEventListener("click",toggle)

function toggle(){
    
    const cList = this.classList
    
    if(cList.contains("bg-dark")){
        
        cList.remove("bg-dark")
        cList.add("bg-light")
        cList.add("text-dark")

        remove(tags,this.id)
        getQuote()
    }else{
        
        cList.add("bg-dark")
        cList.remove("bg-light")
        cList.remove("text-dark")

        tags.push(this.id)
        getQuote()
    }
    endPoint()
}

function remove(lst,e){
    for(let i=0;i<lst.length;i++){
        if(lst[i]===e)
        lst.splice(i,1)
    }
}

/*
*  Example filter
*  --------------
*
*  GET /random?tags=history|civil-rights
*/

function endPoint(){
    
    if(tags.length === 0)
        return "random"
    
    let url = "random?tags="
    for(let i=0;i<tags.length;i++){
        url += tags[i]
        if(i!==tags.length-1){
            url += '|'
        }
    }
    return url
}
