# Save and Export

![Save and Export](https://d1a3f4spazzrp4.cloudfront.net/indranil-kepler.gl/documentation/k-save-and-export-1.png 'activate interactions')

indranil-kepler.gl is a client-side only application. In the demo app, the data you uploaded stays in your browser. indranil-kepler.gl does not send or store any user data to any backends. This rule poses an limitation on how you can save and share your maps.

However, in the demo app, you can:

- [Export map as an image](#export-image).
- [Export filtered or unfiltered data as a csv](#export-data).
- [Export Map](#export-map)
- [Share Public URL (Dropbox)](#export-dropbox)

## <a href="#export-image">Export Image</a>

![Export Image](https://d1a3f4spazzrp4.cloudfront.net/indranil-kepler.gl/documentation/k-save-and-export-2.png 'activate interactions')

You can export the current map as an image. The export window will use the current map viewport, and the preview will show the entire exported map area. To adjust the viewport, you will have to close the export dialog. You can choose different export ratios or resolutions, and also to add a map legend.

## <a href="#export-data">Export Data</a>

![Export Data](https://d1a3f4spazzrp4.cloudfront.net/indranil-kepler.gl/documentation/k-save-and-export-3.png 'activate interactions')

You can export map data as a csv file, with the option to export ONLY the filtered data or the entire dataset.

## <a href="#export-map">Export Map</a>

You can export the current map using two different formats. The **Export Map** window provides two options:

- HTML: create a single html file loads and renders your current map.
- JSON: create a json file with your current map config and data.

### <a href="#export-html-map">Export Map as HTML</a>

![Export Map as HTML](https://d1a3f4spazzrp4.cloudfront.net/indranil-kepler.gl/documentation/k-save-and-export-4.png 'activate interactions')

To save and export your current map as HTML file, click on **Export Map** and subsequently on **Export**.
When prompted provide your own mapbox token to be used in the newly generated file. If you don't provide a Mapbox Token,
indranil-kepler.gl will use a default one which can expire at anytime without any communication and therefore break your your existing map.

#### How to update an exported map token

In order to edit the mapbox token in your html file you simply need to perform the following steps:

1. [Create a new mapbox token](https://docs.mapbox.com/help/how-mapbox-works/access-tokens/) or use your existing one.
2. Open the indranil-kepler.gl.map file with your favorite text editor.
3. Locate the following line in the exported file **indranil-kepler.gl.html**:

```javascript
/**
 * Provide your MapBox Token
 **/
const MAPBOX_TOKEN = 'CURRENT_TOKEN';
```

4. Replace the current value a new valid token. The code should now look like the following:

```javascript
/**
 * Provide your MapBox Token
 **/
const MAPBOX_TOKEN = 'pk.eyJ1IjoidWJlcmRh...';
```

### <a href="#export-json-map">Export Map as JSON</a>

![Export Map as JSON](https://d1a3f4spazzrp4.cloudfront.net/indranil-kepler.gl/documentation/k-save-and-export-5.png 'activate interactions')

You can export the current map as a `json` file. This is useful when you are running your own indranil-kepler.gl application and want to load your map programmatticaly.
The JSON file includes:

- dataset: processed data to create used to render your map
- config: layer, filter, map style and interaction settings.
  The map config includes the current layer, filter, map style and interaction settings.

**Note:** indranil-kepler.gl map config is coupled with loaded datasets. The **`dataId`** key is used to bind layers, filters and tooltip settings to a specific dataset. If you try to upload a configuration with a dataset in your own indranil-kepler.gl app, you also need to make sure your dataset **`id`** matches the **`dataId`** in the config.

## <a href="#export-dropbox">Share Public URL (Dropbox) </a>

![Export Map to Dropbox](https://d1a3f4spazzrp4.cloudfront.net/indranil-kepler.gl/documentation/k-save-and-export-5.png 'activate interactions')

To export the current map into your Dropbox account, click on **Share Public Url** and select Dropbox as your cloud storage.
Perform the authentication against Dropbox using your credentials. Once the authentication process is completed,
click on **Upload** and indranil-kepler.gl will push your current map onto your account.

At the end of the process indranil-kepler.gl will automatically generate a permalink for your work you can share with other users.

[Back to table of contents](README.md)
