import { createHash } from "crypto"

export function hexFromString(input: string): string {
  return createHash("md5").update(Buffer.from(input)).digest("hex").toString()
}

export function findLowestPositiveNumberWhoseHashStartsWithFiveZeros(
  secretKey: string
) {
  for (let index = 0; index < 10_000_000; ++index) {
    if (hexFromString(`${secretKey}${index}`).startsWith("00000")) {
      return index
    }
  }
}

export default {
  partOne: () => {
    const secretKey = "yzbqklnj"
    return findLowestPositiveNumberWhoseHashStartsWithFiveZeros(secretKey)
  },
  partTwo: () => {},
}
