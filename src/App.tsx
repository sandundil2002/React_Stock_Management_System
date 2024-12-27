import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RootLayoutComponent} from "./components/header/RootLayoutComponent.tsx";
import {CustomerPage} from "./pages/CustomerPage.tsx";

function App() {

    const routes = createBrowserRouter([
        {
            path: '',
            element : <RootLayoutComponent/>,
            children : [
                // { path : '', element : <Dashboard/>},
                { path : '/customers', element : <CustomerPage/>},
            ]
        },
    ])

  return (
    <>
        <RouterProvider router={routes} />
    </>
  )
}

export default App