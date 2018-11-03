const express = requ
const minionsRouter = require('./minions');

module.exports = minionsRouter;

// import from server/db.js
const {
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
} = require('./db');

minionsRouter.param('minionId', (req, res, next, id) => {
   const Minion = getFromDatabaseById('Minion', id);
   if (Minion) {
       req.minion = minion;
       next();
   } else {
       res.status(404).send();
   }
});

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
    const updateMinion = updateInstanceInDatabase('minions', req.params.id);
    if (receivedMinion) {

    }
});
