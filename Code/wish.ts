function wish(person: string){
    return "Hello,"+ person;
}

let user = "Nalini Reddy";

document.body.innerHTML = wish(user);


//without string annotation
function wish(person){
    return "Hello,"+ person;
}

let user = "Nagendra Prasad";

document.body.innerHTML = wish(user);