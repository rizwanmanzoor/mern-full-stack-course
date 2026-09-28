import { Analytics } from '@vercel/analytics/react';

import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";

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
