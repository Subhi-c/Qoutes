const qoutesEl = document.getElementById("qoutes");
const btnEl = document.getElementById("qoute-btn");
//let qoute = "";
const generateqoute = async () => {
  const result = await fetch("https://api.adviceslip.com/advice");
  const data = await result.json();
  qoutesEl.innerText = data.slip.advice;
};
// function generateqoute() {
//   fetch("https://api.adviceslip.com/advice")
//     .then((result) => {
//       return result.json();
//     })
//     .then((data) => {

//       qoute = data.slip.advice;
//       qoutesEl.innerText = qoute;
//     });
// }
btnEl.addEventListener("click", generateqoute);
generateqoute();
