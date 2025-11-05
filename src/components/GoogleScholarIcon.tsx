import React from 'react'

interface GoogleScholarIconProps {
  size?: number
  className?: string
}

const GoogleScholarIcon: React.FC<GoogleScholarIconProps> = ({ size = 24, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Google Scholar graduation cap */}
      <path
        d="M12 0L0 9.5l5.242 4.269C5.242 11.749 8.977 9.5 12 9.5c3.023 0 6.758 2.249 6.758 4.269L24 9.5 12 0z"
        fill="currentColor"
      />
      {/* Square with G - styled like Google Scholar logo */}
      <rect x="7" y="14" width="10" height="10" rx="2" fill="currentColor" />
      {/* G letter - simplified but recognizable */}
      <path
        d="M12 17c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2v-1h-1.5v1c0 .28-.22.5-.5.5s-.5-.22-.5-.5.22-.5.5-.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5z"
        fill="white"
      />
      <path
        d="M13.5 19h1.5v-1.5h-1.5V19z"
        fill="white"
      />
    </svg>
  )
}

export default GoogleScholarIcon

