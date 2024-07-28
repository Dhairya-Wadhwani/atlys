import { RouterProvider } from "react-router-dom";
import { router } from "./components/Route";

function App() {
  return (
    <>
      <div className="bg-[#131318] h-[100vh] w-full overflow-y-auto">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
