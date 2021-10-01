const pets = ['cat', 'dog', 'rabbit'];

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if(element === 'dog') {
        includeInArray = true;
        break;
    }    
}

console.log(includeInArray);

/*********INCLUDES */

const rta2 = pets.includes('dog');
console.log('includes', rta2);