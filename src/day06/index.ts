import { readFileSync } from "fs"
import { parse } from "path"

export class Light {
  public isOn: boolean
  constructor() {
    this.isOn = false
  }
}

export function buildGrid(size = 1000): Light[][] {
  return new Array<Light[]>(size).fill([]).map(() => {
    return new Array<Light>(size).fill(null).map(() => new Light())
  })
}

export function printGrid(grid: Light[][]) {
  for (const row of grid) {
    for (const cell of row) {
      console.log(cell)
    }
  }
}

export function countLightsOn(grid: Light[][]): number {
  let sum = 0
  for (const row of grid) {
    for (const cell of row) {
      const amount = cell.isOn ? 1 : 0
      sum += amount
    }
  }
  return sum
}

export function handleInstruction() {}

export default {
  partOne: () => {
    readFileSync("src/day06/input.txt").toString()
    buildGrid(3)
  },
  partTwo: () => {
    readFileSync("src/day06/input.txt").toString()
  },
}
