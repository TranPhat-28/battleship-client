import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

// Layouts
import RootLayout from "./layouts/RootLayout";

// Pages
import Home from "./pages/Home";
import Formation from "./pages/Formation";
import Shop from "./pages/Shop";
import Settings from "./pages/Settings";
import Library from "./pages/Library";

// Browser Router
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/formation" element={<Formation />} />
            <Route path="/library" element={<Library />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/settings" element={<Settings />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
