SWEET HOME 3D JS VIEWER v 7.2
-----------------------------

This archive contains files required to install Sweet Home 3D JS Viewer, a 
HTML5 component able to display the 3D view of a Sweet Home 3D file from its URL.
The viewed SH3D file MUST have been saved with version Sweet Home 3D 5.3 
or a more recent version. This component can run under any web browser compatible 
with WebGL (see http://caniuse.com/webgl for a list of compatible browsers).
For local tests (including the HTML files found in this archive), be sure 
to disable local file restrictions in your browser if needed.

Mouse and keyboard navigation are explained at 
http://sweethome3d.cvs.sf.net/viewvc/sweethome3d/SweetHome3D/src/com/eteks/sweethome3d/viewcontroller/resources/help/en/editing3DView.html
Under touch devices like smartphones and tablets, you may navigate with your finger and pinching will zoom.


HOW TO INSTALL SWEET HOME 3D JS VIEWER
--------------------------------------

1. If you want to use Sweet Home 3D Viewer on a web server, save and compress 
   the SH3D file you want to display using the "File > Save and compress" 
   menu item to limit its size
2. Copy the SH3D file to the directory where this README.TXT is found  
3. Copy the file name of your SH3D file to clipboard, ensuring it doesn't contain 
   spaces (or replace them by "%20" symbols)
4. Edit the "SweetHome3DJSViewer.html" or "SweetHome3DJSViewerInOverlay.html" file 
   and replace the "default.sh3d" viewed document by the file name of your SH3D file.
   for example, if the URL of your SH3D file is "myhome.sh3d",
   you should obtain the following line in "SweetHome3DJSViewer.html":
     var homeUrl = "myhome.sh3d";
   and the following line in "SweetHome3DJSViewerInOverlay.html":
      <button onclick='viewHomeInOverlay("myhome.sh3d",
5. Open the either HTML files in your web browser to check if
   it works correctly (depending on the browser you use, you may have 
   to enable requests to local files or cross-domain requests)  
6. Copy the HTML content of either HTML files in the web page of your choice if necessary 
7. Install this web page at the location of your choice, copying it with 
   your SH3D file and the subdirectory named "lib" where this README.TXT is found.
   "default.sh3d" or the name of the viewed SH3D file can also be the absolute 
   or relative URL at your choice.

If you want to display navigation arrows on desktop, update the parameters list 
with the following value:
  navigationPanel:"default",

If you don't want the user to be able to switch between aerial view and virtual 
visitor view with the space bar, add the following line to parameters list:
  activateCameraSwitchKey:"false",

If you want to select a given point of view stored in the SH3D file, 
add a "camera" parameter with a value equal to the name of that point of view.
You may also propose to the user to select the point of view of his choice 
in a dropdown list, by adding a "selectableCameras" parameter with a value equal 
to a comma separated list of viewpoint names, as in the following example:
        camera:"Kitchen",
        selectableCameras:"Living room, Kitchen, Bedroom",

Similarly, you may select a given level of a multilevel home, with the "level" 
parameter equal to the name of that level.
You may also propose to the user to select the level of his choice in the
a dropdown list, by adding a "selectableLevels" parameter with a value equal 
to a comma separated list of existing level names, as in the following example:
	    level:"1st floor",
	    selectableLevels:"Basement, 1st floor",                    

"camera", "selectableCameras", "level" and "selectableLevels" parameters are 
optional and can be cited or not. If a requested viewpoint of level name doesn't 
exist, it will be silently ignored. If "selectableCameras" and "selectableLevels" 
are cited a separator will be added in the dropdown list to separate both lists.

See HTML files for other parameters that you may find interesting to modify.
The API of the displayed component is available at http://www.sweethome3d.com/jsdoc/
                    
                    
Caution: Compared to Sweet Home 3D Applet viewer, the "navigationPanel" parameter 
as a different meaning:
navigationPanel: "true" should be replaced by navigationPanel: "default"
navigationPanel: "false" should be replaced by navigationPanel: "none"
               
                     
Mentioning the following copyright on the web page where you use 
Sweet Home 3D JS Viewer will be greatly appreciated:

Sweet Home 3D JS Viewer, Copyright (c) 2005-2023 Emmanuel PUYBARET / eTeks. 
Distributed under GNU General Public License    
