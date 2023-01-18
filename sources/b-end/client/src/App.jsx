// Router
import { RouterProvider } from "react-router-dom";
import router from "./routes";

// Store (reducers / redux)
import { Provider } from "react-redux";
import store from "./stores";

function App() {
  return (
    // Bungkus RouterProvider di dalam Provider
    // Supaya di dalam Router bisa memanfaatkan / memanggil seluruh
    // State dalam redux
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
