"use client"

import { useState, useRef, useEffect } from "react"
import './fonts/font.css'

export default function Timer() {
  const endTime = new Date("2024-11-29T23:59:59Z")

  const calculateTimeLeft = () => {
    const now: Date = new Date()
    const difference: number = endTime.getTime() - now.getTime()

    let timeLeft: { days: number; hours: number; minutes: number; seconds: number }

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(intervalRef.current!)
  }, [])

  return (
    <div className="visible max-sm:invisible">
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        {[
          { value: timeLeft.days, label: "Days" },
          { value: timeLeft.hours, label: "Hours" },
          { value: timeLeft.minutes, label: "Min" },
          { value: timeLeft.seconds, label: "Sec" },
        ].map((item, index) => (
          <div key={index} className="flex flex-row p-2 bg-info rounded-box text-accent-content" data-theme="light">
            <span className="countdown font-blanka text-4xl">
              <span style={{ "--value": item.value } as React.CSSProperties}></span>
            </span>
            <span className="text-xs font-medium -mt-0.5">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}