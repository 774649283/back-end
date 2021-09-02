'use strict';

class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  configWillLoad() {

  }

  async didReady() {
    // Application already ready
  }

  async serverDidReady() {
    // http / https server has started and begins accepting external requests
    // At this point you can get an instance of server from app.server
  }
}

module.exports = AppBootHook;
