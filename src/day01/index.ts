import { readFileSync } from "fs"

function countFloors(input: string) {
  return input
    .trim()
    .split("")
    .reduce((acc, val) => acc + (val === "(" ? 1 : -1), 0)
}

function findFirstBasement(input: string): number {
  const inputData = input.trim().split("")

  let counter = 0
  for (let index = 0; index < inputData.length; index++) {
    const value = inputData[index]
    switch (value) {
      case "(":
        counter++
        break
      case ")":
        counter--
        break
    }

    if (counter === -1) {
      return index + 1
    }
  }
  return -1
}

export { countFloors, findFirstBasement }
export default {
  partOne: () => {
    const inputData = readFileSync("src/day01/input.txt")
    return countFloors(inputData.toString())
  },
  partTwo: () => {
    const inputData = readFileSync("src/day01/input.txt")
    return findFirstBasement(inputData.toString())
  },
}
