const allCourses = document.querySelectorAll('.catalog__item');
const germanCourses = document.querySelectorAll('.german');
const chinaCourses = document.querySelectorAll('.china');
const spainCourses = document.querySelectorAll('.spain');

const catalogBtns = document.querySelectorAll('.catalog__btn');

const allBtn = document.getElementById('all');
const germanBtn = document.getElementById('german');
const chinaBtn = document.getElementById('china');
const spainBtn = document.getElementById('spain');

const catalogBtnsWrapper = document.querySelector('.catalog__btns');

function showAllCourses(){
     allCourses.forEach(course => {
          course.classList.remove('hide');
     });
}

function hideCourses(courses) {
     allCourses.forEach(item => {
          item.classList.add('hide');
     });
     courses.forEach(course => {
          course.classList.remove('hide');
     });
}

function activateBtn(btn) {
     catalogBtns.forEach(button => {
          button.classList.remove('active__btn');
     });
     btn.classList.add('active__btn');
}

catalogBtnsWrapper.addEventListener('click', (e) => {
     if(e.target === germanBtn) {
          activateBtn(germanBtn);
          hideCourses(germanCourses);
     } else if(e.target === spainBtn) {
          activateBtn(spainBtn);
          hideCourses(spainCourses);
     } else if(e.target === chinaBtn) {
          activateBtn(chinaBtn);
          hideCourses(chinaCourses);
     } else if(e.target === allBtn) {
          activateBtn(allBtn);
          showAllCourses();
     }
});