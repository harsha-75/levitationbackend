const Submission = require('../models/Submission');

const submitForm = async (req, res) => {
  const userId = req.user.id;
  try {
    const submission = new Submission({ user: userId, ...req.body });
    await submission.save();
    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getSubmissions = async (req, res) => {
  const userId = req.user.id;
  try {
    const submissions = await Submission.find({ user: userId });
    res.json(submissions);
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { submitForm, getSubmissions };
