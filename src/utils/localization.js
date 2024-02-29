// src/utils/localization.js

function setLocalization(language, texts) {
    if (!window.localize) {
      window.localize = {}
    }
  
    window.localize.lang = texts
  }
  
  export default setLocalization
