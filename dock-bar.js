$(function () {
    $.widget("earthserver.dock", {
        options: {
            container: $("#service-container"),
            position: "",
            toggleIcon: undefined
        },
        _create: function () {
            this._initDock();
            this.element.mCustomScrollbar({
                /*axis: "yx",*/
                theme: "light-thin"
            });
        },
        _initDock: function () {
            var self = this;
            var rightDocks = $(".right-dock");

            this.dock = this.element.addClass("container-fluid dock " + this.options.position + "-dock")
                .appendTo(this.options.container);
            this.dockId = this.dock.uniqueId().attr("id");
            console.log(this.dockId)
            if (this.options.position == "left") {
                this.dock.addClass("extra-right-padding");
                this.dock.position({
                    my: "right top",
                    at: "left+40 top+70",
                    of: "#service-container"
                });
                $(window).resize(function() {
                    if (self.options.position == "left") {
                        if (self.dock.hasClass("open")) {
                            self.dock.position({
                                my: "left top",
                                at: "left top+70",
                                of: "#service-container"
                            });
                        } else {
                            self.dock.position({
                                my: "right top",
                                at: "left+40 top+70",
                                of: "#service-container"
                            });
                        }
                    }

                });
            }
            this.dockToggle = $("<div>", {class: "no-select dock-toggle "
                + this.options.position + "-dock-toggle"})
                .click(function () {
                    $(".right-dock").filter(function() {
                        return $(this).attr("id") != self.dockId;
                     }).addClass("bring-on-top");
                    var openDocks = $(".dock.open");

                    if (self.dock.hasClass("open")) {
                        self.close();
                    } else {
                        self.open();
                    }
                    if ($(window).width() < 992) {
                        openDocks.each(function (index, item) {
                            $.each($(this).data(), function(key, value) {
                                if (key.match("^dock-")) {
                                    $(item).data(key).close();
                                }

                            });
                        })
                    }
                })
                .appendTo(this.dock);
            this.dockToggleIconWrapper = $("<div>", {class: "dock-toggle-icon-wrapper"}).appendTo(this.dockToggle);

            this.dockToggle.css({"margin-top": (rightDocks.length * 40) + "px"});

            this.dock.bind($.support.transition.end,
                function() {
                    $(".bring-on-top")/*.filter(function() {
                        return $(this).attr("id") != self.dockId;
                    })*/.removeClass("bring-on-top");
                });
        },
        open: function() {
            if (this.options.position == "left") {
                if (!this.dock.hasClass("open")) {
                    this.dock.position({
                        my: "left top",
                        at: "left top+70",
                        of: "#service-container"
                    });
                    this.dock.addClass("open");
                    this.dock.removeClass("extra-right-padding");
                }
            } else {
                var dockOpen = this.dock.hasClass("open");
                if (!dockOpen) {
                    $("." + this.options.position + "-dock.open").removeClass("open");
                    this.dock.addClass("open");
                }
            }
        },
        close: function() {
            if (this.options.position == "left") {
                if (this.dock.hasClass("open")) {
                    this.dock.position({
                        my: "right top",
                        at: "left+40 top+70",
                        of: "#service-container"
                    });
                    this.dock.removeClass("open");
                    this.dock.addClass("extra-right-padding");
                }
            } else {
                this.dock.removeClass("open");
            }
        },
        addEmptyPanel: function (panelId) {
            return $("<div>").panel({
                dock: this.dock,
                panelId: panelId
            }).panel("instance");
        }
    })
});