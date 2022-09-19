function getFullName(person) {
    return person.firstname + " " + person.lastname;
}
var obj = {
    firstname: 'John',
    lastname: 'Doe',
    display: function () { return "Hello"; }
};
console.log(getFullName(obj));
