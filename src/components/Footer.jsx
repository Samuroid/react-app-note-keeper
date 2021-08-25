import React from "react";

const year = new Date().getFullYear();

function Footer() {
    return(
        <footer>
            <p>Samuel W. Bruton | Copyright ⓒ {year}</p>
        </footer>
    )
}

export default Footer;