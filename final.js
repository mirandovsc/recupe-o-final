document.addEventListener("DOMContentLoaded", function () {
   
    const temperaturaInput = document.getElementById("temperatura"); 
    const unidadeOrigemSelect = document.getElementById("unidadeOrigem"); 
    const converterButton = document.getElementById("converter"); 
    const resultadoDiv = document.getElementById("resultado"); 

    
    function converterTemperatura(temp, unidade) {
        let resultado = ""; 

        if (unidade === "celsius") {
           
            let fahrenheit = (temp * 9/5) + 32;
            let kelvin = temp + 273.15; 
            resultado = "Fahrenheit: " + fahrenheit.toFixed(2) + "°F, Kelvin: " + kelvin.toFixed(2) + "K";
        } else if (unidade === "fahrenheit") {
           
            let celsius = (temp - 32) * 5/9; 
            let kelvin = (temp - 32) * 5/9 + 273.15; 
            resultado = "Celsius: " + celsius.toFixed(2) + "°C, Kelvin: " + kelvin.toFixed(2) + "K";
        } else if (unidade === "kelvin") {
            
            let celsius = temp - 273.15; 
            let fahrenheit = (temp - 273.15) * 9/5 + 32; 
            resultado = "Celsius: " + celsius.toFixed(2) + "°C, Fahrenheit: " + fahrenheit.toFixed(2) + "°F";
        }

        return resultado; 
    }

   
    converterButton.addEventListener("click", function () {
        
        const temperatura = parseFloat(temperaturaInput.value); 

        
        const unidadeOrigem = unidadeOrigemSelect.value;

       
        if (!isNaN(temperatura)) {
          
            resultadoDiv.textContent = converterTemperatura(temperatura, unidadeOrigem);
        } else {
            
            resultadoDiv.textContent = "Por favor, digite uma temperatura válida.";
        }
    });
});