const Manager = require('../lib/Manager.js');

const testObject = {
    name: 'Frank',
    id: 1,
    email: 'frank@gmail.com',
    officeNumber: 101
}


test('creates an manager object', () => {
    const manager = new Manager(testObject);

    expect(manager.name).toBe('Frank');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.role).toBe('Manager');

    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test('gets managers name', () => {
    const manager = new Manager(testObject);

    expect(manager.getName()).toEqual(expect.stringContaining(manager.name.toString()));
})

test("gets manager's id", () => {
    const manager = new Manager(testObject);

    expect(manager.getId()).toEqual(manager.id);
})

test("gets manager's email", () => {
    const manager = new Manager(testObject);

    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()));
})

test("gets manager's role/occupation", () => {
    const manager = new Manager(testObject);

    expect(manager.getRole()).toEqual(expect.stringContaining(manager.role.toString()));
})

test("gets manager's office number ", () => {
    const manager = new Manager(testObject);

    expect(manager.getOfficeNumber()).toEqual(manager.officeNumber);
})