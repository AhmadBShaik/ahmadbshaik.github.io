var data  = [
        {
            question:"HTML stands for",
            options:[
                "HyperText Markup Language",
                "HyperText Markdown Language",
                "Hyperup MarkText Language",
                "HyperMarkup Text Language"
            ],
            answer:"HyperText Markup Language"   
        },
        {
            question:"XML stands for",
            options:[
                "Expressive Markup Language",
                "Expert Markup Language",
                "Extensible Markup Language",
                "Extended Markup Language"
            ],
            answer:"Extensible Markup Language"   
        },
        {
            question:"REST stands for",
            options:[
                "Restful Web Service",
                "Representational State Transfer",
                "Reset English Sentence",
                "Removable State Transfer"
            ],
            answer:"Representational State Transfer",
        },
        {
            question:"JSP stands for",
            options:[
                "Java Server Pages",
                "Java Servlet Pages",
                "Java Service Pages",
                "Java Secure Protocol"
            ],
            answer: "Java Server Pages",  
        },
        {
            question:"SOAP stands for",
            options:[
                "Simple Object Access Protocol",
                "Sample Object Access Protocol",
                "Synchronisable Object Access Protocol",
                "Simple Object Access Page"
            ],
            answer: "Simple Object Access Protocol",  
        },
        {
            question:"WSDL stands for",
            options:[
                "Web Service Description Language",
                "Web Server Description Language",
                "Web Serving Description Language",
                "Web Service Data Language",
            ],
            answer: "Web Service Description Language",  
        }, 
        {
            question:"API stands for",
            options:[
                "Applicable Programming Interface",
                "Application Programmable Interface",
                "Application Programming Interface",
                "Application Programming Interaction",
            ],
            answer: "Application Programming Interface",  
        },  
        {
            question:"ASCII stands for",
            options:[
                "American Standard Code for Information Interface",
                "Afican Standard Code for Information Interchange",
                "American Standard Code for Information Interchange",
                "American Standard Coding for Information Interchange",
            ],
            answer: "American Standard Code for Information Interchange",
  
        },
        {
            question:"BIOS stands for",
            options:[
                "Basic Input Output Signal",
                "Basic Inline Output System",
                "Basic Input Outline System",
                "Basic Input Output System",

            ],
            answer:"Basic Input Output System",
        },       

        {
            question:"CSS stands for",
            options:[
                "Cascading Styling Sheets",
                "Cascading Style Sheets",
                "Cascading Stylable Sheets",
                "Cascading Sheet Styles",
            ],
            answer:"Cascading Style Sheets",
        },
        {
            question:"CPU stands for",
            options:[
                "Central Processing Unit",
                "Cascading Processing Unit",
                "Callable Processing Unit",
                "Collaboration Processing Unit",

            ],
            answer:"Central Processing Unit",

        },

        {
            question:"GUI stands for",
            options:[
                "Graphics User Interface",
                "Graphical User Interface",
                "Graphical User Interchange",
                "Graphical User Interaction",
            ],
            answer:"Graphical User Interface",

        },

    ]
    
let activeIndex = 0
let finalAnswers = {}
    

const content = document.getElementById("content")

// content.style.display = "none"

function isVisited(index){
    return finalAnswers.hasOwnProperty(data[index].question)
}

function isAttempted(index){
    return finalAnswers[data[index].question] != "not attempted"
}

for(let i=0;i<data.length;i++){
    const qnav = document.getElementById("qnav")
    
    qnav.children[i].textContent = i+1
    let a = document.createElement("a")
    
    a.setAttribute("id","qnav"+(i+1))
    a.style.marginRight = "10px";
    a.classList.add("btn")
    qnav.appendChild(a)
    
}

changeQuestion(activeIndex)

function setNavigationHighlighterStyle(i,color,width,height){
    document.getElementById("qnav").children[i].style.color = "white"
    document.getElementById("qnav").children[i].style.backgroundColor = color
    document.getElementById("qnav").children[i].style.paddingLeft = width+"px"
    document.getElementById("qnav").children[i].style.paddingRight = width+"px"
    document.getElementById("qnav").children[i].style.paddingTop = height+"px"
    document.getElementById("qnav").children[i].style.paddingBottom = height+"px"
        
}


function navigationHighlighter(len){
    for(let i=0;i<len-1;i++){
        
        if(i==activeIndex){

            setNavigationHighlighterStyle(i,"blue",6,3)
        
       }else if(isVisited(i)&& !isAttempted(i)){

            setNavigationHighlighterStyle(i,"red",5,2)
    
        }else if(isVisited(i)&& isAttempted(i)){

            setNavigationHighlighterStyle(i,"green",5,2)

        }else{

            setNavigationHighlighterStyle(i,"orange",5,2)
        
        }
        
    }   
}    

