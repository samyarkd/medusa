import React from "react"
import { IconProps } from ".."

const IconFolder: React.FC<IconProps> = ({ iconColorClassName, ...props }) => {
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
        d="M2.49213 10.5776V10.0001C2.49213 9.54054 2.67467 9.09985 2.99959 8.77493C3.32451 8.45 3.76521 8.26746 4.22472 8.26746H15.7753C16.2348 8.26746 16.6755 8.45 17.0005 8.77493C17.3254 9.09985 17.5079 9.54054 17.5079 10.0001V10.5776M10.8163 5.61852L9.18378 3.98603C9.07653 3.87865 8.94918 3.79346 8.80899 3.73533C8.6688 3.67719 8.51853 3.64725 8.36677 3.64722H4.22472C3.76521 3.64722 3.32451 3.82976 2.99959 4.15468C2.67467 4.47961 2.49213 4.9203 2.49213 5.37981V14.6203C2.49213 15.0798 2.67467 15.5205 2.99959 15.8454C3.32451 16.1703 3.76521 16.3529 4.22472 16.3529H15.7753C16.2348 16.3529 16.6755 16.1703 17.0005 15.8454C17.3254 15.5205 17.5079 15.0798 17.5079 14.6203V7.68993C17.5079 7.23042 17.3254 6.78973 17.0005 6.4648C16.6755 6.13988 16.2348 5.95734 15.7753 5.95734H11.6333C11.327 5.95707 11.0327 5.8352 10.8163 5.61852Z"
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

export default IconFolder
