const barker = (state: { name: string }) => ({
  bark: () => console.log(`woof from ${state.name}`),
});

const pilou = barker({ name: "Pilou" });
const fred = barker({ name: "Fred" });

pilou.bark(); // woof from Pilou
fred.bark(); // woof from Fred

const driver = (state: { position: number; speed: number }) => ({
  drive: () => (state.position = state.position + state.speed),
});

const philippe = { position: 25, speed: 10 };

const prius = driver(philippe);

prius.drive();

console.log(philippe); // { position: 35, speed: 10 }
