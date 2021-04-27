import Component from '@glimmer/component';
import { set } from '@ember/object';
function loadScript(url) {
  return new Promise((resolve, reject) => {
    let $element = document.querySelector(`[src="${url}"]`);
    if ($element) {
      resolve();
    }

    let script = document.createElement('script');
    script.type = 'module';
    if (script.readyState) {
      // IE
      script.onreadystatechange = function() {
        if (
          script.readyState === 'loaded' || script.readyState === 'complete'
        ) {
          script.onreadystatechange = null;
          resolve();
        }
      };
    } else {
      // Others
      script.onload = function() {
        resolve();
      };
      script.onerror = function() {
        reject();
      };
    }

    script.src = url;
    document.body.appendChild(script);
  });
}

function loadCss(url) {
  return new Promise((resolve, reject) => {
    let $element = document.querySelector(`[href="${url}"]`);
    if ($element) {
      resolve();
    }

    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;

    link.onload = function() {
      resolve();
    };
    link.onerror = function() {
      reject();
    };

    document.body.appendChild(link);
  });
}

export default class AssetLoader extends Component {
  onInsertElement(element, [component]) {
    set(component, 'isAssetLoading', true);

    Promise.all([
      loadScript(`/preact-app/vendor.js`), // eslint-disable-line
      loadScript(`/preact-app/index.js`), // eslint-disable-line
      loadCss(`/preact-app/assets/index.css`)  // eslint-disable-line
    ]).then(() => {
      let $element = element.querySelector('#preact-app');
      window.renderPreactApp($element);
      set(component, 'isAssetLoading', true);
    });
  }
};
