/**
 * Creates package.json for built package
 */
'use strict';
const {execSync} = require("child_process");

let fs = require("fs");
let packageData = require("./../package.json");

// Bump package version
function compareSemVer(a, b) {
    let pa = a.split('.');
    let pb = b.split('.');
    for (let i = 0; i < 3; i++) {
        let na = Number(pa[i]);
        let nb = Number(pb[i]);
        if (na > nb) return -1;
        if (nb > na) return 1;
        if (!isNaN(na) && isNaN(nb)) return -1;
        if (isNaN(na) && !isNaN(nb)) return 1;
    }
    return 0;
}

let packageName = packageData.name.split("@aurinho97/").join("");
let finalVersion = '1.1.0';

console.log(packageName);
console.log(finalVersion);

let packageConfig = {
    name: packageData.name,
    version: finalVersion,
    module: "index.js",
    license: "UNLICENSED",
    types: "index.d.ts",
    publishConfig: packageData.publishConfig,
    dependencies: packageData.dependencies,
    files: ["*"]
};

fs.writeFile('./dist/package.json', JSON.stringify(packageConfig), (er) => {
    if (er) {
        console.log("Error creating package.json.");
        process.exitCode = 1;
    }
    else {
        process.exitCode = 0;
    }
});
