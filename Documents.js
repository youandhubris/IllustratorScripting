/*
---------------------------------------------
ADOBE
---------------------------------------------
*/

var HDocuments =
{
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

    /**
     * @summary Short description. (use period)
     * @params type $var Optional. Description.
     * @returns type Description.
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
