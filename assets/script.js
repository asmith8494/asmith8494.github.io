var projects = [
    {
        name: "Password Generator (4/17/2020)",
        img: "assets/images/password-generator-sc.jpg",
        url: "https://asmith8494.github.io/Homework_03/"
    },

    {
        name: "Code Quiz (4/25/2020)",
        img: "assets/images/code-quiz-sc.jpg",
        url: "https://asmith8494.github.io/JavaScript-Quiz/"
    },

    {
        name: "Day Planner (5/2/2020)",
        img: "assets/images/work-day-scheduler-sc.jpg",
        url: "https://asmith8494.github.io/WD_Scheduler/"
    },

    {
        name: "Weather Dashboard (5/9/2020)",
        img: "assets/images/weather-dashboard-sc.jpg",
        url: "https://asmith8494.github.io/WeatherDashboard/"
    },

    {
        name: "Group Project 1: Cook What You Have! (5/16/2020)",
        img: "assets/images/cook-what-you-have-sc.jpg",
        url: "https://haphan64.github.io/CookWhatYouHave/"
    },
];

function renderProjects() {
    for(var i = 0; i < projects.length; i++) {
        var colDivEl = $('<div>');
        var cardDivEL = $('<div>');
        var cardImgEl = $('<img>');
        var cardPEl = $('<p>');

        colDivEl.attr('class', 'col-md-4');

        cardDivEL.attr('class', 'card bg-dark text-white');
        cardDivEL.data('URL', projects[i].url);
        console.log(cardDivEL.data('URL'));

        cardImgEl.attr('class', 'card-img');
        cardImgEl.attr('src', projects[i].img);
        cardImgEl.attr('alt', projects[i].name);

        cardPEl.text(projects[i].name);


        cardDivEL.append(cardImgEl);
        cardDivEL.append(cardPEl);

        colDivEl.append(cardDivEL);

        $('#projects').append(colDivEl);
    }
}

renderProjects();

$('.content-box').on('click', '.card', function(event){
    var project = $(this);
    console.log(project);
    console.log($(this).data('URL'));
    window.location.href = $(this).data('URL');
});