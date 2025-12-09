# MAP-PROJECT (India 3D Explorer)

A 3D interactive map application designed to explore Indian states and cities using satellite imagery and terrain data.

## 🛠 Tech Stack & Resources

### Frontend
- **[React 19](https://react.dev/)**: chosen for its component-based architecture, making it easy to manage the UI state (e.g., search overlay, selected location).
- **[Vite](https://vitejs.dev/)**: A modern build tool that provides a super-fast development server (HMR) and optimized production builds.
- **[CesiumJS](https://cesium.com/platform/cesiumjs/)**: The core technology for rendering the 3D globe. It was chosen because it's the industry standard for high-fidelity geospatial visualization on the web, supporting 3D terrain, imagery layers, and camera flights.
- **[Resium](https://resium.darwineducation.com/)**: A React library for Cesium. It allowed us to use Cesium components (like `<Viewer>`, `<Entity>`) declaratively within our React JSX, bridging the gap between imperative Cesium code and React's state management.

### Deployment & Tools
- **[Vercel](https://vercel.com/)**: Chosen for hosting because of its seamless integration with GitHub and zero-config support for Vite/React apps. It handles our CI/CD automatically.
- **Git & GitHub**: For version control and source code management.

## 📂 Project Structure

- **`frontend/`**: Contains the React application.
  - `src/components/MapViewer.jsx`: Main 3D globe component.
  - `src/components/SearchOverlay.jsx`: Mobile-responsive search interface.
  - `src/data/`: Static data for Indian states and cities.
- **`backend/`**: (Reserved for future API development).

## 🚀 Key Features implemented
- **3D Fly-to Navigation**: Smooth camera transitions to specific coordinates.
- **Responsive Design**: Collapsible search bar for mobile users.
- **Terrain & Lighting**: High-dynamic-range rendering for realistic globe visuals.
