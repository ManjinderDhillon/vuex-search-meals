import axiosClient from "../axiosClient";
export function searchMeals({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit("setSearchedMeals", data.meals);
  });
}
export function searchMealsByLetter({ commit }, Letter) {
  axiosClient.get(`search.php?f=a${Letter}`).then(({ data }) => {
    commit("setMealsByLetter", data.meals);
  });
}
export function searchMealsBYIngredient({ commit }, Ingredient) {
  axiosClient
    .get(`filter.php?i=chicken_breast${Ingredient}`)
    .then(({ data }) => {
      commit("setMealsByIngredient", data.meals);
    });
}
