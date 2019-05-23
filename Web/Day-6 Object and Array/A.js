/*var ourClass = {
    students: {
        jimmy: {
            background:"accountant",
            studied:"USA"
        },
        corah: {
            background:"student",
            studied:"HK"
        }
    }
}

var jimmyAndCorah = [];
  jimmyAndCorah.push(`Jimmy studied at :  ${ourClass.students.jimmy.studied}`, `Corah studied at : ${ourClass.students.corah.studied}`)

console.log(jimmyAndCorah);*/


var asia = {
        countries: {
            India: {
                Mumbai: {
                    population: 18.5
                }
            },
            China: {
                Beijing: {
                    population: 21.5
                },
                "Hong Kong": {
                    population: 7.3
                },
            }
        }
    };
    asia.countries.India.Mumbai.population; //Number 1
    //asia.countries.China.Beijing.population; // Number 2
    //asia.countries.China["Hong Kong"].population; //Number 3


    var familyBankValues = {

        familyMembers: {
    
            Mother: {
    
                "account number": 8096291,
    
                accountBalance: 10000000
    
            },
    
            Father: {
    
                "account number": 8096292,
    
                accountBalance: 9999999
    
            },
    
            Sister: {
    
                "account number": 8096293,
    
                accountBalance: 10000
    
            },
    
            "Step Brother": {
    
                "account number": 8096292,
    
                accountBalance: 15000
    
            }
    
        }
    
        }
        familyBankValues.familyMembers.Mother["account number"]//Number 4    
        familyBankValues.familyMembers.Father.accountBalance//Number 5
        var newStepBrother = [];
            newStepBrother.push(familyBankValues.familyMembers["Step Brother"],familyBankValues.familyMembers["Step Brother"]["account number"],familyBankValues.familyMembers["Step Brother"].accountBalance)
        
        console.log(newStepBrother);