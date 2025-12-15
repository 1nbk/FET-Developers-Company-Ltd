# FET Developers

A modern, high-performance corporate website for **FET Developers Company Ltd.**, a leader in Construction, Oil & Gas, and General Merchandise.

![FET Developers Logo](/public/fet-logo.png)

##  Overview

This project is a Next.js 15 application built with TypeScript and Tailwind CSS. It features a premium, responsive design with smooth animations and a robust backend integration using Prisma and SQLite. The website showcases the company's services, projects, and career opportunities, providing a seamless user experience across all devices.

##  Key Features

-   **Modern Tech Stack**: Built with Next.js 15 (App Router), React 19, and TypeScript.
-   **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop using Tailwind CSS v4.
-   **Dynamic Animations**: Engaging entrance and scroll animations powered by Framer Motion.
-   **Backend Integration**: SQLite database managed with Prisma ORM for handling projects, news, and job openings.
-   **Contact Form**: Functional contact form with validation.
-   **SEO Optimized**: Semantic HTML and optimized metadata for better search engine visibility.

##  Tech Stack

-   **Framework**: [Next.js 15](https://nextjs.org/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Database**: [SQLite](https://www.sqlite.org/)
-   **ORM**: [Prisma](https://www.prisma.io/)
-   **Icons**: [Lucide React](https://lucide.dev/)

##  Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/fet-developers.git
    cd fet-developers
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up the database:**
    ```bash
    npx prisma migrate dev --name init
    npx prisma db seed
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

##  Project Structure

-   `/app`: Next.js App Router pages and layouts.
-   `/components`: Reusable UI components and sections.
-   `/lib`: Utility functions and Prisma client instance.
-   `/prisma`: Database schema and seed scripts.
-   `/public`: Static assets (images, logos).

##  License

This project is licensed under the MIT License.
