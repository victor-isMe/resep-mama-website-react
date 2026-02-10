function About() {
    return (
        <main className="about-page" style={{padding: "32px"}}>
            <h2>Tentang Resep Mama</h2>
            <p>
                Website ini berisi resep rumahan yang diwariskan turun-temurun
            </p>

            <div className="about-wrapper">
                <img src="../src/assets/images/about-image.png" alt="Resep Mama Image" />
                <div className="content-text">
                    <h2>Resep Mama</h2>
                    <p>
                        Berawal dari kecintaan pada masakan rumahan, Resep Mama dibuat 
                        untuk menjadi tempat untuk berbagai ide dan inspirasi memasak. 
                        Kami memahami bahwa setiap orang memiliki kenangan indah tentang makanan 
                        dari rumah. Karena itu, kami ingin menghadirkan kembali rasa hangat tersebut 
                        melalui resep-resep yang sederhana namun istimewa.
                    </p>
                    <p>
                        Platform ini akan terus berkembang dengan berbagai resep baru yang 
                        dikelola langsung oleh admin kami untuk memastikan kualitas dan kelezatan 
                        setiap hidangan.
                    </p>

                    <h4>Tips Mama</h4>
                    <ul>
                        <li>Gunakan bahan segar</li>
                        <li>Baca resep sampai selesai</li>
                        <li>Siapkan semua bahan terlebih dahulu</li>
                        <li>Cicipi sebelum disajikan</li>
                        <li>Masak dengan sabar dan sepenuh hati</li>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default About