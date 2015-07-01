mojs = require('mo-js');

var cubeFallEffects = {
  init: function (proto) {
    // set prototype to cube object
    this.proto = proto;
    Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
  },
  vars: function () {
    this.burstOption = {
      parent:     this.sceneEl,
      x: '100%',  y: 600,
      shiftX:     {0: 300},
      shiftY:     {0: '-50'},
      type:       ['circle', 'rect', 'polygon'],
      fill:       ['white', 'yellow', 'pink'],
      delay:      (this.delay+265)*this.s,
      duration:   1400*this.s,
      radius:     {50: 150},
      degree:     200,
      count:      5,
      angle:      {0:'-25'},
      easing:     'expo.out',
      isSwirl:    true,
      randomRadius:     .7,
      randomAngle:      .1,
      swirlFrequency:   5,
      isRunLess:        true,
      opacity:          .75
    };
    var soundUrl   = './sounds/fall-kick-1.wav';
    this.fall1Sound = new Howl({ urls: [ soundUrl ] });
    this.fall2Sound = new Howl({ urls: [ soundUrl ], rate: .9, volume: .8 });
    this.fall3Sound = new Howl({ urls: [ soundUrl ], rate: .8, volume: .5 });
    this.fall4Sound = new Howl({ urls: [ soundUrl ], rate: .7, volume: .4 });
    this.fall5Sound = new Howl({ urls: [ soundUrl ], rate: .6, volume: .3 });
  },

  createTween: function () {
    this.cubeMainTween.add([  this.createFall1(), this.createFall2(),
                              this.createFall3(), this.createFall4(),
                              this.createFall5()
                            ] );
  },
  createFall1: function () {
    var tween  = new mojs.Tween;
    var burst2Option = {
        x: '-20%',   shiftX: {0: -300},
        angle:       {0:'25'},
        onStart: ()=> { this.fall1Sound.play(); }
      }
    mojs.h.extend(burst2Option, this.burstOption);
    var burst1 = new mojs.Burst(this.burstOption),
        burst2 = new mojs.Burst(burst2Option);
    tween.add(burst1.tween, burst2.tween);
    return tween;
  },
  createFall2: function () {
    var tween  = new mojs.Tween;
    var burst1Option = {delay: (this.delay+850)*this.s, radius: {30: 60}, count: 3}
    var burst2Option = {
          x: '-20%', shiftX: {0: -300}, angle: {0:'25'},
          onStart: ()=> { this.fall2Sound.play(); }
        }

    mojs.h.extend(burst1Option, this.burstOption);
    mojs.h.extend(burst2Option, burst1Option);
    var burst1 = new mojs.Burst(burst1Option),
        burst2 = new mojs.Burst(burst2Option);
    tween.add(burst1.tween, burst2.tween);
    return tween;
  },
  createFall3: function () {
    var tween  = new mojs.Tween;
    var burst1Option = {delay: (this.delay+1275)*this.s, radius: {15: 30}, count: 2, shiftX: {0: 150}, shiftY: {0: '-25'}}
    var burst2Option = {
            x: '-20%', shiftX: {0: -150}, angle: {0:'25'},
            onStart: () => { this.fall3Sound.play(); }
          }

    mojs.h.extend(burst1Option, this.burstOption);
    mojs.h.extend(burst2Option, burst1Option);
    var burst1 = new mojs.Burst(burst1Option),
        burst2 = new mojs.Burst(burst2Option);
    tween.add(burst1.tween, burst2.tween);
    return tween;
  },
  createFall4: function () {
    var tween  = new mojs.Tween;
    var burst1Option = {delay: (this.delay+1550)*this.s, radius: {5: 12}, count: 1, shiftX: {0: 80}, shiftY: {0: '-15'}}
    var burst2Option = {
            x: '-20%', shiftX: {0: -80}, angle: {0:'15'},
            onStart: () => { this.fall4Sound.play(); }
          }

    mojs.h.extend(burst1Option, this.burstOption);
    mojs.h.extend(burst2Option, burst1Option);
    var burst1 = new mojs.Burst(burst1Option),
        burst2 = new mojs.Burst(burst2Option);
    tween.add(burst1.tween, burst2.tween);
    return tween;
  },
  createFall5: function () {
    var tween  = new mojs.Tween;
    var burst1Option = {delay: (this.delay+1725)*this.s, radius: {5: 12}, count: 1, shiftX: {0: 60}, shiftY: {0: '-10'}, childOptions: {radius: {3:0}} }
    var burst2Option = {
            x: '-20%', shiftX: {0: -60}, angle: {0:'10'},
            onStart: () => { this.fall5Sound.play(); }
          }

    mojs.h.extend(burst1Option, this.burstOption);
    mojs.h.extend(burst2Option, burst1Option);
    var burst1 = new mojs.Burst(burst1Option),
        burst2 = new mojs.Burst(burst2Option);
    tween.add(burst1.tween, burst2.tween);
    return tween;
  }
}

module.exports = cubeFallEffects;