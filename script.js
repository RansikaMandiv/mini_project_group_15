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
let rawPlants = JSON.parse(localStorage.getItem('sl_plants')) || defaultPlants;
let rawPending = JSON.parse(localStorage.getItem('sl_pending_plants')) || [];

// Sanitize data: remove any null/undefined entries that might have corrupted the storage
let plants = rawPlants.filter(p => p !== null && typeof p === 'object');
let pendingPlants = rawPending.filter(p => p !== null && typeof p === 'object');

let isAdmin = localStorage.getItem('sl_isAdmin') === 'true';

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

// Role Management Logic
function updateAdminState() {
    if (isAdmin) {
        adminPanel.style.display = "block";
        adminLoginBtn.style.display = "none";
        logoutBtn.style.display = "flex";
        updateAdminUI();
    } else {
        adminPanel.style.display = "none";
        adminLoginBtn.style.display = "flex";
        logoutBtn.style.display = "none";
    }
    localStorage.setItem('sl_isAdmin', isAdmin);
}

// Initial check for Admin state
updateAdminState();

// Toast Notification System
const toastContainer = document.createElement('div');
toastContainer.id = 'toast-container';
document.body.appendChild(toastContainer);

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = '🌿';
    if (type === 'success') icon = '✅';
    if (type === 'error') icon = '❌';
    if (type === 'info') icon = 'ℹ️';

    toast.innerHTML = `
        <span class="toast-icon">${icon}</span>
        <span class="toast-message">${message}</span>
    `;
    
    toastContainer.appendChild(toast);
    
    // Animate in
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Remove after 4 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 500);
    }, 4000);
}

// Custom Dialog System
function showConfirm(message, callback) {
    const overlay = document.createElement('div');
    overlay.className = 'dialog-overlay';
    
    overlay.innerHTML = `
        <div class="dialog-box">
            <h3>Confirmation</h3>
            <p>${message}</p>
            <div class="dialog-buttons">
                <button class="dialog-btn cancel">Cancel</button>
                <button class="dialog-btn confirm">Confirm</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    const confirmBtn = overlay.querySelector('.confirm');
    const cancelBtn = overlay.querySelector('.cancel');
    
    confirmBtn.onclick = () => {
        document.body.removeChild(overlay);
        if (callback) callback(true);
    };
    
    cancelBtn.onclick = () => {
        document.body.removeChild(overlay);
        if (callback) callback(false);
    };
}

function showPrompt(message, callback) {
    const overlay = document.createElement('div');
    overlay.className = 'dialog-overlay';
    
    overlay.innerHTML = `
        <div class="dialog-box">
            <h3>Admin Access</h3>
            <p>${message}</p>
            <input type="password" id="dialogInput" class="dialog-input" placeholder="Password" autofocus>
            <div class="dialog-buttons">
                <button class="dialog-btn cancel">Cancel</button>
                <button class="dialog-btn confirm">Login</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    const input = overlay.querySelector('#dialogInput');
    const confirmBtn = overlay.querySelector('.confirm');
    const cancelBtn = overlay.querySelector('.cancel');
    
    const handleConfirm = () => {
        const value = input.value;
        document.body.removeChild(overlay);
        if (callback) callback(value);
    };

    confirmBtn.onclick = handleConfirm;
    
    input.onkeydown = (e) => {
        if (e.key === 'Enter') handleConfirm();
        if (e.key === 'Escape') document.body.removeChild(overlay);
    };
    
    cancelBtn.onclick = () => {
        document.body.removeChild(overlay);
        if (callback) callback(null);
    };
    
    input.focus();
}

function saveToLocalStorage() {
    // Keep data sanitized before saving
    plants = plants.filter(p => p !== null);
    pendingPlants = pendingPlants.filter(p => p !== null);
    
    localStorage.setItem('sl_plants', JSON.stringify(plants));
    localStorage.setItem('sl_pending_plants', JSON.stringify(pendingPlants));
    updateSuggestions();
    updateAdminUI();
}

// Role Management
adminLoginBtn.onclick = () => {
    showPrompt("Enter Admin Password:", (password) => {
        if (password === null) return;
        
        if (password === "admin123") {
            isAdmin = true;
            updateAdminState();
            showToast("Logged in as Admin", "success");
        } else {
            showToast("Incorrect password!", "error");
        }
    });
};

