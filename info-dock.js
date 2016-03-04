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


            var infoPanel = $("<div>").tabPanel({
                dock: this.dock,
                panelId: "docs-panel"
            }).tabPanel("instance");

            infoPanel
                .addTab("about", "about", "Title1", "SubTitle1", "jndfabv adfndfvbs dfasvikjadsfv")
                .addTab("contact", "contact", "Title2", "SubTitle2", "afhofbon fbojirwegi0 fbh0bfeno")
                .addTab("tour", "tour", "Title3", "SubTitle3", "dfabhijdfb fbohidfb dfboihbfd hoibdf ");

            return this;
        }
    })
});