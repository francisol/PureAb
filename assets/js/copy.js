function copyCode(button) {
    const pre = button.parentElement.querySelector('pre');
    const code = pre.textContent;
    
    navigator.clipboard.writeText(code).then(() => {
      button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      `;
      
      setTimeout(() => {
        button.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        `;
      }, 2000);
    }).catch(err => {
      console.error('复制失败:', err);
    });
  }

  // 监听滚动，高亮当前阅读的章节
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 移除所有 active 类
                document.querySelectorAll('.toc-content a').forEach(link => {
                    link.classList.remove('active');
                });
                
                // 为当前章节添加 active 类
                const id = entry.target.getAttribute('id');
                const tocLink = document.querySelector(`.toc-content a[href="#${id}"]`);
                if (tocLink) {
                    tocLink.classList.add('active');
                }
            }
        });
    }, {
        threshold: 0.5
    });

    // 观察所有标题元素
    document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]').forEach(heading => {
        observer.observe(heading);
    });
});