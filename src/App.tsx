import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RootLayoutComponent} from "./components/header/RootLayoutComponent.tsx";
import {CustomerPage} from "./pages/CustomerPage.tsx";
import {DashboardPage} from "./pages/DashboardPage.tsx";
import {NotFoundPage} from "./pages/NotFoundPage.tsx";
import {ItemPage} from "./pages/ItemPage.tsx";
import {OrderPage} from "./pages/OrderPage.tsx";

function App() {

    const routes = createBrowserRouter([
        {
            path: '',
            element : <RootLayoutComponent/>,
            children : [
                { path : '', element : <DashboardPage/>},
                { path : '/customers', element : <CustomerPage/>},
                { path : '/items', element : <ItemPage/>},
                { path : '/orders', element : <OrderPage/>},
            ]
        },
        {
            path: "*",
            element: <NotFoundPage/>
        }
    ])

  return (
    <>
        <RouterProvider router={routes} />
    </>
  )
}

export default App