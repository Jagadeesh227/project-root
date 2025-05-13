const form = document.getElementById("contactForm");

let startTime;
form.addEventListener("focusin", () => {
    if (!startTime) startTime = Date.now();
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let duration = ((Date.now() - startTime) / 1000).toFixed(2);
    alert(`Form submitted successfully!\nTime taken: ${duration} seconds`);
    form.reset();
});
