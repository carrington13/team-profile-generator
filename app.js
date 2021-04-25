const inquirer = require('inquirer');
//const {writeFile, copyJsFile, copyCssFile } = require('./utils/generate-site.js');

const questions = [
    // role?
    {
        name: 'employeePosition',
        type: 'list',
        message: "What is the team member's role?",
        choices: ['Manager', 'Engineer', 'Intern'],
        validate: employeePosition => {
            if (employeePosition) {
                return true;
            } else {
                console.log('Please select a position!')
                return false;
            }
        }
    },
    // name
    {
        name: 'name',
        type: 'input',
        message: "What is the member's name?",
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log("Please enter the member's name.");
                return false;
            }
        }
    },
    // id
    {
        name: 'id',
        type: 'input',
        message: "What is the team member's id?",
        validate: id => {
            if (id) {
                return true;
            } else {
                console.log("Please enter the member's id.");
                return false;
            }
        }
    },
    // email
    {     
        name: 'email',
        type: 'input',
        message: "What is the team member's email?",
        validate: id => {
            if (id) {
                return true;
            } else {
                console.log("Please enter the member's id.");
                return false;
            }
        }
    },
    // if "Engineer" then github
    {
        name: 'github',
        type: 'input',
        message: "What is the engineer's github?",
        when: answers => answers.employeePosition === 'Engineer',
        validate: github => {
            if (github) {
                return true;
            } else {
                console.log("Please enter the engineer's github.");
                return false;
            }
        }
    },
    // if 'Intern" then school
    {name: 'school',
    type: 'input',
    message: "What is the intern's school?",
    when: answers => answers.employeePosition === 'Intern',
    validate: github => {
        if (github) {
            return true;
        } else {
            console.log("Please enter the interns's school.");
            return false;
        }
    }},
    // if 'Manager' then officeNumber
    {name: 'officeNumber',
    type: 'input',
    message: "What is the manager's office number?",
    when: answers => answers.employeePosition === 'Manager',
    validate: officeNumber => {
        if (officeNumber) {
            return true;
        } else {
            console.log("Please enter the manager's office number.");
            return false;
        }
    }},
    {
        name: 'addAnotherEmployee',
        type: 'confirm',
        message: 'Would you like to add a team member?',
        default: false,        
    }
];

const employeeQuestions = prompt => {
    console.log(prompt);
    if (!prompt.employees) {
        prompt.employees = [];
    }
    //if (prompt.addEmployee === true) {
        return inquirer.prompt(questions)
        .then(employeeData => {
            prompt.employees.push(employeeData);
            if(employeeData.addAnotherEmployee) {
                return employeeQuestions(prompt);
            } else {
                return prompt
            }
        })
    //}
}

const promptUser = () => {
    return inquirer.prompt({
            name: 'addEmployee',
            type: 'confirm',
            message: 'Would you like to add a team member?',
            default: false,        
        })
//         .then(answers => {
//             if (answers.addEmployee === true) {
//                return employeeQuestions();
//             } else {
//             console.log('Goodbye!');

//             return
//             }
//         })
}

promptUser()
    .then(answers => {
        console.log(answers);
        if (answers.addEmployee === true) {
            return employeeQuestions(answers);
        }
    })
    .then(employeeData => {
        console.log(employeeData);
    })
    //.then(employeeQuestionsResponse => {
      //  console.log(employeeQuestionsResponse);
        //return
    //})
    // promptUser()
    // .then(employeeQuestions(prompt))
    // .then(portfolioData => {
    //   return generatePage(portfolioData);
    // })
    // .then(pageHTML => {
    //   return writeFile(pageHTML)
    // })
    // .then(writeFileResponse => {
    //   console.log(writeFileResponse);
    //   return copyFile();
    // })
    // .then(copyFileResponse => {
    //   console.log(copyFileResponse);
    // })
    // .catch(err => {
    //   console.log(err);
    // })
  
  




// `AS A manager
// I WANT to generate a webpage that displays my team's basic info
// SO THAT I have quick access to their emails and GitHub profiles``

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
