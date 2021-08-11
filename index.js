//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
const chalk = require('chalk')
class CrewCandidate {
  constructor(name, mass, scores) { //scores = [testresults]
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }
  addScore(newScore) {
    this.scores.push(newScore);
  }

  getAverage() {
    let sum = 0;
    for (let i = 0; i < this.scores.length; i++) { sum += this.scores[i] };
    let avg = sum / this.scores.length;
    return Math.round(avg * 10) / 10;
  }
}


let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
console.log(chalk.cyanBright.underline("Part 1"));
crew = [bubbaBear, merryMaltese, gladGator]
for (let i = 0; i < crew.length; i++) {
  console.log(crew[i])
}

console.log(chalk.cyanBright.underline("Part 2"));
bubbaBear.addScore(83);
console.log(`${bubbaBear.name}'s updated scores are ${bubbaBear.scores}.`);


/*
PART 3

Now that we can add scores to our candidates' records, we need to be able to evaluate their fitness for our astronaut program. Let's add two more methods to CrewCandidate---one to average the test scores and the other to indicate if the candidate should be admitted.

*/

console.log(bubbaBear.getAverage());
console.log(merryMaltese.getAverage());
//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

module.exports = CrewCandidate;