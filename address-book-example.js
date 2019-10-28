const loadPersons = () => {
  // тук симулираме заявка към базата която отнема известно време да се случи
  console.log("loading starts");
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("loading ends");
      const personsFromDb = [{ name: "Ilko" }, { name: "Alex" }];
      resolve(personsFromDb);
    }, 1000);
  });
};

let state = { data: [] };

async function componentDidMount() {
  const persons = await loadPersons();
  state = [{ data: persons }];
}

function renderPersons() {
  const data = state;

  if (data.length === 0) {
    return "Loading...";
  }

  //return data.map((person, index) => (key = index > person.name));
  return data.map(person => person.name);
}

console.log(renderPersons());
