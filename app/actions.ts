'use server';

// Mock Data
const projects = [
    {
        id: "1",
        title: "Lagos City Infrastructure",
        category: "Construction",
        client: "Lagos State Government",
        location: "Victoria Island, Lagos",
        duration: "24 Months",
        value: "$45 Million",
        heroImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
        story: "The Lagos City Infrastructure project was conceived to address the critical need for improved road networks and drainage systems in one of Africa's most bustling commercial hubs. With rapid urbanization, the existing infrastructure was struggling to cope, leading to congestion and flooding issues.",
        challenge: "Executing major roadworks in a densely populated and active commercial district presented significant logistical challenges. We had to minimize disruption to daily business activities while ensuring the safety of pedestrians and workers. Additionally, the project required navigating complex underground utility networks that were often unmapped.",
        solution: "FET Developers employed a phased construction approach, working primarily during off-peak hours to reduce traffic impact. We utilized advanced ground penetrating radar (GPR) to map underground utilities accurately before excavation. Our engineering team designed a state-of-the-art drainage system capable of handling high-volume rainfall, significantly mitigating flood risks.",
        impact: "The completed project has transformed the Victoria Island landscape. Traffic flow has improved by 40%, and the new drainage system has successfully prevented flooding during the rainy season. The enhanced infrastructure has boosted local business activities and improved the quality of life for residents and commuters alike.",
        gallery: JSON.stringify([
            "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=2069&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1590486803833-1c5dc8ce2ac3?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop"
        ]),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: "2",
        title: "Offshore Platform Maintenance",
        category: "Oil & Gas",
        client: "Major Energy Corp",
        location: "Niger Delta Offshore",
        duration: "18 Months",
        value: "$120 Million",
        heroImage: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop",
        story: "Maintaining operational efficiency and safety in harsh offshore environments is paramount for the energy sector. This project focused on the comprehensive structural integrity assessment and repair of a key offshore platform that had been in operation for over two decades.",
        challenge: "The platform was located in deep waters with unpredictable weather conditions. Accessing critical structural components below the waterline required specialized diving teams and ROVs (Remotely Operated Vehicles). Furthermore, the platform needed to remain partially operational during the maintenance period, adding a layer of complexity to the safety protocols.",
        solution: "We deployed a fleet of advanced ROVs equipped with high-resolution imaging and non-destructive testing (NDT) sensors to inspect the subsea structure. Our engineering team developed a custom hyperbaric welding habitat, allowing divers to perform high-quality repairs at depth. We also implemented a rigorous 'Simultaneous Operations' (SIMOPS) safety management system to coordinate maintenance activities with ongoing production.",
        impact: "The project extended the operational lifespan of the platform by an estimated 15 years. Our interventions restored structural integrity to 100% of design specifications, ensuring the safety of the crew and the environment. The client avoided costly unplanned shutdowns, securing continuous energy production.",
        gallery: JSON.stringify([
            "https://images.unsplash.com/photo-1629904853716-f004320d874c?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1563292793-27a92209d1e9?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2070&auto=format&fit=crop"
        ]),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: "3",
        title: "Global Supply Chain Optimization",
        category: "General Merchandise",
        client: "Retail Giant Ltd",
        location: "Global / Lagos HQ",
        duration: "Ongoing",
        value: "Confidential",
        heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
        story: "In an increasingly interconnected world, efficient logistics are the backbone of retail success. Our client, a multinational retail partner, faced rising costs and delays in their supply chain, affecting their ability to stock shelves on time.",
        challenge: "The client's supply chain was fragmented, relying on multiple disjointed providers for shipping, warehousing, and last-mile delivery. This lack of visibility led to inventory mismanagement, high demurrage charges, and frustrated customers. Navigating customs clearance procedures in various jurisdictions also proved to be a major bottleneck.",
        solution: "FET Developers stepped in as a lead logistics integrator. We implemented a centralized cloud-based supply chain management system that provided real-time tracking of goods from factory to shelf. We consolidated shipping routes and negotiated bulk rates with major carriers. Our customs brokerage team streamlined documentation processes, reducing clearance times by 50%.",
        impact: "The optimization program resulted in a 25% reduction in overall logistics costs within the first year. Inventory turnover rates improved significantly, and stockouts were virtually eliminated. The client now enjoys a lean, agile supply chain that can adapt quickly to market demands.",
        gallery: JSON.stringify([
            "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1494412574643-35d324698420?q=80&w=2068&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1566576912902-48f5306a98f9?q=80&w=2070&auto=format&fit=crop"
        ]),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: "4",
        title: "Eco-Friendly Residential Estate",
        category: "Construction",
        client: "Green Living Homes",
        location: "Abuja, Nigeria",
        duration: "36 Months",
        value: "$80 Million",
        heroImage: "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2067&auto=format&fit=crop",
        story: "With growing awareness of climate change, the demand for sustainable living spaces is on the rise. This project aimed to create a model eco-friendly residential estate that combines luxury with environmental responsibility.",
        challenge: "The challenge was to design a self-sufficient community that minimized its carbon footprint without compromising on modern amenities. We needed to integrate renewable energy sources, efficient waste management, and water conservation systems into the architectural design from the ground up.",
        solution: "We designed the estate with passive cooling techniques to reduce reliance on air conditioning. Solar panels were installed on every rooftop, contributing to a microgrid that powers the entire community. A rainwater harvesting system and a biological wastewater treatment plant were constructed to ensure water sustainability. We also used locally sourced, low-carbon building materials.",
        impact: "The estate has become a benchmark for sustainable development in the region. It generates 80% of its own electricity and recycles 90% of its water. Residents enjoy lower utility bills and a healthier living environment. The project has won multiple awards for green building excellence.",
        gallery: JSON.stringify([
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600596542815-2a4d9f0152ba?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
        ]),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: "5",
        title: "Pipeline Security System",
        category: "Oil & Gas",
        client: "National Petroleum Corp",
        location: "Cross-Country Pipeline",
        duration: "12 Months",
        value: "$35 Million",
        heroImage: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=2069&auto=format&fit=crop",
        story: "Pipeline vandalism and oil theft are major economic and environmental issues. Our client needed a robust security solution to protect a critical 500km pipeline network transporting crude oil.",
        challenge: "Monitoring such a vast and often remote infrastructure manually was inefficient and dangerous. The client needed a system that could detect intrusion attempts, leaks, and tampering in real-time, allowing for immediate response.",
        solution: "We implemented a hybrid security system combining fiber-optic distributed acoustic sensing (DAS) with drone surveillance. The fiber-optic cable running alongside the pipeline acts as a continuous microphone, detecting ground vibrations caused by digging or heavy machinery. AI algorithms analyze these signals to identify threats. Automated drones are then dispatched to verify alerts and provide live video feeds to the control center.",
        impact: "Since implementation, pipeline vandalism incidents have dropped by 90%. The system has successfully detected and prevented multiple theft attempts. The early leak detection capability has also prevented potential environmental disasters, saving millions in cleanup costs and lost revenue.",
        gallery: JSON.stringify([
            "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?q=80&w=2071&auto=format&fit=crop"
        ]),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: "6",
        title: "Industrial Equipment Procurement",
        category: "General Merchandise",
        client: "MegaFactory Ind.",
        location: "Kano, Nigeria",
        duration: "6 Months",
        value: "$15 Million",
        heroImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop",
        story: "Setting up a new manufacturing plant requires precise coordination of equipment delivery. Our client needed to source and transport heavy industrial machinery from manufacturers in Europe and Asia to their new site in Northern Nigeria.",
        challenge: "The project involved handling oversized cargo (OOG) that required special permits and transport vehicles. Coordinating the arrival of components from different continents to ensure they arrived on site in the correct installation sequence was a logistical puzzle. Any delay would stall the entire plant construction.",
        solution: "FET Developers leveraged its global procurement network to source the equipment directly from OEMs. We chartered specialized breakbulk vessels for the ocean transport and arranged heavy-lift convoys for the inland journey. Our project logistics team created a detailed 'path of construction' delivery schedule, ensuring every bolt and turbine arrived exactly when needed.",
        impact: "All equipment was delivered safely and on schedule, allowing the plant to be commissioned two weeks ahead of the target date. The seamless procurement and logistics process saved the client significant demurrage and storage costs, setting a new standard for industrial project logistics.",
        gallery: JSON.stringify([
            "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1565514020176-dbf2277e4a67?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?q=80&w=2072&auto=format&fit=crop"
        ]),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
];

const articles = [
    {
        id: "1",
        title: "FET Developers Wins Excellence in Construction Award",
        excerpt: "We are proud to announce that our recent commercial complex project has been recognized for outstanding architectural design and sustainability.",
        content: "Full article content would go here...",
        date: "October 15, 2025",
        author: "Corporate Comms",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: "2",
        title: "Expanding Our Oil & Gas Operations",
        excerpt: "FET Developers is scaling up its upstream support services with new strategic partnerships and equipment acquisitions.",
        content: "Full article content would go here...",
        date: "September 22, 2025",
        author: "Operations Team",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: "3",
        title: "The Future of Sustainable Logistics",
        excerpt: "How we are integrating green technologies into our general merchandise supply chain to reduce carbon footprint.",
        content: "Full article content would go here...",
        date: "August 10, 2025",
        author: "Logistics Head",
        image: "https://images.unsplash.com/photo-1494412574643-35d324698420?q=80&w=2068&auto=format&fit=crop",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
];

const jobs = [
    {
        id: "1",
        title: "Senior Civil Engineer",
        department: "Construction",
        location: "Lagos, Nigeria",
        type: "Full-time",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: "2",
        title: "Logistics Manager",
        department: "General Merchandise",
        location: "Abuja, Nigeria",
        type: "Full-time",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: "3",
        title: "Safety Compliance Officer",
        department: "Oil & Gas",
        location: "Port Harcourt, Nigeria",
        type: "Contract",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
];

// Projects
export async function getProjects() {
    return projects;
}

export async function getProject(id: string) {
    const project = projects.find(p => p.id === id);
    return project || null;
}

// News
export async function getNewsArticles() {
    return articles;
}

// Jobs
export async function getJobOpenings() {
    return jobs;
}

// Contact
export async function submitContactForm(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
        return { success: false, message: 'Missing required fields' };
    }

    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true, message: 'Message sent successfully!' };
}
