import { hexFromString, findLowestPositiveNumber } from "."

describe("MD5s, Hexes, Oh my!", () => {
  test("convert string to md5 to hex", () => {
    expect(hexFromString("yzbqklnj1")).toBe("80012351ace7be002d4ede3bcefecab3")
    expect(hexFromString("pqrstuv1048970")).toMatch(/000006136ef.*$/)
  })

  test("findLowestPositi... secretKey: abcdef", () => {
    expect(findLowestPositiveNumber("abcdef", /^00000/)).toBe(609043)
  })

  test("findLowestPositi... secretKey: pqrstuv", () => {
    expect(findLowestPositiveNumber("pqrstuv", /^00000/)).toBe(1048970)
  })
})
