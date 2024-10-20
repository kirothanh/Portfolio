import { useTranslations } from "next-intl";
import React from "react";

export default function Footer() {
  const t = useTranslations();

  return (
    <div className="p-3 h-auto flex w-full items-center overflow-hidden color-inherit subpixel-antialiased rounded-b-large pt-0.5 text-center justify-center text-orange-300">
      {t("footer.text")}
    </div>
  );
}
