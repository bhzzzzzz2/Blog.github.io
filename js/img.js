// 监听 hexo-blog-decrypt 事件
window.addEventListener('hexo-blog-decrypt', function () {
    console.log('解密完成，开始执行图片加载逻辑');

    // 获取所有图片元素
    const imgs = document.querySelectorAll('img');

    // 遍历所有图片，重新加载
    imgs.forEach(img => {
        const lazySrc = img.getAttribute('data-src');
        if (lazySrc) {
            img.setAttribute('src', lazySrc); // 将懒加载属性应用到 src
            img.removeAttribute('data-src'); // 移除懒加载标志
        } else {
            const src = img.getAttribute('src');
            if (src) {
                img.setAttribute('src', src); // 重新触发 src 加载
            }
        }
    });
    // 延迟 500 毫秒后刷新页面
    setTimeout(() => {
        console.log('图片加载逻辑完成，页面即将刷新');
        location.reload(); // 刷新页面
    }, 1000);
});

