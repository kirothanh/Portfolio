import React from "react";
import { useTranslations } from "next-intl";

export default function SelfProject() {
  const t = useTranslations();
  return (
    <section>
      <h2 className="text-2xl text-default-700 text-center">
        {t("projects.title")}
      </h2>
      <div className="p-2">
        <h3 className="text-xl">{t("projects.project_1.name")}</h3>
        <p className="text-md">{t("projects.project_1.description")}</p>
        <div className="flex gap-4 py-2">
          <a
            className="relative inline-flex items-center tap-highlight-transparent outline-none text-medium text-primary no-underline hover:opacity-80"
            href={t("projects.project_1.demoLink")}
            target="_blank"
          >
            Demo
          </a>
          <a
            className="relative inline-flex items-center tap-highlight-transparent outline-none text-medium text-primary no-underline hover:opacity-80"
            href={t("projects.project_1.codeLink")}
            target="_blank"
          >
            Code
          </a>
        </div>
        <hr
          className="shrink-0 bg-divider border-none w-full h-divider"
          role="separator"
        />
      </div>
      <div className="p-2">
        <h3 className="text-xl">{t("projects.project_2.name")}</h3>
        <p className="text-md">{t("projects.project_2.description")}</p>
        <div className="flex gap-4 py-2">
          <a
            className="relative inline-flex items-center tap-highlight-transparent outline-none text-medium text-primary no-underline hover:opacity-80"
            href={t("projects.project_2.demoLink")}
            target="_blank"
          >
            Demo
          </a>
          <a
            className="relative inline-flex items-center tap-highlight-transparent outline-none text-medium text-primary no-underline hover:opacity-80"
            href={t("projects.project_2.codeLink")}
            target="_blank"
          >
            Code
          </a>
        </div>
        <hr
          className="shrink-0 bg-divider border-none w-full h-divider"
          role="separator"
        />
      </div>
      <div className="p-2">
        <h3 className="text-xl">{t("projects.project_3.name")}</h3>
        <p className="text-md">{t("projects.project_3.description")}</p>
        <div className="flex gap-4 py-2">
          <a
            className="relative inline-flex items-center tap-highlight-transparent outline-none text-medium text-primary no-underline hover:opacity-80"
            href={t("projects.project_3.demoLink")}
            target="_blank"
          >
            Demo
          </a>
          <a
            className="relative inline-flex items-center tap-highlight-transparent outline-none text-medium text-primary no-underline hover:opacity-80"
            href={t("projects.project_3.codeLink")}
            target="_blank"
          >
            Code
          </a>
        </div>
        <hr
          className="shrink-0 bg-divider border-none w-full h-divider"
          role="separator"
        />
      </div>
      <p className="mt-4">{t("projects.general_link")}</p>
    </section>
  );
}
