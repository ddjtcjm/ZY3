document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel-container');
    
    carousels.forEach((container, index) => {
        const images = container.querySelectorAll('.carousel img');
        const leftArrow = container.querySelector('.left-arrow');
        const rightArrow = container.querySelector('.right-arrow');
        const dotsContainer = container.querySelector('.dots');
        const progressBar = container.querySelector('.progress');
        
        let currentIndex = 0;
        const interval = 5000; // 5秒切换一次图片
        
        // 创建圆点
        images.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dotsContainer.appendChild(dot);
        });
        
        const dots = container.querySelectorAll('.dot');
        
        function updateCarousel() {
            images.forEach((img, i) => {
                img.classList.remove('active');
                dots[i].classList.remove('active');
            });
            images[currentIndex].classList.add('active');
            dots[currentIndex].classList.add('active');
            
            // 更新进度条
            progressBar.style.width = `${((currentIndex + 1) / images.length) * 100}%`;
        }
        
        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel();
        }
        
        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateCarousel();
        }
        
        leftArrow.addEventListener('click', prevImage);
        rightArrow.addEventListener('click', nextImage);
        
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                currentIndex = i;
                updateCarousel();
            });
        });
        
        // 自动播放
        setInterval(nextImage, interval);
    });
});