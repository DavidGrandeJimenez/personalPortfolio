import React from "react";

const Footer = () => {
    return (
        <footer style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            <p className="created">
                Entwickelt von David <strong>GRANDE</strong> &copy;{" "}
                {new Date().getFullYear()}
            </p>
        </footer>
    );
};

export default Footer;