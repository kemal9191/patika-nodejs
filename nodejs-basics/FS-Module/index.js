const fs = require("fs");

/* 

//Reading Files

fs.readFile("password.txt", "utf-8",(err, data)=>{
if(data){
    console.log(data);

}else if(err){
    console.log(err);
    
}
});

//Writing Files
// Her türlü dosya oluşturabiliriz.
fs.writeFile("firstFile.txt", "Yeni bir dünya", "utf-8", (err)=>{
    if(err) throw err;
    console.log("file has been created")}
)

//Adding New Lines

    fs.appendFile("firstFile.txt", "\n updatedData", "utf-8", (err)=>{
        if(err) throw err;
        console.log("file has been updated")}
    )

//Deleting Files

fs.unlink("password.txt", (err)=>{
    console.log(err);
})
 */


//Creating Folders
//recursive true olmalı ki 2sinin de oluşsun. Yoksa uploadsın halihazırda var olması laızm.
/* fs.mkdir("uploads/img", { recursive: true },(err)=>{
    if(err)console.log(err);
    console.log("Folders has been created")
}) */

//Deleting Folders
//img yi dildik, çünkü sadece img yi silerdi.
fs.rmdir("uploads", { recursive: true },(err)=>{
    if(err)console.log(err);
    console.log("Folders has been deleted")
})