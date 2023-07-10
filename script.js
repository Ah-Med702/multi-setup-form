let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let phoneInput = document.getElementById("phone");

let nameErrorSpan = document.querySelector(".name-input .top .error-span");
let emailErrorSpan = document.querySelector(".email-input .top .error-span");
let phoneErrorSpan = document.querySelector(".phone-input .top .error-span");

let nameValid = /^[a-z0-9_-]{2,10}\s[a-z0-9_-]{2,10}$/g;
let emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
let phoneValid = /^[0-9]\d{10}$/;

function checkValidate() {
    if (nameInput.value.match(nameValid)) {
        nameInput.style.border = "1px solid var(--Light-gray)";
        nameErrorSpan.style.display = "none";
        nameErrorSpan.innerHTML = "";
    } else {
        nameInput.style.border = "1px solid var(--Strawberry-red)";
        nameErrorSpan.style.display = "block";
        nameErrorSpan.innerHTML = "name is not valid";
    }

    if (emailInput.value.match(emailValid)) {
        emailInput.style.border = "1px solid var(--Light-gray)";
        emailErrorSpan.style.display = "none";
        emailErrorSpan.innerHTML = "";
    } else {
        emailInput.style.border = "1px solid var(--Strawberry-red)";
        emailErrorSpan.style.display = "block";
        emailErrorSpan.innerHTML = "email is not valid";
    }

    if (phoneInput.value.match(phoneValid)) {
        phoneInput.style.border = "1px solid var(--Light-gray)";
        phoneErrorSpan.style.display = "none";
        phoneErrorSpan.innerHTML = "";
    } else {
        phoneInput.style.border = "1px solid var(--Strawberry-red)";
        phoneErrorSpan.style.display = "block";
        phoneErrorSpan.innerHTML = "phone is not valid";
    }
}

let currentStep = 1;
let nextBtn1 = document.querySelector(".step-1-btn");
let steps = document.querySelectorAll(".step");
let menuSteps = document.querySelectorAll(".menu-step .number");

function showStep(step) {
    steps.forEach(function (element) {
        element.style.display = "none";
    });
    steps[step - 1].style.display = "flex";
}

function showMenuStep(step) {
    menuSteps.forEach(function (element) {
        element.classList.remove("active");
    });
    if (step <= 4) {
        menuSteps[step - 1].classList.add("active");
    }
}
showMenuStep(currentStep);

function nextStep() {
    currentStep++;
    showStep(currentStep);
    showMenuStep(currentStep);
}

function prevStep() {
    currentStep--;
    showStep(currentStep);
    showMenuStep(currentStep);
}

nextBtn1.addEventListener("click", () => {
    checkValidate();
    if (
        nameInput.value.match(nameValid) &&
        emailInput.value.match(emailValid) &&
        phoneInput.value.match(phoneValid)
    ) {
        let inputs = document.querySelectorAll(".personal-info input");
        inputs.forEach((input) => {
            input.style.border = "1px solid var(--Light-gray)";
        });
        let errorSpans = document.querySelectorAll(".error-span");
        errorSpans.forEach((errorSpan) => {
            errorSpan.style.display = "none";
            errorSpan.innerHTML = "";
        });
        nextBtn1.addEventListener("click", nextStep());
    }
});

// ==========================================================================================
// ======================================    step 2    ======================================
// ==========================================================================================

let switchBtn = document.getElementById("switch-1");
let switchMonthlySpan = document.querySelector(".plan-option .monthly");
let switchYearlySpan = document.querySelector(".plan-option .yearly");
let monthSalary = document.querySelectorAll(".month-salary");
let yearSalary = document.querySelectorAll(".year-salary");
let addOns = document.querySelectorAll(".select-plan .add-ons");
let plans = document.querySelectorAll(".plans .plan");

document.getElementById("switch-1").addEventListener("change", function () {
    if (switchBtn.checked) {
        switchMonthlySpan.style.color = "var(--Cool-gray)";
        switchYearlySpan.style.color = "var(--Marine-blue)";
        monthSalary.forEach((monthSalary) => {
            monthSalary.style.display = "none";
        });
        yearSalary.forEach((yearSalary) => {
            yearSalary.style.display = "inline-block";
        });
        addOns.forEach((addOns) => {
            addOns.style.display = "block";
        });
    } else {
        switchMonthlySpan.style.color = "var(--Marine-blue)";
        switchYearlySpan.style.color = "var(--Cool-gray)";

        monthSalary.forEach((monthSalary) => {
            monthSalary.style.display = "inline-block";
        });
        yearSalary.forEach((yearSalary) => {
            yearSalary.style.display = "none";
        });
        addOns.forEach((addOns) => {
            addOns.style.display = "none";
        });
    }
});

plans.forEach((plan) => {
    plan.addEventListener("click", (e) => {
        plans.forEach((plan) => {
            plan.classList.remove("active");
            e.target.classList.add("active");
        });
    });
});

let prevBtns = document.querySelectorAll(".prev-btn");
prevBtns.forEach(function (element) {
    element.addEventListener("click", prevStep);
});

let nextBtn2 = document.querySelector(".step-2-btn");
nextBtn2.addEventListener("click", () => {
    nextStep();
});

// ==========================================================================================
// ======================================    step 3    ======================================
// ==========================================================================================

let boxs = document.querySelectorAll(".add input[type='checkbox']");
let divs = document.querySelectorAll(".add");
let labels = document.querySelectorAll(".add-label");

boxs.forEach((box, index) => {
    box.addEventListener("change", () => {
        if (box.checked) {
            divs[index].classList.add("active");
        } else {
            divs[index].classList.remove("active");
        }
    });
});

labels.forEach((label, index) => {
    label.addEventListener("click", () => {
        let checkbox = document.getElementById(`checkbox-${index + 1}`);
        if (checkbox.checked) {
            divs[index].classList.add("active");
        } else {
            divs[index].classList.remove("active");
        }
    });
});

let nextBtn3 = document.querySelector(".step-3-btn");
let checkedErrorSpan = document.querySelector(".checked-error-span");
nextBtn3.addEventListener("click", () => {
    let checked = false;
    boxs.forEach((box) => {
        if (box.checked) {
            checked = true;
        }
    });
    if (checked) {
        checkedErrorSpan.style.display = "none";
        nextStep();
    }
    if (!checked) {
        checkedErrorSpan.style.display = "block";
    }

    let activeItems = document.querySelectorAll(".add.active label");
    let ItemsDiv = document.querySelector(".summary-list .items");
        ItemsDiv.innerHTML = ''

    activeItems.forEach((activeItem) => {
        let item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = activeItem.innerHTML;
        ItemsDiv.appendChild(item);
    });

});

let changeSpan = document.querySelector(
    ".summary-list .head .title .bottom span"
);

changeSpan.addEventListener("click", () => {
    currentStep = currentStep - 2;
    showStep(currentStep);
    showMenuStep(currentStep);
});

// ==========================================================================================
// ======================================    step 4    ======================================
// ==========================================================================================

let nextBtn4 = document.querySelector(".step-4-btn");
nextBtn4.addEventListener("click", () => {
    nextStep();
});

showStep(currentStep);
