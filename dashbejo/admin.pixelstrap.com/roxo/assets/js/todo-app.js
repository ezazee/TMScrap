const addTodoBtn = document.querySelector('.add-todo-btn');

addTodoBtn.onclick = function () {
  const todoForm = document.querySelector('.todo-form');
  todoForm.classList.remove('hidden');
  todoForm.classList.add('block');
  addTodoBtn.classList.add('hidden');
  setTimeout(() => {
    todoForm.classList.add('show');
  }, 200);

  const closeForm = document.querySelector('.todo-form-close');
  closeForm.onclick = () => {
    todoForm.classList.remove('show');

    addTodoBtn.classList.remove('hidden');
    setTimeout(() => {
      todoForm.classList.remove('block');
      todoForm.classList.add('hidden');
    }, 200);
  };

  todoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get('title');
    const description = formData.get('description');

    if (title !== '' && description !== '') {
      const todoApp = document.querySelector('.todo-app');

      const html = `
             <li class="todo-item flex items-center gap-2 justify-between pt-[13px] mt-[13px] border-t border-light first:mt-0 first:pt-0 first:border-none"> 
                    <div class="flex items-center justify-center">
                      <div class="check-custom flex items-center justify-center relative pl-[calc(10px_+_(15_-_10)_*_((100vw_-_320px)_/_(1920_-_320)))] pr-[calc(7px_+_(12_-_7)_*_((100vw_-_320px)_/_(1920_-_320)))] py-[3px]"><span class="absolute top-0 bottom-0 ltr:left-0 rtl:right-0 w-[3px] line h-full rounded-5"></span>
                        <div class="relative w-[calc(25px_+_(35_-_25)_*_((100vw_-_320px)_/_(1920_-_320)))] h-[calc(25px_+_(35_-_25)_*_((100vw_-_320px)_/_(1920_-_320)))]">
                          <input class="w-full h-full relative z-[2] opacity-0" type="checkbox"><span class="check absolute inset-0 flex items-center justify-center rounded-5 w-full h-full z-[1] p-[3px] bg-gray-200 dark:bg-mode-100"><i class="check-icon w-[calc(16px_+_(22_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] h-[calc(16px_+_(22_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] transition-all opacity-0" data-feather="check"></i></span>
                        </div>
                      </div>
                      <div class="max-w-[calc(138px_+_(650_-_138)_*_((100vw_-_320px)_/_(1920_-_320)))]">
                        <h5 class="font-medium text-dark truncate text-sm 2xl:text-xs focus:border focus:border-light dark:focus:border-mode-200 focus:outline-none focus:px-2 focus:rounded-5">${title}</h5><span class="font-normal text-xs text-gray-500 text-3xs block truncate mt-1">${description}</span>
                      </div>
                    </div>
                    <div> 
                      <ul class="flex gap-3">
                        <li class="cursor-pointer"> <i class="transition-all stroke-primary opacity-50 hover:opacity-100 w-[calc(16px_+_(22_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] h-[calc(16px_+_(22_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] edit" data-feather="edit"></i></li>
                        <li class="cursor-pointer"><i class="transition-all stroke-danger opacity-50 hover:opacity-100 w-[calc(16px_+_(22_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] h-[calc(16px_+_(22_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] delete" data-feather="trash"></i></li>
                      </ul>
                    </div>
             </li>
      `;
      todoApp.insertAdjacentHTML('afterbegin', html);
      todoForm.reset();
      feather.replace();
    }
  });
};
