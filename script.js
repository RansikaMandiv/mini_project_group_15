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
    },
    {
        name: "Ginger (Inguru)",
        scientific: "Zingiber officinale",
        uses: "A staple in Sri Lankan tea and curries. Used medicinally to treat nausea, indigestion, and to boost the immune system against colds.",
        tags: ["Food", "Medicine"]
    },
    {
        name: "Cardamom (Enasal)",
        scientific: "Elettaria cardamomum",
        uses: "Known as the 'Queen of Spices'. Used to flavor sweets and savory dishes. Valued in Ayurveda for oral hygiene and digestive health.",
        tags: ["Food", "Medicine"]
    },
    {
        name: "Black Pepper (Gammiris)",
        scientific: "Piper nigrum",
        uses: "Sri Lanka produces high-piperine pepper. Used as a warming spice and in traditional medicine to treat respiratory congestion and boost metabolism.",
        tags: ["Food", "Medicine"]
    },
    {
        name: "Clove (Karabu Nati)",
        scientific: "Syzygium aromaticum",
        uses: "Intensely aromatic. Used in spice blends and traditionally chewed to relieve toothaches due to its natural numbing properties.",
        tags: ["Food", "Medicine"]
    },
    {
        name: "Nutmeg (Sadikka)",
        scientific: "Myristica fragrans",
        uses: "Used to flavor cakes and curries. Medicinally used as a mild sedative to improve sleep and for joint pain relief.",
        tags: ["Food", "Medicine"]
    },
    {
        name: "Ironwood (Na)",
        scientific: "Mesua ferrea",
        uses: "The national tree of Sri Lanka. The flowers are used in herbal medicines for bleeding disorders and as a fragrance in cosmetics.",
        tags: ["Medicine", "Industrial", "Ornamental"]
    },
    {
        name: "Indian Gooseberry (Nelli)",
        scientific: "Phyllanthus emblica",
        uses: "Extremely high in Vitamin C. A key ingredient in 'Triphala'. Used for boosting immunity, hair growth, and detoxifying the liver.",
        tags: ["Food", "Medicine"]
    },
    {
        name: "Wood Apple (Divul)",
        scientific: "Limonia acidissima",
        uses: "Popular for making fruit juices and jams. Traditionally used to treat gum diseases and gastrointestinal ailments.",
        tags: ["Food", "Medicine"]
    },
    {
        name: "Drumstick Tree (Murunga)",
        scientific: "Moringa oleifera",
        uses: "A 'superfood' where pods and leaves are eaten. Used to manage blood pressure and highly valued for its high protein and iron content.",
        tags: ["Food", "Medicine"]
    },
    {
        name: "Hathawariya",
        scientific: "Asparagus racemosus",
        uses: "Commonly used in herbal porridge (Kanda). Known as a tonic for reproductive health and to balance hormone levels in Ayurveda.",
        tags: ["Food", "Medicine"]
    },
    {
        name: "Iramusu",
        scientific: "Hemidesmus indicus",
        uses: "Used to make a refreshing herbal tea that cools the body. Known as a blood purifier and used for skin health and urinary issues.",
        tags: ["Food", "Medicine"]
    },
    {
        name: "Water Spinach (Kankun)",
        scientific: "Ipomoea aquatica",
        uses: "A popular leafy vegetable. Rich in iron and fiber; traditionally used as a mild sedative and for its cooling properties.",
        tags: ["Food", "Medicine"]
    },
    {
        name: "Mukunuwenna",
        scientific: "Alternanthera sessilis",
        uses: "One of the most common leafy greens in Sri Lanka. Consumed to improve eyesight and as a nutritious part of a daily diet.",
        tags: ["Food", "Medicine"]
    },
    {
        name: "Kumbuk",
        scientific: "Terminalia arjuna",
        uses: "The bark is widely used in Ayurveda for heart health. Often found near water sources where it helps purify the water.",
        tags: ["Medicine", "Other"]
    },
    {
        name: "Sandalwood (Handun)",
        scientific: "Santalum album",
        uses: "Prized for its fragrant wood. Used in skincare for cooling and brightening the skin, and in religious incense and oils.",
        tags: ["Medicine", "Industrial", "Other"]
    },
    {
        name: "Red Sandalwood (Rath Handun)",
        scientific: "Pterocarpus santalinus",
        uses: "Primarily used in medicinal pastes for skin inflammation, treating scars, and reducing body heat.",
        tags: ["Medicine"]
    },
    {
        name: "Gamboge (Goraka)",
        scientific: "Garcinia quaesita",
        uses: "Unique to the region, it's used as a souring agent in fish curries. It is also used in traditional medicine for weight management.",
        tags: ["Food", "Medicine"]
    },
    {
        name: "Pawatta",
        scientific: "Adhatoda vasica",
        uses: "Famous for treating respiratory issues. The leaves are brewed into a decoction for asthma, bronchitis, and cough relief.",
        tags: ["Medicine"]
    },
    {
        name: "Nika",
        scientific: "Vitex negundo",
        uses: "Leaves are used in herbal steam baths and inhalation to treat sinus issues, headaches, and joint pain.",
        tags: ["Medicine"]
    },
    {
        name: "King Coconut (Thambili)",
        scientific: "Cocos nucifera var. aurantiaca",
        uses: "The orange coconut unique to Sri Lanka. Its water is a natural electrolyte used for rehydration and cooling the body.",
        tags: ["Food", "Medicine"]
    },
    {
        name: "Betel Leaf (Bulath)",
        scientific: "Piper betle",
        uses: "Culturally significant for ceremonies. Chewed as a digestive aid and used in traditional medicine for its antiseptic properties.",
        tags: ["Medicine", "Other"]
    },
    {
        name: "Areca Nut (Puwak)",
        scientific: "Areca catechu",
        uses: "Used along with betel leaves. In Ayurveda, it is used for its astringent properties and to help treat intestinal parasites.",
        tags: ["Medicine", "Other"]
    },
    {
        name: "Soursop (Anoda)",
        scientific: "Annona muricata",
        uses: "The fruit is used for juices. Traditionally used to treat inflammation and researched for its potential anti-cancer properties.",
        tags: ["Food", "Medicine"]
    },
    {
        name: "Screw Pine (Rampe)",
        scientific: "Pandanus amaryllifolius",
        uses: "Used to add a distinct aroma to rice and curries. It also has cooling properties and is used to treat skin conditions.",
        tags: ["Food", "Medicine"]
    },
    {
        name: "Lemongrass (Sera)",
        scientific: "Cymbopogon citratus",
        uses: "Adds a citrus flavor to curries. The oil is used as a natural mosquito repellent and to relieve muscle aches.",
        tags: ["Food", "Medicine", "Other"]
    },
    {
        name: "Avaram Senna (Ranawara)",
        scientific: "Senna auricula",
        uses: "The flowers are dried and brewed as a popular caffeine-free tea. Used for controlling blood sugar and improving skin complexion.",
        tags: ["Food", "Medicine"]
    },
    {
        name: "Breadfruit (Del)",
        scientific: "Artocarpus altilis",
        uses: "A starchy staple vegetable. The latex of the tree is traditionally used to heal minor skin scratches and wounds.",
        tags: ["Food", "Medicine"]
    },
    {
        name: "Devil's Backbone (Hiressa)",
        scientific: "Cissus quadrangularis",
        uses: "Used in traditional medicine to accelerate the healing of bone fractures and for its anti-inflammatory effects on joints.",
        tags: ["Medicine"]
    },
    {
        name: "Spanish Cherry (Munamal)",
        scientific: "Mimusops elengi",
        uses: "The bark and flowers are used to strengthen gums and teeth. The fragrant flowers are used in aromatherapy.",
        tags: ["Medicine", "Ornamental", "Other"]
    },
    {
        name: "Long Pepper (Thippili)",
        scientific: "Piper longum",
        uses: "A key ingredient in many Ayurvedic tonics. Used to treat chronic coughs, asthma, and digestive sluggishness.",
        tags: ["Medicine"]
    },
    {
        name: "Guava (Pera)",
        scientific: "Psidium guajava",
        uses: "Rich in vitamins. The young leaves are often chewed or brewed as a tea to treat diarrhea and oral infections.",
        tags: ["Food", "Medicine"]
    },
    {
        name: "Star Fruit (Kamaranka)",
        scientific: "Averrhoa carambola",
        uses: "Used in salads and juices. Traditionally used to reduce fever and as a diuretic to treat skin conditions.",
        tags: ["Food", "Medicine"]
    },
    {
        name: "Passion Fruit",
        scientific: "Passiflora edulis",
        uses: "Cultivated for its tart juice. The leaves are used in traditional medicine as a sedative to treat insomnia and anxiety.",
        tags: ["Food", "Medicine"]
    },
    {
        name: "Beli Mull (Bael Root)",
        scientific: "Aegle marmelos (Root)",
        uses: "One of the 'Dashamoola' (ten roots) in Ayurveda. Specifically used for treating inflammatory conditions and bowel disorders.",
        tags: ["Medicine"]
    },
    {
        name: "Castor Oil Plant (Endaru)",
        scientific: "Ricinus communis",
        uses: "The oil is a potent laxative and hair treatment. Leaves are used as a topical compress to reduce localized heat and pain.",
        tags: ["Medicine", "Industrial"]
    },
    {
        name: "Wel Penela",
        scientific: "Cardiospermum halicacabum",
        uses: "Used in herbal porridge (Kanda). Believed to improve joint mobility and used in the treatment of nerve disorders.",
        tags: ["Food", "Medicine"]
    },
    {
        name: "Katuwelbatu",
        scientific: "Solanum virginianum",
        uses: "Widely used in Ayurveda for respiratory ailments like asthma and chronic coughs. It is an essential ingredient in Paspanguwa.",
        tags: ["Medicine"]
    },
    {
        name: "Kothala Himbutu",
        scientific: "Salacia reticulata",
        uses: "Native to Sri Lanka. Historically used by kings to drink water from vessels made of this wood to manage diabetes.",
        tags: ["Medicine", "Other"]
    },
    {
        name: "Binara",
        scientific: "Exacum trinervium",
        uses: "Endemic to Sri Lanka. While primarily known for its beautiful blue flowers, it is used in traditional medicine for skin diseases.",
        tags: ["Medicine", "Ornamental"]
    },
    {
        name: "Kohila",
        scientific: "Lasia spinosa",
        uses: "A fibrous marshy plant. Highly recommended in Sri Lanka for digestive health and specifically for treating hemorrhoids.",
        tags: ["Food", "Medicine"]
    },
    {
        name: "Bin-kohomba",
        scientific: "Munronia pinnata",
        uses: "Rare and highly valued medicinal herb used for blood purification, treating fevers, and various skin diseases in Ayurveda.",
        tags: ["Medicine"]
    },
    {
        name: "Heen-bowitiya",
        scientific: "Osbeckia octandra",
        uses: "Endemic to Sri Lanka. Renowned for its effectiveness in treating liver disorders, hepatitis, and jaundice.",
        tags: ["Medicine"]
    },
    {
        name: "Pupula",
        scientific: "Vernonia zeylanica",
        uses: "An endemic plant widely used in traditional bone-setting medicine and for reducing inflammatory swellings.",
        tags: ["Medicine"]
    },
    {
        name: "Kora-kaha",
        scientific: "Memecylon capitellatum",
        uses: "Endemic plant used to treat skin infections. Also valued as a cooling agent and as an ornamental plant due to its bright flowers.",
        tags: ["Medicine", "Ornamental"]
    },
    {
        name: "Venivel",
        scientific: "Coscinium fenestratum",
        uses: "Possesses strong antibacterial properties. Used for skin diseases, as a natural disinfectant, and to treat fevers.",
        tags: ["Medicine"]
    },
    {
        name: "Iriveriya",
        scientific: "Plectranthus zeylanicus",
        uses: "Traditionally used to treat fevers, diarrhea, and vomiting. Known for its cooling effect on the digestive system.",
        tags: ["Medicine"]
    },
    {
        name: "Ekaweriya",
        scientific: "Rauvolfia serpentina",
        uses: "Used for centuries to treat high blood pressure and snake bites. It is the source of the alkaloid reserpine.",
        tags: ["Medicine"]
    },
    {
        name: "Ehela",
        scientific: "Cassia fistula",
        uses: "A beautiful ornamental tree whose pulp is used as a mild laxative. Also used to treat skin diseases and joint pains.",
        tags: ["Medicine", "Ornamental"]
    },
    {
        name: "Bulu",
        scientific: "Terminalia bellirica",
        uses: "One of the three fruits in 'Triphala'. Used to treat coughs, asthma, and various eye diseases.",
        tags: ["Medicine"]
    },
    {
        name: "Aralu",
        scientific: "Terminalia chebula",
        uses: "Known as the 'King of Medicines' in some traditions. Used for constipation, digestive health, and wound healing.",
        tags: ["Medicine"]
    },
    {
        name: "Attikka",
        scientific: "Ficus racemosa",
        uses: "Used in traditional medicine for diabetes, dysentery, and to quench excessive thirst.",
        tags: ["Medicine"]
    },
    {
        name: "Bakmi",
        scientific: "Nauclea orientalis",
        uses: "The bark and leaves are used to treat swellings, digestive disorders, and as an antidote for snake bites.",
        tags: ["Medicine"]
    },
    {
        name: "Lunuwila",
        scientific: "Bacopa monnieri",
        uses: "A well-known 'Brahmi' herb used to enhance memory, concentration, and to treat epilepsy and anxiety.",
        tags: ["Medicine"]
    },
    {
        name: "Kikirindiya",
        scientific: "Eclipta alba",
        uses: "Widely used for promoting hair growth and treating liver health and skin diseases.",
        tags: ["Medicine"]
    },
    {
        name: "Mas-bedda",
        scientific: "Gymnema sylvestre",
        uses: "Known as the 'sugar destroyer'. Its leaves are used to manage diabetes by reducing sugar absorption and cravings.",
        tags: ["Medicine"]
    },
    {
        name: "Rasakinda",
        scientific: "Tinospora cordifolia",
        uses: "A powerful immune booster used to treat chronic fevers, gout, and various skin conditions.",
        tags: ["Medicine"]
    },
    {
        name: "Wal-thibbatu",
        scientific: "Solanum trilobatum",
        uses: "The leaves and berries are used to treat chronic coughs and respiratory congestion. Often consumed as a vegetable.",
        tags: ["Medicine", "Food"]
    },
    {
        name: "Siyambala",
        scientific: "Tamarindus indica",
        uses: "The fruit pulp is a culinary staple for its sour flavor. Medicinally used for digestive issues and as a cooling agent.",
        tags: ["Food", "Medicine"]
    },
    {
        name: "Wara",
        scientific: "Calotropis gigantea",
        uses: "Used topically to treat joint pains, skin diseases, and toothaches. The plant also has cultural significance.",
        tags: ["Medicine"]
    },
    {
        name: "Nidi-kumba",
        scientific: "Mimosa pudica",
        uses: "The 'sensitive plant'. Used for wound healing, treating piles, and addressing urinary tract issues.",
        tags: ["Medicine"]
    },
    {
        name: "Gokatu",
        scientific: "Tribulus terrestris",
        uses: "Used in Ayurveda to treat urinary tract infections and to improve overall vitality and reproductive health.",
        tags: ["Medicine"]
    },
    {
        name: "Amukkara",
        scientific: "Withania somnifera",
        uses: "Commonly known as Ashwagandha. Used to provide strength, reduce stress, and treat exhaustion.",
        tags: ["Medicine"]
    },
    {
        name: "Ikiriya",
        scientific: "Asteracantha longifolia",
        uses: "Valued as a potent diuretic and used in the treatment of jaundice and hepatic obstructions.",
        tags: ["Medicine"]
    },
    {
        name: "Undupiyaliya",
        scientific: "Desmodium triflorum",
        uses: "A small creeping herb used to treat skin eruptions and as a cooling agent for the body.",
        tags: ["Medicine"]
    },
    {
        name: "Pitawakka",
        scientific: "Phyllanthus debilis",
        uses: "Highly effective in treating liver ailments, jaundice, and other digestive disorders.",
        tags: ["Medicine"]
    },
    {
        name: "Kithul",
        scientific: "Caryota urens",
        uses: "The sap is used to make treacle and jaggery. The pith provides a nutritious flour used for treating gastric ulcers.",
        tags: ["Food", "Industrial"]
    },
    {
        name: "Thebu",
        scientific: "Costus speciosus",
        uses: "The leaves are consumed as a 'Sambol' to help lower blood sugar levels in diabetic patients.",
        tags: ["Food", "Medicine"]
    },
    {
        name: "Kathurumurunga",
        scientific: "Sesbania grandiflora",
        uses: "The leaves and flowers are eaten to treat mouth ulcers, sore throats, and to improve eyesight.",
        tags: ["Food", "Medicine"]
    },
    {
        name: "Polpala",
        scientific: "Aerva lanata",
        uses: "A key herb for dissolving kidney stones and treating urinary infections. Often consumed as a herbal tea.",
        tags: ["Medicine", "Food"]
    },
    {
        name: "Erabadu",
        scientific: "Erythrina variegata",
        uses: "The leaves are used in traditional medicine to treat worm infections and various skin diseases.",
        tags: ["Medicine", "Ornamental"]
    },
    {
        name: "Thampala",
        scientific: "Amaranthus viridis",
        uses: "A highly nutritious leafy green used in traditional curries and to improve overall digestion and health.",
        tags: ["Food", "Medicine"]
    },
    {
        name: "Sarana",
        scientific: "Boerhavia diffusa",
        uses: "A potent diuretic used in Ayurveda to treat kidney disorders, edema, and liver ailments.",
        tags: ["Medicine", "Food"]
    },
    {
        name: "Anguna",
        scientific: "Wattakaka reticulata",
        uses: "The leaves are used in medicinal porridges for detoxification and specifically for managing diabetes.",
        tags: ["Medicine", "Food"]
    },
    {
        name: "Monarakudumbiya",
        scientific: "Vernonia cinerea",
        uses: "Used as a general tonic, to reduce fevers, treat skin diseases, and manage urinary disorders.",
        tags: ["Medicine"]
    },
    {
        name: "Nil-Avari",
        scientific: "Indigofera tinctoria",
        uses: "The source of natural indigo dye. In medicine, it's used for hair growth and treating liver and spleen ailments.",
        tags: ["Medicine", "Industrial"]
    },
    {
        name: "Rath-nitul",
        scientific: "Plumbago rosea",
        uses: "A potent medicinal root used for digestive issues, skin diseases, and as a strong anti-inflammatory agent.",
        tags: ["Medicine"]
    },
    {
        name: "Ela-nitul",
        scientific: "Plumbago zeylanica",
        uses: "Used to boost metabolism, treat chronic skin disorders, and improve digestion and appetite.",
        tags: ["Medicine"]
    },
    {
        name: "Goda-kaduru",
        scientific: "Strychnos nux-vomica",
        uses: "Though toxic in raw form, purified extracts are used in minute quantities for nerve disorders and digestive issues.",
        tags: ["Medicine"]
    },
    {
        name: "Diya-mitta",
        scientific: "Cissampelos pareira",
        uses: "Traditionally used for treating fevers, digestive problems, and as a diuretic and anti-inflammatory.",
        tags: ["Medicine"]
    },
    {
        name: "Maha-bowitiya",
        scientific: "Osbeckia aspericaulis",
        uses: "An endemic plant similar to Heen-bowitiya, used in treating more severe liver-related conditions.",
        tags: ["Medicine"]
    },
    {
        name: "Wal-ekaweriya",
        scientific: "Rauvolfia tetraphylla",
        uses: "Used as a sedative and to treat hypertension, skin diseases, and snake bites in traditional medicine.",
        tags: ["Medicine"]
    },
    {
        name: "Katupila",
        scientific: "Flueggea leucopyrus",
        uses: "Renowned for its wound-healing properties and its traditional use in treating internal tumors and skin cancers.",
        tags: ["Medicine"]
    },
    {
        name: "Heen-araththa",
        scientific: "Alpinia calcarata",
        uses: "The rhizomes are used for treating respiratory ailments, improving digestion, and as an anti-inflammatory.",
        tags: ["Medicine"]
    },
    {
        name: "Mee",
        scientific: "Madhuca longifolia",
        uses: "Seeds provide oil for traditional lamps. The flowers and bark are used for various medicinal purposes and as food.",
        tags: ["Food", "Medicine", "Industrial"]
    },
    {
        name: "Wal-del",
        scientific: "Artocarpus nobilis",
        uses: "An endemic wild breadfruit. The timber is highly valued for construction, and the seeds are roasted and eaten.",
        tags: ["Food", "Industrial"]
    },
    {
        name: "Hora",
        scientific: "Dipterocarpus zeylanicus",
        uses: "A major endemic timber tree. Its resins are used for making varnishes and traditionally for lamps.",
        tags: ["Industrial"]
    },
    {
        name: "Nedun",
        scientific: "Pericopsis mooniana",
        uses: "A highly prized endemic timber known for its extreme durability and beautiful grain, used for premium furniture.",
        tags: ["Industrial"]
    },
    {
        name: "Ebony (Kaluwara)",
        scientific: "Diospyros ebenum",
        uses: "Produces the world's finest black wood. Historically used for high-end furniture, carvings, and ornaments.",
        tags: ["Industrial"]
    },
    {
        name: "Satinwood (Burutha)",
        scientific: "Chloroxylon swietenia",
        uses: "Highly valued for its golden-yellow wood, used in premium construction, high-end furniture, and luxury fittings.",
        tags: ["Industrial"]
    },
    {
        name: "Palmyra (Thal)",
        scientific: "Borassus flabellifer",
        uses: "A 'Tree of Life' in the north, providing food, fiber, and construction materials. Used to make handicrafts and brushes.",
        tags: ["Food", "Industrial"]
    }
];

