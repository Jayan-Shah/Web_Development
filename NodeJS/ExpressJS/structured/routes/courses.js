const express=require('express');
const router = express.Router(); // no app but router

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

// To get all the  courses
router.get("/", (req, res) => {
  res.send(courses);
});

//  To get a single course
router.get("/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("The given id is not found"); //404
  res.send(course);
});

// Route Parameters
router.get(":id", (req, res) => {
  res.send(req.params.id);
});

// POST request
router.post("/", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name, //In order to work we need middleware
  };

  courses.push(course);
  res.send(course);
});

module.exports=router;
