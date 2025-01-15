window.addEventListener('hexo-blog-decrypt', function () {
console.log('解密完成，开始重新加载图片');

// 获取所有图片元素
const imgs = document.querySelectorAll('img');

// 遍历所有图片，重新加载
imgs.forEach(img => {
    const lazySrc = img.getAttribute('data-lazy-src');
    if (lazySrc) {
        img.setAttribute('src', lazySrc); // 使用 data-lazy-src 的值更新 src 属性
    } else {
        const src = img.getAttribute('src');
        if (src) {
            img.setAttribute('src', src); // 重新触发 src 加载
        }
    }
});

console.log('处理完成');
});

// 获取导航栏元素
const nav = document.getElementById('nav');

// 检查元素是否存在并删除
if (nav) {
    nav.remove();
    console.log('导航栏已成功删除');
} else {
    console.log('导航栏不存在，无法删除');
}
