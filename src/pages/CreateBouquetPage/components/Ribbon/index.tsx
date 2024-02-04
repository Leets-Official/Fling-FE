import ribbon1 from '@/assets/images/create_bouquet/ribbon/ribbon1.png'
import ribbon2 from '@/assets/images/create_bouquet/ribbon/ribbon2.png'
import ribbon3 from '@/assets/images/create_bouquet/ribbon/ribbon3.png'

interface RibbonProps {
  wrapper: string
  ribbon: string
  setRibbon: React.Dispatch<React.SetStateAction<string>>
}

const Ribbon = ({ wrapper, ribbon, setRibbon }: RibbonProps) => {
  const getWrapperImageUrl = (wrapper: string) => {
    return new URL(
      `/src/assets/images/create_bouquet/wrapper/${wrapper}_wrapper.png`,
      import.meta.url,
    ).href
  }
  const getRibbonImageUrl = (ribbon: string) => {
    return new URL(
      `/src/assets/images/create_bouquet/ribbon/${ribbon}_wrapper.png`,
      import.meta.url,
    ).href
  }

  return (
    <div className="flex h-full flex-col">
      <div className="mx-6 mt-5 flex flex-col gap-1">
        <div className="font-lg">꽃다발 끈을 골라 주세요!</div>
        <div className="font-ls">세 가지 중 마음에 드는 끈을 골라 주세요.</div>
      </div>
      <div className="mx-6 flex h-full flex-col items-center justify-center">
        <div className="flex h-[18rem] w-full items-end justify-center rounded-[1.5rem] border border-black">
          {wrapper && (
            <img
              src={getWrapperImageUrl(wrapper)}
              className="aspect-auto h-full"
            />
          )}
          {ribbon && (
            <img
              src={getRibbonImageUrl(ribbon)}
              className={`absolute left-1/2
                ${ribbon === 'ribbon1' && wrapper === 'black' && 'w-[35%] -translate-x-[51%] -translate-y-[-16%]'}
                ${ribbon === 'ribbon1' && wrapper === 'white' && 'w-[35%] -translate-x-[51%] -translate-y-[-12%]'}
                ${ribbon === 'ribbon2' && wrapper === 'black' && 'w-[37%] -translate-x-[50%] -translate-y-[18%]'} 
                ${ribbon === 'ribbon2' && wrapper === 'white' && 'w-[37%] -translate-x-[51%] -translate-y-[25%]'} 
                ${ribbon === 'ribbon3' && 'w-[42%] -translate-x-[45%] -translate-y-[17%]'}
              `}
            />
          )}
        </div>
        <div className="mt-4 flex h-[20%] w-full flex-nowrap items-center justify-center gap-5 overflow-x-auto scrollbar-hide">
          <img
            src={ribbon1}
            onClick={() => setRibbon('ribbon1')}
            className={`h-[56px] rounded-full ${ribbon == 'ribbon1' && 'shadow-[1px_1px_10.1px_rgba(0,0,0,0.5)]'}`}
          />
          <img
            src={ribbon2}
            onClick={() => setRibbon('ribbon2')}
            className={`h-[56px] rounded-full ${ribbon == 'ribbon2' && 'shadow-[1px_1px_10.1px_rgba(0,0,0,0.5)]'}`}
          />
          <img
            src={ribbon3}
            onClick={() => setRibbon('ribbon3')}
            className={`h-[56px] rounded-full ${ribbon == 'ribbon3' && 'shadow-[1px_1px_10.1px_rgba(0,0,0,0.5)]'}`}
          />
        </div>
      </div>
    </div>
  )
}

export default Ribbon
