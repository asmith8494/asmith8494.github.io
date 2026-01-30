import { useEffect, useRef } from "react";
import { Linkedin, Github, EnvelopeAt, ArrowDown, Briefcase, Gear, People, Signpost, Puzzle, Controller } from "react-bootstrap-icons";
import profilePic from "../assets/AnthonySmithProfilePicture.png";
import TopNav from "../components/TopNav";

function useFadeIn() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const targets = el.querySelectorAll(".fade-in");

        // Small delay to ensure layout is settled before observing
        const timer = setTimeout(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("visible");
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.05, rootMargin: "0px 0px -30px 0px" }
            );

            targets.forEach((child) => observer.observe(child));

            return () => observer.disconnect();
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return ref;
}

const PROJECTS = [
    {
        icon: <Controller />,
        title: "Ambitious Nonsense — Indie Game Studio",
        desc: "Co-founded an indie game studio as the primary hands-on engineer. Building a web-based idle game and internal tools platform using reusable, data-driven systems for rapid iteration.",
        highlights: [
            "AWS infrastructure via CDK with centralized auth across all apps",
            "Versioned content pipeline reducing redeploy frequency by 60%",
            "Established engineering standards enabling interns to ship in 2–3 weeks",
            "Lightweight documentation workflow (Obsidian to static site)",
        ],
        tags: ["React", "TypeScript", "AWS CDK", "DynamoDB", "CI/CD"],
    },
    {
        icon: <Briefcase />,
        title: "Purchase Order Portal (POP)",
        desc: "Built and owned an internal investigation tool aggregating multiple upstream data sources into a single API and UI used across Amazon operations.",
        highlights: [
            "Advanced table UX: filtering, expandable rows, conditional highlighting, exports",
            "Accessibility features including color-blind mode and keyboard navigation",
            "Migrated 80+ Tampermonkey scripts into centralized version-controlled system",
        ],
        tags: ["React", "TypeScript", "Java", "AWS"],
        impact: [
            { value: "10M+", label: "Page views" },
            { value: "20–25%", label: "Faster investigations" },
        ],
    },
    {
        icon: <Signpost />,
        title: "Beacon Guided Workflow",
        desc: "Owned and evolved a multi-step investigative workflow system with extensive branching logic, improving case consistency and investigation throughput.",
        highlights: [
            "1,200+ possible decision outcomes",
            "Improved investigation throughput by 25%",
            "Partnered with operations to translate workflow pain points into technical designs",
        ],
        tags: ["React", "TypeScript", "Workflow Engine"],
        impact: [
            { value: "900+", label: "Daily users" },
            { value: "25%", label: "Throughput gain" },
        ],
    },
    {
        icon: <People />,
        title: "Wall-E Training & QA Suite",
        desc: "Delivered a training and QA simulation suite enabling safe case simulation with validation-driven feedback and scoring for new investigators.",
        highlights: [
            "Reduced new-hire ramp time from 10 weeks to 7 weeks",
            "Validation-driven feedback and scoring system",
            "End-to-end and integration test coverage reducing regressions by 30%",
        ],
        tags: ["React", "TypeScript", "Testing", "Simulation"],
    },
    {
        icon: <Gear />,
        title: "Phoenix Automation",
        desc: "Built automation to aggregate multiple data sources and reduce manual data entry, improving investigation accuracy across supported workflows.",
        highlights: [
            "Reduced manual data entry by 45%",
            "Improved investigation accuracy by 15%",
            "Automated data aggregation from multiple enterprise sources",
        ],
        tags: ["TypeScript", "Java", "Data Pipelines", "AWS"],
    },
    {
        icon: <Puzzle />,
        title: "Browser-Based Productivity Suite",
        desc: "Developed and maintained dozens of browser-based automation scripts supporting daily operations, later forming the foundation for centralized, version-controlled automation systems.",
        highlights: [
            "Modernized 80+ scripts from SharePoint into version control",
            "Centralized vend-by-URL distribution system",
            "Reduced per-case handling time by ~30%",
        ],
        tags: ["JavaScript", "Browser Extensions", "CI/CD"],
    },
];

const TECH_STACK = [
    "React", "TypeScript", "Java", "AWS CDK",
    "Node.js", "JavaScript", "SQL", "DynamoDB",
    "Lambda", "API Gateway", "S3", "CloudFront",
    "REST APIs", "CI/CD", "Sass", "Docker",
];

