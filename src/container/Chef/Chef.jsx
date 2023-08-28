import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => {
	return (
		<div className='app__bg app__wrapper section__padding'>
			<div className='app__wrapper_img app__wrapper_img-reverse'>
				<img src={images.chef} alt="chef" />
			</div>
			<div className='app__wrapper_info'>
				<SubHeading title="Chef's Word" />
				<h1 className='headtext__cormorant'>What We Believe In</h1>

				<div className='app__chef-content'>
					<div className='app__chef-content_quote'>
						<img src={images.quote} alt="quote" />
						<p className='p__opensans'>Dining at Gericht was an exceptional experience that left me utterly delighted.</p>
					</div>
					<p className='p__opensans'>The exceptional ambiance, impeccable service, daring culinary creations, and delightful flavors all came together to create a symphony of gastronomy. If you're seeking a culinary adventure that transcends the ordinary, Gericht is the perfect place for you.</p>
				</div>
				<div className='app__chef-sign'>
					<p className='p__cormorant'>Kevin Luo</p>
					<p className='p__opensans'>Chef & Founder</p>
					<img src={images.sign} alt="sign" />
				</div>
			</div>
		</div>
	)
}

export default Chef