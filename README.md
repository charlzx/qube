# Qube - 3D Low-Poly World

Qube is an interactive 3D procedural simulation built using React, Vite, Three.js, and Rapier physics. It features a dynamically generated terrain, physical collisions, and a low-poly aesthetic.

## Features

- Procedural Terrain: Custom heightfield generated using Simplex Noise algorithms.
- Physics Engine: Realistic rigid body physics powered by Rapier, enabling player collision with the terrain, trees, and houses.
- Low-Poly Visuals: Stylized 3D models including trees, buildings, and a sky blue to hot pink gradient sphere.
- Day-Night Cycle: Dynamic lighting updates matching sun movement.
- Water Simulation: Interactive low-poly water surface with custom normals.

## Getting Started

### Prerequisites

Ensure you have Node.js and pnpm (or npm/yarn) installed.

### Installation

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start the development server:
   ```bash
   pnpm dev
   ```

3. Build the application for production:
   ```bash
   pnpm build
   ```

## Controls

- W / S / A / D or Arrow Keys: Navigate the player sphere across the landscape.
- Orbit Controls: Click and drag with mouse to orbit, scroll to zoom.
