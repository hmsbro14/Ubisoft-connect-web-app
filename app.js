Dos(document.getElementById("jsdos")).ready((fs, main) => {
  fs.extract("ubi.zip").then(() => {
    main(["UbisoftConnect.exe"]);
  });
});
