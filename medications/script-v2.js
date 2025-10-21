// Medications Explorer - Modular Version
// Uses ES6 modules and dataLoader architecture

import dataLoader from './data-loader.js';
import ExplorerNavigation from '../shared/explorer-navigation.js';

// Global state
let layoutMode = 'reference';
let selectedSystem = null;
let selectedTherapeuticClass = null;
let selectedPharmacologicClass = null;
let selectedDrug = null;
let searchableData = [];
let comparisonSelection = [];
let lastState = null;

// Initialize app


// Build nested structure from dataLoader (backward compatibility)
function buildNestedStructure() {
    const systems = dataLoader.getSystems();
    
    return systems.map(system => {
        const systemData = getSystemData(system);
        
        return {
            id: system.id,
            name: system.name,
            system: system.name,
            therapeutic_classes: systemData.therapeutic_classes
        };
    });
}

// Declare drugData as global variable
let drugData = [];

// Update initApp to build nested structure
async function initApp() {
    console.log("Initializing Medications Explorer (Modular)...");

    // Load data
    const loaded = await dataLoader.load();
    if (!loaded) {
        alert("Failed to load medication data. Please refresh the page.");
        return false;
    }

    console.log("✓ Data loaded:", dataLoader.getStats());

    // Build nested structure for UI
    drugData = buildNestedStructure();
    console.log(`✓ Built nested structure: ${drugData.length} systems ready`);

    // Initialize UI will be called from DOMContentLoaded
    console.log("✓ Ready for UI initialization");
    return true;
}
// Wait for DOM then initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}


// ============================================================================
// FLATTEN DRUG DATA FOR SEARCH
// ============================================================================

