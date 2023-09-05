const inquirer = require('inquirer');


const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to 3 characters."
    },
    {
        type: "input",
        name: "text-color",
        message: "Enter a standard or hexidecimal color for your text."
    },
    {
        type: "list",
        name: "shape",
        message: "Select the shape you would like to use:",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: "input",
        name: "shape-color",
        message: "Enter a standard or hexidecimal color for your shape."
    }
];