(function () {
  "use strict";

  /*------------------------------------------------------------------
  
    01. Custom easings
    02. Preloader
    03. Header
    04. Page reveals
    05. Custom cursor
    06. Elements reveal
    07. Main sliders
    08. Section sliders
    09. Contact form
    10. Isotope grids
    11. Lazy loading
    12. Parallax
    13. To top button
    14. Scroll down button
    15. Video
    16. Scroll to id
    17. PJAX
  
  -------------------------------------------------------------------*/

  // GSAP: turn off console warnings
  gsap.config({
    nullTargetWarn: false
  });

  window.App = {};

  App.config = {
    headroom: {
      enabled: true,
      options: {
        classes: {
          initial: "headroom",
          pinned: "is-pinned",
          unpinned: "is-unpinned",
          top: "is-top",
          notTop: "is-not-top",
          bottom: "is-bottom",
          notBottom: "is-not-bottom",
          frozen: "is-frozen",
        },
      }
    },
    ajax: {
      enabled: true,
    },
    cursorFollower: {
      enabled: true,
      disableBreakpoint: '992', // cursor will be disabled on this device width
    },
  }

  App.html = document.querySelector('html');
  App.body = document.querySelector('body');
  App.SMcontroller = new ScrollMagic.Controller();

  if (App.config.headroom.enabled) {
    App.headroom = new Headroom(document.querySelector(".js-header"), App.config.headroom.options);
  }

  window.onload = function () {

    customEasingsInit();
    pageRevealEffects();
    Preloader.init();

    if (App.config.headroom.enabled) {
      App.headroom.init();
    }



    if (App.config.ajax.enabled) {
      PJAX.init();
    }

    document.fonts.ready.then(function () {
      initComponents();
      initialReveal();
    });

  }


  // Reloads all scripts when navigating through pages
  function initComponents() {

    Header.init();
    lazyLoading();
    splitTextIntoLines();
    backButton();
    backButton2();
    uiScrollDown();
    buttonScrollDown();
    scrollToIdInit();
    parallaxInit();
    contactForm();


    // slide
    mainSlider1Init();
    mainSlider2Init();
    MainSlider3.init();
    sectionSlidersInit();
    sectionSlidersInit2();




    masonryFilterInit();
    masonryGridInit();

    feather.replace();
    videoBtn();
    a();
    StickScrollSection();

    //
    // your custom plugins init here
    //

  }


  /*--------------------------------------------------
    01. Custom easings
  ---------------------------------------------------*/

  function customEasingsInit() {
    CustomEase.create("quart.out", "0.25, 1, 0.5, 1");
    CustomEase.create("quart.inOut", "0.76, 0, 0.24, 1");
  }

  /*--------------------------------------------------
    02. Preloader
  ---------------------------------------------------*/

  const Preloader = (function () {

    const preloader = document.querySelector('.js-preloader');
    const bg = preloader.querySelector('.preloader__bg');
    const progress = preloader.querySelector('.preloader__progress');
    const progressInner = preloader.querySelector('.preloader__progress__inner');


    // STAGE 1   STAGE 1    STAGE 1    V STAGE 1    STAGE 1 
    function initial() {

      gsap.registerEffect({
        name: 'preloaderInitial',
        effect: (target, config) => {

          document.documentElement.classList.add('html-overflow-hidden');
          const tl = gsap.timeline();

          if (!document.body.classList.contains('preloader-visible')) {
            document.documentElement.classList.remove('html-overflow-hidden');
            return tl;
          }

          return tl
            .set(bg, {
              // translateX: "0%",
              opacity: 1,
              display: "block",
            })
            // .from(bg, {
            //   ease: 'quart.inOut',
            //   duration: 0.5,
            //   translateX: "-100%", 
            //   // background: "red",
            //   onComplete: () => {
            //   },
            // }, )
            .to(progress, {
              scale: 2, opacity: 1,
            })

            .fromTo(progressInner, {
              scaleX: 0,
            }, {
              scaleX: 1,
              ease: 'none',
              duration: 0.4,
              // delay: 0,
              onStart: () => {
                // bg.classList.add('origin-left');
              }
            })
            .to(progress, {
              duration: 0.7,
              ease: 'quart.inOut',
              opacity: 0,
              scale: 100,
            }, '>.2')
            .to(bg, {
              ease: 'quart.inOut',
              duration: 0.5,
              opacity: 0,
              display: "none",
              // translateX: "100%",
              onComplete: () => {
                document.documentElement.classList.remove('html-overflow-hidden');
              },
            }, '>-0.7')

        },
        extendTimeline: true,
      });

    }


    // STAGE 2   STAGE 2    STAGE 2    V STAGE 2    STAGE 2 
    function show() {

      gsap.registerEffect({
        name: 'preloaderShow',
        effect: (target, config) => {

          const tl = gsap.timeline();

          if (!preloader) {
            return tl;
          }

          tl
            .set(progress, {
              opacity: 0,
              scale: 100,
            })
            .set(progressInner, {
              scaleX: 0,
            })
            .set(bg, {
              // translateX: "0%",
              opacity: 1,
              display: "block",
            })

            .from(bg, {
              ease: 'quart.inOut',
              duration: 0.7,
              translateX: "-100%",
              // background: "blue",
              onStart: () => {
                // bg.classList.remove('origin-left');
                document.documentElement.classList.add('html-overflow-hidden');
              },
            }, '>0.2')
            .to(progress, {
              duration: 0.9,
              ease: 'quart.out',
              opacity: 1,
              scale: 2,
            },)
            .to(progressInner, {
              scaleX: 1,
              duration: 0.4,
              ease: 'none',
            }, '>-0.1')


          return tl;

        },
        extendTimeline: true,
      });

    }



    // STAGE 3   STAGE 3    STAGE 3    V STAGE 3    STAGE 3 
    function hide() {

      gsap.registerEffect({
        name: 'preloaderHide',
        effect: (target, config) => {

          const tl = gsap.timeline();

          return tl
            .to(progress, {
              // delay: 0.2,
              duration: 0.7,
              ease: 'quart.inOut',
              opacity: 0,
              scale: 100,
              // onStart: () => {
              //   bg.classList.add('origin-left');
              // }
            }, '>.4')
            .to(bg, {
              ease: 'quart.inOut',
              duration: 0.6,
              opacity: 0,
              display: "none",
              onComplete: () => {
                document.documentElement.classList.remove('html-overflow-hidden');
                document.documentElement.classList.remove('overflow-hidden');
                document.body.classList.remove('overflow-hidden');
              },
            }, '>-.7')

        },
        extendTimeline: true,
      });

    }

    function init() {

      if (!preloader) return;

      initial();
      show();
      hide();

    }

    return {
      init: init,
    }

  })();

  /*--------------------------------------------------
    03. Header
  ---------------------------------------------------*/

  const Header = (function () {

    let navInner;
    let navBg;
    let navList;
    let navListLinks;
    let navInfoItems;

    let navBtnOpen;
    let navBtnClose;
    let navBack;

    let menuDeepLevel;
    let timeline = gsap.timeline();

    function updateVars() {
      navInner = document.querySelector('.js-nav-inner');
      navBg = navInner.querySelector('.js-nav-bg');
      navList = navInner.querySelector('.js-navList');
      navListLinks = navInner.querySelectorAll('.js-navList > li > a');
      navInfoItems = navInner.querySelectorAll('.js-navInfo-item');

      navBtnOpen = document.querySelector('.js-nav-open');
      navBtnClose = document.querySelector('.js-nav-close');
      navBack = document.querySelector('.js-nav-back');

      menuDeepLevel = 0;
    }


    function init() {

      updateVars();
      menuListBindEvents();
      menuAnimBindEvents();
      classicMenuInit();
      headerSticky();

    }

    function deepLevelCheck(level) {

      if (level) {
        gsap.to(navBack, {
          ease: "quart.inOut",
          duration: 0.6,
          y: '0px',
          opacity: 1,
          onStart: () => {
            navBack.classList.remove('pointer-events-none');
          },
        })
      } else {
        gsap.to(navBack, {
          ease: "quart.inOut",
          duration: 0.6,
          opacity: 0,
          onStart: () => {
            navBack.classList.add('pointer-events-none');
          },
        })
      }

    }

    function menuListBindEvents() {

      const listItems = document.querySelectorAll('.js-navList .menu-item-has-children');

      if (!listItems.length) return;

      navBack.addEventListener('click', () => {
        const visibleList = navList.querySelector('ul.is-visible');
        const parentList = visibleList.parentElement.parentElement;

        menuDeepLevel--;

        deepLevelCheck(menuDeepLevel);
        menuListStepAnimate(visibleList, parentList);
      });

      listItems.forEach(el => {
        const parentLink = el.querySelector('li > a');
        parentLink.removeAttribute('href');

        parentLink.addEventListener('click', () => {
          const parent = el.parentElement;
          const subnavList = el.lastElementChild;

          menuDeepLevel++;

          deepLevelCheck(menuDeepLevel);
          menuListStepAnimate(parent, subnavList);
        });
      });

    }

    function menuListStepAnimate(hideList, showList) {

      const navBtnClose = document.querySelector('.js-nav-close');

      let hideListItems = hideList.children;
      hideListItems = Array.from(hideListItems);
      const hideListLinks = hideListItems.map(item => item.querySelector('li > a'));

      let showListItems = showList.children;
      showListItems = Array.from(showListItems);
      const showListLinks = showListItems.map(item => item.querySelector('li > a'));

      timeline
        .clear()
        .to(hideListLinks, {
          ease: 'quart.out',
          stagger: -0.04,
          duration: 1.0,
          y: '100%',
          onStart: () => {
            showList.classList.add('is-visible');
            hideList.classList.remove('is-visible');
            navBtnClose.classList.add('pointer-events-none');
          },
        })
        .to(showListLinks, {
          ease: 'quart.out',
          stagger: 0.08,
          duration: 1.2,
          y: '0%',
          onComplete: () => {
            navBtnClose.classList.remove('pointer-events-none');
          },
        }, '>-0.6')

    }

    function menuAnimBindEvents() {

      if (!navBtnOpen) return;

      navBtnOpen.addEventListener('click', () => {
        if (App.config.headroom.enabled) {
          App.headroom.freeze();
        }

        App.html.classList.add('html-overflow-hidden');
        showMenu();
      });

      navBtnClose.addEventListener('click', () => {
        if (App.config.headroom.enabled) {
          App.headroom.unfreeze();
        }

        App.html.classList.remove('html-overflow-hidden');
        hideMenu();
      })

    }


    // Open menu
    function showMenu() {

      navInner.classList.add('is-active');

      gsap.timeline()
        .set(navListLinks, { opacity: 1, })
        .set(navBack, { opacity: 0, })

        .fromTo(navBg, {
          scaleY: 0,
          transformOrigin: "top"
        }, {
          scaleY: 1,
          duration: 0.8,
          ease: "quart.inOut",
        })
        .fromTo(navBtnClose, {
          y: '-16px',
          x: 0,
          opacity: 0,
        }, {
          ease: "quart.out",
          duration: 0.8,
          y: '0px',
          opacity: 1,
        }, '>-0.2')
        .fromTo(navListLinks, {
          y: '100%',
        }, {
          ease: 'quart.out',
          stagger: 0.2,
          duration: 0.7,
          y: '0%',
        }, '>-0.7')
        .fromTo(navInfoItems, {
          opacity: 0,
          y: '90px',
        }, {
          ease: "quart.out",
          stagger: 0.2,
          duration: 0.7,
          opacity: 1,
          y: '0px',
          onComplete: () => {
            navList.classList.add('is-visible');
            navBtnClose.classList.remove('pointer-events-none');
          },
        }, '<')

    }

    function hideMenu() {

      const navVisibleList = navInner.querySelector('.is-visible');
      const navActiveListLinks = navInner.querySelectorAll('.is-visible > li > a');
      menuDeepLevel = 0;

      gsap.timeline()

        .to([navBtnClose, navBack], {
          ease: "quart.out",
          duration: 0.6,
          opacity: 0,
          y: '-16px',
          onStart: () => {
            navBtnClose.classList.add('pointer-events-none');
            navVisibleList.classList.remove('is-visible');
            navBg.classList.add('origin-top');
          },
        })
        .to(navActiveListLinks, {
          ease: "quart.out",
          duration: 0.8,
          y: '-100%',
        }, '>-0.2')
        .to(navInfoItems, {
          opacity: 0,
          y: '-34px',
          ease: "quart.out",
          duration: 0.8,
        }, '<')

        .to(navBg, {
          ease: "quart.inOut",
          duration: 1,
          transformOrigin: 'right',
          scaleY: 0,
          onComplete: () => {
            navBtnOpen.classList.remove('pointer-events-none');
            navBg.classList.remove('origin-top');
            navInner.classList.remove('is-active');
          },
        }, '<0.1')

    }

    function classicMenuInit() {

      const target = document.querySelectorAll('.js-navClassic-list .menu-item-has-children');

      if (!target.length) return;

      const header = document.querySelector('.header');
      let dropDownTheme;

      if (header.classList.contains('js-header-dark')) {
        dropDownTheme = 'dark';
      } else {
        dropDownTheme = 'light';
      }

      target.forEach(el => {
        let subnav = el.children;
        let where = 'bottom';
        subnav = subnav[subnav.length - 1];

        if (
          el.closest(".menu-item-has-children") &&
          el.closest(".subnav-list")
        ) {
          where = 'right';
        }

        tippy(el, {
          interactive: true,
          content: subnav,
          allowHTML: true,
          placement: where,
          offset: [40, 0],
          delay: [null, 200],

          theme: dropDownTheme,
          animation: 'shift',

          popperOptions: {
            modifiers: [
              {
                name: 'flip',
                options: {
                  fallbackPlacements: ['left-start'],
                },
              },
              {
                name: 'preventOverflow',
                options: {
                  altAxis: true,
                },
              },
            ],
          },
        });
      });

    }

    function headerSticky() {

      const header = document.querySelector('.js-header');

      if (!header) return;

      new ScrollMagic.Scene({
        offset: '2px',
      })
        .setClassToggle(header, 'is-sticky')
        .addTo(App.SMcontroller);

    }


    return {
      init: init,
    }

  })();

  /*--------------------------------------------------
    04. Page reveals
  ---------------------------------------------------*/

  function pageRevealEffects() {

    // masthead shapes
    gsap.registerEffect({
      name: 'mastheadShapes',
      effect: (target, config) => {

        return gsap.fromTo(target, {
          opacity: 0,
          y: config.y,
        }, {
          ease: config.easing,
          duration: config.duration,
          opacity: 1,
          y: '0%',
        })

      },
      extendTimeline: true,
      defaults: {
        easing: 'quart.out',
        duration: 3.0,
        y: '90%',
      },
    });

    // header, menu and ui elements
    gsap.registerEffect({
      name: 'uiElementsAnimate',
      effect: (target, config) => {

        let headerLogo;
        let headerMenu;
        let classicMenu;
        let uiElements;

        if (document.querySelector('.js-header-logo')) {
          headerLogo = document.querySelector('.js-header-logo');
        }
        if (document.querySelector('.js-header-menu')) {
          headerMenu = document.querySelector('.js-header-menu');
        }
        if (document.querySelector('.js-navClassic-list > li > a')) {
          classicMenu = document.querySelectorAll('.js-navClassic-list > li > a');
        }
        if (document.querySelector('.js-ui')) {
          uiElements = document.querySelectorAll('.js-ui');
        }

        if (!headerLogo && !headerMenu && !uiElements && !classicMenu) return;

        return gsap.fromTo([
          headerLogo,
          headerMenu,
          classicMenu,
          uiElements,
        ], {
          y: config.y,
          opacity: 0,
          y: '-100px',

        }, {
          ease: config.easing,
          duration: config.duration,
          y: '0px',
          opacity: 1,
        })

      },
      extendTimeline: true,
      defaults: {
        easing: 'quart.out',
        // delay: 1,
        duration: 1,
      },
    });

    // masthead background
    gsap.registerEffect({
      name: 'mastheadBackground',
      effect: (target, config) => {

        return gsap.fromTo(target, {
          scale: 1.4,
          opacity: 0,
        }, {
          ease: 'quart.inOut',
          duration: 1.4,
          scale: 1,
          opacity: 1,
        })

      },
      extendTimeline: true,
    });

  }


  const PageReveal = (function () {

    function mastheadType_1(tl) {

      if (!document.querySelector('.js-masthead-type-1')) {
        return tl;
      }

      const masthead = document.querySelector('.js-masthead-type-1');
      let title = false;
      let text = masthead.querySelector('.js-text');
      let button = masthead.querySelector('.js-button');

      if (masthead.querySelector('.js-title')) {
        title = masthead.querySelectorAll('.js-title .split__line');
      }


      const splitTitle = {
        stagger: 0.2,
        duration: 1,
        ease: 'quart.out',
        y: '0%',
      };

      const textButton = {
        stagger: 0.2,
        duration: 1,
        ease: 'quart.out',
        y: '0%',
        opacity: 1,
      };


      gsap.set([text, button], {
        y: '35px',
        opacity: 0,
      })


      if (masthead.classList.contains('js-shapes')) {
        const shapes = masthead.querySelectorAll('.js-shape');

        tl
          .mastheadShapes(shapes, '>-0.7')
          .to(title, splitTitle, '>-2.3')
          .to([text, button], textButton, '>-0.8')
          .uiElementsAnimate(null, '>-0.8')
      }

      if (masthead.classList.contains('js-bg')) {
        const bgItem = masthead.querySelector('.js-bg-item');

        tl
          .mastheadBackground(bgItem, '>-0.0')
          .to(title, splitTitle, '>-0.5')
          .to([text, button], textButton, '>-0.8')
          .uiElementsAnimate(null, '>-0.8')
      }

    }

    function mastheadType_2(tl) {

      if (!document.querySelector('.js-masthead-type-2')) {
        return tl;
      }

      const masthead = document.querySelector('.js-masthead-type-2');
      const shapes = masthead.querySelectorAll('.js-shape');
      const bgItem = masthead.querySelector('.js-bg-item');
      const title = masthead.querySelector('.js-title');
      const text = masthead.querySelector('.js-text');
      const button = masthead.querySelector('.js-button');

      let delay = '>-0.1';

      if (shapes.length) {
        tl.mastheadShapes(shapes, '>-0.2')
        tl.uiElementsAnimate(null, '>-2.5')
        delay = '>-0.9';
      } else if (bgItem) {
        tl.mastheadBackground(bgItem, '>-0.8')
        tl.uiElementsAnimate(null, '>-0.1')
        delay = '>-0.1';
      }

      tl
        .fromTo(title.querySelectorAll('.split__line'), {
          y: '100%',
        }, {
          stagger: 0.12,
          duration: 1.4,
          ease: 'quart.out',
          y: '0%',
        }, delay)
        .fromTo(text.querySelectorAll('.split__line'), {
          y: '100%',
        }, {
          stagger: 0.08,
          duration: 1.2,
          ease: 'quart.out',
          y: '0%',
        }, '>-0.8')
        .fromTo(button, {
          y: '100%',
        }, {
          ease: 'quart.out',
          duration: 1.2,
          y: '0%',
        }, '>-0.8')

    }

    function mastheadType_3(tl) {

      if (!document.querySelector('.js-masthead-type-3')) {
        return tl;
      }

      const masthead = document.querySelector('.js-masthead-type-3');
      let subtitle = false;
      let title = false;
      let text = false;
      let button = masthead.querySelector('.js-button');

      if (masthead.querySelector('.js-subtitle')) {
        subtitle = masthead.querySelectorAll('.js-subtitle .split__line');
      }

      if (masthead.querySelector('.js-title')) {
        title = masthead.querySelectorAll('.js-title .split__line');
      }

      if (masthead.querySelector('.js-text')) {
        text = masthead.querySelectorAll('.js-text .split__line');
      }


      const splitLines = {
        stagger: 0.1,
        duration: 1.2,
        ease: 'quart.out',
        y: '0%',
      };

      const slideButton = {
        ease: 'quart.out',
        duration: 1.2,
        y: '0%',
      };

      gsap.set(button, { y: '100%' });


      if (masthead.classList.contains('js-shapes')) {
        const shapes = masthead.querySelectorAll('.js-shape');

        tl
          .mastheadShapes(shapes, '>-0.7')
          .to(subtitle, splitLines, '>-2.0')
          .to(title, splitLines, '>-0.9')
          .to(text, splitLines, '>-0.9')
          .to(button, slideButton, '>-0.9')
          .uiElementsAnimate(null, '>-0.9')
      }

      if (masthead.classList.contains('js-bg')) {
        const bgItem = masthead.querySelector('.js-bg-item');

        tl
          .mastheadBackground(bgItem, '>-0.0')
          .to(subtitle, splitLines, '>-0.5')
          .to(title, splitLines, '>-0.9')
          .to(text, splitLines, '>-0.9')
          .to(button, slideButton, '>-0.9')
          .uiElementsAnimate(null, '>-0.9')
      }

    }

    function mastheadType_4(tl) {

      if (!document.querySelector('.js-masthead-type-4')) {
        return tl;
      }

      const masthead = document.querySelector('.js-masthead-type-4');
      let image = masthead.querySelector('.js-image');
      let imageCover = masthead.querySelector('.js-image-cover');
      let subtitle = false;
      let title = false;
      let text = false;
      let button = masthead.querySelector('.js-button');

      if (masthead.querySelector('.js-subtitle')) {
        subtitle = masthead.querySelectorAll('.js-subtitle .split__line');
      }

      if (masthead.querySelector('.js-title')) {
        title = masthead.querySelectorAll('.js-title .split__line');
      }

      if (masthead.querySelector('.js-text')) {
        text = masthead.querySelectorAll('.js-text .split__line');
      }


      gsap.set(image, { scale: 0.5, opacity: 0 });
      gsap.set(button, { y: '101%' });

      tl
        .uiElementsAnimate(null, '>-0.2')
        .to(imageCover, {
          duration: 0.1,
          ease: 'quart.inOut',
          scaleX: 0,
        }, '>-0.1')

        .to(subtitle, {
          stagger: 0.1,
          duration: 1.0,
          ease: 'quart.out',
          y: '0%',
        }, '>-0.5')
        .to(title, {
          stagger: 0.1,
          duration: 1.0,
          ease: 'quart.out',
          y: '0%',
        }, '>-0.8')
        .to(text, {
          stagger: 0.1,
          duration: 1.0,
          ease: 'quart.out',
          y: '0%',
        }, '>-0.8')
        .to(button, {
          ease: 'quart.out',
          duration: 1,
          y: '0%',
        }, '>-0.8')
        .to(image, {
          duration: 1,
          ease: 'quart.inOut',
          scale: 1,
          opacity: 1,
        }, '>-1.8')



    }


    function mastheadPortfolioWorkType_1(tl) {

      if (!document.querySelector('.js-masthead-type-work-1')) {
        return tl;
      }

      const masthead = document.querySelector('.js-masthead-type-work-1');
      const subtitle = masthead.querySelectorAll('.js-subtitle .split__line');
      const title = masthead.querySelectorAll('.js-title .split__line');
      const infoItems = masthead.querySelectorAll('.js-info-item .split__line');


      const splitBase = {
        stagger: 0.1,
        duration: 1,
        ease: 'quart.out',
        y: '0%',
      };

      const splitInfoItems = {
        stagger: 0.08,
        duration: 0.8,
        ease: 'quart.out',
        opacity: 1,
        y: '0px',
      };


      gsap.set(infoItems, { opacity: 0, y: '34px' });


      if (masthead.classList.contains('js-shapes')) {
        const shapes = masthead.querySelectorAll('.js-shape');
        const image = masthead.querySelector('.js-image');

        gsap.set(image, { opacity: 0, y: '34px' });

        tl
          .uiElementsAnimate(null, '>-0.4')
          .mastheadShapes(shapes, '<-0.3')
          .to(subtitle, splitBase, '>-2.3')
          .to(title, splitBase, '>-0.8')
          .to(infoItems, splitInfoItems, '>-0.8')
          .to(image, {
            duration: 1,
            ease: 'quart.out',
            opacity: 1,
            y: '0px',
          }, '>-0.5')
      }

      if (masthead.classList.contains('js-bg')) {
        const image = masthead.querySelector('.js-image');

        gsap.set(image, { opacity: 0, scale: 1.3 });

        tl
          .to(image, {
            duration: 1.0,
            ease: 'quart.inOut',
            opacity: 1,
            scale: 1,
          }, '>-0.2')
        // .uiElementsAnimate(null, '>-0.4')
        // .to(subtitle, splitBase, '>-0.6')
        // .to(title, splitBase, '>-0.8')
        // .to(infoItems, splitInfoItems, '>-0.8')

      }

    }

    function mastheadBlogArticle(tl) {

      if (!document.querySelector('.js-masthead-blog-article')) {
        return tl;
      }

      const masthead = document.querySelector('.js-masthead-blog-article');
      const info = masthead.querySelector('.js-info');
      const title = masthead.querySelector('.js-title');

      tl
        .fromTo(info, {
          opacity: 0,
          y: '34px',
        }, {
          duration: 1,
          ease: 'quart.out',
          opacity: 1,
          y: '0px',
        }, '>-0.2')
        .to(title.querySelectorAll('.split__line'), {
          stagger: 0.1,
          duration: 1.0,
          ease: 'quart.out',
          y: '0%',
        }, '>-0.7')

    }


    function sliderMainType_1(tl) {

      if (!document.querySelector('.js-sliderMain-type-1')) {
        return tl;
      }

      const slider = document.querySelector('.js-sliderMain-type-1');
      const image = slider.querySelector('.js-image');
      const bgTitle = slider.querySelector('.sliderMain__bgTitle');
      const subtitle = slider.querySelector('.sliderMain__subtitle');
      const title = slider.querySelector('.sliderMain__title');
      const button = slider.querySelector('.sliderMain__button');

      tl
        .fromTo(image, {
          scale: 1.6,
          opacity: 0,
        }, {
          duration: 0.8,
          ease: 'quart.inOut',
          scale: 1,
          opacity: 1,
        }, '>-0.1')

        .fromTo([subtitle, title, button], {
          opacity: 0,
          y: '35px',
        }, {
          stagger: 0.1,
          duration: 0.8,
          ease: 'quart.out',
          opacity: 1,
          y: '0px',
        }, '>-0.2')
        .fromTo(bgTitle, {
          opacity: 0,
          x: '35px',
        }, {
          duration: 0.8,
          ease: 'quart.out',
          opacity: 1,
          x: '0px',
        }, '>-0.6')

        .uiElementsAnimate(null, '>-0.5')

    }

    function sliderMainType_2(tl) {

      if (!document.querySelector('.js-sliderMain-type-2')) {
        return tl;
      }

      const slider = document.querySelector('.js-sliderMain-type-2');
      const slideContent = slider.querySelector('[data-swiper-slide-index="0"]');
      let img = slider.querySelectorAll('.js-slider-img')[0];
      let title = slider.querySelectorAll('.js-slider-title');
      let subtitle = slideContent.querySelector('.js-slider-subtitle');

      gsap.set([title, subtitle], { opacity: 0, y: '40px', })

      tl
        .add(() => {
          img.classList.add('is-active');
        }, '>-0.0')
        .uiElementsAnimate(null, '>+0.6')
        .to(title, {
          ease: 'quart.inOut',
          duration: 0.8,
          opacity: 1,
          y: '0px',
        }, '>-0.6')
        .to(subtitle, {
          duration: 0.8,
          ease: 'quart.inOut',
          opacity: 1,
          y: '0px',
        }, '>-0.7')

    }

    function sliderMainType_3(tl) {

      if (!document.querySelector('.js-sliderMain-type-3')) {
        return tl;
      }

      const slider = document.querySelector('.js-sliderMain-type-3');
      const image = slider.querySelector('.js-image');
      const imageCover = slider.querySelector('.js-image-cover');
      const slideContent = slider.querySelector('.slider__content');
      const subtitle = slideContent.querySelector('.js-subtitle');
      const title = slideContent.querySelector('.js-title');
      const button = slideContent.querySelector('.js-button');

      gsap.set(image, { scale: 2.2, })
      gsap.set(button, { y: '100%', })

      tl
        .to(imageCover, {
          duration: 0.8,
          ease: 'quart.inOut',
          scaleX: 0,
        }, '>-0.1')
        .to(image, {
          duration: 0.8,
          ease: 'quart.inOut',
          scale: 1,
        }, '>-0.8')

        .to(subtitle.querySelectorAll('.split__line'), {
          duration: 1,
          ease: 'quart.inOut',
          y: '0%',
        }, '>-0.5')
        .to(title.querySelectorAll('.split__line'), {
          stagger: 0.08,
          duration: 1,
          ease: 'quart.inOut',
          y: '0%',
        }, '>-0.9')
        .to(button, {
          duration: 1,
          ease: 'quart.inOut',
          y: '0%',
        }, '>-0.9')

        .uiElementsAnimate(null, '>-0.9')

    }


    function base(tl) {

      if (
        document.querySelector('.js-page-header') ||
        document.querySelector('.js-masthead-type-1') ||
        document.querySelector('.js-masthead-type-2') ||
        document.querySelector('.js-masthead-type-3') ||
        document.querySelector('.js-masthead-type-4') ||
        document.querySelector('.js-masthead-type-work-1') ||
        document.querySelector('.js-sliderMain-type-1') ||
        document.querySelector('.js-sliderMain-type-2') ||
        document.querySelector('.js-sliderMain-type-3') ||
        document.querySelector('.js-masthead-blog-article')
      ) {
        return tl;
      }

      tl.add(() => {
        RevealAnim.init();
      })

    }

    function init(tl) {

      if (document.querySelector('.page-reveal-off')) {
        return tl;
      }

      if (document.querySelector('.js-slider-full-page')) {
        App.html.classList.add('full-page-slider');
      } else {
        App.html.classList.remove('full-page-slider');
      }

      if (
        document.querySelector('.js-page-header') ||
        document.querySelector('.js-masthead-type-1') ||
        document.querySelector('.js-masthead-type-2') ||
        document.querySelector('.js-masthead-type-3') ||
        document.querySelector('.js-masthead-type-4') ||
        document.querySelector('.js-masthead-type-work-1') ||
        document.querySelector('.js-sliderMain-type-1') ||
        document.querySelector('.js-sliderMain-type-2') ||
        document.querySelector('.js-sliderMain-type-3') ||
        document.querySelector('.js-masthead-blog-article')
      ) {
        RevealAnim.init();
      }



      mastheadType_1(tl);
      mastheadType_2(tl);
      mastheadType_3(tl);
      mastheadType_4(tl);
      mastheadPortfolioWorkType_1(tl);
      sliderMainType_1(tl);
      sliderMainType_2(tl);
      sliderMainType_3(tl);
      mastheadBlogArticle(tl);
      base(tl);

      tl.add(() => {
        if (MainSlider3.isActive()) {
          MainSlider3.autoplayStart();
        }
      })

      return tl;

    }

    return {
      init: init,
    }

  })();


  function initialReveal() {
    let tl = gsap.timeline();
    tl.preloaderInitial();
    tl = PageReveal.init(tl);
  }

  /*--------------------------------------------------
    05. Custom cursor
  ---------------------------------------------------*/

  const Cursor = (function () {

    const cursor = document.querySelector(".js-cursor");
    let follower;
    let label;
    let icon;

    let clientX;
    let clientY;
    let cursorWidth;
    let cursorHeight;
    let cursorTriggers;
    let state;

    function variables() {

      follower = cursor.querySelector(".js-follower");
      label = cursor.querySelector(".js-label");
      icon = cursor.querySelector(".js-icon");

      clientX = -100;
      clientY = -100;
      cursorWidth = cursor.offsetWidth / 2;
      cursorHeight = cursor.offsetHeight / 2;
      cursorTriggers;
      state = false;

    }

    function init() {

      if (!cursor) return;

      variables();
      state = true;
      cursor.classList.add('is-enabled');

      document.addEventListener("mousedown", e => {
        cursor.classList.add('is-mouse-down');
      });

      document.addEventListener("mouseup", e => {
        cursor.classList.remove('is-mouse-down');
      });

      document.addEventListener("mousemove", (event) => {
        clientX = event.clientX;
        clientY = event.clientY;
      });

      const render = () => {
        cursor.style.transform = `translate(${clientX - cursorWidth}px, ${clientY - cursorHeight}px)`;
        requestAnimationFrame(render);
      };

      requestAnimationFrame(render);

      update();
      breakpoint();

    }

    function enterHandler({ target }) {

      cursor.classList.add('is-active');

      if (target.getAttribute('data-cursor-label')) {
        App.body.classList.add('is-cursor-active');
        cursor.classList.add('has-label');
        label.innerHTML = target.getAttribute('data-cursor-label');
      }

      if (target.getAttribute('data-cursor-icon')) {
        App.body.classList.add('is-cursor-active');
        cursor.classList.add('has-icon');
        const iconAttr = target.getAttribute('data-cursor-icon');
        icon.innerHTML = feather.icons[iconAttr].toSvg();
      }

    }

    function leaveHandler({ target }) {

      App.body.classList.remove('is-cursor-active');
      cursor.classList.remove('is-active');
      cursor.classList.remove('has-label');
      cursor.classList.remove('has-icon');
      label.innerHTML = '';
      icon.innerHTML = '';

    }

    function update() {

      if (!cursor) return;

      cursorTriggers = document.querySelectorAll([
        "button",
        "a",
        "input",
        "[data-cursor]",
        "[data-cursor-label]",
        "[data-cursor-icon]",
        "textarea"
      ]);

      cursorTriggers.forEach(el => {
        el.addEventListener("mouseenter", enterHandler);
        el.addEventListener("mouseleave", leaveHandler);
      });

    }

    function clear() {

      if (!cursor) return;

      cursorTriggers.forEach(el => {
        el.removeEventListener("mouseenter", enterHandler);
        el.removeEventListener("mouseleave", leaveHandler);
      });

    }

    function hide() {

      if (!cursor) return;
      cursor.classList.add('is-hidden');

    }

    function show() {

      if (!cursor) return;
      cursor.classList.remove('is-hidden');

    }

    function breakpoint() {

      if (!state) return;
      if (!App.config.cursorFollower.disableBreakpoint) return;

      let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

      if (width < App.config.cursorFollower.disableBreakpoint) {
        state = false;
        cursor.classList.remove('is-enabled');
        clear();
      } else {
        state = true;
        cursor.classList.add('is-enabled');
        update();
      }

      window.addEventListener('resize', () => {
        let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

        if (width < App.config.cursorFollower.disableBreakpoint) {
          state = false;
          cursor.classList.remove('is-enabled');
          clear();
        } else {
          state = true;
          cursor.classList.add('is-enabled');
          update();
        }
      })

    }

    return {
      init: init,
      update: update,
      clear: clear,
      hide: hide,
      show: show,
    };

  })();

  /*--------------------------------------------------
    06. Elements reveal
  ---------------------------------------------------*/

  const RevealAnim = (function () {

    function single() {

      const animationTarget = document.querySelectorAll('[data-anim]');

      if (!animationTarget.length) {
        return;
      }

      for (let i = 0; i < animationTarget.length; i++) {
        const el = animationTarget[i];

        new ScrollMagic.Scene({
          offset: '160px',
          triggerElement: el,
          triggerHook: "onEnter",
          reverse: false,
        })
          .on('enter', function (event) {
            animateElement(el);
          })
          .addTo(App.SMcontroller)
      }

    }

    function container() {

      const animationContainer = document.querySelectorAll('[data-anim-wrap]');

      if (!animationContainer.length) {
        return;
      }

      for (let i = 0; i < animationContainer.length; i++) {
        const el = animationContainer[i];

        new ScrollMagic.Scene({
          offset: '160px',
          triggerElement: el,
          triggerHook: "onEnter",
          reverse: false,
        })
          .on('enter', function (event) {

            const animChilds = el.querySelectorAll('[data-anim-child]');
            el.classList.add('animated');
            animChilds.forEach(el => animateElement(el));

          })
          .addTo(App.SMcontroller)
      }

    }


    function animateElement(target) {

      let attrVal;
      let animDelay;
      let attrDelayPart;

      if (target.getAttribute('data-anim')) {
        attrVal = target.getAttribute('data-anim');
      } else {
        attrVal = target.getAttribute('data-anim-child');
      }

      if (attrVal.includes('delay-')) {
        attrDelayPart = attrVal.split(' ').pop();
        animDelay = attrDelayPart.substr(attrDelayPart.indexOf('-') + 1) / 10;
      }

      if (attrVal.includes('counter')) {
        counter(target, animDelay);
      }
      else if (attrVal.includes('line-chart')) {
        lineChart(target, animDelay);
      }
      else if (attrVal.includes('pie-chart')) {
        pieChart(target, animDelay);
      }
      else if (attrVal.includes('split-lines')) {
        splitLines(target, animDelay);
      }
      else {
        target.classList.add('is-in-view');
      }

    }

    function pieChart(target, animDelay = 0) {

      const counterVal = target.getAttribute('data-percent');
      const chartBar = target.querySelector('.pieChart-bar');

      if (counterVal < 0) { counterVal = 0; }
      if (counterVal > 100) { counterVal = 100; }

      gsap.fromTo(chartBar, {
        drawSVG: `0%`,
      }, {
        delay: 0.3 + animDelay,
        duration: 1.4,
        ease: 'power3.inOut',
        drawSVG: `${counterVal}%`,

        onStart: () => {
          chartBar.classList.remove('bar-stroke-hidden');
        }
      });


      let object = { count: 0 };
      const barPercent = target.querySelector('.pieChart-percent');

      gsap.to(object, {
        count: counterVal,
        delay: 0.45 + animDelay,
        duration: 1,
        ease: 'power3.inOut',

        onUpdate: function () {
          barPercent.innerHTML = Math.round(object.count) + '%';
        },
      });

    }

    function lineChart(target, animDelay = 0) {

      const counterVal = target.getAttribute('data-percent');

      gsap.fromTo(target.querySelector('.js-bar'), {
        scaleX: 0,
      }, {
        delay: 0.45 + animDelay,
        duration: 1,
        ease: 'power3.inOut',
        scaleX: counterVal / 100,
      })


      let object = { count: 0 };
      const barPercent = target.querySelector('.js-number');

      gsap.to(object, {
        count: counterVal,
        delay: 0.45 + animDelay,
        duration: 1,
        ease: 'power3.inOut',

        onUpdate: function () {
          barPercent.innerHTML = Math.round(object.count) + '%';
        },
      });

    }

    function counter(target, animDelay = 0) {

      const counterVal = target.getAttribute('data-counter');
      const counterAdd = target.getAttribute('data-counter-add');
      const totalDelay = animDelay;
      let symbols = '';

      let object = { count: 0 };
      const counterNum = target.querySelector('.js-counter-num');

      if (counterAdd) {
        symbols = counterAdd;
      }

      gsap.to(object, {
        count: counterVal,
        delay: totalDelay,
        duration: 1.8,
        ease: 'power3.inOut',

        onUpdate: function () {
          counterNum.innerHTML = Math.round(object.count) + symbols;
        },
      });

    }

    function splitLines(target, animDelay = 0) {

      const lines = target.querySelectorAll('.split__line');

      gsap.to(lines, {
        delay: animDelay,
        stagger: 0.08,
        duration: 0.85,
        ease: 'power2.out',
        y: '0%',
      });

    }


    function init() {

      single();
      container();

    }


    return {
      init: init,
    }

  })();



  function splitTextIntoLines() {

    let target;

    if (App.body.classList.contains('page-reveal-off')) {
      target = document.querySelectorAll("[data-split='lines']:not([data-split-page-reveal])");
    } else {
      target = document.querySelectorAll("[data-split='lines']");
    }

    if (!target.length) return;

    target.forEach(el => {
      let content;
      let test = el.querySelectorAll('* > *:not(br):not(span)');

      if (test.length > 0) {
        content = el.querySelectorAll('* > *:not(br):not(span)');
      }

      new SplitText(content, {
        type: 'lines',
        linesClass: 'overflow-hidden',
      });

      content.forEach(el => {
        const lines = el.querySelectorAll('.overflow-hidden');

        new SplitText(lines, {
          type: 'lines',
          linesClass: 'split__line',
        });
      });

      gsap.set(el.querySelectorAll('.split__line'), {
        y: '100%',
      })
    });

  }
  /*--------------------------------------------------
    07. Main sliders
  ---------------------------------------------------*/

  function mainSlider1Init() {

    const slider = document.querySelector('.js-sliderMain-type-1');

    if (!slider) return;

    const nav = slider.querySelector('.js-slider-nav');
    let current = 0;

    const sliderInstance = new Swiper(slider, {
      spaceBetween: 0,
      speed: 1000,
      parallax: true,
      grabCursor: true,
      allowTouchMove: true,
      touchMoveStopPropagation: true,

      lazy: {
        loadPrevNext: true,
      },

      breakpoints: {
        575: {
          parallax: false,
        },
      },

      navigation: {
        prevEl: nav.querySelector('.js-prev'),
        nextEl: nav.querySelector('.js-next'),
      },
    });

  }


  function mainSlider2Init() {

    const slider = document.querySelector('.js-sliderMain-type-2');

    if (!slider) return;

    const sliderInstance = new Swiper(slider, {
      spaceBetween: 30,
      speed: 600,
      parallax: true,
      autoplay: {
        delay: 10000,
      },
      loop: true,
      slidesPerView: 2,
      centeredSlides: true,

      lazy: {
        loadPrevNext: true,
      },

      breakpoints: {
        991: {
          slidesPerView: 1,
        },
      },

      pagination: {
        el: '.js-pagination',
        bulletClass: 'pagination__item',
        bulletActiveClass: 'is-active',
        clickable: true
      },

      navigation: {
        prevEl: '.js-nav-prev',
        nextEl: '.js-nav-next',
      },
    });


    const images = slider.querySelectorAll('.js-slider-img');

    let nextImg;
    let prevImg = images[sliderInstance.realIndex];

    sliderInstance.on('transitionStart', function () {
      nextImg = images[sliderInstance.realIndex];

      prevImg.classList.remove('is-active');
      nextImg.classList.add('is-active');

      prevImg = images[sliderInstance.realIndex];
    });

    sliderInstance.on('loopFix', function () {

    });

  }


  const MainSlider3 = (function () {

    let state = false;
    let sliderInstance;
    let current;

    function init() {

      const slider = document.querySelector('.js-sliderMain-type-3');
      if (!slider) return;

      state = true;

      const container = slider.querySelector('.swiper-container');
      const contents = slider.querySelectorAll('.js-slider-content');
      const nav = slider.querySelector('.js-slider-nav');
      const pagination = slider.querySelector('.js-slider-pagination');
      current = 0;

      let sliderSpeed = 1000;
      if (slider.getAttribute('data-speed')) sliderSpeed = slider.getAttribute('data-speed');

      let sliderAutoplay = false;
      if (slider.getAttribute('data-autoplay-delay')) {
        sliderAutoplay = {
          delay: slider.getAttribute('data-autoplay-delay'),
          disableOnInteraction: false,
        };
      }

      let sliderAutoplayStartDelay = 0;
      if (slider.getAttribute('data-autoplay-start-delay')) {
        sliderAutoplayStartDelay = slider.getAttribute('data-autoplay-start-delay');
      }


      sliderInstance = new Swiper(container, {
        spaceBetween: 0,
        speed: parseInt(sliderSpeed),
        parallax: true,
        // direction: 'vertical',
        allowTouchMove: false,
        lazy: {
          loadPrevNext: true,
        },
        autoplay: sliderAutoplay,
        navigation: {
          prevEl: nav.querySelector('.js-prev'),
          nextEl: nav.querySelector('.js-next'),
        },
        pagination: {
          el: pagination,
          bulletClass: 'pagination__item',
          bulletActiveClass: 'is-active',
          clickable: true
        },
      });


      gsap.set(slider.querySelectorAll('.js-button'), {
        y: '100%',
      })

      nav.classList.add('is-active');

      sliderInstance.autoplay.stop();

      // setTimeout(() => {
      //   sliderInstance.autoplay.start();
      // }, sliderAutoplayStartDelay);


      sliderInstance.on('transitionStart', function () {
        const currentContent = contents[current];
        const activeContent = contents[sliderInstance.realIndex];

        nav.classList.remove('is-active');

        gsap.timeline()
          .to([
            currentContent.querySelectorAll('.js-subtitle .split__line'),
            currentContent.querySelectorAll('.js-title .split__line'),
            currentContent.querySelector('.js-button'),
          ], {
            y: '-100%',
            stagger: 0.06,
            duration: 0.6,
            ease: 'quart.inOut',
            onStart: () => {
              current = sliderInstance.realIndex;
              currentContent.classList.remove('is-active');
            }
          })
          .fromTo([
            activeContent.querySelectorAll('.js-subtitle .split__line'),
            activeContent.querySelectorAll('.js-title .split__line'),
            activeContent.querySelector('.js-button'),
          ], {
            y: '100%',
          }, {
            y: '0%',
            stagger: -0.06,
            duration: 0.6,
            ease: 'quart.inOut',
            onStart: () => {
              activeContent.classList.add('is-active');
            },
            onComplete: () => {
              nav.classList.add('is-active');
            },
          }, '>-0.2')
      });

    }

    function autoplayStart() {
      if (!state) return;
      sliderInstance.autoplay.start();
    }

    function autoplayStop() {
      if (!state) return;
      sliderInstance.autoplay.stop();
    }

    function isActive() {
      return state;
    }

    return {
      init: init,
      autoplayStart: autoplayStart,
      autoplayStop: autoplayStop,
      isActive: isActive,
    };

  })();
  /*--------------------------------------------------
    08. Section sliders
  ---------------------------------------------------*/

  function sectionSlidersInit() {

    const sectionSlider = document.querySelectorAll('.js-section-slider');

    if (!sectionSlider.length) return;

    for (let i = 0; i < sectionSlider.length; i++) {
      const el = sectionSlider[i];

      let gap = 0;
      let loop = false;
      let centered = false;
      let pagination = false;

      if (el.getAttribute('data-gap')) gap = el.getAttribute('data-gap');
      if (el.hasAttribute('data-loop')) loop = true;
      if (el.hasAttribute('data-center')) centered = true;

      if (el.hasAttribute('data-pagination')) {
        pagination = {
          el: el.querySelector('.js-pagination'),
          bulletClass: 'pagination__item',
          bulletActiveClass: 'is-active',
          bulletElement: 'div',
          clickable: true
        };
      }


      const colsArray = el.getAttribute('data-slider-col').split(' ');

      let cols_base = 1;
      let cols_lg = 1;
      let cols_md = 1;
      let cols_sm = 1;

      colsArray.forEach(el => {
        if (el.includes('base')) cols_base = el.slice(-1);
        if (el.includes('lg')) cols_lg = el.slice(-1);
        if (el.includes('md')) cols_md = el.slice(-1);
        if (el.includes('sm')) cols_sm = el.slice(-1);
      });

      new Swiper(el, {
        autoplay: {
          delay: 2000,
        },
        // mousewheel: {
        //   invert: true,
        // },
        // effect: 'flip',
        // flipEffect: {
        //   slideShadows: false,
        // },
        // effect: 'coverflow',
        // coverflowEffect: {
        //   rotate: 30,
        //   slideShadows: false,
        // },

        speed: 800,
        autoHeight: true,
        spaceBetween: parseInt(gap),
        centeredSlides: centered,
        parallax: true,

        loop: loop,

        lazy: {
          loadPrevNext: true,
        },

        slidesPerView: parseInt(cols_base),

        breakpoints: {
          1199: { slidesPerView: parseInt(cols_lg) },
          991: { slidesPerView: parseInt(cols_md) },
          767: { slidesPerView: parseInt(cols_sm) },
        },

        navigation: {
          prevEl: el.querySelector('.js-prev'),
          nextEl: el.querySelector('.js-next'),
        },

        pagination: pagination,
      });
    }

  }

  function sectionSlidersInit2() {

    const sectionSlider = document.querySelectorAll('.js-section-slider2');

    if (!sectionSlider.length) return;

    for (let i = 0; i < sectionSlider.length; i++) {
      const el = sectionSlider[i];

      let gap = 0;
      let autoplay = 5000;
      let effect = '';
      let loop = false;
      let centered = false;
      let pagination = false;

      if (el.getAttribute('data-gap')) gap = el.getAttribute('data-gap');
      if (el.getAttribute('autoplay')) autoplay = el.getAttribute('autoplay');
      if (el.getAttribute('effect')) effect = el.getAttribute('effect');
      if (el.hasAttribute('data-loop')) loop = true;
      if (el.hasAttribute('data-center')) centered = true;

      if (el.hasAttribute('data-pagination')) {
        pagination = {
          el: el.querySelector('.js-pagination'),
          bulletClass: 'pagination__item',
          bulletActiveClass: 'is-active',
          bulletElement: 'div',
          clickable: true
        };
      }


      const colsArray = el.getAttribute('data-slider-col').split(' ');

      let cols_base = 1;
      let cols_lg = 1;
      let cols_md = 1;
      let cols_sm = 1;

      colsArray.forEach(el => {
        if (el.includes('base')) cols_base = el.slice(-1);
        if (el.includes('lg')) cols_lg = el.slice(-1);
        if (el.includes('md')) cols_md = el.slice(-1);
        if (el.includes('sm')) cols_sm = el.slice(-1);
      });

      new Swiper(el, {
        autoplay: {
          delay: parseInt(autoplay),
        },

        effect: effect,
        coverflowEffect: {
          rotate: 30,
          slideShadows: false,
        },
        flipEffect: {
          slideShadows: false,
        },
        fadeEffect: {
          crossFade: true
        },

        speed: 800,
        autoHeight: true,
        spaceBetween: parseInt(gap),
        centeredSlides: centered,
        parallax: true,

        loop: loop,

        lazy: {
          loadPrevNext: true,
        },

        slidesPerView: parseInt(cols_base),

        breakpoints: {
          1199: { slidesPerView: parseInt(cols_lg) },
          991: { slidesPerView: parseInt(cols_md) },
          767: { slidesPerView: parseInt(cols_sm) },
        },

        navigation: {
          prevEl: el.querySelector('.js-prev'),
          nextEl: el.querySelector('.js-next'),
        },

        pagination: pagination,
      });
    }

  }

  /*--------------------------------------------------
    09. Contact form
  ---------------------------------------------------*/

  function contactForm() {

    const form = document.querySelector(".js-ajax-form");

    if (!form) {
      return;
    }

    const formAlert = form.querySelector('.js-ajax-form-alert');

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let validForm = true;
      let formData = {};
      formAlert.classList.remove('is-active');
      formAlert.classList.remove('is-success');
      formAlert.classList.remove('is-error');
      const inputGroups = form.querySelectorAll('.js-input-group');


      form.querySelectorAll('.form__error').forEach(el => {
        el.innerHTML = '';
        el.classList.remove('is-active');
      });
      form.querySelectorAll('.-error').forEach(el => {
        el.classList.remove('-error');
      });


      for (let i = 0; i < inputGroups.length; i++) {
        const el = inputGroups[i];

        let field;

        if (el.querySelector('input')) {
          field = el.querySelector('input');
        } else if (el.querySelector('textarea')) {
          field = el.querySelector('textarea');
        }

        let fieldName = field.getAttribute('name');
        let fieldValue = field.value;
        let errorField = el.querySelector('.form__error');


        if (field.hasAttribute('data-required') && !fieldValue) {
          field.classList.add('-error');
          validForm = false;
          errorField.classList.add('is-active');
          errorField.innerHTML = 'Please fill this field';
          continue;
        }

        if (field.getAttribute('name') === 'email') {
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldValue)) {
            field.classList.add('-error');
            validForm = false;
            errorField.classList.add('is-active');
            errorField.innerHTML = 'Please enter correct email';
            continue;
          }
        }

        formData[fieldName] = fieldValue;
      }


      if (!validForm) return;

      let requestData = '';
      let request = new XMLHttpRequest();
      let dataArray = [];

      for (let property in formData) {
        dataArray.push(`${property}=${formData[property]}`);
        requestData = dataArray.join('&');
      }

      request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          formAlert.classList.add('is-active');
          formAlert.classList.add('is-success');
          formAlert.querySelector('.ajax-form-alert__content').innerHTML = form.getAttribute('data-message-success');
        } else {
          formAlert.classList.add('is-active');
          formAlert.classList.add('is-error');
          formAlert.querySelector('.ajax-form-alert__content').innerHTML = form.getAttribute('data-message-error');
        }
      };

      request.open("POST", "contact.php", true);
      request.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded",
      );
      request.send(requestData);
    });

  }

  /*--------------------------------------------------
    10. Isotope grids
  ---------------------------------------------------*/

  function masonryFilterInit() {

    const filterGrids = document.querySelectorAll('.section-filter');

    if (!filterGrids.length) {
      return;
    }

    for (let i = 0; i < filterGrids.length; i++) {
      const el = filterGrids[i];

      let iso = new Isotope(el.querySelector('.masonry'), {
        itemSelector: '.masonry__item',
        percentPosition: true,
        // horizontalOrder: true,

        layoutMode: 'packery',
        packery: {
          columnWidth: '.masonry__sizer',
        },
      });


      const filterButtons = el.querySelectorAll(".filter-button-group button");

      for (let i = 0; i < filterButtons.length; i++) {
        const el = filterButtons[i];

        el.addEventListener("click", () => {

          let someom = iso.getItemElements();
          someom.forEach(el => {
            el.classList.remove('is-active');
          });

          filterButtons.forEach(button => button.classList.remove('btn-active'));
          el.classList.add('btn-active');

          let filterValue = el.getAttribute('data-filter');
          iso.arrange({ filter: filterValue });

        });
      }
    }

  }


  function masonryGridInit() {

    const grids = document.querySelectorAll('.js-masonry.js-masonry-no-filter');

    if (!grids.length) {
      return;
    }

    for (let i = 0; i < grids.length; i++) {
      new Isotope(grids[i], {
        itemSelector: '.masonry__item',
        percentPosition: true,

        layoutMode: 'packery',
        packery: {
          columnWidth: '.masonry__sizer',
        },
      });
    }

  }
  /*--------------------------------------------------
    11. Lazy loading
  ---------------------------------------------------*/

  function lazyLoading() {

    if (!document.querySelector('.js-lazy')) {
      return;
    }

    new LazyLoad({
      elements_selector: ".js-lazy",
    });

  }

  /*--------------------------------------------------
    12. Parallax
  ---------------------------------------------------*/

  function parallaxInit() {
    if (!document.querySelector('[data-parallax]')) {
      return;
    }

    const target = document.querySelectorAll('[data-parallax]');

    target.forEach(el => {
      const value = el.getAttribute('data-parallax');

      jarallax(el, {
        speed: value,
        imgElement: '[data-parallax-target]',
      });
    });
  }

  /*--------------------------------------------------
    13. To top button
  ---------------------------------------------------*/

  function backButton() {

    const button = document.querySelector('.js-backButton');

    if (!button) return;

    const scrollElement = window.document.documentElement;

    const duration = () => {

      if (scrollElement.scrollTop < 1600) {
        return 1;
      } else {
        return 2.2;
      }

    }

    button.addEventListener('click', () => {
      gsap.to(scrollElement, {
        duration: duration(),
        ease: 'power2.inOut',
        scrollTo: 0,
      });
    })

    new ScrollMagic.Scene({
      offset: '400px',
    })
      .setClassToggle(button, 'is-visible')
      .addTo(App.SMcontroller);

  }


  function backButton2() {

    const button = document.querySelector('.js-backButton2');

    if (!button) return;


    const scrollElement = window.document.documentElement;

    new ScrollMagic.Scene({
      offset: 500,
    })
      .setClassToggle(button, 'is-visible')
      .addTo(App.SMcontroller);



  }

  /*--------------------------------------------------
    14. Scroll down button
  ---------------------------------------------------*/

  function uiScrollDown() {

    const target = document.querySelector('.js-ui-scroll-button');

    if (!target) return;

    const destination = document.querySelector('section:nth-of-type(2)');

    target.addEventListener('click', () => {
      gsap.to(window.document.documentElement, {
        duration: .3,
        ease: 'power2.inOut',
        scrollTo: destination.offsetTop,
      });
    })

  }

  function buttonScrollDown() {
    const target = document.querySelector('.js-button-scroll-button');

    if (!target) return;

    const destination = document.querySelector('section:nth-of-type(3)');

    target.addEventListener('click', () => {
      gsap.to(window.document.documentElement, {
        duration: 1,
        ease: 'power2.in',
        scrollTo: destination.offsetTop,
      });
    })
  };

  /*--------------------------------------------------
    15. Video
  ---------------------------------------------------*/

  function videoBtn() {

    GLightbox({
      autoplayVideos: false,
    });

  }

  /*--------------------------------------------------
    16. Scroll to id
  ---------------------------------------------------*/

  function scrollToIdInit() {

    const targets = document.querySelectorAll('.js-scroll-to-id');

    if (!targets.length) return;

    targets.forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const id = el.getAttribute('href');
        const destination = document.querySelector(`#${id.slice(1)}`);

        console.log(destination);
        console.log(destination.offsetTop);

        gsap.to(window.document.documentElement, {
          duration: 1.2,
          ease: 'power2.inOut',
          scrollTo: destination.offsetTop,
        });
      })
    });

  }



  // Stick Scroll Section

  function StickScrollSection() {
    document.addEventListener("scroll",
      (function () {
        for (var e = document.getElementsByClassName("sticky-header"),
          t = document.getElementsByClassName("navigation-steps"),
          o = 0; o < e.length; o++) {
          var n = e[o].querySelector(".navigation-steps"),
            r = "section-" + e[o].getAttribute("data-end"),
            i = e[o].parentNode.getBoundingClientRect().top,
            a = e[o].getAttribute("data-end") ? document.getElementById(r).getBoundingClientRect().top +
              document.getElementById(r).getBoundingClientRect().height - 70 : 0,
            d = t[o].getElementsByClassName("nav-step"); if (i >= 0)
            e[o].classList.remove("sticked"); else if (a <= 0) e[o].classList.add("sticked-hidden"),
              e[o].classList.remove("show-dd"); else if (i <= 0) {
                e[o].classList.remove("sticked-hidden"),
                  e[o].classList.add("sticked"); for (var l = 0; l < d.length; l++) {
                    var c = n.getElementsByClassName("nav-step")[l],
                      s = document.getElementById(c.querySelector(".step-link").getAttribute("href").split("#")[1]);
                    (s ? s.getBoundingClientRect().y : window.innerHeight + 1) <= 70 ? c.classList.add("checked") : c.classList.remove("checked")
                  } e[o].querySelector(".navigation-step-display").innerHTML = Array.from(e[o].querySelectorAll(".nav-step.checked")).pop().innerHTML
              }
        }
      })), document.addEventListener("DOMContentLoaded",
        (function () {
          !function (e, t, o) {
            var n, i = r([].slice.call(document.querySelectorAll(e)));
            try { for (i.s(); !(n = i.n()).done;) { n.value.addEventListener("click", a) } }
            catch (e) { i.e(e) } finally { i.f() } function a(e) {
              e.preventDefault(),
                document.querySelector(".sticky-header.sticked") && document.querySelector(".sticky-header.sticked").classList.remove("show-dd");
              for (var n = document.querySelector(this.getAttribute("href")), r = 0; n && n !== document.body;)r += n.offsetTop, n = n.offsetParent;
              var i = window.pageYOffset || document.body.scrollTop, a = Math.abs(i - r); if (a) var d = parseInt(t / 1e3 * o), l = a / d, c = r > i ? 1 : -1,
                s = setInterval((function () {
                  if (i = window.pageYOffset || document.body.scrollTop, (a = Math.abs(i - r + 69)) < l)
                    return scrollBy(0, a * c), void clearInterval(s); scrollBy(0, l * c),
                      window.pageYOffset + window.innerHeight === document.body.scrollHeight && clearInterval(s)
                }), t / d)
            }
          }(".step-link", 300, 60)
        })),
      document.querySelectorAll(".sticky-header .navigation-dropdown-toggle").forEach((function (e) {
        e.addEventListener("click",
          (function () { document.querySelector(".sticky-header.sticked").classList.toggle("show-dd") }))
      }));

  }
  /*--------------------------------------------------
    17. PJAX
  ---------------------------------------------------*/

  const PJAX = (function () {

    function initNewPage(data) {
      return new Promise((resolve) => {

        document.body.scrollTop = document.documentElement.scrollTop = 0;

        App.SMcontroller.destroy(true);
        App.SMcontroller = new ScrollMagic.Controller();

        if (App.config.headroom.enabled) {
          App.headroom.destroy();
          App.headroom = new Headroom(document.querySelector(".js-header"), App.config.headroom.options);
          App.headroom.init();
        }



        initComponents();
        resolve(true);

      });
    }

    const generalTransition = {
      name: 'generalTransition',

      leave: (data) => {
        return new Promise((resolve) => {
          gsap.timeline()
            .preloaderShow()
            .add(() => {
              resolve(true);
            })
        });
      },

      enter: (data) => {
        return new Promise((resolve) => {
          initNewPage(data).then(() => resolve(true));
        });
      },

      afterEnter: (data) => {
        return new Promise((resolve) => {
          let tl = gsap.timeline();
          tl.preloaderHide();
          tl = PageReveal.init(tl);
          tl.add(() => {
            MainSlider3.autoplayStart();
            resolve(true);
          });
        });
      }
    }

    function init() {

      if (!document.body.hasAttribute('data-barba')) return;

      barba.init({
        sync: true,
        timeout: 10000,
        prevent: ({ el }) => {

          // element doesn't has attribute
          if (!el.hasAttribute('data-barba')) return true;

          // element is anchor
          if (el.getAttribute('href').indexOf('#') > -1) return true;

          // elementor preview
          if (typeof elementor === 'object') return true;

        },
        transitions: [
          generalTransition,
        ],
      });

    }

    return {
      init: init,
    }

  })();



  /*--------------------------------------------------
  Other
---------------------------------------------------*/
  function a() {

    // acc faq
    var acc = document.querySelectorAll(".accordion");
    // var active = document.querySelectorAll(".active");
    // console.log(acc)
    var i;

    if (!acc) return;
    else {



      for (i = 0; i < acc.length; i++) {
        // if (i == 0 ) {
        //   acc[0].classList.add("active");
        //   acc[0].nextElementSibling.style.maxHeight = acc[0].scrollHeight + 128 + 128 + 128 + 128 + "px";
        //   acc[0].nextElementSibling.style.paddingTop = 32 + "px"
        //   acc[0].nextElementSibling.style.paddingBottom = 32 + "px"
        // }


        acc[i].addEventListener("click", function () {
          var panel = this.nextElementSibling;

          this.classList.toggle("active");
          console.log(this.classList.contains("active"))
          if (!this.classList.contains("active")) {
            panel.style.setProperty("max-height", null, "important");
            panel.style.setProperty("padding", null, "important");

          } else {
            panel.style.maxHeight = panel.scrollHeight + 64 + 64 + "px";
            panel.style.paddingTop = 32 + "px"
            panel.style.paddingBottom = 32 + "px"

          }

        });
      }

    }

    // tab

    function inittab(tabWrapper, activeTab = 1) {
      const tabBtns = tabWrapper.querySelectorAll(".tab-btn");
      const underline = tabWrapper.querySelector(".underline");
      const tabContents = tabWrapper.querySelectorAll(".tab-content");

      activeTab = activeTab - 1;
      tabBtns[activeTab].classList.add("active");
      underline.style.width = `${tabBtns[activeTab].offsetWidth}px`;
      underline.style.left = `${tabBtns[activeTab].offsetLeft}px`;
      tabContents.forEach((content) => {
        content.style.transform = `translateX(-${activeTab * 100}%)`;
      });

      tabBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
          tabBtns.forEach((btn) => btn.classList.remove("active"));
          btn.classList.add("active");
          underline.style.width = `${btn.offsetWidth}px`;
          underline.style.left = `${btn.offsetLeft}px`;
          tabContents.forEach((content) => {
            content.style.transform = `translateX(-${index * 100}%)`;
          });
        });

        //same effect as on click when button in focus
        btn.addEventListener("focus", () => {
          tabBtns.forEach((btn) => btn.classList.remove("active"));
          btn.classList.add("active");
          underline.style.width = `${btn.offsetWidth}px`;
          underline.style.left = `${btn.offsetLeft}px`;
          tabContents.forEach((content) => {
            content.style.transform = `translateX(-${index * 100}%)`;
          });
        });
      });
    }

    const tabWrappers = document.querySelectorAll(".tab-wrapper");
    tabWrappers?.forEach((tabWrapper, index) => inittab(tabWrapper));



    // var cate = document.getElementsByClassName(".cate");
    // if (!cate) return;
    // else {
    //   filterSelection("all")

    //   function filterSelection(c) {
    //     var x, i;
    //     x = document.getElementsByClassName("column");
    //     if (c == "all") c = "";
    //     for (i = 0; i < x.length; i++) {
    //       w3RemoveClass(x[i], "show");
    //       if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    //     }
    //   }

    //   function w3AddClass(element, name) {
    //     var i, arr1, arr2;
    //     arr1 = element.className.split(" ");
    //     arr2 = name.split(" ");
    //     for (i = 0; i < arr2.length; i++) {
    //       if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    //     }
    //   }

    //   function w3RemoveClass(element, name) {
    //     var i, arr1, arr2;
    //     arr1 = element.className.split(" ");
    //     arr2 = name.split(" ");
    //     for (i = 0; i < arr2.length; i++) {
    //       while (arr1.indexOf(arr2[i]) > -1) {
    //         arr1.splice(arr1.indexOf(arr2[i]), 1);
    //       }
    //     }
    //     element.className = arr1.join(" ");
    //   }

    //   var btnContainer = document.getElementById("myBtnContainer");
    //   var btns = btnContainer?.getElementsByClassName("btn");
    //   for (var i = 0; i < btns?.length; i++) {
    //     btns[i].addEventListener("click", function () {
    //       var current = document.getElementsByClassName("active");
    //       current[0].className = current[0].className.replace(" active", "");
    //       this.className += " active";
    //     });
    //   }

    // }


    // cate filter

    var siteIstotope = function () {
      /* activate jquery isotope */
      var $container = $('#posts').isotope({
        itemSelector: '.item',
        isFitWidth: true
      });

      $(window).resize(function () {
        $container.isotope({
          columnWidth: '.col-sm-3'
        });
      });

      $container.isotope({ filter: '*' });

      // filter items on button click
      $('#filters').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
        $('#filters button').removeClass('active');
        $(this).addClass('active');
      });
    }

    siteIstotope();


    //   $('.fancybox').on('click', function() {
    // 	  var visibleLinks = $('.fancybox');

    // 	  $.fancybox.open( visibleLinks, {}, visibleLinks.index( this ) );

    // 	  return false;
    // 	});

