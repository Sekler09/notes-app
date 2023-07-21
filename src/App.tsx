import {RouterProvider} from "react-router-dom";
import { router } from "./routes/router";
import {Provider} from "react-redux";
import "./index.css";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";

const  App = () => {

  return (
    <Provider store={store}> 
      <PersistGate persistor={persistor} loading={<h1>Loading...</h1>}>
      <RouterProvider router={router}/>
      </PersistGate>
    </Provider>
  );
};

export default App;