function changeQuestion(index){
    
    document.getElementById('option_a').checked = false
    document.getElementById('option_b').checked = false
    document.getElementById('option_c').checked = false
    document.getElementById('option_d').checked = false

    navigationHighlighter(document.getElementById("qnav").children.length)
    
    let question = document.getElementById("question");
    question.innerHTML = index+1+". " +data[index].question
    
    let option_a = document.getElementById("option_a_label");
    option_a.innerHTML = data[index].options[0]
    
    
    let option_b = document.getElementById("option_b_label");
    option_b.innerText = data[index].options[1]
    
    let option_c = document.getElementById("option_c_label");
    option_c.innerText = data[index].options[2]
    
    let option_d = document.getElementById("option_d_label");
    option_d.innerText = data[index].options[3]
    
    
    if (index==0){
        // console.log(document.getElementById("prev").style.display)
        document.getElementById("prev").style.display="none";    
    }else{
        document.getElementById("prev").style.display="";    
    }
    if (index==(data.length) - 1){
        document.getElementById("next").textContent = "submit";    
    }else{
        document.getElementById("next").textContent = "next";    
    }
    
    if(isVisited(activeIndex)){
        
        if(finalAnswers[data[activeIndex].question]==document.getElementById("option_a_label").textContent){
            document.getElementById("option_a").checked = true    
        }else if(finalAnswers[data[activeIndex].question]==document.getElementById("option_b_label").textContent){
            document.getElementById("option_b").checked = true    
        }else if(finalAnswers[data[activeIndex].question]==document.getElementById("option_c_label").textContent){
            document.getElementById("option_c").checked = true    
        }else if(finalAnswers[data[activeIndex].question]==document.getElementById("option_d_label").textContent){
            document.getElementById("option_d").checked = true    
        }
    }
    
}

function addToFinalAnswers(){
    finalAnswers[data[activeIndex].question] = 
    document.getElementById("option_a").checked?
    document.getElementById("option_a_label").textContent:
    document.getElementById("option_b").checked?
    document.getElementById("option_b_label").textContent:
    document.getElementById("option_c").checked?
    document.getElementById("option_c_label").textContent:
    document.getElementById("option_d").checked?
    document.getElementById("option_d_label").textContent:
    "not attempted"
    
}


let nextBtn = document.getElementById("next")
nextBtn.addEventListener("click",function(){
    if(activeIndex<data.length){
        
        addToFinalAnswers()        
        
        if(activeIndex<data.length-1){
            activeIndex++
            changeQuestion(activeIndex)
        }else{
            
            document.getElementById("prev").style.display="none"; 
            
            document.getElementById("next").style.display="none"; 
            submit()
                        
        }
    }
})
        
function submit(){
    
    content.style.display = "none"; 
    let scoreCount = 0
    data.forEach(element => {
       
        if(element.answer == finalAnswers[element.question]){
            scoreCount++
        }
        score = document.getElementById("score")
        score.style.display = "block"
        document.getElementById("examScore").innerHTML = `<center> <b>${nameInput}</b>'s score<br>${scoreCount}/${data.length} </center>` 
        
    });
}
let prevBtn = document.getElementById("prev")
prevBtn.addEventListener("click",function(){
    if(activeIndex>-1){
        
        
        addToFinalAnswers()
        activeIndex--
        changeQuestion(activeIndex)
    }
})

        
const timer = document.getElementById("timer")

const startingMinutes = 0.5 * data.length
var time = startingMinutes*60 

setInterval(updateTimer,1000)

function updateTimer(){
    if (time>=0 && nameInput!=""){
        
        let minutes = Math.floor(time/60)
        let seconds = time%60
        seconds = seconds < 10 ? "0"+seconds: seconds
        minutes = minutes < 10 ? "0"+minutes: minutes
        timer.innerHTML = `${minutes}:${seconds}`
        time--
        if(time<300){
            timer.style.color = "red" 
        }
    }
    if(time==0 && nameInput!=""){
        submit()
    }
}
const nameId = document.getElementById("name")


nameBtn = document.getElementById("nameBtn")
var nameInput=""
nameBtn.addEventListener("click",function(){
    // console.log(document.getElementById("uname").value)
    nameInput=document.getElementById("uname").value
    if (nameInput!=""){
        // console.log(nameInput)
        document.getElementById("questionTopUsername").innerHTML = "Name : "+"<b>"+nameInput+"</b>"
        nameId.style.display = "none"
        content.style.display = "block"
    }
})


for(let i=0;i<data.length;i++){
    document.getElementById("qnav"+(i))
    .addEventListener("click",function(){
        
        addToFinalAnswers()
        
        s = "qnav"+(i)

        activeIndex = parseInt(s.slice(4,s.length))
        changeQuestion(activeIndex)
        
    })
}

