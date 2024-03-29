import { PropsWithChildren, ButtonHTMLAttributes } from 'react'
import { Button as ButtonStyle } from '@material-tailwind/react'

interface ButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  size?: 'lg' | 'sm'
}

const Button = ({
  children,
  type = 'submit',
  size = 'lg',
  className,
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyle
      type={type}
      className={`${
        size === 'lg'
          ? 'h-[40px] w-full px-6 py-[0.8rem] text-sm'
          : 'h-[23px] px-4 py-[0.3rem] text-xs'
      } rounded-[3.125rem] bg-black leading-none text-white shadow-none disabled:border-gray-100 disabled:bg-gray-100 disabled:text-black ${className}`}
      {...props}
    >
      {children}
    </ButtonStyle>
  )
}

export default Button
