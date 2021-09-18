const express = require('express');
const router = express.Router();

const {data} = require('../data/flashcardData.json'); //Same as const data = require('../data/flashcardData.json).data
const {cards} = data; //Same as const cards = data.cards;

//Redirect to a random question when user enter localhost:3000/cards without the query string or the card number url
router.get('/', (req, res) => {
    const numOfCards = cards.length;
    const flashcardId = Math.floor(Math.random() * numOfCards);
    res.redirect(`/cards/${flashcardId}`);
});

router.get('/:id', (req, res) => {
    const {side} = req.query;
    const {id} = req.params;
    //If user did not enter card number and query string in url, redirect to question
    if ( !side ) {
        return res.redirect(`/cards/${id}?side=question`);
    }
    const name = req.cookies.username;
    const text = cards[id][side];
    const {hint} = cards[id];

    //const templateData = {text};
    const templateData = {text, hint, side, id, name};

    if (side === "question") {
        templateData.sideToShow = 'answer';
        templateData.sideToShowDisplay = 'Answer';
    } else {
        templateData.sideToShow = 'question';
        templateData.sideToShowDisplay = 'Question';
    }
    res.render('card', templateData);
});

module.exports = router;