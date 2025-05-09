import fs from "fs";
import ollama from "ollama";

const model = "llama3.2";
const filePath = "./item_list.txt";
const outputFilePath = "./updated_list.txt";

function getItems() {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

getItems().then(async (items) => {
    try {
      const prompt = `You are an assistant that categorizes and sorts grocery items. 
        Here is a list of grocery items: 
        ${items}

        Please Note:
        1. Categorize these items into appropriate categories such as Produce, Dairy, Meat, Bakery, Beverages, etc.
        2. Sort the items alphabetically within each category.
        3. Present the categorized list in a clear and organized manner, using bullet points or numbering.`;

      const response = await ollama.generate({
        model: model,
        prompt: prompt,
        stream: false,
      });

      fs.writeFile(outputFilePath, response.response, "utf-8", (err) => {
        if (err) {
          console.error("File writing error:", err);
        } else {
          console.log("✅ File written successfully!");
        }
      });
    } 
    catch (error) {
      console.log("❌ Error generating or writing file:", error);
    }
})
.catch((err) => {
    console.error("❌ Error reading file:", err);
});
