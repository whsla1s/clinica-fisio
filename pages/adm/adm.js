// pages/adm.js

document.addEventListener('DOMContentLoaded', () => {
    
    const modal = document.getElementById("studentModal");
    const addBtn = document.getElementById("addStudentButton");
    const closeBtn = document.getElementsByClassName("close-button")[0];
    const modalTitle = document.getElementById('modalTitle');
    const studentForm = document.getElementById('studentForm');

    // 1. Gerenciamento do Modal de Cadastro
    addBtn.onclick = function() {
        modalTitle.textContent = "Cadastrar Novo Aluno";
        studentForm.reset();
        document.getElementById('studentRA').readOnly = false; // Permite digitar RA no cadastro
        modal.style.display = "block";
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    
    // 2. Simulação de Submissão
    studentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const ra = document.getElementById('studentRA').value;
        const name = document.getElementById('studentName').value;
        
        if (modalTitle.textContent.includes('Cadastrar')) {
            alert(`Aluno ${name} (RA: ${ra}) cadastrado com sucesso! (Protótipo)`);
        } else {
            alert(`Dados do Aluno ${name} (RA: ${ra}) atualizados com sucesso! (Protótipo)`);
        }
        modal.style.display = "none";
        // Em um sistema real, você recarregaria a tabela.
    });

});

// 3. Função Global para Abrir Modal de Edição
function openEditModal(ra) {
    const row = document.querySelector(`tr[data-ra="${ra}"]`);
    if (!row) return;

    // Simulação de preenchimento dos dados do aluno para edição
    const name = row.cells[1].textContent;
    const completedHours = row.cells[3].textContent.replace('h', '');
    const requiredHours = row.cells[2].textContent.replace('h', '');

    document.getElementById('modalTitle').textContent = `Editar Dados: ${name}`;
    
    // Preenche o formulário
    document.getElementById('studentRA').value = ra;
    document.getElementById('studentRA').readOnly = true; // Não permite editar o RA
    document.getElementById('studentName').value = name;
    document.getElementById('requiredHours').value = requiredHours;
    document.getElementById('completedHours').value = completedHours;
    
    document.getElementById("studentModal").style.display = "block";
}