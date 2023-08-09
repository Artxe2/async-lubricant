import { timeUnit, timeZone } from "date-lube"

const now = new Date()
const london = timeZone(new Date(now), "Europe/London")
const newYork = timeZone(new Date(now), "America/New_york")
const gap = (london.getTime() - newYork.getTime()) / timeUnit.mm

console.log("Assert London ~ New-York = " + gap + "m:", gap >= 240 && gap <= 360 && gap % 60 === 0)