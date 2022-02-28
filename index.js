// global employee variable is empty array
let employeeArray = [];

// requirements: packages
const fs = require("fs");
const inquirer = require("inquirer");

// requirements: employee, manager, engineer, intern
const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

// start employee profile generator - start inquirer
function generateEmployee() {
  inquirer
    .prompt([
      //questions here
      {
        name: "role",
        type: "list",
        message: "What is the role of this new employee?",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        name: "name",
        type: "input",
        message: "Enter employee's full name",
      },
      {
        name: "email",
        type: "input",
        message: "Enter employee's email address",
      },
      {
        name: "officeNumber",
        type: "input",
        message: "Enter Manager's office number",
        when: (answers) => answers.role == "Manager",
      },
      {
        name: "gitHub",
        type: "input",
        message: "Enter link to Engineer's github profile",
        when: (answers) => answers.role == "Engineer",
        validate: function (input) {
          const valid = input.startsWith("https://");
          return valid || "please enter a valid website that includes https://";
        },
      },
      {
        name: "school",
        type: "input",
        message: "Enter Intern's school",
        when: (answers) => answers.role == "Intern",
      },
      {
        name: "addNew",
        type: "confirm",
        message: "Would you like to add another employee?",
      },
    ])

    // promise
    .then((answers) => {
      // check for employee ID
      if (answers.role === "Manager") {
        // if ID is 'Manager' create new manager object, and push into Employee array
        let manager = new Manager(answers.id, answers.name, answers.email, answers.officeNumber);
        employeeArray.push(manager);
      }

      if (answers.role === "Engineer") {
        // if role is 'Engineer' create new engineer object, and push into Employee array
        let engineer = new Engineer(answers.id, answers.name, answers.email, answers.gitHub);
        employeeArray.push(engineer);
      }

      if (answers.role === "Intern") {
        // if role is 'Intern' create new intern object, and push into Employee array
        let intern = new Intern(answers.id, answers.name, answers.email, answers.school);
        employeeArray.push(intern);
      }

      // if user wants to create another employee, call this function again
      if (answers.addNew === true) {
        generateEmployee();
      } else generateHtml();
    });
}

//create an HTML string literal. Note, if user doesn't continue, generate HTML function
const generateHtml = ({}) => {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>My Team</title>
      <!-- bulma styling -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
  </head>
  
  <body>
      <header class="hero has-background-primary-dark is-small">
          <div class="hero-body">
              <p class="has-text-centered has-text-white title">
                  My Team
              </p>
          </div>
      </header>

    <body>
    <section class="columns container is-centered is-multiline m-4">
        ${generateEmployeeCards()}
    </section>
    </body>
    </html>
    `;
};
// inside of HTML loop through employees array to generate divs for cards
function generateEmployeeCards() {
  // loop though employe array for cards
}

// write employees to html file
fs.writeFile("teamProfile.html", generateHtml(employeeArray), (err) => (err ? console.error(err) : console.log("you made a Team Profile!")));
