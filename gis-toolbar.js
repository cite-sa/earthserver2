$(function () {
    $.widget("earthserver.gisToolbar", {
        options: {
            container: undefined
        },
        _create: function () {
            this.element.attr({id: "gis-toolbar"})
                .append(
                    $("<div>", {
                        id: "zoom-in-tool",
                        class: "gis-icon-container",
                        "data-toggle": "tooltip",
                        "data-placement": "left",
                        "data-container": "body",
                        "title": "Zoom In"
                    }).append(
                        $("<img>", {class: "gis-icon", src: "images/icons/zoom_in(h100)w.png"})
                    )
                ).append(
                $("<div>", {
                    id: "zoom-out-tool",
                    class: "gis-icon-container",
                    "data-toggle": "tooltip",
                    "data-placement": "left",
                    "data-container": "body",
                    "title": "Zoom Out"
                }).append(
                        $("<img>", {class: "gis-icon", src: "images/icons/zoom_out(h100)w.png"})
                            .click(function () {
                                console.log("Zooming out");
                            })
                    )
            ).append(
                $("<div>", {
                    id: "fit-to-screen-tool",
                    class: "gis-icon-container",
                    "data-toggle": "tooltip",
                    "data-placement": "left",
                    "data-container": "body",
                    "title": "Fit to Screen"
                }).append(
                        $("<img>", {class: "gis-icon", src: "images/icons/fit_to_screen(h100)w.png"})
                            .click(function () {
                                console.log("Zooming in");
                            })
                    )
            ).append(
                $("<div>", {
                    id: "select-tool",
                    class: "gis-icon-container",
                    "data-toggle": "tooltip",
                    "data-placement": "left",
                    "data-container": "body",
                    "title": "Select"
                }).append(
                        $("<img>", {class: "gis-icon", src: "images/icons/select(h100)w.png"})
                            .click(function () {
                                console.log("Zooming in");
                            })
                    )
            ).append(
                $("<div>", {
                    id: "pan-tool",
                    class: "gis-icon-container",
                    "data-toggle": "tooltip",
                    "data-placement": "left",
                    "data-container": "body",
                    "title": "Pan"
                }).append(
                        $("<img>", {class: "gis-icon", src: "images/icons/pan(h100)w.png"})
                            .click(function () {
                                console.log("Zooming in");
                            })
                    )
            ).appendTo(this.options.container);

            $(document).ready(function () {
                $('[data-toggle="tooltip"]').tooltip();
            });
        },
        addClickHandler: function (selector, callback) {
            this.element.find(selector)
                .off("click")
                .click(function() {
                    callback()
                });
        },
        addTool: function (icon, title, callback) {
            this.element.append(
                $("<div>", {
                    class: "gis-icon-container",
                    "data-toggle": "tooltip",
                    "data-placement": "left",
                    "data-container": "body",
                    "title": title
                }).append(
                    $("<img>", {class: "gis-icon", src: icon})
                        .click(function () {
                            callback();
                        })
                )
            );
        }
    })
});