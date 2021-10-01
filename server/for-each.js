const letters = ['a', 'b', 'c'];

// For Way
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log('For Way', element);
}

// For Each Way
letters.forEach(item => console.log('ForEach Way', item));