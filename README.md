# 📍 Istanbul Boutique Hotels Explorer

A high-performance, **Pixel-Perfect**, and Type-Safe hotel discovery application built with **Next.js 14 (App Router)**, **TypeScript**, and **Google Maps API**.

This project provides a premium user experience for discovering curated alcohol-free and family-friendly hotels in Istanbul, featuring real-time synchronization between a dynamic map and an interactive list.

---

## ✨ Key Features

- **🔄 Bi-Directional Synchronization:** Clicking a map marker automatically scrolls the sidebar to the corresponding hotel card with a smooth "Scroll-to-View" animation.
- **🗺️ Smart Viewport Filtering:** The hotel list dynamically updates as the user pans or zooms the map, showing only the hotels currently visible on the screen.
- **🔍 Real-Time Search:** Search for hotels by name or location; the map automatically pans and zooms to the best match.
- **🎨 Modern UI/UX:** A minimalist, border-focused design inspired by high-end travel platforms. Built with **Tailwind CSS** and enhanced with **Framer Motion** for fluid interactions.
- **🛡️ 100% Type-Safe:** Robust state management using **Zustand** and full TypeScript integration for all Google Maps components.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Map Engine:** [@react-google-maps/api](https://www.npmjs.com/package/@react-google-maps/api)
- **State Management:** [Zustand](https://github.com/pmndrs/zustand)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### 1. Prerequisites

- Node.js 18.x or later
- A Google Cloud Project with **Maps JavaScript API** enabled.

### 2. Installation

```bash
# Clone the repository
git clone [https://github.com/emrullahayin/hotel-maps-project.git](https://github.com/emrullahayin/hotel-maps-project.git)

# Navigate to the project directory
cd hotel-maps-project

# Install dependencies
npm install
```
