IonicComponent = class IonicComponent extends BlazeComponent {
  onCreated() {
    super.onCreated();
  }
  attrs() {
  }

  get isAndroid() {
    return navigator.userAgent.indexOf('Android') > 0 || Session.get('platformOverride') === 'Android';
  }

  get isIOS() {
    return (!!navigator.userAgent.match(/iPad/i) || !!navigator.userAgent.match(/iPhone/i) || !!navigator.userAgent.match(/iPod/i)) || Session.get('platformOverride') === 'iOS';
  }
};

Platform = {
  isIOS: function () {
    return (!!navigator.userAgent.match(/iPad/i) || !!navigator.userAgent.match(/iPhone/i) || !!navigator.userAgent.match(/iPod/i))
           || Session.get('platformOverride') === 'iOS';
  },

  isAndroid: function () {
    return navigator.userAgent.indexOf('Android') > 0
           || Session.get('platformOverride') === 'Android';
  }
};
