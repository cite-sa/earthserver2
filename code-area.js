$(function () {
    $.widget("earthserver.codeArea", {
        options: {

        },
        _create: function () {
            this.element.addClass("code-area");
            this.element.mCustomScrollbar({
                theme: "dark-thin"
            });
                /*.append($("<span>", {class: "line-nums"}))
                .append($("<div>", {class: "code wordwrap", "contenteditable": true}).text(" "));*/
            var height = this.element.height();
            var lines = Math.floor(height / 15);
            console.log(this.element)
            this.container = this.element.find(".mCSB_container");
            for (var i = 0; i < lines; i ++) {
                var line = this._createLine(i + 1);
            }
        },
        _createLine: function(lineNumber) {
            var self = this;
            return $("<div>", {class: "line"})
                .append($("<div>", {class: "line-num"}).text(lineNumber))
                .append($("<div>", {class: "line-text wordwrap", "contenteditable": true})
                    .keypress(function(e) {
                        if (e.which == 13) {
                            e.stopPropagation();
                            e.preventDefault();
                            var nextLine = $(this).parent().next();
                            if (nextLine.length > 0) {
                                nextLine.children(".line-text").focus();
                            } else {
                                nextLine = self._createLine(parseInt($(this).prev().text()) + 1);
                                nextLine.focus();
                            }
                        }
                    }).keydown(function(e) {
                        if (e.which == 38) {
                            e.stopPropagation();
                            e.preventDefault();
                            var prevLine = $(this).parent().prev();
                            if (prevLine.length > 0) {
                                prevLine.children(".line-text").focus();
                            }
                        } else if (e.which == 40) {
                            e.stopPropagation();
                            e.preventDefault();
                            var nextLine = $(this).parent().next();
                            if (nextLine.length > 0) {
                                nextLine.children(".line-text").focus();
                            }
                        }
                    })
                )
                .appendTo(this.container);
        }
    })
});