import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Accordion from '../../components/Accordion';
import Button from '../../components/Button';
import Cta from '../../components/Cta';
import Div from '../../components/Div';
import IconBox from '../../components/IconBox';
import Layout from '../../components/Layout';
import PageHeading from '../../components/PageHeading';
import SectionHeading from '../../components/SectionHeading';
import TestimonialSlider from '../../components/Slider/TestimonialSlider';
import Spacing from '../../components/Spacing';

export default function ServiceDetails() {
  const router = useRouter();
  const serviceId = router.query.serviceId;
  return (
    <>
      <Head>
        <title>Service</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PageHeading
          title="Service Details"
          bgSrc="/images/service_hero_bg.jpeg"
          pageLinkText= "Social Media Management"
        />
        <Spacing lg="120" md="50" />
        <Div className="container">
          <Div className="row align-items-center">
            <Div className="col-xl-5 col-lg-6">
              <Div className="cs-radius_15 cs-shine_hover_1">
                <img
                  src="/images/service_img_1.jpeg"
                  alt="Service"
                  className="cs-radius_15 w-100"
                />
              </Div>
              <Spacing lg="0" md="50" />
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <h2 className="cs-font_50 cs-m0">
                What is Social Media Management?
              </h2>
              <Spacing lg="50" md="30" />
              <Div className="row">
                <p>Think of it like taking care of a garden but instead of plants, you're tending to different social media platforms like Facebook, Instagram, or Twitter. This involves creating posts, responding to comments and messages, scheduling when posts go live, and keeping an eye on how well your posts are doing.</p>
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg="150" md="80" />
        <Div className="container">
          <SectionHeading
            title="Working Process"
            subtitle="Social Media Management"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
          <Div className="row">
            <Div className="col-lg-4">
              <IconBox
                icon="/images/icons/service_icon_1.svg"
                title="Initial Meeting and Proposal"
                subtitle="As I meet with clients, I reserach into their business goals and target audience, crafting a bespoke social media strategy that includes platform recommendations, content types, posting schedules, and engagement strategies. I outline pricing, KPIs, and reporting frequency in the proposal.
                "
              />
              <Spacing lg="30" md="30" />
            </Div>
            <Div className="col-lg-4">
              <IconBox
                icon="/images/icons/service_icon_2.svg"
                title="Execution"
                subtitle="I craft engaging content calendars, schedule posts, actively engage with the audience, monitor analytics, and refine strategies based on performance data.
                 I deliver regular performance reports highlighting key metrics and collaborate with clients through periodic strategy reviews for ongoing optimization."
              />
              <Spacing lg="30" md="30" />
            </Div>
            <Div className="col-lg-4">
              <IconBox
                icon="/images/icons/service_icon_3.svg"
                title="Completion"
                subtitle="I deliver regular performance reports highlighting key metrics and collaborate with clients through periodic strategy reviews for ongoing optimization."
              />
              <Spacing lg="30" md="30" />
            </Div>
          </Div>
        </Div>
        <Spacing lg="120" md="50" />

        <Spacing lg="150" md="80" />
        <TestimonialSlider />
        <Spacing lg="145" md="80" />
        <Div className="container cs-shape_wrap_4">
          <Div className="cs-shape_4"></Div>
          <Div className="cs-shape_4"></Div>
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-5 col-lg-6">
                <SectionHeading
                  title="Some pre questions and answers"
                  subtitle="FAQ’s"
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-lg-6 offset-xl-1">
                <Accordion />
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Cta
            title="Let’s disscuse make <br />something <i>cool</i> together"
            btnText="Apply For Meeting"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
      </Layout>
    </>
  );
}
