document.addEventListener('DOMContentLoaded', () => {
    const articleCards = document.querySelectorAll('.article-card');

    articleCards.forEach(card => {
        const hintButton = card.querySelector('.hint');
        const solutionButton = card.querySelector('.solution');
        const result = card.querySelector('.result');
        const clearOtherResults = () => {
            articleCards.forEach(otherCard => {
                const otherResult = otherCard.querySelector('.result');
                if (otherResult !== result) {
                    otherResult.textContent = '';
                }
            });
        };

        hintButton.addEventListener('click', function() {
            result.textContent = this.value;
            clearOtherResults();
        });

        solutionButton.addEventListener('click', function() {
            result.textContent = this.value;
            clearOtherResults();
        });
    });
});