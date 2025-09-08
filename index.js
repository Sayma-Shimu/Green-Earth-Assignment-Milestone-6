const categoryContainer = document.getElementById('categoryContainer');
const treesContainer = document.getElementById('treesContainer');

// tree category name--------------
const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/categories')

        .then(res => res.json())
        .then((data) => {
            displayCategory(data.categories)
        })
        .catch(err => console.log(err))

};

const displayCategory = (categories) => {
    categories.forEach(cat => {
        categoryContainer.innerHTML += `
            <li id = "${cat.id}" class="hover:bg-[#15803D] hover:text-white text-black">${cat.category_name}</li>
            `;

    });

    categoryContainer.addEventListener('click', (e) => {
        const allLi = document.querySelectorAll('li')
        allLi.forEach(li => {
            li.classList.remove('bg-[#15803D]', 'text-white');
            li.classList.add('text-black');
        });


        if (e.target.localName === 'li') {
            // console.log(e.target.id);

            e.target.classList.add('bg-[#15803D]')
            e.target.classList.add('text-white')

            loadTreesByCategory(e.target.id)
        }

    })

}


// tree card --------------
const loadTreesByCategory = (categoryId) => {
    // fetch(`https://openapi.programming-hero.com/api/category/${categoryId}`)
        fetch(`https://openapi.programming-hero.com/api/plants`)
        .then(res => res.json())
        .then(data => {
            displayTreesByCategory(data.plants);

        })
        .catch(err => err)
}




const displayTreesByCategory = (plants) => {
    plants.forEach(plant => {
        // console.log(plant);

        treesContainer.innerHTML += `
     <div class =" bg-white p-3 rounded-lg space-y-2">

        <div>
            <img  class= "h-[186px] w-full object-cover rounded-lg" src="${plant.image}" alt="">
        </div>

        <h3 class = "font-semibold text-sm">${plant.name}</h3>
        <p class= "text-xs font-normal">${plant.description}</p>

    <div class = "flex justify-between">
        <h4 class="text-xs px-2 rounded-2xl p-1 bg-emerald-200 text-[#15803d]">${plant.category}</h4>
        <h4 class = "font-semibold text-sm">${plant.price}</h4>
    </div>

     <button class="w-full bg-[#166534] text-white rounded-2xl text-base font-medium py-2">Add to Cart</button>

     </div>
        
        `

    })


}

loadTreesByCategory('plant.id')
loadCategories()