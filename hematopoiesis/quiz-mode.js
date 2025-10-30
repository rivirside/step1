/**
 * Hematopoiesis Quiz Mode
 * Adapted from Medications Quiz Mode
 */

class HematopoiesisQuizMode {
    constructor(dataLoader) {
        this.dataLoader = dataLoader;
        this.mode = null; // 'quiz' or 'learning'
        this.selectedCells = new Set();
        this.currentQuestion = null;
        this.questionIndex = 0;
        this.correctAnswers = 0;
        this.totalQuestions = 0;
        this.questionsPool = [];
    }

    // Show cell selection modal
    showCellSelection(mode) {
        this.mode = mode;
        const modal = this.createSelectionModal();
        document.body.appendChild(modal);

        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    }

    createSelectionModal() {
        const modal = document.createElement('div');
        modal.className = 'quiz-modal';
        modal.id = 'cell-selection-modal';

        const tree = this.dataLoader.getLineageTree();

        modal.innerHTML = `
            <div class="quiz-modal-content">
                <div class="quiz-modal-header">
                    <h2>Select Cells for ${this.mode === 'quiz' ? 'Quiz' : 'Learning'} Mode</h2>
                    <button class="quiz-close-btn" onclick="this.closest('.quiz-modal').remove(); document.body.style.overflow = '';">&times;</button>
                </div>
                <div class="quiz-modal-body">
                    <div class="quiz-selection-controls">
                        <button class="quiz-control-btn" onclick="window.quizMode.selectAll()">Select All</button>
                        <button class="quiz-control-btn" onclick="window.quizMode.deselectAll()">Deselect All</button>
                        <div class="quiz-selected-count">
                            Selected: <span id="quiz-count">0</span> cells
                        </div>
                    </div>
                    <div class="quiz-tree-container">
                        ${this.renderSelectionTree(tree)}
                    </div>
                </div>
                <div class="quiz-modal-footer">
                    <button class="quiz-cancel-btn" onclick="this.closest('.quiz-modal').remove(); document.body.style.overflow = '';">Cancel</button>
                    <button class="quiz-start-btn" onclick="window.quizMode.startSession()">
                        Start ${this.mode === 'quiz' ? 'Quiz' : 'Learning'} Mode
                    </button>
                </div>
            </div>
        `;

        return modal;
    }

    renderSelectionTree(tree) {
        let html = '';

        tree.forEach(system => {
            html += `<div class="quiz-system">`;
            html += `<div class="quiz-system-header">
                <input type="checkbox" class="quiz-system-checkbox" data-system="${system.id}">
                <span>${system.name}</span>
            </div>`;

            html += `<div class="quiz-lineage-groups">`;
            (system.lineageGroups || []).forEach(lineageGroup => {
                html += `<div class="quiz-lineage-group">`;
                html += `<div class="quiz-lineage-header">
                    <input type="checkbox" class="quiz-lineage-checkbox" data-lineage="${lineageGroup.id}">
                    <span>${lineageGroup.name}</span>
                </div>`;

                html += `<div class="quiz-cells">`;
                (lineageGroup.cells || []).forEach(cell => {
                    html += `<div class="quiz-cell-item">
                        <input type="checkbox" class="quiz-cell-checkbox" data-cell-id="${cell.id}" value="${cell.id}">
                        <label>${cell.name}</label>
                    </div>`;
                });
                html += `</div></div>`;
            });
            html += `</div></div>`;
        });

        // Add event listeners after render
        setTimeout(() => this.attachSelectionListeners(), 0);

        return html;
    }

    attachSelectionListeners() {
        // Cell checkboxes
        document.querySelectorAll('.quiz-cell-checkbox').forEach(cb => {
            cb.addEventListener('change', (e) => {
                if (e.target.checked) {
                    this.selectedCells.add(e.target.value);
                } else {
                    this.selectedCells.delete(e.target.value);
                }
                this.updateSelectedCount();
            });
        });

        // Lineage checkboxes
        document.querySelectorAll('.quiz-lineage-checkbox').forEach(cb => {
            cb.addEventListener('change', (e) => {
                const lineageId = e.target.dataset.lineage;
                const cellCheckboxes = e.target.closest('.quiz-lineage-group').querySelectorAll('.quiz-cell-checkbox');

                cellCheckboxes.forEach(cellCb => {
                    cellCb.checked = e.target.checked;
                    if (e.target.checked) {
                        this.selectedCells.add(cellCb.value);
                    } else {
                        this.selectedCells.delete(cellCb.value);
                    }
                });
                this.updateSelectedCount();
            });
        });

        // System checkboxes
        document.querySelectorAll('.quiz-system-checkbox').forEach(cb => {
            cb.addEventListener('change', (e) => {
                const lineageCheckboxes = e.target.closest('.quiz-system').querySelectorAll('.quiz-lineage-checkbox');

                lineageCheckboxes.forEach(linCb => {
                    linCb.checked = e.target.checked;
                    linCb.dispatchEvent(new Event('change'));
                });
            });
        });
    }

