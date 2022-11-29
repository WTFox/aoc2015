import { readFileSync } from "fs"

class Box {
  constructor(
    public length: number,
    public height: number,
    public width: number
  ) {
    this.length = length
    this.height = height
    this.width = width
  }

  public static fromLine(line: string): Box {
    const [length, height, width] = line.trim().split("x")
    if (!length || !height || !width) {
      return new Box(0, 0, 0)
    }
    return new Box(parseInt(length), parseInt(height), parseInt(width))
  }

  public get ["area"](): number {
    return this.length * this.height * this.width
  }

  public get ["squareFoot"](): number {
    return (
      2 *
      (this.length * this.width +
        this.width * this.height +
        this.height * this.length) +
      Object.values(this)
        .sort((a, b) => a - b)
        .splice(0, 2)
        .reduce((acc, val) => {
          return acc * val
        }, 1)
    )
  }

  public get ["ribbonLength"](): number {
    const [a, b] = Object.values(this)
      .sort((a, b) => a - b)
      .splice(0, 2)
    const baseRibbonNeeded = a + a + b + b
    return baseRibbonNeeded + this.area
  }
}

export { Box }
export default {
  partOne: () => {
    const inputData = readFileSync("src/day02/input.txt")
      .toString()
      .trim()
      .split("\n")

    return inputData.reduce((acc, line) => {
      if (typeof line !== "undefined") {
        return acc + Box.fromLine(line).squareFoot
      }
      return 0
    }, 0)
  },
  partTwo: () => {
    const inputData = readFileSync("src/day02/input.txt")
      .toString()
      .trim()
      .split("\n")

    return inputData.reduce((acc, val) => {
      const ribbonLength = Box.fromLine(val).ribbonLength
      return acc + ribbonLength
    }, 0)
  },
}
