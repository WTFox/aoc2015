import { Box } from "."

describe("Box", () => {
  test("from line", () => {
    const line = "1x2x3 "
    const box = Box.fromLine(line)

    expect(box.length).toBe(1)
    expect(box.height).toBe(2)
    expect(box.width).toBe(3)
  })

  test("squareFoot", () => {
    expect(Box.fromLine("2x3x4").squareFoot).toBe(58)
    expect(Box.fromLine("1x1x10").squareFoot).toBe(43)
  })

  test("Ribbon lengths", () => {
    expect(Box.fromLine("2x3x4").ribbonLength).toBe(34)
    expect(Box.fromLine("1x1x10").ribbonLength).toBe(14)
  })
})
