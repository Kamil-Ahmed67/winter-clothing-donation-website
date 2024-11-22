import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    image: "https://th.bing.com/th/id/OIP.7mZWSbif0RdmOJHgby2pswHaFj?rs=1&pid=ImgDetMain",
    title: "Dhanmondi, Dhaka",
  },
  {
    image: "https://th.bing.com/th/id/OIP.icFdggr8JP_PpBsia-PmLgHaFj?rs=1&pid=ImgDetMain",
    title: "New Market, Dhaka",
  },
  {
    image: "https://www.bproperty.com/blog/wp-content/uploads/2021/07/3.jpg",
    title: "Agargaon, Dhaka",
  },
  {
    image: "https://dreamworldgroupbd.com/wp-content/uploads/2023/03/mohammadpur-town-hall-market-1024x683.jpeg",
    title: "Mohammadpur, Dhaka",
  },
  {
    image: "https://live.staticflickr.com/5612/15600226438_176243572e_b.jpg",
    title: "Mirpur-10, Dhaka",
  },
];

const CardSlider = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-11/12 mx-auto my-10">
         <h2 className="text-2xl lg:text-4xl text-center font-semibold lg:font-bold text-gray-800 mb-8 ">Dhaka Pick-Up Points</h2>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`relative transition-transform duration-300 ${
              index % 2 === 0 ? "mt-7" : "mb-7"
            }`}
          >
            <div className="w-72 h-80 mx-auto rounded-lg shadow-lg overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-3/4 object-cover"
              />
              <h3 className="text-center mt-2 text-lg font-semibold">
                {slide.title}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
