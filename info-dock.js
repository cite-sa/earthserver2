$(function () {
    $.widget("dock.infoDock", $.earthserver.dock, {
        options: {
            position: "right",
            toggleIcon: "images/icons/info(h100)w.png"
        },
        _create: function () {
            this._super();
            this.element.addClass("info-dock");
            this.dockToggle.append(
                $("<img>", {class: "dock-toggle-icon", src: this.options.toggleIcon})
            );
        },
        addInfoPanel: function() {
            return $("<div>").tabPanel({
                dock: this.dock,
                panelId: "docs-panel"
            }).tabPanel("instance");
        }
    })
});