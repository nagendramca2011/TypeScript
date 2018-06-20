function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Nagendra", lastName: "Prasad" };
document.body.innerHTML = greeter(user);
