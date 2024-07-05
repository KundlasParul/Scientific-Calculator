document.addEventListener("DOMContentLoaded", function(){
                  
    const display = document.getElementById('calc-display');
    const buttons = document.getElementsByClassName('btn');
    console.log(buttons);
    console.log(display);
    
    let currentValue = "";

    function evaluateResult(){
        
        console.log('CurrentValue:', currentValue);

        const convertedValue = currentValue.replace("×", "*");
        convertedValue = convertedValue.replace("÷", "/");
        convertedValue = convertedValue.replace("%", "*0.01");

        console.log('currentValue:', convertedValue);
        const result = eval(convertedValue);
        currentValue = result.toString();
        display.value = currentValue;
    }

    for(let i = 0; i < buttons.length ; i++){
        const button = buttons[i];
        button.addEventListener('click', function(){
           const value = button.innerText;

           if(value == "AC"){
                currentValue = "";
                display.value = currentValue;
           }
           else if(value == "="){
                
                 evaluateResult();
           }
           else{
            currentValue += value;
            console.log('CurrentValue:', currentValue);
            display.value = currentValue;
           }
           
        })
    }
})