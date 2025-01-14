document.addEventListener('hexo-blog-encrypt:decrypted', function () {
    const imgs = document.querySelectorAll('img');
    imgs.forEach(img => {
        const src = img.getAttribute('src');
        if (src) img.setAttribute('src', src); // 重新触发图片加载
    });
});
