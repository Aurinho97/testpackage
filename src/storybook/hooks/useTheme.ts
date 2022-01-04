import { useEffect, useMemo, useState } from "react";

interface Themes {
    [key: string]: string;
}

const getThemeFromElement = (
    element: HTMLElement,
    themes: Themes
): string => {
    let matchedTheme: string = "";

    for (const theme in themes) {
        if (element.classList.contains(themes[theme])) {
            matchedTheme = theme;
        }
    }

    return matchedTheme;
};

export const useTheme = (themes: Themes): string => {
    const [
        currentTheme,
        setCurrentTheme
    ] = useState<string>(getThemeFromElement(document.body, themes));

    const observer = useMemo<MutationObserver>(() => {
        return new MutationObserver((mutations) => {
            let newTheme: string = "";

            mutations.forEach((mutation) => {
                if (mutation.attributeName === "class") {
                    newTheme = getThemeFromElement(
                        mutation.target as HTMLElement,
                        themes
                    );
                }
            });

            setCurrentTheme(newTheme);
        });
    }, [setCurrentTheme]);

    useEffect(() => {
        observer.observe(document.body, { attributes: true });

        return () => observer.disconnect();
    }, [observer]);

    return currentTheme;
};
