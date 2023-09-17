import axios from "axios";

const BASE_URL = "https://tasty-treats-backend.p.goit.global/api/recipes/";
const ID = "6462a8f74c3d0ddd28897fc1";
const currentRecipe = document.querySelector(".current-vrapper");

async function getRecipe(ID) {
  try {
    const response = await axios.get(`${BASE_URL}${ID}`, {});

    const data = response.data;
    currentRecipe.innerHTML = createMarkup(data);

    // container.insertAdjacentHTML('beforeend', createMarkup(data));
  } catch (error) {}

  function createMarkup(data) {
    console.log(data);
    const hits = data;
    return hits.map((item) => ` jkjkkkjh`).join("");
  }

  const information = document.querySelector("[data-modal-popup-open]");

  information.addEventListener("click", qqq);
  function qqq(e) {
    getRecipe(ID);
    createMarkup(data);
  }
}
