# FDNYmap

## Description
This map shows density of calls responded to by the FDNY in 2017. Call response data availble from NYC Open Data.

## Methods
### Data Preperation
Call data from NYC Open data table 'Fire Incident Dispatch Data' provides location information in the form of call box locations. The call box locations are used to help protect identy of callers. The locations are presented as addresses. To create the map I converted the call box addresses to latitude and longitude. I found a resource on [poi-factory](http://www.poi-factory.com/node/11074) that converted over 1700 of the call box locations, created by user may2700. The final ~500 call boxes I gecoded using [a tool created by Google Map Developers](http://www.mapdevelopers.com/batch_geocode_tool.php). 

Note: a little less than 9,000 calls were removed from the data set because I could not properly geocode their call box addresses. Eithier could not find the address or latitude and longitude produced was for a location outside of New York City.

To summarize data for easier data visualization of the over 580,000 calls I created a grid over the five boroghs where each square is 0.0042 by 0.0042 degrees latitude and longitude (about 0.29 by 0.22 miles). This grid was added to a NYC shap file from the [US Census Bureau's TIGER Products](https://www.census.gov/geo/maps-data/data/tiger-line.html) using GIS editing software [QGIS](https://www.qgis.org/en/site/). Call counts were summed over each square and summarized in csv file, NYC_w_Grid.csv, for input to map.

### Code
Final map was created in javascript using the D3.js library. The final map with grid is a GEOJSON file that is hardcoded into the javascript file, mymap3_static.js. The code structure is:

HTML File: index.html

javascript File: mymap3_static.js

CSS File: styles.css

#### Input files:
NYC_w_Grid.csv

summary_Table.csv

Map (GEOJSON file hard coded in javascript file): NYC_w_Grid.geojson

## Other Code Referrenced, Thank Yous
[Referenced Github user adamjanes code to implement promises in D3 V5.](https://gist.github.com/adamjanes/6cf85a4fd79e122695ebde7d41fe327f)

[Used a novel solution to index object arrays presented by Pablo Francisco Perez Hidalgo on Stack Overflow](https://stackoverflow.com/questions/8668174/indexof-method-in-an-object-array)

Lastly used mbloch's [mapshaper](https://mapshaper.org/) program through out the project to check the shape and geojson files I was creating.

## Notes
Map is a fixed size in its current creation, I have exported it to a pdf file for easier viewing, draft2.pdf.

V1.0 had errors in the call count due to grid spaces that fell on the borders of boughs, it would count the calls multiple times for each borough. That has been corrected in V1.1.
