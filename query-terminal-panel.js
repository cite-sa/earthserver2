$(function () {
    $.widget("panel.queryTerminalPanel", $.dock.panel, {
        options: {
            panelType: "query-terminal",
            collapsible: true
        },
        _create: function () {
            this._super();
            var terminal = $("<div>").appendTo(this.panelBody);
            terminal.codeArea();

            this.addButton("run-query", "Run Query").addButton("reset-query", "Reset");
        }
    })
});