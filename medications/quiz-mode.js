/**
 * Quiz Mode Module
 * Three modes: Reference (browse), Quiz (practice once), Learning (spaced repetition)
 */

class QuizMode {
    constructor(dataLoader) {
        this.dataLoader = dataLoader;
        this.state = {
            active: false,
            mode: null, // 'quiz' or 'learning'
            targetDrug: null,
            correctPaths: [], // Array of valid paths (for drugs in multiple systems)
            currentQuestionHasError: false, // Track if current question has any mistakes
            config: {
                selectedDrugs: [], // Array of drug IDs
                numberOfQuestions: 10, // For quiz mode
                stopOnFirstMistake: false, // For quiz mode - move to next question on first mistake
                correctionsNeeded: 2, // For learning mode
                resetOnWrong: true // For learning mode
            },
            progress: {
                drugStats: new Map(), // drugId -> { correct: 0, attempts: 0 }
                questionsAnswered: 0,
                questionsRemaining: [],
                score: { correct: 0, incorrect: 0, total: 0 } // For quiz mode
            }
        };
    }

    /**
     * Show quiz configuration modal
     */
    showConfigModal(defaultMode = 'quiz') {
        const modal = this.createConfigModal(defaultMode);
        document.body.appendChild(modal);

        // Show modal
        setTimeout(() => modal.classList.add('show'), 10);
    }

    /**
     * Create quiz configuration modal
     */
    createConfigModal(defaultMode = 'quiz') {
        const modal = document.createElement('div');
        modal.id = 'quiz-config-modal';
        modal.className = 'modal quiz-modal';
        modal.dataset.mode = defaultMode;

        const modeTitle = defaultMode === 'quiz' ? 'Quiz Mode' : 'Learning Mode';
        const modeIcon = defaultMode === 'quiz' ? '📝' : '🎓';
        const modeDescription = defaultMode === 'quiz'
            ? 'Practice each drug once. Great for testing.'
            : 'Repeat until mastered. Spaced repetition.';

        modal.innerHTML = `
            <div class="modal-content quiz-config-content">
                <button class="modal-close" id="quiz-modal-close" aria-label="Close configuration">&times;</button>
                <div class="mode-header">
                    <span class="mode-header-icon">${modeIcon}</span>
                    <h2>${modeTitle} Configuration</h2>
                </div>
                <p class="mode-description">${modeDescription}</p>

                <!-- Drug Selection -->
                <div class="selection-section">
                    <h3>Select Drugs to Study</h3>
                    <div class="selection-header">
                        <button class="btn btn-small btn-secondary" id="select-all-btn">Select All</button>
                        <button class="btn btn-small btn-secondary" id="deselect-all-btn">Deselect All</button>
                        <span class="drug-count-inline" id="drug-count-inline">0 selected</span>
                    </div>
                    <div id="drug-tree" class="drug-selection-tree"></div>
                </div>

                <!-- Mode-Specific Settings -->
                <div class="settings-section">
                    <!-- Quiz Mode Settings -->
                    <div class="mode-settings" id="quiz-settings">
                        <h3>Quiz Settings</h3>
                        <p class="settings-description">Select how many random questions from your drug selection.</p>
                        <div class="setting-row">
                            <label for="num-questions">Number of Questions:</label>
                            <div class="number-input-group">
                                <input type="number" id="num-questions" min="1" max="500" value="10">
                                <span class="input-helper" id="question-max-helper">/ 0 max</span>
                            </div>
                        </div>
                        <div class="setting-row">
                            <label class="checkbox-label">
                                <input type="checkbox" id="stop-on-mistake">
                                <span>Stop on first mistake (move to next question immediately)</span>
                            </label>
                        </div>
                        <p class="settings-note">⚠️ Any mistake counts as incorrect, whether you continue or stop.</p>
                    </div>

                    <!-- Learning Mode Settings -->
                    <div class="mode-settings hidden" id="learning-settings">
                        <h3>Learning Settings</h3>
                        <div class="setting-row">
                            <label for="corrections-needed">Times correct to master:</label>
                            <input type="number" id="corrections-needed" min="1" max="10" value="2">
                        </div>
                        <div class="setting-row">
                            <label class="checkbox-label">
                                <input type="checkbox" id="reset-on-wrong" checked>
                                <span>Getting it wrong resets progress</span>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <div class="quiz-config-footer">
                    <div class="drug-count">
                        <span id="drug-count-text">0 drugs selected</span>
                    </div>
                    <div class="quiz-actions">
                        <button class="btn btn-secondary" id="cancel-quiz">Cancel</button>
                        <button class="btn btn-primary" id="start-quiz" disabled>Start</button>
                    </div>
                </div>
            </div>
        `;

        // Attach event listeners
        this.attachConfigModalListeners(modal);

        return modal;
    }

