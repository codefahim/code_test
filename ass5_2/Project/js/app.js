const customeInput = document.getElementById('customeInput');
const search = document.getElementById('basic-addon2');
let row = document.getElementById('row');
let popupDiv = document.getElementById('popup');
search.addEventListener('click', () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${customeInput.value}`)
        .then(response => response.json())
        .then(data => {
            let allMeal = "";

            if (data.meals) {
                data.meals.forEach(meal => {


                    allMeal += `
                    <div class="col-md-3 mt-2 card ml-custome" data-id="${meal.idMeal}">
                    <img src="${meal.strMealThumb}" class="card-img-top img-fluid" alt="..." data-id="${meal.idMeal}">
                    <div class="card-body" data-id="${meal.idMeal}">
                        <h5 class="card-title text-center" style="font-size: 15px;" data-id="${meal.idMeal}">${meal.strMeal}</h5>
                    </div>
                     </div>
                    `;
                });

            } else {

                allMeal = "We don't Find Any meal.";
                row.classList.add('not-found');
            }
            row.innerHTML = allMeal;
        })
})

row.addEventListener('click', (event) => {
    const findId = event.target;
    const finalId = findId.dataset.id;
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${finalId}`)
        .then(response => response.json())
        .then(data => {
            let popup = " ";
            if (data.meals) {
                data.meals.forEach(meal => {
                    popup += `
                    <div class="card w-28 m-auto mt-5" style="position: absolute; top: 100px;left:37%;">
                    <span aria-hidden="true" id="close" style="margin-right: 10px;margin-top: 15px;font-size: 40px;">&times;</span>
                    <img src="${meal.strMealThumb}" class="card-img-top">
                    <div class="card-body">
                        <h4 class="card-title my-1">${meal.strMeal}</h4>
                        <h6 style="font-size: 14px;" class="my-2">Ingredients</h6>
                        <p style="font-size:12px; margin: 0;"> <span style="font-size: 17px; margin-right: 10px;">&#x029BF</span>${meal.strIngredient1}</p>
                        <p style="font-size:12px; margin: 0;"> <span style="font-size: 17px; margin-right: 10px;">&#x029BF</span>${meal.strIngredient2}</p>
                        <p style="font-size:12px; margin: 0;"> <span style="font-size: 17px; margin-right: 10px;">&#x029BF</span>${meal.strIngredient3}</p>
                        <p style="font-size:12px; margin: 0;"> <span style="font-size: 17px; margin-right: 10px;">&#x029BF</span>${meal.strIngredient4}</p>
                        <p style="font-size:12px; margin: 0;"> <span style="font-size: 17px; margin-right: 10px;">&#x029BF</span>${meal.strIngredient5}</p>
                        <p style="font-size:12px; margin: 0;"> <span style="font-size: 17px; margin-right: 10px;">&#x029BF</span>${meal.strIngredient6}</p>
                        <p style="font-size:12px; margin: 0;"> <span style="font-size: 17px; margin-right: 10px;">&#x029BF</span>${meal.strIngredient7}</p>
                    </div>
                </div>
                    `;
                });
            }
            popupDiv.innerHTML = popup;
        })
});