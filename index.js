let btnContainer = document.querySelector(".btn__container");
let number = document.querySelector(".number");
let submit = document.querySelector(".cta");
let cardRating = document.querySelector(".card.card__rating");
let cardThank = document.querySelector(".card.card__thank");

console.log(submit);
console.log(cardRating);
console.log(cardThank);

btnContainer.addEventListener("click", (e) => {
  let btnValor = e.target.innerText;
  number.innerText = btnValor;

  if (btnValor > 0 || btnValor <= 5) {
    submit.addEventListener("click", () => {
      cardRating.style.display = "none";
      cardThank.style.display = "flex";
    });
  }
});
