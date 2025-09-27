import { Github, Instagram, Linkedin } from "lucide-react";

export const AppGetInTouch = () => {
  return (
    <div className="container mx-auto mt-6 p-4 flex flex-col items-start justify-center rounded-lg dark:bg-[#6E5DE73D] dark:border-purple-dark border border-solid">
      <h3 className="text-3xl font-bold text-light-950 dark:text-dark-100 z-[996]">
        Get in touch
      </h3>
      <div className="flex flex-row items-start w-full justify-start gap-8 mt-4">
        <div className="flex flex-col items-start justify-center gap-2">
          <h4 className="text-lg font-normal text-light-950 dark:text-dark-100">
            Mail
          </h4>
          <a
            className="text-sm font-normal text-light-950 dark:text-dark-100 cursor-pointer"
            href="mailto:zaion.afl@gmail.com"
          >
            zaion.afl@gmail.com
          </a>
        </div>
        <div className="flex flex-col items-start justify-center gap-2">
          <h4 className="text-lg font-normal text-light-950 dark:text-dark-100">
            Follow me
          </h4>
          <div className="flex flex-row items-center justify-start gap-4">
            <p className="text-sm font-normal text-light-950 dark:text-dark-100 cursor-pointer">
              <a
                href="https://www.linkedin.com/in/alopesdev"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin />
              </a>
            </p>
            <p className="text-sm font-normal text-light-950 dark:text-dark-100 cursor-pointer">
              <a
                href="https://github.com/alopes-dev"
                target="_blank"
                rel="noreferrer"
              >
                <Github />
              </a>
            </p>
            <p className="text-sm font-normal text-light-950 dark:text-dark-100 cursor-pointer">
              <a
                href="https://www.instagram.com/alopes.dev/"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
