const express = require('express');
const router = express.Router();
const db = require('../data/helpers/actionModel');

//Get action by id
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const action = await db.get(id);
        res.status(200).json(action);
    } catch(err) {
        res.status(500).json({ error: "The project information could not be retrieved." });
    }
})

module.exports = router;