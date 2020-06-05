const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/mongo-exercises')
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.log('Could not connect to MongoDB...', err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: Number,
});

const Course = mongoose.model('Course', courseSchema);

const getCourses = async () => {
  //   const pageNumber = 2;
  //   const pageSize = 10;

  const courses = await Course.find()
    .sort({ name: 1 })
    .select({ name: 1, author: 1 });
  console.log(courses);
};

getCourses();
