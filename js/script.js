// Инициализация: подпункты свернуты по умолчанию, кликом по заголовку разворачиваем/сворачиваем
    (function() {
      const categories = document.querySelectorAll('.category');
      categories.forEach(cat => {
        const header = cat.querySelector('.category-header');
        const sub = cat.querySelector('.sublist');
        if (!header || !sub) return;

        // Изначально свернуть
        sub.style.maxHeight = "0";
        cat.setAttribute('aria-expanded', "false");
        const che = cat.querySelector('.chev');
        if (che) che.style.transform = 'rotate(-90deg)';

        // Разворачивать можно кликом по заголовку (включая текст заголовка)
        header.addEventListener('click', () => {
          const isOpen = cat.classList.toggle('open');
          sub.style.maxHeight = isOpen ? sub.scrollHeight + "px" : "0";
          cat.setAttribute('aria-expanded', String(isOpen));
          if (che) che.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(-90deg)';
        });
      });
    })();
