function tabs({
     tabsBtnsSelector,
     tabsListsSelector
}){
     const tabsBtns = document.querySelectorAll(tabsBtnsSelector);
     const tabsLists = document.querySelectorAll(tabsListsSelector);
     tabsBtns.forEach((element, index) => {
          element.addEventListener('click', function(){
               tabsBtns.forEach((element, i) => {
                    element.classList.remove('active__dot');
                    tabsLists[i].classList.remove('show', 'fade');
               });
               element.classList.add('active__dot');
               tabsLists[index].classList.add('show', 'fade');
          });
     });
}

export default tabs;