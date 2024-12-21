import { BanknoteIcon as Bank } from 'lucide-react'

export default function NetBanking() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Net Banking</h2>
        <div className="flex items-center justify-center w-full h-56 bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-md">
          <Bank className="w-24 h-24 text-white" />
        </div>
        <div className="mt-4 text-gray-700 dark:text-gray-300">
          <p><strong>How to verify Net Banking Flow:</strong></p>
          <ul className="list-disc list-inside mt-2">
            <li>Always use &quot;bankId&quot;: &quot;SBIN&quot; for testing purposes in the request payload of PAY API.</li>
            <li><strong>Username:</strong> test</li>
            <li><strong>Password:</strong> test</li>
            <li>Click &quot;Submit&quot; and done.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

