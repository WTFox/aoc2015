// @ts-nocheck

import { buildGrid, countLightsOn, Light } from "."

describe("Day 6", () => {
  test("buildGrid", () => {
    const grid = buildGrid(2)

    expect(grid.length).toBe(2)
    expect(grid[0].length).toBe(2)
    expect(grid[0][1]).toBeInstanceOf(Light)
  })

  test("countLightsOn", () => {
    const grid = buildGrid(2)

    grid[0][0].isOn = true
    expect(countLightsOn(grid)).toBe(1)

    grid[0][1].isOn = true
    expect(countLightsOn(grid)).toBe(2)
  })
})
