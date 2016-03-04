$(function () {
    $.widget("earthserver.service", {
        options: {},
        _create: function () {
            var self = this
            var leftDock = $("<div>").mainDock({container: this.element}).mainDock("instance");
            leftDock.addProjectionSelectPanel(function(elemClicked) {
                console.log(elemClicked.text())
                var rightDock1 = $("<div>").dock({container: $("#service-container"), position: "right"}).dock("instance");
                rightDock1.addEmptyPanel();
            }).addAvailableCoveragesPanel().addQueryTerminalPanel().addQueryTerminalPanel().addQueryTerminalPanel();

            var rightDock1 = $("<div>").dock({container: this.element, position: "right"}).dock("instance");
            rightDock1.addEmptyPanel();
            var rightDock2 = $("<div>").dock({container: this.element, position: "right"}).dock("instance");
            rightDock2.addEmptyPanel();
            var infoDock = $("<div>").infoDock({container: this.element}).infoDock("instance");
            infoDock.addInfoPanel().addInfoPanel().addInfoPanel().addInfoPanel().addInfoPanel().addInfoPanel().addInfoPanel();


            var gisToolbar = $("<div>").gisToolbar({container: this.element}).gisToolbar("instance");
            gisToolbar.addClickHandler("#zoom-in-tool", function() {console.log("Zoom in.")});
            var coordinates = $("<div>").coordinateInfo({container: this.element}).coordinateInfo("instance");
        }
    })
});