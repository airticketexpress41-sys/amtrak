"use client"

import { useEffect, useState } from "react"
import { Phone, X } from "lucide-react"

const PHONE = "+1 (647) 792-7095"

export default function CallNow() {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="relative w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                <Phone className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="mb-1 text-lg font-bold">Need help booking?</h3>
              <p className="mb-4 text-sm text-gray-500">
                Call us now and speak with a travel expert.
              </p>
              <a
                href={`tel:${PHONE}`}
                className="mb-4 block text-2xl font-bold text-amtrak-blue hover:underline"
              >
                {PHONE}
              </a>
              <div className="flex gap-3">
                <a
                  href={`tel:${PHONE}`}
                  className="flex-1 rounded-lg bg-green-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-green-700"
                >
                  Call Now
                </a>
                <button
                  onClick={() => setShowPopup(false)}
                  className="flex-1 rounded-lg border px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <a
        href={`tel:${PHONE}`}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-green-700 hover:scale-105"
      >
        <Phone className="h-4 w-4" />
        Call Now
      </a>
    </>
  )
}
