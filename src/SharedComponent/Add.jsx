

const Add = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full  h-[600px]">
            <img src="https://i.ibb.co/L6r5Q5r/car1.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full  h-[600px]">
            <img src="https://i.ibb.co/H7kj9C6/car2.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full  h-[600px]">
            <img src="https://i.ibb.co/9WwJ9HK/car3.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
    </div>
    );
};

export default Add;