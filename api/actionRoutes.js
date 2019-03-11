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

// Edit Action
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const update = req.body;

        const updated = await db.update(id, update);

        if(updated) {
            res.status(201).json(updated);
        } else {
            res.status(404).json({ message: "The action with the specified ID does not exist." })
        }
    } catch(err) {
        res.status(500).json({ error: "The action information could not be updated." });
    }
})

//Delete Action 
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const deletedAction = await db.get(id);
        const deleted = await db.remove(id);

        if(deleted) {
            res.status(200).json(deletedAction)
        } else {
            res.status(404).json({ message: "The action with the specified ID does not exist." })
        }
    } catch(err) {
        res.status(500).json({ error: "The action could not be removed" });
    }    
})

module.exports = router;