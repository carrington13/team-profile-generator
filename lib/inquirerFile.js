const inquirer = require('inquirer');

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
];

function askingQuestions () {
    inquirer
        .prompt({
            name: 'addEmployee',
            type: 'confirm',
            message: 'Would you like to add a team member?',
            default: false,        
        })
        .then(( {addEmployee} ) => {
            console.log(addEmployee);
            // if (addEmployee === false || 'n') {
                
            //     return
            // }

            // inquirer
            //     .prompt(questions)
            //     .then(answers => {
            //         console.log(answers);
            //     });
        })
        .catch(error => {
            if(error.isTTYError) {
              console.log("Prompt couldn't be rendered in the current environment");
            } else {
              console.log('Something else went wrong');
              console.log(error);
            }
          })
}

async function init() {
    await askingQuestions();
}

module.exports = init();