import { deliverPresentsWithSingleSanta, deliverPresentsWithTwoSantas } from "."

describe("Single Santa deliveries", () => {
  test("'>' delivers presents to two houses", () => {
    expect(deliverPresentsWithSingleSanta(">")).toBe(2)
  })
  test("'^>v<' delivers to four houses", () => {
    expect(deliverPresentsWithSingleSanta("^>v<")).toBe(4)
  })

  test("'^v^v^v^v^v' delivers to four houses", () => {
    expect(deliverPresentsWithSingleSanta("^v^v^v^v^v")).toBe(2)
  })
})

describe("Multi-Santa deliveries", () => {
  test("'^v' delivers presents to two houses", () => {
    expect(deliverPresentsWithTwoSantas("^>")).toBe(3)
  })
  test("'^>v<' delivers to four houses", () => {
    expect(deliverPresentsWithTwoSantas("^>v<")).toBe(3)
  })

  test("'^v^v^v^v^v' delivers to four houses", () => {
    expect(deliverPresentsWithTwoSantas("^v^v^v^v^v")).toBe(11)
  })
})
