let playerX = "X";
let player0 = "0";
let turn = 1;
let winnerPlayer;
let moves = 1;
let board = new Array(9);
let verify = 0;
for (let element of board) {
	element = null;
}
let winConditions = 	[
					[0, 1, 2],
					[2, 5, 8],
					[6, 7, 8],
					[0, 3, 6],
					[0, 4, 8],
					[2, 4, 6],
					[1, 4, 7],
					[3, 4, 5]
							];

function game (clicked_id) {
	if (turn == 1) {
		document.getElementById(clicked_id).innerHTML = playerX;
		board[clicked_id] = playerX;
		verifyWinner(moves);
		turn = 2;
	} else if (turn == 2) {
		document.getElementById(clicked_id).innerHTML = player0;
		board[clicked_id] = player0;
		verifyWinner(moves);
		turn = 1;
	}
	++moves;

}

function verifyWinner(moves) {
	for (let i = 0; i < winConditions.length; i++) {
		if (board[winConditions[i][0]] === board[winConditions[i][1]] &&
			board[winConditions[i][1]] === board[winConditions[i][2]] &&
			board[winConditions[i][0]] === board[winConditions[i][2]]) {
			winnerPlayer = board[winConditions[i][0]];
			if (winnerPlayer != null) {
				winner(winnerPlayer);
			}
		}
	}
	if (moves === 9 && verify === 0) {
		draw();
	}
}

function winner(winnerPlayer) {
	document.getElementById('endOfMatch').innerHTML += `
		<p class="fw-bold"> Player ` + winnerPlayer + ` won the game!</p>
		<button type="button" class="btn btn-primary" onclick="restart()">Rematch</button>
	`;
	document.getElementById('grid').classList.add("disable");
	verify = 1;
}

function draw() {
	document.getElementById('endOfMatch').innerHTML += `
		<p class="fw-bold">Draw!</p>
		<button type="button" class="btn btn-primary" onclick="restart()">Play Again</button>
	`;
	document.getElementById('grid').classList.add("disable");
}

function restart() {
	window.location.reload();
}
