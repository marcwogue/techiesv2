
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FadeDivBottom } from "../../ui/FadeDiv";
import { Button } from "@/components/ui/button";

export default function Join() {
  return (
    <section className="py-16 px-6 bg-base-200 text-center">
        <FadeDivBottom>
            <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Rejoindre Techies Connect
        </h2>

        <p className="text-lg opacity-90 mb-8">
          Vous souhaitez faire partie de Techies Connect et contribuer à un
          mouvement qui crée du lien, de l'apprentissage et de l'impact ?
          Rejoignez-nous dès maintenant.
        </p>

        <div className="flex gap-4 justify-center ">

            <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            >
                <Button  className="bg-primary text-primary-foreground hover:bg-primary/90 h-auto py-4 px-8 text-lg  rounded-xl transition-all">
                    <Link
                        to="/adhesion" // mets ton vrai lien ici
                    >
                        Rejoindre l'association
                        </Link>
                </Button>
            
            </motion.div>
            <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            >

                <Button variant={"outline"} className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 h-auto py-4 px-8 text-lg  rounded-xl transition-all">  
                    <Link
                        to="/events" // mets ton vrai lien ici
                    >
                        nos prochains événements
                        </Link>
                </Button>
            </motion.div>
        </div>


      </motion.div>
    </FadeDivBottom>
    </section>
  );
}
