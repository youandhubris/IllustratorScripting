/*
---------------------------------------------
LAYERS
---------------------------------------------
*/

var HLayers =
{
	/**
	 * @summary Short description. (use period)
	 * @params type $var Optional. Description.
	 * @returns type Description.
	 */
	GetLayersByName: function(layersArray, namesArray, maxDepthLevel, returnOnlyFirst)
	{
		try
		{	
			if (returnOnlyFirst === undefined) returnOnlyFirst = true;

			var returnArray = [];

			for (var i = 0; i < namesArray.length; i++)
			{
				for (var ii = 0; ii < layersArray.length; ii++)
				{         
					var targetLayer = layersArray[ii];
					var layerName = new String(targetLayer.name);

					if (layerName.indexOf(namesArray[i]) == 0)
					{
						returnArray.push(targetLayer);
						if (returnOnlyFirst) break;
					}

					else if (targetLayer.layers.length != 0 && maxDepthLevel > 0)
					{
						var newNameArray = [namesArray[i]];
						var newLayersLevel = targetLayer.layers;
						var newDepthLevel = maxDepthLevel - 1;

						var tempArray = this.GetLayersByName(newLayersLevel, newNameArray, newDepthLevel);
						if (tempArray != null)
						{
							returnArray = returnArray.concat(tempArray);
							if (returnOnlyFirst) break;
						}
					}
			}
			}

			if (returnArray.length != 0) return returnArray;
			else return null;
		}

		catch(e)
		{
			HUBRIS.Logger.ToConsole("GetLayersByName: " + e.message, "Error");
		}
	},

	/**
	 * @summary Short description. (use period)
	 * @params type $var Optional. Description.
	 * @returns type Description.
	 */
	RemoveLayersByName: function(layersArray, namesArray, maxDepthLevel, returnOnlyFirst)
	{
		try
		{
			var layersToRemove = this.GetLayersByName(layersArray, namesArray, maxDepthLevel, returnOnlyFirst);
			
			HUBRIS.Logger.ToConsole("");
			HUBRIS.Logger.ToConsole("Removed " + layersToRemove.length + " out of " + namesArray.length);

			for (var i = layersToRemove.length - 1; i >= 0; i--)
			{
				HUBRIS.Logger.ToConsole("Removed: " + layersToRemove[i].name)
				layersToRemove[i].remove();
			}
		}

		catch(e)
		{
			HUBRIS.Logger.ToConsole("RemoveLayersByName: " + e.message, "Error");
		}
	}
};
