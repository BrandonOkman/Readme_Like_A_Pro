const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

consy questions = [
    {
        type: 'input',
        name: 'github',
        name: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        name: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        name: 'What is your project\'s name?',
    },
    {
        type: 'input',
        name: 'description',
        name: 'Please write a short description of your project',
    },
    {
        type: 'input',
        name: 'usage', 
        message: 'Explain the usage of the repo',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What kind of license should your project have?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
    },