const Engineer = require('../lib/Engineer.js');

const testObject = {
    name: 'Frank',
    id: 1,
    email: 'frank@gmail.com',
    github: 'frankicode',
}


test('creates an engineer object', () => {
    const engineer = new Engineer(testObject);

    expect(engineer.name).toBe('Frank');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.role).toBe('Engineer');

    expect(engineer.github).toEqual(expect.any(String));
})

test('gets engineers name', () => {
    const engineer = new Engineer(testObject);

    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name.toString()));
})

test("gets engineer's id", () => {
    const engineer = new Engineer(testObject);

    expect(engineer.getId()).toEqual(engineer.id);
})

test("gets engineer's email", () => {
    const engineer = new Engineer(testObject);

    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
})

test("gets engineer's role/occupation", () => {
    const engineer = new Engineer(testObject);

    expect(engineer.getRole()).toEqual(expect.stringContaining(engineer.role.toString()));
})

test("gets engineer's github username ", () => {
    const engineer = new Engineer(testObject);

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
})