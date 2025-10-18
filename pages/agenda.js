// pages/agenda.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Geração da Grade de Horários
    const scheduleBody = document.getElementById('scheduleBody');
    const startHour = 8;
    const endHour = 18;
    const workDays = 5; // Segunda a Sexta

    let scheduleHTML = '';
    
    for (let hour = startHour; hour < endHour; hour++) {
        const timeLabel = `${String(hour).padStart(2, '0')}:00`;
        
        scheduleHTML += `<div class="schedule-grid time-row">`;
        
        // Coluna do Horário
        scheduleHTML += `<div class="time-cell">${timeLabel}</div>`;
        
        // Células dos Dias da Semana
        for (let day = 0; day < workDays; day++) {
            const cellId = `cell-${day}-${hour}`;
            scheduleHTML += `<div class="schedule-cell" id="${cellId}" onclick="openAppointmentDetail('${cellId}')">`;
            
            // Simulação de Agendamentos (MOCKUP)
            if (hour === 10 && day === 1) { // 10h de Terça-feira
                 scheduleHTML += `
                    <div class="appointment-card">
                        <p>Pac: Ana Silva</p>
                        <p>Est: Estagiário A</p>
                    </div>
                `;
            } else if (hour === 14 && day === 3) { // 14h de Quinta-feira
                 scheduleHTML += `
                    <div class="appointment-card done">
                        <p>Pac: Carlos M.</p>
                        <p>Est: Estagiário B</p>
                    </div>
                `;
            }

            scheduleHTML += `</div>`;
        }
        
        scheduleHTML += `</div>`;
    }

    scheduleBody.innerHTML = scheduleHTML;
    
    // 2. Gerenciamento do Modal
    const modal = document.getElementById("scheduleModal");
    const btn = document.getElementById("scheduleButton");
    const span = document.getElementsByClassName("close-button")[0];

    // Abre o modal ao clicar no botão
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // Fecha o modal ao clicar no 'x'
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Fecha o modal ao clicar fora dele
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    
    // Simula a confirmação do agendamento
    document.getElementById('scheduleForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Agendamento criado com sucesso! (Protótipo)');
        modal.style.display = "none";
        // Em um sistema real, você recarregaria a grade aqui.
    });
    
});

// 3. Função para simular o detalhe do agendamento / Lançar Evolução
function openAppointmentDetail(cellId) {
    const appointmentCard = document.getElementById(cellId).querySelector('.appointment-card');
    
    if (appointmentCard) {
        alert("Detalhes do Agendamento (Protótipo): \n\nPaciente: Ana Silva\nEstagiário: Estagiário A\n\nPróxima ação: Clique para lançar a Ficha de Evolução.");
        
        // Em um sistema real, você seria redirecionado para a Ficha de Evolução do paciente.
        // window.location.href = 'detalhe-paciente.html?id=001&tab=evolucao&new=true';
    } else {
        // Se clicar em um horário vazio, poderia abrir o modal de agendamento com a hora pré-selecionada.
    }
}