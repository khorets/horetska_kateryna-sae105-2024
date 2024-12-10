document.addEventListener("DOMContentLoaded", () => {
  // Получаем кнопки и контент
  const btnFr = document.getElementById("fr");
  const btnEn = document.getElementById("en");
  const contentFr = document.getElementById("content-fr");
  const contentEn = document.getElementById("content-en");

  // Скрываем один контент и показываем другой
  const showFrench = () => {
    contentFr.classList.remove("hidden");
    contentEn.classList.add("hidden");
  };

  const showEnglish = () => {
    contentEn.classList.remove("hidden");
    contentFr.classList.add("hidden");
  };

  // Назначаем обработчики событий
  btnFr.addEventListener("click", showFrench);
  btnEn.addEventListener("click", showEnglish);
});

document.addEventListener("DOMContentLoaded", () => {
  // Получаем кнопки и контент
  const btnFr1 = document.getElementById("fr1");
  const btnEn1 = document.getElementById("en1");
  const contentFr1 = document.getElementById("content-fr1");
  const contentEn1 = document.getElementById("content-en1");

  // Скрываем один контент и показываем другой
  const showFrench = () => {
    contentFr1.classList.remove("hidden");
    contentEn1.classList.add("hidden");
  };

  const showEnglish = () => {
    contentEn1.classList.remove("hidden");
    contentFr1.classList.add("hidden");
  };

  // Назначаем обработчики событий
  btnFr1.addEventListener("click", showFrench);
  btnEn1.addEventListener("click", showEnglish);
});