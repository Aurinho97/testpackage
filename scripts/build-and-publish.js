/**
 * Builds and publishes package to remote private registry
 */
const {exec, execSync} = require("child_process");

const exit = (er) => {
    console.log(er);
    process.exitCode = 1;
};

// Build
try {
    execSync("yarn run build");
} catch (er) {
    exit(er);
}

// Generate package.json
try {
    execSync("node scripts/generate-publish-package-description");
} catch (er) {
    exit(er);
}

// Getting package data
let packageData = require("./../dist/package.json");

// Publishing package
try {
    execSync(`yarn publish dist --new-version ${packageData.version}`);
} catch (er) {
    exit(er);
}

console.log(`Package ${packageData.name} published with version ${packageData.version}`);
