import React from "react"
import { IconProps } from ".."

const IconCubeSolid: React.FC<IconProps> = ({
  iconColorClassName,
  ...props
}) => {
  return (
    <svg
      width={props.width || 20}
      height={props.height || 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.346 1.63371C10.24 1.5753 10.121 1.54468 9.99999 1.54468C9.879 1.54468 9.75997 1.5753 9.654 1.63371L2.85366 5.38512L9.99999 9.3277L17.1463 5.38512L10.346 1.63371ZM17.6462 6.7471L10.7168 10.5702V18.4554L17.2754 14.8368C17.3877 14.7749 17.4814 14.6839 17.5466 14.5735C17.6118 14.463 17.6462 14.3371 17.6462 14.2088V6.7471ZM9.28316 18.4554V10.5702L2.35379 6.7471V14.2088C2.35377 14.3371 2.38816 14.463 2.45339 14.5735C2.51862 14.6839 2.61229 14.7749 2.72463 14.8368L9.28316 18.4554Z"
        className={
          iconColorClassName ||
          "tw-fill-medusa-icon-secondary dark:tw-fill-medusa-icon-secondary-dark"
        }
      />
    </svg>
  )
}

export default IconCubeSolid
