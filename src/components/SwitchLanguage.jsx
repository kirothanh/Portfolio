"use client";

import React from "react";
import { Button } from "@nextui-org/react";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import { setUserLocale } from "../../services/locale";

export default function SwitchLanguage() {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const handleChangeLanguage = () => {
    const newLocale = locale === "en" ? "vi" : "en";

    startTransition(() => {
      setUserLocale(newLocale);
    });
  };

  return (
    <Button radius="full" onClick={handleChangeLanguage} disabled={isPending}>
      {locale === "en" ? "VI" : "EN"}
    </Button>
  );
}
