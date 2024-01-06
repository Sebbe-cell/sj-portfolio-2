import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

const data = [
  {
    id: 1,
    title: "Kjellman Auto",
    description:
      "Designed and implemented a cutting-edge website for Kjellman Auto leveraging the power of React and Node.js technologies.",
    imgSrc: [
      {
        img: "/kj1.png",
        className: "xl:top-24 top-24 left-10 xl:left-20 z-10 mt-20 pl-0",
      },
      {
        img: "/kj2.png",
        className:
          "xl:bottom-24 bottom-24 right-10 xl:right-20 z-20 -mb-10 pr-0",
      },
    ],
  },
  {
    id: 2,
    title: "Indpro AB",
    description:
      "Contributed to a team effort in developing an innovative website for Indpro AB, utilizing Next.js and Node.js technologies.",
    imgSrc: [
      {
        img: "/indpro1.png",
        className: "xl:top-24 top-24 left-10 xl:left-20 z-10 mt-20 pl-0",
      },
      {
        img: "/indpro2.png",
        className:
          "xl:bottom-24 bottom-24 right-10 xl:right-20 z-20 -mb-10 pr-0",
      },
    ],
  },
  {
    id: 3,
    title: "TrackFit360",
    description:
      "Designed and created an inventive website/dashboard with login functionality, specifically designed as a proof of concept for personal fitness tracking. Implemented using Next.js 14 and Node.js technologies.",
    imgSrc: [
      {
        img: "/tf1.png",
        className: "xl:top-24 top-24 left-10 xl:left-20 z-10 mt-20 pl-0",
      },
      {
        img: "/tf2.png",
        className:
          "xl:bottom-24 bottom-24 right-10 xl:right-20 z-20 -mb-10 pr-0",
      },
    ],
  },
  {
    id: 4,
    title: "Kjellman Auto",
    description:
      "Designed and implemented a cutting-edge website for Kjellman Auto leveraging the power of React and Node.js technologies.",
    imgSrc: [
      {
        img: "/kj1.png",
        className: "xl:top-24 top-24 left-10 xl:left-20 z-10 mt-20 pl-0",
      },
      {
        img: "/kj2.png",
        className:
          "xl:bottom-24 bottom-24 right-10 xl:right-20 z-20 -mb-10 pr-0",
      },
    ],
  },
  {
    id: 5,
    title: "Kjellman Auto",
    description:
      "Designed and implemented a cutting-edge website for Kjellman Auto leveraging the power of React and Node.js technologies.",
    imgSrc: [
      {
        img: "/kj1.png",
        className: "xl:top-24 top-24 left-10 xl:left-20 z-10 mt-20 pl-0",
      },
      {
        img: "/kj2.png",
        className:
          "xl:bottom-24 bottom-24 right-10 xl:right-20 z-20 -mb-10 pr-0",
      },
    ],
  },
];

const ProjectsSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="xl:h-[600px] h-[340px] w-full"
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="bg-[rgba(65, 47, 123, 0.15)] min-h-[400px] justify-center rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group">
            <div>
              <h1 className="xl:h2 text-3xl absolute text-center w-full justify-center sm:top-0 left-0 flex top-0">
                {item.title}
              </h1>
            </div>
            <div>
              <p className="text-sm sm:text-[18px] absolute card-desc-sm left-0 xl:top-20">
                {item.description}
              </p>
            </div>
            <div>
              {item.imgSrc.map((imgItem) => (
                <Image
                  key={imgItem.img}
                  className={`xl:w-[450px] xl:h-[250px] w-[230px] h-[130px] rounded-xl object-cover absolute ${imgItem.className}`}
                  src={imgItem.img}
                  alt=""
                  width={700}
                  height={500}
                />
              ))}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectsSlider;
