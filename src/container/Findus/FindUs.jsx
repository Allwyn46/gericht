import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SubHeading } from "../../components";
import { images } from "../../constants";

gsap.registerPlugin(ScrollTrigger);

const FindUs = () => {
  const findUsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content stagger reveal
      gsap.from(['.findus__subheading', '.findus__heading', '.app__wrapper-content', '.findus__btn'], {
        opacity: 0,
        y: 30,
        stagger: 0.12,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: findUsRef.current,
          start: 'top 80%',
        },
      });

      // Findus image entrance & parallax
      gsap.from('.findus__img-inner', {
        opacity: 0,
        scale: 0.88,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.findus__img-inner',
          start: 'top 80%',
        },
      });

      gsap.to('.findus__img-inner', {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: findUsRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      });
    }, findUsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="app__bg app__wrapper section__padding" id="contact" ref={findUsRef}>
      <div className="app__wrapper_info">
        <div className="findus__subheading">
          <SubHeading title="contact" />
        </div>
        <h1 className="headtext__cormorant findus__heading" style={{ marginBottom: "3rem" }}>
          Find Us
        </h1>

        <div className="app__wrapper-content">
          <p className="p__opensans">8021/19, Villankurichi Rd, near Tidal Park, Cheran ma Nagar,
            Coimbatore, Tamil Nadu 641004</p>
          <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
          <p className="p__opensans">Mon - Fri: 10:00 am - 2:00 am</p>
          <p className="p__opensans">Sat - Sun: 10:00 am - 3:00 am</p>
        </div>
        <button className="custom__button findus__btn" style={{ marginTop: '2rem' }}>Visit Us</button>
      </div>
      <div className="app__wrapper_img">
        <div className="findus__img-inner" style={{ willChange: 'transform' }}>
          <img src={images.findus} alt="findus" />
        </div>
      </div>
    </div>
  );
};

export default FindUs;
