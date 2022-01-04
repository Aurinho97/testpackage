import React from "react";

import styles from "./Camera.module.scss";

export interface CameraProps {
    p: boolean
}

const Camera: React.FC<CameraProps> = () => {
    return (
        <div className={styles.root}>Camera component</div>
    );
};

export default Camera;
