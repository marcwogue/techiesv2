import { motion } from "framer-motion";
import { Calendar, Sparkles, MapPin, Video, Mic, Users } from "lucide-react"; // Pense à installer lucide-react

const stats = [
    { 
      label: "Brunchs Organisés", 
      value: "15+", 
      icon: <Calendar className="w-6 h-6 text-primary" />, 
      color: "bg-primary-content" 
    },
    { 
      label: "Xperience", 
      value: "1", 
      icon: <Sparkles className="w-6 h-6 text-secondary" />, 
      color: "bg-secondary-content" 
    },
    { 
      label: "Villes", 
      value: "2", 
      icon: <MapPin className="w-6 h-6 text-primary" />, 
      color: "bg-primary-content" 
    },
    { 
      label: "Online Events", 
      value: "10+", 
      icon: <Video className="w-6 h-6 text-secondary" />, 
      color: "bg-secondary-content" 
    },
    { 
      label: "Impactful Talks", 
      value: "20+", 
      icon: <Mic className="w-6 h-6 text-primary" />, 
      color: "bg-primary-content" 
    },
    { 
      label: "Speakers", 
      value: "15+", 
      icon: <Users className="w-6 h-6 text-secondary" />, 
      color: "bg-secondary-foreground" 
    },
    { 
      label: "Brunchs Organisés", 
      value: "15+", 
      icon: <Calendar className="w-6 h-6 text-primary" />, 
      color: "bg-primary-content" 
    },
    { 
      label: "Xperience", 
      value: "1", 
      icon: <Sparkles className="w-6 h-6 text-secondary" />, 
      color: "bg-secondary-content" 
    },
    { 
      label: "Villes", 
      value: "2", 
      icon: <MapPin className="w-6 h-6 text-primary" />, 
      color: "bg-primary-content" 
    },
    { 
      label: "Online Events", 
      value: "10+", 
      icon: <Video className="w-6 h-6 text-secondary" />, 
      color: "bg-secondary-content" 
    },
    { 
      label: "Impactful Talks", 
      value: "20+", 
      icon: <Mic className="w-6 h-6 text-primary" />, 
      color: "bg-primary-content" 
    },
    { 
      label: "Speakers", 
      value: "15+", 
      icon: <Users className="w-6 h-6 text-secondary" />, 
      color: "bg-secondary-foreground" 
    },
];

export default function ImpactSection() {
  return (
    <section className="py-24 overflow-auto px-4 bg-base-300">
      {/* Titre + Texte */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
          Notre Impact en Chiffres
        </h2>

        <p className="text-base-content text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Depuis notre lancement, Techies Connect est passé d'un simple 
          événement à un mouvement national. Découvrez l'étendue de notre 
          impact en chiffres.
        </p>
      </motion.div>

      {/* GRILLE DE STATISTIQUES */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: i * 0.1 }}
            whileHover={{ scale: 1.2 , rotate: 10, transition: { duration: 0.1 } }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center p-8 bg-gray-50/40 
                       border border-gray-100 rounded-[2rem] hover:shadow-lg transition-all group"
          >
            {/* Icône avec cercle de fond */}
            <div className={`w-14 h-14 ${s.color} rounded-full flex items-center justify-center mb-6`}>
              {s.icon}
            </div>

            {/* Valeur (Chiffre) */}
            <span className={`text-4xl md:text-5xl font-bold mb-2 ${i % 2 === 0 ? 'text-blue-900' : 'text-pink-600'}`}>
              {s.value}
            </span>

            {/* Label */}
            <p className="text-gray-500 text-sm md:text-base font-medium text-center">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}