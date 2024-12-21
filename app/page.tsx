'use client'

import Image from "next/image";
import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button";
import { initiatePayment } from "@/actions/initiatePayment";
import { useRouter } from "next/navigation";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)
  const router = useRouter();
 
  const handlePay = async (data: number) => {
    try {
      const result = await initiatePayment(data);
      if (result) {
        router.push(result.redirectUrl); // Redirect to status check page
      }
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="flex flex-col min-h-screen dark:text-white transition-colors duration-300 font-[family-name:var(--font-geist-sans)]">
      <header className="p-4 absolute top-0 right-0">
      <Button
            variant="ghost"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full"
          >
            {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
      </Button>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-8 space-y-8">
        <div className="flex flex-wrap justify-center items-center gap-4">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <span className="text-2xl font-bold">✖</span>
          <Image
            src="/phonepe.svg"
            alt="Phonepe logo"
            width={180}
            height={38}
            priority
          />
        </div>

        <ol className="list-decimal list-inside text-sm text-center max-w-md font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FGunalGupta%2Fphonepe-nextjs-pay"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <InteractiveHoverButton text="Pay ₹1" className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44" onClick={() => handlePay(1)} />
        </div>

      </main>

      <footer className="mt-auto p-4 flex flex-wrap justify-center items-center gap-6">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://developer.phonepe.com/v1/reference/pay-api-1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          PhonePe API
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/test-credentials"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Test Credentials
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://medium.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Back to medium story →
        </a>
      </footer>
    </div>
  );
}
