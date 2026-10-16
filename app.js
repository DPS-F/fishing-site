const catchBtn = document.querySelector("#catch-btn");
const themeBtn = document.querySelector("#theme-btn");
const fish = document.querySelector("#fish");
const fishName = document.querySelector("#fish-name");
const factText = document.querySelector("#fact-text");
const rod = document.querySelector(".rod-img");    


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

function getRandomFish() {
    const randomIndex = Math.floor(Math.random() * fishes.length);
    return fishes[randomIndex];
}

catchBtn.addEventListener("click", () => {
    rod.classList.add("bite");

    setTimeout(() => {
        const currentFish = getRandomFish();
        fish.classList.add("visible");
        fishName.textContent = currentFish.name;
        factText.textContent = currentFish.fact;
    }, 300);

    setTimeout(() => {
        rod.classList.remove("bite");
        fish.classList.remove("visible");
    }, 2500);
});

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});
