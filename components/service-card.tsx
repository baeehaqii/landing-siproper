"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

interface ServiceProps {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  image: string
  verticalText: string
}

interface ServiceCardProps {
  service: ServiceProps
  isExpanded: boolean
  onClick: () => void
}

export default function ServiceCard({ service, isExpanded, onClick }: ServiceCardProps) {
  const [height, setHeight] = useState<number | null>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight)
    }
  }, [isExpanded])

  return (
    <div
      className={`relative overflow-hidden rounded-lg transition-all duration-500 ${
        isExpanded
          ? "w-full md:w-[calc(100%-440px)] lg:w-[calc(100%-540px)] flex-grow"
          : "w-[100px] md:w-[120px] flex-shrink-0 cursor-pointer hover:bg-gray-800"
      }`}
      style={{
        height: isExpanded ? "400px" : "400px",
        backgroundColor: isExpanded ? "rgba(20, 20, 20, 0.8)" : "rgba(30, 30, 30, 0.8)",
      }}
      onClick={!isExpanded ? onClick : undefined}
    >
      {/* Vertical text for collapsed state */}
      {!isExpanded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rotate-90 whitespace-nowrap text-gray-200 font-medium">{service.verticalText}</div>
        </div>
      )}

      {/* Content for expanded state */}
      {isExpanded && (
        <div ref={contentRef} className="h-full p-6 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm md:text-base">{service.description}</p>
            </div>
            <button
              className="text-gray-400 hover:text-white"
              onClick={(e) => {
                e.stopPropagation()
                onClick()
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="relative flex-grow mt-4 overflow-hidden rounded-lg">
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="mt-6 flex justify-between items-center">
            <button className="flex items-center gap-2 text-white font-medium bg-orange-500 hover:bg-orange-600 transition-colors px-4 py-2 rounded-md">
              Book Consult
              <ArrowUpRight className="h-4 w-4" />
            </button>

            <div className="flex gap-4">
              <button className="text-gray-300 hover:text-white transition-colors">{service.icon}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
