const Intern = require('../lib/Intern.js');

const testObject = {
    name: 'Frank',
    id: 1,
    email: 'frank@gmail.com',
    school: 'Hogwarts',
}


test('creates an intern object', () => {
    const intern = new Intern(testObject);

    expect(intern.name).toBe('Frank');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.role).toBe('Intern');

    expect(intern.school).toEqual(expect.any(String));
})

test('gets interns name', () => {
    const intern = new Intern(testObject);

    expect(intern.getName()).toEqual(expect.stringContaining(intern.name.toString()));
})

test("gets intern's id", () => {
    const intern = new Intern(testObject);

    expect(intern.getId()).toEqual(intern.id);
})

test("gets intern's email", () => {
    const intern = new Intern(testObject);

    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email.toString()));
})

test("gets intern's role/occupation", () => {
    const intern = new Intern(testObject);

    expect(intern.getRole()).toEqual(expect.stringContaining(intern.role.toString()));
})

test("gets intern's github username ", () => {
    const intern = new Intern(testObject);

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
})