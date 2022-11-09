import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader';

type Props = {}

const LoadingSpinner = (props: Props) => {
  return (
    <div className="min-w-max h-80 flex justify-center items-center">
      <ClipLoader
        color={'#0000000aa'}
        loading={true}
        size={150}
      />
    </div>
  )
}

export default LoadingSpinner