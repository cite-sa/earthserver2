$(function () {
    $.widget("panel.queryTerminalPanel", $.dock.panel, {
        options: {
            panelType: "query-terminal"
        },
        _create: function () {
            this._super();
            this.panelBody
                .append(

                ).append(
                    $("<textarea>", {class: "code-area"})
                ).append(
                    $("<div>", {class: "panel-btn-container"})
                    .append(
                        $("<div>", {class: "btn btn-default panel-btn"})
                            .append("Run Query")
                    ).append(
                        $("<div>", {class: "btn btn-default panel-btn"})
                            .append("Reset")
                )
            );
        }
    })
});