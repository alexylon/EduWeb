function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw Error("Invalid direction: " + result);
}

function look() {
  if (promptDirection("Which direction?") == "L") {
    return `a forest`;
  } else {
    return "a mountain";
  }
}

try {
  console.log("You see " + look());
} catch (e) {
  console.log(`There is a problem: ${e}`);
} finally {
  console.log(`Finally`);
}
