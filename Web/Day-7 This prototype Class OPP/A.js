function person(name, age){
    this.name = name;
    this.age = age;
}

var firstOne = new person("Sino Plaza", 27);
var secondOne = new person("Times Square", 25);



//var person = {
//    properties : [
//        {name: "Sino plaza", age:27},
//        {name: "Times square", age:25}
//    ],
//    propertiesMerge : function(name, age){
//        console.log(name + age);
//    },
//    
//    propertiesInfo:function () {
//        console.log(this.properties[name] + " " + this.properties[age]);
//    }
//}
//
//person.propertiesInfo();

//function person(propertiesName, propertiesAge) {
//    this.firstName = first;
//    this.lastName = last;
//    this.age = age;
//    this.eyeColor = eye;
//   }
//   
//   var myFather = new person("John", "Doe", 50, "blue");
//   var myMother = new person("Sally", "Rally", 48, "green");
//
//const person = function(propertiesName, propertiesAge){
//    this.propertiesName = name;
//    this.propertiesAge = age;
//}
//
//var firstOne = new person("Sino Plaza", 27);
//var secondOne = new person("Times Square", 25);
//
//function person(nameProperty, propertiesAge){
//    this.nameProperty = name;
//    this.propertiesAge = age;
//}
//
//var firstOne = new person("Sino Plaza", 27);
//var secondOne = new person("Times Square", 25);
//
//console.log(person)