const express = require('express');
const router = express.Router();
const db = require('../data/helpers/projectModel');

//Get project by id
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const project = await db.get(id);
        res.status(200).json(project);
    } catch(err) {
        res.status(500).json({ error: "The project information could not be retrieved." });
    }
})

//Get project actions by projectId
router.get('/:id/actions', async (req, res) => {
    try {
        const id = req.params.id;
        const actions = await db.getProjectActions(id)
        res.status(200).json(actions);
    } catch(err) {
        res.status(500).json({ error: "The project information could not be retrieved." });
    }
})

module.exports = router;


/*{
    "id":1,
    "name":"Complete Node.js and Express Challenge",
    "description":"Build and Awesome API Using Node.js and Express to Manage Projects and Actions GTD Style!",
    "completed":false,
    "actions": [
        {
            "id":1,
            "project_id":1,
            "description":
            "Fork and Clone Repository",
            "notes":"Repo URL: https://github.com/LambdaSchool/Sprint-Challenge-Node-Express",
            "completed":false
        },
        {
            "id":2,"project_id":1,
            "description":"Install Dependencies",
            "notes":"Remember to cd into the folder where the Project was cloned",
            "completed":false
        },
        {
            "id":3,
            "project_id":1,
            "description":"Design and Build API Endpoints",
            "notes":"This is where the magic happens!",
            "completed":false
        }
    ]
}*/