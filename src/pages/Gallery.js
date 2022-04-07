export default function Gallery() {
    return (
        <div className="container">
        <div id="carouselExampleCaptions" className="carousel slide my-3" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://4.bp.blogspot.com/-OdppoMiziFg/WyF_9SHTWRI/AAAAAAAAAfk/uRLPXJEWllIQyDR4YOacYEyMTSe-cnf9gCLcBGAs/s640/Sekolah%2Badiwiyata.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Kegiatan Adiwiyata</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src="https://www.sman1bogor.sch.id/site/sites/default/files/Adiwiyata-2015%20%2830%29.JPG" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Kegiatan Adiwiyata</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src="https://www.sman1sungaipenuh.sch.id/wp-content/uploads/2021/03/125932070_385829609504429_8383333698039124240_o-600x400.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Kegiatan Adiwiyata</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src="https://smatunasbangsabintan.org/wp-content/uploads/2021/03/IMG_8509-1536x1024.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Kegiatan Adiwiyata</h5>
                        <p>Some representative placeholder content for the forth slide.</p>
                    </div>
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>
    )
}