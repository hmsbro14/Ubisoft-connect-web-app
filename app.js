Dos(document.getElementById("jsdos")).ready((fs, main) => {
  fs.extract("https://www.mediafire.com/file/2tkmz9pko2iycqc/ubi.zip/file?dkey=758ff0d4g23&r=886").then(() => {
    main(["UbisoftConnect.exe"]);
  });
});
