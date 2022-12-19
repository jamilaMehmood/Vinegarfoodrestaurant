const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Bag X Luxury",
    price: 120,
    colors: [
      {
        code: "Darkgreen",
        img: "./stock/Gbag1.png",
      },
      {
        code: "rgb(255, 216, 168)",
        img: "./stock/Gbag2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Stylish Bag",
    price: 78,
    colors: [
      {
        code: "lightblue",
        img: "./stock/gbag2 (1).png",
      },
      {
        code: "rgb(255, 216, 168)",
        img: "./stock/gbag2 (2).png",
      },
    ],
  },
  {
    id: 3,
    title: "Backpack",
    price: 99,
    colors: [
      {
        code: "Red",
        img: "./stock/Bbag3.png",
      },
      {
        code: "Gray",
        img: "./stock/Bbag4.png",
      },
    ],
  },
  {
    id: 4,
    title: "School Bag",
    price: 88,
    colors: [
      {
        code: "Blue",
        img: "./stock/Sbag2.png",
      },
      {
        code: "Yellow",
        img: "./stock/Sbag1.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Hand Bag",
    price: 59,
    colors: [
      {
        code: "Black",
        img: "./stock/Hbag1.jpg",
      },
      {
        code: "Pink",
        img: "./stock/Hbag2.jpg",
      },
    ],
  },
  {
    id: 6,
    title: "Leptop Bag",
    price: 110,
    colors: [
      {
        code: "Black",
        img: "./stock/Lbag1.jpg",
      },
      {
        code: "rgb(163, 0, 0)",
        img: "./stock/Lbag2.png",
      },
    ],
  },
  {
    id: 7,
    title: "Baby Bag",
    price: 40,
    colors: [
      {
        code: "Brown",
        img: "./stock/Kbag1.png",
      },
      {
        code: "black",
        img: "./stock/Kbag2.jpg",
      },
    ],
  },
  {
    id: 8,
    title: "Baba Bag",
    price: 42,
    colors: [
      {
        code: "yellow",
        img: "./stock/KBbag2.png",
      },
      {
        code: "green",
        img: "./stock/KBbag1.jpg",
      },
    ],
  },
  {
    id: 9,
    title: "Shoulder Bag",
    price: 55,
    colors: [
      {
        code: "Black",
        img: "./stock/Sdbag1.jpg",
      },
      {
        code: "Red",
        img: "./stock/Sdbag2.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


