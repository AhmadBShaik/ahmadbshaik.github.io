const height = document.getElementById("height") as HTMLInputElement
const weight = document.getElementById("weight") as HTMLInputElement

const form = document.getElementById("main-form") as HTMLFormElement

const BMIStatus = document.getElementById("status") as HTMLElement

form.addEventListener('submit',(e: Event)=>{
    
    e.preventDefault()
    if (!(height.value && weight.value)){
        BMIStatus.innerHTML = "please enter height and weight"
    }else if(height.value && height.value as unknown as number <110 ){
        BMIStatus.innerHTML = "please enter valid height"
    }else{
        const weightValue= weight.value as unknown as number
        const heightValue = height.value as unknown as number
        const bmi = Math.round(weightValue / ( heightValue/100 * heightValue/100 )*10)/10
        let result: string = "Normal"
        BMIStatus.style.color = "green"
        if(bmi<18.5){
            result = "Underweight"
            BMIStatus.style.color = "blue"
        }else if(bmi>25.0){
            result = "Overweight"
            BMIStatus.style.color = "red"
        }
        BMIStatus.innerHTML = "<b>" + bmi.toString() + " <br> " + result + "<b>"
    }
})

