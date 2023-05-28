const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  slug: {
    type: String,
    require: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

mongoose.model('Category', CategorySchema);