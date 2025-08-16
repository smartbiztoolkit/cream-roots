document.addEventListener('DOMContentLoaded', () => {
    const plantGrid = document.getElementById('plant-grid');
    const categoryFilter = document.getElementById('category-filter');
    const searchBar = document.getElementById('search-bar');
    let allPlantsData = [];

    async function fetchPlantData() {
        try {
            const response = await fetch('plants.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            allPlantsData = await response.json();
            renderPlantCards(allPlantsData);
        } catch (error) {
            console.error('Could not fetch plant data:', error);
            plantGrid.innerHTML = '<p>Error loading plant data. Please try again later.</p>';
        }
    }

    function renderPlantCards(plants) {
        plantGrid.innerHTML = '';
        if (plants.length === 0) {
            plantGrid.innerHTML = '<p>No plants match your criteria.</p>';
            return;
        }
        plants.forEach(plant => {
            const card = document.createElement('a');
            card.href = `plant-profile.html?id=${plant.id}`;
            card.className = 'plant-card';
            card.innerHTML = `
                <img src="images/${plant.id}.jpg" alt="${plant.commonName}" class="plant-card-img" loading="lazy">
                <div class="plant-card-content">
                    <h3>${plant.commonName}</h3>
                    <p><em>${plant.scientificName}</em></p>
                </div>
            `;
            plantGrid.appendChild(card);
        });
    }

    function filterPlants() {
        const selectedCategory = categoryFilter.value;
        const searchTerm = searchBar.value.toLowerCase();

        let filteredPlants = allPlantsData;

        if (selectedCategory !== 'all') {
            filteredPlants = filteredPlants.filter(plant =>
                plant.category.includes(selectedCategory)
            );
        }

        if (searchTerm) {
            filteredPlants = filteredPlants.filter(plant =>
                plant.commonName.toLowerCase().includes(searchTerm) ||
                plant.scientificName.toLowerCase().includes(searchTerm)
            );
        }

        renderPlantCards(filteredPlants);
    }

    categoryFilter.addEventListener('change', filterPlants);
    searchBar.addEventListener('input', filterPlants);

    fetchPlantData();
});
