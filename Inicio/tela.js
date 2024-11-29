
function populateTimeOptions() {
    const timeSelect = document.getElementById('time');
    const availableTimes = ['9:00', '10:00', '11:00', '14:00', '15:00', '16:00'];

    availableTimes.forEach(time => {
        const option = document.createElement('option');
        option.value = time;
        option.text = time;
        timeSelect.add(option);
    });
}

document.getElementById('scheduleForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const dateInput = document.getElementById('date');
    const timeSelect = document.getElementById('time');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    if (dateInput.value && timeSelect.value && nameInput.value && emailInput.value) {
        
        console.log('Agendamento realizado:');
        console.log('Data:', dateInput.value);
        console.log('Horário:', timeSelect.value);
        console.log('Nome:', nameInput.value);
        console.log('E-mail:', emailInput.value);

        
        dateInput.value = '';
        timeSelect.value = '';
        nameInput.value = '';
        emailInput.value = '';

    
        showSection('profile');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// Manipula o envio do formulário de perfil
document.getElementById('profileForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const studentCheckbox = document.getElementById('student');

    // Valida os campos do formulário
    if (nameInput.value && emailInput.value && phoneInput.value) {
        // Envia os dados do perfil para o servidor (não implementado neste exemplo)
        console.log('Perfil atualizado:');
        console.log('Nome:', nameInput.value);
        console.log('E-mail:', emailInput.value);
        console.log('Telefone:', phoneInput.value);
        console.log('Aluno do Unifeso:', studentCheckbox.checked);

        // Exibe a seção de feedback e oculta as outras
        showSection('feedback');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// Manipula o envio do formulário de feedback
document.getElementById('feedbackForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const ratingSelect = document.getElementById('rating');
    const commentInput = document.getElementById('comment');

    // Valida os campos do formulário
    if (ratingSelect.value && commentInput.value) {
        // Envia os dados do feedback para o servidor (não implementado neste exemplo)
        console.log('Feedback enviado:');
        console.log('Avaliação:', ratingSelect.value);
        console.log('Comentário:', commentInput.value);

        // Limpa o formulário
        ratingSelect.value = '';
        commentInput.value = '';

        alert('Feedback enviado com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// Função para mostrar uma seção específica e ocultar as outras
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.remove('hidden');
}

// Executa a função para popular os horários disponíveis
populateTimeOptions();