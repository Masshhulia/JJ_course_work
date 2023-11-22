var totalQuestions = 51; // Общее количество вопросов
var progressBar = document.getElementById("myBar");
var demo = document.getElementById("demo");
var currentQuestion = 0; // Изначальный номер вопроса

function move() {
    // Увеличиваем текущий вопрос на 1
    currentQuestion++;
    
    // Вычисляем процент заполнения строки
    var percent = (currentQuestion / totalQuestions) * 100;
    
    // Ограничиваем прогресс до 100%
    if (percent > 100) {
        percent = 100;
    }
    
    // Устанавливаем новую ширину строки, текст счетчика вопросов и номер вопроса
    progressBar.style.width = percent + "%";
    demo.innerHTML = currentQuestion + " из " + totalQuestions;
}

