import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Home,
  Rocket,
  Users,
  MapPin,
  BookOpen,
  Info,
} from "lucide-react";

const navLinks = [
  { label: "Accueil", to: "/", icon: Home },
  { label: "Initiatives", to: "/initiatives", icon: Rocket },
  { label: "Communauté", to: "/community", icon: Users },
  { label: "Chapitre", to: "/chapter", icon: MapPin },
  { label: "Blog", to: "/blog", icon: BookOpen },
  { label: "À propos", to: "/about", icon: Info },
];

export default function DualNavbar() {
  const topNavRef = useRef<HTMLDivElement>(null);
  const [showBottom, setShowBottom] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowBottom(!entry.isIntersecting),
      { threshold: 0 }
    );

    if (topNavRef.current) observer.observe(topNavRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ============ TOP NAV ============ */}
      <div ref={topNavRef}>
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-4"
        >
          <div className="navbar-start">
            <Link to="/" className="btn btn-ghost">
              <img src="/Logo.png" className="w-28" />
            </Link>
          </div>

          {/* Desktop links */}
          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal gap-2">
              {navLinks.map((l, i) => (
                <li key={i}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="navbar-end">
            <Link to="/login" className="btn btn-primary btn-sm md:btn-md">
              Connexion
            </Link>
          </div>
        </motion.nav>
      </div>

      {/* ============ BOTTOM NAV (ALL SCREENS) ============ */}
      <AnimatePresence>
        {showBottom && (
          <motion.nav
            initial={{ y: 80, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
          >
            <div
              className="
                bg-base-100/90 backdrop-blur-xl shadow-2xl rounded-full
                px-8 py-2
                md:px-6 md:py-3
              "
            >
              <ul className="flex gap-4 md:gap-6 items-center">
                {navLinks.map((l, i) => {
                  const Icon = l.icon;
                  return (
                    <li key={i}>
                      <motion.div
                      whileHover={{ scale: 1.3, translateY: -20 , backgroundColor: "var(--color-accent)", borderRadius: "100%", height: "70px", width: "70px", display:'flex', alignItems:"center", justifyContent:"center" }}
                      whileTap={{ scale: 0.95, translateY: 0 }}
                      >
                        <Link
                          to={l.to}
                          className="
                            flex flex-col items-center
                            text-[10px] md:text-xs
                            hover:text-primary transition
                          "
                        >
                          <Icon size={18} className="md:size-5" />
                          <span className="mt-1 hidden sm:block">
                            {l.label}
                          </span>
                        </Link>
                      </motion.div>
                     
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
