import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Button,
} from "@/components/ui";
import { useState } from "react";

type Language = {
  code: string;
  name: string;
};

const AVAILABLE_LANGUAGES: Language[] = [
  { code: "en", name: "English" },
  { code: "pt", name: "Português" },
];

export const AppSelectLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const handleLanguageSelect = (languageCode: string) => {
    setCurrentLanguage(languageCode);
  };

  const currentLanguageName =
    AVAILABLE_LANGUAGES.find((lang) => lang.code === currentLanguage)?.name ||
    "Select Language";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2  min-w-[115px] justify-between px-3 py-2 dark:border-dark-700 border-light-400"
        >
          <span className="text-sm font-medium">{currentLanguageName}</span>
          <span className="text-muted-foreground">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 dark:text-purple text-purple"
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[120px] p-1 dark:bg-dark-800 outline-0 bg-light-300  border border-border rounded-md shadow-md"
        align="start"
      >
        {AVAILABLE_LANGUAGES.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageSelect(language.code)}
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-sm cursor-pointer outline-0 hover:bg-light-500 dark:hover:bg-dark-900 hover:text-purple ${
              currentLanguage === language.code
                ? "dark:text-purple text-purple"
                : ""
            }`}
          >
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
