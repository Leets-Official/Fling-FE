import { FlowerFrame, MarryGoRound, Ribbons, ItemFrame, Letter } from '../'
import {
  WrapperBlackFrontLeftImage,
  WrapperWhiteBackImage,
  WrapperWhiteFrontLeftImage,
  WrapperWhiteFrontRightImage,
  WrapperBlackFrontRightImage,
  WrapperBlackBackImage,
} from '@/assets/images'
import { Button } from '@/components'
import { getLeftDays } from '@/utils'
import { useState, useMemo, startTransition } from 'react'
import type { BouquetInfo } from '@/types'
import { useRecoilValue } from 'recoil'
import { userIdState } from '@/recoil'
import { useNavigate } from 'react-router'

interface CreatedBouquetProps {
  bouquetInfo: BouquetInfo
  userId: string
}

const CreatedBouquet = ({ bouquetInfo, userId }: CreatedBouquetProps) => {
  const [currentFlowerIndex, setCurrentFlowerIndex] = useState<number>(0)
  const [letterOpen, setLetterOpen] = useState(false)
  const [selectedFlowerId, setSelectedFlowerId] = useState<number>(-1)
  const [isCopiedAddress, setIsCopiedAddress] = useState<boolean>(false)
  const [toastAnimation, setToastAnimation] = useState<string>('')
  const myId = useRecoilValue(userIdState)
  const navigate = useNavigate()

  const { wrapper, ribbon, item1, item2, item3 } = bouquetInfo.bouquetDesign
  const ordinalNum = ['st', 'nd', 'rd']

  const leftDays = useMemo(
    () => getLeftDays(bouquetInfo.dDay || ''),
    [bouquetInfo.dDay],
  )

  const flowerCount = useMemo(
    () =>
      bouquetInfo.bouquets.reduce(
        (acc, bouquet) => acc + bouquet.flowers.length,
        0,
      ),
    [bouquetInfo.bouquets],
  )

  const getImageUrl = (name: string) => {
    return new URL(`/src/assets/images/${name}.png`, import.meta.url).href
  }

  const handleClickGoToWrite = () => {
    if (myId == '') {
      navigate('/login')
    } else {
      startTransition(() => {
        navigate(`/write?addr=${userId}`)
      })
    }
  }

  const copy = async () => {
    await navigator.clipboard.writeText(window.location.href)
    setIsCopiedAddress(true)
    setToastAnimation('animate-fade-in')

    setTimeout(() => {
      setToastAnimation('animate-fade-out')
      setTimeout(() => setIsCopiedAddress(false), 500)
    }, 2000)
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-col gap-1.5 px-6">
        <div className="font-base flex justify-between text-gray-300">
          <h2>{bouquetInfo.description}</h2>
          <h2>{`D-${leftDays}`}</h2>
        </div>
        <h1>
          <span className="font-lg">{`꽃송이  `}</span>
          <span className="font-xl">{flowerCount}</span>
          <span className="font-lg">{`개 째`}</span>
        </h1>
      </div>
      <div className="relative h-full w-full">
        {flowerCount === 0 ? (
          <div className="relative flex h-full w-full items-center justify-center">
            <div className="relative h-full w-full">
              <div className="pointer-events-none absolute left-1/3 top-1/2 z-[15] w-[56%] -translate-x-[33%] -translate-y-[18%]">
                {wrapper === 'white' ? (
                  <WrapperWhiteFrontLeftImage className="h-full w-full" />
                ) : (
                  <WrapperBlackFrontLeftImage className="h-full w-full" />
                )}
              </div>
              <div className="pointer-events-none absolute left-1/2 top-1/2 z-30 w-[66%] -translate-x-[47.5%] -translate-y-[15.5%]">
                {wrapper === 'white' ? (
                  <WrapperWhiteFrontRightImage className="h-full w-full" />
                ) : (
                  <WrapperBlackFrontRightImage className="h-full w-full" />
                )}

                <Ribbons ribbon={ribbon} />
              </div>
              <div className="absolute left-1/2 top-1/2 z-40 w-[45%] -translate-x-[20%] translate-y-[35%]">
                <p className="absolute left-1/3 top-1/3 flex  -translate-x-[75%] -translate-y-[15%] -rotate-[5deg] gap-px font-bodoni text-xs text-[#FFA6EE] sm:text-sm md:text-base desktop:text-sm">
                  <span>{`1 st`}</span>
                </p>
                <img
                  src={getImageUrl('flower_card')}
                  alt="flower_card"
                  className="w-full"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[70%] -translate-x-[48%] -translate-y-[62%]">
              {wrapper === 'white' ? (
                <WrapperWhiteBackImage className="h-full w-full" />
              ) : (
                <WrapperBlackBackImage className="h-full w-full" />
              )}
            </div>
            <ItemFrame
              currentItem1={item1}
              currentItem2={item2}
              currentItem3={item3}
            />
          </div>
        ) : (
          <MarryGoRound setCurrentFlowerIndex={setCurrentFlowerIndex}>
            {bouquetInfo.bouquets.map(
              (bouquet) =>
                bouquet.flowers.length > 0 && (
                  <div
                    key={bouquet.bouquetId}
                    className="relative flex h-full w-full items-center justify-center overflow-hidden"
                  >
                    <FlowerFrame
                      flowers={bouquet.flowers}
                      setLetterOpen={setLetterOpen}
                      setSelectedFlowerId={setSelectedFlowerId}
                    />
                    <div className="relative h-full w-full">
                      <div className="pointer-events-none absolute left-1/3 top-1/2 z-[15] w-[56%] -translate-x-[33%] -translate-y-[18%]">
                        {wrapper === 'white' ? (
                          <WrapperWhiteFrontLeftImage className="h-full w-full" />
                        ) : (
                          <WrapperBlackFrontLeftImage className="h-full w-full" />
                        )}
                      </div>
                      <div className="pointer-events-none absolute left-1/2 top-1/2 z-30 w-[66%] -translate-x-[47.5%] -translate-y-[15.5%]">
                        {wrapper === 'white' ? (
                          <WrapperWhiteFrontRightImage className="h-full w-full" />
                        ) : (
                          <WrapperBlackFrontRightImage className="h-full w-full" />
                        )}

                        <Ribbons ribbon={ribbon} />
                      </div>
                      <div className="absolute left-1/2 top-1/2 z-40 w-[45%] -translate-x-[10%] translate-y-[31%]">
                        <p className="absolute left-[25%] top-1/3 flex -translate-x-[85%] -translate-y-[15%] -rotate-[5deg] gap-px font-bodoni text-xs text-[#FFA6EE] sm:text-sm md:text-base desktop:text-sm">
                          <span>{currentFlowerIndex + 1}</span>
                          <span>
                            {ordinalNum[currentFlowerIndex]
                              ? ordinalNum[currentFlowerIndex]
                              : 'th'}
                          </span>
                        </p>
                        <img
                          src={getImageUrl('flower_card')}
                          alt="flower_card"
                          className="w-[70%]"
                        />
                      </div>
                    </div>
                    <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[70%] -translate-x-[50%] -translate-y-[62%]">
                      {wrapper === 'white' ? (
                        <WrapperWhiteBackImage className="h-full w-full" />
                      ) : (
                        <WrapperBlackBackImage className="h-full w-full" />
                      )}
                    </div>
                    <ItemFrame
                      currentItem1={item1}
                      currentItem2={item2}
                      currentItem3={item3}
                    />
                  </div>
                ),
            )}
          </MarryGoRound>
        )}
      </div>
      <footer className="absolute bottom-0 z-30 flex h-[5rem] w-full shrink-0 items-center justify-center px-6">
        {myId !== '' && myId === userId ? (
          <div className="flex w-full flex-col text-center">
            {isCopiedAddress && (
              <div
                className={`${toastAnimation} absolute -top-2 left-1/2 -translate-x-1/2`}
              >
                <div className="flex gap-2 bg-transparent">
                  <span className="font-ls">{`링크가 복사되었습니다`}</span>
                </div>
              </div>
            )}
            <Button
              className="font-sm w-full bg-[#d9d9d9] text-black"
              onClick={copy}
            >
              링크 복사
            </Button>
          </div>
        ) : (
          <Button
            className="w-full bg-[#d9d9d9] text-black"
            onClick={handleClickGoToWrite}
          >
            편지 쓰기
          </Button>
        )}
      </footer>
      {letterOpen && (
        <Letter
          setLetterOpen={setLetterOpen}
          flowerId={selectedFlowerId}
          dDay={bouquetInfo.dDay || ''}
          leftDay={leftDays}
          itsMe={myId === userId}
        />
      )}
    </div>
  )
}

export default CreatedBouquet
