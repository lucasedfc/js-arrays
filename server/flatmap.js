const users = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
  { userId: 2, username: "Mike", attributes: ["Lovely"] },
  { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
];

const rta = users.map((user) => user.attributes).flat();

console.log("Map + Flat", rta);

const rta2 = users.flatMap((user) => user.attributes);
console.log("Flatmap", rta2);

/****************************************/

const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 14),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 3",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
  tertiaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 19),
      endDate: new Date(2021, 1, 1, 19, 30),
      title: "Cita 5",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 20, 15),
      title: "Cita 6",
    },
  ],
};

let result = [];
Object.keys(calendars).forEach((element) => {
  result = result.concat(calendars[element].flatMap((date) => date.startDate));
});

console.log('Option1', result);


/**************** */

const rta3 = Object.values(calendars).flatMap(item => {
    return item.map(date => date.startDate);
});

console.log('Option 2', rta3);