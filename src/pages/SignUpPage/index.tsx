import { ChangeEvent, useEffect, useState } from 'react'
import { Header, Button } from '@/components'
import { CheckIcon } from '@/assets/Icons'
import { useNavigate } from 'react-router'
import { usePostRegister } from '@/apis/hooks'
import { userIdState } from '@/recoil'
import { useRecoilState } from 'recoil'
import error500Page from '@/pages/Error500Page'

const SignUpPage = () => {
  const [nickname, setNickname] = useState<string>('')
  const [message, setMessage] = useState<string>(
    '공백 포함 10자 이내로 작성해 주세요.',
  )
  const [activeButton, setActiveButton] = useState<boolean>(false)
  const [userId, setUserId] = useRecoilState(userIdState)
  const navigate = useNavigate()
  const { mutate: postRegister } = usePostRegister()
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value)
    if (e.target.value.length < 1) {
      setMessage('공백 포함 10자 이내로 작성해 주세요.')
      setActiveButton(false)
    } else if (e.target.value.length > 10) {
      setMessage('닉네임이 10자를 초과하였습니다.')
      setActiveButton(false)
    } else {
      setMessage('가능한 닉네임입니다.')
      setActiveButton(true)
    }
  }

  const handleClick = async () => {
    try {
      const props = {
        nickname,
        accessToken: localStorage.getItem('kakaoToken'),
      }
      postRegister(props, {
        onSuccess: (data) => {
          localStorage.setItem('accessToken', data.data.data.token.accessToken)
          localStorage.setItem(
            'refreshToken',
            data.data.data.token.refreshToken,
          )
          setUserId(data.data.data.userId)
          localStorage.setItem('email', data.data.data.email)
          navigate(`/?${userId}`)
        },
      })
    } catch (err) {
      return error500Page
    }
  }

  useEffect(() => {
    if (
      localStorage.getItem('email') ||
      localStorage.getItem('refreshToken') ||
      localStorage.getItem('accessToken')
    ) {
      navigate('/')
    }
  }, [navigate])

  return (
    <>
      <Header
        leftIcon="GoBackIcon"
        onGoBack={() => {
          navigate('/login')
        }}
      />
      <div className="mx-6 flex h-full flex-col">
        <div className="font-lg text-[#282828]">닉네임을 입력해 주세요.</div>
        <div className="font-base mt-2 h-8 w-[15rem] text-[0.75rem] text-[#282828]">
          입력한 닉네임으로 지인에게 꽃다발과 편지를 보낼 수 있어요
        </div>
        <div className="flex h-full flex-col justify-center">
          <div className="relative">
            <input
              type="text"
              className="font-base w-full bg-white px-2.5 py-0.5 text-[#282828] focus:outline-none"
              placeholder="닉네임"
              onChange={handleInput}
            />
            <hr />
            {activeButton && (
              <CheckIcon className="absolute right-2 top-[0.5rem]" />
            )}
          </div>
          <ul
            className={`font-xs mx-6 mt-2 list-disc ${
              nickname.length > 10 ? 'text-[#ff7474]' : 'text-[#959595]'
            }`}
          >
            <li>{message}</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col px-6 py-5">
        <Button
          className={`font-sm ${
            activeButton ? 'bg-black text-white' : 'bg-[#DDDDDD] text-[#282828]'
          }`}
          disabled={!activeButton}
          onClick={handleClick}
        >
          다음
        </Button>
      </div>
    </>
  )
}

export default SignUpPage
