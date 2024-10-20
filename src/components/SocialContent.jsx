import React from "react";
import { useTranslations } from "next-intl";

export default function SocialContent() {
  const t = useTranslations();

  return (
    <section>
      <h2 className="text-2xl text-default-700 text-center">
        {t("contact.title")}
      </h2>
      <ul className="info-container w-full">
        <li>
          <span className="capitalize">
            phone:
            <a
              className="relative inline-flex items-center tap-highlight-transparent outline-none text-medium text-primary no-underline hover:opacity-80"
              href={`tel:${t("contact.phone.value")}`}
              target="_blank"
            >
              {t("contact.phone.value")}
            </a>
          </span>
        </li>
        <li>
          <span className="capitalize">
            zalo:
            <a
              className="relative inline-flex items-center tap-highlight-transparent outline-none text-medium text-primary no-underline hover:opacity-80"
              href={t("contact.zalo.value")}
              target="_blank"
            >
              {t("contact.zalo.value")}
            </a>
          </span>
        </li>
        <li>
          <span className="capitalize">
            email:
            <a
              className="relative inline-flex items-center tap-highlight-transparent outline-none text-medium text-primary no-underline hover:opacity-80"
              href={`mailto:${t("contact.email.value")}`}
              target="_blank"
            >
              {t("contact.email.value")}
            </a>
          </span>
        </li>
        <li>
          <span className="capitalize">
            facebook:
            <a
              className="relative inline-flex items-center tap-highlight-transparent outline-none text-medium text-primary no-underline hover:opacity-80"
              href={t("contact.facebook.value")}
              target="_blank"
            >
              {t("contact.facebook.value")}
            </a>
          </span>
        </li>
        <li>
          <span className="capitalize">
            youtube:
            <a
              className="relative inline-flex items-center tap-highlight-transparent outline-none text-medium text-primary no-underline hover:opacity-80"
              href={t("contact.youtube.value")}
              target="_blank"
            >
              {t("contact.youtube.value")}
            </a>
          </span>
        </li>
      </ul>
      <hr
        className="shrink-0 bg-divider border-none w-full h-divider"
        role="separator"
      />
    </section>
  );
}
