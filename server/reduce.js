const totals = [1,2,3,4];

console.log('#############FOR#############');
let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum += element;
}
console.log(sum);

console.log('#############REDUCE#############');

const rta = totals.reduce((sum, element) => sum + element, 0);
console.log(rta);