
const navbar = document.getElementById("navbar");
const mobileMenu = document.getElementById("mobile-menu");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");

    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add("bg-pink/15", "backdrop-blur-lg");
        } else {
            navbar.classList.remove("bg-white/15", "backdrop-blur-lg");
        }
    }

    window.addEventListener("scroll", handleScroll);
});


menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("-translate-x-full");
    mobileMenu.classList.add("translate-x-0");
});

closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-0");
    mobileMenu.classList.add("-translate-x-full");
});

const faqs = [
    {
        question: 'What exactly is an MVP, and why do I need one?',
        answer: "MVP stands for Minimum Viable Product. It is the version of your product with just enough features to satisfy early customers and provide feedback. We build MVPs so you can enter the market quickly and cost-effectively, rather than spending months building features users might not need.",
    },
    {
        question: 'Do I need to hire a separate designer and a developer?',
        answer: 'No. That is the "Old Way". At Manova Softs, we are your integrated partner. We handle everything in-house—from logo creation and UI/UX design to coding the mobile app or website.',
    },
    {
        question: 'How long does a typical project actually take?',
        answer: 'While every project is different, a standard MVP usually takes between 4 to 8 weeks. We focus on the core features first to get you to market fast. After we understand your specific requirements, we can give you a precise timeline.',
    },
    {
        question: 'What happens after the product is launched? Do you offer support?',
        answer: 'Yes. We do not just disappear after launch. We offer maintenance packages to fix bugs, ensure the app stays online, and help you build new features as your business grows.',
    },
    {
        question: 'How much does it cost to build an MVP?',
        answer: "Careers depends on the complexity of the features. Because we focus on MVPs, our goal is to keep costs reasonable for startups.",
    },
    {
        question: 'Do you build apps for both iPhone (iOS) and Android?',
        answer: 'Yes, we provide Mobile Application development that covers both major platforms so you can reach the widest audience possible.',
    },
];

const container = document.getElementById('faq-container');

container.innerHTML = faqs.map((item, index) => `
    <div class="faq-item flex flex-col glass rounded-md text-black">
        <h3 
            class="faq-header flex cursor-pointer hover:bg-black/10 transition items-start justify-between gap-4 p-4 font-medium"
            data-index="${index}"
        >
            ${item.question}
            <svg class="chevron size-5 transition-all shrink-0 duration-400"
                fill="none" stroke="black" stroke-width="2" 
                viewBox="0 0 24 24">
                <path d="M6 9l6 6 6-6" />
            </svg>
        </h3>
        <p class="faq-content px-4 text-sm/6 transition-all duration-400 overflow-hidden max-h-0">
            ${item.answer}
        </p>
    </div>
`).join("");

let openIndex = null;

document.querySelectorAll(".faq-header").forEach(header => {
    header.addEventListener("click", () => {
        const index = header.getAttribute("data-index");
        const content = header.nextElementSibling;
        const icon = header.querySelector(".chevron");

        if (openIndex === index) {
            content.classList.remove("pt-2", "pb-4", "max-h-80");
            content.classList.add("max-h-0");
            icon.classList.remove("rotate-180");
            openIndex = null;
        } else {
            document.querySelectorAll(".faq-content").forEach(c => {
                c.classList.remove("pt-2", "pb-4", "max-h-80");
                c.classList.add("max-h-0");
            });
            document.querySelectorAll(".chevron").forEach(i => i.classList.remove("rotate-180"));

            content.classList.remove("max-h-0");
            content.classList.add("pt-2", "pb-4", "max-h-80");
            icon.classList.add("rotate-180");
            openIndex = index;
        }
    });
});
/*
const plans = [
    {
        icon: `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket size-3.5" aria-hidden="true">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
            </svg>
        `,
        title: 'Starter',
        description: 'For individuals and small teams',
        price: '$19',
        buttonText: 'Get Started',
        features: [
            'Up to 10 projects',
            '10 AI tasks/month',
            'Basic text generation',
            'Simple chatbot access',
            'Email support only',
            'Community resources'
        ]
    },
   {
        icon: `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap size-3.5" aria-hidden="true">
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
            </svg>
        `,
        title: 'Professional',
        description: 'For growing teams and startups',
        price: '$49',
        mostPopular: true,
        buttonText: 'Upgrade Now',
        features: [
            'Unlimited AI tasks',
            'API integration',
            'Text & image outputs',
            'Priority chat & email support',
            'Detailed analytics',
            'Team collaboration'
        ]
    },
    {
        icon: `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-crown size-3.5" aria-hidden="true">
                <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
                <path d="M5 21h14"></path>
            </svg>
        `,
        title: 'Enterprise',
        description: 'For enterprises and agencies',
        price: '$149',
        buttonText: 'Contact Sales',
        features: [
            'Custom AI models',
            'Team access control',
            'Dedicated account manager',
            'Secure private API',
            'SLA uptime guarantee',
            '24/7 premium support'
        ]
    }
]; */

const CareersContainer = document.getElementById("Careers-container");

CareersContainer.innerHTML = plans.map(plan => `
    <div class="group w-full max-w-80 glass p-6 rounded-xl hover:-translate-y-0.5 transition-all duration-300">
        <div class="flex items-center w-max ml-auto text-xs gap-2 glass rounded-full px-3 py-1">
            ${plan.icon}
            <span>${plan.title}</span>
        </div>
        <h3 class="mt-4 text-2xl font-semibold">
            ${plan.price}
            <span class="text-sm font-normal">/month</span>
        </h3>
        <p class="text-gray-200 mt-3">${plan.description}</p>
        <button class="mt-7 rounded-md w-full btn ${plan.mostPopular ? 'bg-white text-gray-800' : 'glass'}">
            ${plan.buttonText}
        </button>
        <div class="mt-6 flex flex-col">
            ${plan.features.map(feature => `
                <div class="flex items-center gap-2 py-2">
                    <div class="rounded-full glass border-0 p-1">
                        <svg class="size-3 text-black" fill="none"  stroke="black" stroke-width="3" viewBox="0 0 24 24">
                            <path d="M5 12l5 5L20 7"/>
                        </path>
                        </svg>
                    </div>
                    <p>${feature}</p>
                </div>
            `).join('')}
        </div>
    </div>
    
`).join("");