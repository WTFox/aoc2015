import {
  stringContainsThreeVowels,
  stringContainsRepeatingCharacter,
  stringContainsOffensiveSubstring,
  stringIsNiceOLD,
  stringIsNice,
} from "."

describe("stringIsNice", () => {
  test("stringIsNiceNew", () => {
    expect(stringIsNice("xxyxx")).toBe(true)
    expect(stringIsNice("qjhvhtzxzqqjkmpb")).toBe(true)
    expect(stringIsNice("aaa")).toBe(false)
    expect(stringIsNice("uurcxstgmygtbstg")).toBe(false)
    expect(stringIsNice("ieodomkazucvgmuy")).toBe(false)
  })
})

describe("stringIsNiceOLD", () => {
  test("string contains three vowels", () => {
    expect(stringContainsThreeVowels("ugknbfddgicrmopn")).toBe(true)
    expect(stringContainsThreeVowels("bbb")).toBe(false)
  })
  test("string contains repeating characters", () => {
    expect(stringContainsRepeatingCharacter("aaa")).toBe(true)
    expect(stringContainsRepeatingCharacter("jchzalrnumimnmhp")).toBe(false)
  })
  test("string does not contain offensive substrings", () => {
    expect(stringContainsOffensiveSubstring("haegwjzuvuyypxyu")).toBe(true)
    expect(stringContainsOffensiveSubstring("jchzalrnumimnmhp")).toBe(false)
  })
  test("stringIsNice", () => {
    expect(stringIsNiceOLD("ugknbfddgicrmopn")).toBe(true)
    expect(stringIsNiceOLD("aaa")).toBe(true)
    expect(stringIsNiceOLD("jchzalrnumimnmhp")).toBe(false)
    expect(stringIsNiceOLD("haegwjzuvuyypxyu")).toBe(false)
    expect(stringIsNiceOLD("dvszwmarrgswjxmb")).toBe(false)
  })
})
