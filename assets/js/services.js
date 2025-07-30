document.addEventListener('DOMContentLoaded', function() {
    async function initializeServicesPage() {
        await generateServiceCards();
        setupEventListeners();
    }

    async function generateServiceCards() {
        const container = document.getElementById('services-container');
        if (!container) return;

        try {
            const response = await fetch('data/service-list.json');
            const services = await response.json();

            if (services.length === 0) {
                container.innerHTML = '<p>Daftar layanan belum tersedia.</p>';
                return;
            }

            container.innerHTML = services.map(service => `
                <div class="service-card" data-category="${service.category}">
                    <div class="service-icon"><i class="fas ${service.icon}"></i></div>
                    <div class="service-body">
                        <h3 class="service-title">${service.title}</h3>
                        <p class="service-desc">${service.description}</p>
                        <a href="#" class="service-link" data-service="${service.data_key}">
                            ${service.link_text} <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            `).join('');
            
        } catch (error) {
            console.error('Gagal memuat daftar layanan:', error);
            container.innerHTML = '<p>Terjadi kesalahan saat memuat layanan. Silakan coba lagi nanti.</p>';
        }
    }

    function setupEventListeners() {
        const categoryBtns = document.querySelectorAll('.category-btn');
        const serviceCards = document.querySelectorAll('.service-card');
        const modal = document.getElementById('serviceModal');
        const closeModalBtn = document.querySelector('.close-modal');
        const serviceLinks = document.querySelectorAll('.service-link');

        if (!modal) return;
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                categoryBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                const category = this.dataset.category;
                serviceCards.forEach(card => {
                    card.style.display = (category === 'all' || card.dataset.category === category) ? 'block' : 'none';
                });
            });
        });

        const openModal = () => modal.style.display = 'flex';
        const closeModal = () => modal.style.display = 'none';

        serviceLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const serviceKey = this.dataset.service;
                loadServiceDetail(serviceKey);
                openModal();
            });
        });
        
        closeModalBtn.addEventListener('click', closeModal);
        window.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }
    
    async function loadServiceDetail(serviceKey) {
        const modalContent = document.getElementById('modal-content');
        try {
            const response = await fetch('data/services.json');
            const servicesData = await response.json();
            const service = servicesData[serviceKey];
            
            if (service) {
                modalContent.innerHTML = `<h3>${service.title}</h3>${service.content}`;
            } else {
                modalContent.innerHTML = `<h3>Informasi Tidak Ditemukan</h3><p>Detail untuk layanan ini belum tersedia.</p>`;
            }
        } catch (error) {
            console.error("Gagal memuat detail layanan:", error);
            modalContent.innerHTML = `<h3>Terjadi Kesalahan</h3><p>Tidak dapat memuat informasi. Silakan coba lagi nanti.</p>`;
        }
    }
    
    initializeServicesPage();
});