// Load plants and pending requests from localStorage
let rawPlants = JSON.parse(localStorage.getItem('sl_plants')) || [];
let rawPending = JSON.parse(localStorage.getItem('sl_pending_plants')) || [];

// Sanitize and Merge logic:
// 1. Start with default plants
let plants = [...defaultPlants];

// 2. If there are plants in localStorage, merge them
if (rawPlants.length > 0) {
    rawPlants.forEach(savedPlant => {
        if (!savedPlant) return;
        
        // Check if this plant already exists in the defaults (by name)
        const existingIndex = plants.findIndex(p => p.name.toLowerCase() === savedPlant.name.toLowerCase());
        
        if (existingIndex !== -1) {
            // Update the existing plant with any changes from localStorage (like user edits)
            // But if the uses/tags are the same as defaults, keep the saved one
            plants[existingIndex] = savedPlant;
        } else {
            // It's a brand new plant the user added
            plants.push(savedPlant);
        }
    });
}

// 3. Save the merged list back to ensure storage is up to date
localStorage.setItem('sl_plants', JSON.stringify(plants));

let pendingPlants = rawPending.filter(p => p !== null && typeof p === 'object');

let isAdmin = localStorage.getItem('sl_isAdmin') === 'true';

const PLANTS_PER_PAGE = 21;
let currentPage = 1;
let currentFilteredPlants = [];

const searchInput = document.getElementById('searchInput');
const plantsContainer = document.getElementById('plantsContainer');
const paginationContainer = document.getElementById('pagination');
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

function updateAdminUI(manageFilter = '') {
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
    
    const query = manageFilter.toLowerCase().trim();
    
    plants.forEach((plant, index) => {
        if (!plant) return;
        
        const matches = plant.name.toLowerCase().includes(query) || 
                        plant.scientific.toLowerCase().includes(query);
                        
        if (!matches && query !== '') return;

        const item = document.createElement('div');
        item.className = 'manage-item';
        item.innerHTML = `
            <span><strong>${plant.name}</strong> (${plant.scientific})</span>
            <button class="delete-btn" onclick="deletePlant(${index})">Delete</button>
        `;
        manageContainer.appendChild(item);
    });
}

// Event listener for admin search
document.addEventListener('input', (e) => {
    if (e.target.id === 'adminManageSearch') {
        updateAdminUI(e.target.value);
    }
});

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

function renderPagination(totalPlants) {
    paginationContainer.innerHTML = '';
    const totalPages = Math.ceil(totalPlants / PLANTS_PER_PAGE);

    if (totalPages <= 1) return;

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.innerText = i;
        btn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
        btn.onclick = () => {
            currentPage = i;
            displayPlants(currentFilteredPlants);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        paginationContainer.appendChild(btn);
    }
}

