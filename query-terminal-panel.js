$(function () {
    $.widget("panel.queryTerminalPanel", $.dock.panel, {
        options: {
            panelType: "query-terminal",
            collapsible: true
        },
        _create: function () {
            var self = this;
            this._super();
            this.terminal = $("<textarea>").appendTo(this.panelBody);
            this.terminal.codeArea();

            this.addButton("run-query", "Run Query").addButton("reset-query", "Reset");
            this.panel.find("#run-query").click(function() {
                console.log($("#code-area").codeArea("getValue"));
            });
            this.panel.find("#reset-query").click(function() {
                self.terminal.codeArea("reset");
            });
        }
    })
});