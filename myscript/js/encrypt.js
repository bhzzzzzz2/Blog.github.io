// 获取整个页面的文本内容
const encryptPageText = document.body.textContent || document.body.innerText;

// 检查是否包含“请输入密码查看”
if (encryptPageText.includes('这是一个加密文章ItIsHidden')) {

console.log('尝试直接重新加载图片，避免一直加载，若没有解密将无法进行');

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


window.addEventListener('hexo-blog-decrypt', function () {
console.log('已解密，尝试重新加载图片，避免一直加载');

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
});

} else {
}




