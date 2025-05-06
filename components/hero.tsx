"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Share2, Mail, BarChart3, LineChart, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

type ServiceCard = {
    id: string
    title: string
    description: string
    icon: React.ReactNode
    image?: string
    color: string
    link: string
    illustration: string
}

export default function Hero() {
    const [expandedCard, setExpandedCard] = useState<string>("sales")

    const services: ServiceCard[] = [
        {
            id: "sales",
            title: "Sales Booking & Sales Activity",
            description: "Monitoring dan analisa aktivitas penjualan untuk meningkatkan kinerja tim sales.",
            icon: <Share2 className="h-5 w-5" />,
            image: "/images/doodle-2.png",
            color: "from-pink-500 to-blue-500",
            link: "https://dev1.siproper.com",
            illustration:
                "/images/doodle-2.png",
        },
        {
            id: "likuid",
            title: "Sistem Likuiditas",
            description: "Kelola Planing dan Monitoring Pembayaran Konsumen.",
            icon: <ChevronRight className="h-5 w-5" />,
            color: "from-purple-500 to-indigo-500",
            link: "https://dev2.siproper.com",
            illustration:
                "/images/doodle-3.png",
        },
        {
            id: "fast",
            title: "Sistem Keuangan",
            description: "Ucapkan selamat tinggal pada spreadsheet dan sambutlah sistem akuntansi yang lebih efisien.",
            icon: <Mail className="h-5 w-5" />,
            color: "from-yellow-500 to-orange-500",
            link: "https://dev1.siproper.com",
            illustration:
                "/images/doodle-4.png",
        },
        {
            id: "legal",
            title: "Pra & After Sales Legal",
            description: "Kelola proses pra legal sampai aftersales legal dalam satu sistem.",
            icon: <BarChart3 className="h-5 w-5" />,
            color: "from-green-500 to-teal-500",
            link: "https://dev3.siproper.com",
            illustration:
                "/images/doodle-5.png",
        },
        {
            id: "teknik",
            title: "Sistem Teknik",
            description: "Pantau semua proses teknik dari pembangunan sampai pembayaran subkontraktor.",
            icon: <LineChart className="h-5 w-5" />,
            color: "from-blue-500 to-cyan-500",
            link: "https://dev3.siproper.com",
            illustration:
                "/images/doodle-6.png",
        },
    ]

    const handleCardClick = (id: string) => {
        setExpandedCard(id)
    }

    return (
        <div className="relative w-full bg-gradient-to-br from-black via-gray-900 to-black min-h-screen overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-700/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/3 -left-40 w-80 h-80 bg-red-500/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 right-1/25 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl"></div>
            </div>

            {/* Navigation */}
            <header className="relative z-10 container mx-auto pt-10 py-6 px-20 flex items-center justify-between">
                <div className="flex items-center">
                    {/* Removed size constraints from container div */}
                    <div className="relative">
                        <Image
                            src="/images/logo-siproper.png"
                            alt="Logo"
                            width={150}
                            height={150}
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
                <nav className="hidden md:flex items-center space-x-10">
                    <Link href="/" className="text-red-500 text-lg relative group">
                        Beranda
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/report" className="text-gray-300 hover:text-white transition-colors relative group">
                    Bug & Report
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/help" className="text-gray-300 hover:text-white transition-colors relative group">
                    Help Desk
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/change-log" className="text-gray-300 hover:text-white transition-colors relative group">
                        Change Log
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </nav>
                <Link
                    href="/manual-book"
                    className="relative overflow-hidden bg-gradient-to-r from-red-500 to-red-900 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 group"
                >
                    <span className="relative z-10">Baca Manual Book</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Link>
            </header>

            {/* Hero Content */}
            <div className="relative z-10 container mx-auto px-4 pt-16 pb-24 pl-16">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="lg:w-1/2 text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
                            Kemudahan Di Depan Mata.
                            <b className="text-red-600"> #TimeToChanges</b>
                        </h1>
                        <p className="mt-6 text-l text-gray-300">
                            Saatnya berubah! Lupakan cara lama dan sambutlah sistem yang lebih proper. 
                            Semua ada dalam satu platform terintegrasi. Dari penjualan, monitoring pembangunan hingga akuntansi, semua ada di sini.
                        </p>
                        {/* <div className="mt-8">
                            <Link
                                href="#"
                                className="relative overflow-hidden inline-flex items-center bg-gradient-to-r from-red-500 to-red-900 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 group"
                            >
                                <span className="relative z-10 flex items-center">
                                    Get started
                                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                                <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                            </Link>
                        </div> */}
                    </div>
                    <div className="lg:w-1/2 flex justify-center lg:justify-end pr-16">
                        <div className="relative w-full max-w-md">
                            {/* Illustration background glow */}
                            <div className="absolute inset-0 bg-red-500/10 rounded-3xl blur-xl transform translate-x-4 translate-y-4"></div>

                            {/* Illustration container */}
                            <div className="relative bg-gray-900/60 backdrop-blur-sm p-8 rounded-3xl border border-gray-800">
                                <Image
                                    src="/images/doodle-7.png"
                                    alt="Person reading"
                                    width={400}
                                    height={300}
                                    className="w-full h-auto"
                                />
                                {/* <div className="mt-4 text-center">
                                    <h3 className="text-xl font-semibold text-white">Kelola Properti Dengan Mudah</h3>
                                    <p className="text-gray-300 mt-2">Akses semua fitur dalam satu platform terintegrasi</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Cards */}
            <div className="relative z-10 container mx-auto px-4 pb-24">
                <div className="flex flex-col lg:flex-row gap-4">
                    {services.map((service) => (
                        <div 
                            key={service.id}
                            onClick={() => handleCardClick(service.id)}
                            className={cn(
                                "relative rounded-xl overflow-hidden transition-all duration-500 cursor-pointer border border-gray-800 shadow-xl",
                                expandedCard === service.id
                                    ? "lg:flex-[3] h-[500px] shadow-lg shadow-red-500/5"
                                    : "lg:flex-1 h-[500px] hover:shadow-lg hover:shadow-red-500/5 hover:border-gray-700",
                            )}
                        >
                            {/* Vertical title for collapsed state */}
                            <div
                                className={cn(
                                    "absolute inset-0 flex items-center justify-center transition-opacity duration-500",
                                    expandedCard === service.id ? "opacity-0 pointer-events-none" : "opacity-100",
                                )}
                            >
                                <div className="flex flex-col items-center justify-center h-full w-full p-4 bg-gradient-to-b from-transparent via-black/60 to-black">
                                    <div className="rotate-90 transform flex flex-col items-center space-y-4">
                                        <div className="bg-black/50 p-3 rounded-full backdrop-blur-sm border border-gray-800">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-bold whitespace-nowrap">{service.title}</h3>
                                    </div>
                                </div>
                            </div>

                            {/* Expanded content */}
                            <div
                                className={cn(
                                    "absolute inset-0 transition-opacity duration-500",
                                    expandedCard === service.id ? "opacity-100" : "opacity-0 pointer-events-none",
                                )}
                            >
                                {expandedCard === service.id && (
                                    <div className="absolute inset-0">
                                        {/* Background gradient */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`}></div>
                                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

                                        {/* Content container */}
                                        <div className="absolute inset-0 flex flex-col p-6">
                                            {/* Header */}
                                            <div className="flex justify-between items-start">
                                                <h3 className="text-2xl font-bold">{service.title}</h3>
                                                <div className="bg-black/50 p-2 rounded-full backdrop-blur-sm border border-gray-800">
                                                    {service.icon}
                                                </div>
                                            </div>

                                            {/* Illustration */}
                                            <div className="flex-1 flex flex-col items-center justify-center my-6">
                                                <div className="relative w-full max-w-[250px]">
                                                    {/* Glow effect */}
                                                    {/* <div className="absolute inset-0 bg-red-500/10 rounded-xl blur-md"></div> */}

                                                    {/* Illustration */}
                                                    <div className="relative">
                                                        <Image
                                                            src={service.illustration || "/placeholder.svg"}
                                                            alt={service.title}
                                                            width={250}
                                                            height={200}
                                                            className="w-full h-auto"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Description */}
                                                <p className="text-gray-300 text-lg  mt-6">{service.description}</p>
                                            </div>

                                            {/* Button */}
                                            <div className="flex">
    <Link 
        href={service.link}
        target="_blank"
        className="group inline-flex items-center space-x-2 bg-black/50 hover:bg-black/70 border border-gray-700 px-5 py-3 rounded-full text-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10"
    >
        <span>Masuk Console</span>
        <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
    </Link>
</div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <footer className="relative z-10 container mx-auto px-4 py-6 text-center">
                <p className="text-gray-400">© 2025 SiProper by Sapphire Grup. All rights reserved.</p> 
            </footer>
        </div>
    )
}
