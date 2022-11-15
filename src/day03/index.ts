import { readFileSync } from "fs"

type Location = {
  x: number
  y: number
}

function updateLocationCounts(
  location: Location,
  locationsVisited: Map<string, number>
) {
  let val = locationsVisited.get(JSON.stringify(location)) || 0
  locationsVisited.set(JSON.stringify(location), ++val)
}

type Direction = "^" | ">" | "v" | "<"

class Santa {
  public currentPosition: Location
  public locationLog: Map<string, number>

  constructor(locationLog: Map<string, number>) {
    this.locationLog = locationLog
    this.currentPosition = { x: 0, y: 0 }
    updateLocationCounts(this.currentPosition, this.locationLog)
  }

  public deliverPresent(direction: Direction) {
    switch (direction) {
      case "^":
        this.currentPosition = {
          x: this.currentPosition.x,
          y: ++this.currentPosition.y,
        }
        break
      case ">":
        this.currentPosition = {
          x: ++this.currentPosition.x,
          y: this.currentPosition.y,
        }
        break
      case "v":
        this.currentPosition = {
          x: this.currentPosition.x,
          y: --this.currentPosition.y,
        }
        break
      case "<":
        this.currentPosition = {
          x: --this.currentPosition.x,
          y: this.currentPosition.y,
        }
        break
    }
    updateLocationCounts(this.currentPosition, this.locationLog)
  }
}

export function deliverPresentsWithSingleSanta(directions: string): number {
  const locationLog = new Map<string, number>()
  const santa = new Santa(locationLog)

  directions.split("").forEach((direction: Direction) => {
    santa.deliverPresent(direction)
  })

  return Array.from(locationLog.keys()).length
}

export function deliverPresentsWithTwoSantas(directions: string): number {
  const locationLog = new Map<string, number>()
  const santa = new Santa(locationLog)
  const roboSanta = new Santa(locationLog)

  directions.split("").forEach((direction: Direction, idx: number) => {
    if (idx % 2 === 0) {
      santa.deliverPresent(direction)
    } else {
      roboSanta.deliverPresent(direction)
    }
  })
  return Array.from(locationLog.keys()).length
}

export default {
  partOne: () => {
    return deliverPresentsWithSingleSanta(
      readFileSync("src/day03/input.txt").toString().trim()
    )
  },
  partTwo: () => {
    return deliverPresentsWithTwoSantas(
      readFileSync("src/day03/input.txt").toString().trim()
    )
  },
}
