const elements = ['Fire', 'Air', 'Water'];

const separator = '--';
let rta = '';

for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    if(index < elements.length -1) {
        rta = rta + element + separator;    
    } else {
        rta = rta + element;
    }
}
console.log('For', rta);

const rta2 = elements.join(separator);
console.log('Join', rta2);

const title = 'Curso de manipulacion de Arrays';

const rta3 = title.split(' ').join('-').toLowerCase();
console.log(rta3);