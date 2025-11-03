function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <h1>Fast Repairs. Lasting Performance.</h1>
                <p>Certified device technicians delivering precise diagnosis and
                    repairs that restore reliability, speed and lifespan.
                </p>

                <div className="hero-buttons">
                    <button className="primary-button">Book Repair</button>
                </div>          
            </div>

            <table>
                <tbody>
                    <tr>
                        <td>
                            <div className="stat-number">9+</div>
                            <div className="stat-label">Years of Experience</div>
                        </td>
                        <td>
                            <div className="stat-number">0$</div>
                            <div className="stat-label">Free Diagnostic</div>
                        </td>
                         <td>
                            <div className="stat-number">$</div>
                            <div className="stat-label">Affordable Pricing</div>
                        </td>
                        <td>
                            <div className="stat-number">1000+</div>    
                            <div className="stat-label">Devices Repaired</div>
                        </td>
                        <td>
                            <div className="stat-number">24hr</div>
                            <div className="stat-label">Fast Turnaround</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

export default Hero;