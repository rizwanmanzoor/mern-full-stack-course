import { Analytics } from '@vercel/analytics/react';

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <MainLayout>
        <Home />
      </MainLayout>

      <Analytics />
    </>
  );
}
