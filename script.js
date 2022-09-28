const gameBoard = (() => {

    let _board = ['', '', '', '', '', '', '', '', ''];

    const getBoard = () => {
        return _board;
    };

    const _setBoard = () => {
        for (let i = 0; i < _board.length; i++) {
            document.querySelector(`[data-index="${i}"]`).textContent = _board[i];
        }
    };

    const updateBoard = () => {
        const cells = document.querySelectorAll('.cell');
        const resetButton = document.querySelector('.restart-btn');
        const result = document.querySelector('.results');
        let isGameOver = false;

        cells.forEach((cell) => {

            cell.addEventListener('click', () => {
                if (cell.textContent === '' && !isGameOver) {
                    _board[cell.getAttribute("data-index")] = currentPlayer.getMarker();
                    _setBoard();
                    if (play.checkForWin()) {
                        result.textContent = `Game Over... ${currentPlayer.getName()} won...`;
                        resetButton.style.display = 'block';
                        isGameOver = true;
                    } else if (play.checkForTie()) {
                        result.textContent = "Game Over... It's a Tie...";
                        resetButton.style.display = 'block';
                        isGameOver = true;
                    }
                    play.changePlayer();
                }
            })
        });

        resetButton.addEventListener('click', () => {
            _board = ['', '', '', '', '', '', '', '', ''];
            result.textContent = '';
            _setBoard();
            resetButton.style.display = 'none';
            if (currentPlayer = player2) {
                play.changePlayer();
            };
            isGameOver = false;
        });
    };

    updateBoard();

    return {
        getBoard,
        updateBoard
    };
})();

const Player = (name, marker) => {
    const getName = () => name;
    const getMarker = () => marker;

    return {
        getName,
        getMarker
    };
};

const player1 = Player('Player 1', 'X');
const player2 = Player('Player 2', 'O');

let currentPlayer = player1;

const play = (() => {

    const checkForWin = () => {
        if (gameBoard.getBoard()[0] === 'X' && gameBoard.getBoard()[1] === 'X' && gameBoard.getBoard()[2] === 'X'
            || gameBoard.getBoard()[3] === 'X' && gameBoard.getBoard()[4] === 'X' && gameBoard.getBoard()[5] === 'X'
            || gameBoard.getBoard()[6] === 'X' && gameBoard.getBoard()[7] === 'X' && gameBoard.getBoard()[8] === 'X'
            || gameBoard.getBoard()[0] === 'X' && gameBoard.getBoard()[3] === 'X' && gameBoard.getBoard()[6] === 'X'
            || gameBoard.getBoard()[1] === 'X' && gameBoard.getBoard()[4] === 'X' && gameBoard.getBoard()[7] === 'X'
            || gameBoard.getBoard()[2] === 'X' && gameBoard.getBoard()[5] === 'X' && gameBoard.getBoard()[8] === 'X'
            || gameBoard.getBoard()[0] === 'X' && gameBoard.getBoard()[4] === 'X' && gameBoard.getBoard()[8] === 'X'
            || gameBoard.getBoard()[2] === 'X' && gameBoard.getBoard()[4] === 'X' && gameBoard.getBoard()[6] === 'X'
            || gameBoard.getBoard()[0] === 'O' && gameBoard.getBoard()[1] === 'O' && gameBoard.getBoard()[2] === 'O'
            || gameBoard.getBoard()[3] === 'O' && gameBoard.getBoard()[4] === 'O' && gameBoard.getBoard()[5] === 'O'
            || gameBoard.getBoard()[6] === 'O' && gameBoard.getBoard()[7] === 'O' && gameBoard.getBoard()[8] === 'O'
            || gameBoard.getBoard()[0] === 'O' && gameBoard.getBoard()[3] === 'O' && gameBoard.getBoard()[6] === 'O'
            || gameBoard.getBoard()[1] === 'O' && gameBoard.getBoard()[4] === 'O' && gameBoard.getBoard()[7] === 'O'
            || gameBoard.getBoard()[2] === 'O' && gameBoard.getBoard()[5] === 'O' && gameBoard.getBoard()[8] === 'O'
            || gameBoard.getBoard()[0] === 'O' && gameBoard.getBoard()[4] === 'O' && gameBoard.getBoard()[8] === 'O'
            || gameBoard.getBoard()[2] === 'O' && gameBoard.getBoard()[4] === 'O' && gameBoard.getBoard()[6] === 'O') {
            return true;
        } else {
            return false;
        }
    };

    const checkForTie = () => {
        if (!gameBoard.getBoard().includes('')) {
            return true;
        } else {
            return false;
        }
    };

    const changePlayer = () => {
        const playerX = document.getElementById('player1');
        const playerO = document.getElementById('player2');
        if (currentPlayer === player1) {
            currentPlayer = player2;
            playerX.style.fontSize = '24px';
            playerX.style.color = '#513252';
            playerO.style.fontSize = '40px';
            playerO.style.color = '#CA4E79';
        } else {
            currentPlayer = player1;
            playerO.style.fontSize = '24px';
            playerO.style.color = '#513252';
            playerX.style.fontSize = '40px';
            playerX.style.color = '#CA4E79';
        }
    }

    return {
        changePlayer,
        checkForWin,
        checkForTie
    };
})();