// gsap.resisterPlugin()
 var mark = document.querySelector("mark")
 if(mark){
  // console.log(" something ")
  gsap.utils.toArray("mark").forEach( (mark) =>{
    ScrollTrigger.create( {
      trigger: mark,
      start: "top bottom",
      // markers: true,

      // scrub: 2,

      toggleClass: "markOkay",
      // onEnter: () => {mark.classList.add("markOkay")},
      // markers: true,
    })
  })
 }


    //  lax
    var lax = document.querySelector(".lax")
    if (lax) {
      gsap
        .to('.lax', {
          x: "240",
          rotate: "30deg",
          opacity: "1",
          ease: "easeInOut",
          scrollTrigger: {
            trigger: ".lax",
            start: "top 70%",
            end: "top 70%",
            scrub: 1,

          }
        })
      gsap.to('.lax2', {

        x: "260",
        rotate: "60deg",
        opacity: "1",
        ease: "easeInOut",
        scrollTrigger: {
          trigger: ".lax",
          start: "top 70%",
          end: "top 70%",
          scrub: 2,

        }
      },);
      gsap
        .to('.lax3', {
          x: "-240",

          rotate: "-30deg",
          opacity: "1",
          ease: "easeInOut",
          scrollTrigger: {
            trigger: ".lax",
            start: "top 70%",
            end: "top 70%",
            scrub: 1,

          }
        })
      gsap.to('.lax4', {

        x: "-260",
        rotate: "-60deg",
        opacity: "1",
        ease: "easeInOut",
        scrollTrigger: {
          trigger: ".lax",
          start: "top 70%",
          end: "top 70%",
          scrub: 2,

        }
      },);
    }

    var imgWrap2 = document.querySelector(".img-wrap2")
    if (imgWrap2) {
      gsap.timeline(
        {
          scrollTrigger:
          {
            trigger: '.img-wrap2',
            start: '+=1% +=85%',
            end: '+=0% +=85%',
            // pin: true,
            scrub: 1,
            // markers: true,
          }
        }
      )

        .to('.uiLab',
          {
            transform: ' rotate3d(1, 0, 0, 0deg)',
            ease: "ease.in",
          }, 0)

        .to('.upContent', {
          transform: ' scale(0.5)',
          y: '60%',
          ease: "power2",
        }, 0)




      gsap.timeline(
        {
          scrollTrigger:
          {
            trigger: '.img-wrap2',
            start: 'top +=80%',
            end: '+=20% +=70%',
            // pin: true,
            scrub: true,
            // markers: true,
          }
        }
      )

        .to('.img-wrap3',
          {
            x: '70%',
            opacity: '0',
            visibility: 'hidden',
            ease: "easeOut",
          }, '<0')


      gsap.timeline(
        {
          scrollTrigger:
          {
            trigger: '.HomeBackground-bg-gradient',
            start: '+=30% +=50%',
            end: '+=20% +=50%',
            // pin: true,
            scrub: 4,
            // markers: true,
          }
        }
      ).to('.HomeBackground-bg-gradient', {
        transform: ' scaleX(2)',
        bottom: '-20%',
        x: '-45%',
        ease: "power2",
      })

      gsap.timeline(
        {
          scrollTrigger:
          {
            trigger: '#popp',
            start: '+=50% +=50%',
            end: '+=30% +=50%',
            // pin: true,
            scrub: 2,
            // markers: true,
          }
        }
      ).fromTo('#popp', {
        transform: ' scale(3) rotate(120deg)',
        opacity: '0',
        // x: '10vw',
        // y: '-10vh',
      }, {
        transform: ' scale(1) rotate(-10deg)',
        // y: '5vh',
        // x: '50vh',
        opacity: '1',
        ease: "elastic.inOut",
      })

      gsap.timeline(
        {
          scrollTrigger:
          {
            trigger: '#popp2',
            start: '+=40% +=50%',
            end: '+=40% +=50%',
            // pin: true,
            scrub: 2,
            // markers: true,
          }
        }
      ).fromTo('#popp2', {
        transform: ' scale(3) rotate(120deg)',
        opacity: '0',
        x: '10vw',
        y: '-10vh',
      }, {
        transform: ' scale(1.2) rotate(20deg)',
        opacity: '1',
        ease: "elastic.inOut",
      })  
    }



    // vid
    var vid = document.getElementsByClassName("videoembed");
    if (!vid) return;
    else {
      var isPlaying = vid.currentTime > 0 && !vid.paused && !vid.ended
        && vid.readyState > vid.HAVE_CURRENT_DATA;

      if (!isPlaying) {
        vid[0]?.play();
      }

    }




    //img-zoom

    $('img[data-enlargable]').addClass('img-enlargable').click(function () {
      var src = $(this).attr('src');
      console.log(" something1 ", src)

      $('<div class="imgZoom">').css({
        background: 'RGBA(0,0,0,.7) url(' + src + ') no-repeat center',
        backgroundSize: 'contain',
        width: '100%', height: '100%',
        position: 'fixed',
        zIndex: '10000',
        top: '0', left: '0',
        cursor: 'zoom-out'
      }).click(function () {
        $(this).remove();
      }).appendTo('body');
    });

    $('div[data-enlargable]').addClass('img-enlargable').click(function () {
      var it = $(this);
      var src = it.attr('data-enlargable');
      console.log(" something2 ", $(this))

      $('<div class="imgZoom">').css({
        background: 'RGBA(0,0,0,.7) url(' + src + ') no-repeat center',
        backgroundSize: 'contain',
        width: '100%', height: '100%',
        position: 'fixed',
        zIndex: '10000',
        top: '0', left: '0',
        cursor: 'zoom-out'
      }).click(function () {
        $(this).remove();
      }).appendTo('body');
    });


   

 


    // img-compare
    var x1 = document.getElementsByClassName("img-comp-img");

    function initComparisons() {
      var x, i;
      /*find all elements with an "overlay" class:*/
      x = document.getElementsByClassName("img-comp-overlay");
      x1 = document.getElementsByClassName("img-comp-img");

      for (i = 0; i < x.length; i++) {
        /*once for each "overlay" element:
        pass the "overlay" element as a parameter when executing the compareImages function:*/
        compareImages(x[i]);
      }
      function compareImages(img) {
        var slider, img, clicked = 0, w, h;
        /*get the width and height of the img element*/
        w = img.offsetWidth;
        h = img.offsetHeight;
        /*set the width of the img element to 50%:*/
        img.style.width = (w / 2) + "px";
        /*create slider:*/
        slider = document.createElement("DIV");
        slider.setAttribute("class", "img-comp-slider");
        /*insert slider*/
        img.parentElement.insertBefore(slider, img);
        /*position the slider in the middle:*/
        slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
        slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
        /*execute a function when the mouse button is pressed:*/
        slider.addEventListener("mousedown", slideReady);
        /*and another function when the mouse button is released:*/
        window.addEventListener("mouseup", slideFinish);
        /*or touched (for touch screens:*/

        /*and released (for touch screens:*/
        slider.addEventListener("touchmove", slideReady);
        /*or touched (for touch screens:*/
        slider.addEventListener("touchstart", slideReady);
        /*and released (for touch screens:*/
        window.addEventListener("touchend", slideFinish);



        function slideReady(e) {
          /*prevent any other actions that may occur when moving over the image:*/
          e.preventDefault();
          /*the slider is now clicked and ready to move:*/
          clicked = 1;
          /*execute a function when the slider is moved:*/
          window.addEventListener("mousemove", slideMove);
          window.addEventListener("touchmove", slideMove);
        }
        function slideFinish() {
          /*the slider is no longer clicked:*/
          clicked = 0;
        }
        function slideMove(e) {
          var pos;
          /*if the slider is no longer clicked, exit this function:*/
          if (clicked == 0) return false;
          /*get the cursor's x position:*/
          pos = getCursorPos(e)
          /*prevent the slider from being positioned outside the image:*/
          if (pos < 0) pos = 0;
          if (pos > w) pos = w;
          /*execute a function that will resize the overlay image according to the cursor:*/
          slide(pos);
        }
        function getCursorPos(e) {
          var a, x = 0;
          e = e || window.event;
          /*get the x positions of the image:*/
          a = img.getBoundingClientRect();
          /*calculate the cursor's x coordinate, relative to the image:*/
          x = e.pageX - a.left;
          /*consider any page scrolling:*/
          x = x - window.pageXOffset;
          return x;
        }
        function slide(x) {
          /*resize the image:*/
          img.style.width = x + "px";
          /*position the slider:*/
          slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
        }
      }
    }

    if (!x1) return;
    else initComparisons();

    // social
    const fb = document.querySelector('.facebook');

    if (fb) {
      const link = encodeURI(window.location.href);
      const msg = encodeURIComponent('Hey, I found this amazing casestudy from Quang Trung');
      const title = encodeURIComponent('Article or Post Title Here');

      fb.href = `https://www.facebook.com/share.php?u=${link}`;

      // const linkedIn = document.querySelector('.linkedin');
      // linkedIn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${link}`;

      const reddit = document.querySelector('.reddit');
      if (reddit) {
        reddit.href = `http://www.reddit.com/submit?url=${link}&title=${title}`;
      }

      const whatsapp = document.querySelector('.whatsapp');
      if (whatsapp) {
        whatsapp.href = `https://api.whatsapp.com/send?text=${msg}: ${link}`;
      }
    }
    // TITTE
    var wt = document.querySelector(".wt");
    if (!wt) return;
    else {
      VanillaTilt.init(wt, {
        max: 5,
        speed: 900,
        // scale: 1.03,
        transition: true,
        // easing: "cubic-bezier(.42,.02,.31,.99)",
        perspective: 900,
        // glare: true,
        // maxGlare: 0.2,
        // axis: "x",

      });
    }





  }




})();

