import React from "react"
import { IconProps } from ".."

const IconCopy: React.FC<IconProps> = ({ iconColorClassName, ...props }) => {
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
        d="M2 4.25C2 3.65326 2.23705 3.08097 2.65901 2.65901C3.08097 2.23705 3.65326 2 4.25 2H10.75C11.3467 2 11.919 2.23705 12.341 2.65901C12.7629 3.08097 13 3.65326 13 4.25V5.5H9.25C8.25544 5.5 7.30161 5.89509 6.59835 6.59835C5.89509 7.30161 5.5 8.25544 5.5 9.25V13H4.25C3.65326 13 3.08097 12.7629 2.65901 12.341C2.23705 11.919 2 11.3467 2 10.75V4.25Z"
        className={
          iconColorClassName ||
          "tw-fill-medusa-icon-secondary dark:tw-fill-medusa-icon-secondary-dark"
        }
      />
      <path
        d="M9.25 7C8.65326 7 8.08097 7.23705 7.65901 7.65901C7.23705 8.08097 7 8.65326 7 9.25V15.75C7 16.3467 7.23705 16.919 7.65901 17.341C8.08097 17.7629 8.65326 18 9.25 18H15.75C16.3467 18 16.919 17.7629 17.341 17.341C17.7629 16.919 18 16.3467 18 15.75V9.25C18 8.65326 17.7629 8.08097 17.341 7.65901C16.919 7.23705 16.3467 7 15.75 7H9.25Z"
        className={
          iconColorClassName ||
          "tw-fill-medusa-icon-secondary dark:tw-fill-medusa-icon-secondary-dark"
        }
      />
    </svg>
  )
}

export default IconCopy
