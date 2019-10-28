loadPage()

async function loadPage() {
  loadLayout()
  const persons = await loadPersons()
  showPersons(persons)
}

function loadLayout() {
  console.log(`layout loaded`)
}

function loadPersons() {
  console.log(`loading persons...`)
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`persons loaded`)
      const personsDb = [{ name: "Alex" }, { name: `Ekaterina` }]
      resolve(personsDb)
    }, 2000)
  })
}

function showPersons(persons) {
  console.log("Show persons:", persons)
}

console.log(`program doing something else...`)
