const Employee = require('../lib/Employee.js');

//jest.mock('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Frank', 3, 'frank@gmail.com');

    expect(employee.name).toBe('Frank');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toBe('Employee');
})

test('gets employees name', () => {
    const employee = new Employee('Frank', 3, 'frank@gmail.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
})

test("gets employee's id", () => {
    const employee = new Employee('Frank', 3, 'frank@gmail.com');

    expect(employee.getId()).toEqual(employee.id);
})

test("gets employee's email", () => {
    const employee = new Employee('Frank', 3, 'frank@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
})

test("gets employee's role/occupation", () => {
    const employee = new Employee('Frank', 3, 'frank@gmail.com');

    expect(employee.getRole()).toEqual(expect.stringContaining(employee.role.toString()));
})