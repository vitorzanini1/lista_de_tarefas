class Produto{
    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
        
    }

    salvar() { //salvar()
        let produto = this.lerDados();

        if(this.validaCampos(produto)) {
           this.adicionar(produto);
        }

        this.listaTabela();
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_nomeTarefa = tr.insertCell();
            let td_acoes = tr.insertCell();
            
            td_id.innerText = this.arrayProdutos[i].id;
            td_nomeTarefa.innerText = this.arrayProdutos[i].nomeTarefa;

            td_id.classList.add('center');

            let imgDelete = document.createElement('img');
            imgDelete.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACYElEQVRoge2ZzW7UMBDHf93DViAoB8ou9CEQDwFSTyBaISTU10DihsSXAIkeeBU49RkQgisLFxCUQsuXtuq2VF0OjuVpmmTHjr27RflJVqx4Mv47M7GdBBoaGmLTBR4Ab4F+Vt4A94HOBHWpWAZ+A8OS8gtYmpi6ESwD+5SLt2UfuD4hjaV0gZ84ke+AG8A8cA64CfRE+xZTlk73cOJ6GNF5OsB7YXd3bOoUvMYJu1VhtyLsXqUU9AjYYXQ+j6vsAA+LhM6UnPsDnAodfSL6wOn8yVaB4RB4DgxSK/JggNEUxDVcKF/EUlTBS9Hf1VHGRRHI81XUzweK8uFCSd+FaAawXuI8FfImrZdaedAGDjAh/Ytu0KG0sj6GWZ/tWI43cXmZcgXtin6+ay7Q3k1tGj3DzNlPPdssMn1G5r8Pa7g7s1hht5vZ7Hq2WRZFP2saYdoIaGeidu6obbMsiLrqAY6dQnXxnoFiR6AuXmsATF8EpO8mhSRTGwEtc7jpbbvCTu7hfdos28LmyNa5Ln2F8zoDOCPa+1pRPvsaOSukSKOg9PEZQOrn4NgPIGgbHZpCKRYz70UMpisCxz6Fkg9Ak0KD3FHbBuZlxrKhFRU7AquYOXzVsy3vM+oqbOngFprNBP5/CP9F31Zr0wL2cC/csxF9zxL44cAnhQ6Ab1l9hrgP8gLuM+dG1pcK308kH0T9sue1VVwR9V5Ev0e4w+GfFEvAiRr+TmL+7Mj8v11TYyVzwCcO7yxjlo8k2EbnuQR8SSD+M3AxtXjLPPAEk692Zgope5j/aY+Bs+MS39DwP/EPuVoXL8eoVd8AAAAASUVORK5CYII=';
            imgDelete.setAttribute("onclick", "produto.deletar("+ this.arrayProdutos[i].id +")");

            let imgDescricao = document.createElement('img');
            imgDescricao.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABV0lEQVRoge2aMU7DQBBFHwjJQoAEEgVSGtqU3CJUkbgHNClyhtwpB0gkinQpaCA5AtDQJIXXiot4cWZ3vWNpnmS5sHb0n72etWyD0T8K4BVYAD/ALvMmYgCsFIQPEilqEmtgDNxICkVCLPLGQeI2ZiIhYpGlGziOGkeOWOTbDcw5neqIRYK6RAK8ec6FRUfAlvAOdGzbuPrR8J2BTSKJuswpecQiKaddU+0kU0sdJqINqcjW7VM9S1X1o+C7uUak61xN7dcWxF5hItowEW2YiDZMRBsmog0T0YaJaMNEtGEi2mgjcg1MgXfgl7SvSv97u9LImedYNfgTeGwh3BW+zEepn40F8AzcRw7VCZXEHLjInCWISmSYO0gof5QiRe4gbfB1rS+3f+oiSEpmlFdkBVxmzhLEHYfvhGvgBXjImiiAIfBBvkXw5IXRxxUwofyBoLc/1Rhdswc810cdKdAPjgAAAABJRU5ErkJggg==';
            imgDescricao.setAttribute("onclick", "produto.descricao("+ this.arrayProdutos[i].id +")");

            td_acoes.appendChild(imgDescricao);
            td_acoes.appendChild(imgDelete);
            
        }
    }

    adicionar(produto) {
        this.arrayProdutos.push(produto);
        this.id++;
    }

    lerDados() {
        
        let produto = {}

        produto.id = this.id;
        produto.nomeTarefa = document.getElementById('nomeTarefa').value;
        produto.descricaoTarefa = document.getElementById('descricaoTarefa').value;

        return produto;
    }

    validaCampos(produto) {
        let msg = '';

        if(produto.nomeTarefa == ''){
            msg+= '- Informe o nome da Tarefa \n';
        }

        if(produto.descricaoTarefa == ''){
            msg+= '- Informe a Descrição da tarefa. \n';
        }

        if(msg != '') {
            alert(msg);
            return false
        }

        return true;
    }

    descricao(id) {
        for(let i = 0; i < this.arrayProdutos.length; i++) {

            let tbody = document.getElementById('tbody');

            if(this.arrayProdutos[i].id == id){
               
            }
            
        }
        
    }
    
    deletar(id) {

        for(let i = 0; i < this.arrayProdutos.length; i++) {

            let tbody = document.getElementById('tbody');

            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos.splice(i, 1);
                tbody.deleteRow(i);
            }
        }

        console.log(this.arrayProdutos);
    }
}

var produto = new Produto();