function displayPlants(filteredPlants, highlightName = null) {
    currentFilteredPlants = filteredPlants;
    // Switch from hero mode to top mode
    mainContainer.classList.remove('hero-mode');

    const render = () => {
        if (filteredPlants.length === 0) {
            plantsContainer.innerHTML = '<div class="no-results">No plants found matching your search.</div>';
            paginationContainer.innerHTML = '';
            return;
        }

        const start = (currentPage - 1) * PLANTS_PER_PAGE;
        const end = start + PLANTS_PER_PAGE;
        const pagePlants = filteredPlants.slice(start, end);

        pagePlants.forEach(plant => {
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
                <button class="copy-btn" title="Copy plant details">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                </button>
                <h2>${plant.name}</h2>
                <div class="scientific-name">${plant.scientific}</div>
                <div class="tags-container">${tagsHtml}</div>
                <div class="uses-title">Primary Uses</div>
                <div class="uses-content">${plant.uses}</div>
                <button class="expand-btn">Read More</button>
            `;

            // Setup copy functionality
            const copyBtn = card.querySelector('.copy-btn');
            copyBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const textToCopy = `${plant.name} (${plant.scientific})`;
                navigator.clipboard.writeText(textToCopy).then(() => {
                    showToast(`Copied: ${textToCopy}`, "success");
                }).catch(err => {
                    showToast("Failed to copy text", "error");
                });
            });

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

        renderPagination(filteredPlants.length);
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
            paginationContainer.innerHTML = '';
        });
        return;
    }
    
    const filtered = plants.filter(plant => {
        return plant && (plant.name.toLowerCase().includes(query) || 
               plant.scientific.toLowerCase().includes(query));
    });
    
    currentPage = 1; // Reset to page 1 on search
    displayPlants(filtered);
}

// View All / Hide All Toggle Logic
let isShowingAll = false;

viewAllBtn.onclick = () => {
    isShowingAll = !isShowingAll;
    
    if (isShowingAll) {
        searchInput.value = '';
        currentPage = 1; // Reset to page 1
        displayPlants(plants);
        viewAllBtn.innerText = 'Hide All';
    } else {
        clearPlants(() => {
            mainContainer.classList.add('hero-mode');
            viewAllBtn.innerText = 'View All';
            paginationContainer.innerHTML = '';
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
