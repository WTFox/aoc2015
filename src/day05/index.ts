import { readFileSync } from "fs"

export function stringContainsThreeVowels(input: string): boolean {
  let sumOfVowels = 0
  const vowels = ["a", "e", "i", "o", "u"]
  for (let val of input.split("")) {
    if (vowels.includes(val)) {
      ++sumOfVowels
    }
    if (sumOfVowels === 3) {
      return true
    }
  }
  return false
}

export function stringContainsRepeatingCharacter(input: string): boolean {
  let lastCharacter = ""
  for (let val of input.split("")) {
    if (val === lastCharacter) {
      return true
    }
    lastCharacter = val
  }
  return false
}

export function stringContainsOffensiveSubstring(input: string): boolean {
  let lookup = new Map<string, string>([
    ["b", "a"],
    ["d", "c"],
    ["q", "p"],
    ["y", "x"],
  ])

  let lastCharacter = ""
  for (let val of input.split("")) {
    if (lookup.has(val) && lookup.get(val) === lastCharacter) {
      return true
    }
    lastCharacter = val
  }
  return false
}

export function stringIsNice(input: string): boolean {
  return (
    stringContainsThreeVowels(input) &&
    stringContainsRepeatingCharacter(input) &&
    !stringContainsOffensiveSubstring(input)
  )
}

export default {
  partOne: () => {
    let count = 0
    readFileSync("src/day05/input.txt")
      .toString()
      .split("\n")
      .forEach((val) => {
        if (stringIsNice(val)) {
          ++count
        }
      })
    return count
  },
  partTwo: () => {
    return
  },
}
