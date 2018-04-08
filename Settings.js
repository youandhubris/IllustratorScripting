/*
---------------------------------------------
SETTINGS
---------------------------------------------
*/

/**
 * Data class.
 */
var HSettings =
{
    /**
     * Returns user settings from ~/Library/Application Support/HUBRIS.
     * @param {string} settingsFile
     * @returns {string} JSON object.
     */
    GetUserSettings: function(settingsFile)
    {
        var userSettingsFile = new File(Folder.userData + "/Hubris/" + settingsFile);
        if (userSettingsFile.exists) return HUBRIS.Data.FileToJSON(userSettingsFile);
        else return null;
    },

    /**
     * Saves user settings to ~/Library/Application Support/HUBRIS.
     * @param {string} filename
     * @param {string} stringToSave
     */
    SaveUserSettings: function(filename, stringToSave)
    {
        var userDataPath = Folder.userData + "/Hubris";
        var userDataFolder = new Folder(userDataPath);
        if (!userDataFolder.exists) userDataFolder.create();
        
        HUBRIS.Data.SaveFile(userDataPath, filename, stringToSave);
    }
};
