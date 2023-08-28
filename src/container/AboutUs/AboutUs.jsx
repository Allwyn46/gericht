import React from 'react';
import './AboutUs.css';
import { images } from '../../constants'

const AboutUs = () => {
	return (
		<div className='app__aboutus app__bg flex__center section__padding' id='about'>
			<div className="app__aboutus-overlay flex__center">
				<img src={images.G} alt="g letter" />
			</div>

			<div className="app__aboutus-content flex__center">
				<div className="app__aboutus-content_about">
					<h1 className='headtext__cormorant'>About Us</h1>
					<img src={images.spoon} alt="about_spoon" className='spoon__img' />
					<p className='p__opensans'>Step into a world of elegance and warmth as you enter "Gericht." Our thoughtfully designed interior exudes an ambiance that strikes the perfect balance between modern sophistication and timeless charm. Whether you're celebrating a special occasion, enjoying a romantic evening, or simply unwinding after a long day, our restaurant provides the ideal setting for every moment.</p>
					<button type='button' className='custom__button'>Know More</button>
				</div>

				<div className='app__aboutus-content_knife flex__center'>
					<img src={images.knife} alt="about_knife" />
				</div>

				<div className="app__aboutus-content_history">
					<h1 className='headtext__cormorant'>Our History</h1>
					<img src={images.spoon} alt="about_spoon" className='spoon__img' />
					<p className='p__opensans'>At "Gericht," we invite you on a culinary journey like no other. Nestled in the heart of San Franscisco, our restaurant is a celebration of diverse tastes, rich traditions, and the artistry of fine dining. Established in 1995, we have quickly become a gastronomic destination for food enthusiasts, families, and friends seeking a remarkable dining experience.</p>
					<button type='button' className='custom__button'>Know More</button>
				</div>
			</div>
		</div>
	)
}

export default AboutUs