import React, { useState } from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import Testimonial from '../Testimonial';
import Div from '../Div';
import Spacing from '../Spacing';
export default function TestimonialSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const testimonialData = [
    {
      testimonialThumb: '/images/testimonial_1.jpeg',
      testimonialText:
        'Working with MDM marketers was a game-changer for our business. Their team\'s expertise and dedication led to a significant boost in our online presence. The results speak for themselves increased traffic, higher conversions, and a stronger brand image. We couldn\'t be happier with the outstanding service and results-driven approach. Highly recommend!',
      avatarName: 'Platinums lounge',
      avatarDesignation: 'CEO',
      ratings: '4.5',
    },
    {
      testimonialThumb: '/images/testimonial_2.jpeg',
      testimonialText:
        'Choosing MDM marketers was the best decision we made for our website redesign. Their creativity, attention to detail, and professionalism exceeded our expectations. They not only revamped our site but also improved user experience, resulting in a 30% increase in customer engagement. Their team\'s commitment to excellence is truly remarkable!',
      avatarName: 'Raiderz ent',
      avatarDesignation: 'CEO',
      ratings: '5',
    },
    {
      testimonialThumb: '/images/testimonial_3.jpeg',
      testimonialText:
        'I wish I would have thought of it first. Creative agency is the most tech valuable business resource we have ever purchased. Dude your stuff  is the bomb! eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.',
      avatarName: 'Headlights Hero',
      avatarDesignation: 'CEO',
      ratings: '4.5',
    },
    {
      testimonialThumb: '/images/testimonial_4.jpeg',
      testimonialText:
        'Masters digital marketing took our digital marketing to new heights. Their SEO strategies catapulted our website to the top of search engine rankings, driving a surge in organic traffic. The personalized approach, transparent communication, and measurable results have made them our go-to digital marketing partner. Thanks to their expertise, our business is thriving online!',
      avatarName: 'Jamii tours and travels',
      avatarDesignation: 'CEO',
      ratings: '5',
    },
  ];
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  return (
    <>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax">
        <Spacing lg="130" md="80" />
        <Div className="cs-shape_3 cs-to_up">
          <img src="/images/shape_1.svg" alt="Shape" />
        </Div>
        <Div className="container">
          <Div className="cs-testimonial_slider">
            <Div className="cs-testimonial_slider_left">
              <Slider
                asNavFor={nav1}
                ref={slider2 => setNav2(slider2)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                centerMode={true}
                centerPadding="0px"
                arrows={false}
              >
                {testimonialData.map((item, index) => (
                  <Div className="slider-nav_item" key={index}>
                    <Div className="cs-rotate_img">
                      <Div className="cs-rotate_img_in">
                        <img src={item.testimonialThumb} alt="Thumb" />
                      </Div>
                    </Div>
                  </Div>
                ))}
              </Slider>
            </Div>
            <Div className="cs-testimonial_slider_right">
              <Slider
                asNavFor={nav2}
                ref={slider1 => setNav1(slider1)}
                prevArrow={<SlickArrowLeft />}
                nextArrow={<SlickArrowRight />}
                className="cs-arrow_style1"
              >
                {testimonialData.map((item, index) => (
                  <Div key={index}>
                    <Testimonial
                      testimonialText={item.testimonialText}
                      avatarName={item.avatarName}
                      avatarDesignation={item.avatarDesignation}
                      ratings={item.ratings}
                    />
                  </Div>
                ))}
              </Slider>
            </Div>
          </Div>
        </Div>
        <Spacing lg="130" md="80" />
      </Div>
    </>
  );
}
