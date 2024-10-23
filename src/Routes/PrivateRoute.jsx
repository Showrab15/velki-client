/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';
import AuthContext from '../Providers/AuthProvider'
import useContext from 'react'
const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    
    if(loading){
        return <h3>Loading............</h3>
    }
    if (user) {
        return children;
    }
    
    return <Navigate to='/login' />;
};

export default PrivateRoute;
