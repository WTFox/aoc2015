import {
  stringContainsThreeVowels,
  stringContainsRepeatingCharacter,
  stringContainsOffensiveSubstring,
  stringIsNice,
} from "."

describe("stringIsNice", () => {
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
    expect(stringIsNice("ugknbfddgicrmopn")).toBe(true)
    expect(stringIsNice("aaa")).toBe(true)
    expect(stringIsNice("jchzalrnumimnmhp")).toBe(false)
    expect(stringIsNice("haegwjzuvuyypxyu")).toBe(false)
    expect(stringIsNice("dvszwmarrgswjxmb")).toBe(false)
  })
})
