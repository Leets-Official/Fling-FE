import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface tokenProps extends AxiosRequestConfig {
  accessToken?: string
}

const OauthPage = () => {
  const params = new URL(document.location.toString()).searchParams
  const code = params.get('code')
  const error = params.get('error')
  const grant_type = 'authorization_code'
  const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI
  const CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID
  const navigate = useNavigate()

  const tokenLogin = async (accessToken: string) => {
    try {
      const res = await axios.get('https://api.fling.today/user/login', {
        accessToken,
      } as tokenProps)
      console.log(res)
      navigate('/')
    } catch (err) {
      if ((err as AxiosError).response?.status === 404) {
        navigate('/nickname')
      }
    }
  }
  useEffect(() => {
    const bringToken = async () => {
      try {
        const res = await axios.post(
          `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${code}`,
          {},
          {
            headers: {
              'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
          },
        )
        if (res.status === 200) {
          console.log(res)
          tokenLogin(res.data.access_token)
        }
      } catch (err) {
        if ((err as AxiosError).response?.status === 400) {
          navigate('/login')
        }
      }
    }
    if (error) navigate('/login')
    if (code) bringToken()
  }, [code, navigate, CLIENT_ID, REDIRECT_URI, error])

  return <div>로딩 중</div>
}

export default OauthPage
