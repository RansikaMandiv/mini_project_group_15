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

// Load plants and pending requests from localStorage or use defaults
let plants = JSON.parse(localStorage.getItem('sl_plants')) || defaultPlants;
let pendingPlants = JSON.parse(localStorage.getItem('sl_pending_plants')) || [];
let isAdmin = false;

const searchInput = document.getElementById('searchInput');
const plantsContainer = document.getElementById('plantsContainer');
const addModal = document.getElementById('addModal');
const addPlantBtn = document.getElementById('addPlantBtn');
const viewAllBtn = document.getElementById('viewAllBtn');
const adminLoginBtn = document.getElementById('adminLoginBtn');
const adminPanel = document.getElementById('adminPanel');
const logoutBtn = document.getElementById('logoutBtn');
const closeModal = document.querySelector('.close');
const addPlantForm = document.getElementById('addPlantForm');
const plantSuggestions = document.getElementById('plantSuggestions');
const newNameInput = document.getElementById('newName');
const mainContainer = document.querySelector('.container');

function saveToLocalStorage() {
    localStorage.setItem('sl_plants', JSON.stringify(plants));
    localStorage.setItem('sl_pending_plants', JSON.stringify(pendingPlants));
    updateSuggestions();
    updateAdminUI();
}

// Role Management
adminLoginBtn.onclick = () => {
    const password = prompt("Enter Admin Password:");
    if (password === null) return; // User clicked Cancel
    
    if (password === "admin123") {
        isAdmin = true;
        adminPanel.style.display = "block";
        adminLoginBtn.style.display = "none";
        updateAdminUI();
        alert("Logged in as Admin");
    } else {
        alert("Incorrect password!");
    }
};

logoutBtn.onclick = () => {
    isAdmin = false;
    adminPanel.style.display = "none";
    adminLoginBtn.style.display = "block";
    alert("Logged out from Admin Portal");
};

// Tab Logic
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.onclick = () => {
        const tabId = btn.getAttribute('data-tab');
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(tabId + 'Tab').classList.add('active');
    };
});

function updateAdminUI() {
    if (!isAdmin) return;

    // Update Pending Tab
    const pendingContainer = document.getElementById('pendingContainer');
    const pendingCount = document.getElementById('pendingCount');
    pendingCount.innerText = pendingPlants.length;
    
    pendingContainer.innerHTML = '';
    if (pendingPlants.length === 0) {
        pendingContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No pending requests.</p>';
    } else {
        pendingPlants.forEach((plant, index) => {
            const card = document.createElement('div');
            card.className = 'request-card';
            card.innerHTML = `
                <h3>${plant.name}</h3>
                <p><strong>Scientific:</strong> ${plant.scientific}</p>
                <p><strong>Uses:</strong> ${plant.uses}</p>
                <div class="request-actions">
                    <button class="approve-btn" onclick="approveRequest(${index})">Approve</button>
                    <button class="reject-btn" onclick="rejectRequest(${index})">Reject</button>
                </div>
            `;
            pendingContainer.appendChild(card);
        });
    }

    // Update Manage Tab
    const manageContainer = document.getElementById('manageContainer');
    manageContainer.innerHTML = '';
    plants.forEach((plant, index) => {
        const item = document.createElement('div');
        item.className = 'manage-item';
        item.innerHTML = `
            <span><strong>${plant.name}</strong> (${plant.scientific})</span>
            <button class="delete-btn" onclick="deletePlant(${index})">Delete</button>
        `;
        manageContainer.appendChild(item);
    });
}

window.approveRequest = (index) => {
    const plant = pendingPlants[index];
    plants.push(plant);
    pendingPlants.splice(index, 1);
    saveToLocalStorage();
    displayPlants(plants);
    alert(`${plant.name} approved and added to database.`);
};

window.rejectRequest = (index) => {
    if (confirm("Are you sure you want to reject this request?")) {
        pendingPlants.splice(index, 1);
        saveToLocalStorage();
    }
};

window.deletePlant = (index) => {
    if (confirm(`Are you sure you want to delete ${plants[index].name}?`)) {
        plants.splice(index, 1);
        saveToLocalStorage();
        displayPlants(plants);
    }
};

// Add Plant Logic
addPlantForm.onsubmit = (e) => {
    e.preventDefault();
    
    const name = document.getElementById('newName').value.trim();
    const scientific = document.getElementById('newScientific').value.trim();
    const uses = document.getElementById('newUses').value.trim();
    const selectedTags = getSelectedTags();

    // Check if plant already exists in main database
    const existingIndex = plants.findIndex(p => 
        p.name.toLowerCase() === name.toLowerCase() || 
        p.scientific.toLowerCase() === scientific.toLowerCase()
    );

    const newPlant = { name, scientific, uses, tags: selectedTags };

    if (isAdmin) {
        if (existingIndex !== -1) {
            if (confirm(`A plant with this name already exists. Do you want to update its information?`)) {
                plants[existingIndex] = newPlant;
                saveToLocalStorage();
                displayPlants(plants, name);
                alert("Plant information updated by Admin.");
            } else {
                return;
            }
        } else {
            plants.push(newPlant);
            saveToLocalStorage();
            displayPlants(plants, name);
            alert("New plant added directly by Admin.");
        }
    } else {
        // Guest submission
        pendingPlants.push(newPlant);
        saveToLocalStorage();
        alert("Thank you! Your suggestion has been sent to the Admin for approval. 🌱");
    }
    
    addModal.style.display = "none";
    document.body.classList.remove('modal-open');
    addPlantForm.reset();
    setSelectedTags([]);
};

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
