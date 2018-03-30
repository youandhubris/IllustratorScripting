/*
---------------------------------------------
COLOR
---------------------------------------------
*/

var HColor =
{
    GetRGBColorFromObject: function(colorObject)
    {
      var newRGBColor = new RGBColor();
      newRGBColor.red = colorObject.red;
      newRGBColor.green = colorObject.green;
      newRGBColor.blue = colorObject.blue;

      return newRGBColor;
    },

    GetSwatchArray: function(paletteName)
    {
        var swatchAray = [];
        var swatchesIndex = null;
        var swatchesGroup = activeDoc.swatchGroups;

        for(var i = 0; i < swatchesGroup.length; i++)
        {
            if (swatchesGroup[i].name == paletteName) swatchesIndex = i;
        }

        if (swatchesIndex != null)
        {
            var mapPaleteSwatches = swatchesGroup[swatchesIndex].getAllSwatches();

            for(var i = 0; i < mapPaleteSwatches.length; i++)
            {
                swatchAray.push(mapPaleteSwatches[i].color);

                // HUBRIS.Logger.ToConsole("");
                // HUBRIS.Logger.ToConsole("Swatch name: " + mapPaleteSwatches[i].name);
                // HUBRIS.Logger.ToConsole("Swatch type: " + mapPaleteSwatches[i].typename);

                // var swatchColor = mapPaleteSwatches[i].color;
                // HUBRIS.Logger.ToConsole("");
                // HUBRIS.Logger.ToConsole("Color type: " + swatchColor.typename);
                // HUBRIS.Logger.ToConsole("Color tint: " + swatchColor.tint);

                // var swatchSpot = swatchColor.spot;
                // HUBRIS.Logger.ToConsole("");
                // HUBRIS.Logger.ToConsole("Spot: " + swatchSpot.color);
                // HUBRIS.Logger.ToConsole("Spot type: " + swatchSpot.colorType);
                // HUBRIS.Logger.ToConsole("Spot name: " + swatchSpot.name);
                // HUBRIS.Logger.ToConsole("Spot kind: " + swatchSpot.spotKind);
                // HUBRIS.Logger.ToConsole("Spot typename: " + swatchSpot.typename);

                // var color = swatchSpot.color;
                // HUBRIS.Logger.ToConsole("C: " + color.cyan);
                // HUBRIS.Logger.ToConsole("M: " + color.magenta);
                // HUBRIS.Logger.ToConsole("Y: " + color.yellow);
                // HUBRIS.Logger.ToConsole("K: " + color.black);
            }

            return swatchAray;
        }

        else return null;
    }

};
