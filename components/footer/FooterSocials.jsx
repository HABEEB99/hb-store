import React from 'react';
import Link from 'next/link';
import SocialsItem from './SocialsItem';
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from 'react-icons/bs';

const FooterSocials = () => {
  return (
    <div className="flex flex-col justify-start">
      <h2 className="text-4xl mb-4"> Socials </h2>

      <div className="flex flex-col">
        <SocialsItem name="LinkedIn" path="/" Icon={BsLinkedin} />
        <SocialsItem name="Github" path="/" Icon={BsGithub} />
        <SocialsItem name="Twitter" path="/" Icon={BsTwitter} />
        <SocialsItem name="Instagram" path="/" Icon={BsInstagram} />
        <SocialsItem name="Facebook" path="/" Icon={BsFacebook} />
      </div>
    </div>
  );
};

export default FooterSocials;
