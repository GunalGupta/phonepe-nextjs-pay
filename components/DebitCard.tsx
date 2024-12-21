'use client'

import { useState } from 'react'
import { CreditCardIcon as CardIcon } from 'lucide-react'
import { OTPButton } from './OTPButton'

export default function DebitCard() {
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
            <div className="absolute w-full h-full [backface-visibility:hidden] rounded-xl p-6 bg-gradient-to-br from-blue-600 to-blue-800">
              <div className="flex justify-between items-start">
                <div className="text-white text-xl font-semibold">Global Bank</div>
                <CardIcon className="text-white/80" />
                {/* <Image src="./visa.svg" height={40} width={40} alt='Visa logo' priority /> */}
              </div>
              <div className="mt-4">
                <div className="relative flex items-center justify-center w-12 h-10 rounded-md bg-gradient-to-b from-yellow-200 to-yellow-400 overflow-hidden shadow-lg">
                    <div className="absolute w-px h-full bg-gray-800 left-2/4" />
                    <div className="absolute w-full h-px bg-gray-900 top-1/3" />
                    <div className="absolute w-full h-px bg-gray-800 top-1/2" />
                    <div className="absolute w-full h-px bg-gray-800 top-2/3" />
                    <div className="relative z-10 w-6 h-6 border border-gray-800 rounded-md bg-gradient-to-b from-yellow-300 to-yellow-500" />
                </div>
              </div>
              <div className="mt-6">
                <div className="text-lg sm:text-2xl text-white font-mono tracking-wider break-all">
                  4242 4242 4242 4242
                </div>
              </div>
              <div className="mt-6 flex justify-between items-end">
                <div>
                  <div className="text-white/60 text-xs uppercase mb-1">Card Holder</div>
                  <div className="text-white text-sm">DEBIT USER</div>
                </div>
                <div className="text-right">
                  <div className="text-white/60 text-xs uppercase mb-1">Expires</div>
                  <div className="text-white text-sm">12/23</div>
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
                    <div className="text-white text-md font-semibold">936</div>
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

