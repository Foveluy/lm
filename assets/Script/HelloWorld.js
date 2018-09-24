cc.Class({
  extends: cc.Component,

  properties: {
    label: {
      default: null,
      type: cc.Label
    },
    // defaults, set visually when attaching this script to the Canvas
    text: 'Hello, World!',
    login: {
      default: null,
      type: cc.Button
    },
    register: {
      default: null,
      type: cc.Button
    }
  },

  // use this for initialization
  onLoad: function() {
    this.login.node.on(cc.Node.EventType.TOUCH_END, function(event) {
      console.log('login');
    });
    this.register.node.on(cc.Node.EventType.TOUCH_END, function(event) {
      console.log('register');
    });
  },

  // called every frame
  update: function(dt) {}
});
