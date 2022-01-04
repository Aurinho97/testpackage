import React from "react";

import styles from "./LabledButton.module.scss";

export interface LabledButtonProps {
    p: boolean
}

const LabledButton: React.FC<LabledButtonProps> = () => {
    return (
        <div className={styles.root}>LabledButton component</div>
    );
};

export default LabledButton;
