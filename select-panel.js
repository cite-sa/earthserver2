$(function () {
    $.widget("panel.selectPanel", $.dock.panel, {
        options: {
            panelType: "select",
            buttonId: undefined,
            buttonContent: undefined
        },
        _create: function () {
            this._super();
            this.panelBody
                .append(
                    $("<div>", {class: "dropdown selector"})
                        .append(
                            $("<button>", {
                                id: this.options.buttonId,
                                class: "btn btn-default dropdown-toggle selector-btn",
                                type: "button",
                                "data-toggle": "dropdown",
                                "aria-haspopup": "true",
                                "aria-expanded": "false"
                            }).append($("<span>", {class: "selector-btn-wrapper"})
                                .append(
                                    $("<span>", {class: "selector-btn-content"}).append(this.options.buttonContent))
                                .append(
                                    $("<span>", {class: "glyphicon glyphicon-chevron-down"})
                                )
                            )
                        ).append(
                        $("<ul>", {class: "dropdown-menu", "aria-labelledby": "buttonId"})
                            .append($("<div>", {class: "triangle"}))
                    )
                ).appendTo(this.dock);

            /*if (options != undefined && options.isArray()) {
                var optionsContainer = select.find(".dropdown-menu");
                $.each(options, function (index, option) {
                    $("<li>").append(
                        $("<a>", {href: "#" + option.id})
                            .append(option.content)
                    ).appendTo($(button.siblings(".dropdown-menu")));
                });
            }*/

            return this;
        },
        addSelectOption: function (optionId, optionContent, callback) {
            var self = this;
            $("<li>").append(
                $("<a>", {href: "#" + optionId})
                    .append(optionContent)
                .click(function() {
                    var buttonContent = self.panelBody.find(".selector-btn-content");
                    buttonContent.empty();
                    buttonContent.append($(this).text());

                    if (callback != undefined) {
                        callback($(this));
                    }
                })).appendTo(this.panelBody.find(".dropdown-menu"));

            return this;
        },
        setButtonContent: function(content) {
            this.panelBody.find(".selector-btn-content").append(content);
        }
    })
});