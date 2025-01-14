document.addEventListener('hexo-blog-encrypt:decrypted', function () {
    // 获取所有图片元素
    const imgs = document.querySelectorAll('img');

    imgs.forEach(img => {
        // 如果图片使用懒加载，获取其 data-src 属性
        const lazySrc = img.getAttribute('data-src');
        if (lazySrc) {
            img.setAttribute('src', lazySrc);
            img.removeAttribute('data-src'); // 移除懒加载属性
        }

        // 如果图片直接使用 src 属性，重新设置 src 来触发加载
        const src = img.getAttribute('src');
        if (src) {
            img.setAttribute('src', src);
        }
    });
});
