import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import linkedin from "../../assets/linkedin.png";
import email from "../../assets/gmail.png";
import github from "../../assets/github.png";

function Navi() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(
        () => {
            const handleScroll = () => {
                if (window.scrollY > 50) {
                    setScrolled(true);
                } else {
                    setScrolled(false);
                }
            };

            window.addEventListener("scroll", handleScroll);

            return (
                () => {window.removeEventListener("scroll", handleScroll);}
            );
        }, 
        []
    );

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : "fixed-top"}>
            <Container>
                <Navbar.Brand href="/">
                    <h1 className="logo">Y U S E N</h1>
                </Navbar.Brand>

                <Nav className="me-auto">
                    <Nav.Link href="#home" className={'navbar-link'}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={'navbar-link'}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={'navbar-link'}>Projects</Nav.Link>
                    <div className="connections">
                        <p className="letsCon">Let's Connect!</p>
                        <a href="https://www.linkedin.com/in/yusen-luan-868463279/" target="_blank" rel="noopener noreferrer"><img src={linkedin} className="connections-img" alt=""/></a>
                        <a href="mailto:luanyusen@gmail.com"><img src={email} className="connections-img" alt=""/></a>
                        <a href="https://github.com/yusen-luan" target="_blank" rel="noopener noreferrer"><img src={github} className="connections-img" alt=""/></a>  
                    </div>
                                       
                </Nav>                               
                               
            </Container>
        </Navbar>
    )
}

export default Navi