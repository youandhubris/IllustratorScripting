/*
---------------------------------------------
EXPORT
---------------------------------------------
*/

var HExport =
{
    /**
     * @summary Short description. (use period)
     * @params type $var Optional. Description.
     * @returns type Description.
     */

    SaveAsAI: function()
    {
        var saveOptions = new IllustratorSaveOptions();
        var ai8Doc = new File(atlasSettings.dataFolder + "/" + mapObject.data[mapSelection] + "-Export.ai");
        saveOptions.compatibility = Compatibility.ILLUSTRATOR17;
        saveOptions.flattenOutput = OutputFlattening.PRESERVEAPPEARANCE;
        app.activeDocument.saveAs(ai8Doc, saveOptions);

        
    }

    // function SaveAsAI()
    // {

    //     var fileOutput = new File(atlasSettings.dataFolder + "/" + mapObject.data[parseInt(mapList.selection)] + "-Export.png");
    //     var imageCaptureOptions = new ImageCaptureOptions();
    //     imageCaptureOptions.resolution = 300;
    //     imageCaptureOptions.transparency = true;

    //     app.activeDocument.imageCapture(fileOutput, app.activeDocument.visibleBounds, imageCaptureOptions);
    // }
};
