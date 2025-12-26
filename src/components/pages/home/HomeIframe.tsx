import { FadeDivBottom } from "@/components/ui/FadeDiv";

interface HomeIframeProps {
    src: string;      // URL de la vidéo ou contenu intégré
    title?: string;   // accessibilité
    allow?: string;   // permissions
    className?: string; // styles optionnels
  }
  
  export default function HomeIframe({ src, title = "Embedded content", className = "" }: HomeIframeProps) {
    return (
      <div className="flex w-screen h-screen flex-col md:flex-row items-center bg-base-200 justify-center gap-10 md:gap-16 py-12 px-6">
          {/* Texte */}
          <div className="max-w-md text-center md:text-left space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-primary">
              Notre objectif
            </h1>
            <p className="text-lg ">
              Regardez la vidéo pour plus de détails.
            </p>
          </div>

          {/* Vidéo */}
          <div className="w-full md:w-[600px]">
            <FadeDivBottom>
            <div className={`relative pb-[56.25%]  rounded-xl shadow-lg ${className}`}>
            
            <iframe
              src={src}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded-2xl border-0"
            />
          </div>
          </FadeDivBottom>
          </div>

        </div>
      
    );
  }
  