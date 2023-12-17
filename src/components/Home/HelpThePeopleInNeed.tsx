import Image from "next/image";
import Link from "next/link";
import React from "react";
import PrimaryButton from "../UI/PrimaryButton";
import Title1 from "../UI/Title1";
import SubTitle from "../UI/SubTitle";
import { DoubleRightOutlined } from "@ant-design/icons";
//
const HelpThePeopleInNeed = () => {
  const heroData = {
    title: "HELP THE PEOPLE IN NEED",
    subTitle: "Welcome to Blood  Donors Organization",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. suspendisse the gravida. Risus commodo viverra maecenas",
    features: [
      "Good Service",
      "Help People",
      "Hygiene Tools",
      "24h Service",
      "Health Check",
      "Blood Bank",
    ],
    cta: "Explore Now",
    img: "https://croptheme.com/blut/blut-ltr/assets/images/organization-illustration.png",
  };

  const { title, subTitle, description, features, cta, img } = heroData;

  return (
    <div className="container mx-auto block lg:flex justify-between">
      <section className="w-full p-2 lg:max-w-[45%]">
        <Image
          src="https://croptheme.com/blut/blut-ltr/assets/images/organization-illustration.png"
          width={564}
          height={490}
          alt="help_people"
        />
      </section>
      <section className="w-full px-2 py-[4rem] lg:max-w-[55%] text-start flex flex-col  gap-4 justify-between">
        <Title1 data={{ title }} />
        <SubTitle data={{ subTitle, css:"max-w-[32rem]"}} />
        <p className="text-[#666666] text-[18px] max-w-[32rem]">{description}</p>
        <ul className="font-[500] grid grid-cols-2 gap-3 pr-4">
          {features?.map((feature: any, index: number) => {
            return (
              <li className="flex " key={index}>
                <DoubleRightOutlined className="!text-primary" />
                 &nbsp;
                <h3 className="text-[16px] font-semibold capitalize text-black">
                  {feature}
                </h3>
              </li>
            );
          })}
        </ul>

        <PrimaryButton data={{ text: cta, link: "/" }}></PrimaryButton>
      </section>
    </div>
  );
};

export default HelpThePeopleInNeed;
