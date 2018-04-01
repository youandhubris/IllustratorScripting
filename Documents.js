/*
---------------------------------------------
ADOBE
---------------------------------------------
*/

var HDocuments =
{
    /**
     * @summary Get Active Document
     * @returns {Document}
     */
    GetActiveDocument: function()
    {
        if (app.documents.length > 0) return app.activeDocument;
        else
        {
            beep();
            alert("You have no open documents.");
            return null;
        }
    }
};
