let simpleBtn = document.getElementById("simple-btn")
let extendedBtn = document.getElementById("extended-btn")

simpleBtn.addEventListener('click',simpleBtnEvent)
extendedBtn.addEventListener('click',extendedBtnEvent)

function simpleBtnEvent(){
    simpleBtn.classList.remove("inactive-btn")
    simpleBtn.classList.add("active-btn")
    extendedBtn.classList.remove("active-btn")
    extendedBtn.classList.add("inactive-btn")

    let formWrapper = document.getElementsByClassName("form-wrapper")[0];
    let header = document.getElementsByClassName("header")[0];

    formWrapper.style.maxWidth = "780px";
    header.style.maxWidth = "780px"

    let simpleForm = document.getElementById("simple-form") 
    simpleForm.style.display = "block";

    let extendedForm = document.getElementById("extended-form") 
    extendedForm.style.display = "none";

    
    document.getElementById("wei-simple").addEventListener('change',fromSimpleWei);
    document.getElementById("wei-simple").addEventListener('keyup',fromSimpleWei);
    document.getElementById("gwei-simple").addEventListener('change',fromSimpleGwei);
    document.getElementById("gwei-simple").addEventListener('keyup',fromSimpleGwei); 
    document.getElementById("ether-simple").addEventListener('change',fromSimpleEther);
    document.getElementById("ether-simple").addEventListener('keyup',fromSimpleEther); 
}


function isZero(str){
    return str.split('').every(char => char === "0")
}



function multiplier(value,precision){
    
    value = value.toString()

    if (value.includes("e+")){
        return "max-limit"
    }

    if(value.includes(".")){
        let integerPart = value.split(".")[0]
        let decimalPart = value.split(".")[1]

        let zeros = ''
        for(let i=0;i<precision - decimalPart.length;i++){
            zeros+='0'
        }
        if(decimalPart.length>precision){
            decimalPart = decimalPart.slice(0,precision)
        }
        return integerPart+decimalPart+zeros
    
    }else{
        let res = ''
        for(let i=0;i<precision;i++){
            res+='0'
        }
        return value+res
    }
}


function divider(value,precision){
    if(value == 0){
        return ""
    }

    value = value.toString();
    
    if (value.includes("e+")){
        return "max-limit"
    }
    let pad = 0
    let integerPart = value;
    let decimalPart;
   
    if(value.includes(".")){
        
        pad = value.split(".")[1].length

        integerPart = value.split(".")[0]
        decimalPart = value.split(".")[1]
    }

    if(integerPart.length<=precision){
        return "0."+value.split(".").join("").padStart(precision+pad,"0")
    }else{
        if(value.includes(".")){

            let res = integerPart+decimalPart;
            return res.slice(0,integerPart.length-precision)+"."+res.slice(integerPart.length-precision,res.length)
        
        }else{
            return value.slice(0,value.length-precision)+"."+value.slice(value.length-precision,value.length)
        }
    }
}
        

function fromSimpleWei(){

    let wei = document.getElementById("wei-simple").value;
    wei = wei.replace(/^0+/,'')
    let ans = divider(wei,9)


    if(isZero(ans)){
        document.getElementById("gwei-simple").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("wei-simple").value = ""
    }else{
        document.getElementById("gwei-simple").value = ans
    }

    ans = divider(wei,18)
    if(isZero(ans)){
        document.getElementById("ether-simple").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("wei-simple").value = ""
    }else{
        document.getElementById("ether-simple").value = ans
    }
}


function fromSimpleGwei(){
    let gwei = document.getElementById("gwei-simple").value;
    gwei = gwei.replace(/^0+/,'')

    let ans = multiplier(gwei,9) 
    
    if(isZero(ans)){
       document.getElementById("wei-simple").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("gwei-simple").value = ""
    }else{
        document.getElementById("wei-simple").value = ans
    }
    ans = divider(gwei,18)

    if(isZero(ans)){
        document.getElementById("ether-simple").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("gwei-simple").value = ""
    }else{
        document.getElementById("ether-simple").value = ans
    }
    
}


