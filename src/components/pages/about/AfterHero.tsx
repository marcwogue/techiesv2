import DecryptedText from '@/components/ui/DecryptedText'


const AfterHero = () => {
  return (
    <div className='flex flex-col items-center justify-center '>
        <div className='w-full md:w-[70%] grid grid-cols-2 gap-4'>
            <div>
                <DecryptedText
                    text='Le Techies Connect  Brunch'
                    className='text-2xl font-bold md:text-4xl'
                    speed={200}
                    animateOn='view'
                    

                />
                <p className='text-wrap text-xl '>
                Le Techies Connect' Brunch est l'événement moteur de notre communauté. Né de la nécessité de rompre l'isolement, chaque rencontre est un espace privilégié et convivial où professionnels, étudiants et enseignants se retrouvent autour d'un repas.
                </p>
                <p className='text-wrap text-xl'>

Nous allons au-delà de la convivialité : nous débattons d'un thème central pour dégager des pistes d'action concrètes pour le secteur.
                </p>
            </div>
            <div></div>

        </div>

    </div>
  )
}

export default AfterHero