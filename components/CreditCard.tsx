'use client'

import { useState } from 'react'
import { CreditCardIcon as CardIcon } from 'lucide-react'
import { OTPButton } from './OTPButton'

export default function CreditCards() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200"
    >
      <div className="p-4 sm:p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Debit Card</h2>
        <div 
          className="relative w-full aspect-[1.4/1] max-w-[450px] mx-auto [perspective:1000px] cursor-pointer"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div 
            className={`absolute w-full h-full [transform-style:preserve-3d] transition-all duration-700 ${
              isFlipped ? '[transform:rotateY(180deg)]' : ''
            }`}
          >
            {/* Front of the card */}
            <div className="absolute w-full h-full [backface-visibility:hidden] rounded-xl p-6 bg-gradient-to-br from-purple-400 to-blue-600">
              <div className="flex justify-between items-start">
                <div className="text-white text-xl font-semibold">Global Bank</div>
                <CardIcon className="text-white/80" />
              </div>
              <div className="mt-4">
                <div className="flex mt-2">
                  <div className="relative flex items-center justify-center w-12 h-10 rounded-md bg-gradient-to-b from-yellow-200 to-yellow-400 overflow-hidden shadow-lg">
                      <div className="absolute w-px h-full bg-gray-800 left-2/4" />
                      <div className="absolute w-full h-px bg-gray-900 top-1/3" />
                      <div className="absolute w-full h-px bg-gray-800 top-1/2" />
                      <div className="absolute w-full h-px bg-gray-800 top-2/3" />
                      <div className="relative z-10 w-6 h-6 border border-gray-800 rounded-md bg-gradient-to-b from-yellow-300 to-yellow-500" />
                  </div>
                  <div className='px-4'>
                    <svg viewBox='0 3.71 26.959 38.787' fill='white' width={26.959} height={38.7897}>
                      <path d="M19.709 3.719c.266.043.5.187.656.406 4.125 5.207 6.594 11.781 6.594 18.938 0 7.156-2.469 13.73-6.594 18.937-.195.336-.57.531-.957.492a.9946.9946 0 0 1-.851-.66c-.129-.367-.035-.777.246-1.051 3.855-4.867 6.156-11.023 6.156-17.718 0-6.696-2.301-12.852-6.156-17.719-.262-.317-.301-.762-.102-1.121.204-.36.602-.559 1.008-.504z"></path>
                      <path d="M13.74 7.563c.231.039.442.164.594.343 3.508 4.059 5.625 9.371 5.625 15.157 0 5.785-2.113 11.097-5.625 15.156-.363.422-1 .472-1.422.109-.422-.363-.472-1-.109-1.422 3.211-3.711 5.156-8.551 5.156-13.843 0-5.293-1.949-10.133-5.156-13.844-.27-.309-.324-.75-.141-1.114.188-.367.578-.582.985-.542h.093z"></path>
                      <path d="M7.584 11.438c.227.031.438.144.594.312 2.953 2.863 4.781 6.875 4.781 11.313 0 4.433-1.828 8.449-4.781 11.312-.398.387-1.035.383-1.422-.016-.387-.398-.383-1.035.016-1.421 2.582-2.504 4.187-5.993 4.187-9.875 0-3.883-1.605-7.372-4.187-9.875-.321-.282-.426-.739-.266-1.133.164-.395.559-.641.984-.617h.094zM1.178 15.531c.121.02.238.063.344.125 2.633 1.414 4.437 4.215 4.437 7.407 0 3.195-1.797 5.996-4.437 7.406-.492.258-1.102.07-1.36-.422-.257-.492-.07-1.102.422-1.359 2.012-1.075 3.375-3.176 3.375-5.625 0-2.446-1.371-4.551-3.375-5.625-.441-.204-.676-.692-.551-1.165.122-.468.567-.785 1.051-.742h.094z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="text-lg sm:text-2xl text-white font-mono tracking-wider break-all">
                  4208 5851 9011 6667
                </div>
              </div>
              <div className="mt-6 flex justify-between items-end">
                <div>
                  <div className="text-white/60 text-xs uppercase mb-1">Card Holder</div>
                  <div className="text-white text-sm">CREDIT USER</div>
                </div>
                <div className="text-right">
                  <div className="text-white/60 text-xs uppercase mb-1">Expires</div>
                  <div className="text-white text-sm">06/27</div>
                </div>
              </div>
            </div>
            {/* Back of the card */}
            <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl bg-gradient-to-br from-slate-700 to-slate-800">
              <div className="w-full h-12 bg-black mt-4" />
                <div className='text-white/60 text-xs uppercase px-6 mt-4'>Authorized Signature</div>
              <div className="px-6 mt-2">
                <div className="w-full h-10 bg-white/20 rounded" />
                <div className="mt-6 flex justify-between">
                  <div>
                    <div className="text-white/60 text-xs uppercase mb-1">Bank Info</div>
                    <div className="text-white text-md font-semibold">Your bank details</div>
                  </div>
                  <div>
                    <div className="text-white/60 text-xs uppercase mb-1">CVV</div>
                    <div className="text-white text-md font-semibold">508</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
          Click to flip the card
        </p>
        <div className="flex justify-center mt-8">
          <OTPButton />
        </div>
      </div>
    </div>
  )
}

