const express = requ
const minionsRouter = require('./minions');

module.exports = minionsRouter;

// import from server/db.js
const {
    createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
} = require('./db');


// Get all Minions
minionsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('minions'));
});

// Get one Minion
minionsRouter.get('/:id', (req, res, next) => {
    const Minion = getFromDatabaseById(req.params.id, minionsRouter);
    if (Minion) {
        res.send(Minion);
    } else {
        res.status(404).send();
    }
});

// Update an Minion
minionsRouter.put('/:id', (req, res, next) => {
    const Minion = updateInstanceInDatabase(req.params.id, minionsRouter)
});


minionsRouter.post('/:id', (req, res, next) => {
    const newMinion = addToDatabas
    res.status(201).send(new);
});

minionsRouter.