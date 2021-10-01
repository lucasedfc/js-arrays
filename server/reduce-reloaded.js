const numbers = [1, 3, 2, 3, 3, 1, 10];

const rta = numbers.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1;
  }
  return obj;
}, {});

console.log(rta);



const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "medium",
    },
  ];

  const rta2 = data.map(item => item.level)
  .reduce((obj, item) => {
      if(!obj[item]) {
          obj[item] = 1;
      } else {
          obj[item] = obj[item] + 1;
      }
      return obj;
  }, {})

  console.log(rta2);
  console.log(data);


  /*********************/

  const students = [
    { name: 'Luis', score: 6 },
    { name: 'Maria', score: 9 },
    { name: 'Jose', score: 8 },
    { name: 'Juan', score: 4 },
    { name: 'Pamela', score: 3 },
    { name: 'Erika', score: 10 },
  ];
  
  const rta3 = students.reduce(
    (obj, { score }) => {
      if (score <= 5) {
        ++obj['1-5'];
      } else if (score <= 8) {
        ++obj['6-8'];
      } else if (score <= 10) {
        ++obj['9-10'];
      }
  
      return obj;
    },
    { '1-5': 0, '6-8': 0, '9-10': 0 }
  );

  console.log(rta3);