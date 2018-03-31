/*
---------------------------------------------
DATA
---------------------------------------------
*/

var HData =
{
    /**
     * @summary Prompts message for folder selection.
     * @param {string} promptMessage
     * @returns {string}
     */
    SetFolder: function(promptMessage)
    {
        beep();
        var selectedFolder = Folder.selectDialog(promptMessage);
        if(selectedFolder != null) return decodeURI(selectedFolder.absoluteURI);
        else return null;
    },

    /**
     * @summary Reads file and returns JSON object.
     * @param {string} pathToData
     * @param {string} filename
     * @returns {JSON}
     */
    LoadData: function(pathToData, filename)
    {
        var fileData = new File(pathToData + "/" + filename + ".json");
        if(fileData.exists) return this.FileToJSON(fileData);
        else return null;
    },

    /**
     * @summary File to JSON object.
     * @param {File} fileObject
     * @returns {JSON}
     */
    FileToJSON: function(fileObject)
    {
        fileObject.open("r", "TEXT");
        var fileObjectRead = fileObject.read();
        fileObject.close();

        return JSON.parse(fileObjectRead);
    },

    // TODO
    // Better method / option
    // Save text based file
    /**
     * @summary Saves, and overwrites, text file.
     * @param {string} path
     * @param {string} filename
     * @param {string} stringToSave
     */
    SaveFile: function(path, filename, stringToSave)
    {
        var fileObject = new File(path + "/" + filename);
        fileObject.open("w");
        fileObject.write(stringToSave);
        fileObject.close();
    }
};
