document.addEventListener("DOMContentLoaded", function() {
    const numEl = document.getElementById("input-number");
    const convertBtn = document.getElementById("convert-btn");
    let lengthConv = document.getElementById("length-conv");
    let volumeConv = document.getElementById("volume-conv");
    let massConv = document.getElementById("mass-conv");
    
    //constants
    const meter = 3.281;
    const liter = 0.264;
    const kg = 2.204;
    const ft = 0.305;
    const gallon = 3.78541178;
    const pound = 0.45359237;
    
    //functions
    function meterConvert(num) {
      return (num * meter).toFixed(3);
    }
  
    function literConvert(num) {
      return (num * liter).toFixed(3);
    }
  
    function kgConvert(num) {
      return (num * kg).toFixed(3);
    }
  
    function ftConvert(num) {
      return (num * ft).toFixed(3);
    }
  
    function gallonConvert(num) {
      return (num * gallon).toFixed(3);
    }
  
    function poundConvert(num) {
      return (num * pound).toFixed(3);
    }
  
    function convert() {
      const inputValue = parseFloat(numEl.value);
  
      if (isNaN(inputValue)) {
        return; // Stop execution if the input is not a valid number
      }
  
      lengthConv.textContent = `${inputValue} meters = ${meterConvert(inputValue)} feet | ${inputValue} feet = ${ftConvert(inputValue)} meters`;
      volumeConv.textContent = `${inputValue} liters = ${literConvert(inputValue)} gallons | ${inputValue} gallons = ${gallonConvert(inputValue)} liters`;
      massConv.textContent = `${inputValue} kilos = ${kgConvert(inputValue)} pounds | ${inputValue} pounds = ${poundConvert(inputValue)} kilos`;
    }
  
    convertBtn.addEventListener("click", convert);
  });
  