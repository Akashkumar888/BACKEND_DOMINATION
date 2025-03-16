// const fs = require('node:fs');
// both working same

const fs = require("fs");

// write file
// read file
// update file
// append file
// delete file
// folder creation file
// copy rename moves files

// Explanation:
// 1️⃣ Write File → Creates priya.txt with the given content.
// 2️⃣ Read File → Reads and prints the file content.
// 3️⃣ Update File → Overwrites the file with new content.
// 4️⃣ Append File → Adds more content to the file.
// 5️⃣ Create Folder → Creates a folder named MyFolder.
// 6️⃣ Move File → Moves priya.txt into MyFolder and renames it to new_priya.txt.
// 7️⃣ Copy File → Copies new_priya.txt inside MyFolder as copy_priya.txt.
// 8️⃣ Delete File → Deletes new_priya.txt.
// 9️⃣ Remove Folder → Deletes MyFolder along with its contents.

const path = require("path");

// Why Use path?
// Cross-Platform Compatibility 🖥️

// Different OSs use different path separators:
// Windows → C:\Users\Akash\file.txt (backslash \)
// Linux/macOS → /home/akash/file.txt (forward slash /)
// The path module ensures that paths work correctly on all OSs.
// Prevent Errors in File Paths ⚠️

// Hardcoding paths can lead to issues when running the code on different platforms.
// Easier File and Directory Manipulation 📂

// It provides methods to work with absolute/relative paths, file extensions, directory names, etc.

const fileName = "priya.txt";
const folderName = "MyFolder";
const newFileName = "new_priya.txt";
const copiedFileName = "copy_priya.txt";

// 1️⃣ Write File
fs.writeFile(fileName, "thank you so much i love you to akash 74438", (err) => {
  if (err) console.log(err);
  else console.log("File created successfully...");

  // 2️⃣ Read File
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) console.log(err);
    else console.log("File Content:", data);

    // 3️⃣ Update File (Overwrite)
    fs.writeFile(fileName, "Updated: Love you too ❤️", (err) => {
      if (err) console.log(err);
      else console.log("File updated successfully...");

      // 4️⃣ Append File
      fs.appendFile(fileName, "\nAppended: Forever together ❤️", (err) => {
        if (err) console.log(err);
        else console.log("Data appended successfully...");

        // 5️⃣ Create Folder
        if (!fs.existsSync(folderName)) {
          fs.mkdir(folderName, (err) => {
            if (err) console.log(err);
            else console.log("Folder created successfully...");

            // 6️⃣ Move File (Rename with new location)
            const newFilePath = path.join(folderName, newFileName);
            fs.rename(fileName, newFilePath, (err) => {
              if (err) console.log(err);
              else console.log("File moved successfully...");

              // 7️⃣ Copy File
              fs.copyFile(
                newFilePath,
                path.join(folderName, copiedFileName),
                (err) => {
                  if (err) console.log(err);
                  else console.log("File copied successfully...");

                  // 8️⃣ Delete File
                  fs.unlink(newFilePath, (err) => {
                    if (err) console.log(err);
                    else console.log("Original file deleted successfully...");

                    // 9️⃣ Remove Folder
                    fs.rm(
                      "folderName",
                      { recursive: true, force: true },
                      (err) => {
                        if (err) console.log(err);
                        else console.log("Folder deleted successfully...");
                      }
                    );
                  });
                }
              );
            });
          });
        }
      });
    });
  });
});
