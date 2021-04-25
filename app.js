const inquirer = require('inquirer');
const {writeIndexFile,  copyCssFile } = require('./utils/generate-site.js');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generatePage = require('./src/index-template.js');


const testEmployees = [
    {
        employeePosition: 'Manager',
        name: 'Casey Arrington',
        id: '1',
        email: 'caseyarrington13@gmail.com',
        officeNumber: '1',
        addAnotherEmployee: true
      },
      {
        employeePosition: 'Engineer',
        name: 'Bob',
        id: '2',
        email: 'bob@bob.com',
        github: 'bobcodes21',
        addAnotherEmployee: true
      },
      {
        employeePosition: 'Intern',
        name: 'Sarah',
        id: '3',
        email: 'sarah@mtsu.edu',
        school: 'MTSU',
      }
];

// Array containing all questions for inquirer/ employee data
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
        // Validate code provided/copied from stackOverflow. check README for further credits
        validate: function(email)
        {
            // Regex mail check (return true if valid mail)
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
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
            message: "Would you like to add members to your team?",
            default: false,        
        })
}

const createEmployees = (employeeData) => {
    // Set employeeArr to employeeData property with value of arr of employees
    const employeeDataArr = employeeData.employees;
    //console.log(employeeDataArr);
    console.log(employeeData);
    // push all 'new Objects' here
    employeeData.employeeArr = [];

    // // cycle through array of employees Data
    employeeDataArr.forEach(employee => {
        // if their employeePosition matches....
        if (employee.employeePosition === 'Manager') {
            // create a new object with that employees data and push it to the employeeArr
            employeeData.employeeArr.push(new Manager(employee));
        } else if (employee.employeePosition === 'Engineer') {

            employeeData.employeeArr.push(new Engineer(employee));
        } else if (employee.employeePosition === 'Intern') {
  
            employeeData.employeeArr.push(new Intern(employee));
        }
        
    })
    console.log(employeeData.employeeArr);
    return employeeData.employeeArr;
    
}

promptUser()
    .then(answers => {
        if (answers.addEmployee === true) {
            return employeeQuestions(answers);
        } else {
            console.log("Farewell!");
        }
    })
    .then(employeeData => {
        return createEmployees(employeeData);
    })
    .then(employeeArr => {
        console.log(employeeArr);
        return generatePage(employeeArr);
    })
    .then(pageHTML => {
         return writeIndexFile(pageHTML);
    }) 
//     .then(writeJsResponse => {
//         console.log(writeJsResponse);
//         return copyIndexFile();
//     })
//     .then(copyIndexResponse => {
//         console.log(copyIndexResponse);
//         return copyCssFile();
//     })
//     .then(copyCssResponse => {
//         console.log(copyCssResponse);
//    })
    .catch(err => {
        console.log(err);
    })





// promptUser()
// .then(answers => {
//     //console.log(answers);
//     createEmployees(testEmployees)
// })
// .then(employeeArr => {
//     console.log(employeeArr)
//     //generateScript(employeeArr);
// })
// //.then(response => {
//    //console.log(response);
// //})