window.addEventListener('DOMContentLoaded', () => {
     /* Nav */
     const navMoreBtn = document.querySelector('.other__links i');
     const navDropMenu = document.querySelector('.dropmenu');
     navMoreBtn.addEventListener('click', () => {
          navDropMenu.classList.toggle('dropmenu-active');
     });
     const menuIconWrapper = document.querySelector('.menu-icon-wrapper');
     const menuIcon = document.querySelector('.menu-icon');
     const mobileMenu = document.querySelector('.mobile__menu');
     let mobileMenuChecker = 0;
     menuIconWrapper.addEventListener('click', () => {
          menuIcon.classList.toggle('menu-icon-active');
          mobileMenuChecker++;
          if (mobileMenuChecker % 2 === 1) {
               mobileMenu.style.display = 'flex';
               setTimeout(() => {
                    mobileMenu.style.opacity = 1;
                    document.body.style.overflow = 'hidden'; 
               }, 1);
          } else {
               mobileMenu.style.opacity = 0;
               document.body.style.overflow = 'auto';
               setTimeout(() => {
                    mobileMenu.style.display = 'none';
               }, 200);
          }
     });
     /* Modal */
     const closeBtns = document.querySelectorAll('.close__btn'),
           navLoginBtn = document.querySelector('#login'),
           loginModal = document.querySelector('#login__modal'),
           loginOpen = document.querySelector('#login__open'),
           loginOpenMobile = document.querySelector('#login__mob'),
           registerModal = document.querySelector('#register__modal'),
           registerOpen = document.querySelector('#register__open');
     const openModal = (modal) => {
          modal.style.display = 'flex';
          document.body.style.overflowY = 'hidden';
     };
     const closeModal = () => {
          document.body.style.overflowY = 'auto';
          registerModal.style.display = 'none';
          loginModal.style.display = 'none';
     };
     closeBtns.forEach(btn => {
          btn.addEventListener('click', closeModal);
     });
     navLoginBtn.addEventListener('click', () => {
          openModal(loginModal);
     });
     loginOpen.addEventListener('click', () => {
          closeModal();
          openModal(loginModal);
     });
     loginOpenMobile.addEventListener('click', () => {
          closeModal();
          openModal(loginModal);
     });
     registerOpen.addEventListener('click', () => {
          closeModal();
          openModal(registerModal);
     });
});