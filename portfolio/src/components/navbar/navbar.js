import "./navbar.css";
/* import { useEffect } from "react"; */
import { Link } from "react-router-dom";


export default function Navbar() {
    /* for background change when tab switch */
    /* const location = useLocation();
    useEffect(() => {
        const links = document.querySelectorAll(".list-items .item a");

        links.forEach((link) => {

            const linkPath = link.getAttribute("href");

            if (linkPath === location.pathname) {
                link.classList.add("selectedtab");

                if(location.pathname==="/Services")
                {
                    links.forEach((tab)=>{
                        if(tab.getAttribute("href")[0]!=="/")
                        {
                            tab.classList.add("invisibletab");
                        }
                    });
                }
                else
                {
                    links.forEach((tab)=>{
                        if(tab.getAttribute("href")[0]!=="/")
                        {
                            tab.classList.remove("invisibletab");
                        }
                    });
                }
            }
            else
            {
                link.classList.remove("selectedtab");
            }
        });
    }, [location]); */

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    function update() {
        window.history.pushState("#project", null, window.location.hash);
    }


    return (
        <>
            <div className="navbar">
                <div className="nav"></div>
                <div className="list">
                    <ul className="list-items">
                        <li className="item"><Link to="/" onClick={scrollToTop}>HOME</Link></li>
                        <li className="item"><a href="#about">ABOUT</a></li>
                        <li className="item"><a href="#projects" onClick={update}>PROJECTS</a></li>
                        <li className="item"><a href="#contacts">CONTACTS</a></li>
                        {/* <li className="item"><Link to="/Services">SERVICES</Link></li> */}
                    </ul>
                </div>
            </div>
        </>
    )
}