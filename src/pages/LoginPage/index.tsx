import kakaoSymbol from '@/assets/Icons/kakao.svg'
import logo from '@/assets/images/fling.png'
import MerryGoRound from '@/components/MerryGoRound'

const LoginPage = () => {
  const LoginAssign = () => {
    const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI
    const CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`
    window.location.href = KAKAO_AUTH_URL
  }

  return (
    <div className="flex h-full w-full flex-col items-center bg-white">
      <img className=" mt-3 h-4 w-6" src={logo} />
      <MerryGoRound />
      <div className="font-xs mb-1 mt-[4.4rem] text-center text-[#959595]">
        SNS로 간편하게 가입하기
      </div>
      <button
        onClick={LoginAssign}
        className="font-base flex h-[45px] w-[327px] items-center justify-center gap-2 rounded-[3rem] bg-[#FEE500]"
      >
        <div className="mt-1 flex">
          <img src={kakaoSymbol} className="mr-1 h-[18px] w-[18px]" />
          <div className="font-md">카카오톡</div>
          <div>으로 로그인</div>
        </div>
      </button>
    </div>
  )
}

export default LoginPage