function fromSimpleEther(){
    let ether = document.getElementById("ether-simple").value;
    ether = ether.replace(/^0+/,'')
    
    let ans = multiplier(ether,18)

    if(isZero(ans)){
        document.getElementById("wei-simple").value = ''
     }else if(ans==="max-limit"){
        document.getElementById("ether-simple").value="";
    }else{
        document.getElementById("wei-simple").value = ans
    }
    
    ans = multiplier(ether,9)

    if(isZero(ans)){
        document.getElementById("gwei-simple").value = ''
     }else if(ans==="max-limit"){
        document.getElementById("ether-simple").value="";
    }else{
        document.getElementById("gwei-simple").value = ans
    }
    
}

simpleBtnEvent()

function extendedBtnEvent(){
    extendedBtn.classList.remove("inactive-btn")
    extendedBtn.classList.add("active-btn")
    simpleBtn.classList.remove("active-btn")
    simpleBtn.classList.add("inactive-btn")

    let formWrapper = document.getElementsByClassName("form-wrapper")[0];
    let header = document.getElementsByClassName("header")[0];

    formWrapper.style.maxWidth = "1300px";
    header.style.maxWidth = "1300px"

    let simpleForm = document.getElementById("simple-form") 
    simpleForm.style.display = "none";

    let extendedForm = document.getElementById("extended-form") 
    extendedForm.style.display = "block";

    document.getElementById("wei").addEventListener('change',fromWei);
    document.getElementById("wei").addEventListener('keyup',fromWei);
    
    document.getElementById("kwei").addEventListener('change',fromKwei);
    document.getElementById("kwei").addEventListener('keyup',fromKwei);   

    document.getElementById("mwei").addEventListener('change',fromMwei);
    document.getElementById("mwei").addEventListener('keyup',fromMwei);   

    document.getElementById("gwei").addEventListener('change',fromGwei);
    document.getElementById("gwei").addEventListener('keyup',fromGwei); 

    document.getElementById("szabo").addEventListener('change',fromSzabo);
    document.getElementById("szabo").addEventListener('keyup',fromSzabo); 

    document.getElementById("finney").addEventListener('change',fromFinney);
    document.getElementById("finney").addEventListener('keyup',fromFinney);

    document.getElementById("ether").addEventListener('change',fromEther);
    document.getElementById("ether").addEventListener('keyup',fromEther);

    document.getElementById("kether").addEventListener('change',fromKether);
    document.getElementById("kether").addEventListener('keyup',fromKether)

    document.getElementById("mether").addEventListener('change',fromMether);
    document.getElementById("mether").addEventListener('keyup',fromMether)

    document.getElementById("gether").addEventListener('change',fromGether);
    document.getElementById("gether").addEventListener('keyup',fromGether)

    document.getElementById("tether").addEventListener('change',fromTether);
    document.getElementById("tether").addEventListener('keyup',fromTether)

}


