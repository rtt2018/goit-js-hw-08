const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const galleryList = document.querySelector(".gallery");

const elementsArray = images.map((element) => {
  // Створюємо li і додаємо клас
  const addListItem = document.createElement("li");
  addListItem.classList.add("gallery-item");
  // Створюємо тег a і додаємо клас та href
  const imgLink = document.createElement("a");
  imgLink.classList.add("gallery-link");
  imgLink.href = element.original;
  // Створюємо тег img p з потрібними атрибутами чи як їх там
  const addImage = document.createElement("img");
  addImage.alt = element.description;
  addImage.src = element.preview;
  addImage.width = "360";
  addImage.height = "200";
  addImage.classList.add("gallery-image");
  addImage.dataset.source = element.original;
  // Вкладаємо елементи один в один і повертаємо li
  imgLink.appendChild(addImage);
  addListItem.appendChild(imgLink);
  return addListItem;
});

galleryList.append(...elementsArray);

galleryList.addEventListener("click", openModalWindow);

function openModalWindow(event) {
  event.preventDefault();
  if (event.target !== event.currentTarget) {
    const instance = basicLightbox.create(`
      <p class="modal-header">${event.target.alt}</p>
      <img src="${event.target.dataset.source}" width="1112" height="640">
    `);
    instance.element().classList.add("modal-overlay");

    instance.show();

    const modalContent = instance.element();
    modalContent.addEventListener("click", () => {
      instance.close();
    });
  }
}
