// send all data from inquirer to an array here upon creation
const teamMembers;

teamMembers.forEach(member => {
    // Parent Div
    let mainEl = document.querySelector('main');
    // card body
    let card = document.createElement('div');
    // Element for Name
    let cardTitle = document.createElement('h2');

    // Element for Role
    let cardSubTitle = document.createElement('h3');

})

card.innerHtml = `
<h2>${member.name}</h2>
<h3>${member.role}</h3>

`