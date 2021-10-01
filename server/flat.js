const matriz = [
    [1,2,3], //0
    [4,5,6, [10, 11]], 
    [7,8,9]
];

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = array[j];
        newArray.push(element);        
    }    
}
console.log('For', newArray);

const flatArray = (item, res = []) => {
    if(!Array.isArray(item)) {
        return res.push(item);
    } else {
        item.forEach((elem) => {
            flatArray(elem, res);
        });
    }
    return res;
}

console.log('Recursividad', flatArray(matriz));

const rta2 = matriz.flat(3);
console.log('flat', rta2);