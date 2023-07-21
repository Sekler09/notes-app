import {RouterProvider} from "react-router-dom";
import { router } from "./constants/router";
import {Provider} from "react-redux";
import "./index.css";
import { store } from "./store";

const  App = () => {

  return (
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  );
};

export default App;
