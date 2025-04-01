import React from "react";
import Image from "next/image";
import Certification1 from "../../../public/certification/cert-1.png";

const AboutUs = () => {
  return (
    <main className="grid gap-5 md:gap-6 lg:gap-10 text-primary-black-90 text-sm md:text-base max-w-[1000px] mx-auto">
      <div>
        <h2 className="hidden lg:block font-bold text-xl mb-5 lg:mb-6">
          About Me
        </h2>
        <div className="space-y-3 md:space-y-5 lg:space-y-6">
          <p>
            I am a multidisciplinary designer and researcher focused on building
            meaningful digital products and experiences. i am also a certified
            Product manager.
          </p>
          <p>
            As a designer with a background and degree in architecture and
            masters in Design and Visual culture at IADE Creative University
            Lisbon, Portugal, I bring a unique perspective and skill set to this
            role, with a diverse set of skills that includes 3D modeling, user
            research, interaction design, UI design, and animation.{" "}
          </p>
          <p>
            My background in architecture has given me a keen eye for design and
            an appreciation for the importance of user experience. Through my
            experience, I am able to create visually stunning and immersive user
            interfaces that enhance the overall user experience.{" "}
          </p>
          <p>
            My expertise in user research allows me to understand user behavior
            and design interfaces that are intuitive and easy to use.
            Additionally, I can build dynamic, captivating user interfaces that
            are both aesthetically beautiful and simple to use.{" "}
          </p>
          <p>
            Last but not least, my background in animation adds an additional
            level of interaction and engagement, bringing concepts to life and
            creating a more engaging user experience. I have proven over my
            career that I can collaborate with cross-functional teams to create
            creative and efficient design solutions that serve organizational
            goals. I&#39;m dedicated to keeping up with the most recent design
            approaches and trends, and I&#39;m constantly seeking for ways to
            sharpen my abilities.
          </p>
        </div>
      </div>
      <div>
        <h3 className="font-bold mb-3 md:mb-5 lg:mb-6 text-lg md:text-xl">
          Certifications
        </h3>
        <div>
          <Image
            width={500}
            height={500}
            src={Certification1.src}
            alt="Certification"
            className="w-full h-auto"
          />
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
