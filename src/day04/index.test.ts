import {
  hexFromString,
  findLowestPositiveNumberWhoseHashStartsWithFiveZeros,
} from "."

describe("MD5s, Hexes, Oh my!", () => {
  test("convert string to md5 to hex", () => {
    expect(hexFromString("yzbqklnj1")).toBe("80012351ace7be002d4ede3bcefecab3")
    expect(hexFromString("pqrstuv1048970")).toMatch(/000006136ef.*$/)
  })

  test("findLowestPositiveNumberWhoseHashStartsWithFiveZeros", () => {
    expect(findLowestPositiveNumberWhoseHashStartsWithFiveZeros("abcdef")).toBe(
      609043
    )
  })

  test("findLowestPositiveNumberWhoseHashStartsWithFiveZeros", () => {
    expect(
      findLowestPositiveNumberWhoseHashStartsWithFiveZeros("pqrstuv")
    ).toBe(1048970)
  })
})
