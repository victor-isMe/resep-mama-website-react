function About() {
    return (
        <main className="about-page" style={{padding: "32px"}}>
            <h2>Tentang Resep Mama</h2>
            <p>
                Website ini berisi resep rumahan yang diwariskan turun-temurun
            </p>

            <div className="about-wrapper">
                <img src="https://picsum.photos/200/300" alt="Resep Mama Image" />
                <div className="content-text">
                    <h2>Resep Mama</h2>
                    <p>
                        Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. 
                        Itaque quas accusamus incidunt 
                        praesentium debitis ducimus minima 
                        possimus voluptatum eius. Aliquid 
                        velit blanditiis necessitatibus odit 
                        adipisci vitae aut earum. Vero, velit?
                    </p>

                    <h4>Tips Mama</h4>
                    <ul>
                        <li>Blablabla one</li>
                        <li>Blablabla two</li>
                        <li>Blablabla three</li>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default About