const defaultPlants = [
    {
        name: "Curry Leaf (Karapincha)",
        scientific: "Murraya koenigii",
        uses: "Widely used in Sri Lankan cuisine for its distinct aroma and flavor. Also used in traditional medicine for digestive issues, managing blood sugar, and hair care."
    },
    {
        name: "Cinnamon (Kurundu)",
        scientific: "Cinnamomum zeylanicum",
        uses: "Sri Lanka produces the world's finest 'true cinnamon'. Used as a spice in cooking, in essential oils, and for its antioxidant and anti-inflammatory properties."
    },
    {
        name: "Bael Fruit (Beli)",
        scientific: "Aegle marmelos",
        uses: "The fruit is used to make a refreshing juice. The flowers are often brewed as a tea. It's highly valued in Ayurveda for treating gastrointestinal disorders."
    },
    {
        name: "Neem (Kohomba)",
        scientific: "Azadirachta indica",
        uses: "Known for its powerful antibacterial, antifungal, and antiviral properties. Used in skincare, dental hygiene, and as a natural pesticide."
    },
    {
        name: "Gotukola",
        scientific: "Centella asiatica",
        uses: "A common leafy green used in 'Sambol'. It's known as a 'brain food' in traditional medicine, believed to improve memory and cognitive function."
    },
    {
        name: "Tulsi / Holy Basil (Maduruthala)",
        scientific: "Ocimum tenuiflorum",
        uses: "Used in traditional medicine for respiratory ailments like coughs and colds. Also used for stress relief and as a natural insect repellent."
    },
    {
        name: "Turmeric (Kaha)",
        scientific: "Curcuma longa",
        uses: "Essential spice in Sri Lankan curries. Renowned for its curcumin content which has strong anti-inflammatory and antiseptic properties."
    },
    {
        name: "Aloe Vera (Komarika)",
        scientific: "Aloe barbadensis miller",
        uses: "Used extensively for skincare, treating burns, and as a cooling agent. The gel is also used in healthy drinks and hair treatments."
    },
    {
        name: "Blue Pea (Katarolu)",
        scientific: "Clitoria ternatea",
        uses: "Famous for its vibrant blue flowers used to make herbal tea and natural food coloring. Used in traditional medicine for eye health and stress."
    },
    {
        name: "Jackfruit (Kos)",
        scientific: "Artocarpus heterophyllus",
        uses: "Often called 'the tree of rice' in Sri Lanka. The fruit is used as a staple food in various stages of ripeness. The wood is also highly valued for furniture."
    }
];

// Load plants from localStorage or use defaults
let plants = JSON.parse(localStorage.getItem('sl_plants')) || defaultPlants;

const searchInput = document.getElementById('searchInput');
const plantsContainer = document.getElementById('plantsContainer');
const addModal = document.getElementById('addModal');
const addPlantBtn = document.getElementById('addPlantBtn');
const viewAllBtn = document.getElementById('viewAllBtn');
const closeModal = document.querySelector('.close');
const addPlantForm = document.getElementById('addPlantForm');
const plantSuggestions = document.getElementById('plantSuggestions');
const newNameInput = document.getElementById('newName');

function saveToLocalStorage() {
    localStorage.setItem('sl_plants', JSON.stringify(plants));
    updateSuggestions();
}

function updateSuggestions() {
    if (!plantSuggestions) return;
    plantSuggestions.innerHTML = '';
    plants.forEach(plant => {
        const option = document.createElement('option');
        option.value = plant.name;
        plantSuggestions.appendChild(option);
    });
}

// Check if plant exists while typing
newNameInput.addEventListener('input', (e) => {
    const name = e.target.value.trim().toLowerCase();
    const existing = plants.find(p => p.name.toLowerCase() === name);
    
    if (existing) {
        document.getElementById('newScientific').value = existing.scientific;
        document.getElementById('newUses').value = existing.uses;
        // Optionally show a message
    }
});

function displayPlants(filteredPlants, highlightName = null) {
    plantsContainer.innerHTML = '';

    if (filteredPlants.length === 0) {
        plantsContainer.innerHTML = '<div class="no-results">No plants found matching your search.</div>';
        return;
    }

    filteredPlants.forEach(plant => {
        const card = document.createElement('div');
        card.className = 'plant-card';
        if (highlightName && plant.name === highlightName) {
            card.classList.add('highlight');
        }
        
        card.innerHTML = `
            <h2>${plant.name}</h2>
            <div class="scientific-name">${plant.scientific}</div>
            <div class="uses-title">Primary Uses:</div>
            <div class="uses-content">${plant.uses}</div>
        `;
        
        plantsContainer.appendChild(card);

        if (highlightName && plant.name === highlightName) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
}

function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    
    if (query === '') {
        plantsContainer.innerHTML = '';
        return;
    }
    
    const filtered = plants.filter(plant => {
        return plant.name.toLowerCase().includes(query) || 
               plant.scientific.toLowerCase().includes(query) || 
               plant.uses.toLowerCase().includes(query);
    });
    
    displayPlants(filtered);
}

// View All / Hide All Toggle Logic
let isShowingAll = false;

viewAllBtn.onclick = () => {
    isShowingAll = !isShowingAll;
    
    if (isShowingAll) {
        searchInput.value = '';
        displayPlants(plants);
        viewAllBtn.innerText = 'Hide All';
    } else {
        plantsContainer.innerHTML = '';
        viewAllBtn.innerText = 'View All';
    }
};

// Reset toggle when searching
searchInput.addEventListener('input', () => {
    if (searchInput.value.trim() !== '') {
        viewAllBtn.innerText = 'View All';
        isShowingAll = false;
    }
    handleSearch();
});

// Modal logic
addPlantBtn.onclick = () => addModal.style.display = "block";
closeModal.onclick = () => addModal.style.display = "none";
window.onclick = (event) => {
    if (event.target == addModal) addModal.style.display = "none";
}

// Add Plant Logic
addPlantForm.onsubmit = (e) => {
    e.preventDefault();
    
    const name = document.getElementById('newName').value.trim();
    const scientific = document.getElementById('newScientific').value.trim();
    const uses = document.getElementById('newUses').value.trim();

    // Check for duplicates
    const existingPlant = plants.find(p => 
        p.name.toLowerCase() === name.toLowerCase() || 
        p.scientific.toLowerCase() === scientific.toLowerCase()
    );

    if (existingPlant) {
        alert(`This plant (${existingPlant.name}) is already in the list! Showing details...`);
        addModal.style.display = "none";
        searchInput.value = ''; // Clear search to show all or specific
        displayPlants(plants, existingPlant.name);
        
        // Remove highlight after 3 seconds
        setTimeout(() => {
            const highlighted = document.querySelector('.highlight');
            if (highlighted) highlighted.classList.remove('highlight');
        }, 3000);
        
        return;
    }

    // Add new plant
    const newPlant = { name, scientific, uses };
    plants.push(newPlant);
    saveToLocalStorage();
    
    addModal.style.display = "none";
    addPlantForm.reset();
    
    displayPlants(plants, name);
    
    // Remove highlight after 3 seconds
    setTimeout(() => {
        const highlighted = document.querySelector('.highlight');
        if (highlighted) highlighted.classList.remove('highlight');
    }, 3000);
};

// Initial state
updateSuggestions();

// Event listener for search input
searchInput.addEventListener('input', () => {
    if (searchInput.value.trim() !== '') {
        viewAllBtn.innerText = 'View All';
    }
    handleSearch();
});
