$(function () {
    $.widget("earthserver.service", {
        options: {},
        _create: function () {
            var self = this;

            /* main dock (required) */
            var leftDock = $("<div>").mainDock({container: this.element}).mainDock("instance");
            /* */
            leftDock
                .addProjectionSelectPanel(function(elemClicked) {
                    console.log(elemClicked.text())
                })
                .addAvailableCoveragesPanel()
                .addQueryTerminalPanel();

            var exampleRightDock = $("<div>").dock({container: this.element, position: "right"}).dock("instance");
            exampleRightDock.addEmptyPanel();

            /* info dock (required) */
            var infoDock = $("<div>").infoDock({container: this.element}).infoDock("instance");
            var infoPanel = infoDock.addInfoPanel();

            /* Example Content */
            infoPanel
                .addTab("about", "about", "Title1", "SubTitle1", "jndfabv adfndfvbs dfasvikjadsfv")
                .addTab("contact", "contact", "Title2", "SubTitle2", "afhofbon fbojirwegi0 fbh0bfeno")
                .addTab("tour", "tour", "Title3", "SubTitle3", "dfabhijdfb fbohidfb dfboihbfd hoibdf ");

            /* gis toolbar (required) */
            var gisToolbar = $("<div>").gisToolbar({container: this.element}).gisToolbar("instance");
            gisToolbar.addClickHandler("#zoom-in-tool", function() {console.log("Zoom in.")});
            /* coordinates overlay (required) */
            var coordinates = $("<div>").coordinateOverlay({container: this.element}).coordinateOverlay("instance");
        }
    })
});