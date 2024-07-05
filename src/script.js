document.addEventListener("DOMContentLoaded", function(){
                  
    const display = document.getElementById('calc-display');
    const buttons = document.getElementsByClassName('btn');
    console.log(buttons);
    console.log(display);
    
    let currentValue = "";

    function evaluateResult(){
        
        console.log('CurrentValue:', currentValue);

        let convertedValue = currentValue.replace("×", "*");
        convertedValue = convertedValue.replace("÷", "/");
        convertedValue = convertedValue.replace("%", "*0.01");
        convertedValue = convertedValue.replace("sin", "Math.sin");
        convertedValue = convertedValue.replace("tan", "Math.tan");
        convertedValue = convertedValue.replace("cos", "Math.cos");
        convertedValue = convertedValue.replace("ln", "Math.log");
        convertedValue = convertedValue.replace("log", "Math.log10");
        convertedValue = convertedValue.replace("π", "Math.PI");
        convertedValue = convertedValue.replace("√", "Math.sqrt");
        convertedValue = convertedValue.replace("e", "Math.E");

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