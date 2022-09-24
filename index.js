
const inquirer = require('inquirer');
const questions = ["what is your employees name",
"what is your employees email",
"what is your employees Role",
 "what is your employees office number", 
 "what is your employees GitHub", 
 "what is your employees School",
];
const Manager = require('./lib/manager');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const { default: ListPrompt } = require('inquirer/lib/prompts/list');

let employeeList = [];
let id = 1;



function generateManager() {
    
inquirer
  .prompt([
    {
      type: 'input',
      message: "What is your manager's name?",
      name: 'managerName',
    },
    {
      type: 'input',
      message: "What is your manager's email?",
      name: 'managerEmail',
    },
    {
      type: 'input',
      message: "What is your manager's office Number?",
      name: 'managerNumber',
    },
    
  ])
  .then(function(response){
 console.log(response.managerName);
 let manager = new Manager(response.managerName, id, response.managerEmail, response.managerNumber);
 console.log(manager)
 employeeList.push(manager);
 id ++;
 generateEmployees()
  } 
  );
}

function generateEngineer() {
    
  inquirer
    .prompt([
      {
        type: 'input',
        message: "What is your engineer's name?",
        name: 'engineerName',
      },
      {
        type: 'input',
        message: "What is your engineer's email?",
        name: 'engineerEmail',
      },
      {
        type: 'input',
        message: "What is your engineer's github?",
        name: 'engineerGithub',
      },
      
    ])
    .then(function(response){
   let engineer = new Engineer(response.engineerName, id, response.engineerEmail, response.engineerGithub);
   employeeList.push(engineer);
   id ++;
   generateEmployees()
    } 
    );
  }

  function generateIntern() {
    
    inquirer
      .prompt([
        {
          type: 'input',
          message: "What is your intern's name?",
          name: 'internName',
        },
        {
          type: 'input',
          message: "What is your intern's email?",
          name: 'internEmail',
        },
        {
          type: 'input',
          message: "What is your intern's school?",
          name: 'internSchool',
        },
        
      ])
      .then(function(response){
     let intern = new Intern(response.internName, id, response.internEmail, response.internSchool);
     employeeList.push(intern);
     id ++;
     generateEmployees()
      } 
      
      );
    }

  let looper = 1;
  function generateEmployees(){

      inquirer.prompt([
        {
          type: 'list',
          message: 'what would you like to do?',
          name: 'userChoice',
          choices: ['Add a manager', 'Add an engineer', 'Add an intern', 'End']
        }
      ])
      .then( function(response){
        if(response.userChoice == 'Add a manager'){
          generateManager();
        }
        else if(response.userChoice == 'Add an engineer'){
          generateEngineer();
        }
        else if(response.userChoice == 'Add an intern'){
          generateIntern();
        }
        else {
          process.exit(0);
        }
      })
    console.log(employeeList);
  }
  generateEmployees();