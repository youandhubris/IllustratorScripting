/*
---------------------------------------------
BRIDGETALK
---------------------------------------------
*/

/**
 * Simple helpers to use Adobe's BridgeTalk class.
 */
var HBridgeTalk =
{
    bridgeTalk: null,

    /**
     * Setups BridgeTalk Message and define a global function 'BridgeTalkOnResult()'.
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
     * Send Bridge Talk Message.
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
