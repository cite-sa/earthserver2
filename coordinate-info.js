$(function () {
    $.widget("earthserver.coordinateInfo", {
        options: {
            container: undefined
        },
        _create: function () {
            $("<div>", {id: "coordinate-overlay"})
                .append($("<span>", {class: "coordinate-container"})
                    .append($("<img>", {class: "coordinate-icon", src: "images/icons/latitude(h100)w.png"}))
                    .append($("<span>", {id: "terrain-latitude"})
                        .text("39.17°S"))
            )
                .append($("<span>", {class: "coordinate-container"})
                    .append($("<img>", {class: "coordinate-icon", src: "images/icons/longitude(h100)w.png"}))
                    .append($("<span>", {id: "terrain-longitude"})
                    .text("0.63°E"))
                )
                /*.append($("<span>", {class: "coordinate-container"})
                    .append($("<img>", {class: "coordinate-icon", src: ""}))
                    .append($("<span>", {id: "terrain-elevation"}))
                )*/
                .append($("<span>", {class: "coordinate-container"})
                    .append($("<img>", {class: "coordinate-icon", src: "images/icons/eye_no_lashes(h100)w.png"}))
                    .append($("<span>", {id: "eye-altitude"})
                    .text("1,870 km"))
                ).appendTo(this.options.container);
        }
    })
});