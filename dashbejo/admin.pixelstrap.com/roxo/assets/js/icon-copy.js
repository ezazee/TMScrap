const iconWrapper = document.querySelector('.icon-event');

iconWrapper.addEventListener('click', function (event) {
  const iconBox = event.target.closest('.icon-box');

  if (!iconBox) return;
  const iconName = iconBox.querySelector('.icon-name').textContent;
  const featherPage = event.target.closest('.feather-event');
  const iconlyNotBulk = event.target.closest('.icon-not-bulk-event');
  const iconlyBulk = event.target.closest('.icon-bulk-event');
  const iconEl = iconBox.querySelector("i[class*='iconly-']");
  const iconBulkEl = iconBox.querySelector("span[class*='iconlyBulk-']");
  const iconBulkCode = iconBulkEl?.outerHTML;
  const preCodeBulk = iconBulkCode?.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
  const iconClass = iconEl?.classList.contains('icli') ? 'icli' : iconEl?.classList.contains('icbo') ? 'icbo' : '';

  const featherHtml = `<div class="p-3 flex items-center justify-center rounded-5 border border-light"> <i class="w-7 h-7 stroke-dark" data-feather=${iconName}></i></div>
              <div class="relative bg-white2-light p-[12px] copyParent  rounded-5 border border-light">
                 <button class="btn copyBtn border-light !top-2 !right-[10px]"> <i data-feather="clipboard"></i></button>
                  <pre class="language-html !whitespace-pre-wrap custom-scroll overflow-auto"> <code>&lt;i data-feather="${iconName}"&gt;&lt;/i&gt; </code></pre>
               </div>
            </div> `;

  const iconlyHtml = `
            <div class="p-3 flex items-center justify-center rounded-5 border border-light"> <i class="text-2xl iconly-${iconName} ${iconClass}" ></i></div>
              <div class="relative bg-white2-light p-[12px] copyParent  rounded-5 border border-light">
                 <button class="btn copyBtn border-light !top-2 !right-[10px]"> <i data-feather="clipboard"></i></button>
                  <pre class="language-html !whitespace-pre-wrap custom-scroll overflow-auto"> <code>&lt;i class="iconly-${iconName} ${iconClass}"&gt;&lt;/i&gt; </code></pre>
               </div>
            </div> 
        `;
  const iconlyBulkHtml = `
            <div class="p-3 flex items-center justify-center rounded-5 border border-light"> ${iconBulkCode}</div>
              <div class="relative bg-white2-light p-[12px] copyParent  rounded-5 border border-light">
                 <button class="btn copyBtn border-light !top-2 !right-[10px]"> <i data-feather="clipboard"></i></button>
                  <pre class="language-html !whitespace-pre-wrap custom-scroll overflow-auto"> <code>${preCodeBulk}</code></pre>
               </div>
            </div> 
        `;

  const html = `<div class="copy-box-wrapper z-10 fixed inset-0 flex items-center justify-center">
         <a class="fixed overlay-close inset-0 z-10 bg-black opacity-25" href="javascript:void(0)"></a>
          <div class="icon-modal z-20 relative group max-w-[50%] lg:max-w-[80%] sm:max-w-[90%]">
            <div class="shadow-2xl bg-white dark:bg-mode-300 flex flex-col rounded-5 items-center gap-3  p-5 relative">
            <span class="close-btn border-light absolute top-4 right-4 rtl:left-4 rtl:right-unset flex items-center justify-center p-1 border shadow-md  rounded-full bg-white dark:bg-mode-200 ">
               <i data-feather="x" class="stroke-dark w-4 h-4"></i>
            </span>
            ${featherPage ? featherHtml : ''}
            ${iconlyNotBulk ? iconlyHtml : ''} 
            ${iconlyBulk ? iconlyBulkHtml : ''}  
          </div> 
        </div>`;

  document.body.insertAdjacentHTML('beforeend', html);
  feather.replace();

  const copyBtn = document.querySelector('.copyBtn');
  const overlay = document.querySelector('.overlay-close');
  const closeBtn = document.querySelector('.close-btn');

  copyBtn.addEventListener('click', copyFunction);

  function closeModal(el) {
    el.addEventListener('click', function () {
      document.querySelector('.copy-box-wrapper').remove();
    });
  }
  closeModal(overlay);
  closeModal(closeBtn);
});
