import "./style.css";
import "./screenDetails";
const btnStartAutomate = document.querySelector(
  "#start-automating",
) as HTMLButtonElement;
const btnFileComplaint = document.querySelector(
  "#file-complaint",
) as HTMLAnchorElement;
btnStartAutomate.addEventListener("click", () => {
  console.log("Automate clicked");
});
btnFileComplaint.addEventListener("click", () => {
  console.log("File a Complaint clicked");
});



