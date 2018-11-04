const minionsRouter = require('express').Router();

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
   const Minion = getFromDatabaseById('minion', id);
   if (Minion) {
       req.minion = Minion;
       next();
   } else {
       res.status(404).send();
   }
});

// Get all Minions
minionsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('minion'));
});

// Get one Minion
minionsRouter.get('/:minionId', (req, res, next) => {
    res.send(req.minion);
});

// Update an Minion
minionsRouter.put('/:minionId', (req, res, next) => {
    const updateMinion = updateInstanceInDatabase('minion', req.params.id);
    }
);
