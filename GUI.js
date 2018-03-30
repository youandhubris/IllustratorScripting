/*
---------------------------------------------
GUI
---------------------------------------------
*/

var HGUI =
{
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
