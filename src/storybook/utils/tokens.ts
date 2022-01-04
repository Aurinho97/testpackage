
import {
    Token as SBToken,
    TokenPresenter as SBTokenPresenter,
    TokenSourceType as SBTokenSourceType
} from "storybook-design-token/dist/types/token.types";
import { Category as SBTokensCategory } from "storybook-design-token/dist/types/category.types";

export type TokensCategory =
    | "color"
    | "font-size"
    | "font-weight"
    | "line-height"
    | "space";

export interface Tokens {
    [key: string]: string;
}

const TOKEN_SOURCE_TYPE = SBTokenSourceType.CSS;

export const getStoryBookTokenPresenter = (
    category: TokensCategory
): SBTokenPresenter => {
    switch (category) {
        case "color":
            return SBTokenPresenter.COLOR;
        case "font-size":
            return SBTokenPresenter.FONT_SIZE;
        case "font-weight":
            return SBTokenPresenter.FONT_WEIGHT;
        case "line-height":
            return SBTokenPresenter.LINE_HEIGHT;
        case "space":
            return SBTokenPresenter.SPACING;
        default:
            return SBTokenPresenter.COLOR;
    }
};

export const mapTokensToStoryBookTokens = (
    tokens: Tokens,
    presenter: SBTokenPresenter,
    sourceType: SBTokenSourceType
): SBToken[] => {
    return Object.entries(tokens)
        .map(([name, value]) => ({
            name,
            rawValue: value,
            value,
            presenter,
            sourceType
        }));
};

export const filterTokensByTheme = (
    tokens: Tokens,
    theme: string
): Tokens => {
    const regex = new RegExp("^" + theme + "--", "gi");

    return Object.fromEntries(
        Object.entries(tokens).filter(([name]) => name.match(regex))
    );
};

export const filterTokensByCategory = (
    tokens: Tokens,
    category: TokensCategory
): Tokens => {
    const regex = new RegExp(category, "gi");

    return Object.fromEntries(
        Object.entries(tokens).filter(([name]) => name.match(regex))
    );
};

export const removeTokensThemePrefix = (
    tokens: Tokens,
    theme: string
): Tokens => {
    return Object.fromEntries(
        Object.entries(tokens).map(([name, value]) => [name.replace(theme, ""), value])
    );
};

export const parseTokens = (
    tokens: Tokens,
    category: TokensCategory,
    theme: string
): Tokens => {
    const filteredByCategory = filterTokensByCategory(tokens, category);
    const filteredByTheme = filterTokensByTheme(filteredByCategory, theme);

    return removeTokensThemePrefix(filteredByTheme, theme);
};

export const getStorybookCategory = (
    tokens: Tokens,
    category: TokensCategory,
    theme: string
): SBTokensCategory => {
    const parsedTokens: Tokens = parseTokens(tokens, category, theme);
    const tokenPresenter: SBTokenPresenter = getStoryBookTokenPresenter(category);
    const sbTokens: SBToken[] = mapTokensToStoryBookTokens(
        parsedTokens,
        tokenPresenter,
        TOKEN_SOURCE_TYPE
    );

    return { name: category, tokens: sbTokens };
};
