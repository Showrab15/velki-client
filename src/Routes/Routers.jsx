import {
  createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import MasterAgent from "../pages/MasterAgent";
import Home from "../pages/Home";
import SuperAgents from "../pages/SuperAgents";
import SubAdmins from "../pages/SubAdmins";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import Secret from "../components/Secret/Secret";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AddSubAdmin from "../pages/Dashboard/AddSubAdmin";
import Siteadmin from "../components/SiteAdmin/SiteAdmin";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
     {
      path : '/master-agent',
      element : <MasterAgent/>
     },
     {
      path : '/super-agent',
      element : <SuperAgents/>
     },
     {
      path : '/sub-admin',
      element : <SubAdmins/>
     },
     {
      path : '/site-admin',
      element : <Siteadmin/>
     },
     {
      path : '/login',
      element : <Login/>
     },
     {
      path : 'secret',
      element : <PrivateRoute><Secret/></PrivateRoute>
     },
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard/>,
    children:  [
      
      {
path : 'add-sub-admin',
element: <AddSubAdmin/>
      }
    ]
  }
]);
