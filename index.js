const inquirer = require("inquirer");
const fs = require("fs");

//Function for questions the user answers in the command line.

inquirer.prompt([
    
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
        message:"Input your badge URL here. (For more info, go to https://shields.io/)"
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
    {//Screenshots
        type: "input",
        name: "screenshot",
        message:"Enter the URL screenshot or video."
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
    }

    ]).then(answers => {
    const { title, badge, blurb, description, installation, usage, contributing, screenshot, test, github, githubURL, authors, linkedinURL, twitter, twitterURL, email, license } = answers;

    // README Template.

const READMEfile = `# ${title} 
![GitHub license](${badge})

### ${blurb}

## *Table of Contents*

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Authors](#authors)
- [Screenshots](#screenshots)
- [Video](#video)
- [Tests](#tests)
- [Contact Me](#contact-me)

## *Description* 
${description}

## *Installation*
${installation}

## *Usage* 
${usage}

## *Contributing*
${contributing}

## *Authors*
${authors}

## *Screenshots*
![](${screenshot})

## *Video*

## *Tests*
${test}

## *Contact Me*
- Github: **[${github}](${githubURL})
- LinkedIn: **[${authors}](${linkedinURL}) 
- Twitter: **[${twitter}](${twitterURL}) 
- Email: **[${email}](mailto:${email})

This project is ${license} licensed.

&copy; 2020 ${authors}`

//Generating the README file with fs.write.
fs.writeFile("README.md", READMEfile, err => {
    if(err){
        console.log(err);
    }else{
        console.log("Great! You're all set.");
    }
});

    });