function HomePage() {
    const pageRef = useFadeIn();

    return (
        <div ref={pageRef}>
            <TopNav />

            {/* ── Hero ── */}
            <section id="home" className="hero">
                <div className="hero-inner">
                    <div className="hero-content">
                        <p className="hero-greeting">Hello, I'm</p>
                        <h1>Anthony Smith</h1>
                        <p className="hero-title">Full Stack Software Engineer</p>
                        <p className="hero-desc">
                            Full-stack engineer with 5+ years shipping internal products and
                            automation at scale. Currently co-founding an indie game studio,
                            previously at Amazon where I delivered systems with 10M+ page
                            views and automation saving 50,000+ hours per year — owning work
                            end-to-end from design through on-call and operational excellence.
                        </p>
                        <div className="hero-cta">
                            <a href="#" className="btn-primary-custom" onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}>
                                View Projects <ArrowDown />
                            </a>
                            <a href="#/resume" className="btn-secondary-custom">
                                Resume
                            </a>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="profile-pic-wrapper">
                            <img src={profilePic} alt="Anthony Smith" />
                        </div>
                    </div>
                </div>
            </section>

            <hr className="section-divider" />

            {/* ── About ── */}
            <section id="about" className="section about">
                <div className="fade-in">
                    <p className="section-label">About</p>
                    <h2 className="section-title">A bit about me</h2>
                </div>
                <div className="about-grid">
                    <div className="about-text fade-in">
                        <p>
                            I'm a full stack engineer who owns work end-to-end — from
                            gathering requirements and designing systems to shipping,
                            monitoring, and iterating in production. Over 5+ years at Amazon,
                            I built and scaled internal tools and workflow systems that served
                            thousands of daily users and saved tens of thousands of
                            operational hours annually.
                        </p>
                        <p>
                            Now I'm co-founding Ambitious Nonsense, an indie game studio where
                            I'm the primary hands-on engineer — designing the game, building
                            internal tools, standing up AWS infrastructure, and mentoring
                            engineering interns. I care about writing code that's accessible,
                            well-tested, and easy for the next engineer to pick up.
                        </p>
                    </div>
                    <div className="tech-stack fade-in">
                        <h3>Technologies I work with</h3>
                        <div className="tech-grid">
                            {TECH_STACK.map((tech) => (
                                <div key={tech} className="tech-item">
                                    <span className="tech-dot" />
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <hr className="section-divider" />

            {/* ── Projects ── */}
            <section id="projects" className="section projects">
                <div className="fade-in">
                    <p className="section-label">Projects</p>
                    <h2 className="section-title">What I've built</h2>
                    <p className="section-subtitle">
                        Production systems I've designed, built, and owned — from
                        large-scale enterprise tools at Amazon to indie game infrastructure.
                    </p>
                </div>
                <div className="projects-grid stagger-children">
                    {PROJECTS.map((project) => (
                        <div key={project.title} className="project-card fade-in">
                            <div className="project-header">
                                <div className="project-icon">{project.icon}</div>
                            </div>
                            <h3>{project.title}</h3>
                            <p className="project-desc">{project.desc}</p>
                            <ul className="project-highlights">
                                {project.highlights.map((h) => (
                                    <li key={h}>{h}</li>
                                ))}
                            </ul>
                            <div className="project-tags">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                            {project.impact && (
                                <div className="project-impact">
                                    {project.impact.map((stat) => (
                                        <div key={stat.label} className="impact-stat">
                                            <span className="impact-value">{stat.value}</span>
                                            <span className="impact-label">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <hr className="section-divider" />

            {/* ── Contact ── */}
            <section id="contact" className="section contact">
                <div className="fade-in">
                    <p className="section-label">Contact</p>
                    <h2 className="section-title">Let's connect</h2>
                    <p className="section-subtitle">
                        Open to discussing new opportunities, interesting projects, or
                        just talking tech.
                    </p>
                    <div className="contact-links">
                        <a
                            href="mailto:anthony.smith353@gmail.com"
                            className="btn-primary-custom"
                        >
                            <EnvelopeAt /> Get in touch
                        </a>
                        <a
                            href="https://www.linkedin.com/in/anthony-smith-41a24543/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary-custom"
                        >
                            <Linkedin /> LinkedIn
                        </a>
                        <a
                            href="https://github.com/asmith8494"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary-custom"
                        >
                            <Github /> GitHub
                        </a>
                    </div>
                </div>
            </section>

            {/* ── Footer ── */}
            <footer className="site-footer">
                <p>Anthony Smith &middot; Built with React &amp; TypeScript</p>
            </footer>
        </div>
    );
}

export default HomePage;
