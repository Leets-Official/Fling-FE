import { Item } from '@/components'
import { useEffect, useState } from 'react'
import useGetItems from '@/apis/hooks/useGetItems.ts'
import Purchase from '@/components/Purchase'

interface ChooseCardProps {
  selectedCard: string
  setSelectedCard: React.Dispatch<React.SetStateAction<string>>
}
const ChooseCard = ({ selectedCard, setSelectedCard }: ChooseCardProps) => {
  const { data } = useGetItems()
  const cards = data.cardItems
  const [selectedCardIndex, setSelectedCardIndex] = useState<number>(0)
  const ownedCards = cards
    ? cards.filter((card) => card.amount > 0 || card.amount === -1)
    : []
  const cardsTypes = ownedCards.map((card) => card.type)
  const initialSelectedCard = cardsTypes[selectedCardIndex]
  const [localSelectedCard] = useState<string>(initialSelectedCard)
  const handleCircleClick = (index: number) => {
    setSelectedCard(cardsTypes[index])
    setSelectedCardIndex(index)
  }
  useEffect(() => {
    setSelectedCard(localSelectedCard)
  }, [localSelectedCard, setSelectedCard])

  return (
    <div className="mx-7 flex h-full flex-col overflow-hidden">
      <p className="font-ls text-gray-200">
        아래의 편지지 중 하나를 골라주세요.
      </p>
      <div className="flex h-full flex-col justify-center">
        <div className="font-xs mt-4 flex flex-col items-center">
          <Purchase className="h-[250px]" name={selectedCard} />
          <p className="mb-2 mt-5 rounded-[50px] border px-3 py-1">
            {selectedCard.replace(/-/g, ' ')}
          </p>
        </div>

        <div
          className={`mb-7 flex flex-nowrap gap-5 overflow-y-auto px-1.5 py-1.5 ${cardsTypes.length === 3 ? 'justify-center' : ''} scrollbar-hide`}
        >
          {cardsTypes.map((card, index) => (
            <div
              key={index}
              className={`mt-7 cursor-pointer  ${
                selectedCardIndex === index
                  ? 'rounded-full shadow-[1px_1px_7.1px_rgba(0,0,0,0.5)]'
                  : ''
              }`}
              style={{ flex: '0 0 auto', minWidth: '10px' }}
              onClick={() => handleCircleClick(index)}
            >
              <Item name={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChooseCard
