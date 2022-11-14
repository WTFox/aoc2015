import { deliverPresents } from "."

describe("Points and grids", () => {
  test("'>' delivers presents to two houses", () => {
    expect(deliverPresents(">")).toBe(2)
  })
  test("'^>v<' delivers to four houses", () => {
    expect(deliverPresents("^>v<")).toBe(4)
  })

  test("'^v^v^v^v^v' delivers to four houses", () => {
    expect(deliverPresents("^v^v^v^v^v")).toBe(2)
  })
})
