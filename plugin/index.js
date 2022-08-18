const plugin = require('tailwindcss/plugin');
const minaStylesComponents = require('./mina-style');

const minaComponents = plugin(({ addBase, addComponents, theme }) => {
    console.log('custom tailwind css plugin setup!', addBase, addComponents, theme);
    addComponents(minaStylesComponents); // 会将mina-style的样式注入到全局

}, {
    theme: {
        // 扩展颜色
        colors: {
            // css 变量 --sc-bgcolor来自 minaStyle
            'mina-select-hover': 'var(--sc-bgcolor)',
            // 使用： <div class="bg-mina-select-hover"></div> 黑科技
        }
    }
});

module.exports = minaComponents;