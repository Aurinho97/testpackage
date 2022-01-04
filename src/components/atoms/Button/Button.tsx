import React from "react";

import styles from "./Button.module.scss";

export interface ButtonProps {
    p: boolean
}

const Button: React.FC<ButtonProps> = () => {
    return (
        <div className={styles.root}>Button component</div>
    );
};

export default Button;
