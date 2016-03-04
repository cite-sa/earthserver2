$(function () {
    $.widget("dock.mainDock", $.earthserver.dock, {
        options: {
            position: "left",
            toggleIcon: "glyphicon glyphicon-menu-hamburger"
        },
        _create: function () {
            this._super();
            this.dockToggle
                .append(
                    $("<span>", {class: this.options.toggleIcon + " dock-toggle-icon"})
                );
        },
        addProjectionSelectPanel: function (callback) {
            var projectionSelectPanel = $("<div>").selectPanel({
                dock: this.dock,
                panelId: "projection-selector",
                panelTitle: "projections",
                buttonId: "projectionDropdown"
            }).selectPanel("instance");

            $.each(projectionNames, function (index, projection) {
                if (index == 0) {
                    projectionSelectPanel.setButtonContent(projection);
                }
                projectionSelectPanel.addSelectOption(projection.replace(/ /g, '').toLowerCase(), projection, callback);
            });
            return this;
        },
        addAvailableCoveragesPanel: function() {
            var coverageSelectPanel = $("<div>").selectPanel({
                dock: this.dock,
                panelId: "coverage-selector",
                panelTitle: "available coverages",
                buttonId: "coverageDropdown"
            }).selectPanel("instance");

            $.each(coverageNames, function (index, coverage) {
                if (index == 0) {
                    coverageSelectPanel.setButtonContent(coverage);
                }
                coverageSelectPanel.addSelectOption(coverage.replace(/ /g, '').toLowerCase(), coverage);
            });
            coverageSelectPanel.addButton("Retrieve");

            return this;
        },
        addQueryTerminalPanel: function() {
            var queryTerminalPanel = $("<div>").queryTerminalPanel({
                dock: this.dock,
                panelId: "query-terminal",
                panelTitle: "wcps query"
            }).queryTerminalPanel("instance");

            return this;
        }
    })
});