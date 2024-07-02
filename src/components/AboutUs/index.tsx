import React from "react";

const AboutUs = () => {
  return (
    <main className="grid gap-5 md:gap-6 lg:gap-10 text-primary-black-90 text-sm md:text-base max-w-[1000px] mx-auto">
      <div>
        <h2 className="hidden lg:block font-bold text-xl mb-5 lg:mb-6">
          About Us
        </h2>
        <p>
          Guaba was born out of a passion for design and a desire to make a
          difference in the creative industry. Our journey began with a small
          team of enthusiastic designers who shared a common goal: creating
          stunning designs that tell a story. Over the years, we have grown into
          a full-fledged design studio, working with clients from various
          industries and helping them achieve their creative goals while also
          considering their business requirements, goals and parameters.
        </p>
      </div>
      <div>
        <h3 className="font-bold mb-3 md:mb-5 lg:mb-6">How we work</h3>
        <p>
          Our approach involves understanding user needs, researching the market
          and combine that with your business requirements, thereby creating
          designs that are not only aesthetically pleasing but also functional
          and purposeful. Collaboration is at the heart of our process. We work
          closely with our clients at every stage, We do this by clear and
          regular communication through slack and ensuring that the final
          product aligns perfectly with their vision.
        </p>
      </div>
      <div>
        <h3 className="font-bold mb-3 md:mb-5 lg:mb-6">Why Choose Guaba?</h3>
        <p>
          Choosing Guaba means partnering with a design studio dedicated to your
          success. Our expertise in UX/UI design, branding, spline interactive
          3Ds, and copywriting, combined with our focus on innovation, quality,
          and customer-centricity, ensures exceptional, forward-thinking designs
          while also considering your business requirements, goals and
          parameters. Let&apos;s create something amazing together.
        </p>
      </div>
    </main>
  );
};

export default AboutUs;
