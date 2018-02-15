
/*
1. Uncomment the following code that declares an object literal. 
a) Write a line of code that will display properties of this object in a console message. e.g. it should output 'England is a country in Europe. The capital city of England is London.'
b) Add another property to store the population of England (53000000). test this works
*/
///////////////////////////////////
///////////ANSWER 1////////////////
///////////////////////////////////

// const country={
// 	name : "England",
// 	capital : "London",
// 	continent : "Europe",
//   population: 53000000
// }


// console.log(`${country.name} is a country in ${country.continent} . The capital city of ${country.name} is ${country.capital}`)


/*
2. Have a look at the lecture slides for information on how to use a class to create objects. Create a Country class. The constructor function should accept arguments specifying the object properties and return an object. Here's some example code that uses a class to create Country objects.
*/

///////////////////////////////////
///////////ANSWER 2////////////////
///////////////////////////////////

// class Country {
//   constructor (name, capital,continent, population){
//     this.name=name;
//     this.capital=capital;
//     this.continent=continent;
//     this.population=population;

// function getFullDetails(){
//   console.log(`${country1.name} has a population of ${country1.population}`)  

// const country1=new Country( "England","London", "Europe", 53000000);
// const country2=new Country( "USA","Washington", "N. America", 321000000);

// console.log(`${country1.name} has a population of ${country1.population}`)
// console.log(`${country2.name} has a population of ${country2.population}`)



// 3. Can you add a method to the Country class. This method should be called getFullDetails. It should return a string of the country's full details. Here's some example code showing how it could be used. 

// console.log(country1.fullDetails());

// console.log(`${country.name} is a country in ${country.continent} . The capital city of ${country.name} is ${country.capital}`)

 // England is a country in Europe. The capital city of England is London. England has a population of 53000000.


/*
4. Create a number of different Country objects and store them in an array. Use a loop to output each of the country details in the console. 
*/

///////////////////////////////////
///////////ANSWER 4////////////////
///////////////////////////////////
// class Country {
//   constructor (name, capital,continent, population){
//     this.name=name;
//     this.capital=capital;
//     this.continent=continent;
//     this.population=population;
//   }
// }

// let countries =[];
// countries.push (new Country("Spain","Madrid","Europe","75000000"));
// countries.push (new Country("Brazil","Rio","S.America","100000000"));
// countries.push (new Country("Japan","Tokyo","Asia","120000000"));
// countries.push (new Country("Thailand","Bangkok","Asia","90000000"));
// countries.push (new Country("Australia","Canberra","Oceania","130000000"));

// countries.forEach(function(country){
// console.log(`${country.name} has a population of ${country.population}`);



// })

/*
5. Write a program that will prompt the user for the name of a continent. The program should then output the countries from that continent. 
*/

///////////////////////////////////
///////////ANSWER 5////////////////
///////////SLIDE 13////////////////
// class Country {
//   constructor (name, capital,continent, population){
//     this.name=name;
//     this.capital=capital;
//     this.continent=continent;
//     this.population=population;
//   }
// }

// let countries =[];
// countries.push (new Country("Spain","Madrid","Europe","75000000"));
// countries.push (new Country("Brazil","Rio","S.America","100000000"));
// countries.push (new Country("Japan","Tokyo","Asia","120000000"));
// countries.push (new Country("Thailand","Bangkok","Asia","90000000"));
// countries.push (new Country("Australia","Canberra","Oceania","130000000"));


// let userContinent = prompt("Please Enter a Continent: ");

// let matchingContinents=countries.filter(function(continentChoice){

//     if (continentChoice.continent===userContinent){
//       return true;
//     }
//   return false;
//   })

// console.log(matchingContinents);

/*
6. Modify question 5 so that the program also prompts for a minimum population. The program should then output the countries that match both the specified continent and minimum population e.g. if the user enters 'Europe' and 60000000 only France should be displayed. 
*/
///////////////////////////////////
///////////ANSWER 6////////////////
///////////SLIDE ??////////////////

class Country {
  constructor (name, capital,continent, population){
    this.name=name;
    this.capital=capital;
    this.continent=continent;
    this.population=population;
  }
}

let countries =[];
countries.push (new Country("Spain","Madrid","Europe","75000000"));
countries.push (new Country("Brazil","Rio","S.America","100000000"));
countries.push (new Country("Japan","Tokyo","Asia","120000000"));
countries.push (new Country("Thailand","Bangkok","Asia","90000000"));
countries.push (new Country("Australia","Canberra","Oceania","130000000"));


let userContinent = prompt("Please Enter a Continent: ");

let matchingContinents=countries.filter(function(continentChoice){

    if (continentChoice.continent===userContinent){
      return true;
    }
  return false;
  })



let userPopulation= prompt ("Please a minimum population to search:");

let matchingPopulation=countries.filter(function(populationChoice){

    if (populationChoice.population>userPopulation){
      return true;
    }
  return false;
  })


console.log(matchingContinents);
/*


7. Uncommet the following code. Write some additional code that will:
a) Call the functions getStudentInfo, getPassMark and getPassingStudents, and then print out the list of passing students in the console.
b) Create an additional function called printStudents. printStudents will need to accept a single argument, an array of student objects. The function will then print the name of each student in this array to the console. The function doesn't need to return anything.
c) Modify the answer to (a) so that you use the printStudents function. 
*/

/*
class Student {
  constructor(firstName, lastName, mark) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.mark = mark;
  }
  getFullName(){
  	return `${this.firstName} ${this.lastName}`
  }
  hasPassed(passMark){
  	if(this.mark>=passMark){
  		return true;
  	}
  	return false;
  }

}


function getStudentInfo(){
	const students=[];
    const howMany=parseInt(prompt("How many students details would you like to enter?"));
    for(let i=0;i<howMany;i++){
        const firstName = prompt("Enter a first name");
        const lastName = prompt("Enter a last name");
        const mark = parseInt(prompt(`What mark did ${firstName} ${lastName} get?`));
        const student = new Student(firstName, lastName, mark);
        students.push(student);
    }
    return students;
}

function getPassMark(){
	const passMark = parseInt(prompt("What is the pass mark?"));
	return passMark;
}

function getPassingStudents(arrOfStudents,passMark)
{
	const passingStudents = arrOfStudents.filter(function(student){
		if(student.hasPassed(passMark)){
			return true;
		}
		return false;
	});
	return passingStudents;
}

*/
