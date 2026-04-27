export type Language = "en" | "es" | "ro";

export const languages: Language[] = ["en", "es", "ro"];

export const dictionaries = {
  en: {
    langLabel: "English",
    nav: { home: "Home", services: "Services", work: "Work", about: "About", contact: "Contact" },
    cta: {
      book: "Book a free call",
      seeExamples: "See examples",
      final: "Tell us what process you want to automate"
    },
    home: {
      hero: {
        headline: "Less manual work. Better client follow-up. Smarter business systems.",
        subtitle: "We help small businesses automate repetitive tasks, connect their tools, and stop losing leads.",
        workflowTitle: "How your workflow can run automatically",
        workflowSteps: [
          "Lead comes in",
          "Stored automatically",
          "Client receives follow-up",
          "Team gets notified",
          "Report is updated"
        ]
      },
      problems: {
        title: "Problems we solve",
        items: [
          { icon: "💬", title: "Too many WhatsApp messages", text: "Client requests are scattered and hard to track." },
          { icon: "🧠", title: "Leads get forgotten", text: "No clear follow-up system means missed opportunities." },
          { icon: "📉", title: "Excel sheets become messy", text: "Data duplicates, gets outdated, and creates errors." },
          { icon: "⏱️", title: "Repetitive tasks waste time", text: "Your team spends hours on work that should be automatic." }
        ]
      },
      solutions: {
        title: "What we do",
        items: [
          { icon: "🔁", title: "Automate follow-ups", text: "Send reminders and responses without manual chasing." },
          { icon: "🔗", title: "Connect your tools", text: "Make your forms, inboxes, CRM, and spreadsheets work together." },
          { icon: "🗂️", title: "Organize client data", text: "Keep requests, notes, and status updates in one clean flow." },
          { icon: "🧩", title: "Build simple internal systems", text: "Create practical workflows your team can use every day." }
        ]
      },
      beforeAfter: {
        title: "Before / After",
        beforeTitle: "Before",
        beforeItems: ["WhatsApp", "Excel", "Emails", "Manual reminders"],
        afterTitle: "After",
        afterFlow: ["Form", "CRM", "Email/WhatsApp", "Reminder", "Dashboard"]
      },
      process: {
        title: "How we work",
        steps: [
          "We understand your process",
          "We build a simple automation",
          "You save time every week"
        ]
      }
    },
    services: {
      title: "Services",
      subtitle: "Business-focused services first, technical delivery second.",
      labels: { problem: "Business problem", build: "What we build", example: "Example", tools: "Tools used" },
      items: [
        {
          icon: "⚙️",
          title: "Business process automation",
          problem: "Manual processes slow your team and create delays.",
          build: "Automated workflows for repetitive tasks across departments.",
          example: "Requests are captured and assigned automatically.",
          tools: "n8n, Make, Zapier, Airtable"
        },
        {
          icon: "📬",
          title: "Client follow-up automation",
          problem: "Leads are forgotten after the first message.",
          build: "Automatic reminders, CRM updates, and email/WhatsApp follow-up.",
          example: "Every lead gets a timed follow-up sequence.",
          tools: "n8n, HubSpot, Make, Zapier, custom API"
        },
        {
          icon: "📇",
          title: "CRM and lead management",
          problem: "Leads from multiple channels are hard to track.",
          build: "Unified lead capture, routing, and pipeline organization.",
          example: "Website, ads, and WhatsApp leads enter one CRM process.",
          tools: "HubSpot, Pipedrive, Airtable, custom integrations"
        },
        {
          icon: "🌐",
          title: "Website + automation integration",
          problem: "Website forms are not connected to your sales process.",
          build: "Forms connected to CRM, alerts, and follow-up workflows.",
          example: "New form lead creates a contact and alerts your team instantly.",
          tools: "Next.js, Webhooks, CRM APIs, email providers"
        },
        {
          icon: "📊",
          title: "Internal dashboards",
          problem: "Business data is spread across sheets and tools.",
          build: "Simple dashboards with your key metrics in one place.",
          example: "Track leads, response time, and conversions in one view.",
          tools: "Looker Studio, Metabase, Supabase, custom dashboards"
        },
        {
          icon: "🔌",
          title: "API and tool integrations",
          problem: "Your tools do not talk to each other.",
          build: "Reliable integrations between your core platforms.",
          example: "Sync CRM activity with billing and notification systems.",
          tools: "REST APIs, Webhooks, Node.js, integration platforms"
        },
        {
          icon: "🛠️",
          title: "Maintenance and support",
          problem: "Automations break without ongoing monitoring.",
          build: "Continuous support, fixes, and performance improvements.",
          example: "Monthly review of workflows and reliability updates.",
          tools: "Monitoring alerts, logs, scheduled maintenance"
        }
      ]
    },
    work: {
      title: "Work / Examples",
      subtitle: "Real business problems solved with simple and practical systems.",
      labels: { problem: "Problem", solution: "Solution", benefit: "Benefit", tools: "Tools used" },
      workflowTitle: "Example workflow",
      workflowSteps: ["Form", "CRM", "Email/WhatsApp", "Reminder", "Dashboard"],
      dashboardTitle: "Sample dashboard preview",
      dashboardMetrics: ["Leads tracked", "Follow-up status", "Response time", "Conversion trend"],
      projects: [
        {
          title: "Clinic follow-up automation",
          problem: "Clinics lose time confirming appointments manually.",
          solution: "Automatic appointment reminders and follow-up messages.",
          benefit: "Less admin work and fewer missed appointments.",
          tools: "n8n, Google Calendar, WhatsApp API"
        },
        {
          title: "Real estate lead management",
          problem: "Agents receive leads from many channels and forget follow-ups.",
          solution: "Lead capture, automatic CRM entry, and follow-up reminders.",
          benefit: "Better response time and a more organized sales pipeline.",
          tools: "HubSpot, Make, Gmail, Webhooks"
        },
        {
          title: "Service company quote automation",
          problem: "Quote requests arrive by email, WhatsApp, and forms.",
          solution: "Centralized request system with automatic notifications.",
          benefit: "Faster responses and fewer lost opportunities.",
          tools: "Zapier, Airtable, Slack"
        },
        {
          title: "Internal reporting dashboard",
          problem: "Business data is spread across spreadsheets.",
          solution: "Simple dashboard with key metrics.",
          benefit: "Better decisions without manual reports.",
          tools: "Next.js, PostgreSQL, Chart library"
        },
        {
          title: "Website + CRM integration",
          problem: "Website forms are not connected to sales workflows.",
          solution: "Forms connected to CRM, email alerts, and automated follow-up.",
          benefit: "Every lead is tracked automatically.",
          tools: "Next.js, HubSpot API, email automation"
        }
      ]
    },
    about: {
      title: "About us",
      subtitle: "Small team, serious work, practical solutions.",
      intro:
        "Aethos Solutions is a small practical team focused on solving real business problems with technology.",
      details: [
        "We work in English, Spanish, and Romanian.",
        "We combine development, automation, business understanding, and marketing.",
        "We focus on practical solutions, not unnecessary complexity."
      ]
    },
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
    footer: "We help small businesses save time, reduce errors, and stop losing leads."
  },
  es: {
    langLabel: "Español",
    nav: { home: "Inicio", services: "Servicios", work: "Proyectos", about: "Nosotros", contact: "Contacto" },
    cta: {
      book: "Reservar llamada gratuita",
      seeExamples: "Ver ejemplos",
      final: "Cuéntanos qué proceso quieres automatizar"
    },
    home: {
      hero: {
        headline: "Menos trabajo manual. Mejor seguimiento de clientes. Sistemas de negocio más inteligentes.",
        subtitle: "Ayudamos a pequeñas empresas a automatizar tareas repetitivas, conectar herramientas y dejar de perder leads.",
        workflowTitle: "Cómo puede funcionar tu proceso automáticamente",
        workflowSteps: [
          "Llega un lead",
          "Se guarda automáticamente",
          "El cliente recibe seguimiento",
          "El equipo recibe notificación",
          "El reporte se actualiza"
        ]
      },
      problems: {
        title: "Problemas que resolvemos",
        items: [
          { icon: "💬", title: "Demasiados mensajes de WhatsApp", text: "Las solicitudes de clientes quedan dispersas y sin control." },
          { icon: "🧠", title: "Los leads se olvidan", text: "Sin un seguimiento claro, se pierden oportunidades." },
          { icon: "📉", title: "Excel se vuelve caótico", text: "Datos duplicados y errores por trabajo manual." },
          { icon: "⏱️", title: "Tareas repetitivas quitan tiempo", text: "Tu equipo pierde horas en tareas que pueden automatizarse." }
        ]
      },
      solutions: {
        title: "Qué hacemos",
        items: [
          { icon: "🔁", title: "Automatizamos seguimientos", text: "Envío de recordatorios sin perseguir manualmente cada lead." },
          { icon: "🔗", title: "Conectamos tus herramientas", text: "Formularios, CRM, correo y mensajería en un solo flujo." },
          { icon: "🗂️", title: "Organizamos datos de clientes", text: "Solicitudes, notas y estados en un proceso claro." },
          { icon: "🧩", title: "Creamos sistemas internos simples", text: "Soluciones prácticas que tu equipo puede usar todos los días." }
        ]
      },
      beforeAfter: {
        title: "Antes / Después",
        beforeTitle: "Antes",
        beforeItems: ["WhatsApp", "Excel", "Emails", "Recordatorios manuales"],
        afterTitle: "Después",
        afterFlow: ["Formulario", "CRM", "Email/WhatsApp", "Recordatorio", "Dashboard"]
      },
      process: {
        title: "Cómo trabajamos",
        steps: [
          "Entendemos tu proceso",
          "Construimos una automatización simple",
          "Ahorras tiempo cada semana"
        ]
      }
    },
    services: {
      title: "Servicios",
      subtitle: "Primero la necesidad del negocio, después el detalle técnico.",
      labels: { problem: "Problema de negocio", build: "Qué construimos", example: "Ejemplo", tools: "Herramientas" },
      items: [
        { icon: "⚙️", title: "Automatización de procesos de negocio", problem: "Procesos manuales lentos y con errores.", build: "Flujos automáticos para tareas repetitivas entre equipos.", example: "Solicitudes entrantes se clasifican y asignan automáticamente.", tools: "n8n, Make, Zapier, Airtable" },
        { icon: "📬", title: "Automatización de seguimiento de clientes", problem: "Los leads se olvidan después del primer contacto.", build: "Recordatorios, actualización de CRM y seguimiento por email/WhatsApp.", example: "Cada lead entra en una secuencia automática de seguimiento.", tools: "n8n, HubSpot, Make, Zapier, API personalizada" },
        { icon: "📇", title: "CRM y gestión de leads", problem: "Leads de muchos canales sin control.", build: "Captura unificada y organización del pipeline comercial.", example: "Leads de web, anuncios y WhatsApp entran al mismo proceso.", tools: "HubSpot, Pipedrive, Airtable, integraciones personalizadas" },
        { icon: "🌐", title: "Integración web + automatización", problem: "Los formularios del sitio no se conectan con ventas.", build: "Conexión de formularios con CRM, alertas y seguimiento.", example: "Nuevo lead crea contacto y notifica al equipo al instante.", tools: "Next.js, Webhooks, APIs de CRM, proveedores de email" },
        { icon: "📊", title: "Dashboards internos", problem: "Datos dispersos en hojas y herramientas.", build: "Dashboards simples con métricas clave.", example: "Seguimiento de leads, tiempos de respuesta y conversiones.", tools: "Looker Studio, Metabase, Supabase, dashboards personalizados" },
        { icon: "🔌", title: "Integraciones API y herramientas", problem: "Tus herramientas no se comunican entre sí.", build: "Integraciones estables entre plataformas clave.", example: "Sincronizar actividad del CRM con facturación y avisos.", tools: "REST APIs, Webhooks, Node.js, plataformas de integración" },
        { icon: "🛠️", title: "Mantenimiento y soporte", problem: "Las automatizaciones se rompen sin seguimiento.", build: "Soporte continuo, correcciones y mejoras.", example: "Revisión mensual de flujos y mejoras de estabilidad.", tools: "Alertas de monitoreo, logs, mantenimiento planificado" }
      ]
    },
    work: {
      title: "Proyectos / Ejemplos",
      subtitle: "Problemas reales de negocio resueltos con sistemas simples y prácticos.",
      labels: { problem: "Problema", solution: "Solución", benefit: "Beneficio", tools: "Herramientas" },
      workflowTitle: "Flujo de ejemplo",
      workflowSteps: ["Formulario", "CRM", "Email/WhatsApp", "Recordatorio", "Dashboard"],
      dashboardTitle: "Vista previa de dashboard",
      dashboardMetrics: ["Leads registrados", "Estado de seguimiento", "Tiempo de respuesta", "Tendencia de conversión"],
      projects: [
        { title: "Automatización de seguimiento para clínicas", problem: "Las clínicas pierden tiempo confirmando citas manualmente.", solution: "Recordatorios automáticos de citas y mensajes de seguimiento.", benefit: "Menos trabajo administrativo y menos ausencias.", tools: "n8n, Google Calendar, WhatsApp API" },
        { title: "Gestión de leads inmobiliarios", problem: "Los agentes reciben leads de muchos canales y olvidan seguimientos.", solution: "Captura de leads, entrada automática en CRM y recordatorios.", benefit: "Mejor tiempo de respuesta y pipeline más organizado.", tools: "HubSpot, Make, Gmail, Webhooks" },
        { title: "Automatización de cotizaciones", problem: "Las solicitudes de cotización llegan por email, WhatsApp y formularios.", solution: "Sistema centralizado con notificaciones automáticas.", benefit: "Respuesta más rápida y menos oportunidades perdidas.", tools: "Zapier, Airtable, Slack" },
        { title: "Dashboard interno de reportes", problem: "Los datos del negocio están repartidos en hojas de cálculo.", solution: "Dashboard simple con métricas clave.", benefit: "Mejores decisiones sin reportes manuales.", tools: "Next.js, PostgreSQL, librería de gráficos" },
        { title: "Integración website + CRM", problem: "Los formularios web no están conectados al flujo comercial.", solution: "Formularios conectados al CRM, alertas por email y seguimiento automático.", benefit: "Cada lead se registra automáticamente.", tools: "Next.js, HubSpot API, automatización de email" }
      ]
    },
    about: {
      title: "Sobre nosotros",
      subtitle: "Equipo pequeño, trabajo serio, soluciones prácticas.",
      intro: "Aethos Solutions es un equipo pequeño y práctico centrado en resolver problemas reales de negocio con tecnología.",
      details: [
        "Trabajamos en inglés, español y rumano.",
        "Combinamos desarrollo, automatización, visión de negocio y marketing.",
        "Nos enfocamos en soluciones prácticas, sin complejidad innecesaria."
      ]
    },
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
    footer: "Ayudamos a pequeñas empresas a ahorrar tiempo, reducir errores y dejar de perder leads."
  },
  ro: {
    langLabel: "Română",
    nav: { home: "Acasă", services: "Servicii", work: "Proiecte", about: "Despre", contact: "Contact" },
    cta: {
      book: "Programează un apel gratuit",
      seeExamples: "Vezi exemple",
      final: "Spune-ne ce proces vrei să automatizezi"
    },
    home: {
      hero: {
        headline: "Mai puțină muncă manuală. Follow-up mai bun cu clienții. Sisteme de business mai inteligente.",
        subtitle: "Ajutăm companiile mici să automatizeze sarcini repetitive, să conecteze tool-urile și să nu mai piardă lead-uri.",
        workflowTitle: "Cum poate rula automat workflow-ul tău",
        workflowSteps: [
          "Intră un lead",
          "Este salvat automat",
          "Clientul primește follow-up",
          "Echipa primește notificare",
          "Raportul se actualizează"
        ]
      },
      problems: {
        title: "Probleme pe care le rezolvăm",
        items: [
          { icon: "💬", title: "Prea multe mesaje pe WhatsApp", text: "Solicitările clienților sunt împrăștiate și greu de urmărit." },
          { icon: "🧠", title: "Lead-urile sunt uitate", text: "Fără follow-up clar, se pierd oportunități." },
          { icon: "📉", title: "Excel-ul devine haotic", text: "Date duplicate și erori din muncă manuală." },
          { icon: "⏱️", title: "Task-urile repetitive consumă timp", text: "Echipa pierde ore pe activități ce pot fi automatizate." }
        ]
      },
      solutions: {
        title: "Ce facem",
        items: [
          { icon: "🔁", title: "Automatizăm follow-up-ul", text: "Trimitem reminder-e fără urmărire manuală." },
          { icon: "🔗", title: "Conectăm tool-urile", text: "Formulare, CRM, email și mesagerie într-un singur flux." },
          { icon: "🗂️", title: "Organizăm datele clienților", text: "Cereri, note și status într-un proces clar." },
          { icon: "🧩", title: "Construim sisteme interne simple", text: "Soluții practice pe care echipa le folosește zilnic." }
        ]
      },
      beforeAfter: {
        title: "Înainte / După",
        beforeTitle: "Înainte",
        beforeItems: ["WhatsApp", "Excel", "Emailuri", "Reminder-e manuale"],
        afterTitle: "După",
        afterFlow: ["Formular", "CRM", "Email/WhatsApp", "Reminder", "Dashboard"]
      },
      process: {
        title: "Cum lucrăm",
        steps: [
          "Înțelegem procesul tău",
          "Construim o automatizare simplă",
          "Economisești timp în fiecare săptămână"
        ]
      }
    },
    services: {
      title: "Servicii",
      subtitle: "Pornim de la nevoia de business, apoi livrăm partea tehnică.",
      labels: { problem: "Problemă de business", build: "Ce construim", example: "Exemplu", tools: "Tool-uri" },
      items: [
        { icon: "⚙️", title: "Automatizare procese de business", problem: "Procese manuale lente și cu erori.", build: "Workflow-uri automate pentru task-uri repetitive.", example: "Cereri noi clasificate și asignate automat.", tools: "n8n, Make, Zapier, Airtable" },
        { icon: "📬", title: "Automatizare follow-up clienți", problem: "Lead-urile sunt uitate după primul mesaj.", build: "Reminder-e automate, actualizări CRM și follow-up pe email/WhatsApp.", example: "Fiecare lead intră într-o secvență automată.", tools: "n8n, HubSpot, Make, Zapier, API personalizat" },
        { icon: "📇", title: "CRM și management lead-uri", problem: "Lead-uri din multe canale, fără ordine.", build: "Captură unificată și organizare în pipeline.", example: "Lead-uri din website, ads și WhatsApp în același proces.", tools: "HubSpot, Pipedrive, Airtable, integrări custom" },
        { icon: "🌐", title: "Integrare website + automatizări", problem: "Formularele site-ului nu sunt legate de vânzări.", build: "Conectare formulare la CRM, alerte și follow-up.", example: "Lead nou creează contact și notifică echipa instant.", tools: "Next.js, Webhooks, API-uri CRM, provideri email" },
        { icon: "📊", title: "Dashboard-uri interne", problem: "Datele sunt împrăștiate în foi și tool-uri.", build: "Dashboard-uri simple cu metrici esențiali.", example: "Monitorizare lead-uri, timp de răspuns și conversii.", tools: "Looker Studio, Metabase, Supabase, dashboard-uri custom" },
        { icon: "🔌", title: "Integrări API și tool-uri", problem: "Tool-urile nu comunică între ele.", build: "Integrări stabile între platformele importante.", example: "Sincronizare CRM cu facturare și notificări.", tools: "REST APIs, Webhooks, Node.js, platforme de integrare" },
        { icon: "🛠️", title: "Mentenanță și suport", problem: "Automatizările se strică fără monitorizare.", build: "Suport continuu, remedieri și optimizări.", example: "Revizuire lunară a fluxurilor și îmbunătățiri de stabilitate.", tools: "Alerte monitorizare, log-uri, mentenanță planificată" }
      ]
    },
    work: {
      title: "Proiecte / Exemple",
      subtitle: "Probleme reale de business rezolvate prin sisteme simple și practice.",
      labels: { problem: "Problemă", solution: "Soluție", benefit: "Beneficiu", tools: "Tool-uri" },
      workflowTitle: "Workflow exemplu",
      workflowSteps: ["Formular", "CRM", "Email/WhatsApp", "Reminder", "Dashboard"],
      dashboardTitle: "Previzualizare dashboard",
      dashboardMetrics: ["Lead-uri urmărite", "Status follow-up", "Timp de răspuns", "Trend conversie"],
      projects: [
        { title: "Automatizare follow-up pentru clinică", problem: "Clinicile pierd timp confirmând manual programările.", solution: "Reminder-e automate pentru programări și mesaje de follow-up.", benefit: "Mai puțină muncă administrativă și mai puține neprezentări.", tools: "n8n, Google Calendar, WhatsApp API" },
        { title: "Management lead-uri imobiliare", problem: "Agenții primesc lead-uri din multe canale și uită follow-up-ul.", solution: "Captură lead-uri, intrare automată în CRM și reminder-e.", benefit: "Timp de răspuns mai bun și pipeline de vânzări organizat.", tools: "HubSpot, Make, Gmail, Webhooks" },
        { title: "Automatizare oferte pentru companii de servicii", problem: "Cereri de ofertă venite pe email, WhatsApp și formulare.", solution: "Sistem centralizat de cereri cu notificări automate.", benefit: "Răspuns mai rapid și mai puține oportunități pierdute.", tools: "Zapier, Airtable, Slack" },
        { title: "Dashboard intern de raportare", problem: "Datele de business sunt răspândite în foi de calcul.", solution: "Dashboard simplu cu metrici cheie.", benefit: "Decizii mai bune fără rapoarte manuale.", tools: "Next.js, PostgreSQL, bibliotecă charts" },
        { title: "Integrare website + CRM", problem: "Formularele website-ului nu sunt conectate la fluxul de vânzări.", solution: "Formulare conectate la CRM, alerte email și follow-up automat.", benefit: "Fiecare lead este urmărit automat.", tools: "Next.js, HubSpot API, automatizare email" }
      ]
    },
    about: {
      title: "Despre noi",
      subtitle: "Echipă mică, muncă serioasă, soluții practice.",
      intro: "Aethos Solutions este o echipă mică și practică, focusată pe rezolvarea problemelor reale de business cu ajutorul tehnologiei.",
      details: [
        "Lucrăm în engleză, spaniolă și română.",
        "Combinăm dezvoltare, automatizare, înțelegere de business și marketing.",
        "Ne concentrăm pe soluții practice, fără complexitate inutilă."
      ]
    },
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
    footer: "Ajutăm companiile mici să economisească timp, să reducă erorile și să nu mai piardă lead-uri."
  }
} as const;

export type Dictionary = (typeof dictionaries)[Language];
