function filtrarSetor() {
    // Obtém o valor selecionado no select
    var setorSelecionado = document.getElementById('setor').value;

    // Seleciona todos os elementos de link que têm um ID começando com "hdmjbo"
    var links = document.querySelectorAll('a[id^="option"]');

    // Itera sobre todos os links e oculta aqueles que não correspondem ao valor selecionado
    links.forEach(function(link) {
        if (link.id === setorSelecionado || setorSelecionado == 'default' || link.id === 'optiondefault') {
            link.style.display = 'inline-block';  // Exibe os links correspondentes
        } else {
            link.style.display = 'none';  // Oculta os links que não correspondem
        }
    });
}
