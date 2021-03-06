// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.turbolinks
//= require_tree .
//= require bootstrap.min
//= require commontator/application
//= require jquery.dataTables.min
//= require dataTables.bootstrap
//= require courseinfo
//= require jput.min
//= require turbolinks


var surveyJSON = {
    pages: [{
        name: "page1",
        questions: [{
            type: "text",
            name: "question1",
            title: "When did you take this course?"
        }, {
            type: "radiogroup",
            choices: [{
                value: "It was a required course",
                text: "It was a required course"
            }, {
                value: "It was an elective",
                text: "It was an elective"
            }, {
                value: "It was a bird course",
                text: "It was a bird course"
            }],
            hasOther: true,
            isRequired: true,
            name: "question2",
            title: "Which of the following options best describes the course?"
        }, {
            type: "radiogroup",
            choices: [{
                value: "Yes",
                text: "Yes"
            }, {
                value: "No",
                text: "No"
            }, {
                value: "Don't know",
                text: "Don't know"
            }],
            isRequired: true,
            name: "question3",
            title: "Were there participation marks?"
        }, {
            type: "radiogroup",
            choices: [{
                value: "Far above average",
                text: "Far above average"
            }, {
                value: "More than average",
                text: "More than average"
            }, {
                value: "Slightly more than average",
                text: "Slightly more than average"
            }, {
                value: "Average",
                text: "Average"
            }, {
                value: "Slightly less than average",
                text: "Slightly less than average"
            }, {
                value: "Barely any",
                text: "Barely any"
            }, {
                value: "None",
                text: "None"
            }],
            isRequired: true,
            name: "question4",
            title: "How much collaborative work and group projects were there?"
        }, {
            type: "radiogroup",
            choices: [{
                value: "Far above average",
                text: "Far above average"
            }, {
                value: "Above average",
                text: "Above average"
            }, {
                value: "Average",
                text: "Average"
            }, {
                value: "Below average",
                text: "Below average"
            }, {
                value: "Far below average",
                text: "Far below average"
            }],
            isRequired: true,
            name: "question5",
            title: "Rate the professor"
        }, {
            type: "radiogroup",
            choices: [{
                value: "Far above average",
                text: "Far above average"
            }, {
                value: "Above average",
                text: "Above average"
            }, {
                value: "Average",
                text: "Average"
            }, {
                value: "Below average",
                text: "Below average"
            }, {
                value: "Far below average",
                text: "Far below average"
            }],
            name: "question6",
            isRequired: true,
            title: "Rate the course content"
        }, {
            type: "radiogroup",
            choices: [{
                value: "Far above average",
                text: "Far above average"
            }, {
                value: "Above average",
                text: "Above average"
            }, {
                value: "Average",
                text: "Average"
            }, {
                value: "Below average",
                text: "Below average"
            }, {
                value: "Far below average",
                text: "Far below average"
            }],
            name: "question7",
            title: "Rate the overall course expirience"
        }, {
            type: "radiogroup",
            choices: [{
                value: "I aced it",
                text: "I aced it"
            }, {
                value: "I passed it",
                text: "I passed it"
            }, {
                value: "I failed",
                text: "I failed"
            }, {
                value: "I dropped",
                text: "I dropped"
            }],
            name: "question8",
            title: "What was the end result of you taking the course"
        }, {
            type: "radiogroup",
            choices: [{
                value: "A",
                text: "A"
            }, {
                value: "B",
                text: "B"
            }, {
                value: "C",
                text: "C"
            }, {
                value: "D",
                text: "D"
            }, {
                value: "F",
                text: "F"
            }],
            name: "question9",
            title: "How did you do?"
        }, {
            type: "radiogroup",
            choices: [{
                value: "Big Bird",
                text: "Big Bird"
            }, {
                value: "Very Easy",
                text: "Very Easy"
            }, {
                value: "Easy",
                text: "Easy"
            }, {
                value: "Average",
                text: "Average"
            }, {
                value: "Difficult",
                text: "Difficult"
            }, {
                value: "Very Difficult",
                text: "Very Difficult"
            }, {
                value: "Oscar the Grouch",
                text: "Oscar the Grouch"
            }],
            name: "question10",
            title: "How easy was this course?"
        }, {
            type: "radiogroup",
            choices: [{
                value: "Yes",
                text: "Yes"
            }, {
                value: "No",
                text: "No"
            }, {
                value: "Don't Know",
                text: "Don't Know"
            }],
            name: "question11",
            title: "The course objectives were clear"
        }, {
            type: "radiogroup",
            choices: [{
                value: "Yes",
                text: "Yes"
            }, {
                value: "No",
                text: "No"
            }, {
                value: "Don't know",
                text: "Don't know"
            }],
            name: "question12",
            title: "The course increased my interest in the subject"
        }, {
            type: "radiogroup",
            choices: [{
                value: "Yes",
                text: "Yes"
            }, {
                value: "No",
                text: "No"
            }, {
                value: "Don't know",
                text: "Don't know"
            }],
            name: "question13",
            title: "The course corresponded to my expectations"
        }, {
            type: "radiogroup",
            choices: [{
                value: "Very easy",
                text: "Very easy"
            }, {
                value: "Easy",
                text: "Easy"
            }, {
                value: "Average",
                text: "Average"
            }, {
                value: "Difficult",
                text: "Difficult"
            }, {
                value: "Very difficult",
                text: "Very difficult"
            }],
            name: "question14",
            title: "How easy was the course material  (difficulty of digesting and implementing course materials e.g  in assignments )?"
        }, {
            type: "radiogroup",
            choices: [{
                value: "Very useful",
                text: "Very useful"
            }, {
                value: "Somewhat useful",
                text: "Somewhat useful"
            }, {
                value: "Averagely useful",
                text: "Averagely useful"
            }, {
                value: "Less useful than average",
                text: "Less useful than average"
            }, {
                value: "Not useful",
                text: "Not useful"
            }],
            name: "question15",
            title: "How useful was this course for your career?"
        }, {
            type: "radiogroup",
            choices: [{
                value: "Far above average",
                text: "Far above average"
            }, {
                value: "Above average",
                text: "Above average"
            }, {
                value: "Average",
                text: "Average"
            }, {
                value: "Below average",
                text: "Below average"
            }, {
                value: "Far below average",
                text: "Far below average"
            }],
            name: "question16",
            title: "How heavy was the workload  (quantity of workload and no. of assignments/deliverables)?"
        }, {
            type: "radiogroup",
            choices: [{
                value: "Definitely agree",
                text: "Definitely agree"
            }, {
                value: "Somewhat agree",
                text: "Somewhat agree"
            }, {
                value: "Don't agree or disagree",
                text: "Don't agree or disagree"
            }, {
                value: "Somewhat disagree",
                text: "Somewhat disagree"
            }, {
                value: "Definitely disagree",
                text: "Definitely disagree"
            }],
            name: "question17",
            title: "The course textbooks were clear and well written"
        }, {
            type: "radiogroup",
            choices: [{
                value: "Definitely agree",
                text: "Definitely agree"
            }, {
                value: "Somewhat agree",
                text: "Somewhat agree"
            }, {
                value: "Don't agree or disagree",
                text: "Don't agree or disagree"
            }, {
                value: "Somewhat disagree",
                text: "Somewhat disagree"
            }, {
                value: "Definitely disagree",
                text: "Definitely disagree"
            }],
            name: "question18",
            title: "The assignments were appropriate for the level of this class"
        }, {
            type: "radiogroup",
            choices: [{
                value: "Far above average",
                text: "Far above average"
            }, {
                value: "Above average",
                text: "Above average"
            }, {
                value: "Average",
                text: "Average"
            }, {
                value: "Below average",
                text: "Below average"
            }, {
                value: "Far below average",
                text: "Far below average"
            }],
            name: "question19",
            title: "How useful was the textbook?"
        }, {
            type: "radiogroup",
            choices: [{
                value: "Far above average",
                text: "Far above average"
            }, {
                value: "Above average",
                text: "Above average"
            }, {
                value: "Average",
                text: "Average"
            }, {
                value: "Below average",
                text: "Below average"
            }, {
                value: "Far below average",
                text: "Far below average"
            }],
            name: "question20",
            title: "How useful was the lecture?"
        }, {
            type: "radiogroup",
            choices: [{
                value: "Far above average",
                text: "Far above average"
            }, {
                value: "Above average",
                text: "Above average"
            }, {
                value: "Average",
                text: "Average"
            }, {
                value: "Below average",
                text: "Below average"
            }, {
                value: "Far below average",
                text: "Far below average"
            }],
            name: "question21",
            title: "How useful was the online lecture material?"
        }, {
            type: "radiogroup",
            choices: [{
                value: "Far above average",
                text: "Far above average"
            }, {
                value: "Above average",
                text: "Above average"
            }, {
                value: "Average",
                text: "Average"
            }, {
                value: "Below average",
                text: "Below average"
            }, {
                value: "Far below average",
                text: "Far below average"
            }],
            name: "question22",
            title: "How useful were the assignments and projects?"
        }, {
            type: "radiogroup",
            choices: [{
                value: "Far above average",
                text: "Far above average"
            }, {
                value: "Above average",
                text: "Above average"
            }, {
                value: "Average",
                text: "Average"
            }, {
                value: "Below average",
                text: "Below average"
            }, {
                value: "Far below average",
                text: "Far below average"
            }],
            name: "question23",
            title: "How useful were the practice problems?"
        }, {
            type: "radiogroup",
            choices: [{
                value: "Far above average",
                text: "Far above average"
            }, {
                value: "Above average",
                text: "Above average"
            }, {
                value: "Average",
                text: "Average"
            }, {
                value: "Below average",
                text: "Below average"
            }, {
                value: "Far below average",
                text: "Far below average"
            }],
            name: "question24",
            title: "How useful were the past midterms and exams?"
        }, {
            type: "radiogroup",
            choices: [{
                value: "Definitely agree",
                text: "Definitely agree"
            }, {
                value: "Somewhat agree",
                text: "Somewhat agree"
            }, {
                value: "Don't agree or disagree",
                text: "Don't agree or disagree"
            }, {
                value: "Somewhat disagree",
                text: "Somewhat disagree"
            }, {
                value: "Definitely disagree",
                text: "Definitely disagree"
            }],
            name: "question25",
            title: "The professor demonstrated knowledge of the subject matter"
        }, {
            type: "radiogroup",
            choices: [{
                value: "Definitely agree",
                text: "Definitely agree"
            }, {
                value: "Somewhat agree",
                text: "Somewhat agree"
            }, {
                value: "Don't agree or disagree",
                text: "Don't agree or disagree"
            }, {
                value: "Somewhat disagree",
                text: "Somewhat disagree"
            }, {
                value: "Definitely disagree",
                text: "Definitely disagree"
            }],
            name: "question26",
            title: "The professor was effective in communicating the content of the course"
        }, {
            type: "radiogroup",
            choices: [{
                value: "Definitely agree",
                text: "Definitely agree"
            }, {
                value: "Somewhat agree",
                text: "Somewhat agree"
            }, {
                value: "Don't agree or disagree",
                text: "Don't agree or disagree"
            }, {
                value: "Somewhat disagree",
                text: "Somewhat disagree"
            }, {
                value: "Definitely disagree",
                text: "Definitely disagree"
            }],
            name: "question27",
            title: "The professor had legible handwriting and could be understood well when speaking"
        }, {
            type: "radiogroup",
            choices: [{
                value: "Definitely agree",
                text: "Definitely agree"
            }, {
                value: "Somewhat agree",
                text: "Somewhat agree"
            }, {
                value: "Don't agree or disagree",
                text: "Don't agree or disagree"
            }, {
                value: "Somewhat disagree",
                text: "Somewhat disagree"
            }, {
                value: "Definitely disagree",
                text: "Definitely disagree"
            }],
            name: "question28",
            title: "The professor encouraged feedback from the class"
        }, {
            type: "radiogroup",
            choices: [{
                value: "Definitely agree",
                text: "Definitely agree"
            }, {
                value: "Somewhat agree",
                text: "Somewhat agree"
            }, {
                value: "Don't agree or disagree",
                text: "Don't agree or disagree"
            }, {
                value: "Somewhat disagree",
                text: "Somewhat disagree"
            }, {
                value: "Definitely disagree",
                text: "Definitely disagree"
            }],
            name: "question29",
            title: "The professor showed genuine concern for the students"
        }, {
            type: "radiogroup",
            choices: [{
                value: "Definitely agree",
                text: "Definitely agree"
            }, {
                value: "Somewhat agree",
                text: "Somewhat agree"
            }, {
                value: "Don't agree or disagree",
                text: "Don't agree or disagree"
            }, {
                value: "Somewhat disagree",
                text: "Somewhat disagree"
            }, {
                value: "Definitely disagree",
                text: "Definitely disagree"
            }],
            name: "question30",
            title: "The professor was accomodating"
        }, {
            type: "radiogroup",
            choices: [{
                value: "Definitely agree",
                text: "Definitely agree"
            }, {
                value: "Somewhat agree",
                text: "Somewhat agree"
            }, {
                value: "Don't agree or disagree",
                text: "Don't agree or disagree"
            }, {
                value: "Somewhat disagree",
                text: "Somewhat disagree"
            }, {
                value: "Definitely disagree",
                text: "Definitely disagree"
            }],
            name: "question31",
            title: "The professor was enthusiastic about the course"
        }, {
            type: "radiogroup",
            choices: [{
                value: "Definitely agree",
                text: "Definitely agree"
            }, {
                value: "Somewhat agree",
                text: "Somewhat agree"
            }, {
                value: "Don't agree or disagree",
                text: "Don't agree or disagree"
            }, {
                value: "Somewhat disagree",
                text: "Somewhat disagree"
            }, {
                value: "Definitely disagree",
                text: "Definitely disagree"
            }],
            name: "question32",
            title: "The professor organised the course well"
        }, {
            type: "radiogroup",
            choices: [{
                value: "Sexiest man/woman alive",
                text: "Sexiest man/woman alive"
            }, {
                value: "Definitely agree",
                text: "Definitely agree"
            }, {
                value: "Somewhat agree",
                text: "Somewhat agree"
            }, {
                value: "Don't agree or disagree",
                text: "Don't agree or disagree"
            }, {
                value: "Somewhat disagree",
                text: "Somewhat disagree"
            }, {
                value: "Definitely agree",
                text: "Definitely agree"
            }, {
                value: "Like Gary Busey after a fight with Mohammed Ali",
                text: "Like Gary Busey after a fight with Mohammed Ali"
            }],
            name: "question33",
            title: "The professor was good looking"
        }, {
            type: "radiogroup",
            choices: [{
                value: "Impeccable fashion taste",
                text: "Impeccable fashion taste"
            }, {
                value: "Definitely agree",
                text: "Definitely agree"
            }, {
                value: "Somewhat agree",
                text: "Somewhat agree"
            }, {
                value: "Don't agree or disagree",
                text: "Don't agree or disagree"
            }, {
                value: "Somewhat disagree",
                text: "Somewhat disagree"
            }, {
                value: "Definitely agree",
                text: "Definitely agree"
            }, {
                value: "Thinks oversized jorts are a good idea",
                text: "Thinks oversized jorts are a good idea"
            }],
            name: "question34",
            title: "The professor was a snappy dresser"
        }, {
            type: "radiogroup",
            choices: [{
                value: "Like a boquet of roses",
                text: "Like a boquet of roses"
            }, {
              value: "Definitely agree",
              text: "Definitely agree"
          }, {
              value: "Somewhat agree",
              text: "Somewhat agree"
          }, {
              value: "Don't agree or disagree",
              text: "Don't agree or disagree"
          }, {
              value: "Somewhat disagree",
              text: "Somewhat disagree"
          }, {
              value: "Definitely agree",
              text: "Definitely agree"
            }, {
                value: "Like that milk you forgot to put in the fridge, finely aged a few years",
                text: "Like that milk you forgot to put in the fridge, finely aged a few years"
            }],
            name: "question35",
            title: "The professor smelled nice"
        }, {
            type: "radiogroup",
            choices: [{
                value: "As many enemies as that sweet grandma who bakes everyone free pie",
                text: "As many enemies as that sweet grandma who bakes everyone free pie"
              }, {
                value: "Definitely agree",
                text: "Definitely agree"
            }, {
                value: "Somewhat agree",
                text: "Somewhat agree"
            }, {
                value: "Don't agree or disagree",
                text: "Don't agree or disagree"
            }, {
                value: "Somewhat disagree",
                text: "Somewhat disagree"
            }, {
                value: "Definitely agree",
                text: "Definitely agree"
              }, {
                value: "Meek Mill",
                text: "Meek Mill"
            }],
            name: "question36",
            title: "How good is the professor at making enemies"
        }, {
            type: "radiogroup",
            choices: [{
                value: "Chillest prof on the planet",
                text: "Chillest prof on the planet"
              }, {
                value: "Definitely agree",
                text: "Definitely agree"
            }, {
                value: "Somewhat agree",
                text: "Somewhat agree"
            }, {
                value: "Don't agree or disagree",
                text: "Don't agree or disagree"
            }, {
                value: "Somewhat disagree",
                text: "Somewhat disagree"
            }, {
                value: "Definitely agree",
                text: "Definitely agree"
              }, {
                value: "If you paid me I still wouldn't do it",
                text: "If you paid me I still wouldn't do it"
            }],
            name: "question37",
            title: "How likely are you to sit and have a beer with the professor"
        }]
    }]
};
