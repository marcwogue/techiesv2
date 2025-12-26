import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {Facebook , Linkedin, X} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger);

/* =======================
   DATA
======================= */

const footerData = {
  identity: {
    logo: "/Logo.png",
    name: "Techies Brunch Connect",
    slogan: "Building the future together!",
    location: "Yaoundé, Cameroun",
    socials: [ {name: "Facebook", icon: <Facebook />, url: "https://www.facebook.com/techiesbrunchconnect"}, {name: "LinkedIn", icon: <Linkedin />, url: "https://www.linkedin.com/company/techiesbrunchconnect"}, {name: "X", icon: <X />, url: "https://x.com/techiesbrunchconnect"}],
  },
  links: {
    title: "Liens rapides",
    items: ["Accueil", "À Propos", "Communauté", "Blog"],
  },
  resources: {
    title: "Ressources",
    items: ["Calendrier des événements", "Galerie photo / vidéo"],
  },
  contact: {
    title: "Nous contacter",
    address: "Direction Nationale\nYaoundé – Cameroun",
  },
};

/* =======================
   FOOTER
======================= */

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    gsap.fromTo(
      footer,
      { y: 120 },
      {
        y: 0,
        duration: 1,
        ease: "back.out(1.6)",
        scrollTrigger: {
          trigger: footer,
          start: "top bottom",
        },
      }
    );

    gsap.to(footer, {
      y: -40,
      ease: "elastic.out(1, 0.4)",
      scrollTrigger: {
        trigger: footer,
        start: "bottom bottom",
        end: "bottom+=150 bottom",
        scrub: true,
      },
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <footer ref={footerRef} className="bg-base-300 text-base-content">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Identity */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src={footerData.identity.logo} className="h-10 w-10" />
            <span className="text-xl font-bold">
              {footerData.identity.name}
            </span>
          </div>

          <p className="italic text-sm">{footerData.identity.slogan}</p>

          <div className="text-sm space-y-1">
            <p>{footerData.identity.location}</p>
          </div>

          <div className="flex gap-4 text-sm pt-2">
            {footerData.identity.socials.map(social => (
              <a key={social.name} className="hover:text-primary" aria-label={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
                {social.icon}
              </a>
              
            ))}
          </div>
        </div>

        {/* Links */}
        <FooterList data={footerData.links} />

        {/* Resources */}
        <FooterList data={footerData.resources} />

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="font-semibold uppercase tracking-wide">
            {footerData.contact.title}
          </h3>

          <ContactForm />

          <p className="text-sm whitespace-pre-line">
            {footerData.contact.address}
          </p>
        </div>
      </div>

      <div className="border-t border-base-content/10 text-center py-5 text-sm">
        © {new Date().getFullYear()} ICT Community. Tous droits réservés.
      </div>
    </footer>
  );
}

/* =======================
   COMPONENTS
======================= */

function FooterList({ data }: { data: { title: string; items: string[] } }) {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold uppercase tracking-wide">
        {data.title}
      </h3>
      <ul className="space-y-2 text-sm">
        {data.items.map(item => (
          <li key={item}>
            <a className="hover:text-primary">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactForm() {
  return <FormModal />;
}

/* =======================
   MODAL
======================= */

export function FormModal() {
  return (
    <div>
      <button
        className="btn btn-primary w-full"
        onClick={() =>
          (document.getElementById("contact_modal") as HTMLDialogElement)?.showModal()
        }
      >
        Envoyer un message
      </button>

      <dialog id="contact_modal" className="modal">
        <div className="modal-box bg-base-200">
          <h3 className="font-bold text-lg text-center mb-4">
            Envoyez-nous un message
          </h3>

          <form className="flex flex-col gap-4">
            {["Nom", "Email"].map(field => (
              <input
                key={field}
                type={field === "Email" ? "email" : "text"}
                placeholder={field}
                className="input input-bordered rounded-full"
              />
            ))}

            <textarea
              placeholder="Message"
              rows={4}
              className="textarea textarea-bordered rounded-2xl"
            />

            <button className="btn btn-primary rounded-full">
              Envoyer
            </button>
          </form>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Fermer</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
