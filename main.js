var output = document.querySelector("#output");

output.style.visibility = "hidden";

//console.log("hello from js");

// Catch user input
document.querySelector("#inputValue").addEventListener("input", convert);

// Catch unit selection
document.querySelector("#unit").addEventListener("input", convert);

function convert(e) {
      // Get user input 
    var input = document.querySelector("#inputValue").value;
    
    // Get unit selector
    var unit = document.querySelector("#unit").value;

    // console.log(input + " " + unit);

    output.style.visibility = "visible";
    // check the unit value
    switch (unit) {
        case "lbs":
            convertLbs(input);
            break;
        case "grams":
            convertGrams(input);
            break;
        case "kilograms":
            convertKilograms(input);
            break;
        case "meters":
            convertMeters(input);
            break;
    }
}

function convertLbs(num) {
    //console.log(num);
    output.innerHTML = 
            // Grams
        '<div class="card bg-primary mb-2">' +
            '<div class="card-header">' +
                '<h4>Grams:</h4>' +
                '<div>' + 
                num * 453.592 + 
                '</div>' +
            '</div>' +
        '</div>' +
            // Kilograms
        '<div class="card bg-success mb-2">' +
            '<div class="card-header">' +
                '<h4>Kilograms:</h4>' +
                '<div>' + 
                num * 453.592 /1000 + 
                '</div>' +
            '</div>' +
        '</div>' +
            // Ounces
        '<div class="card bg-danger mb-2">' +
            '<div class="card-header">' +
                '<h4>Ounces:</h4>' +
                '<div>' + 
                num * 16 + 
                '</div>' +
            '</div>' +
        '</div>' ;
        }

function convertGrams(num) {
    output.innerHTML =
        '<div class="card bg-primary mb-2">' +
            '<div class="card-header">' +
                '<h4>Pounds:</h4>' +
                '<div>' + 
                num * 0.00220462 + 
                "</div>" +
            '</div>' +
        '</div>' +
            // Kilograms
        '<div class="card bg-success mb-2">' +
            '<div class="card-header">' +
                '<h4>Kilograms:</h4>' +
                '<div>' + 
                num  / 1000 + 
                "</div>" +
            "</div>" +
        "</div>" +
            // Ounces
        '<div class="card bg-danger mb-2">' +
            '<div class="card-header">' +
                '<h4>Ounces:</h4>' +
                '<div>' + 
                num * 0.035274 + 
                "</div>" +
            ("</div>") +
        ("</div>"); 
}

function convertKilograms(num) {  
    output.innerHTML =
    '<div class="card bg-primary mb-2">' +
            '<div class="card-header">' +
                '<h4>Pounds:</h4>' +
                '<div>' + 
                num * 0.00220462 * 1000 +
                "</div>"+
            "</div>"+
        "</div>" +
            // Grams
        '<div class="card bg-success mb-2">' +
            '<div class="card-header">' +
                '<h4>Grams:</h4>' +
                '<div>' + 
                num  * 1000 + 
                "</div>"+
            "</div>" +
        "</div>" +
            // Ounces
        '<div class="card bg-danger mb-2">' +
            '<div class="card-header">' +
                '<h4>Ounces:</h4>' +
                '<div>' + 
                num * 0.035274 * 1000 + 
                "</div>" +
            '</div>' +
        '</div>' ;
}

function convertMeters(num) {
    output.innerHTML =
                // Miles
        '<div class="card bg-primary mb-2">' +
            '<div class="card-header">' +
                '<h4>Miles:</h4>' +
                '<div>' + 
                num * 0.000621371 + 
                '</div>' +
            '</div>' +
        '</div>' +
            // Inches
        '<div class="card bg-success mb-2">' +
            '<div class="card-header">' +
                '<h4>Inches:</h4>' +
                '<div>' + 
                num  * 39.370066559999998 + 
                '</div>' +
            '</div>' +
        '</div>';
}