// cate

// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("column");
//   if (c == "all") c = "";
//   for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//   }
// }

// function w3AddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
//   }
// }

// function w3RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);
//     }
//   }
//   element.className = arr1.join(" ");
// }

// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer?.getElementsByClassName("btn");
// for (var i = 0; i < btns?.length; i++) {
//   btns[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }



// more
function more() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");
  if (moreText.style.display == "block") {
    btnText.innerHTML = "Show more";
    moreText.style.display = "none";
    moreText.style.transform = "none";
    btnText.style.position = "unset";
  } else {
    btnText.innerHTML = "I got it! show less";
    moreText.style.display = "block";
    btnText.style.position = "relative";

  }
}

window.onscroll = function () { myFunction() };

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


function beforeAfter() {
  document.getElementById('separador').style.width = document.getElementById('deslizador').value + "%";
}


// trans

 // trans ,ja,la,de,ru,zh-CN,ko,es
//  var google_translate_element = document.getElementById('google_translate_element2')
//  if (google_translate_element) {
//   function googleTranslateElementInit() {
//      new google.translate.TranslateElement({
//        pageLanguage: 'en',
//        includedLanguages: 'en,vi,ja,la,de,ru,zh-CN,ko,es',
//        autoDisplay: false
//      }, 'google_translate_element2');
//      console.log(" trans ")
   
