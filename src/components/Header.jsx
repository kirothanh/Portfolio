import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import SwitchLanguage from "./SwitchLanguage";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Header() {
  const t = useTranslations();

  return (
    <nav
      className="flex z-40 w-full h-auto items-center justify-center data-[menu-open=true]:border-none sticky top-0 inset-x-0 backdrop-blur-lg data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150 bg-background/70"
      style={{ "--navbar-height": "4rem" }}
    >
      <header className="z-40 flex px-6 gap-4 w-full flex-row relative flex-nowrap items-center justify-between h-[var(--navbar-height)] max-w-[1280px]">
        <ul
          className="flex gap-4 h-full flex-row flex-nowrap data-[justify=start]:justify-start data-[justify=start]:flex-grow data-[justify=start]:basis-0 data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=end]:flex-grow data-[justify=end]:basis-0 basis-1/5 sm:flex sm:basis-full items-center"
          data-justify="start"
        >
          <li className="flex basis-0 flex-row flex-grow flex-nowrap justify-start bg-transparent items-center no-underline text-medium whitespace-nowrap box-border gap-3 max-w-fit">
            <div className="flex items-center gap-4 flex-shrink-0">
              <Link
                className="hidden sm:flex justify-start items-center gap-1"
                href="/"
              >
                <img
                  alt="logo"
                  loading="lazy"
                  width="36"
                  height="36"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  srcSet="/_next/image?url=%2Ffavicon.ico&amp;w=48&amp;q=75 1x, /_next/image?url=%2Ffavicon.ico&amp;w=96&amp;q=75 2x"
                  src="/_next/image?url=%2Ffavicon.ico&amp;w=96&amp;q=75"
                />
                <p className="font-bold text-inherit">{t("main_name")}</p>
              </Link>
              <Link
                className="font-bold hover:underline hover:text-green-400"
                href="/"
              >
                Home
              </Link>
              <Link
                className="font-bold text-green-500 hover:underline hover:text-green-400"
                href="/profile"
              >
                Profile
              </Link>
            </div>
          </li>
        </ul>

        <ul
          className="gap-5 h-full flex flex-row flex-nowrap items-center basis-5 sm:basis-full justify-end items-center"
          data-justify="end"
        >
          <li className="text-medium whitespace-nowrap box-border list-none flex gap-3 items-center">
            {/* Facebook Icon */}
            <span className="[&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-[#1877f2]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </span>

            {/* Youtube Icon */}
            <span className="[&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-[#ff0000]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
              </svg>
            </span>

            <ThemeSwitcher />
            <SwitchLanguage />
          </li>
        </ul>
      </header>
    </nav>
  );
}
