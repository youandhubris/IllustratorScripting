/*
---------------------------------------------
GUI
---------------------------------------------
*/

var HGUI =
{
    /**
     * @summary Delete previous window session.
     * @param {string} title Window title.
     */
    ClearWindow: function(title)
    {
        var winToDel = Window.find("palette", title);
        if (winToDel != null)
        {
            winToDel.close();
            delete winToDel;
        }
    }
};
