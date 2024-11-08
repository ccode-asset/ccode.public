/**
 * 
 */

var slideIndex = 0;

function nextCard(cardId) {
	showCards(cardId, slideIndex + 1);
}

function prevCard(cardId) {
	showCards(cardId, slideIndex - 1);
}

function showCards(cardId, cardNo) {
	var cards = document.getElementsByName(cardId);

	if (cardNo >= cards.length) {
		cardNo = 0;
	}
	else if (cardNo < 0) {
		cardNo = cards.length -1;
	}
	
	cards[cardNo].style.display = 'flex';
	cards[slideIndex].style.display = 'none';
	
	slideIndex = cardNo;
}


