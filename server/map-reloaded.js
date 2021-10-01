const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];
console.log('Original', orders);
const totals = orders.map(item => item.total)
console.log('rta', totals);


const totals3 = orders.map(item => {
    return {
        ...item,
        tax: .19
    };
})

console.log('rta3', totals3);
console.log('original', orders);