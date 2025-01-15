
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
const flowersCard = [
    {
      id: 1,
      title: "Мечтательница",
      price: 2280,
      currency: "грн",
      rating: 5,
      image: "./image/image 18.png",
      tag: "ТОП",
      buttonText: "Заказать",
      quickOrderText: "Быстрый заказ",
      heartIcon: "./image/Frame 46.svg",
      ratingIcon: "./image/Group 4 (1).svg",
      patternImage: "./image/image 10 (3).png"
    },
    {
      id: 1,
      title: "Мечтательница",
      price: 2280,
      currency: "грн",
      rating: 5,
      image: "./image/image 18 (1).png",
      tag: "ТОП",
      buttonText: "Заказать",
      quickOrderText: "Быстрый заказ",
      heartIcon: "./image/Frame 46.svg",
      ratingIcon: "./image/Group 4 (1).svg",
      patternImage: "./image/image 10 (3).png"
    },
    {
      id: 1,
      title: "Мечтательница",
      price: 2280,
      currency: "грн",
      rating: 5,
      image: "./image/image 18 (2).png",
      tag: "ТОП",
      buttonText: "Заказать",
      quickOrderText: "Быстрый заказ",
      heartIcon: "./image/Frame 46.svg",
      ratingIcon: "./image/Group 4 (1).svg",
      patternImage: "./image/image 10 (3).png"
    },
    {
      id: 1,
      title: "Мечтательница",
      price: 2280,
      currency: "грн",
      rating: 5,
      image: "./image/image 18 (3).png",
      tag: "ТОП",
      buttonText: "Заказать",
      quickOrderText: "Быстрый заказ",
      heartIcon: "./image/Frame 46.svg",
      ratingIcon: "./image/Group 4 (1).svg",
      patternImage: "./image/image 10 (3).png"
    },
    {
      id: 1,
      title: "Мечтательница",
      price: 2280,
      currency: "грн",
      rating: 5,
      image: "./image/image 18.png",
      tag: "ТОП",
      buttonText: "Заказать",
      quickOrderText: "Быстрый заказ",
      heartIcon: "./image/Frame 46.svg",
      ratingIcon: "./image/Group 4 (1).svg",
      patternImage: "./image/image 10 (3).png"
    },
    {
      id: 1,
      title: "Мечтательница",
      price: 2280,
      currency: "грн",
      rating: 5,
      image: "./image/image 18 (1).png",
      tag: "ТОП",
      buttonText: "Заказать",
      quickOrderText: "Быстрый заказ",
      heartIcon: "./image/Frame 46.svg",
      ratingIcon: "./image/Group 4 (1).svg",
      patternImage: "./image/image 10 (3).png"
    },
    {
      id: 1,
      title: "Мечтательница",
      price: 2280,
      currency: "грн",
      rating: 5,
      image: "./image/image 18 (2).png",
      tag: "ТОП",
      buttonText: "Заказать",
      quickOrderText: "Быстрый заказ",
      heartIcon: "./image/Frame 46.svg",
      ratingIcon: "./image/Group 4 (1).svg",
      patternImage: "./image/image 10 (3).png"
    },
    {
      id: 1,
      title: "Мечтательница",
      price: 2280,
      currency: "грн",
      rating: 5,
      image: "./image/image 18 (3).png",
      tag: "ТОП",
      buttonText: "Заказать",
      quickOrderText: "Быстрый заказ",
      heartIcon: "./image/Frame 46.svg",
      ratingIcon: "./image/Group 4 (1).svg",
      patternImage: "./image/image 10 (3).png"
    },
   
  ];
  
  const cardContainer = document.getElementById('block4');

  cardContainer.innerHTML = flowersCard.map(productData => `
    <div class="w-[340px] h-[570px] border border-[#956D84] shadow-lg mb-4">
      <div class="relative bg-[#FBF9FA] w-[335px] h-[305px]">
        <img src="${productData.image}" alt="Букет цветов" class="w-[300px] h-[310px]   ml-[20px]    object-cover rounded-t-lg">
        <div class="absolute w-[56px] h-[56px] text-center pt-[15px] text-[16px] bottom-[20px] right-4 bg-[#9D758C63] text-[#956D84] rounded-full font-[400] shadow-md">
          ${productData.tag}
        </div>
        <img src="${productData.heartIcon}" alt="Heart Icon" class="absolute top-3 right-3 p-2">
      </div>
      <div class="p-4">
        <div class="flex mb-7">
          <img src="${productData.ratingIcon}" alt="Rating">
        </div>
        <div class="flex justify-between items-center mb-7">
          <p class="text-[18px] text-[#333333] font-[300]">${productData.title}</p>
          <p class="text-[18px] font-[700] text-[#956D84]">${productData.price} ${productData.currency}</p>
        </div>
        <button class="w-[220px] h-[63px] bg-[#956D84] ml-[40px] text-white rounded-[7px] font-semibold text-lg relative hover:bg-[#622d42] overflow-hidden transition-all flex items-center justify-center">
          <span class="relative z-10">${productData.buttonText}</span>
          <img src="${productData.patternImage}" alt="Узор" class="absolute w-[90px] ml-[150px]">
        </button>
        <button class="w-full mt-2 text-[#828282] font-[400] hover:underline">${productData.quickOrderText}</button>
      </div>
    </div>
  `).join('');
  

