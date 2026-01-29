const express = require("express");
const router = express.Router();
const pollController = require("../controllers/pollController");



/**
 * @swagger
 * /polls:
 *   post:
 *     summary: Create a new poll
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *               options:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Poll created successfully
 */

router.post("/", pollController.createPoll);


/**
 * @swagger
 * /polls:
 *   get:
 *     summary: Get all polls
 *     responses:
 *       200:
 *         description: List of polls
 */
router.get("/", pollController.getAllPolls);

/**
 * @swagger
 * /polls/{id}/vote:
 *   post:
 *     summary: Vote on a poll
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               optionId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Vote added
 */




router.post("/:id/vote", pollController.votePoll);

/**
 * @swagger
 * /polls/{id}:
 *   get:
 *     summary: Get poll by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Poll details
 */
router.get("/:id", pollController.getPollById);

module.exports = router;