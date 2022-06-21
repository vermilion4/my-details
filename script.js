// create object with my details
let myDetails = {
    name: "Adaeze Ndupu",
    height: 1.95,
    country: "Nigeria"
}

// Create a p tag for the three properties of myDetails
let name = document.createElement("p");
let height = document.createElement("p");
let country = document.createElement("p");

// Add the text content to the p tags for name
name.innerHTML = "Name: " + myDetails.name;
// append the p tag to the div
document.getElementById("demo").appendChild(name);

// Add the text content to the p tags for height
height.innerHTML = "Height: " + myDetails.height + "m";
document.getElementById("demo").appendChild(height);

// Add the text content to the p tags for country
country.innerHTML = "Country: " + myDetails.country;
document.getElementById("demo").appendChild(country);