export type Language = "en" | "es" | "ro";

export const languages: Language[] = ["en", "es", "ro"];

export const dictionaries = {
  en: {
    langLabel: "English",
    nav: { home: "Home", services: "Services", work: "Work", about: "About", contact: "Contact" },
    cta: { book: "Book a free call", seeWork: "See our work", final: "Tell us what process you want to automate" },
    home: {
      title: "We automate business processes and build digital systems that save time.",
      subtitle: "We help companies reduce manual work, connect tools, and improve client management.",
      problemsTitle: "Common growth blockers",
      problems: ["Manual work", "Lost leads", "Disconnected tools", "Repetitive tasks"],
      solutionsTitle: "What we build",
      solutions: ["Automation", "Integrations", "Internal tools", "Websites"],
      howTitle: "How we work",
      howText: "We map your current process, design a practical workflow, build and test fast, then improve with real usage data."
    },
    services: { title: "Services", subtitle: "Systems that remove bottlenecks and help your team move faster." },
    work: { title: "Work / Projects", subtitle: "Example solutions that show the type of systems we build." },
    about: { title: "About us", subtitle: "Small technical team. Practical solutions. Clear communication." },
    contact: {
      title: "Contact",
      subtitle: "Tell us what process you want to automate.",
      form: {
        name: "Name",
        email: "Email",
        company: "Company",
        message: "Message",
        submit: "Send request",
        success: "Thanks! We will reply within one business day.",
        error: "Request failed. Please try again."
      }
    },
    footer: "We build systems your team can actually use."
  },
  es: {
    langLabel: "Español",
    nav: { home: "Inicio", services: "Servicios", work: "Proyectos", about: "Nosotros", contact: "Contacto" },
    cta: { book: "Reservar llamada gratuita", seeWork: "Ver proyectos", final: "Cuéntanos qué proceso quieres automatizar" },
    home: {
      title: "Automatizamos procesos de negocio y construimos sistemas digitales que ahorran tiempo.",
      subtitle: "Ayudamos a empresas a reducir trabajo manual, conectar herramientas y mejorar la gestión de clientes.",
      problemsTitle: "Bloqueos comunes de crecimiento",
      problems: ["Trabajo manual", "Leads perdidos", "Herramientas desconectadas", "Tareas repetitivas"],
      solutionsTitle: "Qué construimos",
      solutions: ["Automatización", "Integraciones", "Herramientas internas", "Sitios web"],
      howTitle: "Cómo trabajamos",
      howText: "Mapeamos tu proceso actual, diseñamos un flujo práctico, construimos rápido y mejoramos con datos reales."
    },
    services: { title: "Servicios", subtitle: "Sistemas que eliminan cuellos de botella y aceleran a tu equipo." },
    work: { title: "Proyectos", subtitle: "Soluciones de ejemplo que muestran el tipo de sistemas que creamos." },
    about: { title: "Sobre nosotros", subtitle: "Equipo técnico pequeño. Soluciones prácticas. Comunicación clara." },
    contact: {
      title: "Contacto",
      subtitle: "Cuéntanos qué proceso quieres automatizar.",
      form: {
        name: "Nombre",
        email: "Email",
        company: "Empresa",
        message: "Mensaje",
        submit: "Enviar solicitud",
        success: "¡Gracias! Responderemos en un día hábil.",
        error: "No se pudo enviar. Inténtalo otra vez."
      }
    },
    footer: "Construimos sistemas que tu equipo realmente puede usar."
  },
  ro: {
    langLabel: "Română",
    nav: { home: "Acasă", services: "Servicii", work: "Proiecte", about: "Despre", contact: "Contact" },
    cta: { book: "Programează un apel gratuit", seeWork: "Vezi proiectele", final: "Spune-ne ce proces vrei să automatizezi" },
    home: {
      title: "Automatizăm procese de business și construim sisteme digitale care economisesc timp.",
      subtitle: "Ajutăm companiile să reducă munca manuală, să conecteze tool-urile și să îmbunătățească managementul clienților.",
      problemsTitle: "Blocaje comune în creștere",
      problems: ["Muncă manuală", "Lead-uri pierdute", "Tool-uri neconectate", "Task-uri repetitive"],
      solutionsTitle: "Ce construim",
      solutions: ["Automatizare", "Integrări", "Tool-uri interne", "Website-uri"],
      howTitle: "Cum lucrăm",
      howText: "Mapăm procesul actual, proiectăm un workflow practic, livrăm rapid și îmbunătățim pe baza datelor reale."
    },
    services: { title: "Servicii", subtitle: "Sisteme care elimină blocajele și ajută echipa să se miște mai rapid." },
    work: { title: "Proiecte", subtitle: "Soluții exemplu care arată ce tip de sisteme putem construi." },
    about: { title: "Despre noi", subtitle: "Echipă tehnică mică. Soluții practice. Comunicare clară." },
    contact: {
      title: "Contact",
      subtitle: "Spune-ne ce proces vrei să automatizezi.",
      form: {
        name: "Nume",
        email: "Email",
        company: "Companie",
        message: "Mesaj",
        submit: "Trimite solicitarea",
        success: "Mulțumim! Revenim în maximum o zi lucrătoare.",
        error: "Trimiterea a eșuat. Încearcă din nou."
      }
    },
    footer: "Construim sisteme pe care echipa ta chiar le poate folosi."
  }
} as const;

export type Dictionary = (typeof dictionaries)[Language];
