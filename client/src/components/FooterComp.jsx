import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import {BsInstagram, BsTwitter, BsGithub} from 'react-icons/bs'

const FooterComp = () => {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-1 py-1 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-400 text-white">
                Ali's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://moviepro-alpha.vercel.app/"
                  target="_blank"
                >
                  MoviePro project
                </Footer.Link>
                <Footer.Link
                  href="https://moviepro-alpha.vercel.app/"
                  target="_blank"
                >
                  MoviePro project
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://github.com/amaan35" target="_blank">
                  Github
                </Footer.Link>
                <Footer.Link
                  href="https://www.linkedin.com/in/syed-amaan-ali-24b023297/"
                  target="_blank"
                >
                  LinkedIn
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="">
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Ali's Blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://www.instagram.com/_syed_amaan_ali/"
              target="_blank"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="https://twitter.com/_syed_amaan_ali"
              target="_blank"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="https://github.com/amaan35"
              target="_blank"
              icon={BsGithub}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComp;
