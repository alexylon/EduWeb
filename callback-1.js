function request(site, func) {
  console.log(site)
  setTimeout(function() {
    func(null, "neshto", "drugo") // тук викаме handleResponse() която се държи в променливата func
  }, 2000) // 2 сек по-късно
}

function handleResponse(error, response, body) {
  console.log(response, body)
}

//request("My Site", handleResponse()); // Tis is NOT asynchronous
request("My Site", handleResponse) // Tis IS asynchronous

/*
първият ред ще се изпълни веднага, преди да е влязло в request функцията
а втория ред ще викне handleResponse вътре в самия request
*/
