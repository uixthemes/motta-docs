import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';

export default defineConfig({
  site: 'https://docs.uix.store',
  base: '/motta',
  trailingSlash: 'always',
  // The old Installation section is now a single "Install theme" page under
  // Getting Started. Keep the old URLs working. Keys are relative to `base`;
  // destinations include it.
  redirects: {
    '/installation/download-theme/': '/motta/getting-started/install-theme/#step-1-download-theme',
    '/installation/install-theme/': '/motta/getting-started/install-theme/#step-2-install-theme',
    '/installation/install-plugins/':
      '/motta/getting-started/install-theme/#step-3-install-plugins',
    '/installation/config-plugins/':
      '/motta/getting-started/install-theme/#step-4-configure-image-sizes',
    '/installation/import-demo/': '/motta/getting-started/install-theme/#step-5-import-demo',
  },
  integrations: [
    starlight({
      title: 'Motta Docs',
      description: 'User documentation for the Motta WordPress theme by UIX Themes.',
      customCss: ['./src/styles/custom.css'],
      lastUpdated: true,
      plugins: [starlightImageZoom()],
      // Sidebar mirrors the original Docsify _sidebar.md navigation.
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            'getting-started',
            'getting-started/before-you-install',
            'getting-started/install-theme',
            'getting-started/theme-license',
            'getting-started/support',
          ],
        },
        {
          label: 'Theme Options',
          items: [
            'theme-options/customizer',
            'theme-options/general',
            'theme-options/styling',
            'theme-options/typography',
            'theme-options/menus',
            'theme-options/widgets',
            'theme-options/additional-css',
            'theme-options/header',
            'theme-options/footer',
            'theme-options/blog',
            'theme-options/page',
            'theme-options/woocommerce',
            'theme-options/shop',
            'theme-options/single-product',
            'theme-options/help-center',
            'theme-options/mobile',
          ],
        },
        { label: 'Elementor', items: ['elementor/knowledge-base', 'elementor/templates'] },
        {
          label: 'Header',
          items: [
            'header/topbar',
            'header/campaign-bar',
            'header/layout',
            'header/builder',
            {
              label: 'Header Elements',
              items: [
                'header/logo',
                'header/cart',
                'header/wishlist',
                'header/compare',
                'header/account',
                'header/search',
                'header/primary-menu',
                'header/secondary-menu',
                'header/category-menu',
                'header/hamburger-menu',
                'header/custom-text',
                'header/preferences',
                'header/view-history',
              ],
            },
            {
              label: 'Mega Menu',
              items: [
                'header/mega-menu-create',
                'header/mega-menu-config',
                'header/mega-menu-horizontal',
                'header/mega-menu-vertical',
                'header/mega-menu-hamburger',
              ],
            },
            'header/sticky-header',
          ],
        },
        {
          label: 'Pages',
          items: ['pages/create-new-page', 'pages/display-settings', 'pages/homepages'],
        },
        {
          label: 'WooCommerce',
          items: [
            'woocommerce/getting-started',
            'woocommerce/woo-pages',
            'woocommerce/checkout',
            'woocommerce/order-tracking',
            'woocommerce/my-account',
            'woocommerce/catalog-mode',
          ],
        },
        {
          label: 'Shop',
          items: [
            'shop/wishlist',
            'shop/compare',
            'shop/currency',
            'shop/shop',
            {
              label: 'Products Filter',
              items: [
                'shop/active-products-filter',
                'shop/products-filter-options',
                'shop/filter-by-price',
                'shop/filter-by-rating',
                'shop/filter-by-categories',
                'shop/filter-by-brands',
                'shop/filter-by-attributes',
                'shop/filter-by-color',
                'shop/filter-by-size',
              ],
            },
          ],
        },
        {
          label: 'Product Page',
          items: [
            'product-page/product-layouts',
            {
              label: 'Product Types',
              items: [
                'product-page/simple-product',
                'product-page/variable-product',
                'product-page/color-product',
                'product-page/image-product',
                'product-page/variation-images',
                'product-page/countdown-product',
                'product-page/affiliate-product',
                'product-page/video-product',
                'product-page/product-360',
                'product-page/grouped-product',
              ],
            },
            'product-page/product-settings',
            'product-page/sticky-atc',
            'product-page/size-guide',
            'product-page/product-tabs',
            'product-page/buy-now',
            'product-page/frequently-bought-together',
          ],
        },
        {
          label: 'Mobile',
          items: [
            'mobile/header',
            'mobile/footer',
            'mobile/shop',
            'mobile/product',
            'mobile/navigation-bar',
          ],
        },
        {
          label: 'Popup',
          items: ['popup/introduction', 'popup/create-a-popup', 'popup/display-settings'],
        },
        {
          label: 'Translation',
          items: [
            'translation/setup-language',
            {
              label: 'Translate Your Site',
              items: [
                { label: 'Overview', slug: 'translation/translate-site' },
                'translation/loco-translate',
                'translation/poedit',
              ],
            },
            'translation/store-translations',
            'translation/multilingual',
          ],
        },
        {
          label: 'Customize Theme',
          items: [
            'customize-theme/child-theme',
            'customize-theme/customize-with-plugins',
            'customize-theme/edit-texts',
            'customize-theme/add-custom-fonts',
          ],
        },
        { label: 'Other', items: ['other/instagram', 'other/site-speed'] },
        {
          label: 'Updates',
          items: ['updates/update-theme', 'updates/update-plugins', 'updates/changelog'],
        },
      ],
    }),
  ],
});
