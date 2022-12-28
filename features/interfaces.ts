// Fixing long annotations with Interface
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 30,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

// Interface sẽ ràng buộc tất cả thuộc tính được miêu tả trong đó
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