function flattenDrugData() {
    searchableData = [];
    const drugs = dataLoader.drugs;  // Access all drugs directly
    
    drugs.forEach(drug => {
        const pharmaClass = dataLoader.getClassById(drug.pharmacologicClass);
        const therapeuticClass = dataLoader.getClassById(drug.therapeuticClass);
        const system = dataLoader.getSystemById(drug.system);
        
        searchableData.push({
            drugName: drug.name,
            drugClass: pharmaClass ? pharmaClass.name : drug.pharmacologicClass,
            indications: drug.indications || [],
            pointers: {
                system,
                therapeuticClass,
                pharmaClass,
                drug
            }
        });
    });
    
    console.log(`✓ Flattened ${searchableData.length} drugs for search`);
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function saveLastState(func, args) {
    lastState = { func, args };
}

// Get therapeutic classes for a system (with nested pharma classes and drugs)
function getSystemData(system) {
    const therapeuticClasses = dataLoader.getTherapeuticClassesBySystem(system.id);
    
    return {
        id: system.id,
        name: system.name,
        therapeutic_classes: therapeuticClasses.map(tc => ({
            id: tc.id,
            name: tc.name,
            pharma_classes: dataLoader.getPharmacologicClassesByTherapeuticClass(tc.id).map(pc => ({
                id: pc.id,
                name: pc.name,
                mechanism: pc.mechanism,
                sideEffects: pc.sideEffects,
                interactions: pc.interactions,
                interactionDetails: pc.interactionDetails,
                drugs: dataLoader.getDrugsByPharmacologicClass(pc.id)
            }))
        }))
    };
}

function searchByIndication(indication) {
    trackEvent('shortcut_search', {
        trigger: 'indication_tag',
        value: indication
    });
    // Switch to search view and search for all drugs with this indication
    if (window.DrugApp && window.DrugApp.renderSearchView) {
        window.DrugApp.renderSearchView();
        setTimeout(() => {
            const searchInput = document.getElementById('drug-search-input');
            const indicationRadio = document.querySelector('input[name="search-type"][value="indication"]');
            if (indicationRadio) indicationRadio.checked = true;
            if (searchInput) searchInput.value = indication;
            if (window.DrugApp.performSearch) {
                window.DrugApp.performSearch(indication, 'indication');
            }
        }, 100);
    }
}

function searchByContraindication(contraindication) {
    trackEvent('shortcut_search', {
        trigger: 'contraindication_tag',
        value: contraindication
    });
    // Switch to search view and search for all drugs to avoid with this condition
    if (window.DrugApp && window.DrugApp.renderSearchView) {
        window.DrugApp.renderSearchView();
        setTimeout(() => {
            const searchInput = document.getElementById('drug-search-input');
            if (searchInput) searchInput.value = contraindication;
            // Special search type for contraindications
            if (window.DrugApp.performContraindicationSearch) {
                window.DrugApp.performContraindicationSearch(contraindication);
            }
        }, 100);
    }
}

function searchBySideEffect(sideEffect) {
    trackEvent('shortcut_search', {
        trigger: 'side_effect_tag',
        value: sideEffect
    });
    if (window.DrugApp && window.DrugApp.renderSearchView) {
        window.DrugApp.renderSearchView();
        setTimeout(() => {
            const searchInput = document.getElementById('drug-search-input');
            const sideEffectRadio = document.querySelector('input[name="search-type"][value="side-effect"]');
            if (sideEffectRadio) sideEffectRadio.checked = true;
            if (searchInput) searchInput.value = sideEffect;
            if (window.DrugApp.performSearch) {
                window.DrugApp.performSearch(sideEffect, 'side-effect');
            }
        }, 100);
    }
}

function searchByMechanism(mechanism) {
    trackEvent('shortcut_search', {
        trigger: 'mechanism_tag',
        value: mechanism
    });
    if (window.DrugApp && window.DrugApp.renderSearchView) {
        window.DrugApp.renderSearchView();
        setTimeout(() => {
            const searchInput = document.getElementById('drug-search-input');
            const mechanismRadio = document.querySelector('input[name="search-type"][value="mechanism"]');
            if (mechanismRadio) mechanismRadio.checked = true;
            if (searchInput) searchInput.value = mechanism;
            if (window.DrugApp.performSearch) {
                window.DrugApp.performSearch(mechanism, 'mechanism');
            }
        }, 100);
    }
}

function searchByClass(drugClass) {
    trackEvent('shortcut_search', {
        trigger: 'class_tag',
        value: drugClass
    });
    if (window.DrugApp && window.DrugApp.renderSearchView) {
        window.DrugApp.renderSearchView();
        setTimeout(() => {
            const searchInput = document.getElementById('drug-search-input');
            const classRadio = document.querySelector('input[name="search-type"][value="class"]');
            if (classRadio) classRadio.checked = true;
            if (searchInput) searchInput.value = drugClass;
            if (window.DrugApp.performSearch) {
                window.DrugApp.performSearch(drugClass, 'class');
            }
        }, 100);
    }
}

function searchBySystem(system) {
    trackEvent('shortcut_search', {
        trigger: 'system_tag',
        value: system
    });
    if (window.DrugApp && window.DrugApp.renderSearchView) {
        window.DrugApp.renderSearchView();
        setTimeout(() => {
            const searchInput = document.getElementById('drug-search-input');
            const systemRadio = document.querySelector('input[name="search-type"][value="system"]');
            if (systemRadio) systemRadio.checked = true;
            if (searchInput) searchInput.value = system;
            if (window.DrugApp.performSearch) {
                window.DrugApp.performSearch(system, 'system');
            }
        }, 100);
    }
}

const analyticsQueue = [];

const resolveGtag = () => {
    if (typeof window === 'undefined') return null;
    if (typeof window.gtag === 'function') return window.gtag;
    if (window.Step1Analytics && typeof window.Step1Analytics.gtag === 'function') {
        return window.Step1Analytics.gtag;
    }
    return null;
};

const flushAnalyticsQueue = () => {
    const gtag = resolveGtag();
    if (!gtag || !analyticsQueue.length) return;
    while (analyticsQueue.length) {
        const { eventName, params } = analyticsQueue.shift();
        gtag('event', eventName, params);
    }
};

const trackEvent = (eventName, params = {}) => {
    const payload = { ...params };
    const gtag = resolveGtag();
    if (gtag) {
        gtag('event', eventName, payload);
        return;
    }
    analyticsQueue.push({ eventName, params: payload });
};

window.addEventListener('load', flushAnalyticsQueue);

// Initialize global DrugApp object
window.DrugApp = window.DrugApp || {};

document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.getElementById('column-container');
    const headerControls = document.getElementById('header-controls');
    const comparisonList = [];
    let lastState = { func: showSystems, args: [] };
    let searchableData = [];
    const columnWidthCache = {};
    const infoButton = document.getElementById('info-button');
    const infoModal = document.getElementById('info-modal');
    const infoModalClose = document.getElementById('info-modal-close');
    const layoutToggle = document.getElementById('layout-toggle');
    const infoModalStart = document.getElementById('info-modal-start');
    const WELCOME_STORAGE_KEY = 'step1DrugReview_seenWelcome';
    let hasSeenWelcome = false;
    try {
        hasSeenWelcome = localStorage.getItem(WELCOME_STORAGE_KEY) === 'true';
    } catch (error) {
        hasSeenWelcome = false;
    }
    let layoutMode = 'reference';
    let selectedSystem = null;
    let selectedTherapeuticClass = null;
    let selectedPharmaClass = null;

    const debounce = (fn, delay = 300) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => fn.apply(null, args), delay);
        };
    };

    let lastSearchLog = { fingerprint: '', timestamp: 0 };
    let latestSearchOutcome = null;

    const logSearchInteraction = debounce((searchType, value) => {
        const trimmed = value.trim();
        if (!trimmed) return;
        const normalized = trimmed.toLowerCase();
        const fingerprint = `${searchType}:${normalized}`;
        const now = Date.now();
        if (fingerprint === lastSearchLog.fingerprint && now - lastSearchLog.timestamp < 5000) {
            return;
        }
        lastSearchLog = { fingerprint, timestamp: now };
        const payload = {
            search_type: searchType,
            query_length: Math.min(trimmed.length, 100)
        };
        if (
            latestSearchOutcome &&
            latestSearchOutcome.type === searchType &&
            latestSearchOutcome.query === normalized
        ) {
            payload.results_count = latestSearchOutcome.resultsCount;
        }
        trackEvent('search_input', payload);
    }, 700);

    const openInfoModal = () => {
        if (!infoModal) return;
        infoModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        trackEvent('open_help_modal');
        try {
            localStorage.setItem(WELCOME_STORAGE_KEY, 'true');
        } catch (error) {
            // Ignore storage errors (private mode, etc.)
        }
    };

    const closeInfoModal = () => {
        if (!infoModal) return;
        infoModal.classList.add('hidden');
        document.body.style.overflow = '';
        trackEvent('close_help_modal');
    };

    if (infoButton) {
        infoButton.addEventListener('click', openInfoModal);
    }

    if (infoModalClose) {
        infoModalClose.addEventListener('click', closeInfoModal);
    }

    if (infoModalStart) {
        infoModalStart.addEventListener('click', () => {
            trackEvent('start_from_help_modal');
            closeInfoModal();
        });
    }

    if (infoModal) {
        infoModal.addEventListener('click', (event) => {
            if (event.target === infoModal) {
                closeInfoModal();
            }
        });
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && infoModal && !infoModal.classList.contains('hidden')) {
            closeInfoModal();
        }
    });

    if (!hasSeenWelcome) {
        setTimeout(() => {
            openInfoModal();
        }, 120);
    }

    function applyFadeIn(element, direction = 'down') {
        if (!element) return;
        const baseClass = direction === 'left' ? 'fade-enter-left' : 'fade-enter';
        element.classList.remove('fade-enter', 'fade-enter-left', 'fade-enter-active');
        element.classList.add(baseClass);
        requestAnimationFrame(() => {
            element.classList.add('fade-enter-active');
        });
    }

    if (layoutToggle) {
        const updateLayoutToggleText = () => {
            layoutToggle.textContent = layoutMode === 'learning' ? 'Reference View' : 'Learning View';
        };

        updateLayoutToggleText();

        layoutToggle.addEventListener('click', () => {
            layoutMode = layoutMode === 'learning' ? 'reference' : 'learning';
            updateLayoutToggleText();
            trackEvent('toggle_layout', { layout: layoutMode });
            if (layoutMode === 'reference') {
                ensureCascadeSelections();
            }
            showSystems();
        });
    }

    function parseInteractionTags(interactionText) {
        const interactionLower = interactionText.toLowerCase();
        const commonInteractions = [];
        
        // Common drug classes that interact
        const drugClasses = ['warfarin', 'nsaids', 'ace inhibitors', 'beta-blockers', 'calcium channel blockers', 
                          'diuretics', 'maois', 'ssris', 'lithium', 'digoxin', 'phenytoin', 'cimetidine',
                          'amiodarone', 'quinidine', 'verapamil', 'diltiazem', 'atorvastatin', 'simvastatin'];
        
        // Also check for variations with different capitalization
        const drugClassVariations = ['Calcium channel blockers', 'Beta-blockers', 'ACE inhibitors', 'MAOIs', 'SSRIs', 'NSAIDs'];
        
        drugClasses.forEach(drugClass => {
            if (interactionLower.includes(drugClass)) {
                commonInteractions.push(drugClass);
            }
        });
        
        // Check for capitalized variations in original text
        drugClassVariations.forEach(drugClass => {
            if (interactionText.includes(drugClass) && !commonInteractions.includes(drugClass.toLowerCase())) {
                commonInteractions.push(drugClass.toLowerCase());
            }
        });
        
        // Also split by common delimiters for other interactions
        const otherInteractions = interactionText.split(/[,;.]/)
            .filter(item => item.trim() && !commonInteractions.some(common => 
                item.toLowerCase().includes(common)))
            .slice(0, 3); // Limit to prevent overcrowding
        
        return [...commonInteractions, ...otherInteractions]
            .map(interaction => `<span class="tag interaction">${interaction.trim()}</span>`)
            .join('');
    }

    function flattenDrugData() {
        searchableData = []; // Clear previous data
        drugData.forEach(system => {
            system.therapeutic_classes.forEach(therapeuticClass => {
                therapeuticClass.pharma_classes.forEach(pharmaClass => {
                    pharmaClass.drugs.forEach(drug => {
                        searchableData.push({
                            drugName: drug.name,
                            drugClass: pharmaClass.name,
                            indications: drug.indications || [],
                            pointers: { system, therapeuticClass, pharmaClass, drug }
                        });
                    });
                });
            });
        });
    }

    function saveLastState(func, args) {
        lastState = { func, args };
    }

    function updateHeaderControls() {
        headerControls.innerHTML = '';
        const isSearchView = mainContainer.id === 'search-view-container';
        const isCompareView = mainContainer.classList.contains('compare-view-container');

        if (isSearchView) {
            const backButton = document.createElement('button');
            backButton.className = 'header-btn';
            backButton.innerText = 'Back to Navigation';
            backButton.onclick = backToNavigation;
            headerControls.appendChild(backButton);
        } else {
            const searchButton = document.createElement('button');
            searchButton.className = 'header-btn';
            searchButton.innerText = 'Search';
            searchButton.onclick = renderSearchView;
            headerControls.appendChild(searchButton);
        }

        if (comparisonList.length > 0) {
            const compareButton = document.createElement('button');
            compareButton.className = 'compare-view-button';
            if (isCompareView) {
                compareButton.innerText = 'Return to Navigation';
                compareButton.onclick = backToNavigation;
            } else {
                compareButton.innerText = `Compare Items (${comparisonList.length})`;
                compareButton.onclick = renderCompareView;
            }
            headerControls.appendChild(compareButton);
        }
    }

    function ensureCascadeSelections() {
        if (!drugData.length) {
            selectedSystem = null;
            selectedTherapeuticClass = null;
            selectedPharmaClass = null;
            return;
        }

        if (!selectedSystem || !drugData.includes(selectedSystem)) {
            selectedSystem = drugData[0];
        }

        const therapeuticOptions = selectedSystem.therapeutic_classes || [];
        if (!selectedTherapeuticClass || !therapeuticOptions.includes(selectedTherapeuticClass)) {
            selectedTherapeuticClass = therapeuticOptions[0] || null;
        }

        const pharmaOptions = selectedTherapeuticClass ? (selectedTherapeuticClass.pharma_classes || []) : [];
        if (!selectedPharmaClass || !pharmaOptions.includes(selectedPharmaClass)) {
            selectedPharmaClass = pharmaOptions[0] || null;
        }
    }

    function buildDrugCard({
        drug,
        pharmaClass,
        system,
        therapeuticClass,
        includeCompare = false,
        compared = false,
        onCompareClick,
        onCardClick,
        showSystemTags = false,
        showMechanism = false
    }) {
        const card = document.createElement('div');
        card.className = 'drug-card';

        const headerRow = document.createElement('div');
        headerRow.className = 'drug-card-header-row';

        const nameEl = document.createElement('div');
        nameEl.className = 'drug-name';
        nameEl.textContent = drug.name;
        headerRow.appendChild(nameEl);

        const actionsEl = document.createElement('div');
        actionsEl.className = 'drug-card-actions';

        let compareButton = null;
        if (includeCompare) {
            compareButton = document.createElement('button');
            compareButton.className = 'compare-btn';
            compareButton.innerText = compared ? 'Added' : 'Compare';
            if (compared) {
                compareButton.classList.add('added');
            }
            compareButton.addEventListener('click', (event) => {
                event.stopPropagation();
                if (typeof onCompareClick === 'function') {
                    onCompareClick(compareButton);
                }
            });
            actionsEl.appendChild(compareButton);
        }

        const expandButton = document.createElement('button');
        expandButton.type = 'button';
        expandButton.className = 'expand-btn';
        expandButton.innerHTML = '🔍';
        expandButton.setAttribute('aria-expanded', 'false');
        expandButton.title = 'Expand details';
        expandButton.addEventListener('click', (event) => {
            event.stopPropagation();
            const willExpand = !card.classList.contains('expanded');

            if (willExpand && card.parentElement) {
                card.parentElement.querySelectorAll('.drug-card.expanded').forEach(otherCard => {
                    if (otherCard !== card) {
                        otherCard.classList.remove('expanded');
                        const otherButton = otherCard.querySelector('.expand-btn');
                        if (otherButton) {
                            otherButton.setAttribute('aria-expanded', 'false');
                            otherButton.innerHTML = '🔍';
                        }
                    }
                });
            }

            const expanded = card.classList.toggle('expanded');
            expandButton.setAttribute('aria-expanded', expanded);
            expandButton.innerHTML = expanded ? '✕' : '🔍';

            if (expanded) {
                card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
        actionsEl.appendChild(expandButton);

        headerRow.appendChild(actionsEl);
        card.appendChild(headerRow);

        if (showSystemTags && system) {
            const section = document.createElement('div');
            section.className = 'drug-section';
            const title = document.createElement('div');
            title.className = 'drug-section-title';
            title.textContent = 'System & Class';
            section.appendChild(title);

            const container = document.createElement('div');
            container.className = 'tag-container';

            const systemTag = document.createElement('span');
            systemTag.className = 'tag system';
            systemTag.textContent = system.name;
            systemTag.title = `Filter by ${system.name}`;
            systemTag.addEventListener('click', (event) => {
                event.stopPropagation();
                if (window.filterByTag) {
                    window.filterByTag('system', system.name);
                }
            });
            container.appendChild(systemTag);

            if (pharmaClass) {
                const classTag = document.createElement('span');
                classTag.className = 'tag class';
                classTag.textContent = pharmaClass.name;
                classTag.title = `Filter by ${pharmaClass.name}`;
                classTag.addEventListener('click', (event) => {
                    event.stopPropagation();
                    if (window.filterByTag) {
                        window.filterByTag('class', pharmaClass.name);
                    }
                });
                container.appendChild(classTag);
            }

            section.appendChild(container);
            card.appendChild(section);
        }

        if (showMechanism && pharmaClass && pharmaClass.mechanism) {
            const mechanismSection = document.createElement('div');
            mechanismSection.className = 'drug-section';
            const mechanismTitle = document.createElement('div');
            mechanismTitle.className = 'drug-section-title';
            mechanismTitle.textContent = 'Mechanism';
            mechanismSection.appendChild(mechanismTitle);

            const mechanismContainer = document.createElement('div');
            mechanismContainer.className = 'tag-container';
            const mechanismTag = document.createElement('span');
            mechanismTag.className = 'tag mechanism';
            const mechanismText = pharmaClass.mechanism;
            mechanismTag.textContent = mechanismText.length > 60 ? `${mechanismText.substring(0, 60)}…` : mechanismText;
            mechanismTag.title = mechanismText;
            mechanismTag.addEventListener('click', (event) => {
                event.stopPropagation();
                if (window.filterByTag) {
                    window.filterByTag('mechanism', mechanismText);
                }
            });
            mechanismContainer.appendChild(mechanismTag);
            mechanismSection.appendChild(mechanismContainer);
            card.appendChild(mechanismSection);
        }

        const featuresSection = document.createElement('div');
        featuresSection.className = 'drug-section';
        const featuresTitle = document.createElement('div');
        featuresTitle.className = 'drug-section-title';
        featuresTitle.textContent = 'Key Features';
        featuresSection.appendChild(featuresTitle);
        const featuresBody = document.createElement('p');
        featuresBody.className = 'drug-card-feature';
        featuresBody.textContent = drug.features || '—';
        featuresSection.appendChild(featuresBody);
        card.appendChild(featuresSection);

        const indicationsSection = document.createElement('div');
        indicationsSection.className = 'drug-section';
        const indicationsTitle = document.createElement('div');
        indicationsTitle.className = 'drug-section-title';
        indicationsTitle.textContent = 'Indications';
        indicationsSection.appendChild(indicationsTitle);
        const indicationsContainer = document.createElement('div');
        indicationsContainer.className = 'tag-container';
        if (Array.isArray(drug.indications) && drug.indications.length) {
            drug.indications.forEach(indication => {
                const tag = document.createElement('span');
                tag.classList.add('tag', 'indication', 'clickable-tag');
                tag.dataset.indication = indication;
                tag.title = `Click to find all drugs for ${indication}`;
                tag.textContent = indication;
                indicationsContainer.appendChild(tag);
            });
        } else {
            const placeholder = document.createElement('span');
            placeholder.className = 'tag indication';
            placeholder.textContent = '—';
            indicationsContainer.appendChild(placeholder);
        }
        indicationsSection.appendChild(indicationsContainer);
        card.appendChild(indicationsSection);

        const contraindicationsSection = document.createElement('div');
        contraindicationsSection.className = 'drug-section';
        const contraindicationsTitle = document.createElement('div');
        contraindicationsTitle.className = 'drug-section-title';
        contraindicationsTitle.textContent = 'Contraindications';
        contraindicationsSection.appendChild(contraindicationsTitle);
        const contraindicationsContainer = document.createElement('div');
        contraindicationsContainer.className = 'tag-container';
        if (Array.isArray(drug.contraindications) && drug.contraindications.length) {
            drug.contraindications.forEach(contraindication => {
                const tag = document.createElement('span');
                tag.classList.add('tag', 'contraindication', 'clickable-tag');
                tag.dataset.contraindication = contraindication;
                tag.title = `Click to find all drugs to avoid with ${contraindication}`;
                tag.textContent = contraindication;
                contraindicationsContainer.appendChild(tag);
            });
        } else {
            const placeholder = document.createElement('span');
            placeholder.className = 'tag contraindication';
            placeholder.textContent = '—';
            contraindicationsContainer.appendChild(placeholder);
        }
        contraindicationsSection.appendChild(contraindicationsContainer);
        card.appendChild(contraindicationsSection);

        const extraContainer = document.createElement('div');
        extraContainer.className = 'drug-card-extra';

        if (drug.choice) {
            const choiceSection = document.createElement('div');
            choiceSection.className = 'drug-section';
            const choiceTitle = document.createElement('div');
            choiceTitle.className = 'drug-section-title';
            choiceTitle.textContent = 'Clinical Choice';
            choiceSection.appendChild(choiceTitle);
            const choiceBody = document.createElement('p');
            choiceBody.textContent = drug.choice;
            choiceSection.appendChild(choiceBody);
            extraContainer.appendChild(choiceSection);
        }

        if (!showMechanism && pharmaClass && pharmaClass.mechanism) {
            const mechanismSection = document.createElement('div');
            mechanismSection.className = 'drug-section';
            const mechanismTitle = document.createElement('div');
            mechanismTitle.className = 'drug-section-title';
            mechanismTitle.textContent = 'Mechanism of Action';
            mechanismSection.appendChild(mechanismTitle);
            const mechanismContainer = document.createElement('div');
            mechanismContainer.className = 'tag-container';
            const mechanismTag = document.createElement('span');
            mechanismTag.classList.add('tag', 'mechanism');
            mechanismTag.textContent = pharmaClass.mechanism;
            mechanismTag.title = pharmaClass.mechanism;
            mechanismTag.addEventListener('click', (event) => {
                event.stopPropagation();
                if (window.filterByTag) {
                    window.filterByTag('mechanism', pharmaClass.mechanism);
                }
            });
            mechanismContainer.appendChild(mechanismTag);
            mechanismSection.appendChild(mechanismContainer);
            extraContainer.appendChild(mechanismSection);
        }

        const sideEffectsSection = document.createElement('div');
        sideEffectsSection.className = 'drug-section';
        const sideTitle = document.createElement('div');
        sideTitle.className = 'drug-section-title';
        sideTitle.textContent = 'Adverse Effects';
        sideEffectsSection.appendChild(sideTitle);
        const sideContainer = document.createElement('div');
        sideContainer.className = 'tag-container';
        const sideEffects = Array.isArray(pharmaClass && pharmaClass.sideEffects) ? pharmaClass.sideEffects : [];
        if (sideEffects.length) {
            sideEffects.forEach(effect => {
                const tag = document.createElement('span');
                tag.classList.add('tag', 'side-effect');
                tag.textContent = effect;
                sideContainer.appendChild(tag);
            });
        } else {
            const placeholder = document.createElement('span');
            placeholder.className = 'tag side-effect';
            placeholder.textContent = 'No adverse effects listed';
            sideContainer.appendChild(placeholder);
        }
        sideEffectsSection.appendChild(sideContainer);
        extraContainer.appendChild(sideEffectsSection);

        const interactionSection = document.createElement('div');
        interactionSection.className = 'drug-section';
        const interactionTitle = document.createElement('div');
        interactionTitle.className = 'drug-section-title';
        interactionTitle.textContent = 'Drug Interactions';
        interactionSection.appendChild(interactionTitle);
        const interactionContainer = document.createElement('div');
        interactionContainer.className = 'tag-container';
        if (pharmaClass && pharmaClass.interactions) {
            interactionContainer.innerHTML = parseInteractionTags(pharmaClass.interactions);
            interactionContainer.querySelectorAll('.tag.interaction').forEach(tag => {
                const value = tag.textContent.trim();
                tag.addEventListener('click', (event) => {
                    event.stopPropagation();
                    if (window.filterByTag) {
                        window.filterByTag('interaction', value);
                    }
                });
            });
        } else {
            const placeholder = document.createElement('span');
            placeholder.className = 'tag interaction';
            placeholder.textContent = 'No major interactions listed';
            interactionContainer.appendChild(placeholder);
        }
        interactionSection.appendChild(interactionContainer);
        if (pharmaClass && pharmaClass.interaction_explanation) {
            const explanation = document.createElement('div');
            explanation.className = 'interaction-explanation';
            explanation.innerHTML = `<p><strong>Clinical Significance:</strong> ${pharmaClass.interaction_explanation}</p>`;
            interactionSection.appendChild(explanation);
        }
        extraContainer.appendChild(interactionSection);

        card.appendChild(extraContainer);

        if (typeof onCardClick === 'function') {
            card.addEventListener('click', (event) => {
                if (event.target.closest('.compare-btn') || event.target.closest('.expand-btn') || event.target.closest('.clickable-tag')) {
                    return;
                }
                onCardClick(event);
            });
        }

        return card;
    }

    function renderCascadeDrugCards(pharmaClass, detailContainer) {
        if (!pharmaClass) {
            const emptyMessage = document.createElement('div');
            emptyMessage.className = 'cascade-message';
            emptyMessage.textContent = 'Select a pharmacological class to see its drugs.';
            detailContainer.appendChild(emptyMessage);
            return;
        }

        const header = document.createElement('div');
        header.className = 'cascade-detail-header';
        const title = document.createElement('h2');
        title.textContent = pharmaClass.name;
        header.appendChild(title);
        if (pharmaClass.mechanism) {
            const mechanism = document.createElement('p');
            mechanism.textContent = pharmaClass.mechanism;
            header.appendChild(mechanism);
        }
        detailContainer.appendChild(header);

        if (!pharmaClass.drugs || pharmaClass.drugs.length === 0) {
            const emptyMessage = document.createElement('div');
            emptyMessage.className = 'cascade-message';
            emptyMessage.textContent = 'No individual drugs listed for this class yet.';
            detailContainer.appendChild(emptyMessage);
            return;
        }

        const cardGrid = document.createElement('div');
        cardGrid.className = 'drug-grid cascade-grid';

        pharmaClass.drugs.forEach(drug => {
            const card = buildDrugCard({
                drug,
                pharmaClass,
                system: selectedSystem,
                therapeuticClass: selectedTherapeuticClass,
                includeCompare: true,
                compared: comparisonList.some(item => item.drug.name === drug.name),
                onCompareClick: (button) => handleCompareClick(drug, pharmaClass, button)
            });
            cardGrid.appendChild(card);
            applyFadeIn(card);
        });

        detailContainer.appendChild(cardGrid);
        applyFadeIn(cardGrid);
    }

    function renderCascadeView() {
        ensureCascadeSelections();

        const navContainer = document.createElement('div');
        navContainer.className = 'cascade-nav';

        if (!selectedSystem) {
            const emptyMessage = document.createElement('div');
            emptyMessage.className = 'cascade-message';
            emptyMessage.textContent = 'No data available. Add systems to begin exploring.';
            navContainer.appendChild(emptyMessage);
        } else {
            drugData.forEach(system => {
                const systemItem = document.createElement('div');
                systemItem.className = 'cascade-item system-item';
                if (system === selectedSystem) {
                    systemItem.classList.add('selected');
                }

                const systemButton = document.createElement('button');
                systemButton.className = 'cascade-label system-label';
                systemButton.textContent = system.name;
                systemButton.onclick = () => {
                    selectedSystem = system;
                    selectedTherapeuticClass = null;
                    selectedPharmaClass = null;
                    trackEvent('cascade_select', { level: 'system', value: system.name });
                    showSystems();
                };
                systemItem.appendChild(systemButton);

                if (system === selectedSystem && system.therapeutic_classes && system.therapeutic_classes.length) {
                    const therapeuticList = document.createElement('div');
                    therapeuticList.className = 'cascade-children therapeutic-list';

                    system.therapeutic_classes.forEach(therapeuticClass => {
                        const therapeuticItem = document.createElement('div');
                        therapeuticItem.className = 'cascade-item therapeutic-item';
                        if (therapeuticClass === selectedTherapeuticClass) {
                            therapeuticItem.classList.add('selected');
                        }

                        const therapeuticButton = document.createElement('button');
                        therapeuticButton.className = 'cascade-label therapeutic-label';
                        therapeuticButton.textContent = therapeuticClass.name;
                        therapeuticButton.onclick = () => {
                            selectedSystem = system;
                            selectedTherapeuticClass = therapeuticClass;
                            selectedPharmaClass = null;
                            trackEvent('cascade_select', {
                                level: 'therapeutic_class',
                                value: therapeuticClass.name,
                                system: system.name
                            });
                            showSystems();
                        };
                        therapeuticItem.appendChild(therapeuticButton);

                        if (therapeuticClass === selectedTherapeuticClass && therapeuticClass.pharma_classes && therapeuticClass.pharma_classes.length) {
                            const pharmaList = document.createElement('div');
                            pharmaList.className = 'cascade-children pharma-list';

                            therapeuticClass.pharma_classes.forEach(pharmaClass => {
                                const pharmaItem = document.createElement('div');
                                pharmaItem.className = 'cascade-item pharma-item';
                                if (pharmaClass === selectedPharmaClass) {
                                    pharmaItem.classList.add('selected');
                                }

                                const pharmaButton = document.createElement('button');
                                pharmaButton.className = 'cascade-label pharma-label';
                                pharmaButton.textContent = pharmaClass.name;
                                pharmaButton.onclick = () => {
                                    selectedSystem = system;
                                    selectedTherapeuticClass = therapeuticClass;
                                    selectedPharmaClass = pharmaClass;
                                    trackEvent('cascade_select', {
                                        level: 'pharma_class',
                                        value: pharmaClass.name,
                                        system: system.name,
                                        therapeutic_class: therapeuticClass.name
                                    });
                                    showSystems();
                                };
                                pharmaItem.appendChild(pharmaButton);

                                pharmaList.appendChild(pharmaItem);
                            });

                            therapeuticItem.appendChild(pharmaList);
                        }

                        therapeuticList.appendChild(therapeuticItem);
                    });

                    systemItem.appendChild(therapeuticList);
                }

                navContainer.appendChild(systemItem);
            });
        }

        const detailContainer = document.createElement('div');
        detailContainer.className = 'cascade-detail';

        if (!selectedTherapeuticClass) {
            const message = document.createElement('div');
            message.className = 'cascade-message';
            message.textContent = 'This body system has no therapeutic classes yet.';
            detailContainer.appendChild(message);
            mainContainer.appendChild(navContainer);
            applyFadeIn(navContainer, 'left');
            mainContainer.appendChild(detailContainer);
            applyFadeIn(detailContainer);
            return;
        }

        if (!selectedTherapeuticClass.pharma_classes || selectedTherapeuticClass.pharma_classes.length === 0) {
            const message = document.createElement('div');
            message.className = 'cascade-message';
            message.textContent = 'No pharmacological classes listed for this therapeutic class yet.';
            detailContainer.appendChild(message);
            mainContainer.appendChild(navContainer);
            applyFadeIn(navContainer, 'left');
            mainContainer.appendChild(detailContainer);
            applyFadeIn(detailContainer);
            return;
        }

        renderCascadeDrugCards(selectedPharmaClass, detailContainer);

        mainContainer.appendChild(navContainer);
        applyFadeIn(navContainer, 'left');
        mainContainer.appendChild(detailContainer);
        applyFadeIn(detailContainer);
    }

    const backToNavigation = function() {
        // Restore the main navigation container
        mainContainer.className = '';
        mainContainer.id = 'column-container';
        
        // Restore the last saved navigation state
        if (lastState && lastState.func) {
            lastState.func.apply(null, lastState.args);
        } else {
            showSystems();
        }
    };
    window.DrugApp.backToNavigation = backToNavigation;

    function handleCompareClick(drug, pharmaClass, button) {
        const index = comparisonList.findIndex(item => item.drug.name === drug.name);
        const action = index > -1 ? 'remove' : 'add';
        if (action === 'remove') {
            comparisonList.splice(index, 1);
            button.innerText = 'Compare';
            button.classList.remove('added');
        } else {
            comparisonList.push({ drug, pharmaClass });
            button.innerText = 'Added';
            button.classList.add('added');
        }
        updateHeaderControls();
        trackEvent('compare_toggle', {
            action,
            drug_name: drug.name,
            class_name: pharmaClass.name,
            list_size: comparisonList.length
        });
    }

    function createColumn(title, items, onItemClick, keyFunction = item => item, tagType = 'default') {
        const column = document.createElement('div');
        column.className = 'column';
        const cacheKey = title;
        const cachedWidth = columnWidthCache[cacheKey];
        if (typeof cachedWidth === 'number') {
            column.style.width = `${cachedWidth}px`;
        }

        const header = document.createElement('div');
        header.className = 'column-header';
        header.textContent = title;
        column.appendChild(header);

        const itemsContainer = document.createElement('div');
        itemsContainer.className = 'column-items';
        column.appendChild(itemsContainer);

        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'column-item';
            
            if (tagType === 'default') {
                itemElement.innerHTML = `<span>${keyFunction(item)}</span>`;
            } else {
                itemElement.innerHTML = `<span class="tag ${tagType}">${keyFunction(item)}</span>`;
            }
            
            itemElement.onclick = () => onItemClick(item);
            itemsContainer.appendChild(itemElement);
        });

        attachColumnResizer(column, cacheKey);
        return column;
    }

    function attachColumnResizer(column, cacheKey) {
        const resizer = document.createElement('div');
        resizer.className = 'column-resizer';
        column.appendChild(resizer);

        let startX = 0;
        let startWidth = 0;
        const minWidth = 240;
        const maxWidth = 620;

        const handlePointerMove = (event) => {
            const delta = event.clientX - startX;
            let newWidth = startWidth + delta;
            if (newWidth < minWidth) newWidth = minWidth;
            if (newWidth > maxWidth) newWidth = maxWidth;
            column.style.width = `${newWidth}px`;
        };

        const handlePointerUp = () => {
            document.removeEventListener('pointermove', handlePointerMove);
            document.removeEventListener('pointerup', handlePointerUp);
            document.removeEventListener('pointercancel', handlePointerUp);
            column.classList.remove('resizing');
            columnWidthCache[cacheKey] = Math.round(column.getBoundingClientRect().width);
        };

        resizer.addEventListener('pointerdown', (event) => {
            event.preventDefault();
            startX = event.clientX;
            startWidth = column.getBoundingClientRect().width;
            column.classList.add('resizing');
            document.addEventListener('pointermove', handlePointerMove);
            document.addEventListener('pointerup', handlePointerUp);
            document.addEventListener('pointercancel', handlePointerUp);
        });
    }

    function showSystems() {
        saveLastState(showSystems, []);
        mainContainer.innerHTML = '';

        trackEvent('view_navigation', { level: 'system', layout: layoutMode });

        if (layoutMode === 'reference') {
            ensureCascadeSelections();
            mainContainer.className = 'cascade-container';
            mainContainer.id = 'column-container';
            renderCascadeView();
            updateHeaderControls();
            return;
        }

        mainContainer.className = '';
        mainContainer.id = 'column-container';

        if (!selectedSystem) {
            selectedSystem = drugData[0] || null;
            selectedTherapeuticClass = selectedSystem && selectedSystem.therapeutic_classes ? selectedSystem.therapeutic_classes[0] || null : null;
            selectedPharmaClass = selectedTherapeuticClass && selectedTherapeuticClass.pharma_classes ? selectedTherapeuticClass.pharma_classes[0] || null : null;
        }

        const systemsColumn = createColumn('Body Systems', drugData, showTherapeuticClasses, system => system.name, 'system');
        mainContainer.appendChild(systemsColumn);
        applyFadeIn(systemsColumn, 'left');
        updateHeaderControls();
    }

    function showTherapeuticClasses(system) {
        saveLastState(showTherapeuticClasses, [system]);
        mainContainer.innerHTML = '';
        trackEvent('view_navigation', {
            level: 'therapeutic_class',
            system: system.name
        });

        if (layoutMode === 'reference') {
            selectedSystem = system;
            selectedTherapeuticClass = null;
            selectedPharmaClass = null;
            showSystems();
            return;
        }

        selectedSystem = system;
        selectedTherapeuticClass = null;
        selectedPharmaClass = null;

        const systemsColumn = createColumn('Body Systems', drugData, showTherapeuticClasses, s => s.system, 'system');
        systemsColumn.querySelectorAll('.column-item').forEach((item, index) => {
            if (drugData[index] === system) {
                item.classList.add('selected');
            }
        });
        mainContainer.appendChild(systemsColumn);
        applyFadeIn(systemsColumn, 'left');

        const therapeuticColumn = createColumn('Therapeutic Classes', system.therapeutic_classes, 
            therapeuticClass => showPharmaClasses(system, therapeuticClass), 
            therapeuticClass => therapeuticClass.name, 'subclass');
        mainContainer.appendChild(therapeuticColumn);
        applyFadeIn(therapeuticColumn);
        updateHeaderControls();
    }

    function showPharmaClasses(system, therapeuticClass) {
        saveLastState(showPharmaClasses, [system, therapeuticClass]);
        mainContainer.innerHTML = '';
        trackEvent('view_navigation', {
            level: 'pharma_class',
            system: system.name,
            therapeutic_class: therapeuticClass.name
        });

        if (layoutMode === 'reference') {
            selectedSystem = system;
            selectedTherapeuticClass = therapeuticClass;
            selectedPharmaClass = null;
            showSystems();
            return;
        }

        selectedSystem = system;
        selectedTherapeuticClass = therapeuticClass;
        selectedPharmaClass = null;

        const systemsColumn = createColumn('Body Systems', drugData, showTherapeuticClasses, s => s.system, 'system');
        systemsColumn.querySelectorAll('.column-item').forEach((item, index) => {
            if (drugData[index] === system) {
                item.classList.add('selected');
            }
        });
        mainContainer.appendChild(systemsColumn);
        applyFadeIn(systemsColumn, 'left');

        const therapeuticColumn = createColumn('Therapeutic Classes', system.therapeutic_classes, 
            tc => showPharmaClasses(system, tc), 
            tc => tc.name, 'subclass');
        therapeuticColumn.querySelectorAll('.column-item').forEach((item, index) => {
            if (system.therapeutic_classes[index] === therapeuticClass) {
                item.classList.add('selected');
            }
        });
        mainContainer.appendChild(therapeuticColumn);
        applyFadeIn(therapeuticColumn);

        const pharmaColumn = createColumn('Pharmacological Classes', therapeuticClass.pharma_classes, 
            pharmaClass => showDrugs(system, therapeuticClass, pharmaClass), 
            pharmaClass => pharmaClass.name, 'class');
        mainContainer.appendChild(pharmaColumn);
        applyFadeIn(pharmaColumn);
        updateHeaderControls();
    }

    function showDrugs(system, therapeuticClass, pharmaClass) {
        saveLastState(showDrugs, [system, therapeuticClass, pharmaClass]);
        mainContainer.innerHTML = '';
        trackEvent('view_navigation', {
            level: 'drug_list',
            system: system.name,
            therapeutic_class: therapeuticClass.name,
            class_name: pharmaClass.name
        });

        if (layoutMode === 'reference') {
            selectedSystem = system;
            selectedTherapeuticClass = therapeuticClass;
            selectedPharmaClass = pharmaClass;
            showSystems();
            return;
        }

        selectedSystem = system;
        selectedTherapeuticClass = therapeuticClass;
        selectedPharmaClass = pharmaClass;

        const systemsColumn = createColumn('Body Systems', drugData, showTherapeuticClasses, s => s.system, 'system');
        systemsColumn.querySelectorAll('.column-item').forEach((item, index) => {
            if (drugData[index] === system) {
                item.classList.add('selected');
            }
        });
        mainContainer.appendChild(systemsColumn);
        applyFadeIn(systemsColumn, 'left');

        const therapeuticColumn = createColumn('Therapeutic Classes', system.therapeutic_classes, 
            tc => showPharmaClasses(system, tc), 
            tc => tc.name, 'subclass');
        therapeuticColumn.querySelectorAll('.column-item').forEach((item, index) => {
            if (system.therapeutic_classes[index] === therapeuticClass) {
                item.classList.add('selected');
            }
        });
        mainContainer.appendChild(therapeuticColumn);
        applyFadeIn(therapeuticColumn);

        const pharmaColumn = createColumn('Pharmacological Classes', therapeuticClass.pharma_classes, 
            pc => showDrugs(system, therapeuticClass, pc), 
            pc => pc.name, 'class');
        pharmaColumn.querySelectorAll('.column-item').forEach((item, index) => {
            if (therapeuticClass.pharma_classes[index] === pharmaClass) {
                item.classList.add('selected');
            }
        });
        mainContainer.appendChild(pharmaColumn);
        applyFadeIn(pharmaColumn);

        // Drugs column
        const drugsColumn = document.createElement('div');
        drugsColumn.className = 'column';
        const drugsHeader = document.createElement('div');
        drugsHeader.className = 'column-header';
        drugsHeader.textContent = 'Individual Drugs';
        drugsColumn.appendChild(drugsHeader);

        const drugsContainer = document.createElement('div');
        drugsContainer.className = 'column-items';
        drugsColumn.appendChild(drugsContainer);

        pharmaClass.drugs.forEach(drug => {
            const drugElement = document.createElement('div');
            drugElement.className = 'column-item';
            
            const compareButton = document.createElement('button');
            compareButton.className = 'compare-btn';
            compareButton.innerText = 'Compare';
            compareButton.onclick = (e) => {
                e.stopPropagation();
                handleCompareClick(drug, pharmaClass, compareButton);
            };
            
            const isInComparison = comparisonList.some(item => item.drug.name === drug.name);
            if (isInComparison) {
                compareButton.innerText = 'Added';
                compareButton.classList.add('added');
            }

            drugElement.innerHTML = `<span>${drug.name}</span>`;
            drugElement.appendChild(compareButton);
            drugElement.onclick = () => showDrugDetail(system, therapeuticClass, pharmaClass, drug);
            drugsContainer.appendChild(drugElement);
        });

        mainContainer.appendChild(drugsColumn);
        applyFadeIn(drugsColumn);
        updateHeaderControls();
    }

    function showDrugDetail(system, therapeuticClass, pharmaClass, drug) {
        saveLastState(showDrugDetail, [system, therapeuticClass, pharmaClass, drug]);
        mainContainer.innerHTML = '';

        trackEvent('view_drug_detail', {
            drug_name: drug.name,
            class_name: pharmaClass.name,
            therapeutic_class: therapeuticClass.name,
            system: system.name
        });
        
        const systemsColumn = createColumn('Body Systems', drugData, showTherapeuticClasses, s => s.system, 'system');
        systemsColumn.querySelectorAll('.column-item').forEach((item, index) => {
            if (drugData[index] === system) {
                item.classList.add('selected');
            }
        });
        mainContainer.appendChild(systemsColumn);
        applyFadeIn(systemsColumn, 'left');

        const therapeuticColumn = createColumn('Therapeutic Classes', system.therapeutic_classes, 
            tc => showPharmaClasses(system, tc), 
            tc => tc.name, 'subclass');
        therapeuticColumn.querySelectorAll('.column-item').forEach((item, index) => {
            if (system.therapeutic_classes[index] === therapeuticClass) {
                item.classList.add('selected');
            }
        });
        mainContainer.appendChild(therapeuticColumn);
        applyFadeIn(therapeuticColumn);

        const pharmaColumn = createColumn('Pharmacological Classes', therapeuticClass.pharma_classes, 
            pc => showDrugs(system, therapeuticClass, pc), 
            pc => pc.name, 'class');
        pharmaColumn.querySelectorAll('.column-item').forEach((item, index) => {
            if (therapeuticClass.pharma_classes[index] === pharmaClass) {
                item.classList.add('selected');
            }
        });
        mainContainer.appendChild(pharmaColumn);
        applyFadeIn(pharmaColumn);

        // Drugs column
        const drugsColumn = document.createElement('div');
        drugsColumn.className = 'column';
        const drugsHeader = document.createElement('div');
        drugsHeader.className = 'column-header';
        drugsHeader.textContent = 'Individual Drugs';
        drugsColumn.appendChild(drugsHeader);

        const drugsContainer = document.createElement('div');
        drugsContainer.className = 'column-items';
        drugsColumn.appendChild(drugsContainer);

        pharmaClass.drugs.forEach(d => {
            const drugElement = document.createElement('div');
            drugElement.className = 'column-item';
            if (d === drug) {
                drugElement.classList.add('selected');
            }
            
            const compareButton = document.createElement('button');
            compareButton.className = 'compare-btn';
            compareButton.innerText = 'Compare';
            compareButton.onclick = (e) => {
                e.stopPropagation();
                handleCompareClick(d, pharmaClass, compareButton);
            };
            
            const isInComparison = comparisonList.some(item => item.drug.name === d.name);
            if (isInComparison) {
                compareButton.innerText = 'Added';
                compareButton.classList.add('added');
            }

            drugElement.innerHTML = `<span>${d.name}</span>`;
            drugElement.appendChild(compareButton);
            drugElement.onclick = () => showDrugDetail(system, therapeuticClass, pharmaClass, d);
            drugsContainer.appendChild(drugElement);
        });

        mainContainer.appendChild(drugsColumn);

        // Detail view
        const detailColumn = document.createElement('div');
        detailColumn.className = 'detail-view-column';

        detailColumn.innerHTML = `
            <div class="detail-section">
                <h3>${drug.name}</h3>
                <p><strong>Class:</strong> ${pharmaClass.name}</p>
            </div>
            <div class="detail-section">
                <h3>Mechanism of Action</h3>
                <p>${pharmaClass.mechanism}</p>
            </div>
            <div class="detail-section">
                <h3>Key Features</h3>
                <p>${drug.features}</p>
            </div>
            <div class="detail-section">
                <h3>Clinical Choice</h3>
                <p>${drug.choice}</p>
            </div>
            <div class="detail-section">
                <h3>Indications</h3>
                <div class="tag-container">
                    ${drug.indications.map((indication, index) => `<span class="tag indication clickable-tag" data-indication="${indication}" data-index="${index}" style="cursor: pointer;" title="Click to find all drugs for ${indication}">${indication}</span>`).join('')}
                </div>
            </div>
            <div class="detail-section">
                <h3>Contraindications</h3>
                <div class="tag-container">
                    ${drug.contraindications.map((contraindication, index) => `<span class="tag contraindication clickable-tag" data-contraindication="${contraindication}" data-index="${index}" style="cursor: pointer;" title="Click to find all drugs to avoid with ${contraindication}">${contraindication}</span>`).join('')}
                </div>
            </div>
            <div class="detail-section">
                <h3>Side Effects</h3>
                <div class="tag-container">
                    ${pharmaClass.sideEffects.map(effect => `<span class="tag side-effect">${effect}</span>`).join('')}
                </div>
            </div>
            <div class="detail-section">
                <h3>Drug Interactions</h3>
                <div class="tag-container">
                    ${parseInteractionTags(pharmaClass.interactions)}
                </div>
                <div class="interaction-explanation">
                    <p><strong>Clinical Significance:</strong> ${pharmaClass.interaction_explanation || pharmaClass.interactions}</p>
                </div>
            </div>
        `;

        mainContainer.appendChild(detailColumn);
        applyFadeIn(detailColumn);
        updateHeaderControls();
    }

    const renderSearchView = function() {
        mainContainer.innerHTML = '';
        mainContainer.className = '';
        mainContainer.id = 'search-view-container';
        updateHeaderControls();

        trackEvent('view_search', {});

        const searchControls = document.createElement('div');
        searchControls.className = 'search-controls';
        searchControls.innerHTML = `
            <input type="text" class="search-input" placeholder="Search drugs by name, indication, side effect, mechanism, class, or system..." id="drug-search-input">
            <div class="search-options">
                <label><input type="radio" name="search-type" value="drug" checked> Drug Name</label>
                <label><input type="radio" name="search-type" value="indication"> Indication</label>
                <label><input type="radio" name="search-type" value="contraindication"> Contraindication (Drugs to Avoid)</label>
                <label><input type="radio" name="search-type" value="side-effect"> Side Effect</label>
                <label><input type="radio" name="search-type" value="mechanism"> Mechanism of Action</label>
                <label><input type="radio" name="search-type" value="class"> Drug Class</label>
                <label><input type="radio" name="search-type" value="system"> Body System</label>
                <button id="toggle-indications" class="header-btn" style="margin-left: 20px;">Show Indication Browser</button>
            </div>
        `;
        mainContainer.appendChild(searchControls);

        // All indications container (hidden by default)
        const indicationsContainer = document.createElement('div');
        indicationsContainer.className = 'indications-container';
        indicationsContainer.style.display = 'none';
        indicationsContainer.innerHTML = '<h3>Browse by Common Indications</h3>';
        
        const indicationsList = document.createElement('div');
        indicationsList.className = 'indications-list';
        
        // Get all unique indications
        const allIndications = new Set();
        searchableData.forEach(item => {
            item.indications.forEach(indication => allIndications.add(indication));
        });
        
        Array.from(allIndications).sort().forEach(indication => {
            const tag = document.createElement('span');
            tag.className = 'indication-tag';
            tag.textContent = indication;
            tag.onclick = () => performSearch(indication, 'indication');
            indicationsList.appendChild(tag);
        });
        
        indicationsContainer.appendChild(indicationsList);
        mainContainer.appendChild(indicationsContainer);

        // Toggle functionality for indications browser
        const toggleButton = document.getElementById('toggle-indications');
        toggleButton.addEventListener('click', () => {
            const opening = indicationsContainer.style.display === 'none';
            if (opening) {
                indicationsContainer.style.display = 'block';
                toggleButton.textContent = 'Hide Indication Browser';
            } else {
                indicationsContainer.style.display = 'none';
                toggleButton.textContent = 'Show Indication Browser';
            }
            trackEvent('toggle_indication_browser', {
                state: opening ? 'open' : 'closed'
            });
        });

        const resultsContainer = document.createElement('div');
        resultsContainer.id = 'search-results';
        resultsContainer.className = 'drug-grid';
        mainContainer.appendChild(resultsContainer);

        // Show all drugs initially as cards
        searchableData.forEach(result => {
            const { system, therapeuticClass, pharmaClass, drug } = result.pointers;

            const card = buildDrugCard({
                drug,
                pharmaClass,
                system,
                therapeuticClass,
                showSystemTags: true,
                showMechanism: true,
                onCardClick: () => {
                    mainContainer.className = '';
                    mainContainer.id = 'column-container';
                    showDrugDetail(system, therapeuticClass, pharmaClass, drug);
                }
            });

            resultsContainer.appendChild(card);
            applyFadeIn(card);
        });

        const searchInput = document.getElementById('drug-search-input');
        searchInput.addEventListener('input', (e) => {
            const searchType = document.querySelector('input[name="search-type"]:checked').value;
            performSearch(e.target.value, searchType);
            logSearchInteraction(searchType, e.target.value);
        });

        document.querySelectorAll('input[name="search-type"]').forEach(radio => {
            radio.addEventListener('change', () => {
                trackEvent('search_option_change', { search_type: radio.value });
                const currentSearch = searchInput.value;
                if (currentSearch) {
                    performSearch(currentSearch, radio.value);
                    logSearchInteraction(radio.value, currentSearch);
                }
            });
        });
    };
    window.DrugApp.renderSearchView = renderSearchView;

    const performContraindicationSearch = function(query) {
        const resultsContainer = document.getElementById('search-results');
        const trimmedQuery = query.trim();
        if (!trimmedQuery) {
            resultsContainer.innerHTML = '';
            return;
        }
        
        // Search for drugs that have this contraindication
        const results = searchableData.filter(item => {
            const drug = item.pointers.drug;
            return drug.contraindications && drug.contraindications.some(contraindication => 
                contraindication.toLowerCase().includes(trimmedQuery.toLowerCase())
            );
        });

        trackEvent('search_contraindication', {
            query_length: Math.min(trimmedQuery.length, 100),
            results_count: results.length
        });
        
        resultsContainer.innerHTML = '';
        if (results.length === 0) {
            resultsContainer.innerHTML = '<p>No drugs found with this contraindication.</p>';
            return;
        }
        
        // Add header explaining what we're showing
        const header = document.createElement('div');
        header.style.marginBottom = '20px';
        header.style.padding = '15px';
        header.style.backgroundColor = '#fff3cd';
        header.style.border = '1px solid #ffeaa7';
        header.style.borderRadius = '8px';
        header.innerHTML = `<strong>⚠️ Drugs to AVOID in patients with: ${query}</strong><br><small>The following ${results.length} drugs are contraindicated for this condition:</small>`;
        resultsContainer.appendChild(header);
        
        // Change results container to grid layout
        resultsContainer.className = 'drug-grid';
        
        results.forEach(result => {
            const { system, therapeuticClass, pharmaClass, drug } = result.pointers;

            const card = buildDrugCard({
                drug,
                pharmaClass,
                system,
                therapeuticClass,
                showSystemTags: true,
                showMechanism: true,
                onCardClick: () => {
                    mainContainer.className = '';
                    mainContainer.id = 'column-container';
                    showDrugDetail(system, therapeuticClass, pharmaClass, drug);
                }
            });
            card.style.borderLeft = '4px solid #e74c3c';

            const queryLower = query.toLowerCase();
            card.querySelectorAll('.tag.contraindication').forEach(tag => {
                const value = tag.dataset.contraindication || tag.textContent;
                if (value && value.toLowerCase().includes(queryLower)) {
                    tag.classList.add('tag-highlight');
                }
            });

            resultsContainer.appendChild(card);
            applyFadeIn(card);
        });
    };
    window.DrugApp.performContraindicationSearch = performContraindicationSearch;

    const performSearch = function(query, searchType) {
            // If searching by contraindication, use the special function
            if (searchType === 'contraindication') {
                performContraindicationSearch(query);
                return;
            }

            const resultsContainer = document.getElementById('search-results');
            const trimmedQuery = query.trim();
            if (!trimmedQuery) {
                resultsContainer.innerHTML = '';
                latestSearchOutcome = null;
                return;
            }

            const results = searchableData.filter(item => {
                const { system, therapeuticClass, pharmaClass, drug } = item.pointers;
                const queryLower = trimmedQuery.toLowerCase();
                
                if (searchType === 'drug') {
                    return item.drugName.toLowerCase().includes(queryLower);
                } else if (searchType === 'indication') {
                    return item.indications.some(indication => 
                        indication.toLowerCase().includes(queryLower)
                    );
                } else if (searchType === 'contraindication') {
                    return drug.contraindications && drug.contraindications.some(contraindication => 
                        contraindication.toLowerCase().includes(queryLower)
                    );
                } else if (searchType === 'side-effect') {
                    return pharmaClass.sideEffects && pharmaClass.sideEffects.some(effect => 
                        effect.toLowerCase().includes(queryLower)
                    );
                } else if (searchType === 'mechanism') {
                    return pharmaClass.mechanism && pharmaClass.mechanism.toLowerCase().includes(queryLower);
                } else if (searchType === 'class') {
                    return pharmaClass.name.toLowerCase().includes(queryLower) || 
                           therapeuticClass.name.toLowerCase().includes(queryLower);
                } else if (searchType === 'system') {
                    return system.name.toLowerCase().includes(queryLower);
                }
            });

            latestSearchOutcome = {
                type: searchType,
                query: trimmedQuery.toLowerCase(),
                resultsCount: results.length
            };

            trackEvent('search_results', {
                search_type: searchType,
                query_length: Math.min(trimmedQuery.length, 100),
                results_count: results.length
            });

            resultsContainer.innerHTML = '';
            if (results.length === 0) {
                resultsContainer.innerHTML = '<p>No results found.</p>';
                return;
            }

            // Change results container to grid layout
            resultsContainer.className = 'drug-grid';
            
            results.forEach(result => {
                const { system, therapeuticClass, pharmaClass, drug } = result.pointers;

                const card = buildDrugCard({
                    drug,
                    pharmaClass,
                    system,
                    therapeuticClass,
                    showSystemTags: true,
                    showMechanism: true,
                    onCardClick: () => {
                        mainContainer.className = '';
                        mainContainer.id = 'column-container';
                        showDrugDetail(system, therapeuticClass, pharmaClass, drug);
                    }
                });

                resultsContainer.appendChild(card);
                applyFadeIn(card);
            });
        };

    // Global function for tag filtering
    window.filterByTag = function(tagType, tagValue) {
        const resultsContainer = document.getElementById('search-results');
        let filteredResults = [];
        trackEvent('tag_filter', {
            tag_type: tagType,
            tag_value: tagValue ? tagValue.slice(0, 50) : ''
        });

        switch(tagType) {
            case 'system':
                filteredResults = searchableData.filter(item => 
                    item.pointers.system.name === tagValue
                );
                break;
            case 'class':
                filteredResults = searchableData.filter(item => 
                    item.pointers.pharmaClass.name === tagValue
                );
                break;
            case 'indication':
                filteredResults = searchableData.filter(item => 
                    item.indications.includes(tagValue)
                );
                break;
            case 'contraindication':
                filteredResults = searchableData.filter(item => 
                    item.pointers.drug.contraindications.includes(tagValue)
                );
                break;
            case 'side-effect':
                filteredResults = searchableData.filter(item => 
                    item.pointers.pharmaClass.sideEffects.includes(tagValue)
                );
                break;
            case 'interaction':
                filteredResults = searchableData.filter(item => 
                    item.pointers.pharmaClass.interactions.toLowerCase().includes(tagValue.toLowerCase())
                );
                break;
            case 'mechanism':
                const cleanTagValue = tagValue.replace('...', '');
                filteredResults = searchableData.filter(item => 
                    item.pointers.pharmaClass.mechanism.includes(cleanTagValue.substring(0, 40))
                );
                break;
            default:
                filteredResults = searchableData;
        }

        // Clear search input
        const searchInput = document.getElementById('drug-search-input');
        if (searchInput) {
            searchInput.value = `Filtered by ${tagType}: ${tagValue}`;
        }

        // Display filtered results
        resultsContainer.innerHTML = '';
        if (filteredResults.length === 0) {
            resultsContainer.innerHTML = '<p>No drugs found with this tag.</p>';
            return;
        }

        // Change results container to grid layout
        resultsContainer.className = 'drug-grid';
        
        filteredResults.forEach(result => {
            const { system, therapeuticClass, pharmaClass, drug } = result.pointers;

            const card = buildDrugCard({
                drug,
                pharmaClass,
                system,
                therapeuticClass,
                showSystemTags: true,
                showMechanism: true,
                onCardClick: () => {
                    mainContainer.className = '';
                    mainContainer.id = 'column-container';
                    showDrugDetail(system, therapeuticClass, pharmaClass, drug);
                }
            });

            resultsContainer.appendChild(card);
            applyFadeIn(card);
        });
    };
    window.DrugApp.performSearch = performSearch;

    function renderCompareView() {
        if (comparisonList.length === 0) return;

        mainContainer.innerHTML = '';
        mainContainer.className = 'compare-view-container';

        trackEvent('view_compare', {
            items: comparisonList.map(item => item.drug.name),
            item_count: comparisonList.length
        });

        comparisonList.forEach(item => {
            const detailColumn = document.createElement('div');
            detailColumn.className = 'detail-view-column';
            
            detailColumn.innerHTML = `
                <div class="detail-section">
                    <h3>${item.drug.name}</h3>
                    <p><strong>Class:</strong> ${item.pharmaClass.name}</p>
                </div>
                <div class="detail-section">
                    <h3>Mechanism of Action</h3>
                    <p>${item.pharmaClass.mechanism}</p>
                </div>
                <div class="detail-section">
                    <h3>Key Features</h3>
                    <p>${item.drug.features}</p>
                </div>
                <div class="detail-section">
                    <h3>Clinical Choice</h3>
                    <p>${item.drug.choice}</p>
                </div>
                <div class="detail-section">
                    <h3>Indications</h3>
                    <div class="tag-container">
                        ${item.drug.indications.map(indication => `<span class="tag indication clickable-tag" data-indication="${indication}" style="cursor: pointer;" title="Click to find all drugs for ${indication}">${indication}</span>`).join('')}
                    </div>
                </div>
                <div class="detail-section">
                    <h3>Contraindications</h3>
                    <div class="tag-container">
                        ${item.drug.contraindications.map(contraindication => `<span class="tag contraindication clickable-tag" data-contraindication="${contraindication}" style="cursor: pointer;" title="Click to find all drugs to avoid with ${contraindication}">${contraindication}</span>`).join('')}
                    </div>
                </div>
                <div class="detail-section">
                    <h3>Side Effects</h3>
                    <div class="tag-container">
                        ${item.pharmaClass.sideEffects.map(effect => `<span class="tag side-effect">${effect}</span>`).join('')}
                    </div>
                </div>
                <div class="detail-section">
                    <h3>Drug Interactions</h3>
                    <div class="tag-container">
                        ${parseInteractionTags(item.pharmaClass.interactions)}
                    </div>
                    <div class="interaction-explanation">
                        <p><strong>Clinical Significance:</strong> ${item.pharmaClass.interaction_explanation || item.pharmaClass.interactions}</p>
                    </div>
                </div>
            `;

            mainContainer.appendChild(detailColumn);
        });

        updateHeaderControls();
    }

    // Universal event listener for clickable tags with debug logging
    document.addEventListener('click', function(e) {
        // Ignore clicks inside the column navigation list
        if (e.target.closest('.column-item')) {
            return;
        }

        if (e.target.classList.contains('clickable-tag') || e.target.classList.contains('tag')) {
            if (e.target.dataset.indication) {
                searchByIndication(e.target.dataset.indication);
            } else if (e.target.dataset.contraindication) {
                searchByContraindication(e.target.dataset.contraindication);
            } else if (e.target.classList.contains('side-effect')) {
                searchBySideEffect(e.target.textContent);
            } else if (e.target.classList.contains('mechanism')) {
                searchByMechanism(e.target.textContent);
            } else if (e.target.classList.contains('class') || e.target.classList.contains('subclass')) {
                searchByClass(e.target.textContent);
            } else if (e.target.classList.contains('system')) {
                searchBySystem(e.target.textContent);
            }
        }
    });

    // Initialize UI once data is loaded
    // Wait for initApp to complete before initializing UI
    async function initializeUI() {
        // Wait for data to load
        const dataLoaded = await initApp();
        if (!dataLoaded) {
            return; // Data loading failed
        }

        // Now data is loaded, initialize UI
        flattenDrugData();
        showSystems();
    }

    // Initialize explorer navigation
    const explorerNav = new ExplorerNavigation('medications');

    // Start UI initialization
    initializeUI();

});
