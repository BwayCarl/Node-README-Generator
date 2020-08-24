const inquirer = require("inquirer");
const fs = require("fs");

const questions = ([

    { //Title
        type: "input",
        name: "title",
        message:"What is the title of your project?"
    },
    { //Blurb
        type: "input",
        name: "blurb",
        message:"Write a short, one sentence blurb describing your project."
    },
    {//Table of Contents
        type: "input",
        name: "tableOfContents",
        message:"Input your Table of Contents separated by commas."
    },
    { //Description
        type: "input",
        name: "description",
        message:"Write a detailed description of your project."
    },
    {//Installation
        type: "input",
        name: "installation",
        message:"Installation instructions."
    },
    {//Usage
        type: "input",
        name: "usage",
        message:"How do you use your project? "
    },
    {//License
        type: "checkbox",
        name: "license",
        message:"Choose a license.",
        choices: [
            "MIT",
            "GNU GPLv3",
            "Apache-2.0",
            "ISC"]
    },
    {//Badges
        type: "input",
        name: "badge",
        message:"Input your badge codes here separated by commas. (For more info, go to https://shields.io/)"
    },
    {//Contributing
        type: "input",
        name: "contributing",
        message:"How can you contribute?"
    },
    {//Authors
        type: "input",
        name: "authors",
        message:"Who is the author of this project?"
    },
    {//Sceenshots
        type: "input",
        name: "screenshot",
        message:"Enter the URLs of your screenshots or video, separated by commas."
    },
    {//Tests
        type: "input",
        name: "test",
        message:"Run tests here."
    },
    //Contact Info

    {//Github
        type: "input",
        name: "github",
        message:"What is your Github username?"
    },
    {
        type: "input",
        name: "githubURL",
        message:"What is your Github profile URL?"
    },
     {//Twitter
        type: "input",
        name: "twitter",
        message:"What is your Twitter username?"
    },
    {
        type: "input",
        name: "twitterURL",
        message:"What is your Twitter profile URL?"
    },
    {//LinkedIn
        type: "input",
        name: "linkedinURL",
        message:"What is your LinkedIn profile URL?"
    },
    
    {//Email
        type: "input",
        name: "email",
        message:"What is your email address?"
    },
])

console.clear();

// Function to generate markdown for README file.

inquirer.prompt(questions).then(data => {
   
    // README Title
    fs.writeFileSync("README.md", (`# ${data.title}`) + '\n', function(err) {       
        if (err) {
            return console.log(err);
        }
        console.log("Great!");
    })
    // Quick one line description of project
    fs.appendFileSync("README.md", (`### ${data.blurb}`) + '\n', function(err) {    
        if (err) {
            return console.log(err);
        }
        console.log("Perfect!");
    })
    // Table of Contents
    fs.appendFileSync("README.md", ("## Table of Contents" + '\n' + '- ' + data.tableOfContents.split(", ")
    .join('\n' + '- ')) + '\n', function(err) {  
        if (err) {
            return console.log(err);
        }
        console.log("Perfect!");
    })
    // Detailed description  
    fs.appendFileSync("README.md", (`## Description \n ${data.description}`) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Excellent!");
    })
    // Installation
    fs.appendFileSync("README.md", (`## Installation \n ${data.installation}`) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Good.");
    })
    // Usage
    fs.appendFileSync("README.md", (`## Usage \n ${data.usage}`) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Good.");
    })
    // Contributing
    fs.appendFileSync("README.md", (`## Contributing \n ${data.contributing}`) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Okay.");
    })
    // Authors
    fs.appendFileSync("README.md", (`## Authors \n ${data.authors}`) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Great.");
    })
    // Screenshots
    fs.appendFileSync("README.md", (`## Screenshots \n ![](${data.screenshot})`) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Great.");
    })
    // Tests
    fs.appendFileSync("README.md", (`## Tests \n ${data.test}`) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Great.");
    })
    // Contact Info
    fs.appendFileSync("README.md", (`## Contact Me 
        \n - Github: [${data.github}](${data.githubURL})
        \n - LinkedIn: [${data.authors}](${data.linkedinURL}) 
        \n - Twitter: [${data.twitter}](${data.twitterURL}) 
        \n - Email: [${data.email}](${data.email})`) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Great.");
    }),
    // License 
    fs.appendFileSync("README.md", (`## License \n This project is ${data.license} licensed. \n Copyright 2020 ${data.authors}`) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Okay.");
    })

    });
