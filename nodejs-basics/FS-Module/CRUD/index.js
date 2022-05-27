const fs = require("fs");

const createFile = (fileName, fileType, initialInput) => {
  var input = " ";
  if (!fileName || !fileType) {
    throw error("File name or file type is missing.");
  }
  if (initialInput) {
    input = initialInput;
  }
  fs.writeFile(`${fileName}.${fileType}`, input, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File has been successfully created!");
    }
  });
};

createFile("new_file", "json", "{id:1,name:'first_item'}");





const updateFile = (fileName, inputToAdd)=>{
    fs.appendFile(fileName, inputToAdd,(err)=>{
        if(err) console.log(err)
    });

}


  console.log(updateFile("new_file.json", `\n{id: 2, name: 'second_item'}`))