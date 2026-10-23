
const screenDetails = document.getElementById(
  "screen-details",
) as HTMLDivElement;

// Navigation Elements
const btnPrevDetails = screenDetails.getElementById(
  "prev-details",
) as HTMLAnchorElement;
const btnNextPay = screenDetails.querySelector("#next-pay") as HTMLButtonElement;

// Form Input Elements
const inputName = screenDetails.querySelector("#input-name") as HTMLInputElement;
const inputPhone = screenDetails.querySelector("#input-phone") as HTMLInputElement;
const inputEnrollment = screenDetails.getElementById(
  "input-enrollment",
) as HTMLInputElement;

// Note the typos from the HTML source ('poassword') are preserved here so they select successfully
const inputPassword = screenDetails.getElementById(
  "input-password",
) as HTMLInputElement;
const inputPassword2 = screenDetails.getElementById(
  "input-password2",
) as HTMLInputElement;


const divError = screenDetails.querySelector("#error") as HTMLDivElement;

function showError(message: string) {
  divError.textContent = message;
  divError.style.display = "block";
}

function hideError() {
  divError.textContent = "";
  divError.style.display = "none";
}

const enrollmentRegex = /^202[0-9]B[A-Z]{3}\d{3}$/;

inputEnrollment.addEventListener("input", () => {
  inputEnrollment.value = inputEnrollment.value.toUpperCase();
});

function validateEnrollment(): boolean {
  const value = inputEnrollment.value.trim();

  if (value === "" || !enrollmentRegex.test(value)) {
    showError("Enrollment number is required");
    return false;
  }
  hideError();
  return true;
}

btnNextPay.addEventListener("click", () => {
  const isEnrollmentValid = validateEnrollment();

  // Check if general inputs satisfy minlength/maxlength requirements
  const isNameValid = inputName.checkValidity();
  const isPhoneValid = inputPhone.checkValidity();
  const isPasswordValid = inputPassword.checkValidity();
  const passwordsMatch = inputPassword.value === inputPassword2.value;
  const passwordEmpty = inputPassword.value.trim() === "";
  if (
    isEnrollmentValid &&
    isNameValid &&
    isPhoneValid &&
    isPasswordValid &&
    passwordsMatch &&
    !passwordEmpty
  ) {
    // validation passed
  } else {
    if (!passwordsMatch) showError("Passwords do not match!");
    if (passwordEmpty) showError("Passwords cannot be empty!");
    // Trigger native browser tooltip popups for other invalid fields (like missing name or short phone)
    if (!isNameValid) inputName.reportValidity();
    else if (!isPhoneValid) inputPhone.reportValidity();
    else if (!isEnrollmentValid) inputEnrollment.reportValidity();
  }
});
