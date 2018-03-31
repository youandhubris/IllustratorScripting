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
    },

    // TODO 
    // Better onResult console update.
    /**
     * @summary Send Bridge Talk Message.
     * @param {string} bTMessage Message.
     * @param {string} target Target application.
     */
    BridgeTalkMessage: function(bTMessage, target)
    {
        if (bridgeTalk == null) bridgeTalk = new BridgeTalk;

        bridgeTalk.target = target;
        bridgeTalk.body = bTMessage;

        bridgeTalk.onResult = function(resObj)
        {
            md = bridgeTalk.result = eval(resObj.body);
            consoleDisplay.text = HUBRIS.Logger;
        }
        
        bridgeTalk.send();
    }
};
