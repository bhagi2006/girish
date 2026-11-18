
function orderCoffee() {
    alert("Thank you for choosing Coffee Corner! ☕");
}

function contactUs() {
    alert("Welcome! Contact Coffee Corner for more details.");
}

document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    document.getElementById("result").innerHTML =
        "Thank you, " + name + "! Your message has been received.";

    document.getElementById("contactForm").reset();
});
