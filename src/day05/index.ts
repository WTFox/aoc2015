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

export function stringIsNiceOLD(input: string): boolean {
  return (
    stringContainsThreeVowels(input) &&
    stringContainsRepeatingCharacter(input) &&
    !stringContainsOffensiveSubstring(input)
  )
}

export function stringIsNice(input: string): boolean {
  const characterArray = `${input} `.split("")
  const seen = new Set<string>()
  let hasPair = false
  let hasCombo = false

  for (let index = 0; index < characterArray.length - 2; ++index) {
    const [one, two, three] = [
      characterArray[index],
      characterArray[index + 1],
      characterArray[index + 2],
    ]

    if (one === two && two === three) {
      continue
    }

    const pair = `${one}${two}`
    if (seen.has(pair)) {
      hasPair = true
    }
    if (one === three) {
      hasCombo = true
    }
    seen.add(pair)
  }
  return hasPair && hasCombo
}

export default {
  partOne: () => {
    let count = 0
    readFileSync("src/day05/input.txt")
      .toString()
      .split("\n")
      .forEach((val) => {
        if (stringIsNiceOLD(val)) {
          ++count
        }
      })
    return count
  },
  partTwo: () => {
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
}
