import React from "react";
import TeamCard from "../TeamCard/App";
import ProfileAgrawal from "../../assets/profile-image1.jpg";
import ProfileRichard from "../../assets/profile-image2.jpg";
import ProfileWalsh from "../../assets/profile-image3.jpg";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter-icon.png";
import InstagramIcon from "../../assets/instagram-icon.png";
import HandSolid from "../../assets/hand-solid-icon.png";
import SectionHeader from "../SectionHeader/App";

function TeamSection() {
  const teamData = [
    {
      image: ProfileAgrawal,
      name: "Dr. Shailesh Agrawal",
      title: "M.S (Ophthalmology) Gold Medalist",
      social: [FacebookIcon, TwitterIcon],
    },
    {
      image: ProfileRichard,
      name: "Richard Walsh",
      title: "Lead Manager",
      social: [FacebookIcon, TwitterIcon, InstagramIcon],
    },
    {
      image: ProfileWalsh,
      name: "Richard Walsh",
      title: "Lead Manager",
      social: [TwitterIcon, InstagramIcon],
    },
  ];
  return (
    <div className="container pt-20 ">
      <SectionHeader
        variant="vertical"
        icon={HandSolid}
        hint="our team"
        title="Our team of expert marketers"
      />
      <div className="mt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {teamData.map((team) => {
          return (
            <TeamCard
              img={team.image}
              name={team.name}
              title={team.title}
              children={
                <>
                  {team.social.map((icons) => {
                    return <img src={icons} alt="icons" />;
                  })}
                </>
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default TeamSection;
