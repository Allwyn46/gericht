import React, { useEffect, useRef } from 'react';
import './SpecialMenu.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';
import { useSmoothScroll } from '../../context/SmoothScrollContext';

gsap.registerPlugin(ScrollTrigger);

const SpecialMenu = () => {
  const menuRef = useRef(null);
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.from('.app__specialMenu-title', {
        opacity: 0,
        y: 35,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.app__specialMenu-title',
          start: 'top 85%',
        },
      });

      // Wine & Beer items stagger reveal
      gsap.from('.app__specialMenu-menu_wine .app__menuitem', {
        opacity: 0,
        x: -35,
        stagger: 0.09,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.app__specialMenu-menu_wine',
          start: 'top 75%',
        },
      });

      // Center bottle/shaker image reveal + parallax scrub
      gsap.from('.specialMenu__img-wrapper', {
        opacity: 0,
        scale: 0.85,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.app__specialMenu-menu_img',
          start: 'top 80%',
        },
      });

      gsap.to('.specialMenu__img-wrapper', {
        yPercent: 14,
        ease: 'none',
        scrollTrigger: {
          trigger: menuRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Cocktails items stagger reveal
      gsap.from('.app__specialMenu-menu_cocktails .app__menuitem', {
        opacity: 0,
        x: 35,
        stagger: 0.09,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.app__specialMenu-menu_cocktails',
          start: 'top 75%',
        },
      });

      // View more button reveal
      gsap.from('.specialMenu__btn', {
        opacity: 0,
        y: 25,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.specialMenu__btn',
          start: 'top 90%',
        },
      });
    }, menuRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className='app__specialMenu flex__center section__padding' id='menu' ref={menuRef}>
      <div className="app__specialMenu-title">
        <SubHeading title="Menu That Fits Your Palatte" />
        <h1 className='headtext__cormorant'>Today&apos;s Special</h1>
      </div>
      <div className="app__specialMenu-menu">
        <div className='app__specialMenu-menu_wine flex__center'>
          <p className='app__specialMenu-menu_heading'>Wine &amp; Beer</p>
          <div className='app__specialMenu_menu_items'>
            {data.wines.map((wine, index) => (
              <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
            ))}
          </div>
        </div>

        <div className='app__specialMenu-menu_img'>
          <div className="specialMenu__img-wrapper">
            <img src={images.menu} alt="menu" />
          </div>
        </div>

        <div className='app__specialMenu-menu_cocktails flex__center'>
          <p className='app__specialMenu-menu_heading'>Cocktails</p>
          <div className='app__specialMenu_menu_items'>
            {data.cocktails.map((cocktail, index) => (
              <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <button
          type="button"
          className='custom__button specialMenu__btn'
          onClick={() => scrollTo('#contact')}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;