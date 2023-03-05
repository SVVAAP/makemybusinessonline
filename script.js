const doneButton = document.getElementById("done-button");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const whatsappNumber = "7899535703";

doneButton.addEventListener("click", function () {
let message = "I'm interested in the following services:\n";
checkboxes.forEach(function (checkbox) {
if (checkbox.checked) {
message += "- " + checkbox.nextElementSibling.textContent + "\n";
}
});
window.open("https://api.whatsapp.com/send?phone=" + whatsappNumber + "&text=" + encodeURIComponent(message));
});