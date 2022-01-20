
// let myFont;
// function preload() {
//   myFont = loadFont('arial.ttf');
// }

function setup() {

  document.body.style.backgroundColor = "rgb(57, 57, 57)";
  // document.body.style.marginTop = "10px";

  createCanvas(1880, 1040)
  background(0)
  
  fill(255)
  textStyle(BOLD);
  textSize(200)

  text(bank[floor(random(bank.length))],42,300)
  text(bank[floor(random(bank.length))],42,600)
  text(bank[floor(random(bank.length))],42,900)


}

// setInterval(function(){
  
// },100);

var bank = [
"	Achieve	"	,
"	Act	"	,
"	Admiration	"	,
"	Admire	"	,
"	Advance	"	,
"	Adventurous	"	,
"	Advice	"	,
"	Advise	"	,
"	Advocate	"	,
"	Affirm	"	,
"	Aid	"	,
"	Ambitious	"	,
"	Animate	"	,
"	Appreciate	"	,
"	Assist	"	,
"	Assistance	"	,
"	Assure	"	,
"	Attitude	"	,
"	Back	"	,
"	Belief	"	,
"	Believe	"	,
"	Boost	"	,
"	Build	"	,
"	Caring	"	,
"	Catalyst	"	,
"	Challenge	"	,
"	Champion	"	,
"	Cheer	"	,
"	Coax	"	,
"	Comfort	"	,
"	Commit	"	,
"	Commitment	"	,
"	Compassion	"	,
"	Compliment	"	,
"	Confidence	"	,
"	Conquer	"	,
"	Continue	"	,
"	Courage	"	,
"	Create	"	,
"	Dare	"	,
"	Dedicate	"	,
"	Deliver	"	,
"	Determination	"	,
"	Dream	"	,
"	Drive	"	,
"	Embolden	"	,
"	Empower	"	,
"	Empowering	"	,
"	Empowerment	"	,
"	Encourage	"	,
"	Encouragement	"	,
"	Encouraging	"	,
"	Endorse	"	,
"	Endure	"	,
"	Energy	"	,
"	Enjoyment	"	,
"	Enrich	"	,
"	Enthusiasm	"	,
"	Enthusiastic	"	,
"	Envision	"	,
"	Excellence	"	,
"	Experience	"	,
"	Faith	"	,
"	Faithful	"	,
"	Fearless	"	,
"	Fighter	"	,
"	Finisher	"	,
"	Fire	"	,
"	Fix	"	,
"	Focus	"	,
"	Forgive	"	,
"	Fortify	"	,
"	Forward	"	,
"	Foster	"	,
"	Freedom	"	,
"	Fuel	"	,
"	Fulfilment	"	,
"	Further	"	,
"	Glory	"	,
"	Happiness	"	,
"	Happy	"	,
"	Hearten	"	,
"	Help	"	,
"	Honesty	"	,
"	Honor	"	,
"	Hope	"	,
"	Humble	"	,
"	Humility	"	,
"	Imagination	"	,
"	Imagine	"	,
"	Improve	"	,
"	Incentive	"	,
"	Incite	"	,
"	Ineffable	"	,
"	Influence	"	,
"	Initiative	"	,
"	Inspiration	"	,
"	Inspire	"	,
"	Inspiring	"	,
"	Integrity	"	,
"	Interest	"	,
"	Interested	"	,
"	Invigorate	"	,
"	Jest	"	,
"	Joy	"	,
"	Justify	"	,
"	Kind	"	,
"	Kindness	"	,
"	Knowledge	"	,
"	Live	"	,
"	Laugh	"	,
"	Love	"	,
"	Lead	"	,
"	Leading	"	,
"	Learn	"	,
"	Life	"	,
"	Limitless	"	,
"	Loving	"	,
"	Loyal	"	,
"	Meaning	"	,
"	Meaningful	"	,
"	Mentor	"	,
"	Mindful	"	,
"	Mindset	"	,
"	Mission	"	,
"	Momentum	"	,
"	Motivate	"	,
"	Motivated	"	,
"	Motivation	"	,
"	Move	"	,
"	Movement	"	,
"	Navigate	"	,
"	Nurture	"	,
"	Okay	"	,
"	Opportunity	"	,
"	Optimistic	"	,
"	Optimize	"	,
"	Overcome	"	,
"	Passion	"	,
"	Patience	"	,
"	Peace	"	,
"	Perseverance	"	,
"	Persevere	"	,
"	Persist	"	,
"	Persistence	"	,
"	Persuade	"	,
"	Positive	"	,
"	Possible	"	,
"	Possibilities	"	,
"	Power	"	,
"	Powerful	"	,
"	Practice	"	,
"	Press	"	,
"	Pressure	"	,
"	Pride	"	,
"	Prioritize	"	,
"	Prod	"	,
"	Promote	"	,
"	Prompt	"	,
"	Push	"	,
"	Rally	"	,
"	Reach	"	,
"	Reassure	"	,
"	Recommend	"	,
"	Remind	"	,
"	Respect	"	,
"	Revitalize	"	,
"	Rise	"	,
"	Risk	"	,
"	Satisfaction	"	,
"	Sharing	"	,
"	Skilful	"	,
"	Skill	"	,
"	Spirit	"	,
"	Stimulate	"	,
"	Stimulus	"	,
"	Stir	"	,
"	Strength	"	,
"	Strengthen	"	,
"	Strong	"	,
"	Succeed	"	,
"	Success	"	,
"	Suggest	"	,
"	Support	"	,
"	Sustain	"	,
"	Sway	"	,
"	Teach	"	,
"	Teachable	"	,
"	Tried	"	,
"	Trust	"	,
"	Trustworthy	"	,
"	Try	"	,
"	Understand	"	,
"	Understanding	"	,
"	Understood	"	,
"	Uplift	"	,
"	Urge	"	,
"	Value	"	,
"	Values	"	,
"	Versatile	"	,
"	Vitalize	"	,
"	Vulnerability	"	,
"	Welcome	"	,
"	Will	"	,
"	Willpower	"	,
"	Winner	"	,
"	Wisdom	"	,
"	Wise	"	,
"	Worthy	"	,
"	Yet	"	,

  ]

function draw() {
  


}

var onoff = 1

function mouseClicked(){

  if(onoff === 1){

    noLoop()
    onoff = 0

  } else {

    loop()
    onoff = 1

  }  
}