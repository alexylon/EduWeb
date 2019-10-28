loadPage()

async function loadPage() {
  loadLayout()
  const persons = await loadPersons()
  showPersons(persons)
}

function loadLayout() {
  console.log("layout complete")
}

function loadPersons() {
  // тук симулираме заявка към базата която отнема известно време да се случи
  console.log("loading starts")
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("loading ends")
      const personsFromDb = [{ name: "Ilko" }, { name: "Alex" }]
      resolve(personsFromDb)
    }, 2000)
  })
}

function showPersons(persons) {
  console.log("Show persons", persons)
}
