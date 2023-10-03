const inputEmail = document.querySelector(".email-input");
const checkEmail = document.querySelector(".hide");
inputEmail.addEventListener("click", () => {
    checkEmail.style.display = "block";
});

document.addEventListener("click", (event) => {
    const target = event.target;
    if (target !== inputEmail && target !== checkEmail) {
        checkEmail.style.display = "none";
    }
});