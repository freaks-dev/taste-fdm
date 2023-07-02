/*
 * Custom function used to generate the output of the override.css file
 */

var generateOverride = function (params) {
    let output = ''; 

       if(params.minFontSize !== '1' || params.maxFontSize !== '1.2') {
              output += `
              html {
                     font-size: ${params.minFontSize}rem;
              }

              @media screen and (min-width: 20rem) {
              html {
                     font-size: calc(${params.minFontSize}rem + (${params.maxFontSize} - ${params.minFontSize}) * ((100vw - 20rem) / 86));
              }
              }

              @media screen and (min-width: 106rem) {
              html {
                     font-size: ${params.maxFontSize}rem;
              }
              }`;
       }
              
       if (params.submenu === 'custom') {
              output += `
              .navbar .navbar__submenu {
                     width: ${params.submenuWidth}px;     
              }

              .navbar .navbar__menu--wide .has-submenu:active > .navbar__submenu,
              .navbar .navbar__menu--wide .has-submenu:focus > .navbar__submenu,
              .navbar .navbar__menu--wide .has-submenu:hover > .navbar__submenu  {
                     min-width: ${params.submenuWidth}px;
              }

              .navbar .has-submenu .has-submenu:active > .navbar__submenu,
              .navbar .has-submenu .has-submenu:focus > .navbar__submenu,
              .navbar .has-submenu .has-submenu:hover > .navbar__submenu {
                     left: ${params.submenuWidth}px;  
              }
              .navbar .has-submenu .has-submenu:active > .navbar__submenu.is-right-submenu,
              .navbar .has-submenu .has-submenu:focus > .navbar__submenu.is-right-submenu,
              .navbar .has-submenu .has-submenu:hover > .navbar__submenu.is-right-submenu {
                     left: -${params.submenuWidth}px; 
              }`;
       }      
        
       if(params.galleryItemGap !== '0.5rem') {
              output += `   
              .gallery__item {
                     padding: ${params.galleryItemGap}; 
              } 
              .gallery {   
                     margin: calc(1.5rem + 1vw) -${params.galleryItemGap}; 
              }`;    	 
       }
       
       if(params.galleryZoom !== true) {
              output += `   
              .pswp--zoom-allowed .pswp__img {
                 cursor: default !important  
              }`;    	 
       }
	
       if(params.lazyLoadEffect === 'fadein') {
              output += ` 
              img[loading] {
                     opacity: 0;
              }

              img.is-loaded {
                     opacity: 1;
                     transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1); 
              }`;    	 
       } 
       
       return output;
}

module.exports = generateOverride;
