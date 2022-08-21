const inquirer = require('inquirer');
const generatePage = require('./src/readme-template');
const writeFile  = require('./utils/generate-site');

const promptUser = readMeData => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description for your project',

    },
    {
      type: 'input',
      name: 'installation',
      message: 'Add installation instructions',
      
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage instructions',
      
    },
    {
      type: 'input',
      name: 'contribution',
      message:'provide contribution instructions',

    },
    {
      type: 'input',
      name: 'test',
      message: 'provide testing instructions',

    },
    {
      type:'rawlist',
      name: 'license',
      message:'select a license option',
      choices:['MIT','GNU','Apache'],
      default:['MIT']


    },
    {
      type:'input',
      name: 'githubUsername',
      message:'add a github username',
    },
    {
      type: 'name',
      name: 'emailAddress',
      message: 'add an email address',
    },


  ]).then(readMeData=>
  generatePage(readMeData))
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    
  })
  .catch(err => {
    console.log(err);
  });
}


promptUser()
/*
//.then(readMeData=>
  generatePage(readMeData)
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    
  })
  .catch(err => {
    console.log(err);
  });*/
