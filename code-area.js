$(function () {
    $.widget("earthserver.codeArea", {
        options: {
            content: undefined
        },
        _create: function () {
            this.element.attr("id", "code-area");
            this.codeArea = CodeMirror.fromTextArea(document.getElementById("code-area"), {
                lineNumbers: true,
                lineWrapping: true,
                scrollbarStyle: "simple",
                styleActiveLine: true
            });
            if (this.options.content != undefined) {
                this.setValue(this.options.content);
            }
        },
        getValue: function() {
            return this.codeArea.getValue();
        },
        setValue: function(content) {
            this.codeArea.setValue(content);
        }
    })
});