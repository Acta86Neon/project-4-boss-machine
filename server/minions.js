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

// Create a new Minion
minionsRouter.post('/', (req, res, next) => {
  const newMinion = addToDatabase('minion', req.body);
  res.status(204).send(newMinion);
});

// Update an Minion
minionsRouter.put('/:minionId', (req, res, next) => {
    const updateMinion = updateInstanceInDatabase('minion', req.body);
    res.send(updateMinion);
});

// Delete a minion
minionsRouter.delete('/:minionId', (req, res, next) => {
    const deleteMinion = deleteFromDatabasebyId('/:minionId', req.params.minionId);
    if (deleteMinion) {
      res.status(204);
    } else {
      res.status(500);
    }
    res.send();
});
