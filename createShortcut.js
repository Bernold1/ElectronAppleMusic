const fs = require("fs");
const path = require("path");
const os = require("os");

const execFolder = "apple-music-electron-linux-x64";
const appName = "Apple Music Linux";
const execName = "apple-music-electron";
const execPath = path.join(__dirname, execFolder, execName);
const iconPath = path.join(__dirname, "apple_music_icon.png");

const desktopEntry = `
[Desktop Entry]
Name=${appName}
Exec=${execPath}
Icon=${iconPath}
Type=Application
Categories=Utility;
`;

const desktopFilePath = path.join(
  os.homedir(),
  ".local",
  "share",
  "applications",
  `${appName.replace(/ /g, "_")}.desktop`
);

fs.writeFile(desktopFilePath, desktopEntry, (err) => {
  if (err) {
    console.error("Error creating desktop entry:", err);
    return;
  }
  console.log("Desktop entry created successfully.");
});
