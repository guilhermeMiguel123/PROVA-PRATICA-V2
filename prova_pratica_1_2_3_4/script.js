

document.addEventListener('DOMContentLoaded', () => {
  
    const textArea = document.getElementById('text-area');
    const charCount = document.getElementById('char-count');
    const wordCount = document.getElementById('word-count');
    const yourName = document.getElementById('your-name');

    function addYourName() {
        yourName.textContent = 'Guilherme Miguel'; 
    }

    addYourName(); 

    function updateCounts() {
        const text = textArea.value;
        const characters = text.length;
        const words = text.trim().split(/\s+/).filter(word => word !== "").length;
        charCount.textContent = characters;
        wordCount.textContent = words;
    }

    textArea.addEventListener('input', updateCounts);
    updateCounts();
});
