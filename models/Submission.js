const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  step1: {
    name: String,
    email: String,
    phone: String,
    address: {
      line1: String,
      line2: String,
      city: String,
      state: String,
      pincode: String,
      country: String,
    },
  },
  step2: [{
    fileUrl: String,  // URL or path to the uploaded file
    fileType: String, // 'image/png' or 'application/pdf'
  }],
  step3: [String],  // Array to store selected options
  isCompleted: { type: Boolean, default: false }, // Indicates if the form was fully completed
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Submission', SubmissionSchema);
