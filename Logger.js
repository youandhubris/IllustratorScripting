/*
---------------------------------------------
LOG
---------------------------------------------
*/

var HLogger = 
{
    log : '',

    /**
     * @summary Appends message to 'log' variable.
     * @param {string} message
     * @param {string} level Notice, Warning or Error. (Defaul: Notice).
     */
    ToConsole: function(message, level)
    {
      if (level === undefined) level = "Notice";

      if (level == "Notice") this.log = message + "\n" + this.log;
      else if (level == "Warning") this.log = "*WARNING*\n" + message + "\n" + this.log;
      else if (level == "Error") this.log = "*ERROR*\n" + message + "\n" + this.log;
    },

    /**
     * @summary Clears 'log' variable.
     */
    LogClear: function()
    {
      this.log = '';
    },

    /**
     * @summary Object to 'log' string.
     * @returns {string}
     */
    toString: function()
    {
    	return this.log;
    }
};
