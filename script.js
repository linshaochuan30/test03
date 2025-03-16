// 等待文档加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // 汉堡菜单点击事件
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    if (burger) {
        burger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            burger.classList.toggle('toggle');
        });
    }
    
    // 导航链接点击事件
    const navItems = document.querySelectorAll('.nav-links a');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
            burger.classList.remove('toggle');
            
            // 更新活动链接
            navItems.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 更新活动导航链接
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    
    // 初始化时更新一次活动链接
    updateActiveNavLink();
    
    // 创建图表
    createCharts();
});

// 创建所有图表
function createCharts() {
    // 季度销量趋势图
    const salesChartEl = document.getElementById('salesChart');
    if (salesChartEl) {
        const salesChart = new Chart(salesChartEl, {
            type: 'bar',
            data: {
                labels: ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024'],
                datasets: [{
                    label: '季度销量（辆）',
                    data: [32500, 36800, 39700, 43800],
                    backgroundColor: '#1e88e5',
                    borderColor: '#1e88e5',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: '销量（辆）'
                        }
                    }
                }
            }
        });
    }
    
    // 车型销售占比图
    const modelChartEl = document.getElementById('modelChart');
    if (modelChartEl) {
        const modelChart = new Chart(modelChartEl, {
            type: 'pie',
            data: {
                labels: ['P7i', 'G9', 'P5', 'G5'],
                datasets: [{
                    data: [38, 28, 23, 11],
                    backgroundColor: [
                        '#1e88e5',
                        '#00acc1',
                        '#ff5722',
                        '#43a047'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'right'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.raw}%`;
                            }
                        }
                    }
                }
            }
        });
    }
    
    // 市场份额对比图
    const marketShareChartEl = document.getElementById('marketShareChart');
    if (marketShareChartEl) {
        const marketShareChart = new Chart(marketShareChartEl, {
            type: 'bar',
            data: {
                labels: ['特斯拉', '比亚迪', '蔚来', '小鹏', '理想', '其他'],
                datasets: [{
                    label: '市场份额（%）',
                    data: [18, 16, 14, 12, 10, 30],
                    backgroundColor: [
                        '#1e88e5',
                        '#00acc1',
                        '#ff5722',
                        '#43a047',
                        '#7e57c2',
                        '#9e9e9e'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                scales: {
                    x: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: '市场份额（%）'
                        }
                    }
                }
            }
        });
    }
    
    // 收入与利润图
    const revenueChartEl = document.getElementById('revenueChart');
    if (revenueChartEl) {
        const revenueChart = new Chart(revenueChartEl, {
            type: 'line',
            data: {
                labels: ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024'],
                datasets: [
                    {
                        label: '季度收入（亿元）',
                        data: [98, 112, 118, 128],
                        borderColor: '#1e88e5',
                        backgroundColor: 'rgba(30, 136, 229, 0.1)',
                        fill: true,
                        tension: 0.3
                    },
                    {
                        label: '毛利润（亿元）',
                        data: [14.7, 16.8, 17.7, 19.2],
                        borderColor: '#43a047',
                        backgroundColor: 'rgba(67, 160, 71, 0.1)',
                        fill: true,
                        tension: 0.3
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: '金额（亿元）'
                        }
                    }
                }
            }
        });
    }
    
    // 现金流图
    const cashFlowChartEl = document.getElementById('cashFlowChart');
    if (cashFlowChartEl) {
        const cashFlowChart = new Chart(cashFlowChartEl, {
            type: 'bar',
            data: {
                labels: ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024'],
                datasets: [
                    {
                        label: '经营现金流（亿元）',
                        data: [5.2, 6.8, 7.5, 9.0],
                        backgroundColor: '#1e88e5'
                    },
                    {
                        label: '资本支出（亿元）',
                        data: [10.5, 11.2, 10.8, 10.1],
                        backgroundColor: '#ff5722'
                    },
                    {
                        label: '研发投入（亿元）',
                        data: [8.5, 9.2, 9.5, 9.6],
                        backgroundColor: '#00acc1'
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: '金额（亿元）'
                        }
                    }
                }
            }
        });
    }
}

// 监听元素是否在视口中
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// 添加滚动动画
window.addEventListener('scroll', function() {
    const fadeElements = document.querySelectorAll('.fade-in-up');
    
    fadeElements.forEach(element => {
        if (isInViewport(element) && !element.classList.contains('active')) {
            element.classList.add('active');
        }
    });
});