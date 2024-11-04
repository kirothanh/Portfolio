import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

export default function Avatar() {
  const t = useTranslations();

  return (
    <figure className="w-full">
      <div
        className="relative shadow-black/5 shadow-none rounded-large"
        style={{ maxWidth: "fit-content" }}
      >
        <div className="relative overflow-hidden rounded-inherit rounded-large">
          <Image
            width={300}
            height={100}
            src="/img/avatar.jpg"
            alt="Avatar"
            className="relative z-10 object-cover hover:scale-125 transition-transform-opacity !duration-300 rounded-large p-2 lg:w-[400px]"
          />
        </div>
        <figcaption className="text-center text-sm">
          {t("skills.webDeveloper.title")}
        </figcaption>
      </div>
    </figure>
  );
}