logoutBtn.onclick = () => {
    isAdmin = false;
    updateAdminState();
    showToast("Logged out from Admin Portal", "info");
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
            if (!plant) return;
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
        if (!plant) return;
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
    const newPlant = pendingPlants[index];
    if (!newPlant) return;

    // Check if it already exists in the main database
    const existingIndex = plants.findIndex(p => 
        p && (p.name.toLowerCase() === newPlant.name.toLowerCase() || 
        p.scientific.toLowerCase() === newPlant.scientific.toLowerCase())
    );

    if (existingIndex !== -1) {
        // Update existing plant
        plants[existingIndex] = newPlant;
        showToast(`${newPlant.name} information updated in database.`, "success");
    } else {
        // Add as new plant
        plants.push(newPlant);
        showToast(`${newPlant.name} approved and added to database.`, "success");
    }

    pendingPlants.splice(index, 1);
    saveToLocalStorage();
    displayPlants(plants);
};

window.rejectRequest = (index) => {
    const plant = pendingPlants[index];
    if (!plant) return;
    showConfirm(`Are you sure you want to reject this request for ${plant.name}?`, (confirmed) => {
        if (confirmed) {
            pendingPlants.splice(index, 1);
            saveToLocalStorage();
            showToast("Request rejected.", "info");
        }
    });
};

window.deletePlant = (index) => {
    const plant = plants[index];
    if (!plant) return;
    showConfirm(`Are you sure you want to delete ${plant.name}?`, (confirmed) => {
        if (confirmed) {
            const name = plant.name;
            plants.splice(index, 1);
            saveToLocalStorage();
            displayPlants(plants);
            showToast(`${name} deleted from database.`, "info");
        }
    });
};

// Add Plant Logic
function getSelectedTags() {
    return Array.from(document.querySelectorAll('.tag-option.selected'))
                .map(option => option.getAttribute('data-value'));
}

addPlantForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    try {
        const name = document.getElementById('newName').value.trim();
        const scientific = document.getElementById('newScientific').value.trim();
        const uses = document.getElementById('newUses').value.trim();
        const selectedTags = getSelectedTags();

        if (!name || !scientific || !uses) {
            showToast("Please fill in all required fields.", "error");
            return;
        }

        const existingIndex = plants.findIndex(p => 
            p && (p.name.toLowerCase() === name.toLowerCase() || 
            p.scientific.toLowerCase() === scientific.toLowerCase())
        );

        const newPlant = { name, scientific, uses, tags: selectedTags };

        if (isAdmin) {
            if (existingIndex !== -1) {
                showConfirm(`A plant with this name already exists. Do you want to update its information?`, (confirmed) => {
                    if (confirmed) {
                        plants[existingIndex] = newPlant;
                        saveToLocalStorage();
                        displayPlants(plants, name);
                        showToast("Plant information updated by Admin.", "success");
                    }
                });
            } else {
                plants.push(newPlant);
                saveToLocalStorage();
                displayPlants(plants, name);
                showToast("New plant added directly by Admin.", "success");
            }
        } else {
            // Guest submission
            pendingPlants.push(newPlant);
            saveToLocalStorage();
            showToast("Thank you! Your suggestion has been sent for approval. 🌱", "success");
        }
        
        // Success: Close and Reset
        addModal.style.display = "none";
        document.body.classList.remove('modal-open');
        addPlantForm.reset();
        setSelectedTags([]);
    } catch (error) {
        console.error("Error saving plant:", error);
        showToast("Error: " + error.message, "error");
    }
});


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
            if (!plant) return;
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
        return plant && (plant.name.toLowerCase().includes(query) || 
               plant.scientific.toLowerCase().includes(query));
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
    showConfirm('Are you sure you want to discard your changes? This will clear all fields.', (confirmed) => {
        if (confirmed) {
            addPlantForm.reset();
            setSelectedTags([]); // Clear tag selections
        }
    });
};

function updateSuggestions() {
    if (!plantSuggestions) return;
    plantSuggestions.innerHTML = '';
    plants.forEach(plant => {
        if (!plant) return;
        const option = document.createElement('option');
        option.value = plant.name;
        plantSuggestions.appendChild(option);
    });
}

// Auto-fill logic when selecting an existing plant
newNameInput.addEventListener('input', (e) => {
    const selectedName = e.target.value;
    const existingPlant = plants.find(p => p && p.name === selectedName);
    
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