    /**
     * Attach event listeners to config modal
     */
    attachConfigModalListeners(modal) {
        // Close button
        modal.querySelector('#quiz-modal-close').addEventListener('click', () => this.closeConfigModal(modal));
        modal.querySelector('#cancel-quiz').addEventListener('click', () => this.closeConfigModal(modal));

        // Set initial mode based on modal data attribute
        const initialMode = modal.dataset.mode || 'quiz';
        this.switchMode(modal, initialMode);

        // Select all/deselect all
        modal.querySelector('#select-all-btn').addEventListener('click', () => {
            this.selectAllDrugs(true);
        });
        modal.querySelector('#deselect-all-btn').addEventListener('click', () => {
            this.selectAllDrugs(false);
        });

        // Settings changes
        modal.querySelector('#num-questions').addEventListener('change', (e) => {
            this.state.config.numberOfQuestions = parseInt(e.target.value);
        });
        modal.querySelector('#stop-on-mistake').addEventListener('change', (e) => {
            this.state.config.stopOnFirstMistake = e.target.checked;
        });
        modal.querySelector('#corrections-needed').addEventListener('change', (e) => {
            this.state.config.correctionsNeeded = parseInt(e.target.value);
        });
        modal.querySelector('#reset-on-wrong').addEventListener('change', (e) => {
            this.state.config.resetOnWrong = e.target.checked;
        });

        // Start button
        modal.querySelector('#start-quiz').addEventListener('click', () => {
            this.startSession();
            this.closeConfigModal(modal);
        });

        // Click outside to close
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeConfigModal(modal);
            }
        });

        // Populate the drug tree
        this.populateDrugTree(modal);
    }

    /**
     * Switch between quiz and learning mode
     */
    switchMode(modal, mode) {
        const quizSettings = modal.querySelector('#quiz-settings');
        const learningSettings = modal.querySelector('#learning-settings');

        if (mode === 'quiz') {
            quizSettings.classList.remove('hidden');
            learningSettings.classList.add('hidden');
        } else {
            quizSettings.classList.add('hidden');
            learningSettings.classList.remove('hidden');
        }
    }

    /**
     * Select or deselect all drugs
     */
    selectAllDrugs(checked) {
        const modal = document.getElementById('quiz-config-modal');
        if (!modal) return;

        const checkboxes = modal.querySelectorAll('.drug-tree-checkbox');
        checkboxes.forEach(checkbox => {
            checkbox.checked = checked;
        });
        this.updateSelectedDrugs();
    }

    /**
     * Populate the hierarchical drug selection tree
     */
    populateDrugTree(modal) {
        if (!modal) {
            modal = document.getElementById('quiz-config-modal');
        }

        const treeContainer = modal.querySelector('#drug-tree');

        if (!treeContainer) return;

        treeContainer.innerHTML = '';

        const systems = this.dataLoader.getSystems();

        systems.forEach(system => {
            const systemNode = this.createTreeNode(system, 'system');
            treeContainer.appendChild(systemNode);
        });
    }

    /**
     * Create a tree node (system, therapeutic class, pharmacologic class, or drug)
     */
    createTreeNode(item, type) {
        const node = document.createElement('div');
        node.className = `tree-select-node tree-select-${type}`;

        let children = [];
        let drugCount = 0;

        // Get children and count drugs
        if (type === 'system') {
            children = this.dataLoader.getTherapeuticClassesBySystem(item.id);
            drugCount = this.dataLoader.getDrugsBySystem(item.id).length;
        } else if (type === 'therapeutic') {
            children = this.dataLoader.getPharmacologicClassesByTherapeuticClass(item.id);
            drugCount = this.dataLoader.getDrugsByTherapeuticClass(item.id).length;
        } else if (type === 'pharmacologic') {
            children = this.dataLoader.getDrugsByPharmacologicClass(item.id);
            drugCount = children.length;
        }

        const hasChildren = children.length > 0;
        const nodeHeader = document.createElement('div');
        nodeHeader.className = 'tree-select-header';

        nodeHeader.innerHTML = `
            ${hasChildren ? `<span class="tree-expand-icon">▶</span>` : '<span class="tree-expand-spacer"></span>'}
            ${type !== 'drug' ? `
                <input type="checkbox" class="tree-node-checkbox" data-id="${item.id}" data-type="${type}">
            ` : ''}
            ${type === 'drug' ? `
                <input type="checkbox" class="drug-tree-checkbox" data-drug-id="${item.id}">
            ` : ''}
            <span class="tree-node-label">${item.name}</span>
            <span class="tree-node-count">${drugCount}</span>
        `;

        node.appendChild(nodeHeader);

        // Children container
        if (hasChildren) {
            const childrenContainer = document.createElement('div');
            childrenContainer.className = 'tree-children';
            childrenContainer.style.display = 'none';

            children.forEach(child => {
                let childType = type === 'system' ? 'therapeutic' :
                               type === 'therapeutic' ? 'pharmacologic' :
                               'drug';
                const childNode = this.createTreeNode(child, childType);
                childrenContainer.appendChild(childNode);
            });

            node.appendChild(childrenContainer);

            // Toggle expand/collapse
            const expandIcon = nodeHeader.querySelector('.tree-expand-icon');
            if (expandIcon) {
                expandIcon.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const isExpanded = childrenContainer.style.display === 'block';
                    childrenContainer.style.display = isExpanded ? 'none' : 'block';
                    expandIcon.textContent = isExpanded ? '▶' : '▼';
                    node.classList.toggle('expanded', !isExpanded);
                });
            }

            // Parent checkbox logic
            const parentCheckbox = nodeHeader.querySelector('.tree-node-checkbox');
            if (parentCheckbox) {
                parentCheckbox.addEventListener('change', (e) => {
                    e.stopPropagation();
                    const checked = e.target.checked;

                    // Check/uncheck all child node checkboxes (for cascading down categories)
                    const childNodeCheckboxes = childrenContainer.querySelectorAll('.tree-node-checkbox');
                    childNodeCheckboxes.forEach(cb => cb.checked = checked);

                    // Check/uncheck all drug checkboxes in children
                    const drugCheckboxes = childrenContainer.querySelectorAll('.drug-tree-checkbox');
                    drugCheckboxes.forEach(cb => cb.checked = checked);

                    this.updateSelectedDrugs();
                });
            }
        }

        // Drug checkbox (for actual drugs)
        const drugCheckbox = nodeHeader.querySelector('.drug-tree-checkbox');
        if (drugCheckbox && type === 'drug') {
            drugCheckbox.addEventListener('change', (e) => {
                // Sync all checkboxes with the same drug ID
                const drugId = e.target.dataset.drugId;
                const checked = e.target.checked;
                const modal = document.getElementById('quiz-config-modal');
                if (modal) {
                    const allSameDrugCheckboxes = modal.querySelectorAll(`.drug-tree-checkbox[data-drug-id="${drugId}"]`);
                    allSameDrugCheckboxes.forEach(cb => {
                        if (cb !== e.target) {
                            cb.checked = checked;
                        }
                    });
                }
                this.updateSelectedDrugs();
            });
        }

        return node;
    }

    /**
     * Update selected drugs based on checkboxes
     */
    updateSelectedDrugs() {
        const modal = document.getElementById('quiz-config-modal');
        if (!modal) return;

        const drugCheckboxes = modal.querySelectorAll('.drug-tree-checkbox:checked');

        // Deduplicate drug IDs (same drug may appear in multiple systems)
        // Filter out any undefined/null values
        const drugIds = Array.from(drugCheckboxes)
            .map(cb => cb.dataset.drugId)
            .filter(id => id && id.trim() !== '');
        this.state.config.selectedDrugs = [...new Set(drugIds)];

        // Update UI
        const count = this.state.config.selectedDrugs.length;
        const countText = modal.querySelector('#drug-count-text');
        const countInline = modal.querySelector('#drug-count-inline');
        const startBtn = modal.querySelector('#start-quiz');
        const maxHelper = modal.querySelector('#question-max-helper');
        const numQuestionsInput = modal.querySelector('#num-questions');

        if (countText) countText.textContent = `${count} drug${count !== 1 ? 's' : ''} selected`;
        if (countInline) countInline.textContent = `${count} selected`;
        if (startBtn) startBtn.disabled = count === 0;

        // Update max questions helper
        if (maxHelper) maxHelper.textContent = `/ ${count} max`;
        if (numQuestionsInput) {
            numQuestionsInput.max = count;
            // Auto-adjust if current value exceeds selected drugs
            if (parseInt(numQuestionsInput.value) > count) {
                numQuestionsInput.value = count;
                this.state.config.numberOfQuestions = count;
            }
        }
    }

    /**
     * Start a study session (quiz or learning mode)
     */
    startSession() {
        const modal = document.getElementById('quiz-config-modal');
        const selectedMode = modal.dataset.mode || 'quiz';

        if (this.state.config.selectedDrugs.length === 0) {
            console.error('No drugs selected');
            return;
        }

        this.state.mode = selectedMode;
        this.state.active = true;

        // Initialize progress tracking
        this.state.progress.drugStats.clear();
        this.state.progress.questionsAnswered = 0;
        this.state.progress.score = { correct: 0, incorrect: 0, total: 0 };
        this.state.currentQuestionHasError = false;

        if (selectedMode === 'quiz') {
            // Quiz mode: create a pool of N random questions
            const numQuestions = Math.min(
                this.state.config.numberOfQuestions,
                this.state.config.selectedDrugs.length
            );

            // Shuffle and take N drugs
            const shuffled = [...this.state.config.selectedDrugs].sort(() => Math.random() - 0.5);
            this.state.progress.questionsRemaining = shuffled.slice(0, numQuestions);

        } else {
            // Learning mode: all selected drugs, may repeat
            this.state.progress.questionsRemaining = [...this.state.config.selectedDrugs];

            // Initialize stats for each drug
            this.state.config.selectedDrugs.forEach(drugId => {
                this.state.progress.drugStats.set(drugId, { correct: 0, attempts: 0 });
            });
        }

        // Pick first question
        this.pickNextQuestion();

        // Show UI
        this.showSessionUI();

        // Emit event
        this.emitSessionStarted();

        console.log(`${selectedMode} mode started with ${this.state.progress.questionsRemaining.length} questions`);
    }

    /**
     * Pick the next question
     */
    pickNextQuestion() {
        if (this.state.progress.questionsRemaining.length === 0) {
            // Session complete
            this.sessionComplete();
            return;
        }

        // Pick a random drug from remaining
        const randomIndex = Math.floor(Math.random() * this.state.progress.questionsRemaining.length);
        const drugId = this.state.progress.questionsRemaining[randomIndex];

        // Find ALL instances of this drug across all systems
        const allDrugs = this.dataLoader.getAllDrugs();
        const drugInstances = allDrugs.filter(d => d.id === drugId);

        if (drugInstances.length === 0) {
            console.error('Drug not found:', drugId);
            return;
        }

        // Use first instance for display
        this.state.targetDrug = drugInstances[0];

        // Set up ALL valid paths to this drug
        this.state.correctPaths = drugInstances.map(drug => ({
            system: drug.system,
            therapeuticClass: drug.therapeuticClass,
            pharmacologicClass: drug.pharmacologicClass,
            drug: drug.id
        }));

        // Reset error flag for new question
        this.state.currentQuestionHasError = false;

        console.log(`Next question: ${this.state.targetDrug.name} (${this.state.correctPaths.length} valid path${this.state.correctPaths.length > 1 ? 's' : ''})`);
    }

    /**
     * Show session UI (banner and stats)
     */
    showSessionUI() {
        // Add banner
        const header = document.querySelector('.unified-header');
        const banner = document.createElement('div');
        banner.id = 'quiz-mode-banner';
        banner.className = 'quiz-mode-banner';

        let progressText;
        if (this.state.mode === 'quiz') {
            const score = this.state.progress.score;
            progressText = `Q ${this.state.progress.questionsAnswered + 1}/${this.state.config.numberOfQuestions} | Score: ${score.correct}/${score.total}`;
        } else {
            progressText = `${this.getMasteredCount()} / ${this.state.config.selectedDrugs.length} mastered`;
        }

        banner.innerHTML = `
            <div class="quiz-info">
                <div class="quiz-target">
                    <span class="quiz-label">Find:</span>
                    <span class="quiz-drug-name">${this.state.targetDrug.name}</span>
                </div>
                <div class="quiz-progress">${progressText}</div>
            </div>
            <button class="btn btn-small btn-secondary" id="quit-quiz">Quit</button>
        `;

        header.after(banner);

        // Add quit listener
        banner.querySelector('#quit-quiz').addEventListener('click', () => {
            this.quitSession();
        });

        // Add quiz mode class to body
        document.body.classList.add('quiz-mode-active');
    }

    /**
     * Update session UI (progress text and drug name)
     */
    updateSessionUI() {
        const banner = document.getElementById('quiz-mode-banner');
        if (!banner) return;

        const drugName = banner.querySelector('.quiz-drug-name');
        if (drugName && this.state.targetDrug) {
            drugName.textContent = this.state.targetDrug.name;
        }

        let progressText;
        if (this.state.mode === 'quiz') {
            const score = this.state.progress.score;
            progressText = `Q ${this.state.progress.questionsAnswered + 1}/${this.state.config.numberOfQuestions} | Score: ${score.correct}/${score.total}`;
        } else {
            progressText = `${this.getMasteredCount()} / ${this.state.config.selectedDrugs.length} mastered`;
        }

        const progressEl = banner.querySelector('.quiz-progress');
        if (progressEl) {
            progressEl.textContent = progressText;
        }
    }

    /**
     * Get count of mastered drugs (for learning mode)
     */
    getMasteredCount() {
        let count = 0;
        this.state.progress.drugStats.forEach(stats => {
            if (stats.correct >= this.state.config.correctionsNeeded) {
                count++;
            }
        });
        return count;
    }

    /**
     * Check if a choice is correct (accepts ANY valid path)
     */
    checkChoice(type, id) {
        if (!this.state.active) return null;

        // Check against ALL valid paths
        return this.state.correctPaths.some(path => {
            switch (type) {
                case 'system':
                    return id === path.system;
                case 'therapeutic-class':
                    return id === path.therapeuticClass;
                case 'pharmacologic-class':
                    return id === path.pharmacologicClass;
                case 'drug':
                    return id === path.drug;
                default:
                    return false;
            }
        });
    }

    /**
     * Handle when the correct drug is found
     */
    drugFound() {
        this.state.progress.questionsAnswered++;

        const drugId = this.state.targetDrug.id;

        if (this.state.mode === 'quiz') {
            // Update score
            this.state.progress.score.total++;
            if (this.state.currentQuestionHasError) {
                this.state.progress.score.incorrect++;
            } else {
                this.state.progress.score.correct++;
            }

            // Remove drug from remaining pool
            const index = this.state.progress.questionsRemaining.indexOf(drugId);
            if (index > -1) {
                this.state.progress.questionsRemaining.splice(index, 1);
            }

            // Check if quiz is complete
            if (this.state.progress.questionsRemaining.length === 0) {
                setTimeout(() => this.sessionComplete(), 1000);
            } else {
                // Next question after delay
                setTimeout(() => {
                    this.pickNextQuestion();
                    this.updateSessionUI();
                    this.resetTreeState();
                }, 1500);
            }

        } else {
            // Learning mode: track progress
            let stats = this.state.progress.drugStats.get(drugId);
            if (!stats) {
                stats = { correct: 0, attempts: 0 };
                this.state.progress.drugStats.set(drugId, stats);
            }

            stats.correct++;
            stats.attempts++;

            // Check if this drug is mastered
            if (stats.correct >= this.state.config.correctionsNeeded) {
                // Remove from pool
                const index = this.state.progress.questionsRemaining.indexOf(drugId);
                if (index > -1) {
                    this.state.progress.questionsRemaining.splice(index, 1);
                }
            }

            // Check if all drugs are mastered
            if (this.state.progress.questionsRemaining.length === 0) {
                setTimeout(() => this.sessionComplete(), 1000);
            } else {
                // Next question after delay
                setTimeout(() => {
                    this.pickNextQuestion();
                    this.updateSessionUI();
                    this.resetTreeState();
                }, 1500);
            }
        }
    }

    /**
     * Handle incorrect answer
     */
    drugIncorrect() {
        // Mark current question as having an error
        this.state.currentQuestionHasError = true;

        if (this.state.mode === 'quiz') {
            // If "stop on first mistake" is enabled, move to next question
            if (this.state.config.stopOnFirstMistake) {
                this.moveToNextQuestion();
            }
        } else if (this.state.mode === 'learning') {
            // Learning mode logic
            const drugId = this.state.targetDrug.id;
            let stats = this.state.progress.drugStats.get(drugId);
            if (!stats) {
                stats = { correct: 0, attempts: 0 };
                this.state.progress.drugStats.set(drugId, stats);
            }

            stats.attempts++;

            // Reset progress if configured
            if (this.state.config.resetOnWrong) {
                stats.correct = 0;
            }
        }
    }

    /**
     * Move to next question (for "stop on first mistake")
     */
    moveToNextQuestion() {
        this.state.progress.questionsAnswered++;

        const drugId = this.state.targetDrug.id;

        // Update score - mark as incorrect
        this.state.progress.score.total++;
        this.state.progress.score.incorrect++;

        // Remove drug from remaining pool
        const index = this.state.progress.questionsRemaining.indexOf(drugId);
        if (index > -1) {
            this.state.progress.questionsRemaining.splice(index, 1);
        }

        // Show feedback briefly then move on
        setTimeout(() => {
            if (this.state.progress.questionsRemaining.length === 0) {
                this.sessionComplete();
            } else {
                this.pickNextQuestion();
                this.updateSessionUI();
                this.resetTreeState();
            }
        }, 800);
    }

    /**
     * Reset tree state (collapse and remove feedback)
     */
    resetTreeState() {
        document.querySelectorAll('.tree-node').forEach(node => {
            node.classList.remove('selected', 'quiz-correct', 'quiz-incorrect');
            const container = node.querySelector('.categories-container, .diseases-container');
            if (container) {
                container.style.display = 'none';
            }
            const expandIcon = node.querySelector('.expand-icon');
            if (expandIcon) {
                expandIcon.textContent = '▶';
            }
            node.classList.remove('expanded');
        });
    }

    /**
     * Session complete
     */
    sessionComplete() {
        this.state.active = false;

        // Show results modal
        this.showResultsModal();

        // Remove UI after delay
        setTimeout(() => {
            this.removeSessionUI();
        }, 500);
    }

    /**
     * Show results modal
     */
    showResultsModal() {
        const modal = document.createElement('div');
        modal.className = 'modal quiz-modal show';

        let content = '';
        if (this.state.mode === 'quiz') {
            const score = this.state.progress.score;
            const percentage = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;
            const emoji = percentage >= 80 ? '🎉' : percentage >= 60 ? '👍' : '📚';

            content = `
                <div class="modal-content quiz-success-content">
                    <div class="success-icon">${emoji}</div>
                    <h2>Quiz Complete!</h2>
                    <div class="quiz-score-display">
                        <div class="score-large">${score.correct} / ${score.total}</div>
                        <div class="score-percentage">${percentage}% Correct</div>
                    </div>
                    <div class="score-breakdown">
                        <div class="score-item correct">✓ ${score.correct} Correct</div>
                        <div class="score-item incorrect">✗ ${score.incorrect} Incorrect</div>
                    </div>
                    <div class="quiz-actions">
                        <button class="btn btn-secondary" id="close-success">Close</button>
                        <button class="btn btn-primary" id="new-quiz">Start New Quiz</button>
                    </div>
                </div>
            `;
        } else {
            content = `
                <div class="modal-content quiz-success-content">
                    <div class="success-icon">🎓</div>
                    <h2>Learning Complete!</h2>
                    <p>You mastered <strong>${this.state.config.selectedDrugs.length}</strong> drugs!</p>
                    <p>Total attempts: <strong>${this.state.progress.questionsAnswered}</strong></p>
                    <div class="quiz-actions">
                        <button class="btn btn-secondary" id="close-success">Close</button>
                        <button class="btn btn-primary" id="new-quiz">Start New Session</button>
                    </div>
                </div>
            `;
        }

        modal.innerHTML = content;
        document.body.appendChild(modal);

        // Event listeners
        modal.querySelector('#close-success').addEventListener('click', () => {
            modal.remove();
        });

        modal.querySelector('#new-quiz').addEventListener('click', () => {
            modal.remove();
            this.showConfigModal();
        });
    }

    /**
     * Quit session
     */
    quitSession() {
        if (confirm('Are you sure you want to quit? Your progress will be lost.')) {
            this.state.active = false;
            this.state.targetDrug = null;
            this.state.correctPaths = [];

            this.removeSessionUI();
            this.emitSessionEnded();
        }
    }

    /**
     * Remove session UI
     */
    removeSessionUI() {
        const banner = document.getElementById('quiz-mode-banner');
        if (banner) banner.remove();

        document.body.classList.remove('quiz-mode-active');

        // Remove any visual feedback
        document.querySelectorAll('.tree-node').forEach(node => {
            node.classList.remove('quiz-correct', 'quiz-incorrect');
        });
    }

    /**
     * Close config modal
     */
    closeConfigModal(modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    }

    /**
     * Emit session started event
     */
    emitSessionStarted() {
        const event = new CustomEvent('quizStarted', {
            detail: {
                targetDrug: this.state.targetDrug,
                mode: this.state.mode
            }
        });
        document.dispatchEvent(event);
    }

    /**
     * Emit session ended event
     */
    emitSessionEnded() {
        const event = new CustomEvent('quizEnded');
        document.dispatchEvent(event);
    }

    /**
     * Check if quiz mode is active
     */
    isActive() {
        return this.state.active;
    }

    /**
     * Get current state
     */
    getState() {
        return this.state;
    }
}

export default QuizMode;
