document.addEventListener('DOMContentLoaded', function() {
    var itens = document.getElementById('itens');


    function clickMenu() {
        if (itens.style.display === 'block') {
            itens.style.display = 'none';

        } else {
            itens.style.display = 'block';
  
        }
    }

    function mudouTamanho() {
        if (window.innerWidth >= 768) {
            itens.style.display = 'block';

        } else {
            itens.style.display = 'none';
            
        }
    }

    mudouTamanho();

    window.addEventListener('resize', mudouTamanho);

    document.getElementById('burguer').addEventListener('click', clickMenu);
});

//----------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('check');
    const themeStylesheet = document.getElementById('theme-stylesheet');
    const solIcon = document.querySelector('.sol');
    const luaIcon = document.querySelector('.lua');

    // Verificar e aplicar o tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        checkbox.checked = true;
        themeStylesheet.setAttribute('href', 'dark.css');
        // Atualizar visibilidade dos ícones
        solIcon.style.display = 'none';
        luaIcon.style.display = 'block';
    } else {
        themeStylesheet.setAttribute('href', 'style.css');
        // Atualizar visibilidade dos ícones
        solIcon.style.display = 'block';
        luaIcon.style.display = 'none';
    }

    // Alternar o tema ao clicar na caixa de seleção
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            themeStylesheet.setAttribute('href', 'dark.css');
            localStorage.setItem('theme', 'dark');
            // Atualizar visibilidade dos ícones
            solIcon.style.display = 'none';
            luaIcon.style.display = 'block';
        } else {
            themeStylesheet.setAttribute('href', 'style.css');
            localStorage.setItem('theme', 'light');
            // Atualizar visibilidade dos ícones
            solIcon.style.display = 'block';
            luaIcon.style.display = 'none';
        }
    });
});
