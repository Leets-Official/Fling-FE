import { createBrowserRouter } from 'react-router-dom'
import { MainPage, LoginPage, CoinDrawPage, OauthPage } from '@/pages'
import { PATH } from './constants'
import Layout from './Layout'

const router = createBrowserRouter([
  {
    path: PATH.MAIN,
    element: <Layout />,
    children: [
      {
        path: PATH.MAIN,
        element: <MainPage />,
      },
      {
        path: PATH.LOGIN,
        element: <LoginPage />,
      },
      {
        path: PATH.COIN,
        element: <CoinDrawPage />,
      },
    ],
  },
  {
    path: PATH.LOGINOAUTH,
    element: <OauthPage />,
  },
])

export default router
