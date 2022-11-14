import { readFileSync } from "fs"

type Point = {
  x: number
  y: number
}

function updatePointCounts(point: Point, pointsVisited: Map<string, number>) {
  let val = pointsVisited.get(JSON.stringify(point)) || 0
  pointsVisited.set(JSON.stringify(point), ++val)
}

export function deliverPresents(instructions: string): number {
  const pointsVisited = new Map<string, number>()
  let currentPosition: Point = { x: 0, y: 0 }

  updatePointCounts(currentPosition, pointsVisited)

  instructions.split("").map((val) => {
    switch (val) {
      case "^":
        currentPosition = { x: currentPosition.x, y: ++currentPosition.y }
        updatePointCounts(currentPosition, pointsVisited)
        break
      case ">":
        currentPosition = { x: ++currentPosition.x, y: currentPosition.y }
        updatePointCounts(currentPosition, pointsVisited)
        break
      case "v":
        currentPosition = { x: currentPosition.x, y: --currentPosition.y }
        updatePointCounts(currentPosition, pointsVisited)
        break
      case "<":
        currentPosition = { x: --currentPosition.x, y: currentPosition.y }
        updatePointCounts(currentPosition, pointsVisited)
        break
    }
  })

  let sum = 0
  for (const _ of pointsVisited.values()) {
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
