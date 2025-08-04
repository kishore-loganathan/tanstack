import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const Profile = React.lazy(() => import("./pages/Profile"));
function App() {
  return (
    <BrowserRouter>
      <div>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}
export default App;
