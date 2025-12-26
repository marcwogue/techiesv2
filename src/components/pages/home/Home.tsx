
import PinnedWrapper from '@/components/utils/PinnedWrapper'
import { HeroesSlide } from './Heroes'
import HomeIframe from './HomeIframe'
import ImpactSection from './Impact'
import Join from './Join'

const Home = () => {
  return (
    <div className='overflow-hidden relative'>
        <HeroesSlide/>
        
        <HomeIframe src="https://www.youtube.com/embed/dnJ0Q3iAHTQ?list=RDdnJ0Q3iAHTQ" />
        
          <ImpactSection/>
        <Join/>
        
    </div>
  )
}

export default Home