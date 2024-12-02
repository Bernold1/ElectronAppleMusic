## Installation

### LOCATION DOES NOT WORK AT THE MOMENT AND ONLY WORKS FOR US BASED ACCOUNTS.  \
_23/11-2023: Currently looking into finding a fix_  \
_02/12-2024: Targeting any other regions routes directly back to the US version. So this only works for US based accounts._  \

1. Ensure you have node installed.
2. Run npm install
3. Run `npm run build-application` pass your region/language to the script if you want to target a specific country e.g.: `npm run build-application en-US` or `npm run build-application dk`
4. Run `npm run create-shortcut`, which should create a shortcut for the application. If you are running linux on anything other than a x64 processor, such as an ARM processor or similar you will have to change the shortcut `appName` in the createShortcut.js file.
