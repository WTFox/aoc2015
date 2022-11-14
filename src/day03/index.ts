import { readFileSync } from "fs"

type Location = {
  x: number
  y: number
}

function updatePointCounts(
  point: Location,
  pointsVisited: Map<string, number>
) {
  let val = pointsVisited.get(JSON.stringify(point)) || 0
  pointsVisited.set(JSON.stringify(point), ++val)
}

class Santa {
  public currentPosition: Location
  public locationLog: Map<string, number>

  constructor(locationLog: Map<string, number>) {
    this.locationLog = locationLog
    this.currentPosition = { x: 0, y: 0 }
    updatePointCounts(this.currentPosition, this.locationLog)
  }

  public deliverPresent(location: string) {
    switch (location) {
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
    updatePointCounts(this.currentPosition, this.locationLog)
  }
}

export function deliverPresents(instructions: string): number {
  const locationLog = new Map<string, number>()
  const santa = new Santa(locationLog)

  instructions.split("").map((val) => {
    santa.deliverPresent(val)
  })

  let sum = 0
  for (const _ of locationLog.values()) {
    ++sum
  }

  return sum
}

export default {
  partOne: () => {
    return deliverPresents(
      readFileSync("src/day03/input.txt").toString().trim()
    )
  },
  partTwo: () => {},
}
