import { Item } from '@/components'
import { useEffect, useState } from 'react'
import useGetItems from '@/apis/hooks/useGetItems.ts'
import Purchase from '@/components/Purchase'

interface ChooseFlowerProps {
  selectedFlower: string
  setSelectedFlower: React.Dispatch<React.SetStateAction<string>>
}

const ChooseFlower = ({
  selectedFlower,
  setSelectedFlower,
}: ChooseFlowerProps) => {
  const { data } = useGetItems()
  const flowers = data?.flowers
  const [selectedFlowerIndex, setSelectedFlowerIndex] = useState<number>(0)
  const ownedFlowers = flowers
    ? flowers.filter((flower) => flower.amount > 0 || flower.amount === -1)
    : []
  const flowerTypes = ownedFlowers.map((flower) => flower.type)
  const initialSelectedFlower = flowerTypes[selectedFlowerIndex]
  const [localSelectedFlower] = useState<string>(initialSelectedFlower)
  const handleCircleClick = (index: number) => {
    setSelectedFlower(flowerTypes[index])
    setSelectedFlowerIndex(index)
  }
  useEffect(() => {
    setSelectedFlower(localSelectedFlower)
  }, [localSelectedFlower, setSelectedFlower])

  return (
    <div className="mx-7 flex h-full flex-col overflow-hidden">
      <p className="font-ls text-gray-200">
        원하는 꽃이 없다면 상점에서 구매 후 골라주세요.
      </p>
      <div className="flex h-full flex-col justify-center">
        <div className="font-xs mt-4 flex flex-col items-center">
          <Purchase className="h-[250px] w-[176px]" name={selectedFlower} />
          <p className="mb-2 mt-5 rounded-[50px] border px-3 py-1">
            {selectedFlower.replace(/-/g, ' ')}
          </p>
        </div>

        <div
          className={`mb-7 flex flex-nowrap gap-5 overflow-y-auto px-1.5 py-1.5 ${flowerTypes.length === 3 ? 'justify-center' : ''} scrollbar-hide`}
        >
          {flowerTypes.map((flower, index) => (
            <div
              key={index}
              className={`mt-7 cursor-pointer ${
                selectedFlowerIndex === index
                  ? 'rounded-full shadow-[1px_1px_7.1px_rgba(0,0,0,0.5)]'
                  : ''
              }`}
              style={{ flex: '0 0 auto', minWidth: '10px' }}
              onClick={() => handleCircleClick(index)}
            >
              <Item name={flower} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChooseFlower
