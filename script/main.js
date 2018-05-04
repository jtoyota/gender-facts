$('#filter').on('click', function(event){
	event.stopPropagation();	
	$('#dropdown').toggle('hidden');
});

$(document).click(function(){
	$('#dropdown').hide();
})

$('.myth').on('click', function() {
	$('.overlay').css('display','block');
})

$('.closeModal').on('click', function() {
	$('.overlay').css('display','none');
})

// Dropdown Filter
$("#selectAll").on("click", function() {
	$(".myth").show();
})

$("#selectCompensation").on("click", function() {
	$(".myth").hide();
	$(".compensation").show();
})


// Objects

var fact1 = [
	'Science, by and large, does not support claims that women are significantly different than men in terms of disposition, attitudes, and behaviors.',
	'Of course, there are biological differences, there is wide variation among women and among men, and meta-analyses show that, on average, the sexes are far more similar in their inclinations, attitudes, and skills than popular opinion would have us believe. We do see sex differences in various settings, including the workplace—but those differences are not rooted in fixed gender traits. Rather, they stem from organizational structures, company practices, and patterns of interaction that position men and women differently, creating systematically different experiences for them. When facing dissimilar circumstances, people respond differently—not because of their sex but because of their situations. For decades, studies have examined sex differences on ability to negociate, confidence and appetite for risk, enabling social scientists to conduct meta-analyses—investigations that reveal whether or not, on average across studies, sex differences hold, and if so, how large the differences are. Just as importantly, meta-analyses also reveal the circumstances under which differences between men and women are more or less likely to arise. The aggregated findings are clear: Context explains any sex differences that exist in the workplace.',
	'<a href = "https://hbr.org/2018/05/what-most-people-get-wrong-about-men-and-women" alt="What most people get wrong about men and women">Source: Harvard Business Review</a>'
]

var fact2 = [
	'The greater level of risk aversion among women that is frequently documented in the literature can be substantially, but not completely, explained by knowledge disparities.',
	'The impact of gender on risk taking is significantly weakened when investor knowledge of financial markets and investments is controlled in the regression equation. ',
	'<a href = "http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.662.2495&rep=rep1&type=pdf" alt="Gender differences in revealed risk taking: evidence from mutual fund investors">Source: Economic Letters</a>'
]

var fact3 = [
	'Research does not support the notion that women are necesarily more commited to family than men are.',
	'In a study of Harvard Business School graduates, nearly everyone, regardless of gender, placed a higher value on their families than on their work. Moreover, having made career decisions to accommodate family responsibilities didn’t explain the gender achievement gap. Other research, too, makes it clear that men and women do not have fundamentally different priorities.The highly educated, ambitious women and men of HBS don’t differ much in terms of what they value and hope for in their lives and careers. With regard to career importance, men and women were again in agreement. Their ratings of key dimensions of professional life, such as “work that is meaningful and satisfying” and “professional accomplishments,” were the same, and the majority said that “opportunities for career growth and development” were important to them, with women actually rating them slightly higher.',
	'<a href="https://hbr.org/2014/12/rethink-what-you-know-about-high-achieving-women" alt:="Rethink What You ‘Know’ About High-Achieving Women"> Source: Harvard Business Review</a>'
]

var fact4 = [
	'Gender differences in the ability to negociate strongly depended on the context',
	'Moderator analysis revealed that gender differences favoring men were reduced when negotiators had negotiation experience, when they received information about the bargaining range, and when they negotiated on behalf of another individual. Moreover, gender differences were reversed under conditions of the lowest predicted role incongruity for women. In conclusion, gender differences in negotiations are contextually bound and can be subject to change.',
	'<a href="https://www.apa.org/pubs/journals/releases/bul-a0038184.pdf" alt="A Meta-Analysis on Gender Differences in Negotiation Outcomes and Their Moderators">Source: American Psychological Association</a>'
];

var fact5 = [
	'From 2007 through 2014, women made up only 30.2 percent of all speaking or named characters in the 100 top-grossing fictional films released in the United States. ',
	'Findings in a study, “Inequality in 700 Popular Films: 73.1 percent of all the speaking or named characters in the top 100 movies were white. Only 19 total characters were lesbian, gay or bisexual — none were transgender. Only 19.9 percent of female characters were 40 to 64 years old.Only 1.9 percent of the movies were directed by women.” ',
	'<a href="https://www.nytimes.com/2015/08/06/movies/report-finds-wide-diversity-gap-among-2014s-top-grossing-films.html" alt="Report Finds Wide Diversity Gap Among 2014’s Top-Grossing Films">Source: The New York Times</a>'
];

var fact6 = [
	'A new study looking at gender bias in funding for scientific research has found that women are at a disadvantage when they apply to renew funding from the National Institutes of Health.',
	'To find out if gender bias influenced whose funding was renewed, the UW-Madison researchers identified positive and negative words in a small sample of critiques over four years and compared the results by gender. Among successful applications, reviewers tended to be more positive in describing the work of female applicants than they were describing the work of males, even though the NIH renewed funding for more men than women.The results of their findings suggest that “reviewers require higher quality work from [women] to confirm they have the competence to carry out the task,”',
	'<a href="https://www.ncbi.nlm.nih.gov/pubmed/27276003" alt="Analysis of National Institutes of Health R01 Application Critiques, Impact, and Criteria Scores: Does the Sex of the Principal Investigator Make a Difference?">Source: Academic Medicine</a>'
];

var fact7 = [
	'Title',
	'Text',
	'Source'
];

var fact8 = [
	'Title',
	'Text',
	'Source'
];

var fact9 = [
	'Title',
	'Text',
	'Source'
];'