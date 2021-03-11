function introduction(name){
    return(`Hi, my name is ${name}.`);
}

function introductionWithLanguage(name, language) {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
let a = introduction("Josh");
let b = introductionWithLanguage("Josh", "Ember.js");
let c = introductionWithLanguageOptional("Josh");
console.log(a);
console.log(b);
console.log(c);