document.getElementById("convertButton").addEventListener("click", function () {
  const temperature = parseFloat(document.getElementById("temperature").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;

  if (isNaN(temperature)) {
    alert("กรุณาใส่ค่าที่ถูกต้อง.");
    return;
  }

  const result = convertTemperature(temperature, fromUnit, toUnit);
  document.getElementById("result").textContent = `ค่าที่ได้คือ: ${result} ${toUnit}`;
});

function convertTemperature(temperature, fromUnit, toUnit) {
  if (fromUnit === toUnit) return temperature;

  let celsius;

 
  if (fromUnit === "Celsius") {
    celsius = temperature;
  } else if (fromUnit === "Fahrenheit") {
    celsius = (temperature - 32) * 5 / 9;
  } else if (fromUnit === "Kelvin") {
    celsius = temperature - 273.15;
  }

 
  if (toUnit === "Celsius") {
    return celsius;
  } else if (toUnit === "Fahrenheit") {
    return celsius * 9 / 5 + 32;
  } else if (toUnit === "Kelvin") {
    return celsius + 273.15;
  }
}
