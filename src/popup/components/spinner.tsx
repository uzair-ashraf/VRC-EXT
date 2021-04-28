import React, { FC } from "react";

interface RingProps {
  color?: string;
  size?: number;
}
export const Spinner: FC<RingProps> = ({ color = '#1fd1ed', size = 160 }) => {
  const circles = [...Array(4)].map((_, index) => {
    return (
      <div
        key={index}
        style={{
          borderColor: `${color} transparent transparent transparent`,
          width: size * 0.8,
          height: size * 0.8,
          margin: size * 0.1,
          borderWidth: size * 0.1,
        }}
      ></div>
    )
  })

  return (
    <div className='lds-ring' style={{ width: size, height: size }}>
      {circles}
    </div>
  )
}
