import { Outlet, Navigate } from 'react-router-dom'
import { getAccessToken } from './token';

const PrivateRoutes = () => {
  const token = getAccessToken();
  return (
    token ? <Outlet /> : <Navigate to="/login" />
  )
}

export default PrivateRoutes