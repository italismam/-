const firstNumber = document.getElementById("first");
const finalNumber = document.getElementById("result");
const but = document.getElementById("butt");

but.addEventListener("click", function() {
    const numbers = firstNumber.value.split(" ").map(Number);
    let sum = 0;
    for (let i = 1; i < numbers.length; i++){
        if (numbers[i] === numbers[0]){
            while(i < numbers.length){
                sum += numbers[i];
                finalNumber.innerHTML = sum - numbers[0];
                i++;
            }
        } else {
            finalNumber.innerHTML = -10;
        }
    }
})