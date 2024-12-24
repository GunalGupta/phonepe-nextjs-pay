# PhonePe Payment Gateway Integration with Next.js

A Next.js app demonstrating PhonePe payment gateway integration.

## Overview

This project showcases how to integrate the PhonePe payment gateway into a Next.js application. It provides a practical example of initiating, processing, and verifying payments using PhonePe's APIs within the Next.js framework. The application is built using TypeScript and utilizes Next.js features like Route Handlers.

## Features

*   **Payment Initiation:** Demonstrates how to generate a unique transaction payload for initiating a payment request with PhonePe.
*   **Payment Processing:** Shows how to redirect users to PhonePe's secure payment interface to complete the transaction.
*   **Payment Verification:** Implements server-side verification of the payment status using PhonePe's API and secure checksum validation.
*   **Next.js Route Handlers:** Uses Next.js Route Handlers for API endpoints, following the recommended approach for API development in Next.js.
*   **Error Handling:** Includes error handling and user-friendly messages to provide a smooth user experience.
*   **React Toastify:** Uses `react-toastify` for displaying notifications about the payment status.
*   **Environment Variables:** Securely manages sensitive information like API keys and URLs using environment variables (`.env`).

## Prerequisites

*   Node.js (v16.8 or higher recommended)
*   npm or yarn
*   A PhonePe Merchant Account (for testing and production)

## Getting Started

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2. **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Set up environment variables:**

    *   Create a `.env.local` file in the root directory.
    *   Add the following environment variables, replacing the placeholder values with your PhonePe sandbox credentials:

    ```
    NEXT_PUBLIC_BASE_URL=http://localhost:3000 # Update this in production
    NEXT_PUBLIC_PHONE_PAY_HOST_URL=https://api-preprod.phonepe.com/apis/pg-sandbox
    NEXT_PUBLIC_MERCHANT_ID=PGTESTPAYUAT86
    NEXT_PUBLIC_SALT_KEY=96434309-7796-489d-8924-ab56988a6076
    NEXT_PUBLIC_SALT_INDEX=1
    ```

    **Note:** These are PhonePe's sandbox credentials for testing purposes. You will need to obtain production credentials from PhonePe when deploying your application.

4. **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. **Open your browser and visit:** `http://localhost:3000`


## Usage

1. Click the "Pay ₹1" button on the home page.
2. You will be redirected to the PhonePe payment page (using sandbox credentials for testing).
3. Complete the payment using the test credentials provided in the PhonePe UAT documentation: [https://developer.phonepe.com/v1/docs/uat-testing](https://developer.phonepe.com/v1/docs/uat-testing)
4. After the payment is processed, you will be redirected back to the application's status page, where you will see the payment status.

## Security Considerations

*   **Server-Side Verification:** Always verify the payment status on the server-side (in `app/api/status/route.ts`) using the secure checksum. **Do not rely solely on client-side redirect parameters.**
*   **Environment Variables:** Store sensitive information like API keys and secrets in environment variables and **never** hardcode them directly into your code.
*   **Input Validation:** Sanitize and validate all user inputs to prevent security vulnerabilities.
*   **HTTPS:** Use HTTPS in production to encrypt communication between your application and PhonePe's servers.

## Deployment

To deploy this application to production:

1. Obtain production API keys and URLs from PhonePe.
2. Update the environment variables in your `.env.local` or your hosting provider's environment variable settings with your production credentials.
3. Build the application:

    ```bash
    npm run build
    # or
    yarn build
    ```

4. Deploy the `out` folder to your hosting provider (e.g., Vercel, Netlify, AWS).

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Further Reading

**Medium Story:** [How to Integrate the PhonePe Payment Gateway in Your Next.js Application](https://medium.com/@guptagunal/how-to-integrate-the-phonepe-payment-gateway-in-your-next-js-application-046b14c38793) - A detailed step-by-step guide on which this repository is based.

## Acknowledgements

*   [PhonePe Developer Documentation](https://developer.phonepe.com/docs/introduction/)
*   [Faisal Husain's Blog](https://faisalhusa.in/blog/integrate-phonepay-to-your-nextjsapp) (for inspiration and code examples)

## Disclaimer

This project is for educational and demonstration purposes only. Use it as a starting point for your own integration and ensure you follow PhonePe's guidelines and best practices for security and compliance.
