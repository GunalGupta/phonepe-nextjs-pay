'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import DebitCard from '@/components/DebitCard'
import CreditCards from '@/components/CreditCard'
import NetBanking from '@/components/NetBanking'
import { Moon, Sun, ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])
  

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <Link href="/">
              <Button variant="ghost" size="icon" className="mr-4">
                <ArrowLeft className="h-6 w-6" />
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">UAT Testing Credentials</h1>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full"
          >
            {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DebitCard />
          <CreditCards />
          <NetBanking />
        </div>
        <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          Note: For testing transactions, the lower amount limit is Rs.1/- and the upper amount limit is Rs.1000/-.
          Please ensure your transaction requests are within these limits or <Link href={"https://developer.phonepe.com/v1/docs/uat-testing/"} target='_blank' className='underline'> refer here</Link>.
        </p>
      </div>
    </div>
  )
}

