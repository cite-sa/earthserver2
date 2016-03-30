$(function () {
    $.widget("earthserver.service", {
        options: {},
        _create: function () {
            var self = this;

            $("#service-navbar").navbar();

            /* main dock (required) */
            var leftDock = $("<div>").mainDock().mainDock("instance");
            $("<div>").plotDock().plotDock("instance");

            /* info dock (required) */
            var infoDock = $("<div>").infoDock().infoDock("instance");
            var infoPanel = infoDock.getInfoPanel()
                .addTab("about", "about", "Title1", "SubTitle1", "jndfabv adfndfvbs dfasvikjadsfv")
                .addTab("contact", "contact", "Title2", "SubTitle2", "afhofbon fbojirwegi0 fbh0bfeno")
                .addTab("tour", "tour", "Title3", "SubTitle3", "dfabhijdfb fbohidfb dfboihbfd hoibdf ");

            /* gis toolbar (required) */
            var gisToolbar = $("<div>").gisToolbar().gisToolbar("instance");
            gisToolbar.addClickHandler("#zoom-in-tool", function() {
                /*console.log("Zoom in.")*/
                infoDock.open();
            });
            /* coordinates overlay (required) */
            var coordinates = $("<div>").coordinateOverlay().coordinateOverlay("instance");
        }
    })
});