// 获取整个页面的文本内容
const hiddenPageText = document.body.textContent || document.body.innerText;

// 检查是否包含“请输入密码查看”
if (hiddenPageText.includes('这是一个加密文章ItIsHidden')) {

// 获取导航栏元素
const nav = document.getElementById('nav');

// 检查元素是否存在并删除
if (nav) {
    nav.remove();
} else {
}

// 定义要检测的元素选择器
const targetSelector = "#footer #footer-wrap";

// 定义检测间隔时间（毫秒）
const interval = 100;

// 创建检测并删除函数
const findAndRemove = () => {
    const footerWrap = document.querySelector(targetSelector);
    if (footerWrap) {
        footerWrap.remove();
    } else {
        setTimeout(findAndRemove, interval); // 未找到则继续检测
    }
};

// 开始执行检测
findAndRemove();

} else {
}