import fs from "fs";
import path from "path";

function concatenateCSS() {
  let output = "";
  const inDir = "styles";
  const outDir = "build";
  const outFile = "output.css";
  const outPath = path.join(outDir, outFile);

  fs.mkdirSync(outDir);

  fs.readdirSync(inDir).forEach((file) => {
    if (file.endsWith(".css")) {
      output += fs.readFileSync(path.join(inDir, file), "utf8") + "\n";
    }
  });

  fs.writeFileSync(outPath, output);
}

concatenateCSS();
