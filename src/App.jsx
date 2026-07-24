// src/App.jsx — Application root.
// Renders the React Router so the full route tree (including the
// dev-only /dev/components visual review) is reachable.
import AppRouter from "./router/AppRouter";

export default function App() {
  return <AppRouter />;
}
