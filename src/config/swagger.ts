import fs from "fs";
import path from "path";
import YAML from "yaml";

export default YAML.parse(
  fs.readFileSync(path.resolve(__dirname, "./swagger.yaml"), "utf-8")
);
