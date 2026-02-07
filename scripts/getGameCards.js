export const getGameCards = (level) => {
  const cardSuites = ['S', 'H', 'D', 'C'];
  const cardValues = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6'];

  const getCardImg = (suite) => {
    let img = '';
    switch (suite) {
      case 'S':
        img = './img/spades.svg';
        break;
      case 'H':
        img = './img/hearts.svg';
        break;
      case 'D':
        img = './img/diamonds.svg';
        break;
      case 'C':
        img = './img/clubs.svg';
        break;
    }
    return img;
  };
  const cardDeck = [];
  for (const suite of cardSuites) {
    for (const value of cardValues) {
      const card = {
        id: 1,
        name: value + suite,
        value: value === 'T' ? '10' : value,
        suite: suite,
        img: getCardImg(suite),
        visible: 'open',
      };
      cardDeck.push(card);
    }
  }
  const shuffleDeck = cardDeck
    .sort(() => Math.random() - 0.5)
    .slice(0, level * 3);

  return shuffleDeck.concat(shuffleDeck).sort(() => Math.random() - 0.5);
};
