function roleCheck (employee) {
    if (employee.role === "Manager") {
        return `
        Office Number: ${employee.getOfficeNumber()}
        `
    } else if ( employee.role === "Engineer") {
        return `
        GitHub: <a class="card-link" href="https://github.com/${employee.github}">${employee.github}</a>
        `
    } else if (employee.role === "Intern") {
        return `
        School: ${employee.getSchool()}
        `
    }
}
function generateMain(employeeArr) {
    return `
    <main class="container">
        <div class="row d-flex justify-content-around flex-wrap">
            ${employeeArr
            .map(employee => {
            return `
            <div class="card col-12 col-md-4 col-xl-3 shadow p-3 mb-5 bg-body rounded">
                <div class="card-header bg-dark text-light">
                    <h2 class="card-title">${employee.getName()}</h2>
                    <h3 class="card-subtitle">${employee.getRole()}</h3>
                </div>
                <div class="card-body">
                    <p class="card-text">ID: ${employee.getId()}</p>
                    <p class="card-text">Email: <a class="card-link" href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
                    <p class="card-text">${roleCheck(employee)}</p> 
                
                </div>
            </div>
            `;
            })
            .join('')}
        </div>
    </main>
    `
}



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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <link rel="stylesheet" href=".style.css">
    </head>

    <body>
        <header>
        <h1 class="bg-dark text-light text-center">My Team</h1>
        </header>

        ${generateMain(employeeArr)}
       

        <footer class="footer fixed-bottom container text-center py-3">
            <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Casey Arrington</h3>
        </footer>
    </body>
    </html>
    `
}