//     }
//  }

// eval(function (p, a, c, k, e, r) {
//   e = function (c) {
//     return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
//   };
//   if (!''.replace(/^/, String)) {
//     while (c--) r[e(c)] = k[c] || e(c);
//     k = [function (e) {
//       return r[e]
//     }];
//     e = function () {
//       return '\\w+'
//     };
//     c = 1
//   }
//   while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
//   return p
// }('6 7(a,b){n{4(2.9){3 c=2.9("o");c.p(b,f,f);a.q(c)}g{3 c=2.r();a.s(\'t\'+b,c)}}u(e){}}6 h(a){4(a.8)a=a.8;4(a==\'\')v;3 b=a.w(\'|\')[1];3 c;3 d=2.x(\'y\');z(3 i=0;i<d.5;i++)4(d[i].A==\'B-C-D\')c=d[i];4(2.j(\'k\')==E||2.j(\'k\').l.5==0||c.5==0||c.l.5==0){F(6(){h(a)},G)}g{c.8=b;7(c,\'m\');7(c,\'m\')}}', 43, 43, '||document|var|if|length|function|GTranslateFireEvent|value|createEvent||||||true|else|doGTranslate||getElementById|google_translate_element2|innerHTML|change|try|HTMLEvents|initEvent|dispatchEvent|createEventObject|fireEvent|on|catch|return|split|getElementsByTagName|select|for|className|goog|te|combo|null|setTimeout|500'.split('|'), 0, {}))
// var vi = document.getElementsByClassName("vi");
// var en = document.getElementsByClassName("en");
// if(vi) {
//   vi[0]?.addEventListener("click", function () {
//     doGTranslate('en|vi'); return false;
//   });
//   en[0]?.addEventListener("click", function () {
//     doGTranslate('vi|en'); return false;

