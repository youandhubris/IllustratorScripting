# IllustratorScripting

Collection of helpful functions for scripting in Illustrator.

___

## Documentation

### Table of Contents

-   [BridgeTalk](#bridgetalk)
    -   [Setup](#setup)
    -   [Message](#message)
-   [Color](#color)
    -   [GetRGBColorFromObject](#getrgbcolorfromobject)
    -   [GetCMYKColorFromObject](#getcmykcolorfromobject)
    -   [GetSwatchArray](#getswatcharray)
-   [Data](#data)
    -   [SetFolder](#setfolder)
    -   [LoadData](#loaddata)
    -   [FileToJSON](#filetojson)
    -   [SaveFile](#savefile)
-   [Documents](#documents)
    -   [GetActiveDocument](#getactivedocument)
-   [Export](#export)
    -   [SaveAsAI](#saveasai)
-   [GUI](#gui)
    -   [ClearWindow](#clearwindow)
-   [HUBRIS](#hubris)
-   [Layers](#layers)
    -   [GetLayersByName](#getlayersbyname)
    -   [RemoveLayersByName](#removelayersbyname)
-   [Logger](#logger)
    -   [ToConsole](#toconsole)
    -   [LogClear](#logclear)
    -   [toString](#tostring)
-   [Math](#math)
    -   [GetNthOccurance](#getnthoccurance)
    -   [MMToPoint](#mmtopoint)
    -   [PointToMM](#pointtomm)
    -   [MapValue](#mapvalue)
-   [Settings](#settings)
    -   [GetUserSettings](#getusersettings)
    -   [SaveUserSettings](#saveusersettings)

## BridgeTalk

Simple helpers to use Adobe's BridgeTalk class.

### Setup

Setups BridgeTalk Message and define a global function 'BridgeTalkOnResult()'.

### Message

Send Bridge Talk Message.

**Parameters**

-   `bTMessage` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Message.
-   `target` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Target application.

## Color

Color class.

### GetRGBColorFromObject

Converts generic object (with red, green, blue properties) to Adobe's RGBColor object.

**Parameters**

-   `colorObject` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

Returns **RGBColor** RGBColor

### GetCMYKColorFromObject

Converts generic object (with cyan, magenta, yellow, key, properties) to Adobe's CMYKColor object.

**Parameters**

-   `colorObject` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

Returns **CMYKColor** CMYKColor

### GetSwatchArray

Get all colors from a specific SwatchGroup / Palette

**Parameters**

-   `paletteName` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;Color>** Array of Color

## Data

Data class. TODO.

### SetFolder

Prompts message for folder selection.

**Parameters**

-   `promptMessage` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### LoadData

Reads file and returns JSON object.

**Parameters**

-   `pathToData` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `filename` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON)** 

### FileToJSON

File to JSON object.

**Parameters**

-   `fileObject` **File** 

Returns **[JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON)** 

### SaveFile

Saves, and overwrites, text file.

**Parameters**

-   `path` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `filename` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `stringToSave` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

## Documents

Documents class.

### GetActiveDocument

Get Active Document

Returns **[Document](https://developer.mozilla.org/docs/Web/JavaScript)** 

## Export

Export class. TODO.

### SaveAsAI

Saves active document as Ai.

**Parameters**

-   `path` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `filename` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

## GUI

GUI class.

### ClearWindow

Delete previous window session.

**Parameters**

-   `title` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Window title.

## HUBRIS

The main class/object, for a 'namespace-like' structure in Javascript.

## Layers

Layers class.

### GetLayersByName

Searches layers by name.

**Parameters**

-   `layersArray` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;Layer>** Array of Layer.
-   `namesArray` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** Array of strings.
-   `maxDepthLevel` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** How many sub-layers.
-   `returnOnlyFirst` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** One or all occurances.

Returns **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;Layer>** Array of Layer objects.

### RemoveLayersByName

Deletes layers by name.

**Parameters**

-   `layersArray` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;Layer>** Array of Layer.
-   `namesArray` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** Array of strings.
-   `maxDepthLevel` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** How many sub-layers.
-   `removeOnlyFirst` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** One or all occurances.

## Logger

Logger class, to use as in GUI console.

### ToConsole

Appends message to 'log' variable.

**Parameters**

-   `message` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `level` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Notice, Warning or Error. (Defaul: Notice).

### LogClear

Clears 'log' variable.

### toString

Object to 'log' string.

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

## Math

Data class.

### GetNthOccurance

Returns the index of the specified occurance.

**Parameters**

-   `string` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `character` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `occurance` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

Returns **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** If -1, occurance not found.

### MMToPoint

Converts millimeter to point.

**Parameters**

-   `mm` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** in millimeters.

Returns **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

### PointToMM

Converts point to millimeter.

**Parameters**

-   `point` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** in points.

Returns **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

### MapValue

Maps value given in/out limits.

**Parameters**

-   `value` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** 
-   `inputMin` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** 
-   `inputMax` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** 
-   `outputMin` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** 
-   `outputMax` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** 
-   `clamp` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

Returns **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

## Settings

Data class.

### GetUserSettings

Returns user settings from ~/Library/Application Support/HUBRIS.

**Parameters**

-   `settingsFile` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** JSON object.

### SaveUserSettings

Saves user settings to ~/Library/Application Support/HUBRIS.

**Parameters**

-   `filename` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `stringToSave` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

___

Documentation created with [documentationjs](https://github.com/documentationjs/documentation)