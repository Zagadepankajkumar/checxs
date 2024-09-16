document.addEventListener('DOMContentLoaded', () => {
    const color1Input = document.getElementById('color1');
    const color2Input = document.getElementById('color2');
    const chessboard = document.getElementById('chessboard');
    const generateButton = document.getElementById('generateButton');
    
    function updateChessboard() {
        const color1 = color1Input.value;
        const color2 = color2Input.value;
        
        chessboard.innerHTML = '';
        
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const square = document.createElement('div');
                square.style.backgroundColor = (row + col) % 2 === 0 ? color1 : color2;
                chessboard.appendChild(square);
            }
        }
    }
    
    generateButton.addEventListener('click', updateChessboard);
    
    // Initial update
    updateChessboard();
});
