$(function () {
    $.widget("earthserver.navbar", {
        options: {
        },
        _create: function () {
            this.element.attr({id: "service-navbar"}).addClass("navbar navbar-default navbar-fixed-top")
                .append($("<div>", {class: "container-fluid"})
                    .append($("<div>", {class: "navbar-header pull-left"})
                        .append($("<a>", {class: "navbar-brand earthserver-logo", href: "http://www.earthserver.eu"})
                            .append($("<img>", {class: "img-responsive", src: "images/logos/earthserver_logo.png", alt: "EarthServer Logo"}))
                        ).append($("<a>", {class: "navbar-brand service-logo", href: "#"})
                            .append($("<img>", {class: "img-responsive", src: "images/logos/service_logo_dummy.jpg", alt: "Service Logo"}))
                        )
                    ).append($("<div>", {class: "navbar-header pull-right"})
                    /*.append($("<div>", {/!*id: "navbar-collapse-1", *!/class: "navbar-right"})*/
                        .append($("<ul>", {class: "nav /*navbar-nav*/"})
                            .append($("<li>", {class: "pull-left"})
                                .append($("<a>", {class: "hidden-xs navbar-icon", href: "#" })
                                    .append($("<span>", {class: "hidden-xs navbar-home-link-arrow glyphicon" +
                                    " glyphicon-chevron-left"}))
                                    .append($("<span>", {class: "hidden-xs navbar-home-link-text"}).text("Back to home"))
                                ).append($("<a>", {class: "visible-xs navbar-icon", href: "#" })
                                    .append($("<span>", {class: "glyphicon glyphicon-home"}))
                                )
                            )
                            .append($("<li>", {class: "pull-left"})
                                .append($("<span>", {class: "divider-container", role: "separator"})
                                    .append($("<span>", {class: "divider"}))
                                )
                            ).append($("<li>", {class: "pull-right"})
                                .append($("<div>", {class: "hidden-xs navbar-icon", href: "#" }).text("Signed in" +
                                        " as ")
                                    .append($("<a>", {href: "#", class: ""}).text("me"))
                                ).append($("<a>", {class: "visible-xs navbar-icon", href: "#"})
                                    .append($("<span>", {class: "glyphicon glyphicon-user"}))
                                    .append($("<span>", {class: "navbar-user-arrow glyphicon" +
                                    " glyphicon-triangle-bottom"}))

                                )
                            )
                        )
                    )
                );
        }
    })
});