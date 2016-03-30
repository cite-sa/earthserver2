$(function () {
    $.widget("earthserver.navbar", {
        options: {
        },
        _create: function () {
            this.element.attr({id: "service-navbar"}).addClass("navbar navbar-default navbar-fixed-top")
                .append($("<div>", {class: "container-fluid"})
                    .append($("<div>", {class: "navbar-header"})
                        .append($("<a>", {class: "navbar-brand earthserver-logo", href: "http://www.earthserver.eu"})
                            .append($("<img>", {class: "img-responsive", src: "images/logos/earthserver_logo.png", alt: "EarthServer Logo"}))
                        ).append($("<a>", {class: "navbar-brand service-logo", href: "#"})
                            .append($("<img>", {class: "img-responsive", src: "images/logos/service_logo_dummy.jpg", alt: "Service Logo"}))
                        )
                    ).append($("<div>", {id: "navbar-collapse-1", class: "collapse navbar-collapse navbar-right"})
                        .append($("<ul>", {class: "nav navbar-nav"})
                            .append($("<li>")
                                .append($("<a>", {class: "navbar-home-link", href: "#" })
                                    .append($("<span>", {class: "navbar-home-link-arrow glyphicon" +
                                    " glyphicon-chevron-left"}))
                                    .append($("<span>", {class: "navbar-home-link-text"}).text("Back to home"))
                                )
                            )
                            .append($("<li>")
                                .append($("<span>", {class: "divider-container", role: "separator"})
                                    .append($("<span>", {class: "divider"}))
                                )
                            ).append($("<li>")
                                .append($("<span>", {class: "navbar-sign-in", href: "#" }).text("Signed in" +
                                        " as ")
                                    .append($("<a>", {href: "#", class: ""}).text("me"))
                                )
                            )
                        )
                    )
                );
        }
    })
});