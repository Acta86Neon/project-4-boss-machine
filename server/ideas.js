const express = require('express');
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
