// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console
//   `${name} moving to ${topSpeed}`

class SpaceShip {
  constructor(name, topSpeed) {
    this.name = name;
    this.topSpeed = topSpeed;
  }

  //class method
  accelerate() {
    const { name, topSpeed } = this;
    console.log(`${name} moving to ${topSpeed}`);
  }
}

// 2. Call the constructor with a couple ships,
// and call accelerate on both of them.

const enterprise = new SpaceShip("USS Enterprise", 3300);
const endeavour = new SpaceShip("Endeavour", 1800);
const redDwarf = new SpaceShip("Red Dwarf", 200000);

enterprise.accelerate();
endeavour.accelerate();
redDwarf.accelerate();
