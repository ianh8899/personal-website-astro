// Central translation dictionary.
//
// HOW TO ADD/EDIT TRANSLATIONS:
// - Keys are shared across all languages.
// - Values can be a string, or an array of strings (e.g. project feature lists).
// - The `nl` block currently duplicates the English copy as a placeholder so
//   the site builds correctly. Replace the `nl` values with real Dutch
//   translations whenever you're ready — no other code needs to change.

export const languages = {
    en: "English",
    nl: "Nederlands",
} as const;

export const defaultLang = "en";

export type Lang = keyof typeof languages;

export const ui = {
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.about": "About",
        "nav.projects": "Projects",
        "nav.skills": "Skills",
        "nav.experience": "Experience",

        // Intro section
        "intro.greeting": "Hello, my name is Ian.",
        "intro.role": "I'm a Web developer!",
        "intro.enjoyBuilding": "I enjoy building",
        "intro.sitesAndApps": "sites & apps.",
        "intro.downloadCV": "Download CV",
        "intro.linkedinLabel": "Link to LinkedIn",
        "intro.githubLabel": "Link to Github",

        // About section
        "about.heading": "About me",
        "about.paragraph1Part1":
            "I spent 8 years working in procurement within the automotive industry after graduating in",
        "about.paragraph1MechanicalEngineering": "Mechanical Engineering",
        "about.paragraph1Part2":
            ", managing global supply chains and working closely with stakeholders to deliver complex projects. I've since transitioned into software engineering, where I now have a",
        "about.paragraph1ProvenTrackRecord": "proven track record",
        "about.paragraph1Part3": "of building scalable applications using",
        "about.paragraph1ModernWebTechnologies": "modern web technologies",
        "about.paragraph1Part4":
            ". I bring skills in communication, problem-solving and collaboration into my professional work, with a strong focus on",
        "about.paragraph1Maintainability": "maintainability",
        "about.paragraph1Part5": "performance and user experience.",
        "about.paragraph2Part1": "When I'm not coding, I'm often",
        "about.paragraph2CookingAndTraveling": "cooking and traveling",
        "about.paragraph2Part2": "with my partner. I thoroughly enjoy",
        "about.paragraph2LearningNewThings": "learning new things",
        "about.paragraph2Part3": ", currently I'm learning",
        "about.paragraph2Dutch": "Dutch",
        "about.paragraph2Part4": ".",

        // Projects section
        "projects.heading": "My projects",
        "project.githubAriaLabel": "Github Link to Project",
        "project.hostedAriaLabel": "Link to Hosted Project",
        "project.copyUsername": "Copy username",
        "project.copyPassword": "Copy password",
        "project.copied": "Copied!",
        "project.showCredentials": "Show demo credentials",
        "project.clickToShowCredentials": "Click to show credentials for test account",
        "project.usernameLabel": "Username:",
        "project.passwordLabel": "Password:",
        "project.keyFeaturesHeading": "Key Technical Features:",
        "skills.heading": "My skills",

        // Experience section
        "experience.heading": "My experience",

        // Footer
        "footer.aboutThisWebsite": "About this website:",
        "footer.builtWith":
            "built with React & Astro, TypeScript, Tailwind CSS, Framer Motion, Hosted on Cloudflare Workers.",

        // Experience descriptions (indexed to match experiencesData in lib/data.tsx)
        "experience.0.description":
            "Devloped and maintained enterpise applications for the world's largest online only supermarket. Primarily using Angular, Nest.js & Postgres",
        "experience.1.description":
            "Created internal applications to improve operational efficiency and ensure compliance in financial services.",
        "experience.2.description":
            "Working with a team of developers to develop and maintain a web application for the dental industry. Primarily using Angular, Node, GraphQL.",
        "experience.3.description":
            "Working with a variety of clients to develop websites and applications to meet their specific requirements.",
        "experience.4.description":
            "The commercial lead for electrified powertrian, ensuring the business has first to market technology leading in performance, cost and sustainability.",
        "experience.5.description":
            "The local lead buyer for electrical hardware with targets to improve on contract postiion and new product development.",
        "experience.6.description":
            "Responsible for the development and implementation of the global sourcing strategies across the category.",
        "experience.7.description":
            "I lead overall operations which comprised contract management supplier performance, improvement activities, and stakeholder management",
        "experience.8.description":
            "An introduction into automotive procurement and supply chain management.",

        // Experience dates (indexed to match experiencesData in lib/data.tsx)
        "experience.0.date": "May 2026 - Present",
        "experience.1.date": "Aug 2025 - Sep 2026",
        "experience.2.date": "Jun 2024 - Jun 2025",
        "experience.3.date": "Oct 2023 - Jan 2024",
        "experience.4.date": "Jul 2022 - Mar 2023",
        "experience.5.date": "Feb 2021 - Jul 2022",
        "experience.6.date": "Feb 2019 - Feb 2021",
        "experience.7.date": "Sept 2017 - Feb 2019",
        "experience.8.date": "Sept 2015 - Sept 2017",

        // Project descriptions & features (indexed to match projectsData in lib/data.tsx)
        "project.0.description":
            "Soupabase is a public free to use and fast REST API that returns all data types for use in teaching, testing and prototyping for front-end applications.",
        "project.0.features": [
            "Frontend: Served from the backend with HTML responses making use of HTMX and tailwind",
            "Backend: Hono as the server and Supabase for the database",
            "Hosting: Hosted on a cloudflare worker for fast responses.",
        ],

        "project.1.description":
            "A proof of concept Ai application based on Clauda.ai utilising a full stack of technologies to deliver a modern ai saas application.",
        "project.1.features": [
            "Frontend: The application's client is built in React, TypeScript brings a layer of type safety, ensuring a robust application with fewer runtime errors.",
            "Backend: Hono, running within the Node.js environment, managing server-side operations, routing, and data handling.",
            "Stripe: To take customer payments for the AI service.",
            "Ai Model: Tinyllama model running with the Ollama API for fast and efficient responses.",
        ],

        "project.2.description":
            "This project represents a social media platform built using modern tools and technologies. Users can share their thoughts, dive into discussions, and connect with the digital community.",
        "project.2.features": [
            "Frontend: The application's frontend is crafted with Next.js, optimizing for faster page loads and enhanced SEO. TypeScript brings a layer of type safety, ensuring a robust application with fewer runtime errors.",
            "Backend: Express.js, running within the Node.js environment, managing server-side operations, routing, and data handling.",
            "User Authentication: Is managed with Clerk allowing a simplified yet secure user authentication system",
            "Database: MongoDB is at the core of data management, ensuring efficient storage and retrieval of user content.",
        ],

        "project.3.description":
            "The RFQ MERN Application streamlines the procurement process, enabling interaction between buyers and suppliers in small organizations.",
        "project.3.features": [
            "3-tier Architecture: Frontend with React.js, Backend with Express.js and Node.js, Database managed by MongoDB.",
            "Next.js Integration for performance and dynamic pages.",
            "Functionalities include secure JWT authentication, RFQ management system, and personalized dashboards.",
        ],

        "project.4.description":
            "A comprehensive learning journey through Full Stack Web Development, covering front-end and back-end technologies, security protocols, and API integration.",
        "project.4.features": [
            "Web Fundamentals: JavaScript, CSS, HTML.",
            "Front-End Mastery: CSS, React, Bootstrap.",
            "Back-End Proficiency: Express and MongoDB.",
            "Security Protocols: User validation and JWT.",
            "API Integration and Frameworks: React, Next.js.",
        ],
    },
    nl: {
        // Navigation
        "nav.home": "Home",
        "nav.about": "Over",
        "nav.projects": "Projecten",
        "nav.skills": "Vaardigheden",
        "nav.experience": "Ervaring",

        // Intro section
        "intro.greeting": "Hallo, mijn naam is Ian.",
        "intro.role": "Ik ben een webontwikkelaar!",
        "intro.enjoyBuilding": "Ik bouw graag",
        "intro.sitesAndApps": "websites & apps.",
        "intro.downloadCV": "CV downloaden",
        "intro.linkedinLabel": "Link naar LinkedIn",
        "intro.githubLabel": "Link naar GitHub",

        // About section
        "about.heading": "Over mij",
        "about.paragraph1Part1":
            "Na mijn afstuderen in",
        "about.paragraph1MechanicalEngineering": "Werktuigbouwkunde",
        "about.paragraph1Part2":
            " heb ik 8 jaar in inkoop gewerkt binnen de auto-industrie, waar ik wereldwijde toeleveringsketens beheerde en nauw samenwerkte met belanghebbenden om complexe projecten te realiseren. Sinds mijn overstap naar software engineering heb ik een",
        "about.paragraph1ProvenTrackRecord": "bewezen staat van dienst",
        "about.paragraph1Part3": "in het bouwen van schaalbare applicaties met",
        "about.paragraph1ModernWebTechnologies": "moderne webtechnologieën",
        "about.paragraph1Part4":
            ". In mijn professionele werk breng ik vaardigheden mee op het gebied van communicatie, probleemoplossing en samenwerking, met een sterke focus op",
        "about.paragraph1Maintainability": "onderhoudbaarheid",
        "about.paragraph1Part5": "prestaties en gebruikerservaring.",
        "about.paragraph2Part1": "Als ik niet aan het coderen ben, ben ik vaak aan het",
        "about.paragraph2CookingAndTraveling": "koken en reizen",
        "about.paragraph2Part2": "met mijn partner. Ik geniet enorm van",
        "about.paragraph2LearningNewThings": "nieuwe dingen leren",
        "about.paragraph2Part3": "; op dit moment leer ik",
        "about.paragraph2Dutch": "Nederlands",
        "about.paragraph2Part4": ".",

        // Projects section
        "projects.heading": "Mijn projecten",
        "project.githubAriaLabel": "GitHub-link naar project",
        "project.hostedAriaLabel": "Link naar gehost project",
        "project.copyUsername": "Gebruikersnaam kopiëren",
        "project.copyPassword": "Wachtwoord kopiëren",
        "project.copied": "Gekopieerd!",
        "project.showCredentials": "Toon demo-inloggegevens",
        "project.clickToShowCredentials": "Klik om inloggegevens voor testaccount te tonen",
        "project.usernameLabel": "Gebruikersnaam:",
        "project.passwordLabel": "Wachtwoord:",
        "project.keyFeaturesHeading": "Belangrijkste technische kenmerken:",

        // Skills section
        "skills.heading": "Mijn vaardigheden",

        // Experience section
        "experience.heading": "Mijn ervaring",

        // Footer
        "footer.aboutThisWebsite": "Over deze website:",
        "footer.builtWith":
            "gebouwd met React & Astro, TypeScript, Tailwind CSS, Framer Motion, gehost op Cloudflare Workers.",

        // Experience descriptions (indexed to match experiencesData in lib/data.tsx)
        "experience.0.description":
            "Enterprise-applicaties ontwikkeld en onderhouden voor 's werelds grootste online-supermarkt. Voornamelijk met gebruik van Angular, Nest.js & Postgres.",
        "experience.1.description":
            "Interne applicaties ontwikkeld om de operationele efficiëntie te verbeteren en naleving van regelgeving in de financiële dienstverlening te waarborgen.",
        "experience.2.description":
            "Samenwerken met een team van ontwikkelaars aan de ontwikkeling en het onderhoud van een webapplicatie voor de tandheelkundige sector. Voornamelijk met Angular, Node, GraphQL.",
        "experience.3.description":
            "Samenwerken met diverse klanten om websites en applicaties te ontwikkelen die aan hun specifieke eisen voldoen.",
        "experience.4.description":
            "Commercieel verantwoordelijke voor geëlektrificeerde aandrijflijnen, waarbij ervoor werd gezorgd dat het bedrijf als eerste op de markt was met toonaangevende technologie op het gebied van prestaties, kosten en duurzaamheid.",
        "experience.5.description":
            "Lokaal lead buyer voor elektrische hardware met doelstellingen om de contractpositie te verbeteren en nieuwe productontwikkeling te ondersteunen.",
        "experience.6.description":
            "Verantwoordelijk voor de ontwikkeling en implementatie van de wereldwijde inkoopstrategieën binnen de categorie.",
        "experience.7.description":
            "Eindverantwoordelijk voor de algehele operationele activiteiten, waaronder contractbeheer, leveranciersprestaties, verbeteringstrajecten en stakeholdermanagement.",
        "experience.8.description":
            "Een introductie in inkoop en toeleveringsketenbeheer binnen de auto-industrie.",

        // Experience dates (indexed to match experiencesData in lib/data.tsx)
        "experience.0.date": "Mei 2026 - Heden",
        "experience.1.date": "Aug 2025 - Sep 2026",
        "experience.2.date": "Jun 2024 - Jun 2025",
        "experience.3.date": "Okt 2023 - Jan 2024",
        "experience.4.date": "Jul 2022 - Mrt 2023",
        "experience.5.date": "Feb 2021 - Jul 2022",
        "experience.6.date": "Feb 2019 - Feb 2021",
        "experience.7.date": "Sept 2017 - Feb 2019",
        "experience.8.date": "Sept 2015 - Sept 2017",

        // Project descriptions & features (indexed to match projectsData in lib/data.tsx)
        "project.0.description":
            "Soupabase is een openbare, gratis te gebruiken en snelle REST API die alle gegevenstypen retourneert voor gebruik bij onderwijs, testen en prototypen van frontend-applicaties.",
        "project.0.features": [
            "Frontend: Geseerveerd vanaf de backend met HTML-responses met behulp van HTMX en Tailwind",
            "Backend: Hono als server en Supabase voor de database",
            "Hosting: Gehost op een Cloudflare Worker voor snelle responstijden.",
        ],

        "project.1.description":
            "Een proof-of-concept AI-applicatie gebaseerd op Claude.ai die gebruikmaakt van een full-stack technologie-stack om een moderne AI SaaS-applicatie te leveren.",
        "project.1.features": [
            "Frontend: De client is gebouwd in React, waarbij TypeScript een laag van typeveiligheid toevoegt om een robuuste applicatie met minder runtime-fouten te garanderen.",
            "Backend: Hono, draaiend binnen de Node.js-omgeving, voor het beheren van serverzijde-operaties, routing en gegevensverwerking.",
            "Stripe: Voor het verwerken van betalingen van klanten voor de AI-dienst.",
            "AI-model: Tinyllama-model dat draait via de Ollama API voor snelle en efficiënte antwoorden.",
        ],

        "project.2.description":
            "Dit project is een sociale media-platform gebouwd met moderne tools en technologieën. Gebruikers kunnen hun gedachten delen, deelnemen aan discussies en in contact komen met de digitale community.",
        "project.2.features": [
            "Frontend: De frontend van de applicatie is gemaakt met Next.js, geoptimaliseerd voor snellere laadtijden en verbeterde SEO. TypeScript biedt typeveiligheid voor een robuuste applicatie.",
            "Backend: Express.js, draaiend in de Node.js-omgeving, beheert serverzijde-operaties, routing en gegevensverwerking.",
            "Gebruikersauthenticatie: Wordt beheerd met Clerk, wat zorgt voor een eenvoudig maar veilig authenticatiesysteem.",
            "Database: MongoDB vormt de kern van het gegevensbeheer en zorgt voor efficiënte opslag en ophalen van inhoud.",
        ],

        "project.3.description":
            "De RFQ MERN-applicatie stroomlijnt het inkoopproces en maakt interactie mogelijk tussen kopers en leveranciers in kleine organisaties.",
        "project.3.features": [
            "3-tier architectuur: Frontend met React.js, Backend met Express.js en Node.js, Database beheerd door MongoDB.",
            "Next.js-integratie voor hoge prestaties en dynamische pagina's.",
            "Functionaliteiten omvatten veilige JWT-authenticatie, een RFQ-beheersysteem en gepersonaliseerde dashboards.",
        ],

        "project.4.description":
            "Een uitgebreid leertraject in full-stack webontwikkeling, waarin frontend- en backend-technologieën, beveiligingsprotocollen en API-integratie aan bod komen.",
        "project.4.features": [
            "Web-basics: JavaScript, CSS, HTML.",
            "Frontend-beheersing: CSS, React, Bootstrap.",
            "Backend-vaardigheid: Express en MongoDB.",
            "Beveiligingsprotocollen: Gebruikersvalidatie en JWT.",
            "API-integratie en frameworks: React, Next.js.",
        ],
    },
} as const satisfies Record<Lang, Record<string, string | readonly string[]>>;
