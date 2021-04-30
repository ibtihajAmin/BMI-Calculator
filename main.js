const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;
    let feet = document.querySelector('#feet').value;
    let inch = document.querySelector('#inch').value;

    let inchToFeet = inch / 12;
    console.log(feet);
    console.log(inchToFeet);
    let feetToCm = (feet * 30.48) + (inchToFeet * 30.48);

    let showResult = document.getElementById('show-result');
    let convertedUnit = document.getElementById('show-convert-result');

    showResult.innerHTML = (weight / ((height * height) / 10000)).toFixed(3);
    convertedUnit.innerHTML = feetToCm.toFixed(3);
});
