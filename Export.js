/*
---------------------------------------------
EXPORT
---------------------------------------------
*/

/**
 * Export class. TODO.
 */
var HExport =
{
    // TODO
    // Fix function parameters
    /**
     * Saves active document as Ai.
     * @param {string} path
     * @param {string} filename
     */
    SaveAsAI: function()
    {
        var saveOptions = new IllustratorSaveOptions();
        var ai8Doc = new File(atlasSettings.dataFolder + "/" + mapObject.data[mapSelection] + "-Export.ai");
        saveOptions.compatibility = Compatibility.ILLUSTRATOR17;
        saveOptions.flattenOutput = OutputFlattening.PRESERVEAPPEARANCE;
        app.activeDocument.saveAs(ai8Doc, saveOptions);

        
    }
};
