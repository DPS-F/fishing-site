const catchBtn = document.querySelector("#catch-btn");      // Кнопка "Поймать рыбу"
const themeBtn = document.querySelector("#theme-btn");      // Кнопка "Сменить тему"
const fish = document.querySelector("#fish");               // Рыбка (эмодзи)
const fishName = document.querySelector("#fish-name");      // Заголовок с названием рыбы
const factText = document.querySelector("#fact-text");      // Текст с фактом
const rod = document.querySelector(".rod-img");    


// Массив с рыбами и фактами о них
const fishes = [
    { name: "Щука", fact: "Щука — хищник, который может развивать скорость до 30 км/ч." },
    { name: "Карась", fact: "Карась любит тину и может жить в пруду, где почти нет кислорода." },
    { name: "Окунь", fact: "Окунь — стайная рыба, охотится на мальков и мелких рачков." },
    { name: "Сом", fact: "Сом — самая крупная пресноводная рыба, может весить до 300 кг." },
    { name: "Лещ", fact: "Лещ предпочитает глубокие места и питается со дна." },
    { name: "Карп", fact: "Карп может жить более 50 лет и запоминает место, где его кормят." },
    { name: "Судак", fact: "Судак — ночной хищник, у него отличное зрение в темноте." },
    { name: "Плотва", fact: "Плотва — маленькая, но очень быстрая рыбка, любит мелководье." }
];

// Функция выбирает случайную рыбу из массива
function getRandomFish() {
    const randomIndex = Math.floor(Math.random() * fishes.length);
    return fishes[randomIndex];
}

// Обработчик клика по кнопке "Поймать рыбу"
catchBtn.addEventListener("click", () => {
    // 1. Наклоняем удочку (добавляем класс "bite")
    rod.classList.add("bite");

    // 2. Через 300 мс показываем рыбу и текст
    setTimeout(() => {
        const currentFish = getRandomFish();  // Берём случайную рыбу
        fish.classList.add("visible");        // Показываем рыбку
        fishName.textContent = currentFish.name;   // Пишем имя
        factText.textContent = currentFish.fact;   // Пишем факт
    }, 300);

    // 3. Через 2.5 секунды убираем всё обратно
    setTimeout(() => {
        rod.classList.remove("bite");      // Удочка возвращается
        fish.classList.remove("visible");   // Рыбка исчезает
    }, 2500);
});

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});
