import React from "react"
import { IconProps } from ".."

const IconUser: React.FC<IconProps> = ({ iconColorClassName, ...props }) => {
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
        d="M12.9087 5.34615C12.9087 6.11758 12.6022 6.8574 12.0567 7.40288C11.5113 7.94836 10.7714 8.25481 10 8.25481C9.22858 8.25481 8.48875 7.94836 7.94327 7.40288C7.3978 6.8574 7.09135 6.11758 7.09135 5.34615C7.09135 4.57473 7.3978 3.8349 7.94327 3.28943C8.48875 2.74395 9.22858 2.4375 10 2.4375C10.7714 2.4375 11.5113 2.74395 12.0567 3.28943C12.6022 3.8349 12.9087 4.57473 12.9087 5.34615V5.34615ZM4.18347 16.2967C4.2084 14.7705 4.83217 13.3152 5.92027 12.2447C7.00837 11.1743 8.47361 10.5743 10 10.5743C11.5264 10.5743 12.9916 11.1743 14.0797 12.2447C15.1678 13.3152 15.7916 14.7705 15.8165 16.2967C13.9918 17.1334 12.0075 17.5652 10 17.5625C7.92439 17.5625 5.95426 17.1095 4.18347 16.2967Z"
        className={
          iconColorClassName ||
          "tw-stroke-medusa-icon-secondary dark:tw-stroke-medusa-icon-secondary"
        }
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconUser
