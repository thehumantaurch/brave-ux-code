function validateLogin () {
  var username = document.loginForm.username
  var password = document.loginForm.password
  var pass_format = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (username.value == "") {
    username.style.border = "2px solid red"
    document.querySelector('#error').style.display = "block"
    return false;
  } else if (pass_format.test(password.value) != true) {
    password.style.border = "2px solid red"
    document.querySelector('#error').style.display = "block"
    return false;
  } else {
    document.querySelector('#error').style.display = "none"
    return true;
  }
}

function togglePass() {
  var passField = document.querySelector('#main > form > p:nth-child(2) > span > input')
  if (passField.type !== 'password') {
      passField.type = 'password'
  } else {
    passField.type = 'text'
  }
}

document.querySelector('#main > form > p:nth-child(2) > i').addEventListener('click', togglePass);


(function(window) {

  'use strict';

  /**
   * Extend Object helper function.
   */
  function extend(a, b) {
    for(var key in b) {
      if(b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }
    return a;
  }

  /**
   * Each helper function.
   */
  function each(collection, callback) {
    for (var i = 0; i < collection.length; i++) {
      var item = collection[i];
      callback(item);
    }
  }

  /**
   * Menu Constructor.
   */
  function Menu(options) {
    this.options = extend({}, this.options);
    extend(this.options, options);
    this._init();
  }

  /**
   * Menu Options.
   */
  Menu.prototype.options = {
    type: 'slide-right',             // The menu type
    menuOpenerClass: '#menu-click',   // The menu opener class names (i.e. the buttons)
  };

  /**
   * Initialise Menu.
   */
  Menu.prototype._init = function() {
    this.body = document.body;
    this.menu = document.querySelector('#menu--' + this.options.type);
    this.closeBtn = document.querySelector('#menu-click');
    this.menuOpeners = document.querySelectorAll(this.options.menuOpenerClass);
    this._initEvents();
  };

  /**
   * Initialise Menu Events.
   */
  Menu.prototype._initEvents = function() {
    // Event for clicks on the close button inside the menu.
    this.closeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      this.close();
    }.bind(this));
  };

  /**
   * Open Menu.
   */
  Menu.prototype.open = function() {
    this.body.classList.add('has-active-menu');
    this.menu.classList.add('is-active');
    this.disableMenuOpeners();
  };

  /**
   * Close Menu.
   */
  Menu.prototype.close = function() {
    this.body.classList.remove('has-active-menu');
    this.menu.classList.remove('is-active');
    this.enableMenuOpeners();
  };

  /**
   * Disable Menu Openers.
   */
  Menu.prototype.disableMenuOpeners = function() {
    each(this.menuOpeners, function(item) {
      item.disabled = true;
    });
  };

  /**
   * Enable Menu Openers.
   */
  Menu.prototype.enableMenuOpeners = function() {
    each(this.menuOpeners, function(item) {
      item.disabled = false;
    });
  };

  /**
   * Add to global namespace.
   */
  window.Menu = Menu;

})(window);