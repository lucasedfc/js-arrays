const elements = [1, 1, 2, 2];
const otherElements = [3, 3, 4, 4];

const newArray = [...elements];

for (let index = 0; index < otherElements.length; index++) {
    const element = otherElements[index];
    newArray.push(element);    
}
console.log('For', newArray);

const rta2 = elements.concat(otherElements);
console.log('Concat', rta2);

const rta3 = [...elements, ...otherElements];
console.log('Spread', rta3);

elements.push(...otherElements);
console.log('Push',elements);