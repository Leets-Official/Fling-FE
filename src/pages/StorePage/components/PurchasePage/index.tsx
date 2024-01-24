import { Button } from '@/components'
import { useNavigate } from 'react-router-dom'
import ConfirmPurchase from '@/components/ConfirmPurchase.tsx'

interface puchasePageProps {
  itemName: string
}
const PurchasePage = ({ itemName }: puchasePageProps) => {
  const navigate = useNavigate()

  return (
    <div>
      <div className="mx-8">
        <ConfirmPurchase name={itemName} />
        <div className="font-lg mt-16 text-center">
          <p>축하합니다!</p>
          <div className="mt-4 flex justify-center">
            <p>{itemName.replace(/-/g, ' ')}</p>
            <p className="text-gray-200">를 구매하셨어요.</p>
          </div>
          <p className="text-gray-200">꽃을 지인들에게 선물해보세요!</p>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <Button
            onClick={() => {
              window.location.reload()
            }}
            className="font-sm h-[40px] w-[108px] rounded-[50px]"
          >
            상점 가기
          </Button>
          <Button
            onClick={() => {
              navigate('/item')
            }}
            className="font-sm h-[40px] w-[108px] rounded-[50px]"
          >
            도감 확인
          </Button>
        </div>
      </div>
    </div>
  )
}
export default PurchasePage
