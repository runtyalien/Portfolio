import clsx from "clsx";
import React from "react";

const ItemLayout = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "custom-bg p-8 rounded-xl flex items-center justify-center space-y-8",
        className
      )}
    >
      {children}
    </div>
  );
};

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-8 w-full">
        <ItemLayout className={"col-span-8 row-span-2 flex-col items-start"}>
          <h2 className="text-2xl text-left w-full capitalize">
            Builder of Enchanted Forest
          </h2>
          <p className="font-light">Fill after asking chatgpt</p>
        </ItemLayout>

        <ItemLayout className={"col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-5xl">
            20+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-5xl">
            3+ <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`https://github-readme-stats.vercel.app/api/top-langs?username=runtyalien&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`https://github-readme-streak-stats.herokuapp.com?user=runtyalien&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout
          className={"col-span-full"}
        >
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,aws,bootstrap,cpp,cloudflare,css,docker,express,figma,git,github,graphql,html,js,jquery,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,prisma,react,redis,redux,replit,sass,sequelize,tailwind,threejs,ts,vercel,vite,vscode,yarn`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>
        {/* https://skillicons.dev/icons?i=js,html,css,wasm */}
      </div>
    </section>
  );
};

export default AboutDetails;
