# es2-service-template
##EarthServer 2 service template

###General Info
####Widget Initialization
A widget can be initialized with the following command:
```javascript
var widget = $("<div>").widgetName({option: optionValue});
```
Any widget method can be called like this:
```javascript
widget.widgetName("methodName", params);
```
In order to avoid passing the method name as a string argument, one can get the widget instance, using the
```javascript
var widgetInstance = widget.widgetName("instance");
```
and then call any method in the following way:
```javascript
widgetInstance.methodName(params);
```

###API
####mainDock Widget
#####Methods
addProjectionSelectPanel
addAvailableCoveragesPanel
addQueryTerminalPanel
