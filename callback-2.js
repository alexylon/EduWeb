loadPage()

function loadPage() {
  loadLayout()

  const persons = loadPersons()
  showPersons(persons)
}

function loadLayout() {
  console.log("layout complete")
}

function loadPersons() {
  // тук симулираме заявка към базата която отнема известно време да се случи
  console.log("loading starts")
  setTimeout(() => {
    console.log("loading ends")
    const personsFromDb = [{ name: "Ilko" }, { name: "Alex" }]
    return personsFromDb
  }, 1000)
}

function showPersons(persons) {
  console.log("Show persons", persons)
}
