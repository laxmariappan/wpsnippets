const fs = require("fs");
module.exports = {
    get: (ParentDirectory) => {
     
        const getDirectories = source =>
        fs.readdirSync(source, { withFileTypes: true })
          .filter(dirent => dirent.isDirectory())
          .map(dirent => dirent.name) 

        const categories = getDirectories(ParentDirectory)

        return categories.sort();
    },
};