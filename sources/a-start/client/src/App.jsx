// react-router
import { RouterProvider } from "react-router-dom";
import router from "./routes";

// import si Provider dari si react-redux
import { Provider } from "react-redux";
import store from "./stores";

function App() {
  return (
    // Selipin di RouterProvider di dalam component Provider
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
