import React, { FC } from 'react'

type Props = {
  primaryColor: string
  className?: string
  style?: React.CSSProperties
}

export const DefaultImage: FC<Props> = ({ primaryColor, className, style }) => {
  return (
    <svg {...{ className }} style={style} viewBox="0 0 65 65" xmlns="http://www.w3.org/2000/svg">
      <g id="restaurant_FILL0_wght400_GRAD0_opsz48 1">
        <path
          fill={primaryColor}
          id="Vector"
          d="M19.4998 59.1668V34.6335C17.1887 34.1446 15.2221 32.9779 13.5998 31.1335C11.9776 29.2891 11.1665 27.0779 11.1665 24.5002V5.8335H15.1665V24.5002H19.4998V5.8335H23.4998V24.5002H27.8332V5.8335H31.8332V24.5002C31.8332 27.0779 31.0221 29.2891 29.3998 31.1335C27.7776 32.9779 25.8109 34.1446 23.4998 34.6335V59.1668H19.4998ZM47.1665 59.1668V37.8335H39.4998V17.5002C39.4998 13.9891 40.5665 11.1668 42.6998 9.0335C44.8332 6.90016 47.6554 5.8335 51.1665 5.8335V59.1668H47.1665Z"
        />
      </g>
    </svg>
  )
}