function fromWei(){

    let wei = document.getElementById("wei").value;
    wei = wei.replace(/^0+/,'')
    let ans = divider(wei,3)

    if(isZero(ans)){
        document.getElementById("kwei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("wei").value = ""
    }else{
        document.getElementById("kwei").value = ans
    }

    ans = divider(wei,6)
    if(isZero(ans)){
        document.getElementById("mwei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("wei").value = ""
    }else{
        document.getElementById("mwei").value = ans
    }

    ans = divider(wei,9)
    if(isZero(ans)){
        document.getElementById("gwei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("wei").value = ""
    }else{
        document.getElementById("gwei").value = ans
    }

    ans = divider(wei,12)
    if(isZero(ans)){
        document.getElementById("szabo").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("wei").value = ""
    }else{
        document.getElementById("szabo").value = ans
    }

    ans = divider(wei,15)
    if(isZero(ans)){
        document.getElementById("finney").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("wei").value = ""
    }else{
        document.getElementById("finney").value = ans
    }

    ans = divider(wei,18)
    if(isZero(ans)){
        document.getElementById("ether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("wei").value = ""
    }else{
        document.getElementById("ether").value = ans
    }

    ans = divider(wei,21)
    if(isZero(ans)){
        document.getElementById("kether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("wei").value = ""
    }else{
        document.getElementById("kether").value = ans
    }

    ans = divider(wei,24)
    if(isZero(ans)){
        document.getElementById("mether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("wei").value = ""
    }else{
        document.getElementById("mether").value = ans
    }

    ans = divider(wei,27)
    if(isZero(ans)){
        document.getElementById("gether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("wei").value = ""
    }else{
        document.getElementById("gether").value = ans
    }

    ans = divider(wei,30)
    if(isZero(ans)){
        document.getElementById("tether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("wei").value = ""
    }else{
        document.getElementById("tether").value = ans
    }
}


function fromKwei(){

    let kwei = document.getElementById("kwei").value;
    kwei = kwei.replace(/^0+/,'')
    let ans = multiplier(kwei,3)
    console.log(ans)
    if(isZero(ans)){
        document.getElementById("wei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("kwei").value = ""
    }else{
        document.getElementById("wei").value = ans
    }

    ans = divider(kwei,3)
    if(isZero(ans)){
        document.getElementById("mwei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("kwei").value = ""
    }else{
        document.getElementById("mwei").value = ans
    }

    ans = divider(kwei,6)
    if(isZero(ans)){
        document.getElementById("gwei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("kwei").value = ""
    }else{
        document.getElementById("gwei").value = ans
    }

    ans = divider(kwei,9)
    if(isZero(ans)){
        document.getElementById("szabo").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("kwei").value = ""
    }else{
        document.getElementById("szabo").value = ans
    }

    ans = divider(kwei,12)
    if(isZero(ans)){
        document.getElementById("finney").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("kwei").value = ""
    }else{
        document.getElementById("finney").value = ans
    }

    ans = divider(kwei,15)
    if(isZero(ans)){
        document.getElementById("ether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("kwei").value = ""
    }else{
        document.getElementById("ether").value = ans
    }

    ans = divider(kwei,18)
    if(isZero(ans)){
        document.getElementById("kether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("kwei").value = ""
    }else{
        document.getElementById("kether").value = ans
    }

    ans = divider(kwei,21)
    if(isZero(ans)){
        document.getElementById("mether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("kwei").value = ""
    }else{
        document.getElementById("mether").value = ans
    }

    ans = divider(kwei,24)
    if(isZero(ans)){
        document.getElementById("gether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("kwei").value = ""
    }else{
        document.getElementById("gether").value = ans
    }

    ans = divider(kwei,27)
    if(isZero(ans)){
        document.getElementById("tether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("kwei").value = ""
    }else{
        document.getElementById("tether").value = ans
    }
}


function fromMwei(){

    let mwei = document.getElementById("mwei").value;
    mwei = mwei.replace(/^0+/,'')
    let ans = multiplier(mwei,6)
    
    if(isZero(ans)){
        document.getElementById("wei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("mwei").value = ""
    }else{
        document.getElementById("wei").value = ans
    }

    ans = multiplier(mwei,3)
    if(isZero(ans)){
        document.getElementById("kwei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("mwei").value = ""
    }else{
        document.getElementById("kwei").value = ans
    }

    ans = divider(mwei,3)
    if(isZero(ans)){
        document.getElementById("gwei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("mwei").value = ""
    }else{
        document.getElementById("gwei").value = ans
    }

    ans = divider(mwei,6)
    if(isZero(ans)){
        document.getElementById("szabo").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("mwei").value = ""
    }else{
        document.getElementById("szabo").value = ans
    }

    ans = divider(mwei,9)
    if(isZero(ans)){
        document.getElementById("finney").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("mwei").value = ""
    }else{
        document.getElementById("finney").value = ans
    }

    ans = divider(mwei,12)
    if(isZero(ans)){
        document.getElementById("ether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("mwei").value = ""
    }else{
        document.getElementById("ether").value = ans
    }

    ans = divider(mwei,15)
    if(isZero(ans)){
        document.getElementById("kether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("mwei").value = ""
    }else{
        document.getElementById("kether").value = ans
    }

    ans = divider(mwei,18)
    if(isZero(ans)){
        document.getElementById("mether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("mwei").value = ""
    }else{
        document.getElementById("mether").value = ans
    }

    ans = divider(mwei,21)
    if(isZero(ans)){
        document.getElementById("gether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("mwei").value = ""
    }else{
        document.getElementById("gether").value = ans
    }

    ans = divider(mwei,24)
    if(isZero(ans)){
        document.getElementById("tether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("mwei").value = ""
    }else{
        document.getElementById("tether").value = ans
    }
}


function fromGwei(){

    let gwei = document.getElementById("gwei").value;
    gwei = gwei.replace(/^0+/,'')
    let ans = multiplier(gwei,9)
    
    if(isZero(ans)){
        document.getElementById("wei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("gwei").value = ""
    }else{
        document.getElementById("wei").value = ans
    }

    ans = multiplier(gwei,6)
    if(isZero(ans)){
        document.getElementById("kwei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("gwei").value = ""
    }else{
        document.getElementById("kwei").value = ans
    }

    ans = multiplier(gwei,3)
    if(isZero(ans)){
        document.getElementById("mwei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("gwei").value = ""
    }else{
        document.getElementById("mwei").value = ans
    }

    ans = divider(gwei,3)
    if(isZero(ans)){
        document.getElementById("szabo").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("gwei").value = ""
    }else{
        document.getElementById("szabo").value = ans
    }

    ans = divider(gwei,6)
    if(isZero(ans)){
        document.getElementById("finney").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("gwei").value = ""
    }else{
        document.getElementById("finney").value = ans
    }

    ans = divider(gwei,9)
    if(isZero(ans)){
        document.getElementById("ether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("gwei").value = ""
    }else{
        document.getElementById("ether").value = ans
    }

    ans = divider(gwei,12)
    if(isZero(ans)){
        document.getElementById("kether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("gwei").value = ""
    }else{
        document.getElementById("kether").value = ans
    }

    ans = divider(gwei,15)
    if(isZero(ans)){
        document.getElementById("mether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("gwei").value = ""
    }else{
        document.getElementById("mether").value = ans
    }

    ans = divider(gwei,18)
    if(isZero(ans)){
        document.getElementById("gether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("gwei").value = ""
    }else{
        document.getElementById("gether").value = ans
    }

    ans = divider(gwei,21)
    if(isZero(ans)){
        document.getElementById("tether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("gwei").value = ""
    }else{
        document.getElementById("tether").value = ans
    }
}

function fromSzabo(){

    let szabo = document.getElementById("szabo").value;
    szabo = szabo.replace(/^0+/,'')
    let ans = multiplier(szabo,12)
    
    if(isZero(ans)){
        document.getElementById("wei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("szabo").value = ""
    }else{
        document.getElementById("wei").value = ans
    }

    ans = multiplier(szabo,9)
    if(isZero(ans)){
        document.getElementById("kwei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("szabo").value = ""
    }else{
        document.getElementById("kwei").value = ans
    }

    ans = multiplier(szabo,6)
    if(isZero(ans)){
        document.getElementById("mwei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("szabo").value = ""
    }else{
        document.getElementById("mwei").value = ans
    }

    ans = multiplier(szabo,3)
    if(isZero(ans)){
        document.getElementById("gwei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("szabo").value = ""
    }else{
        document.getElementById("gwei").value = ans
    }

    ans = divider(szabo,3)
    if(isZero(ans)){
        document.getElementById("finney").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("szabo").value = ""
    }else{
        document.getElementById("finney").value = ans
    }

    ans = divider(szabo,6)
    if(isZero(ans)){
        document.getElementById("ether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("szabo").value = ""
    }else{
        document.getElementById("ether").value = ans
    }

    ans = divider(szabo,9)
    if(isZero(ans)){
        document.getElementById("kether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("szabo").value = ""
    }else{
        document.getElementById("kether").value = ans
    }

    ans = divider(szabo,12)
    if(isZero(ans)){
        document.getElementById("mether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("szabo").value = ""
    }else{
        document.getElementById("mether").value = ans
    }

    ans = divider(szabo,15)
    if(isZero(ans)){
        document.getElementById("gether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("szabo").value = ""
    }else{
        document.getElementById("gether").value = ans
    }

    ans = divider(szabo,18)
    if(isZero(ans)){
        document.getElementById("tether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("szabo").value = ""
    }else{
        document.getElementById("tether").value = ans
    }
}

function fromFinney(){

    let finney = document.getElementById("finney").value;
    finney = finney.replace(/^0+/,'')
    let ans = multiplier(finney,15)
    
    if(isZero(ans)){
        document.getElementById("wei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("finney").value = ""
    }else{
        document.getElementById("wei").value = ans
    }

    ans = multiplier(finney,12)
    if(isZero(ans)){
        document.getElementById("kwei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("finney").value = ""
    }else{
        document.getElementById("kwei").value = ans
    }

    ans = multiplier(finney,9)
    if(isZero(ans)){
        document.getElementById("mwei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("finney").value = ""
    }else{
        document.getElementById("mwei").value = ans
    }

    ans = multiplier(finney,6)
    if(isZero(ans)){
        document.getElementById("gwei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("finney").value = ""
    }else{
        document.getElementById("gwei").value = ans
    }

    ans = multiplier(finney,3)
    if(isZero(ans)){
        document.getElementById("szabo").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("finney").value = ""
    }else{
        document.getElementById("szabo").value = ans
    }

    ans = divider(finney,3)
    if(isZero(ans)){
        document.getElementById("ether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("finney").value = ""
    }else{
        document.getElementById("ether").value = ans
    }

    ans = divider(finney,6)
    if(isZero(ans)){
        document.getElementById("kether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("finney").value = ""
    }else{
        document.getElementById("kether").value = ans
    }

    ans = divider(finney,9)
    if(isZero(ans)){
        document.getElementById("mether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("finney").value = ""
    }else{
        document.getElementById("mether").value = ans
    }

    ans = divider(finney,12)
    if(isZero(ans)){
        document.getElementById("gether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("finney").value = ""
    }else{
        document.getElementById("gether").value = ans
    }
    
    ans = divider(finney,15)
    if(isZero(ans)){
        document.getElementById("tether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("finney").value = ""
    }else{
        document.getElementById("tether").value = ans
    }
}

function fromEther(){

    let ether = document.getElementById("ether").value;
    ether = ether.replace(/^0+/,'')
    let ans = multiplier(ether,18)
    
    if(isZero(ans)){
        document.getElementById("wei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("ether").value = ""
    }else{
        document.getElementById("wei").value = ans
    }

    ans = multiplier(ether,15)
    if(isZero(ans)){
        document.getElementById("kwei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("ether").value = ""
    }else{
        document.getElementById("kwei").value = ans
    }

    ans = multiplier(ether,12)
    if(isZero(ans)){
        document.getElementById("mwei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("ether").value = ""
    }else{
        document.getElementById("mwei").value = ans
    }

    ans = multiplier(ether,9)
    if(isZero(ans)){
        document.getElementById("gwei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("ether").value = ""
    }else{
        document.getElementById("gwei").value = ans
    }

    ans = multiplier(ether,6)
    if(isZero(ans)){
        document.getElementById("szabo").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("ether").value = ""
    }else{
        document.getElementById("szabo").value = ans
    }

    ans = multiplier(ether,3)
    if(isZero(ans)){
        document.getElementById("finney").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("ether").value = ""
    }else{
        document.getElementById("finney").value = ans
    }

    ans = divider(ether,3)
    if(isZero(ans)){
        document.getElementById("kether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("ether").value = ""
    }else{
        document.getElementById("kether").value = ans
    }

    ans = divider(ether,6)
    if(isZero(ans)){
        document.getElementById("mether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("ether").value = ""
    }else{
        document.getElementById("mether").value = ans
    }

    ans = divider(ether,9)
    if(isZero(ans)){
        document.getElementById("gether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("ether").value = ""
    }else{
        document.getElementById("gether").value = ans
    }

    ans = divider(ether,12)
    if(isZero(ans)){
        document.getElementById("tether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("ether").value = ""
    }else{
        document.getElementById("tether").value = ans
    }
}

function fromKether(){

    let kether = document.getElementById("kether").value;
    kether = kether.replace(/^0+/,'')
    let ans = multiplier(kether,21)
    
    if(isZero(ans)){
        document.getElementById("wei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("kether").value = ""
    }else{
        document.getElementById("wei").value = ans
    }

    ans = multiplier(kether,18)
    if(isZero(ans)){
        document.getElementById("kwei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("kether").value = ""
    }else{
        document.getElementById("kwei").value = ans
    }

    ans = multiplier(kether,15)
    if(isZero(ans)){
        document.getElementById("mwei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("kether").value = ""
    }else{
        document.getElementById("mwei").value = ans
    }

    ans = multiplier(kether,12)
    if(isZero(ans)){
        document.getElementById("gwei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("kether").value = ""
    }else{
        document.getElementById("gwei").value = ans
    }

    ans = multiplier(kether,9)
    if(isZero(ans)){
        document.getElementById("szabo").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("kether").value = ""
    }else{
        document.getElementById("szabo").value = ans
    }

    ans = multiplier(kether,6)
    if(isZero(ans)){
        document.getElementById("finney").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("kether").value = ""
    }else{
        document.getElementById("finney").value = ans
    }

    ans = multiplier(kether,3)
    if(isZero(ans)){
        document.getElementById("ether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("kether").value = ""
    }else{
        document.getElementById("ether").value = ans
    }

    ans = divider(kether,3)
    if(isZero(ans)){
        document.getElementById("mether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("kether").value = ""
    }else{
        document.getElementById("mether").value = ans
    }

    ans = divider(kether,6)
    if(isZero(ans)){
        document.getElementById("gether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("kether").value = ""
    }else{
        document.getElementById("gether").value = ans
    }

    ans = divider(kether,9)
    if(isZero(ans)){
        document.getElementById("tether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("kether").value = ""
    }else{
        document.getElementById("tether").value = ans
    }
}

function fromMether(){

    let mether = document.getElementById("mether").value;
    mether = mether.replace(/^0+/,'')
    let ans = multiplier(mether,24)
    
    if(isZero(ans)){
        document.getElementById("wei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("mether").value = ""
    }else{
        document.getElementById("wei").value = ans
    }

    ans = multiplier(mether,21)
    if(isZero(ans)){
        document.getElementById("kwei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("mether").value = ""
    }else{
        document.getElementById("kwei").value = ans
    }

    ans = multiplier(mether,18)
    if(isZero(ans)){
        document.getElementById("mwei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("mether").value = ""
    }else{
        document.getElementById("mwei").value = ans
    }

    ans = multiplier(mether,15)
    if(isZero(ans)){
        document.getElementById("gwei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("mether").value = ""
    }else{
        document.getElementById("gwei").value = ans
    }

    ans = multiplier(mether,12)
    if(isZero(ans)){
        document.getElementById("szabo").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("mether").value = ""
    }else{
        document.getElementById("szabo").value = ans
    }

    ans = multiplier(mether,9)
    if(isZero(ans)){
        document.getElementById("finney").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("mether").value = ""
    }else{
        document.getElementById("finney").value = ans
    }

    ans = multiplier(mether,6)
    if(isZero(ans)){
        document.getElementById("ether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("mether").value = ""
    }else{
        document.getElementById("ether").value = ans
    }

    ans = multiplier(mether,3)
    if(isZero(ans)){
        document.getElementById("kether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("mether").value = ""
    }else{
        document.getElementById("kether").value = ans
    }

    ans = divider(mether,3)
    if(isZero(ans)){
        document.getElementById("gether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("mether").value = ""
    }else{
        document.getElementById("gether").value = ans
    }

    ans = divider(mether,6)
    if(isZero(ans)){
        document.getElementById("tether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("mether").value = ""
    }else{
        document.getElementById("tether").value = ans
    }
}

function fromGether(){

    let gether = document.getElementById("gether").value;
    gether = gether.replace(/^0+/,'')
    let ans = multiplier(gether,27)
    
    if(isZero(ans)){
        document.getElementById("wei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("gether").value = ""
    }else{
        document.getElementById("wei").value = ans
    }

    ans = multiplier(gether,24)
    if(isZero(ans)){
        document.getElementById("kwei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("gether").value = ""
    }else{
        document.getElementById("kwei").value = ans
    }

    ans = multiplier(gether,21)
    if(isZero(ans)){
        document.getElementById("mwei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("gether").value = ""
    }else{
        document.getElementById("mwei").value = ans
    }

    ans = multiplier(gether,18)
    if(isZero(ans)){
        document.getElementById("gwei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("gether").value = ""
    }else{
        document.getElementById("gwei").value = ans
    }

    ans = multiplier(gether,15)
    if(isZero(ans)){
        document.getElementById("szabo").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("gether").value = ""
    }else{
        document.getElementById("szabo").value = ans
    }

    ans = multiplier(gether,12)
    if(isZero(ans)){
        document.getElementById("finney").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("gether").value = ""
    }else{
        document.getElementById("finney").value = ans
    }

    ans = multiplier(gether,9)
    if(isZero(ans)){
        document.getElementById("ether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("gether").value = ""
    }else{
        document.getElementById("ether").value = ans
    }

    ans = multiplier(gether,6)
    if(isZero(ans)){
        document.getElementById("kether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("gether").value = ""
    }else{
        document.getElementById("kether").value = ans
    }

    ans = multiplier(gether,3)
    if(isZero(ans)){
        document.getElementById("mether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("gether").value = ""
    }else{
        document.getElementById("mether").value = ans
    }

    ans = divider(gether,3)
    if(isZero(ans)){
        document.getElementById("tether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("gether").value = ""
    }else{
        document.getElementById("tether").value = ans
    }
}


function fromTether(){

    let tether = document.getElementById("tether").value;
    tether = tether.replace(/^0+/,'')
    let ans = multiplier(tether,30)
    
    if(isZero(ans)){
        document.getElementById("wei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("tether").value = ""
    }else{
        document.getElementById("wei").value = ans
    }

    ans = multiplier(tether,27)
    if(isZero(ans)){
        document.getElementById("kwei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("tether").value = ""
    }else{
        document.getElementById("kwei").value = ans
    }

    ans = multiplier(tether,24)
    if(isZero(ans)){
        document.getElementById("mwei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("tether").value = ""
    }else{
        document.getElementById("mwei").value = ans
    }

    ans = multiplier(tether,21)
    if(isZero(ans)){
        document.getElementById("gwei").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("tether").value = ""
    }else{
        document.getElementById("gwei").value = ans
    }

    ans = multiplier(tether,18)
    if(isZero(ans)){
        document.getElementById("szabo").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("tether").value = ""
    }else{
        document.getElementById("szabo").value = ans
    }

    ans = multiplier(tether,15)
    if(isZero(ans)){
        document.getElementById("finney").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("tether").value = ""
    }else{
        document.getElementById("finney").value = ans
    }

    ans = multiplier(tether,12)
    if(isZero(ans)){
        document.getElementById("ether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("tether").value = ""
    }else{
        document.getElementById("ether").value = ans
    }

    ans = multiplier(tether,9)
    if(isZero(ans)){
        document.getElementById("kether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("tether").value = ""
    }else{
        document.getElementById("kether").value = ans
    }

    ans = multiplier(tether,6)
    if(isZero(ans)){
        document.getElementById("mether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("tether").value = ""
    }else{
        document.getElementById("mether").value = ans
    }

    ans = multiplier(tether,3)
    if(isZero(ans)){
        document.getElementById("gether").value = ''
    }else if(ans==="max-limit"){
        document.getElementById("tether").value = ""
    }else{
        document.getElementById("gether").value = ans
    }
}