    selectAll() {
        document.querySelectorAll('.quiz-cell-checkbox').forEach(cb => {
            cb.checked = true;
            this.selectedCells.add(cb.value);
        });
        this.updateSelectedCount();
    }

    deselectAll() {
        document.querySelectorAll('.quiz-cell-checkbox').forEach(cb => {
            cb.checked = false;
        });
        this.selectedCells.clear();
        this.updateSelectedCount();
    }

    updateSelectedCount() {
        const countEl = document.getElementById('quiz-count');
        if (countEl) {
            countEl.textContent = this.selectedCells.size;
        }
    }

    startSession() {
        if (this.selectedCells.size === 0) {
            alert('Please select at least one cell!');
            return;
        }

        // Close selection modal
        const modal = document.getElementById('cell-selection-modal');
        if (modal) {
            modal.remove();
            document.body.style.overflow = '';
        }

        // Generate questions
        this.generateQuestions();

        // Show quiz interface
        if (this.mode === 'quiz') {
            this.showQuizInterface();
        } else {
            this.showLearningInterface();
        }
    }

    generateQuestions() {
        this.questionsPool = [];
        this.questionIndex = 0;
        this.correctAnswers = 0;

        this.selectedCells.forEach(cellId => {
            const cell = this.dataLoader.getCellById(cellId);
            if (!cell) return;

            // Question: What are the surface markers?
            if (cell.markers && cell.markers.length > 0) {
                this.questionsPool.push({
                    type: 'markers',
                    cell: cell,
                    question: `What are the surface markers for ${cell.name}?`,
                    answer: cell.markers.join(', '),
                    hint: `This cell is part of the ${cell.lineage} lineage.`
                });
            }

            // Question: What is the function?
            if (cell.function) {
                this.questionsPool.push({
                    type: 'function',
                    cell: cell,
                    question: `What is the primary function of ${cell.name}?`,
                    answer: cell.function,
                    hint: cell.location
                });
            }

            // Question: Clinical relevance
            if (cell.diseases && cell.diseases.length > 0) {
                this.questionsPool.push({
                    type: 'disease',
                    cell: cell,
                    question: `What diseases are associated with ${cell.name}?`,
                    answer: cell.diseases.join('; '),
                    hint: cell.clinicalRelevance ? cell.clinicalRelevance[0] : ''
                });
            }
        });

        // Shuffle questions
        this.questionsPool = this.shuffleArray(this.questionsPool);
        this.totalQuestions = this.questionsPool.length;
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    showQuizInterface() {
        const mainContent = document.querySelector('.main-content');
        if (!mainContent) return;

        // Hide main content
        mainContent.style.display = 'none';

        // Create quiz interface
        const quizContainer = document.createElement('div');
        quizContainer.id = 'quiz-container';
        quizContainer.className = 'quiz-container';
        quizContainer.innerHTML = `
            <div class="quiz-header">
                <h2>🩸 Hematopoiesis Quiz Mode</h2>
                <div class="quiz-progress">
                    Question <span id="quiz-current">1</span> of <span id="quiz-total">${this.totalQuestions}</span>
                </div>
                <div class="quiz-score">
                    Score: <span id="quiz-score">0</span>/<span id="quiz-answered">0</span>
                </div>
                <button class="quiz-exit-btn" onclick="window.quizMode.exitQuiz()">Exit Quiz</button>
            </div>
            <div class="quiz-content" id="quiz-content">
                <!-- Questions will appear here -->
            </div>
        `;

        mainContent.parentElement.appendChild(quizContainer);

        // Show first question
        this.showNextQuestion();
    }

    showLearningInterface() {
        const mainContent = document.querySelector('.main-content');
        if (!mainContent) return;

        mainContent.style.display = 'none';

        const learningContainer = document.createElement('div');
        learningContainer.id = 'learning-container';
        learningContainer.className = 'learning-container';
        learningContainer.innerHTML = `
            <div class="learning-header">
                <h2>📚 Learning Mode</h2>
                <div class="learning-progress">
                    Card <span id="learning-current">1</span> of <span id="learning-total">${this.totalQuestions}</span>
                </div>
                <button class="quiz-exit-btn" onclick="window.quizMode.exitQuiz()">Exit Learning Mode</button>
            </div>
            <div class="learning-content" id="learning-content">
                <!-- Learning cards will appear here -->
            </div>
        `;

        mainContent.parentElement.appendChild(learningContainer);

        this.showNextLearningCard();
    }

    showNextQuestion() {
        if (this.questionIndex >= this.questionsPool.length) {
            this.showQuizResults();
            return;
        }

        this.currentQuestion = this.questionsPool[this.questionIndex];
        const content = document.getElementById('quiz-content');

        content.innerHTML = `
            <div class="quiz-question-card">
                <h3>${this.currentQuestion.question}</h3>
                <div class="quiz-answer-section" id="quiz-answer-section">
                    <button class="quiz-reveal-btn" onclick="window.quizMode.revealAnswer()">Show Answer</button>
                </div>
            </div>
        `;

        document.getElementById('quiz-current').textContent = this.questionIndex + 1;
    }

    revealAnswer() {
        const answerSection = document.getElementById('quiz-answer-section');

        answerSection.innerHTML = `
            <div class="quiz-answer-revealed">
                <strong>Answer:</strong>
                <p>${this.currentQuestion.answer}</p>
                ${this.currentQuestion.hint ? `<p class="quiz-hint"><strong>Hint:</strong> ${this.currentQuestion.hint}</p>` : ''}
            </div>
            <div class="quiz-feedback-buttons">
                <button class="quiz-feedback-btn correct" onclick="window.quizMode.answerQuestion(true)">✓ I got it right</button>
                <button class="quiz-feedback-btn incorrect" onclick="window.quizMode.answerQuestion(false)">✗ I got it wrong</button>
            </div>
        `;
    }

    answerQuestion(correct) {
        if (correct) {
            this.correctAnswers++;
        }

        const answered = this.questionIndex + 1;
        document.getElementById('quiz-score').textContent = this.correctAnswers;
        document.getElementById('quiz-answered').textContent = answered;

        this.questionIndex++;

        setTimeout(() => {
            this.showNextQuestion();
        }, 500);
    }

    showNextLearningCard() {
        if (this.questionIndex >= this.questionsPool.length) {
            this.showLearningComplete();
            return;
        }

        const card = this.questionsPool[this.questionIndex];
        const content = document.getElementById('learning-content');

        content.innerHTML = `
            <div class="learning-card">
                <div class="learning-card-front" id="learning-card-front">
                    <h3>${card.question}</h3>
                    <button class="learning-flip-btn" onclick="window.quizMode.flipCard()">Flip Card</button>
                </div>
                <div class="learning-card-back hidden" id="learning-card-back">
                    <h3>Answer:</h3>
                    <p>${card.answer}</p>
                    ${card.hint ? `<p class="learning-hint"><strong>Context:</strong> ${card.hint}</p>` : ''}
                    <div class="learning-nav-buttons">
                        <button class="learning-nav-btn" onclick="window.quizMode.previousCard()">← Previous</button>
                        <button class="learning-flip-btn" onclick="window.quizMode.flipCard()">Flip Card</button>
                        <button class="learning-nav-btn" onclick="window.quizMode.nextCard()">Next →</button>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('learning-current').textContent = this.questionIndex + 1;
    }

    flipCard() {
        const front = document.getElementById('learning-card-front');
        const back = document.getElementById('learning-card-back');

        front.classList.toggle('hidden');
        back.classList.toggle('hidden');
    }

    nextCard() {
        if (this.questionIndex < this.questionsPool.length - 1) {
            this.questionIndex++;
            this.showNextLearningCard();
        }
    }

    previousCard() {
        if (this.questionIndex > 0) {
            this.questionIndex--;
            this.showNextLearningCard();
        }
    }

    showQuizResults() {
        const content = document.getElementById('quiz-content');
        const percentage = Math.round((this.correctAnswers / this.totalQuestions) * 100);

        content.innerHTML = `
            <div class="quiz-results">
                <h2>🎉 Quiz Complete!</h2>
                <div class="quiz-score-circle">
                    <span class="quiz-score-percent">${percentage}%</span>
                </div>
                <p class="quiz-score-details">
                    You got <strong>${this.correctAnswers}</strong> out of <strong>${this.totalQuestions}</strong> questions correct!
                </p>
                <div class="quiz-result-buttons">
                    <button class="quiz-restart-btn" onclick="window.quizMode.restartQuiz()">Retry Quiz</button>
                    <button class="quiz-exit-btn" onclick="window.quizMode.exitQuiz()">Exit to Explorer</button>
                </div>
            </div>
        `;
    }

    showLearningComplete() {
        const content = document.getElementById('learning-content');

        content.innerHTML = `
            <div class="learning-complete">
                <h2>📚 Learning Complete!</h2>
                <p>You've reviewed all <strong>${this.totalQuestions}</strong> cards.</p>
                <div class="quiz-result-buttons">
                    <button class="quiz-restart-btn" onclick="window.quizMode.restartQuiz()">Review Again</button>
                    <button class="quiz-exit-btn" onclick="window.quizMode.exitQuiz()">Exit to Explorer</button>
                </div>
            </div>
        `;
    }

    restartQuiz() {
        this.questionIndex = 0;
        this.correctAnswers = 0;

        if (this.mode === 'quiz') {
            this.showNextQuestion();
            document.getElementById('quiz-score').textContent = '0';
            document.getElementById('quiz-answered').textContent = '0';
        } else {
            this.showNextLearningCard();
        }
    }

    exitQuiz() {
        const quizContainer = document.getElementById('quiz-container');
        const learningContainer = document.getElementById('learning-container');
        const mainContent = document.querySelector('.main-content');

        if (quizContainer) quizContainer.remove();
        if (learningContainer) learningContainer.remove();
        if (mainContent) mainContent.style.display = '';

        // Reset state
        this.selectedCells.clear();
        this.questionsPool = [];
        this.questionIndex = 0;
        this.correctAnswers = 0;
    }
}

export default HematopoiesisQuizMode;
