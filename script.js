const defaultPlants = [
    {
        name: "Curry Leaf (Karapincha)",
        scientific: "Murraya koenigii",
        uses: "Widely used in Sri Lankan cuisine for its distinct aroma and flavor. Also used in traditional medicine for digestive issues, managing blood sugar, and hair care.",
        tags: ["Food", "Medicine"]
    },
    {
        name: "Cinnamon (Kurundu)",
        scientific: "Cinnamomum zeylanicum",
        uses: "Sri Lanka produces the world's finest 'true cinnamon'. Used as a spice in cooking, in essential oils, and for its antioxidant and anti-inflammatory properties.",
        tags: ["Food", "Medicine", "Industrial"]
    },
    {
        name: "Bael Fruit (Beli)",
        scientific: "Aegle marmelos",
        uses: "The fruit is used to make a refreshing juice. The flowers are often brewed as a tea. It's highly valued in Ayurveda for treating gastrointestinal disorders.",
        tags: ["Food", "Medicine"]
    },
    {
        name: "Neem (Kohomba)",
        scientific: "Azadirachta indica",
        uses: "Known for its powerful antibacterial, antifungal, and antiviral properties. Used in skincare, dental hygiene, and as a natural pesticide.",
        tags: ["Medicine", "Industrial"]
    },
    {
        name: "Gotukola",
        scientific: "Centella asiatica",
        uses: "A common leafy green used in 'Sambol'. It's known as a 'brain food' in traditional medicine, believed to improve memory and cognitive function.",
        tags: ["Food", "Medicine"]
    },
    {
        name: "Tulsi / Holy Basil (Maduruthala)",
        scientific: "Ocimum tenuiflorum",
        uses: "Used in traditional medicine for respiratory ailments like coughs and colds. Also used for stress relief and as a natural insect repellent.",
        tags: ["Medicine", "Other"]
    },
    {
        name: "Turmeric (Kaha)",
        scientific: "Curcuma longa",
        uses: "Essential spice in Sri Lankan curries. Renowned for its curcumin content which has strong anti-inflammatory and antiseptic properties.",
        tags: ["Food", "Medicine"]
    },
    {
        name: "Aloe Vera (Komarika)",
        scientific: "Aloe barbadensis miller",
        uses: "Used extensively for skincare, treating burns, and as a cooling agent. The gel is also used in healthy drinks and hair treatments.",
        tags: ["Medicine", "Ornamental"]
    },
    {
        name: "Blue Pea (Katarolu)",
        scientific: "Clitoria ternatea",
        uses: "Famous for its vibrant blue flowers used to make herbal tea and natural food coloring. Used in traditional medicine for eye health and stress.",
        tags: ["Food", "Medicine", "Ornamental"]
    },
    {
        name: "Jackfruit (Kos)",
        scientific: "Artocarpus heterophyllus",
        uses: "Often called 'the tree of rice' in Sri Lanka. The fruit is used as a staple food in various stages of ripeness. The wood is also highly valued for furniture.",
        tags: ["Food", "Industrial"]
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
const mainContainer = document.querySelector('.container');

function saveToLocalStorage() {
    localStorage.setItem('sl_plants', JSON.stringify(plants));
    updateSuggestions();
}

function clearPlants(callback) {
    const cards = plantsContainer.querySelectorAll('.plant-card, .no-results');
    if (cards.length === 0) {
        plantsContainer.innerHTML = '';
        if (callback) callback();
        return;
    }
    
    cards.forEach(card => card.classList.add('exit'));
    
    setTimeout(() => {
        plantsContainer.innerHTML = '';
        if (callback) callback();
    }, 300);
}

function displayPlants(filteredPlants, highlightName = null) {
    // Switch from hero mode to top mode
    mainContainer.classList.remove('hero-mode');

    const render = () => {
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
            
            const tagsHtml = (plant.tags || []).map(tag => 
                `<span class="tag-badge ${tag.toLowerCase()}">${tag}</span>`
            ).join('');

            card.innerHTML = `
                <h2>${plant.name}</h2>
                <div class="scientific-name">${plant.scientific}</div>
                <div class="tags-container">${tagsHtml}</div>
                <div class="uses-title">Primary Uses</div>
                <div class="uses-content">${plant.uses}</div>
                <button class="expand-btn">Read More</button>
            `;

            const expandBtn = card.querySelector('.expand-btn');
            const usesContent = card.querySelector('.uses-content');

            expandBtn.addEventListener('click', () => {
                const isExpanded = usesContent.classList.toggle('expanded');
                expandBtn.innerText = isExpanded ? 'Show Less' : 'Read More';
            });

            if (plant.uses.length < 250) {
                expandBtn.style.display = 'none';
            }
            
            plantsContainer.appendChild(card);

            if (highlightName && plant.name === highlightName) {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    };

    if (plantsContainer.children.length > 0) {
        clearPlants(render);
    } else {
        render();
    }
}

function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    
    if (query === '') {
        clearPlants(() => {
            mainContainer.classList.add('hero-mode');
        });
        return;
    }
    
    const filtered = plants.filter(plant => {
        return plant.name.toLowerCase().includes(query) || 
               plant.scientific.toLowerCase().includes(query);
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
        clearPlants(() => {
            mainContainer.classList.add('hero-mode');
            viewAllBtn.innerText = 'View All';
        });
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
closeModal.onclick = () => {
    addModal.style.display = "none";
    addPlantForm.reset();
};
window.onclick = (event) => {
    if (event.target == addModal) {
        addModal.style.display = "none";
        addPlantForm.reset();
    }
}

// Add Plant Logic
addPlantForm.onsubmit = (e) => {
    e.preventDefault();
    
    const name = document.getElementById('newName').value.trim();
    const scientific = document.getElementById('newScientific').value.trim();
    const uses = document.getElementById('newUses').value.trim();
    
    const selectedTags = Array.from(addPlantForm.querySelectorAll('input[name="tags"]:checked'))
                             .map(cb => cb.value);

    // Find if plant already exists by name or scientific name
    const existingIndex = plants.findIndex(p => 
        p.name.toLowerCase() === name.toLowerCase() || 
        p.scientific.toLowerCase() === scientific.toLowerCase()
    );

    if (existingIndex !== -1) {
        const existingPlant = plants[existingIndex];
        const existingTags = existingPlant.tags || [];
        
        // Check if there are actual changes (sort a copy to avoid mutating original)
        const hasChanges = existingPlant.name !== name || 
                          existingPlant.scientific !== scientific || 
                          existingPlant.uses !== uses ||
                          JSON.stringify([...existingTags].sort()) !== JSON.stringify([...selectedTags].sort());

        if (hasChanges) {
            if (confirm(`A plant with this name or scientific name already exists. Do you want to update its information with your changes?`)) {
                plants[existingIndex] = { name, scientific, uses, tags: selectedTags };
                saveToLocalStorage();
                addModal.style.display = "none";
                addPlantForm.reset();
                displayPlants(plants, name);
                
                setTimeout(() => {
                    const highlighted = document.querySelector('.highlight');
                    if (highlighted) highlighted.classList.remove('highlight');
                }, 3000);
            }
            return;
        } else {
            alert(`This plant (${existingPlant.name}) is already in the list with identical information!`);
            addModal.style.display = "none";
            addPlantForm.reset();
            displayPlants(plants, existingPlant.name);
            
            setTimeout(() => {
                const highlighted = document.querySelector('.highlight');
                if (highlighted) highlighted.classList.remove('highlight');
            }, 3000);
            return;
        }
    }

    // Add new plant
    const newPlant = { name, scientific, uses, tags: selectedTags };
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
