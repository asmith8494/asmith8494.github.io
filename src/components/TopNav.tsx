import { useState, useEffect } from "react";
import { Linkedin, Github, EnvelopeAt, List, X } from "react-bootstrap-icons";

function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth" });
    }
}

function TopNav() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNav = (e: React.MouseEvent, sectionId: string) => {
        e.preventDefault();
        setMenuOpen(false);
        scrollToSection(sectionId);
    };

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className={`site-nav ${scrolled ? "scrolled" : ""}`}>
            <div className="nav-inner">
                <a href="#" className="nav-brand" onClick={(e) => handleNav(e, "home")}>
                    anthony<span className="accent">.</span>smith
                </a>

                <button
                    className="nav-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X /> : <List />}
                </button>

                <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
                    <ul className="nav-links">
                        <li><a href="#" onClick={(e) => handleNav(e, "about")}>About</a></li>
                        <li><a href="#" onClick={(e) => handleNav(e, "projects")}>Projects</a></li>
                        <li><a href="#/resume" onClick={closeMenu}>Resume</a></li>
                        <li><a href="#" onClick={(e) => handleNav(e, "contact")}>Contact</a></li>
                    </ul>
                    <div className="nav-socials">
                        <a href="https://www.linkedin.com/in/anthony-smith-41a24543/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin />
                        </a>
                        <a href="mailto:anthony.smith353@gmail.com" aria-label="Email">
                            <EnvelopeAt />
                        </a>
                        <a href="https://github.com/asmith8494" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default TopNav;
