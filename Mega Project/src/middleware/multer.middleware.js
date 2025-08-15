import multer from "multer"

const storage = multer.diskStorage({
    destination: function (req, file, cb)
        // This storage needs public/images folder in the root directory
    // Else it will throw an error saying cannot find path public/images
     {
      cb(null, "./public/images")
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
// Middleware responsible to read form data and upload the File object to the mentioned path
  export const upload = multer({ 
    storage: storage ,
    limits: {
        filesize :1*1000*1000, //1MB 
    }
});