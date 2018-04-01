/*
---------------------------------------------
BRIDGETALK
---------------------------------------------
*/

var HBridgeTalk =
{
    bridgeTalk: null,

    /**
     * @summary Setups BridgeTalk Message and define a global function 'BridgeTalkOnResult()'.
     */
    Setup: function()
    {
        bridgeTalk = new BridgeTalk;
        bridgeTalk.onResult = function(resObj)
        {
            BridgeTalkOnResult();
        }
    },

    /**
     * @summary Send Bridge Talk Message.
     * @param {string} bTMessage Message.
     * @param {string} target Target application.
     */
    Message: function(bTMessage, target)
    {
        bridgeTalk.target = target;
        bridgeTalk.body = bTMessage;

        bridgeTalk.send();
    }
};
