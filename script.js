const defaultPlants = [
    {
        name: "Curry Leaf (Karapincha)",
        scientific: "Murraya koenigii",
        uses: "Essential in Sri Lankan cuisine for its distinct aroma. In Ayurveda, it's used for digestion, managing cholesterol, and as a hair tonic to prevent graying.",
        tags: ["Food", "Medicine", "Other"]
    },
    {
        name: "Ceylon Cinnamon (Kurundu)",
        scientific: "Cinnamomum zeylanicum",
        uses: "The world's finest 'True Cinnamon'. Used as a spice, digestive aid, and in oils for perfumes and pharmaceuticals. Helps manage blood sugar.",
        tags: ["Food", "Medicine", "Industrial"]
    },
    {
        name: "Bael Fruit (Beli)",
        scientific: "Aegle marmelos",
        uses: "The fruit pulp makes a cooling drink, while dried flowers are brewed as tea for gastritis. Leaves are considered sacred in religious rituals.",
        tags: ["Food", "Medicine", "Other"]
    },
    {
        name: "Neem (Kohomba)",
        scientific: "Azadirachta indica",
        uses: "Known as the 'village pharmacy' for skin diseases and blood purification. Used as a natural pesticide and traditionally as a toothbrush.",
        tags: ["Medicine", "Industrial", "Other"]
    },
    {
        name: "Gotukola",
        scientific: "Centella asiatica",
        uses: "Eaten as a salad (Sambol) to improve memory. Used in traditional medicine for skin healing and circulation, and in modern anti-aging skincare.",
        tags: ["Food", "Medicine", "Other"]
    },
    {
        name: "Tulsi / Holy Basil (Maduruthala)",
        scientific: "Ocimum tenuiflorum",
        uses: "Primary remedy for coughs and colds. Planted near homes to repel insects. Leaf paste is used topically for bee and wasp stings.",
        tags: ["Medicine", "Other"]
    },
    {
        name: "Turmeric (Kaha)",
        scientific: "Curcuma longa",
        uses: "Used for color and flavor in curries. Acts as a powerful natural disinfectant for homes and a strong anti-inflammatory and antiseptic agent.",
        tags: ["Food", "Medicine", "Other"]
    },
    {
        name: "Aloe Vera (Komarika)",
        scientific: "Aloe barbadensis miller",
        uses: "Internal gel treats gastritis and UTIs. Topically used for cooling burns and sunburns. A staple in traditional and modern hair and skin care.",
        tags: ["Medicine", "Ornamental", "Other"]
    },
    {
        name: "Blue Pea (Katarolu)",
        scientific: "Clitoria ternatea",
        uses: "Flowers make a vibrant blue tea and natural food coloring. Valued in Ayurveda as a memory enhancer, anti-stress agent, and for postpartum care.",
        tags: ["Food", "Medicine", "Ornamental"]
    },
    {
        name: "Jackfruit (Kos)",
        scientific: "Artocarpus heterophyllus",
        uses: "Known as the 'Rice Tree', a staple food in all ripeness stages. Timber is prized for furniture, and bark is used in diabetes treatments.",
        tags: ["Food", "Medicine", "Industrial"]
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
addPlantBtn.onclick = () => {
    addModal.style.display = "flex";
    document.body.classList.add('modal-open');
};
closeModal.onclick = () => {
    addModal.style.display = "none";
    document.body.classList.remove('modal-open');
    addPlantForm.reset();
};
window.onclick = (event) => {
    if (event.target == addModal) {
        addModal.style.display = "none";
        document.body.classList.remove('modal-open');
        addPlantForm.reset();
    }
}

// Tag Selection Logic
const tagOptions = document.querySelectorAll('.tag-option');
tagOptions.forEach(option => {
    option.addEventListener('click', () => {
        option.classList.toggle('selected');
    });
});

function getSelectedTags() {
    return Array.from(document.querySelectorAll('.tag-option.selected'))
                .map(option => option.getAttribute('data-value'));
}

function setSelectedTags(tags) {
    tagOptions.forEach(option => {
        const val = option.getAttribute('data-value');
        if (tags.includes(val)) {
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    });
}

const discardBtn = document.getElementById('discardBtn');

// Discard logic
discardBtn.onclick = () => {
    if (confirm('Are you sure you want to discard your changes? This will clear all fields.')) {
        addPlantForm.reset();
        setSelectedTags([]); // Clear tag selections
    }
};

// Add Plant Logic
addPlantForm.onsubmit = (e) => {
    e.preventDefault();
    
    const name = document.getElementById('newName').value.trim();
    const scientific = document.getElementById('newScientific').value.trim();
    const uses = document.getElementById('newUses').value.trim();
    
    const selectedTags = getSelectedTags();

    // Find if plant already exists by name or scientific name
    const existingIndex = plants.findIndex(p => 
        p.name.toLowerCase() === name.toLowerCase() || 
        p.scientific.toLowerCase() === scientific.toLowerCase()
    );

    if (existingIndex !== -1) {
        const existingPlant = plants[existingIndex];
        const existingTags = existingPlant.tags || [];
        
        // Check if there are actual changes
        const hasChanges = existingPlant.name !== name || 
                          existingPlant.scientific !== scientific || 
                          existingPlant.uses !== uses ||
                          JSON.stringify([...existingTags].sort()) !== JSON.stringify([...selectedTags].sort());

        if (hasChanges) {
            if (confirm(`A plant with this name or scientific name already exists. Do you want to update its information with your changes?`)) {
                plants[existingIndex] = { name, scientific, uses, tags: selectedTags };
                saveToLocalStorage();
                addModal.style.display = "none";
                document.body.classList.remove('modal-open');
                addPlantForm.reset();
                setSelectedTags([]); // Reset tags
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
            document.body.classList.remove('modal-open');
            addPlantForm.reset();
            setSelectedTags([]); // Reset tags
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
    document.body.classList.remove('modal-open');
    addPlantForm.reset();
    setSelectedTags([]); // Reset tags
    
    displayPlants(plants, name);
    
    // Remove highlight after 3 seconds
    setTimeout(() => {
        const highlighted = document.querySelector('.highlight');
        if (highlighted) highlighted.classList.remove('highlight');
    }, 3000);
};

function updateSuggestions() {
    if (!plantSuggestions) return;
    plantSuggestions.innerHTML = '';
    plants.forEach(plant => {
        const option = document.createElement('option');
        option.value = plant.name;
        plantSuggestions.appendChild(option);
    });
}

// Auto-fill logic when selecting an existing plant
newNameInput.addEventListener('input', (e) => {
    const selectedName = e.target.value;
    const existingPlant = plants.find(p => p.name === selectedName);
    
    if (existingPlant) {
        document.getElementById('newScientific').value = existingPlant.scientific;
        document.getElementById('newUses').value = existingPlant.uses;
        
        // Update tags
        setSelectedTags(existingPlant.tags || []);
    }
});

// Initial state
updateSuggestions();

// Event listener for search input
searchInput.addEventListener('input', () => {
    if (searchInput.value.trim() !== '') {
        viewAllBtn.innerText = 'View All';
    }
    handleSearch();
});
