import React from 'react';
import Link from "next/link";
import { LinkedInLogoIcon, InstagramLogoIcon, TwitterLogoIcon  } from '@radix-ui/react-icons'
import { Button } from "@/presentation/ui/atoms/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const linksTerms = [
    { label: 'Terminos y condiciones', href: '/' },
    { label: 'Privacidad', href: '/' },
  ];
  const socialIcons = [
    {
      icon: <LinkedInLogoIcon width="25" height="25" />
    },
    {
      icon: <InstagramLogoIcon width="25" height="25" />
    },
    {
      icon: <TwitterLogoIcon width="25" height="25" />
    }
  ];
  return (
    <footer className='w-full h-auto flex justify-center items-center py-12 flex-wrap'>
      <div className="flex w-4/5 border-b border-neutral-600 h-[500px]">
        <div className="w-full grid grid-cols-3 gap-4 grid-rows-1">
          <div className="grid grid-cols-1 grid-rows-3 gap-4 flex justify-around">
            {[...new Array(3)].map((_, key) => (
              <div className="flex h-20 underline">text</div>
            ))}
            <div className="flex h-20">
              <Button variant='outline'>
                Empezar
              </Button>
            </div>
            <div className="flex items-center py-4 h-25">
              {socialIcons.map((el, idx) => {
                return (
                  <div key={idx} className="flex w-auto px-2">
                    {el.icon}
                  </div>
                )
              })}
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-1 grid-rows-3 gap-4 flex justify-around">
              {[...new Array(8)].map((_, key) => (
                <div className="flex h-10 underline">text</div>
              ))}
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-1 grid-rows-3 gap-4 flex justify-around">
              {[...new Array(8)].map((_, key) => (
                <div className="flex h-10 underline">
                  text
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-4/5 mt-4 h-20 items-center">
        <div className="grid grid-cols-3 grid-rows-1 gap-4 w-full">
          <div className="grid col-span-1">
            <div className="px-0 text-foreground">
              &copy; {currentYear} Todos los derechos reservados
            </div>
          </div>
          <div className="grid col-span-2">
            <div className="flex flex-nowrap w-full gap-4">
              {linksTerms.map((el, idx) => {
                return (
                  <React.Fragment key={idx}>
                    <div className="flex w-auto">
                      <Link
                        href="/"
                        className="flex text-foreground text-sm gap-1 underline font-bold items-center"
                      >
                        <span>{el.label}</span>
                      </Link>
                    </div>
                    {idx >= 0 && idx < linksTerms.length -1 && (
                      <div className="flex w-auto text-neutral-200 justify-center">
                        |
                      </div>
                    )}
                  </React.Fragment>
                )
              })}
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer }
