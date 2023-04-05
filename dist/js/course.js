  /* Courses */

     const coursesBtns = document.querySelectorAll('.lesson__btn');
     const coursesTexts = document.querySelectorAll('.program__lesson__text');

     function openText(index){
          coursesTexts[index].classList.remove('program__lesson__fadeout');
          coursesTexts[index].classList.add('program__lesson__show', 'program__lesson__fadein');
     }

     function closeText(index){
          coursesTexts[index].classList.add('program__lesson__fadeout');
          setTimeout(() => {
               coursesTexts[index].classList.remove('program__lesson__show', 'program__lesson__fadein');
          }, 250);
     }

     coursesBtns.forEach((btn, index) => {
          btn.addEventListener('click', function(e){
               if(e.target.classList.contains('active__lesson__btn')){
                    e.target.classList.remove('active__lesson__btn');
                    closeText(index);
               } else {
                    e.target.classList.add('active__lesson__btn');
                    openText(index);
               }
          });
     });


     /* Statistics */
     const topItems = document.querySelectorAll('.top__item');
     const topBtn = document.querySelector('.top__open__close');
     let topChecker = 0;

     function openTop(){
          for(let i = topItems.length - 2; i < topItems.length; i++) {
               topItems[i].classList.remove('top__none');
          }
          topBtn.textContent = 'Скрыть всю статистику';
     }

     function closeTop(){
          for(let i = topItems.length - 2; i < topItems.length; i++) {
               topItems[i].classList.add('top__none');
          }
          topBtn.textContent = 'Смотреть всю статистику';
     }

     topBtn.addEventListener('click', () => {
          topChecker++;
          if(topChecker % 2 == 0) {
               closeTop();
          } else{
               openTop();
          }
     });

     closeTop();

     /* Comments */
     const commentsItems = document.querySelectorAll('.comment');
     const commentsBtn = document.querySelector('#comment__btn');
     let commentsChecker = 0;

     function openComments(){
          for(let i = commentsItems.length - 2; i < commentsItems.length; i++) {
               commentsItems[i].classList.remove('comment__none');
          }
     }

     function closeComments(){
          for(let i = commentsItems.length - 2; i < commentsItems.length; i++) {
               commentsItems[i].classList.add('comment__none');
          }
     }

     commentsBtn.addEventListener('click', () => {
          commentsChecker++;
          if(commentsChecker % 2 == 0) {
               closeComments();
          } else{
               openComments();
          }
     });

     closeComments();