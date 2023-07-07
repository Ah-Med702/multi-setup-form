let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let phoneInput = document.getElementById("phone");

let nameErrorSpan = document.querySelector(".name-input .top .error-span");
let emailErrorSpan = document.querySelector(".email-input .top .error-span");
let phoneErrorSpan = document.querySelector(".phone-input .top .error-span");

let nextBtn = document.getElementById("nextBtn");

let nameValid = /^[a-z0-9_-]{3,10}\s[a-z0-9_-]{3,10}$/;
let emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
let phoneValid = /^[0-9]\d{10}$/;

nextBtn.addEventListener("click", handleClick);

function handleClick() {
    if (nameInput.value == "") {
        nameInput.style.border = "1px solid var(--Strawberry-red)";
        nameErrorSpan.style.display = "block";
    } else {
        nameInput.style.border = "1px solid var(--Light-gray)";
        nameErrorSpan.style.display = "none";
    }
    if (emailInput.value == "") {
        emailInput.style.border = "1px solid var(--Strawberry-red)";
        emailErrorSpan.style.display = "block";
    } else {
        emailInput.style.border = "1px solid var(--Light-gray)";
        emailErrorSpan.style.display = "none";
    }
    if (phoneInput.value == "") {
        phoneInput.style.border = "1px solid var(--Strawberry-red)";
        phoneErrorSpan.style.display = "block";
    } else {
        phoneInput.style.border = "1px solid var(--Light-gray)";
        phoneErrorSpan.style.display = "none";
    }

    if (nameInput.value.match(nameValid)) {
        return true;
    } else {
        nameInput.style.border = "1px solid var(--Strawberry-red)";
        nameErrorSpan.style.display = "block";
        nameErrorSpan.innerHTML = "name not valid";
    }

    if (emailInput.value.match(emailValid)) {
        return true;
    } else {
        emailInput.style.border = "1px solid var(--Strawberry-red)";
        emailErrorSpan.style.display = "block";
        emailErrorSpan.innerHTML = "email not valid";
    }

    if (phoneInput.value.match(phoneValid)) {
        return true;
    } else {
        phoneInput.style.border = "1px solid var(--Strawberry-red)";
        phoneErrorSpan.style.display = "block";
        phoneErrorSpan.innerHTML = "phone not valid";
    }
}

let switchBtn = document.getElementById("switch-1");
let switchMonthlySpan = document.querySelector(".plan-option .monthly");
let switchYearlySpan = document.querySelector(".plan-option .yearly");
let monthSalary = document.querySelectorAll(".select-plan .month-salary");
let yearSalary = document.querySelectorAll(".select-plan .year-salary");
let addOns = document.querySelectorAll(".select-plan .add-ons");
document.getElementById("switch-1").addEventListener("change", function () {
    if (switchBtn.checked) {
        switchMonthlySpan.style.color = "var(--Cool-gray)";
        switchYearlySpan.style.color = "var(--Marine-blue)";
        monthSalary.forEach((monthSalary) => {
            monthSalary.style.display = "none";
        });
        yearSalary.forEach((yearSalary) => {
            yearSalary.style.display = "block";
        });
        addOns.forEach((addOns) => {
            addOns.style.display = "block";
        });
    } else {
        switchMonthlySpan.style.color = "var(--Marine-blue)";
        switchYearlySpan.style.color = "var(--Cool-gray)";

        monthSalary.forEach((monthSalary) => {
            monthSalary.style.display = "block";
        });
        yearSalary.forEach((yearSalary) => {
            yearSalary.style.display = "none";
        });
        addOns.forEach((addOns) => {
            addOns.style.display = "none";
        });
    }
});

// let checkBox = document.querySelectorAll('input[type="checkbox"]');
// function seeChecked() {
//     checkBox.forEach((box) => {
//         if (box.hasAttribute("checked")) {
//             let div = document.querySelector(`.${box.id}`);
//             div.classList.add("active");
//         }
//     });
// }
// seeChecked();
// let labels = document.querySelectorAll("label");

// labels.forEach((label) => {
//     label.addEventListener("click", () => {
//         let checkBox = document.querySelector(`#${label.className}`);
//         checkBox.toggleAttribute("checked");
//         seeChecked();
//     });
// });
