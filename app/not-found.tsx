import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="relative w-full min-h-screen bg-white flex flex-col items-center justify-center px-4">
      {/* Animated background elements */}
      

      <div className="relative z-10 max-w-md w-full flex flex-col items-center">
        {/* Illustration with glow effect */}
        <div className="relative w-full max-w-md mb-8">
          

          {/* Illustration container */}
          <div className="relative ">
            <Image
              src="/images/404.png"
              alt="404 Page Not Found"
              width={500}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Error message */}
        <h1 className="text-2xl md:text-4xl font-bold text-black text-center mb-4">Maaf, Halaman Tidak Ada</h1>
        <p className="text-gray-800 text-center mb-8">Halaman yang Anda cari masih dalam proses, Kami akan segera memperbarui.</p>

        {/* Back to home button */}
        <Link
          href="/"
          className="relative overflow-hidden inline-flex items-center bg-gradient-to-r from-red-500 to-red-900 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 group"
        >
          <span className="relative z-10 flex items-center">
            <ArrowLeft className="mr-2 h-5 w-5 transform group-hover:-translate-x-1 transition-transform duration-300" />
            Kembali ke Beranda
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
        </Link>
      </div>
    </div>
  )
}
