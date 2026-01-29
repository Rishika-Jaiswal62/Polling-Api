const polls = require("../models/pollModel");
const { v4: uuidv4 } = require("uuid");

exports.createPoll = (req, res) => {
  const { question, options } = req.body;

  const poll = {
    id: uuidv4(),
    question,
    options: options.map(opt => ({
      id: uuidv4(),
      text: opt,
      votes: 0
    })),
    votedIPs: []
  };

  polls.push(poll);
  res.json({ message: "Poll created", poll });
};

exports.getAllPolls = (req, res) => {
  res.json(polls);
};

exports.votePoll = (req, res) => {
  const poll = polls.find(p => p.id === req.params.id);
  const userIP = req.ip;

  if (!poll) return res.status(404).json({ message: "Poll not found" });
  if (poll.votedIPs.includes(userIP))
    return res.status(400).json({ message: "Already voted" });

  const option = poll.options.find(o => o.id === req.body.optionId);
  if (!option) return res.status(404).json({ message: "Option not found" });

  option.votes++;
  poll.votedIPs.push(userIP);

  res.json({ message: "Vote added" });
};

exports.getPollById = (req, res) => {
  const poll = polls.find(p => p.id === req.params.id);
  if (!poll) return res.status(404).json({ message: "Poll not found" });
  res.json(poll);
};