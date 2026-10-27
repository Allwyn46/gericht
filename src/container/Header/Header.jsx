import React, { useEffect, useRef } from 'react';
import './Header.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import { useSmoothScroll } from '../../context/SmoothScrollContext';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
    const headerRef = useRef(null);
    const { scrollTo } = useSmoothScroll();

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.from('.header__subheading', {
                opacity: 0,
                y: -25,
                duration: 1,
            })
            .from('.app__header-h1', {
                opacity: 0,
                y: 50,
                duration: 1.2,
                ease: 'power4.out',
            }, '-=0.6')
            .from('.header__desc', {
                opacity: 0,
                y: 30,
                duration: 1,
            }, '-=0.7')
            .from('.header__btn', {
                opacity: 0,
                scale: 0.9,
                duration: 0.8,
                ease: 'back.out(1.7)',
            }, '-=0.6')
            .from('.header__img-inner', {
                opacity: 0,
                scale: 0.88,
                y: 40,
                duration: 1.3,
            }, '-=1');

            // Ambient gentle floating animation
            gsap.to('.header__img-inner', {
                y: -14,
                duration: 3.5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            });

            // Parallax scrub on scroll
            gsap.to('.header__img-inner', {
                yPercent: 18,
                ease: 'none',
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                },
            });
        }, headerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className='app__header app__wrapper section__padding' id='home' ref={headerRef}>
            <div className="app__wrapper_info">
                <div className="header__subheading">
                    <SubHeading title="Chase the new flavour" />
                </div>
                <h1 className='app__header-h1'>The Key to Fine Dining</h1>
                <p className='p__opensans header__desc' style={{ margin: '2rem 0' }}>
                    Savor the Symphony of Flavors, Where Culinary Artistry Meets Euphoria. Discover the essence of culinary bliss. Come, join us at &ldquo;Gericht,&rdquo; where every bite is a journey of flavors, and every moment is a celebration of life&apos;s finest pleasures.
                </p>
                <button
                    type='button'
                    className='custom__button header__btn'
                    onClick={() => scrollTo('#menu')}
                >
                    Explore Menu
                </button>
            </div>
            <div className="app__wrapper_img">
                <div className="header__img-inner">
                    <img src={images.welcome} alt="header img" />
                </div>
            </div>
        </div>
    );
};

export default Header;