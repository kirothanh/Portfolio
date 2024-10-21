import Avatar from "@/components/Avatar";
import Footer from "@/components/Footer";
import SelfProject from "@/components/SelfProject";
import SocialContent from "@/components/SocialContent";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "F8 portfolio",
};

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="container mx-auto max-w-7xl px-6 flex-grow">
      <div className="flex flex-col relative overflow-hidden h-auto text-foreground box-border bg-content1 outline-none shadow-medium rounded-large transition-transform-background motion-reduce:transition-none">
        {/* Header */}
        <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit text-inherit subpixel-antialiased rounded-t-large">
          <div className="w-full pt-2">
            <h1 className="text-2xl text-default-700 text-center">
              {t("header.title")}
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="relative w-full p-3 flex-auto place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased flex justify-between flex-row gap-x-8 pb-0.5">
          {/* Sidebar */}
          <aside className="hidden md:block md:w-[300px] lg:w-[400px] flex flex-col gap-4">
            {/* Avatar */}
            <Avatar />

            {/* Skills */}
            <section>
              <h2 className="text-2xl text-default-700">{t("skills.title")}</h2>
              <ul>
                <li>
                  <h3 className="font-bold inline">
                    {t("skills.webDeveloper.title")}
                  </h3>
                  : {t("skills.webDeveloper.description")}
                  <hr
                    className="shrink-0 bg-divider border-none w-full h-divider"
                    role="separator"
                  />
                </li>
                <li>
                  <h3 className="font-bold inline">
                    {t("skills.otherSkills.title")}
                  </h3>
                  : {t("skills.otherSkills.description")}
                </li>
              </ul>
            </section>

            {/* History */}
            <section>
              <h2 className="text-2xl text-default-700">
                {t("histories.title")}
              </h2>
              <ul>
                <li>
                  <h3 className="font-bold inline">
                    {t("histories.time_grow_1.year")}
                  </h3>
                  : {t("histories.time_grow_1.description")}
                  <hr
                    className="shrink-0 bg-divider border-none w-full h-divider"
                    role="separator"
                  />
                </li>
                <li>
                  <h3 className="font-bold inline">
                    {t("histories.time_grow_2.year")}
                  </h3>
                  : {t("histories.time_grow_2.description")}
                  <hr
                    className="shrink-0 bg-divider border-none w-full h-divider"
                    role="separator"
                  />
                </li>
                <li>
                  <h3 className="font-bold inline">
                    {t("histories.time_grow_3.year")}
                  </h3>
                  : {t("histories.time_grow_3.description")}
                  <hr
                    className="shrink-0 bg-divider border-none w-full h-divider"
                    role="separator"
                  />
                </li>
                <li>
                  <h3 className="font-bold inline">
                    {t("histories.time_grow_4.year")}
                  </h3>
                  : {t("histories.time_grow_4.description")}
                  <hr
                    className="shrink-0 bg-divider border-none w-full h-divider"
                    role="separator"
                  />
                </li>
              </ul>
            </section>
          </aside>

          {/* Main Content */}
          <div className="info-container flex flex-col w-full gap-4">
            {/* Social Content */}
            <SocialContent />

            {/* Projects */}
            <SelfProject />

            {/* Hobbies */}
            <section>
              <h2 className="text-2xl text-default-700 text-center">
                {t("hobbies.title")}
              </h2>
              <ul>
                <li className="p-2 border-b-2">{t("hobbies.hobbie_1")}</li>
                <li className="p-2 border-b-2">{t("hobbies.hobbie_2")}</li>
                <li className="p-2 border-b-2">{t("hobbies.hobbie_3")}</li>
              </ul>
            </section>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
