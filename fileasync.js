const fs = require("fs/promises");
const read = async () => {
  const data = await fs.readFile("./data.txt", "utf8");
  console.log(data);
};
const write = async () => {
  const newData = "THis is my new data";
  await fs.writeFile("./data1.txt", newData, "utf8");
};

write();
read()