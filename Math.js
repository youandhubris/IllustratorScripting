/*
---------------------------------------------
MATH
---------------------------------------------
*/

var HMath =
{
    /**
     * @summary Returns the index of the specified occurance.
     * @param {string} string
     * @param {string} character
     * @param {number} occurance
     * @returns {number} If -1, occurance not found.
     */
    GetNthOccurance: function(string, character, occurance)
    {
        var counter = 1;

        for (var i = 0; i < string.length; i++)
        {
            if (string[i] == character)
            {
                if (counter == occurance) return i;
                else counter++;
            }
        }

        return -1;
    },

    /**
     * @summary Converts millimeter to point.
     * @param {number} mm in millimeters.
     * @returns {number}
     */
    MMToPoint: function(mm)
    {
        var point = mm / 0.352778;
        return point;
    },

    /**
     * @summary Converts point to millimeter.
     * @param {number} point in points.
     * @returns {number}
     */
    PointToMM: function(point)
    {
        var mm = point * 0.352778;
        return mm;
    },

    /**
     * @summary Maps value given in/out limits.
     * @param {number} value
     * @param {number} inputMin
     * @param {number} inputMax
     * @param {number} outputMin
     * @param {number} outputMax
     * @param {boolean} clamp
     * @returns {number}
     */
    MapValue: function(value, inputMin, inputMax, outputMin, outputMax, clamp)
    {
        if (clamp === undefined) clamp = true;

        var outVal = ((value - inputMin) / (inputMax - inputMin) * (outputMax - outputMin) + outputMin);

        if (clamp)
        {
            if (outputMax < outputMin)
            {
                if (outVal < outputMax) outVal = outputMax;
                else if (outVal > outputMin) outVal = outputMin;
            }

            else
            {
                if (outVal > outputMax) outVal = outputMax;
                else if (outVal < outputMin) outVal = outputMin;
            }
        }
        return outVal;
    }
};
