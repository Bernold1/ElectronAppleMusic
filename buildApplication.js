const { exec } = require("child_process");
const location = process.argv.slice(2).join("");

const url = `https://music.apple.com/${location}/browse`;
const appName = "apple-music-electron";

const command = `nativefier --name '${appName}' --lang 'da-DK' '${url}'`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(`Stdout: ${stdout}`);
});
