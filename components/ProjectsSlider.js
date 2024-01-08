import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const projectData = [
  {
    id: 1,
    title: "Kjellman Auto",
    path: "https://www.kjellmanauto.com",
    description:
      "Designed and implemented a cutting-edge website for Kjellman Auto leveraging the power of React and Node.js technologies.",
    imgSrc: [
      {
        img: "/kj1.png",
        className: "xl:top-[9rem] top-24 left-10 xl:left-20 z-10 mt-20 pl-0",
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
    path: "https://www.indpro.se",
    description:
      "Contributed to a team effort in developing an innovative website for Indpro AB, utilizing Next.js and Node.js technologies.",
    imgSrc: [
      {
        img: "/indpro1.png",
        className: "xl:top-[9rem] top-24 left-10 xl:left-20 z-10 mt-20 pl-0",
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
    path: "https://trackfit360.netlify.app/",
    description:
      "Designed and created an inventive website/dashboard with login functionality, specifically designed as a proof of concept for personal fitness tracking. Implemented using Next.js 14 and Node.js technologies.",
    imgSrc: [
      {
        img: "/tf1.png",
        className: "xl:top-[9rem] top-24 left-10 xl:left-20 z-10 mt-20 pl-0",
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
    title: "NovaVest",
    path: "https://novavestfinancial.netlify.app/",
    description:
      "Created a simple and user-friendly banking app prototype. This project is part of my ongoing exploration and experimentation, demonstrating my commitment to continuous learning and improvement in web development.",
    imgSrc: [
      {
        img: "/nova1.png",
        className: "xl:top-[9rem] top-24 left-10 xl:left-20 z-10 mt-20 pl-0",
      },
      {
        img: "/nova2.png",
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
      className="xl:h-[600px] md:h-[400px] md:-mb-28 -m-0 xl:m-0 h-[340px] w-full"
    >
      {projectData.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="bg-[rgba(65, 47, 123, 0.15)] min-h-[400px] justify-center rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group">
            <div>
              <h1 className="xl:h2 text-3xl absolute text-center w-full justify-center sm:top-0 left-0 flex top-0">
                {item.title}
              </h1>
            </div>
            <div>
              <p className="text-[12px] xl:text-center xl:text-[16px] px-10 md:px-0 xl:px-8 absolute card-desc-sm left-0 xl:top-20">
                {item.description}
              </p>
            </div>
            <div className="hidden md:flex absolute left-[8rem] pl-4 top-[8.5rem] xl:left-[18rem] xl:top-[11rem]">
              <Link className="btn-sm" href={item.path} target="_blank">
                view <span className="text-accent">live</span>
              </Link>
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
