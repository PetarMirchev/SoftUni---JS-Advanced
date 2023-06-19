

//91/100


class JobOffers{
    constructor(employer, position){
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }


    jobApplication(candidates){
        //The method takes one argument: candidates (array of strings).
        candidates.map( c => {
            let [name, education, yearsExperience] = c.split("-");
            yearsExperience = Number(yearsExperience);

            //•	If the name of the current person is already present in jobCandidates array, 
            //update the old yearsExperience only if the current one is higher.
            let can = this.jobCandidates.find(ca => ca.name == name);

            if(can){
                if(can.yearsExperience < yearsExperience){
                    can.yearsExperience = yearsExperience;
                }
            } else {
                this.jobCandidates.push({name, education, yearsExperience});
            }
        });

        let result = [];
        this.jobCandidates.map(p => {
            result.push(p.name);
        });
        return `You successfully added candidates: ${result.join(', ')}.`;
    }



    jobOffer(chosenPerson){
  
        let [name, minimalExperience] = chosenPerson.split('-');
        minimalExperience = Number(minimalExperience);

        //o	If the name of the current person is not present in jobCandidates array, 
        // an error with the following message should be thrown:

        let player = this.jobCandidates.find(a => a.name == name);
        if(!player){
            throw new Error(`${name} is not in the candidates list!`);
        }

        //o	If the minimalExperience selected by the employer for a 
        // given person is more than the value recorded in the array jobCandidates, an error 
        if (chosenPerson.minimalExperience < this.jobCandidates.yearsExperience) {
            throw new Error(`${name} does not have enough experience as ${position}, minimum requirement is ${ minimalExperience} years.`);
        }

    
        // o	Otherwise, if the above conditions are not met, 
        // you must replace yearsExperience with the string "hired"
        //let status = "hired";
        //this.jobCandidates.push({name, education, yearsExperience});
        player.yearsExperience = 'hired';
       
        
        // o	Finally, you need to return the string in the following format:
        return `Welcome aboard, our newest employee is ${name}.`;

    }


    salaryBonus(name){
        let men = this.jobCandidates.find(a => a.name == name);
        if(!men){
            throw new Error(`${name} is not in the candidates list!`);
        }


        //•	If the education recorded in the jobCandidates array is Bachelor degree, 
        //return the following message: 
        if(men.education === "Bachelor"){
            return `${men.name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;// OK
        }

        if(men.education === "Master"){
            return `${men.name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
        }

        //•	If the education recorded in the jobCandidates array 
        //is different than Bachelor degree or Master degree, return the following message:
        return `${men.name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`; //OK  
    }


    candidatesDatabase(){
        if(this.jobCandidates.length === 0){
            throw new Error("Candidate Database is empty!");
        }

        //o	Otherwise, returns all candidates, 
        let result =[];
        result.push("Candidates list:");
        this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name)).map(e => result.push(`${e.name}-${e.yearsExperience}`));
        return result.join("\n");
    }
}



// let Jobs = new JobOffers ("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", 
// "Daniel Jones- Bachelor-18"]));



// let Jobs = new JobOffers ("Google", "Strategy Analyst");
//  console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
//  console.log(Jobs.jobOffer("John Doe-8"));
//  console.log(Jobs.jobOffer("Peter Parker-4"));
//  console.log(Jobs.jobOffer("John Jones-8"));


// let Jobs = new JobOffers ("Google", "Strategy Analyst");
//  console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
//  console.log(Jobs.jobOffer("John Doe-8"));
//  console.log(Jobs.jobOffer("Peter Parker-4"));
//  console.log(Jobs.salaryBonus("John Doe"));
//  console.log(Jobs.salaryBonus("Peter Parker"));


// let Jobs = new JobOffers ("Google", "Strategy Analyst");
//  console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5","Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
//  console.log(Jobs.jobOffer("John Doe-8"));
//  console.log(Jobs.jobOffer("Peter Parker-4"));
//  console.log(Jobs.jobOffer("Jordan Cole-4"));
//  console.log(Jobs.salaryBonus("Jordan Cole"));
//  console.log(Jobs.salaryBonus("John Doe"));
//  console.log(Jobs.candidatesDatabase());


// You successfully added candidates: John Doe, Peter Parker, Jordan Cole, Daniel Jones.
// Welcome aboard, our newest employee is John Doe.
// Welcome aboard, our newest employee is Peter Parker.
// Welcome aboard, our newest employee is Jordan Cole.
// Jordan Cole will sign a contract for Google, as Strategy Analyst with a salary of $40,000 per year!
// John Doe will sign a contract for Google, as Strategy Analyst with a salary of $50,000 per year!
// Candidates list:
// Daniel Jones-18
// John Doe-hired
// Jordan Cole-hired
// Peter Parker-hired



let Jobs = new JobOffers ("Google", "Strategy Analyst");
 console.log(Jobs.jobApplication([]));

 console.log(Jobs.candidatesDatabase());