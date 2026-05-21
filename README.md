# 🚘 NeoMotors

<div align="center">

### Premium Luxury Car Booking & Management Platform

A modern full-stack luxury car marketplace built with Next.js, React 19, MongoDB, and Better Auth.

<br />

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge\&logo=next.js)
![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge\&logo=react)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?style=for-the-badge\&logo=mongodb)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?style=for-the-badge\&logo=tailwind-css)
![Better Auth](https://img.shields.io/badge/Auth-BetterAuth-orange?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

</div>

---

## 📌 Overview

NeoMotors is a premium luxury car booking platform where users can explore high-end vehicles, manage bookings, add their own cars, and experience a modern automotive interface inspired by elite performance brands.

The project focuses on:

* ⚡ High-performance modern UI/UX
* 🔐 Secure authentication system
* 🚗 Dynamic car browsing & booking
* 📱 Fully responsive layouts
* 🎨 Premium design system
* 🧩 Component-driven architecture
* 🌐 Scalable Next.js App Router structure

---

# ✨ Key Features

## 🔐 Authentication & Security

* Email & Password Authentication
* Google Social Login
* JWT-based Authentication
* Protected Routes & Sessions
* Secure Cookie Session Management
* Better Auth integration with MongoDB

## 🚘 Car Marketplace

* Browse premium luxury cars
* Explore detailed vehicle pages
* Search cars instantly
* Brand-based filtering system
* Responsive car listing grid
* Dynamic routing for each car

## 📅 Booking System

* Book available vehicles
* Manage personal bookings
* Cancel bookings
* View booking history
* Secure booking APIs using tokens

## 🛠️ Car Management

* Add new cars
* Update existing car information
* Delete added cars
* Manage personal inventory

## 🎨 UI & Experience

* Fully responsive design
* Modern glassmorphism-inspired UI
* Animated interactions with Framer Motion
* Beautiful loading states & spinners
* Clean reusable component system
* HeroUI + DaisyUI integration

---

# 🧱 Tech Stack

| Category        | Technology                |
| --------------- | ------------------------- |
| Framework       | Next.js 16                |
| Frontend        | React 19                  |
| Styling         | Tailwind CSS 4            |
| UI Libraries    | HeroUI, DaisyUI           |
| Animation       | Framer Motion             |
| Authentication  | Better Auth               |
| Database        | MongoDB                   |
| Icons           | React Icons, Lucide React |
| Slider/Carousel | Swiper.js                 |
| Package Manager | npm                       |

---

# 📂 Project Structure

```bash
src/
├── app/
│   ├── (auth)/
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── (main)/
│   │   ├── add-car/
│   │   ├── all-cars/
│   │   ├── my-added-cars/
│   │   └── my-bookings/
│   ├── globals.css
│   └── layout.js
│
├── components/
│   ├── Add-Cars/
│   ├── Explore-Cars/
│   ├── Homepage/
│   ├── Shared/
│   ├── Spinner/
│   └── Wrapper/
│
├── lib/
│   ├── auth.js
│   └── auth-client.js
│
└── assets/
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/alfaazahmed7/neomotors-client.git
cd neomotors-client
```

## 2️⃣ Install Dependencies

```bash
npm install
```

## 3️⃣ Configure Environment Variables

Create a `.env.local` file in the root directory.

```env
MONGODB_URI=your_mongodb_connection_string

BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

NEXT_PUBLIC_SERVER_URL=http://localhost:5000
```

---

# ▶️ Run the Development Server

```bash
npm run dev
```

Open your browser:

```bash
http://localhost:3000
```

---

# 🧪 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

# 🖼️ Main Pages

| Route            | Description            |
| ---------------- | ---------------------- |
| `/`              | Homepage               |
| `/sign-in`       | User login page        |
| `/sign-up`       | User registration page |
| `/all-cars`      | Browse all cars        |
| `/all-cars/[id]` | Single car details     |
| `/add-car`       | Add a new car          |
| `/my-added-cars` | Manage added cars      |
| `/my-bookings`   | User booking dashboard |

---

# 🔑 Authentication Flow

NeoMotors uses **Better Auth** integrated with MongoDB.

### Supported Login Methods

* Email & Password
* Google OAuth

### Authentication Features

* JWT Tokens
* Secure Session Cookies
* Persistent Login State
* Protected User Operations

---

# 🎨 Design Philosophy

NeoMotors was designed with a luxury-first aesthetic inspired by premium automotive brands.

### UI Goals

* Elegant dark interface
* High visual contrast
* Modern typography
* Smooth animations
* Minimal but premium layout system
* Consistent spacing & reusable patterns

---

# 📱 Responsive Experience

The application is fully optimized for:

* 📱 Mobile Devices
* 💻 Laptops
* 🖥️ Large Desktop Screens
* 📟 Tablets

---

# 🚀 Performance Optimizations

* Next.js App Router
* Optimized Image Rendering
* Lazy Loading with Suspense
* Modular Component Architecture
* Lightweight Client Components
* Efficient State Management

---

# 🧩 Core Components

### Homepage Components

* Banner
* Available Cars
* Why Choose NeoMotors
* Customer Testimonials

### Shared Components

* Navbar
* Footer
* Layout Wrapper
* Loading Spinner

### Car Features

* SearchCars
* FilterCars
* CarCard
* CarDetails
* BookingFormField
* UpdateCarModal

---

# 📦 Dependencies Used

```json
{
  "next": "16.2.6",
  "react": "19.2.4",
  "tailwindcss": "4.3.0",
  "better-auth": "1.6.11",
  "mongodb": "7.2.0",
  "framer-motion": "12.39.0",
  "swiper": "12.1.4"
}
```

---

# 🤝 Contributing

Contributions are welcome.

If you would like to improve NeoMotors:

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push the branch
5. Open a Pull Request

---

# 👨‍💻 Developer

### Alfaaz Ahmed

Passionate Full Stack Web Developer focused on building modern, scalable, and premium user experiences using the latest web technologies.

---

<div align="center">

### ⭐ If you like this project, give it a star on GitHub ⭐

Built with ❤️ using Next.js, React & MongoDB.

</div>
