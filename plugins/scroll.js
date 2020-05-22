import Vue from 'vue'

Vue.directive('scroll', {
  inserted: function (el, binding) {

    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }

    function throttled(delay, fn) {
      let lastCall = 0;
      return function (...args) {
          const now = (new Date).getTime();
          if (now - lastCall < delay) {
              return;
          }
          lastCall = now;
          return fn(...args);
      }
    }

    window.addEventListener('scroll', throttled(100, f))
  }
})
