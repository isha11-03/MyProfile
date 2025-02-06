const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Set EJS as the template engine
app.set("view engine", "ejs");

// Serve static files (CSS, images)
app.use(express.static(path.join(__dirname, "public")));

// Route for Home Page
app.get("/", (req, res) => {
    res.render("index");
});

// Route for Skills Page
app.get("/skills", (req, res) => {
    const skills = ["JavaScript", "Node.js", "Express", "MongoDB", "React", "CSS", "HTML"];
    res.render("skills", { skills });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
