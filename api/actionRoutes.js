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
        res.status(500).json({ error: "The action information could not be retrieved." });
    }
})

//Add action
router.post('/', async(req, res) => {
    try {
        const action = req.body;
        if(action.project_id && action.description && action.notes) {
            const posted = await db.insert(action);
            res.status(201).json(posted);
        } else {
            res.status(400).json({ errorMessage: "Please provide a project id, notes, and description for the action." })
        }
    } catch(err) {
        res.status(500).json({ error: 'Action could not be added'})
    }
})

module.exports = router;