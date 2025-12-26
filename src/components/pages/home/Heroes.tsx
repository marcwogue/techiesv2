import  {   useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import SplitText from "./../../ui/SplitText"; // ton composant SplitText
import { Button } from "@/components/ui/button";


const Slides = [
  {
    title: "Networking",
    subTitle: "DES LIENS FORTS POUR DES OPPORTUNITÉS RÉELLES",
    description:
      "Rejoignez le réseau qui vous connecte aux décideurs, partenaires et talents de la Tech au Cameroun.",
    image: "/impact/impact1.jpeg",
  },
  {
    title: "Driving Impact",
    subTitle: "AGIR CONCRÈTEMENT POUR L'AVENIR DU SECTEUR",
    description:
      "Participez aux débats et aux chantiers qui transforment notre écosystème : du salaire à la régulation.",
    image: "/impact/impact2.jpeg",
  },
  {
    title: "Empowering Generations",
    subTitle: "CONSTRUIRE LE CHEMIN DU BANC À LA RÉALISATION PRO",
    description:
      "Trouvez votre mentor, votre stage ou votre premier emploi. Nous bâtissons le socle pour les futurs leaders.",
    image: "/impact/impact3.jpeg",
  },
];




  const HeroeSwipper = ({
    title,
    subTitle,
    description,
    image,
    playAnimation,
  }: {
    title: string;
    subTitle: string;
    description: string;
    image: string;
    playAnimation: boolean;
  })=>{

    return(
      <div className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Image de fond avec zoom léger au survol (optionnel) */}
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover z-0" 
      />
      
      {/* Overlay dégradé plus profond pour la lisibilité */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-purple-900/40 to-transparent z-10"></div>

      {/* Container principal */}
      <div className="container mx-auto px-6 md:px-12 z-20">
        <div className="max-w-4xl space-y-8">
          
          {/* 1. Petit Badge (Title) */}
          <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <span className="text-white text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
              {title}
            </span>
          </div>
          

          {/* 2. Titre Massif (SubTitle) */}
          <div className="space-y-2">
            <SplitText
              tag="h1"
              text={subTitle}
              delay={50}
              className="text-4xl md:text-4xl font-black text-left float-end text-primary-content  leading-tight"
              play={playAnimation} 
            />
          </div>
          
          {/* 3. Description avec interligne aéré */}
          <p className="text-primary-content text-lg md:text-2xl max-w-2xl leading-relaxed font-light">
            {description}
          </p>

          {/* 4. Groupe de Boutons */}
          <div className="flex flex-wrap gap-5">
            <Button 
              className="bg-white text-purple-900 hover:bg-gray-200 h-auto py-4 px-10 text-lg font-bold rounded-xl transition-transform hover:scale-105"
            >
              Découvrir le prochain événement
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 h-auto py-4 px-10 text-lg font-bold rounded-xl transition-all"
            >
              Rejoindre la Communauté +
            </Button>
          </div>

        </div>
      </div>

      {/* Indicateur de scroll ou éléments décoratifs (Optionnel) */}
      <div className="absolute bottom-10 left-12 z-20 hidden md:block">
         <div className="w-1 h-12 bg-linear-to-b from-white to-transparent rounded-full animate-bounce"></div>
      </div>
    </div>
    )

  }

export const HeroesSlide = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      autoplay={{ delay: 7000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      effect="fade"
      navigation
      loop
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      modules={[Autoplay, EffectFade, Pagination, Navigation]}
      className="relative w-full  rounded-xl overflow-hidden"
    >
      {Slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <HeroeSwipper {...slide} playAnimation={activeIndex === index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
