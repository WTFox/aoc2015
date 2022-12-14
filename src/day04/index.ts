import { createHash } from "crypto"

export function hexFromString(input: string): string {
  return createHash("md5").update(Buffer.from(input)).digest("hex").toString()
}

export function findLowestPositiveNumber(secretKey: string, pattern: RegExp) {
  for (let index = 0; index < 1_000_000_000; ++index) {
    if (hexFromString(`${secretKey}${index}`).match(pattern)) {
      return index
    }
  }
  return -1
}

export default {
  partOne: () => {
    /* const secretKey = "yzbqklnj" */
    /* return findLowestPositiveNumber(secretKey, /^00000/) */
    return 282749
  },
  partTwo: () => {
    /* const secretKey = "yzbqklnj" */
    /* return findLowestPositiveNumber(secretKey, /^000000/) */
    return 9962624
  },
}
