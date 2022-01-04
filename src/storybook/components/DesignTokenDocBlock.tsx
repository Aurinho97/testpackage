import React, { useEffect, useMemo, useState } from "react";
import { styled } from "@storybook/theming";
import { TokenTable } from "storybook-design-token/dist/components/TokenTable";
import { Category as SBTokensCategory } from "storybook-design-token/dist/types/category.types";

import InteractioComponentLibrary from "../../../dist";

import { useTheme } from "../hooks/useTheme";
import { getStorybookCategory, TokensCategory } from "../utils/tokens";

import tokens from "../tokens.module.scss";
import themes from "../themes.module.scss";

interface DesignTokenDocBlockProps {
    category: TokensCategory;
}

const DesignTokenDocBlock: React.FC<DesignTokenDocBlockProps> = (props) => {
    console.log(InteractioComponentLibrary)
    const { category } = props;
    const [
        storyBookTokensCategories,
        setStoryBookTokensCategories
    ] = useState<SBTokensCategory[]>([]);
    const currentTheme = useTheme(themes);

    useEffect(() => {
        const sbTokensCategories: SBTokensCategory[] = [
            getStorybookCategory(tokens, category, currentTheme)
        ];

        // Fully reset TokenTable component, other way it doesn't work as it should.
        setStoryBookTokensCategories([]);
        setTimeout(() => {
            setStoryBookTokensCategories(sbTokensCategories);
        }, 1);
    }, [currentTheme, setStoryBookTokensCategories, category]);

    const Container = useMemo(
        () =>
            styled.div(() => ({
                "margin": "25px 0 40px",

                "*": {
                    boxSizing: "border-box"
                }
            })),
        []
    );

    const Card = useMemo(
        () =>
            styled.div(() => ({
                boxShadow:
                    "rgb(0 0 0 / 10%) 0px 1px 3px 1px, rgb(0 0 0 / 7%) 0px 0px 0px 1px",
                borderRadius: 4,
                padding: 20
            })),
        []
    );

    return (
        <Container>
            <Card>
                <TokenTable
                    categories={storyBookTokensCategories}
                    readonly
                />
            </Card>
            <Button />
        </Container>
    );
};

export default DesignTokenDocBlock;
