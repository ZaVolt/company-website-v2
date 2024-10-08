"use client"

import React from "react";
import Image from "next/image";

const teamContent = [
    {
        delayAnimation: "0",
        img: "aj",
        title: "Abdullah Jasmin",
        designation: "Co-Founder / Managing Director",
    },
    {
        delayAnimation: "100",
        img: "ns",
        title: "Nethsara Sandeepa",
        designation: "Co-Founder / Technology Director",
    },
    {
        delayAnimation: "200",
        img: "sr",
        title: "Sandul Renuja",
        designation: "Co-Founder / Operations Director",
    },
    {
        delayAnimation: "300",
        img: "sm",
        title: "Suraif Muhammad",
        designation: "Co-Founder / Business Development Director",
    },
    // {
    //   delayAnimation: "100",
    //   img: "dh",
    //   title: "Dilanga Harshani",
    //   designation: "Project Manager",
    // },
    // {
    //   delayAnimation: "200",
    //   img: "wp",
    //   title: "Waruna Parakckrama",
    //   designation: "Digital Media Artist / UI/UX Designer",
    // },
    // {
    //   delayAnimation: "300",
    //   img: "nm",
    //   title: "Neethamadhu Madurasinghe",
    //   designation: "Software Engineer",
    // },
    // {
    //     delayAnimation: "400",
    //     img: "new-member",
    //     title: "",
    //     designation: "",
    // },
];

const Team = () => {
    return (
        <>
            {teamContent.map((val, i) => (
                <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay={val.delayAnimation}
                    key={i}
                >
                    {/* <!--Team Member--> */}
                    <div className="ptf-team-member ptf-team-member--has-effect">
                        <div className="ptf-team-member__avatar">
                            <div className="shadow-effect"></div>
                            {
                                val.img === 'new-member' ?
                                    <a href="https://careers.zavolt.com" target="_blank" rel="noopener noreferrer">
                                        <Image
                                            width={1200}
                                            height={1200}
                                            style={{width: '100%', height: '100%'}}
                                            src={`/images/root/team/${val.img}.png`}
                                            alt={val.title}
                                            loading="lazy"
                                        />
                                    </a> : <Image
                                        width={1200}
                                        height={1200}
                                        style={{width: '100%', height: '100%'}}
                                        src={`/images/root/team/${val.img}.png`}
                                        alt={val.title}
                                        loading="lazy"
                                    />
                            }
                        </div>
                        <div className="ptf-team-member__content">
                            <h6 className="ptf-team-member__name">
                                {val.title}
                            </h6>
                            <p className="ptf-team-member__function">{val.designation}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Team;
