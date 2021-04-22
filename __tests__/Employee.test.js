const Employee = require('../lib/Employee.js');

//jest.mock('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Frank', 3, 'frank@gmail.com');

    expect(employee.name).toBe('Frank');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})