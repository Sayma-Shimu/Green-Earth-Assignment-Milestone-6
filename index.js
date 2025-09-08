const categoryContainer = document.getElementById('categoryContainer');

const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/categories')
        .then(res => res.json())
        .then((data) => {
            displayCategory(data.categories)

        })

        .catch(err => console.log(err)
        )
}

const displayCategory = (categories) => {
    categories.forEach(cat => {
        categoryContainer.innerHTML += `
            <li id = "${cat.id}" class="hover:bg-[#15803D] hover:text-white text-black">${cat.category_name}</li>
            `

    });

    categoryContainer.addEventListener('click', (e) => {
        const allLi = document.querySelectorAll('li')
        allLi.forEach(li => {
           li.classList.remove('bg-[#15803D]', 'text-white');
            li.classList.add('text-black');
        });


        if (e.target.localName === 'li') {
            e.target.classList.add('bg-[#15803D]')
            e.target.classList.add('text-white')
        }

    })

}

loadCategories()