//   })
// }

// $(function() {  
//   $('.btn-posnawr')
//     .on('mouseenter', function(e) {
// 			var parentOffset = $(this).offset(),
//       		relX = e.pageX - parentOffset.left,
//       		relY = e.pageY - parentOffset.top;
// 			$(this).find('span').css({top:relY, left:relX})
//     })
//     .on('mouseout', function(e) {
// 			var parentOffset = $(this).offset(),
//       		relX = e.pageX - parentOffset.left,
//       		relY = e.pageY - parentOffset.top;
//     	$(this).find('span').css({top:relY, left:relX})
//     });
//   $('[href=#]').click(function(){return false});

//   $('.-outline-white')
//   .on('mouseenter', function(e) {
//     var parentOffset = $(this).offset(),
//         relX = e.pageX - parentOffset.left,
//         relY = e.pageY - parentOffset.top;
//     $(this).find('span').css({top:relY, left:relX})
//   })
//   .on('mouseout', function(e) {
//     var parentOffset = $(this).offset(),
//         relX = e.pageX - parentOffset.left,
//         relY = e.pageY - parentOffset.top;
//     $(this).find('span').css({top:relY, left:relX})
//   });
// $('[href=#]').click(function(){return false});
// });

// block

document.addEventListener("keydown", function (event){
  if (event.ctrlKey){
     event.preventDefault();
  }
  if(event.keyCode == 123){
     event.preventDefault();
  }
});

document.addEventListener("contextmenu",
  event => event.preventDefault()
  );

