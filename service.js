import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Nav from "./navbar";
import Footer from "./footer";

const Service = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [ActiveSection,SetActiveSection] = useState(0)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

const closeSidebar = ()=>{
    setIsSidebarOpen(false)
}

  const handleActiveSection = (id)=>{
    SetActiveSection(id)
  }

  return (
    <>
   <Nav />
    <div className="flex relative bg-white  text-bgblack">
     
      {/* Sidebar */}
<div className="p-4 flex absolute flex-col">
<button
          onClick={toggleSidebar}
          className="text-white w-max h-11 bg-action p-2 rounded-full mb-4"
        >
         <Icon icon="material-symbols:menu-rounded" width="24" height="24" />
        </button>

<div
        className={`${
          isSidebarOpen ? "w-64 mt-12" : "hidden"
        } absolute h-96 flex flex-col justify-between  bg-white text-gray-400 transition-all duration-300 overflow-hidden`}
      >
          <div onClick={()=>{handleActiveSection(0);closeSidebar()}} className={`flex ${ActiveSection === 0 ? 'text-action' : ''}  cursor-pointer  hover:bg-right hover:bg-opacity-50 hover:text-action justify-between items-center`}>
            <span   className="block p-2 rounded">
              IT Consultancy
            </span> 
            <Icon className="w-6 h-6" icon="grommet-icons:form-next" />
          </div>
          <div onClick={()=>{handleActiveSection(1);closeSidebar()}} className={`flex ${ActiveSection === 1 ? 'text-action' : ''}  cursor-pointer  hover:bg-right hover:bg-opacity-50 hover:text-action justify-between items-center`}>
            <span className="block  p-2 rounded">
            QA & Testing
            </span> 
            <Icon className="w-6 h-6" icon="grommet-icons:form-next" />
          </div>
          <div onClick={()=>{handleActiveSection(2);closeSidebar()}} className={`flex ${ActiveSection === 2 ? 'text-action' : ''}  cursor-pointer  hover:bg-right hover:bg-opacity-50 hover:text-action justify-between items-center`}>
            <span   className="block  p-2 rounded">
            UI/UX Design
            </span> 
            <Icon className="w-6 h-6" icon="grommet-icons:form-next" />
          </div>
          <div onClick={()=>{handleActiveSection(3);closeSidebar()}} className={`flex ${ActiveSection === 3 ? 'text-action' : ''}  cursor-pointer  hover:bg-right hover:bg-opacity-50 hover:text-action justify-between items-center`}>
            <span   className="block  p-2 rounded">
            Mobile App Development
            </span> 
            <Icon className="w-6 h-6" icon="grommet-icons:form-next" />
          </div>
          <div onClick={()=>{handleActiveSection(4);closeSidebar()}} className={`flex ${ActiveSection === 4 ? 'text-action' : ''}  cursor-pointer  hover:bg-right hover:bg-opacity-50 hover:text-action justify-between items-center`}>
            <span   className="block  p-2 rounded">
            IOS Development
            </span> 
            <Icon className="w-6 h-6" icon="grommet-icons:form-next" />
          </div>
          <div onClick={()=>{handleActiveSection(5);closeSidebar()}} className={`flex ${ActiveSection === 5 ? 'text-action' : ''}  cursor-pointer  hover:bg-right hover:bg-opacity-50 hover:text-action justify-between items-center`}>
            <span   className="block  p-2 rounded">
            SAAS Products
            </span> 
            <Icon className="w-6 h-6" icon="grommet-icons:form-next" />
          </div>
          <div onClick={()=>{handleActiveSection(6);closeSidebar()}} className={`flex ${ActiveSection === 6 ? 'text-action' : ''}  cursor-pointer  hover:bg-right hover:bg-opacity-50 hover:text-action justify-between items-center`}>
            <span   className="block p-2 rounded">
            Web Application Development
            </span> 
            <Icon className="w-6 h-6" icon="grommet-icons:form-next" />
          </div>
          <div onClick={()=>{handleActiveSection(7);closeSidebar()}} className={`flex ${ActiveSection === 7 ? 'text-action' : ''}  cursor-pointer  hover:bg-right hover:bg-opacity-50 hover:text-action justify-between items-center`}>
            <span   className="block p-2 rounded">
            Digital Marketing
            </span> 
            <Icon className="w-6 h-6" icon="grommet-icons:form-next" />
          </div>
          <div onClick={()=>{handleActiveSection(8);closeSidebar()}} className={`flex ${ActiveSection === 8 ? 'text-action' : ''}  cursor-pointer  hover:bg-right hover:bg-opacity-50 hover:text-action justify-between items-center`}>
            <span   className="block p-2 rounded">
            IT Security Services
            </span> 
            <Icon className="w-6 h-6" icon="grommet-icons:form-next" />
          </div>
      </div>
</div>

<div className="flex flex-col py-8 gap-4 w-full items-center justify-center">
<span className="lg:text-4xl xs:text-xl  font-semibold">Expert IT Services</span>
<p className="w-3/5 text-para xs:text-sm lg:text-base text-center">Elevate your business operations, maintenance, and customer experience with authentic software solutions of superior quality.</p>
<img className="w-5/6 lg:h-[30rem] lg:py-12 xs:py-4" src="video-conferencing.png" />

{ActiveSection=== 0 &&  <div>
        <div className="flex flex-col lg:py-6 gap-6 justify-center items-center">

        <h1 className="lg:text-3xl xs:text-lg font-semibold">IT CONSULTANCY</h1>
        <p className="text-sm text-para">Revamp Your Business with Smart IT Strategies from Sade Tech.</p>
        <ul class="list-disc flex flex-col w-5/6 gap-4">
  <li className="text-sm">Sade Tech is the go-to company for strategy consulting services that are tailored to your needs.</li>
  <li className="text-sm">Our team of experts will partner with you to create IT strategies and consulting services that will ensure a fast-paced business revamp.</li>
  <li className="text-sm">Our intelligent execution strategy will help you achieve your goals quickly and efficiently.</li>
</ul>

      </div>
      <div className="w-full gap-4 py-6 flex flex-col items-center justify-center">
        <span className="w-full text-lg font-semibold flex justify-center">Approach to Consulting</span>
        <div className="w-5/6 flex text-sm flex-col gap-4">
        <p>Our consulting approach is unique and sets businesses apart from their competition. We aim to modernize legacy systems and create breakthroughs, which enables enterprises to integrate value-driven, customer-focused, and futuristic solutions that optimize costs and increase customer satisfaction.</p>
        <p>At Sade Tech, we have years of industry experience and can help propel your business by discovering scaling opportunities. We specialize in everything from IT infrastructure and software to people, processes, and customer service. By understanding gaps and areas for improvement, we empower you to tap into untapped business potential.</p>
        <p>Our consulting services cover everything from planning strategies to automating implementation. Trust Sade Tech to be your go-to IT consulting partner, and we will guide you every step of the way.</p>
           
           
            </div>
        </div>
        </div>}

        {ActiveSection=== 1 &&  <div>
        <div className="flex flex-col py-6 gap-6 justify-center items-center">

        <h1 className="lg:text-3xl xs:text-lg font-semibold">QA & Testing</h1>
          <p className="text-sm text-para">Revamp Your Business with Smart IT Strategies from Sade Tech.</p>
        <ul class="list-disc flex flex-col w-5/6 gap-4">
  <li className="text-sm">Our Sade techno services are designed to ensure that software and business projects attain superior standards of performance, reliability, and user satisfaction. </li>
  <li className="text-sm">We provide businesses with expert guidance and support to enable them to enhance the quality of their projects. </li>
  <li className="text-sm">	By availing our top-notch QA services, businesses can enhance the quality of their products, augment customer satisfaction, and attain a competitive edge in the ever-changing market scenario.</li>
</ul>

      </div>
      <div className="w-full gap-4 py-6 flex flex-col items-center justify-center">
        <span className="w-full text-lg font-semibold flex justify-center">Tailored QA Services for Business Excellence</span>
        <div className="w-5/6 flex text-sm flex-col gap-4">
        <p>Our team collaborates extensively with stakeholders in order to comprehensively comprehend the requisites, scope, and benchmarks for success of the project. </p>
        <p>Our team then proceeds to appraise the current QA procedures and determine areas for enhancement or rectify any deficiencies, resulting in a custom-designed QA strategy.</p>
        <p>Our consulting services cover everything from planning strategies to automating implementation. Trust Sade Tech to be your go-to IT consulting partner, and we will guide you every step of the way.</p>
           
           
            </div>
        </div>
        </div>}

        {ActiveSection=== 2 &&  <div>
        <div className="flex flex-col py-6 gap-6 justify-center items-center">

        <h1 className="lg:text-3xl xs:text-lg font-semibold">UI & UX Design Services</h1>
          <p className="text-sm text-para">Revamp Your Business with Smart IT Strategies from Sade Tech.</p>
        <ul class="list-disc flex flex-col w-5/6 gap-4">
  <li className="text-sm">Elevate your software products with cutting-edge UI/UX design services that enhance user engagement and boost revenue.  </li>
  <li className="text-sm">Our skilled team at a leading UI/UX Design Company delivers stunning designs that drive growth and maximize customer satisfaction.
  Maximize your potential with our specialized UI UX design services.  </li>
  <li className="text-sm">Our team is dedicated to delivering innovative and scalable interfaces that are both agile and value-driven. Our enterprise-grade code quality is supported by Microsoft-endorsed design and development lifecycles, ensuring a state-of-the-art feel and enhanced user experience. </li>
  <li className="text-sm">Trust in our expertise to elevate your project to the next level. </li>
</ul>

      </div>
      <div className="w-full gap-4 py-6 flex flex-col items-center justify-center">
        <span className="w-full text-lg font-semibold flex justify-center">Essence of our UI/ UX Design</span>
        <div className="w-5/6 flex text-sm flex-col gap-4">
        <p>As a UI/UX development company, Sade Techno Services endeavors to establish a robust business identity for its clients through its exceptional design services.  </p>
        <p>The company's objective is to analyze the client's business persona and align their business goals by delivering robust UI/UX design and development services.</p>
        <p>By utilizing our bespoke product development process and implementing superior code quality, we are able to align design elements with the unique business needs of our clients, while minimizing potential risks.</p>
        <p>Our top-tier designs also ensure optimal user activation and business conversions.</p>
           
            </div>
        </div>
        </div>}

        {ActiveSection=== 3 &&  <div>
        <div className="flex flex-col py-6 gap-6 justify-center items-center">

        <h1 className="lg:text-3xl xs:text-lg font-semibold">Mobile App Development</h1>
          <p className="text-sm text-para">Revamp Your Business with Smart IT Strategies from Sade Tech.</p>
        <ul class="list-disc flex flex-col w-5/6 gap-4">
  <li className="text-sm">Elevate your software products with cutting-edge UI/UX design services that enhance user engagement and boost revenue.  </li>
  <li className="text-sm">Our expertise lies in creating bespoke mobile applications that deliver a seamless user experience coupled with powerful functionality. </li>
  <li className="text-sm"> Irrespective of the platform, be it Android or iPhone, we focus on bringing your ideas to life and helping your application stand out amidst the stiff competition in the app marketplace.  </li>
</ul>

      </div>
      <div className="w-full gap-4 py-6 flex flex-col items-center justify-center">
        <span className="w-full text-lg font-semibold flex justify-center">Bespoke Mobile App Development for Business Growth</span>
        <div className="w-5/6 flex text-sm flex-col gap-4">
        <p>At Sade Techno, we believe in blending creativity with technology to craft applications that resonate with your audience.   </p>
        <p>Our team stays ahead of industry trends, incorporating the latest innovations to ensure your app is future-ready. </p>
        <p>From intuitive interfaces to robust backend systems, we prioritize every detail to ensure optimal performance. Whether it's a startup idea or an enterprise-level solution, we customize each app to align with your business goals.</p>
        <p>Partner with us to transform your vision into a high-quality app that drives engagement and delivers measurable success.</p>
           
            </div>
        </div>
        </div>}

        {ActiveSection=== 15 &&  <div>
        <div className="flex flex-col py-6 gap-6 justify-center items-center">

        <h1 className="lg:text-3xl xs:text-lg font-semibold">Android App Development</h1>
          <p className="text-sm text-para">Revamp Your Business with Smart IT Strategies from Sade Tech.</p>
        <ul class="list-disc flex flex-col w-3/5 gap-4">
  <li className="text-sm">To create mobile experiences that are personalized, market-tested, and highly valuable, it is essential to approach development in a smart and intelligent way.   </li>
  <li className="text-sm">An Android mobile app development company can assist in creating scalable, robust, and clean-coded applications that align with your budget. </li>
  <li className="text-sm">Sade Tech stands as a prominent player in the world of Android application development, providing tailored and valuable mobile solutions to businesses of all sizes.  </li>
  <li className="text-sm">With a focus on modern technology and a team of skilled professionals, Sade Tech offers custom mobile development services that cater to your unique needs.  </li>
  <li className="text-sm">Choose Sade Tech for top-notch Android development solutions that empower your business to achieve success.  </li>
</ul>

      </div>
      <div className="w-full gap-4 py-6 flex flex-col items-center justify-center">
        <span className="w-full text-lg font-semibold flex justify-center">Custom Android App Development</span>
        <div className="w-3/5 flex text-sm flex-col gap-4">
        <p>Our team of expert developers is committed to delivering high-performance apps that are secure, reliable, and user-friendly.   </p>
        <p>We use industry-best practices and cutting-edge tools to ensure your app performs seamlessly across different Android devices.  </p>
        <p>Whether you're looking to build a simple utility app or a complex, feature-rich solution, we have the experience and expertise to make it happen. </p>
        <p>Our customer-centric approach ensures that your specific requirements are met while also enhancing user engagement.</p>
        <p>With our agile development process, we adapt quickly to changing business needs, ensuring timely delivery without compromising quality. </p>
        <p>Partner with Sade Tech to unlock the full potential of Android development for your business.</p>
            </div>
        </div>
        </div>}

        {ActiveSection=== 4 &&  <div>
        <div className="flex flex-col py-6 gap-6 justify-center items-center">

        <h1 className="lg:text-3xl xs:text-lg font-semibold">IOS Development</h1>
          <p className="text-sm text-para">Revamp Your Business with Smart IT Strategies from Sade Tech.</p>
        <ul class="list-disc flex flex-col w-5/6 gap-4">
  <li className="text-sm">Our company specializing in iOS application development excels in crafting interactive and feature-rich iOS applications, allowing you to establish a powerful brand identity.    </li>
  <li className="text-sm">Sade Tech, a proficient iOS mobile development company, delivers iOS applications that are secure, resilient, packed with features, and easy to use.  </li>
  <li className="text-sm">Our team comprises adept and knowledgeable iOS app developers with profound expertise in iOS app design, prototyping, development, quality assurance, and deployment.  </li>
  <li className="text-sm">Working collaboratively with the iOS development lifecycle, our designers strive to achieve precise end-products.   </li>
</ul>

      </div>
      <div className="w-full gap-4 py-6 flex flex-col items-center justify-center">
        <span className="w-full text-lg font-semibold flex justify-center">Professional iOS App Development</span>
        <div className="w-5/6 flex text-sm flex-col gap-4">
        <p>We focus on creating intuitive, user-friendly designs that enhance the user experience while integrating seamless functionality.  </p>
        <p>Our apps are optimized for performance, ensuring they run smoothly on all iOS devices.  </p>
        <p>From initial concept to post-launch support, Sade Tech offers a comprehensive service that covers all stages of development.  </p>
        <p>With a commitment to excellence, we ensure your app is not only visually appealing but also secure and scalable for future growth. </p>
        <p>Trust Sade Tech to transform your iOS app ideas into powerful tools that elevate your business.</p>
            </div>
        </div>
        </div>}

        {ActiveSection=== 5 &&  <div>
        <div className="flex flex-col py-6 gap-6 justify-center items-center">

        <h1 className="lg:text-3xl xs:text-lg font-semibold">SAAS Product Development</h1>
          <p className="text-sm text-para">Revamp Your Business with Smart IT Strategies from Sade Tech.</p>
        <ul class="list-disc flex flex-col w-5/6 gap-4">
  <li className="text-sm">Using an end-to-end approach to developing products, we can build an end-to-end SaaS solution that includes web apps, APIs, cloud storage capabilities, and data analytics.  </li>
</ul>

      </div>
      <div className="w-full gap-4 py-6 flex flex-col items-center justify-center">
        <span className="w-full text-lg font-semibold flex justify-center">Professional iOS App Development</span>
        <div className="w-5/6 flex text-sm flex-col gap-4">
        <p>	In order to meet the complex business requirements, a quick and efficient transition to a SaaS business model is crucial.   </p>
        <p>With Sade tech's comprehensive strategy for SaaS product development, businesses can benefit from a reliable product that is designed to scale. It is noteworthy that 90% of SaaS products developed by Sade tech have successfully achieved their revenue benchmark. </p>

            </div>
        </div>
        </div>}

        {ActiveSection=== 6 &&  <div>
        <div className="flex flex-col py-6 gap-6 justify-center items-center">

        <h1 className="lg:text-3xl xs:text-lg font-semibold">Web Application Development</h1>
          <p className="text-sm text-para">Revamp Your Business with Smart IT Strategies from Sade Tech.</p>
        <ul class="list-disc flex flex-col w-5/6 gap-4">
  <li className="text-sm">At Sade techno solutions, we help companies evolve into dynamic, forward-thinking organizations that thrive in an ever-changing landscape.  </li>
  <li className="text-sm">We work with customers who look to the future with ambition and innovative power.  </li>
  <li className="text-sm">	Through the development of captivating storylines and purposeful strategies, we take your brand and position it in a distinctive way within the vast digital world, guaranteeing optimal visibility and impact on your desired audience. </li>
  <li className="text-sm">Our goal is to equip organizations with the skills they need to achieve sustainable advantage in their industry. 
  </li>
  <li className="text-sm">		At Sade tech, we're dedicated to amplifying your online presence and achieving your business goals through innovative digital marketing strategies. 
  </li>
  <li className="text-sm">	Partner with us to experience a transformational journey towards unparalleled brand visibility, engagement, and growth. </li>
</ul>

      </div>
      <div className="w-full gap-4 py-6 flex flex-col items-center justify-center">
        <span className="w-full text-lg font-semibold flex justify-center">Supporting business transformation through web development </span>
        <div className="w-5/6 flex text-sm flex-col gap-4">
        <p>Embracing a comprehensive approach, we provide complete web application development services encompassing design, prototyping, construction, and seamless migration to modern web architectures. </p>
        <p>Our adept team of web design and development specialists are passionate about crafting tailored web applications.  </p>
        <p>Our focus remains on engineering secure, scalable, and responsive applications that align with your unique needs. </p>
            </div>
        </div>
        </div>}

        {ActiveSection=== 7 &&  <div>
        <div className="flex flex-col py-6 gap-6 justify-center items-center">

        <h1 className="lg:text-3xl xs:text-lg font-semibold">Digital Marketing</h1>
          <p className="text-sm text-para">Revamp Your Business with Smart IT Strategies from Sade Tech.</p>
        <ul class="list-disc flex flex-col w-5/6 gap-4">
  <li className="text-sm">	Transform your brand's online presence with Sade techno's innovative digital marketing services. With our customized solutions, your digital footprint will soar above the competition, taking your business to new heights.  </li>
  <li className="text-sm"> Experience the power of cutting-edge technology to supercharge your brand and accelerate your success. </li>
  <li className="text-sm">	Through the development of captivating storylines and purposeful strategies, we take your brand and position it in a distinctive way within the vast digital world, guaranteeing optimal visibility and impact on your desired audience. </li>
  <li className="text-sm">	Our team is adept at crafting compelling stories, articles, videos, and infographics that resonate with your audience and position your brand as an authority in your industry. </li>
  <li className="text-sm">		At Sade tech, we're dedicated to amplifying your online presence and achieving your business goals through innovative digital marketing strategies. 
  </li>
  <li className="text-sm">	Partner with us to experience a transformational journey towards unparalleled brand visibility, engagement, and growth. </li>
</ul>

      </div>
      <div className="w-full gap-4 py-6 flex flex-col items-center justify-center">
        <span className="w-full text-lg font-semibold flex justify-center">We’ll help you</span>
        <div className="w-5/6 flex text-sm flex-col gap-4">
        <p>	Mitigate the danger posed by malicious cyber activities such as phishing, ransomware attacks, data breaches, and other cyber threats. </p>
        <p>Identify any weaknesses or susceptibilities that may exist in your current systems and processes. </p>
        <p>Develop a comprehensive plan to establish a secure and stable atmosphere. </p>
        <p>Equip your staff with the necessary skills to detect and evade potential online security risks. </p>

            </div>
        </div>
        </div>}

        {ActiveSection=== 8 &&  <div>
        <div className="flex flex-col py-6 gap-6 justify-center items-center">

        <h1 className="lg:text-3xl xs:text-lg font-semibold">IT Security Services</h1>
          <p className="text-sm text-para">Revamp Your Business with Smart IT Strategies from Sade Tech.</p>
        <ul class="list-disc flex flex-col w-5/6 gap-4">
  <li className="text-sm">Our comprehensive IT security and disaster recovery services are tailor-made to safeguard your crucial IT environment against potential threats.   </li>
  <li className="text-sm">Our team of experts can conduct vulnerability assessments and provide ongoing security support to ensure your organization is protected at all times.    </li>
  <li className="text-sm">With our top-notch solutions, you can enjoy peace of mind and focus on your core business objectives. </li>
</ul>

      </div>
      <div className="w-full gap-4 py-6 flex flex-col items-center justify-center">
        <span className="w-full text-lg font-semibold flex justify-center">We’ll help you</span>
        <div className="w-5/6 flex text-sm flex-col gap-4">
        <p>	Mitigate the danger posed by malicious cyber activities such as phishing, ransomware attacks, data breaches, and other cyber threats. </p>
        <p>Identify any weaknesses or susceptibilities that may exist in your current systems and processes. </p>
        <p>Develop a comprehensive plan to establish a secure and stable atmosphere. </p>
        <p>Equip your staff with the necessary skills to detect and evade potential online security risks. </p>

            </div>
        </div>
        </div>}
            <div className="flex lg:py-12 w-full justify-center">
            <div className="w-5/6 h-80 hidden lg:flex">
                <div className="w-1/2 text-white  justify-center  flex flex-col gap-5 p-10 bg-action">
                <p className="text-3xl font-semibold">Explore more!</p>
                <span className=" tet-sm">Work with dedication and diligence, adhering to standards and focusing on efficient and valuable outcomes.</span>
                <button className="w-max text-action font-semibold bg-white p-2 rounded-md">Request a Demo</button>
                </div>
                <div className="w-1/2 bg-white">
                 <img className="w-full h-full" src="service.png" />
                </div>
            </div>
            </div>
            <div className="w-full">
            <Footer /> 
            </div>
           
</div>
      {/* Main Content Area */}

    </div>
    </>
  );
};

export default Service;
