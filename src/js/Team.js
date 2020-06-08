import Character from './Character';

export default class Team {
  constructor(name) {
    this.name = name;
    this.members = new Set();
  }

  add(personal) {
    if (this.members.has(personal)) {
      throw new Error('Такой персонаж уже в команде');
    }
    this.members.add(personal);
  }

  addAll(...rest) {
    rest.forEach((item) => this.members.add(item));
  }

  toArray() {
    return Array.from(this.members);
  }
}

const team = new Team('Characters');
const bow = new Character('bow');
const sword = new Character('sword');
const mage = new Character('mage');

// team.add(bow);
// team.add(sword);
// team.add(mage);
// console.log(team);

// team.add(mage);
// console.log(team);


team.addAll(bow, sword, mage, bow);

console.log(team.toArray());