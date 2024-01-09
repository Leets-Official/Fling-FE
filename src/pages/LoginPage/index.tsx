import loginImage from '@/assets/images/kakao_login_medium_wide.png'
import logo from '@/assets/images/fling.png'
import MerryGoRound from '@/components/MerryGoRound'

const LoginPage = () => {
  const LoginAssign = () => {
    const REDIRECT_URI = 'http://localhost:5173/oauth'
    const CLIENT_ID = 'aea758d142fcdc0a424fe75b57219816'

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`
    window.location.href = KAKAO_AUTH_URL
  }

  return (
    <div className="flex h-screen flex-col items-center bg-white">
      <img className=" mt-3 h-4 w-6" src={logo} />
      <MerryGoRound />
      <div className="mx-6 mt-20 flex flex-col justify-center gap-2.5">
        <div className="text-center text-[10px]">SNS로 간편하게 가입하기</div>
        <img src={loginImage} onClick={LoginAssign} />
      </div>
    </div>
  )
}

export default LoginPage
