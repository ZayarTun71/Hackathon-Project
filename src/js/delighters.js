/*
  Delighters - Add CSS animations to delight users as they scroll down.
  (c) 2018 - Q42
  Written by Martin Kool
  https://github.com/Q42/delighters
*/
/* eslint-disable */
var Delighters = new function () { 
  var self = this;
  var dels = this.dels = [];

  // default options
  var options = {
    attribute: 'data-delighter',
    classNames: ['delighter', 'started', 'ended'],
    start: 0.75, // default start threshold
    end: 0.75, // default end threshold
    autoInit: true // initialize when DOMContentLoaded
  };

  document.addEventListener('DOMContentLoaded', function () {
    if (options.autoInit) init();
  });

  function config (opts) {
    for (var name in opts) options[name] = opts[name];
  }

  function init () {
    document.addEventListener('scroll', scroll);
    var els = document.querySelectorAll('[' + options.attribute + ']');

    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var def = el.getAttribute(options.attribute, 2);
      var pairs = def.split(';');
      var del = {};
      del.start = options.start;
      del.end = options.end;

      for (var j = 0; j < pairs.length; j++) {
        var pair = pairs[j].split(':');
        var name = pair[0];
        var val = isNaN(pair[1] * 1) ? pair[1] : pair[1] * 1;
        if (name) del[name] = (val === undefined) ? true : val;
      }

      del.el = el;
      del.id = dels.length;
      dels.push(del);
      el.classList.add(options.classNames[0]);
      if (del.debug) el.style.outline = 'solid red 4px';
    }
    scroll();
  }

  function scroll () {
    var viewportHeight = window.innerHeight;
    for (var i = 0; i < dels.length; i++) {
      var del = dels[i];
      var box = del.el.getBoundingClientRect();
      var factorStart = box.top / viewportHeight;
      var factorEnd = box.bottom / viewportHeight;

      if (del.debug) {
        if (factorStart >= 0 && factorStart <= 1) {
          if (!del.startLine) {
            del.startLine = document.createElement('div');
            document.body.appendChild(del.startLine);
            del.startLine.style = 'position:fixed;height:0;width:100%;border-bottom:dotted red 2px;top:' + (del.start * 100) + 'vh';
          }
        }
        if (((factorEnd < del.end) || (factorStart > 1)) && del.startLine) {
          del.startLine.parentNode.removeChild(del.startLine);
          delete del.startLine;
        }
      }

      if (factorStart < del.start && !del.started) {
        del.started = true;
        del.el.classList.add(options.classNames[1]);
      } else if (factorStart > del.start && del.started && options.canRewind) {
        del.started = false;
        del.el.classList.remove(options.classNames[1]);
      }

      if (factorEnd < del.end && !del.ended) {
        del.ended = true;
        del.el.classList.add(options.classNames[2]);
      } else if (factorEnd > del.end && del.ended && options.canRewind) {
        del.ended = false;
        del.el.classList.remove(options.classNames[2]);
      }
    }
  }

  self.init = init;
  self.config = config;
}();
