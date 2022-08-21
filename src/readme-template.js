// create the about section
var generateBadge= function(lic){
  if (lic=='MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }else if('GNU'){
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }else{
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
}
var generateLic = function(github,lic) {
  let gitname=github
  if (lic=='MIT') {
   
   return  `

    Copyright (c) 2022 ${gitname}
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    `;
  }else if(lic=='GNU'){
    `GNU GENERAL PUBLIC LICENSE
    Version 3, 29 June 2007

Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.

         Preamble

`
  }else{
    return "The following project is covered by the Apache 2.0 License Agreement."

  }
};

// create the projects section


// export function to generate entire page
module.exports = templateData => {
  // destructure page data by section
  //const { projects, about, ...header } = templateData;

  return `

${generateBadge(templateData.license)}

# ${templateData.title}

## Description

${templateData.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${templateData.installation}

## Usage

${templateData.usage}

## License 

${generateLic(templateData.githubUsername,templateData.license)}

## Contributing 

${templateData.contribution}

## Tests

${templateData.test}

## Questions

[Github](${templateData.githubUsername})

[Email](${templateData.emailAddress})





#
  `;
};
