"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const eggTypes = [
  { name: "Soft", time: 180, emoji: "🥚" },
  { name: "Medium", time: 300, emoji: "🍳" },
  { name: "Hard", time: 420, emoji: "🐣" },
  { name: "Extra Hard", time: 540, emoji: "🐥" },
]

export default function CluckOClock() {
  const [showOptions, setShowOptions] = useState(false)
  const [selectedTime, setSelectedTime] = useState(0)
  const [remainingTime, setRemainingTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isRunning && remainingTime > 0) {
      interval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1)
      }, 1000)
    } else if (remainingTime === 0 && isRunning) {
      setIsRunning(false)
      alert("Your egg is ready! 🍳")
    }
    return () => clearInterval(interval)
  }, [isRunning, remainingTime])

  const startTimer = (time: number) => {
    setSelectedTime(time)
    setRemainingTime(time)
    setIsRunning(true)
    setShowOptions(false)
  }

  const stopTimer = () => {
    setIsRunning(false)
    setRemainingTime(0)
    setShowOptions(false)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100">
      <div className="bg-white p-8 rounded-3xl shadow-lg text-center max-w-md w-full">
        <h1 className="text-4xl font-bold text-yellow-500 mb-1">Cluck O'Clock</h1>
        <p className="text-sm text-yellow-600 mb-6 italic font-handwriting">Eggsactly on time</p>
        {!showOptions && !isRunning && (
          <Button
            onClick={() => setShowOptions(true)}
            className="text-6xl bg-yellow-300 hover:bg-yellow-400 rounded-full w-40 h-40 shadow-md transition-transform duration-200 hover:scale-110"
          >
            🥚
          </Button>
        )}
        {showOptions && (
          <div className="grid grid-cols-2 gap-4">
            {eggTypes.map((type) => (
              <Button
                key={type.name}
                onClick={() => startTimer(type.time)}
                className="text-2xl bg-yellow-200 hover:bg-yellow-300 rounded-xl p-4 shadow-md transition-transform duration-200 hover:scale-105"
              >
                {type.emoji} {type.name}
              </Button>
            ))}
          </div>
        )}
        {isRunning && (
          <div className="mt-6">
            <div className={`text-6xl mb-4 ${isRunning ? "animate-bounce" : ""}`}>
              {eggTypes.find((type) => type.time === selectedTime)?.emoji}
            </div>
            <div className="text-4xl font-bold text-yellow-600 mb-4">{formatTime(remainingTime)}</div>
            <Button
              onClick={stopTimer}
              className="bg-red-500 hover:bg-red-600 text-white rounded-xl px-6 py-2 shadow-md transition-transform duration-200 hover:scale-105"
            >
              Stop
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

