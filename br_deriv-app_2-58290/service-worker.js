if(!self.define){let e,r={};const i=(i,a)=>(i=new URL(i+".js",a).href,r[i]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=r,document.head.appendChild(e)}else e=i,importScripts(i),r()})).then((()=>{let e=r[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(r[d])return;let s={};const b=e=>i(e,d),p={module:{uri:d},exports:s,require:b};r[d]=Promise.all(a.map((e=>p[e]||b(e)))).then((e=>(c(...e),s)))}}define(["./workbox-b0562916"],(function(e){"use strict";importScripts("https://cdn.pushwoosh.com/webpush/v3/pushwoosh-service-worker.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/br_deriv-app_2-58290/appstore/js/appstore.appstore.689118072276ca5233ff.js",revision:"1e2f4bd3066aff9920de8c3d8dc083d8"},{url:"/br_deriv-app_2-58290/appstore/js/appstore.appstore.689118072276ca5233ff.js.LICENSE.txt",revision:"e3580f81b7f102288b6fed3407702b15"},{url:"/br_deriv-app_2-58290/appstore/js/appstore.vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_cssW-9a2d27.6471bb0a1f7d6a37d7d9.js",revision:"12d3ad71e59ab0ddf47b711f671db4fd"},{url:"/br_deriv-app_2-58290/appstore/js/appstore.vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_cssW-9a2d27.6471bb0a1f7d6a37d7d9.js.LICENSE.txt",revision:"08dc8025bcb7bb7d5a063bd66143407d"},{url:"/br_deriv-app_2-58290/appstore/js/index.js",revision:"5ecceab900c4c41394a498fdc87e50b7"},{url:"/br_deriv-app_2-58290/appstore/js/index.js.LICENSE.txt",revision:"39fdee89fff9128221072b66d6bc56e0"},{url:"/br_deriv-app_2-58290/cfd/css/cfd.cfd-app.c26bd39307abb128d0ec.css",revision:"a38d9dee795a80f309b3322963e831ef"},{url:"/br_deriv-app_2-58290/cfd/js/cfd.404.fc25d64939f5696d4263.js",revision:"21376e2e5a1f810cddd5434b71479209"},{url:"/br_deriv-app_2-58290/cfd/js/cfd.404.fc25d64939f5696d4263.js.LICENSE.txt",revision:"55d0f9d49d2493c8a9bbeb4f4ab52c5c"},{url:"/br_deriv-app_2-58290/cfd/js/cfd.cfd-app.97fe8fb68e63b9ba1be9.js",revision:"2f8435c7091ad1552d993db0eed30e0e"},{url:"/br_deriv-app_2-58290/cfd/js/cfd.cfd-app.97fe8fb68e63b9ba1be9.js.LICENSE.txt",revision:"5199ce40676e9955aebf402ebb214c54"},{url:"/br_deriv-app_2-58290/cfd/js/cfd.js",revision:"3c31fa27b992957030534be12ac0fc1a"},{url:"/br_deriv-app_2-58290/cfd/js/cfd.js.LICENSE.txt",revision:"47ee70ececb7122c1a0aaed2f560b78d"},{url:"/br_deriv-app_2-58290/cfd/js/cfd.vendors-node_modules_classnames_index_js-node_modules_formik_dist_formik_esm_js-node_modules_-611d03.b13244e39c6228f72002.js",revision:"68afa7c2f2999c3669b7d00479334095"},{url:"/br_deriv-app_2-58290/cfd/js/cfd.vendors-node_modules_classnames_index_js-node_modules_formik_dist_formik_esm_js-node_modules_-611d03.b13244e39c6228f72002.js.LICENSE.txt",revision:"f3ab70dea7539de395b3920b1ce7c004"},{url:"/br_deriv-app_2-58290/css/core.3807.65eab4b3482c8c0c51ba.main.css",revision:null},{url:"/br_deriv-app_2-58290/css/core.chunk.account-signup-modal.5eeb5a3142b39e302eda.css",revision:null},{url:"/br_deriv-app_2-58290/css/core.chunk.cfd~083cc0f8.2cc3c23bb16434c2ac95.css",revision:null},{url:"/br_deriv-app_2-58290/css/core.chunk.complaints-policy.f7da2a996b45a3de793e.css",revision:null},{url:"/br_deriv-app_2-58290/css/core.chunk.set-residence-modal.de8efe679a545c1074fa.css",revision:null},{url:"/br_deriv-app_2-58290/css/core.main~07ff1e00.43d53302b4f4c5d53b84.main.css",revision:null},{url:"/br_deriv-app_2-58290/css/core.main~182f79bf.747a739c9b8986d606d0.main.css",revision:null},{url:"/br_deriv-app_2-58290/css/core.main~352d95fa.31d6cfe0d16ae931b73c.main.css",revision:null},{url:"/br_deriv-app_2-58290/css/core.main~703a1da7.26728fbfa80047044c5b.main.css",revision:null},{url:"/br_deriv-app_2-58290/css/core.main~7e76c2e1.c641eb4b5b8601ce1d24.main.css",revision:null},{url:"/br_deriv-app_2-58290/css/core.main~9a8b795a.2cc59b89be41814b43a0.main.css",revision:null},{url:"/br_deriv-app_2-58290/css/core.main~d5ef20ee.e48b11e678b45a1cc54f.main.css",revision:null},{url:"/br_deriv-app_2-58290/favicon.ico",revision:"0cb8c9c65c9adde7eec4f6f79e2f4076"},{url:"/br_deriv-app_2-58290/js/core.1182.bfbd3b7a8e7183bb8bd5.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.1182.bfbd3b7a8e7183bb8bd5.js.LICENSE.txt",revision:"05efa0f2ef59b13b6cb1cae8031f1c52"},{url:"/br_deriv-app_2-58290/js/core.1360.bce90d31b7241298c5b8.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.1360.bce90d31b7241298c5b8.js.LICENSE.txt",revision:"411548f347b07fd9b880024b1215db1d"},{url:"/br_deriv-app_2-58290/js/core.2791.45ff3e75f383b48fb14c.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.2791.45ff3e75f383b48fb14c.js.LICENSE.txt",revision:"9312913abd3ec291e09a77758d4b839e"},{url:"/br_deriv-app_2-58290/js/core.2846.a930acc8357821bdd516.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.3190.7d76931ac4455b1d416d.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.338.4878484fb8aa34d52a21.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.338.4878484fb8aa34d52a21.js.LICENSE.txt",revision:"6fce53c7c7713ebf61712cc2929746fa"},{url:"/br_deriv-app_2-58290/js/core.374.89f9af149e6d0e5f4b38.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.374.89f9af149e6d0e5f4b38.js.LICENSE.txt",revision:"c47fb89f944fc413937f1d857df6495a"},{url:"/br_deriv-app_2-58290/js/core.3806.b8b3ec197dff1f6505d5.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.3806.b8b3ec197dff1f6505d5.js.LICENSE.txt",revision:"8e7fa176b006150306288bd092a696c0"},{url:"/br_deriv-app_2-58290/js/core.3807.b0f70f5672100adbdd3b.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.3807.b0f70f5672100adbdd3b.js.LICENSE.txt",revision:"81896c98bac7b5b16ab1d3790da5b937"},{url:"/br_deriv-app_2-58290/js/core.4400.ea643b0dd464d605a540.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.4755.1ee6a2eeccf9df96b1f2.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.4755.1ee6a2eeccf9df96b1f2.js.LICENSE.txt",revision:"7ec01595672f75e83fd81b41f132f4c1"},{url:"/br_deriv-app_2-58290/js/core.516.4c2adb747200c150748d.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.516.4c2adb747200c150748d.js.LICENSE.txt",revision:"caa639c0a9c790606af088aa1f8f5c26"},{url:"/br_deriv-app_2-58290/js/core.6089.f58301b662afc4d9bee4.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.6279.bc66d3e16f8ca11e935f.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.6279.bc66d3e16f8ca11e935f.js.LICENSE.txt",revision:"6fce53c7c7713ebf61712cc2929746fa"},{url:"/br_deriv-app_2-58290/js/core.6931.117a55d888a279e6ced1.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.6931.117a55d888a279e6ced1.js.LICENSE.txt",revision:"c74e4063dd4a8c60ce82963c023a070e"},{url:"/br_deriv-app_2-58290/js/core.7598.2fd32823dbde75d5dad1.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.7598.2fd32823dbde75d5dad1.js.LICENSE.txt",revision:"9048b1757255eadd33395e6e79746ece"},{url:"/br_deriv-app_2-58290/js/core.8605.063325ff3acfe9c74a2a.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.8605.063325ff3acfe9c74a2a.js.LICENSE.txt",revision:"0348e5b85f572617cbb6a9a093918ea6"},{url:"/br_deriv-app_2-58290/js/core.8996.743ad60090347c108e6c.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.8996.743ad60090347c108e6c.js.LICENSE.txt",revision:"a16bc6da978d0d0e93239b2ef9f7d540"},{url:"/br_deriv-app_2-58290/js/core.9268.57a871d7d180e4e5147d.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.9268.57a871d7d180e4e5147d.js.LICENSE.txt",revision:"b15682cdbb7bf0792ab845871bbf3ba5"},{url:"/br_deriv-app_2-58290/js/core.9273.6e1e75be95f81432c9b6.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.9514.4ac7951f856cb52ac113.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.9514.4ac7951f856cb52ac113.js.LICENSE.txt",revision:"e81688a9cf3aa8a7481b976f81916512"},{url:"/br_deriv-app_2-58290/js/core.account-info.a345d6c0ceaac56dcd95.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.account-signup-modal.d626d32b7b76818c62bd.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.account.756bd53363b9cd7dc387.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.appstore.23d680900d833214f716.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.appstore.23d680900d833214f716.js.LICENSE.txt",revision:"39fdee89fff9128221072b66d6bc56e0"},{url:"/br_deriv-app_2-58290/js/core.bot.caa191ff4a36ecc51819.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.cashier.2efc343b2ec0b45386b6.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.cfd~1dbf2394.b0ae9b9c270a5aca3c00.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.cfd~1dbf2394.b0ae9b9c270a5aca3c00.js.LICENSE.txt",revision:"47ee70ececb7122c1a0aaed2f560b78d"},{url:"/br_deriv-app_2-58290/js/core.cfd~3b8e11e6.3a408421323fcb4d8ea1.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.cfd~adf775f1.2dea305136914937ae7d.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.close-mx-mlt-account-modal.e427838c7494a0d0f524.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.complaints-policy.5439d11d1aecd2c915c3.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.main~07ff1e00.4ffeb3465e692511272a.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.main~182f79bf.3ee00fc14a3357a4b15b.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.main~1a408eaf.2b37652310ddf92d802a.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.main~352d95fa.39d9466dd1ddf864ca09.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.main~4e43d1b7.4180384ce6711e972853.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.main~66104539.6b4c99459c741658d281.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.main~6b4cb1b5.c933badbf06664ece19e.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.main~703a1da7.6e39f6af872b98e4defc.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.main~7e76c2e1.a046f2a2efa2053f4d2e.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.main~85fa0c87.2c27b208583651bbbed3.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.main~9a79028c.3727e7af063dc4eeeaba.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.main~9a8b795a.7e0bee4a335f70c8f963.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.main~a8149675.eb2d4629f3e664dd7b2d.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.main~ba165128.b4403f0caa6169e28479.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.main~cb888b8a.a2bf173667962e31e8dd.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.main~cf448228.a205531ee2d29a5b196e.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.main~fc854bfa.b9ccbd4a55bb35a4838c.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.main~fd2ee733.2134ad874cac6ef09af9.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.reality-check-modal.fc7e978cd463a9f7ac44.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.reset-email-modal.da0d8da377d71272e635.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.reset-or-unlink-password-modal.b1200aafa6fa45ada20a.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.reset-password-modal.1d2e3004e6cefe6600bc.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.set-residence-modal.640db7b9c641ce5dfa9a.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.settings-language.d9324e8b4714b34bcff1.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.settings-theme.473c7218b4abfef19789.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.trader.df2ed31cee949535e207.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.update-email-modal.6f2c5dcb778b27145e15.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.welcome-modal~5c04ba06.ca50fecc03c715c86154.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.welcome-modal~734a261b.ab0264b6122796cc2d45.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.welcome-modal~7a15df7a.1148c07d5ef559dcade5.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.welcome-modal~9624755f.c5cd908fbddcce3a59f3.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.welcome-modal~b407d6a8.583c3ecfa1c9c589bbe3.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.welcome-modal~e0489f8e.beb71cdec2e3a2f2dee1.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.welcome-modal~f0b1ccd8.2a50daf476c8c2345a24.js",revision:null},{url:"/br_deriv-app_2-58290/js/core.welcome-modal~f53eb8c1.76bbf476adad99f13916.js",revision:null},{url:"/br_deriv-app_2-58290/public/images/app/header/dbot-logo.svg",revision:"74dd603772623201c277552d07db9dea"},{url:"/br_deriv-app_2-58290/public/images/app/header/dmt5-logo.svg",revision:"bb9d72a69387257a410f35d42763287d"},{url:"/br_deriv-app_2-58290/public/images/app/header/dtrader-logo.svg",revision:"e0d36a7365f13540be65f2ba83781f83"},{url:"/br_deriv-app_2-58290/public/images/common/404.png",revision:"b2fd89fd64d75b5b75bb7e75f2bb9029"},{url:"/br_deriv-app_2-58290/public/images/common/close_account_banner.png",revision:"47457964f57828ac882a49dcd4009a1d"},{url:"/br_deriv-app_2-58290/public/images/common/derivgo_banner.png",revision:"cfa6bac9d229ecf1a60adcf0f9c283f9"},{url:"/br_deriv-app_2-58290/public/images/common/dp2p_banner.png",revision:"efbd723ab548be783bb6411d18cf168a"},{url:"/br_deriv-app_2-58290/public/images/common/ke_alien_card.png",revision:"8fc3d3345db92d1333e59a72ba5be769"},{url:"/br_deriv-app_2-58290/public/images/common/ke_national_identity_card.png",revision:"3d54bcbb6a019c272e28b15601774a2a"},{url:"/br_deriv-app_2-58290/public/images/common/ke_passport.png",revision:"d111da0604e97583feb278a206c8c5c3"},{url:"/br_deriv-app_2-58290/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png",revision:"8b90a2d122bd63b19b2987d8fca2c75d"},{url:"/br_deriv-app_2-58290/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png",revision:"cc6cdd9391b053108005c72f5dcc3a57"},{url:"/br_deriv-app_2-58290/public/images/common/ng_drivers_license.png",revision:"ad0c31da5da08e640308d2ea3447b681"},{url:"/br_deriv-app_2-58290/public/images/common/ng_nin_slip.png",revision:"d743586bddc5ddd91e0bb820f0718597"},{url:"/br_deriv-app_2-58290/public/images/common/ng_voter_id.png",revision:"47f0de9fd4bf1da1b9bda784889d7fd0"},{url:"/br_deriv-app_2-58290/public/images/common/trustpilot_banner.png",revision:"1561d90dfa4e20595ff9a3c4b3b8e239"},{url:"/br_deriv-app_2-58290/public/images/common/welcome-bg-blue.b45a36e7985e837390d4dbec26bf1dce.svg",revision:null},{url:"/br_deriv-app_2-58290/public/images/common/welcome-bg-red.439aaf362ccc377e019dedcb7ddc34e0.svg",revision:null},{url:"/br_deriv-app_2-58290/public/images/common/za_national_identity_card.png",revision:"48c0447163401fe1d2705072a7f1c9e8"},{url:"/br_deriv-app_2-58290/public/images/favicons/apple-touch-icon-114.png",revision:"effff3cb7c7aa7890a0f613252d40b8c"},{url:"/br_deriv-app_2-58290/public/images/favicons/apple-touch-icon-120.png",revision:"30ea8aae4db71e707571a615a1207462"},{url:"/br_deriv-app_2-58290/public/images/favicons/apple-touch-icon-144.png",revision:"1fbf7ddfba9aa060af026c6856ffec44"},{url:"/br_deriv-app_2-58290/public/images/favicons/apple-touch-icon-152.png",revision:"816388a881453a30d4c2b2711fa05e64"},{url:"/br_deriv-app_2-58290/public/images/favicons/apple-touch-icon-180.png",revision:"a8db9d4eb2e09a4357ecd6a87a1dd6d9"},{url:"/br_deriv-app_2-58290/public/images/favicons/apple-touch-icon-57.png",revision:"535f09e679b29d21c3c5b9d6447d2585"},{url:"/br_deriv-app_2-58290/public/images/favicons/apple-touch-icon-60.png",revision:"56a21b5a2b088cbcf26912c17061b612"},{url:"/br_deriv-app_2-58290/public/images/favicons/apple-touch-icon-72.png",revision:"6786ed4ef1e2e96e3d4edebc3be12fd5"},{url:"/br_deriv-app_2-58290/public/images/favicons/apple-touch-icon-76.png",revision:"796a1bbc9a1a6ebdf0a002af495f9233"},{url:"/br_deriv-app_2-58290/public/images/favicons/favicon-16.png",revision:"8cf977893d6011fc63021bb7ce461544"},{url:"/br_deriv-app_2-58290/public/images/favicons/favicon-160.png",revision:"45fe97d84d1923f3e05626ea79971262"},{url:"/br_deriv-app_2-58290/public/images/favicons/favicon-192.png",revision:"3975b58ec899147249328917c81a90f4"},{url:"/br_deriv-app_2-58290/public/images/favicons/favicon-32.png",revision:"5bf792f88750e72e5e5ed56fc96c6efb"},{url:"/br_deriv-app_2-58290/public/images/favicons/favicon-96.png",revision:"bbaa020b9ae1944f52a684c311edda66"},{url:"/br_deriv-app_2-58290/public/images/favicons/favicon.ico",revision:"0cb8c9c65c9adde7eec4f6f79e2f4076"},{url:"/br_deriv-app_2-58290/public/sprites/brand.b3f15ed36d0d2db95a0646380655b7a2.svg",revision:"20ad1e2992e66ccbba6c61f2e9079be0"},{url:"/br_deriv-app_2-58290/public/sprites/cashier.b5226ef15b8e336be02e934751407c05.svg",revision:"b2a0489285f8c5265f87024f6b7983fe"},{url:"/br_deriv-app_2-58290/public/sprites/common.784d255e58485e5ee9f70cc9a40c7ffe.svg",revision:"8d8594b913a6f651602a8da415335e85"},{url:"/br_deriv-app_2-58290/public/sprites/contract.1ca5743a5b5f7fd7201608c9301cc540.svg",revision:"b505df6ba2e73a30257f3ccb7e1af7e1"},{url:"/br_deriv-app_2-58290/public/sprites/currency.bb01e214db4460f58372ecb28c62765e.svg",revision:"3955f98d0403f371acffa892627a39c6"},{url:"/br_deriv-app_2-58290/public/sprites/dxtrade.3a8eee97254a48a1ca9cff7ba17491c8.svg",revision:"177fb07c55e16c9e2f392e73fca70a89"},{url:"/br_deriv-app_2-58290/public/sprites/flag.2679f4a3231842793a9c71fec07e0f8b.svg",revision:"0b6be63adf18362585e1f439d7d20bae"},{url:"/br_deriv-app_2-58290/public/sprites/mt5.9eefdebfceac37a07bc45349dfcb533f.svg",revision:"c7c45ecc8d96bafbcd71b31389e3d078"},{url:"/br_deriv-app_2-58290/public/sprites/option.3971bb040600e58a1e30dc008551a163.svg",revision:"be90e5e9d25a16c5ebabf8c6b698dd57"},{url:"/br_deriv-app_2-58290/public/sprites/stock.1a672b1203ae2066f107a58ffb137c9c.svg",revision:"d8505022d6f871323ddb92c18208246a"},{url:"/br_deriv-app_2-58290/public/sprites/tradetype.b9ed31953cc8da3d84bafb6f5e62ee3b.svg",revision:"04d969ea5b62d0ad45915b5ace954021"},{url:"/br_deriv-app_2-58290/public/sprites/underlying.8a87b48f77ed0ef90c3956e0388cb2e1.svg",revision:"9f46924f43ab90194b035a6071eebace"},{url:"/br_deriv-app_2-58290/public/sprites/wallet.04e5a96d8a64d80ba390218d17c0a487.svg",revision:"a385d07b496daa519f7d61ca8cda77df"}],{}),e.cleanupOutdatedCaches()}));
