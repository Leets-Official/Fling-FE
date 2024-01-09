import Content from '@/components/Sidebar/Content'
import { Link } from 'react-router-dom'

const Box = () => {
  return (
    <>
      <div className="flex h-screen w-[315px] flex-col gap-14 rounded-l-[50px] bg-white pl-10 pt-12">
        <Link to="/login">
          <p className="text-[22px] font-extrabold">로그인 후 사용하세요!</p>
        </Link>
        <div className="flex flex-col gap-8 font-extralight text-gray-500">
          <Content content="MY" route="/mypage" />
          <Content content="SHOP" route="/store" />
          <Content content="LUCKY COIN" route="/coin" />
          <Content content="ITEM" route="/" />
        </div>
      </div>
    </>
  )
}

export default Box
