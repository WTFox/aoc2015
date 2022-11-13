import { countFloors, findFirstBasement } from "."

describe("day01", () => {
  test("countFloors counts correctly", () => {
    expect(countFloors("))(((((")).toBe(3)
  })

  test("countFloors ignores whitespace", () => {
    expect(countFloors("))((((( ")).toBe(3)
  })

  test("findFirstBasement index 1", () => {
    expect(findFirstBasement(")")).toBe(1)
  })

  test("findFirstBasement index 5", () => {
    expect(findFirstBasement("()())")).toBe(5)
  })
})
