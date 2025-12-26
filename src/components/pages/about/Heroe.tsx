import SplitText from '@/components/ui/SplitText'
import React from 'react'

const Heroe = () => {
  return (
    <div className='bg-primary text-primary-content px-4 md:px-24 flex flex-col items-center justify-center min-h-96'>
        <SplitText
            text="L'ADN DE TECHIES CONNECT : Plus que du Networking, de l'Impact"
            className='text-4xl md:text-5xl font-black text-left float-end text-primary-content  leading-tight'
            tag='h1'

        />
        <p className='text-wrap text-xl '>
        Découvrez qui nous sommes, ce qui nous anime et comment nous transformons l'écosystème tech camerounais.
        </p>
    </div>
  )
}

export default Heroe