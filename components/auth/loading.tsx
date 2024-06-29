import React from 'react'
import Image from "next/image";

const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Image
        src="/logo.svg"
        alt="Miro Clone Logo"
        width={120}
        height={120}
        className="animate-pulse"
      />
    </div>
  )
}

export default Loading