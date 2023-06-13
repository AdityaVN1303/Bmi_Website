let button = document.getElementById('btn');
let d_plan = document.getElementById('dietPlan');
let removed = document.getElementById('remove');
button.addEventListener('click', ()=>{
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let height_status = false, weight_status = false;

    if (height === '' || isNaN(height) || (height <= 0)) {
        document.getElementById('height_error').innerHTML = "Please Provide A Value";
    }
    else{
        document.getElementById('height_error').innerHTML = '';
        height_status = true;
    }
    if (weight === '' || isNaN(weight) || (weight <= 0)) {
        document.getElementById('weight_error').innerHTML = "Please Provide A Value";
    }
    else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status = true;
    }

    if (height_status && weight_status) {
       const bmi = (weight / ((height*height)/10000)).toFixed(2); 
       if (bmi < 18.6) {
        result.innerHTML = "Under Wight : " + bmi ;
        removed.style.display = "block";
        dietPlan.href = "https://drive.google.com/uc?id=1S3jQVJq-b7ST6Oy04j8KDEdZkoB1zx7p&export=download";
       }
       else if(bmi >= 18.6 && bmi <24){
        result.innerHTML = "Normal : " + bmi;
        removed.style.display = "none";
       }
       else{
        result.innerHTML = "Over Weight : " + bmi ;
        removed.style.display = "block";
        dietPlan.href = "https://drive.google.com/uc?id=1DnK-cUH3ke7HBCBbKTfzQD-GNxUWiIMy&export=download";
       }
    }
    else{
        alert("The form has Errors");
        result.innerHTML = "";
    }
})