let section5 = document.querySelector(".section5");

let load = [
    {
        id: 1,
        image: "./image/image6.png",
        sign: "./svg/heart.svg",
        text:"Торт Наполеон",
        price:"2280 грн"
    },
    {
        id: 2,
        image: "./image/image7.png",
        sign: "./svg/heart.svg",
        text:"Киевский торт",
        price:"1680 грн"
    },
    {
        id: 3,
        image: "./image/image8.png",
        sign: "./svg/heart.svg",
        text:"Торт Левантинер",
        price:"1270 грн"
    },
    {
        id: 4,
        image: "./image/image9.png",
        sign: "./svg/heart.svg",
         text:"Торт на день рождения",
        price:"2020 грн"
    },
    {
        id: 5,
        image: "./image/image6.png",
        sign: "./svg/heart.svg",
      text:"Торт Наполеон",
        price:"2280 грн"
    },
    {
        id: 6,
        image: "./image/image7.png",
        sign: "./svg/heart.svg",
        text:"Киевский торт",
        price:"1680 грн"
    },
    {
        id: 7,
        image: "./image/image8.png",
        sign: "./svg/heart.svg",
        text:"Торт Левантинер",
        price:"1270 грн"
    },
    {
        id: 8,
        image: "./image/image9.png",
        sign: "./svg/heart.svg",
        text:"Торт на день рождения",
        price:"2020 грн"
    },
];

section5.innerHTML = load.map((item) => {
    return `
        <div class="card">
            <div class="card-in">
                <img src="${item.image}" alt="Item ${item.id}">
                <div class="heart">
                    <img src="${item.sign}" />
                </div>
                <button>Top</button>
            </div>
            <div class="card-bottom">
                <div class="stars-container"></div>
                <div class="text">
                    <p>${item.text}</p>
                    <h3>${item.price}</h3>
                </div>
                <button class="order-btn">Заказать
                    <img src="./image/image10.png" />
                </button>
            </div>
        </div>`;
}).join("");

document.addEventListener("DOMContentLoaded", () => {
    const starsContainers = document.querySelectorAll(".stars-container");
    const starCount = 5;

    starsContainers.forEach((container) => {
        for (let i = 0; i < starCount; i++) {
            const img = document.createElement("img");
            img.src = "./svg/star.svg"; 
            img.alt = "Star";
            container.appendChild(img);
        }
    });

    function openModal() {
        const modal = document.getElementById("modal");
        modal.style.display = "flex"; 
    }

    function closeModal() {
        const modal = document.getElementById("modal");
        modal.style.display = "none";
    }
    function submitOrder() {
        const email = document.getElementById("email");
        const address = document.getElementById("address");
        const phone = document.getElementById("phone");

        if (email.value && address.value && phone.value) {
            alert(`Заказ отправлен!\nEmail: ${email.value}\nАдрес: ${address.value}\nТелефон: ${phone.value}`);
            email.value = "";
            address.value = "";
            phone.value = "";
            closeModal();
        } else {
            alert("Пожалуйста, заполните все поля.");
        }
    }

    const orderButtons = document.querySelectorAll(".order-btn");
    orderButtons.forEach((button) => {
        button.addEventListener("click", openModal);
    });
    document.querySelector(".submit").addEventListener("click", submitOrder);
    document.querySelector(".cancel").addEventListener("click", closeModal);
});
