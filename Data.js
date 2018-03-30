/*
---------------------------------------------
DATA
---------------------------------------------
*/

var HData =
{
    SetFolder: function(promptMessage)
    {
        beep();
        var selectedFolder = Folder.selectDialog(promptMessage);
        if(selectedFolder != null) return decodeURI(selectedFolder.absoluteURI);
        else return null;
    },

    LoadData: function(pathToData, filename)
    {
        var fileData = new File(pathToData + "/" + filename + ".json");
        if(fileData.exists) return this.FileToJSON(fileData);
        else return null;
    },

    FileToJSON: function(fileObject)
    {
        fileObject.open("r", "TEXT");
        var fileObjectRead = fileObject.read();
        fileObject.close();

        return JSON.parse(fileObjectRead);
    },

    SaveFile: function(path, filename, stringToSave)
    {
        var fileObject = new File(path + "/" + filename);
        fileObject.open("w");
        fileObject.write(stringToSave);
        fileObject.close();
    }
};
