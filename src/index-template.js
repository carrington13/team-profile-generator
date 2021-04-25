function generateCards(employeeArr) {
    // take data Arr of each object
    
    // use their data to populate cards


    // return created cards back
}

// teamProfiles.forEach(member => {
        
//     let mainEl = document.querySelector("main");
//     let cardContainerEl = document.createElement("div");
//     let cardTitle = document.createElement("h2");
//     let cardSubTitle = document.createElement("h3");
//     let cardBody = document.createElement("div");
//     let cardTextone = document.createElement("p");
//     let cardTexttwo = document.createElement("p");

//     cardTitle.textContent = member.name;
//     cardSubTitle.textContent = member.role;
//     cardTextone.textContent = member.email;
//     if (member.role === "Engineer") {
//         cardTexttwo.textContent = 'Github:' + member.github;
//     } else if (member.role === "Intern") {
//         cardTexttwo.textContent = 'School:' + member.school
//     } else if (member.role === "Manager") {
//         cardTexttwo.textContent = 'Office Number: ' + member.officeNumber;
//     }

//     cardBody.appendChild(cardTextone);
//     cardBody.appendChild(cardTexttwo);

//     cardContainerEl.appendChild(cardTitle);
//     cardContainerEl.appendChild(cardSubTitle);
//     cardContainerEl.appendChild(cardBody);

//     mainEl.appendChild(cardContainerEl);
// })


module.exports = employeeData => {
    const employeeArr = employeeData;

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Team Members</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./assets/css/style.css">
    </head>

    <body>
        <header>
        <h1>My Team</h1>
        </header>

        <main>
            ${generateCards(employeeArr)}
        </main>

        <footer class="container text-center py-3">
            <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${manager.name}</h3>
        </footer>
    </body>
    </html>
    `
}