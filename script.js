// Sample flashcard data
const flashcards = [
{ category: 'Math', question: "Welcome to Dennis Daniels' English Lesson!", answer: '4' },
{ category: 'Science', question: 'Water formula', answer: 'H2O' },
{ category: 'Prepositions', question: 'The book is [BLANK] the table.', answer: 'on|under|near' },

{ category: 'Prepositions', question: 'I got an email [BLANK] our client.', answer: 'from' },

{ category: 'Prepositions', question: 'I received a gift [BLANK] my friend.', answer: 'from' },
{ category: 'Prepositions', question: 'The message is coming [BLANK] the headquarters.', answer: 'from' },
{ category: 'Prepositions', question: 'She will travel [BLANK] Paris to Rome.', answer: 'from' },
{ category: 'Prepositions', question: 'This [process|technique|shampoo|dehumidifier] is different [BLANK] the one we used before.', answer: 'from' },
{ category: 'Prepositions', question: 'I borrowed the book [BLANK] the library.', answer: 'from' },
{ category: 'Prepositions', question: 'He is [BLANK] a small town in Spain.', answer: 'in|from' },
{ category: 'Prepositions', question: 'The plane departed [BLANK] New York.', answer: 'from' },
{ category: 'Prepositions', question: 'They escaped [BLANK] the room through the window.', answer: 'from|out of' },
{ category: 'Prepositions', question: 'She learned Spanish [BLANK] her mother.', answer: 'from' },
{ category: 'Prepositions', question: 'The idea originated [BLANK] an old legend.', answer: 'from' },
{ category: 'Prepositions', question: 'I know her [BLANK] her name.', answer: 'by' },
{ category: 'Prepositions', question: 'I am [BLANK] the store.', answer: 'in|at|near|inside|close to' },
{ category: 'Prepositions', question: 'I will be there [BLANK] 5 minutes.', answer: 'in|for' },
{ category: 'Prepositions', question: 'I am not good [BLANK] math.', answer: 'at' },
{ category: 'Prepositions', question: 'I got a gift [BLANK] my friend.', answer: 'from|for' },
{ category: 'Prepositions', question: "The meeting is [BLANK] 10 o'clock.", answer: 'at' },
{ category: 'Prepositions', question: 'I am [BLANK] the exam.', answer: 'at' },
{ category: 'Prepositions', question: 'I know her [BLANK] her name.', answer: 'by' },
{ category: 'Prepositions', question: "I saw her [BLANK] the bookstore.", answer: "near|close to |next to |at|in|inside" },
{ category: 'Prepositions', question: "I went to the park [BLANK] my dog.", answer: "with" },
{ category: 'Prepositions', question: "I put the book [BLANK] the table.", answer: "on|under|next to" },
{ category: 'Prepositions', question: "I got a gift [BLANK] my friend.", answer: "for|from" },
{ category: 'Prepositions', question: "I'm afraid [BLANK] heights.", answer: "of" },
{ category: 'Prepositions', question: "I'm good [BLANK] math.", answer: "at" },
{ category: 'Prepositions', question: "I'm thinking [BLANK] going to the store|beach|park.", answer: "about" },
{ category: 'Prepositions', question: "I'm tired [BLANK] work.", answer: "of" },
{ category: 'Prepositions', question: "I'm waiting [BLANK] my friend.", answer: "for|next to|by|with" },
{ category: 'Prepositions', question: "I'm worried [BLANK] my exam.", answer: "about" },

{
  "category": "Prepositions of Time",
  "question": "I'll see you [BLANK] 10 minutes.",
  "answer": "In is the correct answer because it is used to indicate a period of time."
  },
  
  {
  "category": "Prepositions of Time",
  "question": "The train arrives [BLANK] noon.",
  "answer": "At is the correct answer because it is used to specify a specific point in time."
  },
  
  {
  "category": "Prepositions of Time",
  "question": "They have a meeting [BLANK] Monday morning.",
  "answer": "On is the correct answer because it is used to specify a particular day of the week."
  },
  
  {
  "category": "Prepositions of Time",
  "question": "The store closes [BLANK] 9 PM.",
  "answer": "At is the correct answer because it is used to specify a specific time."
  },
  
  {
  "category": "Prepositions of Time",
  "question": "The concert starts [BLANK] 7:30 PM.",
  "answer": "At is the correct answer because it is used to specify a specific time."
  },

  {
    "category": "Prepositions of Time",
    "question": "She'll be back [BLANK] a few hours.",
    "answer": "In is the correct answer because it is used to indicate a period of time."
    },
    
    {
    "category": "Prepositions of Time",
    "question": "They usually have dinner [BLANK] nightfall.",
    "answer": "At is the correct answer because it is used to specify a specific time."
    },
    
    {
    "category": "Prepositions of Time",
    "question": "The event is scheduled for [BLANK] November 15th.",
    "answer": "On is the correct answer because it is used to specify a particular date."
    },
    
    {
    "category": "Prepositions of Time",
    "question": "She will arrive [BLANK] the weekend.",
    "answer": "During is the correct answer because it is used to indicate a period within the weekend."
    },
    
    {
    "category": "Prepositions of Time",
    "question": "He wakes up early [BLANK] the morning.",
    "answer": "In is the correct answer because it is used to indicate a period of time."
    },
    {
      "category": "Prepositions of Time",
      "question": "I'll call you [BLANK] a moment.",
      "answer": "In is the correct answer because it is used to indicate a short period of time."
    },
    
    {
      "category": "Prepositions of Time",
      "question": "The party starts [BLANK] 8:00 PM and ends [BLANK] midnight.",
      "answer": "At is the correct answer for both blanks because it is used to specify specific times."
    },
    
    {
      "category": "Prepositions of Time",
      "question": "We're leaving for vacation [BLANK] Friday.",
      "answer": "On is the correct answer because it is used to specify a particular day of the week."
    },
    
    {
      "category": "Prepositions of Time",
      "question": "The conference is scheduled [BLANK] October 20th and [BLANK] October 22nd.",
      "answer": "On is the correct answer for both blanks because it is used to specify specific dates."
    },
    
    {
      "category": "Prepositions of Time",
      "question": "She's been working here [BLANK] three years.",
      "answer": "For is the correct answer because it is used to indicate the duration of time."
    },

//
{
    "category": "Christmas",
    "question": "'The [Christmas tree|scented candle|essential oil] is so [BLANK] that it fills the whole room with a festive smell.'",
    "answer": "fragrant"
    },
    {
    "category": "Christmas",
    "question": "'The Christmas lights are so [BLANK] that they make the whole house look magical.'",
    "answer": "twinkling"
    },
    {
    "category": "Christmas",
    "question": "'The Christmas gifts are so [BLANK] that I can't wait to open them.'",
    "answer": "beuatifuly wrapped"
    },
    {
    "category": "Christmas",
    "question": "'The Christmas carols are so [BLANK] that they put the whole family in a merry mood.'",
    "answer": "joyous"
    },
    {
    "category": "Christmas",
    "question": "'This Christmas feast is so [BLANK] that it makes me want to eat and eat and eat!'",
    "answer": "mouthwatering"
    },


//
{ category: 'Adverbs: Conjunctive', question: "She completed the project on time; [BLANK], she received a bonus.", answer: "Consequently" },
    { category: 'Adverbs: Conjunctive', question: "The meeting was long; [BLANK], important decisions were made.", answer: "Nevertheless" },
    { category: 'Adverbs: Conjunctive', question: "The team faced many challenges; [BLANK], they managed to deliver the project.", answer: "However" },
    { category: 'Adverbs: Conjunctive', question: "He was new to the team; [BLANK], his ideas were innovative.", answer: "However" },
    { category: 'Adverbs: Conjunctive', question: "The manager was strict; [BLANK], he was fair.", answer: "However" },
    { category: 'Adverbs: Conjunctive', question: "The deadline was approaching; [BLANK], the team worked overtime.", answer: "Therefore" },
    { category: 'Adverbs: Conjunctive', question: "The presentation was successful; [BLANK], a celebration was in order.", answer: "Therefore|Consequently" },
    { category: 'Adverbs: Conjunctive', question: "The project seemed impossible; [BLANK], it was completed on time.", answer: "Nevertheless" },


{ category: 'Adverbs: Conjunctive', question: "[BLANK], I decided to go for a walk.", answer: "After all" },
{ category: 'Adverbs: Conjunctive', question: "He didn't want to go; [BLANK], he had no choice.", answer: "Nevertheless" },
{ category: 'Adverbs: Conjunctive', question: "I was hungry; [BLANK], I made a sandwich.", answer: "Therefore|So" },
{ category: 'Adverbs: Conjunctive', question: "It was raining; [BLANK], we stayed indoors.", answer: "Consequently" },
{ category: 'Adverbs: Conjunctive', question: "He finished his work; [BLANK], he took a break.", answer: "Then" },
//

{ category: 'Adverbs of Time', question: 'I will go to the store [BLANK].', answer: 'later' },
{ category: 'Adverbs of Time', question: 'I saw a movie [BLANK] night.', answer: 'last' },
{ category: 'Adverbs of Time', question: 'I will be back [BLANK] minutes.', answer: 'in a few' },
{ category: 'Adverbs of Time', question: "I haven't seen him [BLANK] a long time.", answer:"'in|for'"},
{ category: 'Adverbs of Time', question: 'I will finish my homework [BLANK].', answer: 'soon' },
{ category: 'Adverbs of Time', question: 'She arrived [BLANK] the meeting started.', answer: 'before|when' },
{ category: 'Adverbs of Time', question: 'I will call you [BLANK] day.', answer: 'sometime' },
{ category: 'Adverbs of Time', question: 'I will be ready [BLANK] five minutes.', answer: 'in' },
{ category: 'Adverbs of Time', question: 'I will finish my work [BLANK] I leave.', answer: 'before' },
{ category: 'Adverbs of Time', question: 'I will see you [BLANK] week.', answer: 'next' },   
//
{ category: 'Adverbs of Place', question: "She looked for her keys [BLANK].", answer: "everywhere" },
{ category: 'Adverbs of Place', question: "The book was [BLANK] the table.", answer: "there" },
{ category: 'Adverbs of Place', question: "He couldn't find his wallet [BLANK].", answer: "anywhere" },
{ category: 'Adverbs of Place', question: "The cat is [BLANK] the house.", answer: "inside" },
{ category: 'Adverbs of Place', question: "The kids played [BLANK] in the yard.", answer: "outside" },
{ category: 'Adverbs of Place', question: "Please put the package [BLANK] the door.", answer: "outside" },
{ category: 'Adverbs of Place', question: "I left my glasses [BLANK].", answer: "back" },
{ category: 'Adverbs of Place', question: "The treasure is buried [BLANK].", answer: "here" },
{ category: 'Adverbs of Place', question: "He wandered [BLANK] in the forest.", answer: "nowhere" },
{ category: 'Adverbs of Place', question: "The secret code is written [BLANK].", answer: "inside" },

{ category: 'Adverbs of Place', question: "They explored the city [BLANK].", answer: "everywhere" },
{ category: 'Adverbs of Place', question: "The airport is [BLANK] the city center.", answer: "outside" },
{ category: 'Adverbs of Place', question: "The scenic view is [BLANK] the mountain.", answer: "up" },
{ category: 'Adverbs of Place', question: "The hotel room overlooks the ocean [BLANK].", answer: "here" },
{ category: 'Adverbs of Place', question: "The bus station is [BLANK] the street.", answer: "across" },
{ category: 'Adverbs of Place', question: "The hiking trail goes [BLANK] into the forest.", answer: "deep" },
{ category: 'Adverbs of Place', question: "They are traveling [BLANK] to different countries.", answer: "everywhere" },
{ category: 'Adverbs of Place', question: "The historic site is [BLANK] the city.", answer: "inside" },
{ category: 'Adverbs of Place', question: "The train station is [BLANK] the town square.", answer: "near" },
{ category: 'Adverbs of Place', question: "The cruise ship docks [BLANK] the harbor.", answer: "here" },

//

  { category: 'Adverbs of Manner', question: "He apologized [BLANK] for his mistake.", answer: "sincerely" },
  { category: 'Adverbs of Manner', question: "The cat [BLANK] jumped onto the counter.", answer: "quickly" },
  { category: 'Adverbs of Manner', question: "She spoke [BLANK] about her childhood.", answer: "fondly" },
  { category: 'Adverbs of Manner', question: "The team worked [BLANK] to meet the deadline.", answer: "diligently|tirelessly" },
  { category: 'Adverbs of Manner', question: "He [BLANK] refused to change his opinion.", answer: "completely|stubbornly" },
  { category: 'Adverbs of Manner', question: "The story was [BLANK] told, capturing everyone's attention.", answer: "vividly" },
  { category: 'Adverbs of Manner', question: "She [BLANK] checked each answer on the test.", answer: "carefully" },
  { category: 'Adverbs of Manner', question: "The child [BLANK] grabbed the toy from his friend.", answer: "greedily" },
  { category: 'Adverbs of Manner', question: "He [BLANK] accepted the award, with a huge smile.", answer: "proudly" },
  { category: 'Adverbs of Manner', question: "The dog [BLANK] followed its owner around the house.", answer: "loyally" },
  { category: 'Adverbs of Manner', question: "The teacher explained the concept [BLANK] to the students.", answer: "clearly" },
  { category: 'Adverbs of Manner', question: "They [BLANK] whispered during the movie.", answer: "quietly" },
  { category: 'Adverbs of Manner', question: "She [BLANK] accepted the criticism, showing no emotion.", answer: "stoically" },
  { category: 'Adverbs of Manner', question: "The comedian [BLANK] delivered the punchline.", answer: "expertly" },
  { category: 'Adverbs of Manner', question: "The athlete [BLANK] jumped over the hurdles.", answer: "effortlessly" },
  { category: 'Adverbs of Manner', question: "The baby [BLANK] crawled towards its mother.", answer: "eagerly" },
  { category: 'Adverbs of Manner', question: "The wind [BLANK] blew the leaves across the yard.", answer: "vigorously" },
  { category: 'Adverbs of Manner', question: "The detective [BLANK] searched the room for clues.", answer: "thoroughly" },
  { category: 'Adverbs of Manner', question: "The musician played the piano [BLANK].", answer: "skillfully" },
  { category: 'Adverbs of Manner', question: "The children [BLANK] played tag in the park.", answer: "happily" },
  { category: 'Adverbs of Manner', question: "She [BLANK] explained her reasons for leaving.", answer: "calmly" },
  { category: 'Adverbs of Manner', question: "The bird [BLANK] sang at dawn.", answer: "melodiously" },
  { category: 'Adverbs of Manner', question: "The lawyer [BLANK] argued the case in court.", answer: "persuasively" },
  { category: 'Adverbs of Manner', question: "The sun [BLANK] shone on the beach.", answer: "brightly" },
  { category: 'Adverbs of Manner', question: "The chef [BLANK] chopped the vegetables.", answer: "precisely" },
  { category: 'Adverbs of Manner', question: "The driver [BLANK] navigated through the traffic.", answer: "skillfully" },
  { category: 'Adverbs of Manner', question: "The artist [BLANK] painted the landscape.", answer: "creatively" },
  { category: 'Adverbs of Manner', question: "The magician [BLANK] performed the trick.", answer: "mysteriously" },
  { category: 'Adverbs of Manner', question: "The students [BLANK] listened to the lecture.", answer: "attentively" },
  { category: 'Adverbs of Manner', question: "The runner [BLANK] crossed the finish line.", answer: "triumphantly" },
  { category: 'Adverbs of Manner', question: "He apologized [BLANK] for his mistake.", answer: "sincerely" },
  { category: 'Adverbs of Manner', question: "The cat [BLANK] jumped onto the counter.", answer: "quickly" },
  { category: 'Adverbs of Manner', question: "She spoke [BLANK] about her childhood.", answer: "fondly" },
  { category: 'Adverbs of Manner', question: "The team worked [BLANK] to meet the deadline.", answer: "tirelessly" },
  { category: 'Adverbs of Manner', question: "He [BLANK] refused to change his opinion.", answer: "stubbornly" },
  { category: 'Adverbs of Manner', question: "The story was [BLANK] told, capturing everyone's attention.", answer: "vividly" },
  { category: 'Adverbs of Manner', question: "She [BLANK] checked each answer on the test.", answer: "carefully" },
  { category: 'Adverbs of Manner', question: "The child [BLANK] grabbed the toy from his friend.", answer: "greedily" },
  { category: 'Adverbs of Manner', question: "He [BLANK] accepted the award, with a huge smile.", answer: "proudly" },
  { category: 'Adverbs of Manner', question: "The dog [BLANK] followed its owner around the house.", answer: "loyally" },
  { category: 'Adverbs of Manner', question: "The teacher explained the concept [BLANK] to the students.", answer: "clearly" },
  { category: 'Adverbs of Manner', question: "They [BLANK] whispered during the movie.", answer: "quietly" },
  { category: 'Adverbs of Manner', question: "She [BLANK] accepted the criticism, showing no emotion.", answer: "stoically" },
  { category: 'Adverbs of Manner', question: "The comedian [BLANK] delivered the punchline.", answer: "expertly" },
  { category: 'Adverbs of Manner', question: "The athlete [BLANK] jumped over the hurdles.", answer: "effortlessly" },
  { category: 'Adverbs of Manner', question: "The baby [BLANK] crawled towards its mother.", answer: "eagerly" },
  { category: 'Adverbs of Manner', question: "The wind [BLANK] blew the leaves across the yard.", answer: "vigorously" },
  { category: 'Adverbs of Manner', question: "The detective [BLANK] searched the room for clues.", answer: "thoroughly" },
  { category: 'Adverbs of Manner', question: "The musician played the piano [BLANK].", answer: "skillfully" },
  { category: 'Adverbs of Manner', question: "The children [BLANK] played tag in the park.", answer: "happily" },
  { category: 'Adverbs of Manner', question: "She [BLANK] explained her reasons for leaving.", answer: "calmly" },
  { category: 'Adverbs of Manner', question: "The bird [BLANK] sang at dawn.", answer: "melodiously" },
  { category: 'Adverbs of Manner', question: "The lawyer [BLANK] argued the case in court.", answer: "persuasively" },
  { category: 'Adverbs of Manner', question: "The sun [BLANK] shone on the beach.", answer: "brightly" },
  { category: 'Adverbs of Manner', question: "The chef [BLANK] chopped the vegetables.", answer: "precisely" },
  { category: 'Adverbs of Manner', question: "The driver [BLANK] navigated through the traffic.", answer: "skillfully" },
  { category: 'Adverbs of Manner', question: "The artist [BLANK] painted the landscape.", answer: "creatively" },
  { category: 'Adverbs of Manner', question: "The magician [BLANK] performed the trick.", answer: "mysteriously" },
  { category: 'Adverbs of Manner', question: "The students [BLANK] listened to the lecture.", answer: "attentively" },
  { category: 'Adverbs of Manner', question: "The runner [BLANK] crossed the finish line.", answer: "triumphantly" },


//

{ category: 'Adverbs of Frequency', question: 'How [BLANK] do you think AI will be used in the future?', answer: 'often' },
{ category: 'Adverbs of Place', question: 'Where, [BLANK], will AI be most developed in the next 10 years?', answer: 'globally' },
{ category: 'Adverbs of Manner', question: 'How [BLANK] will AI be able to solve complex problems?', answer: 'effectively' },
{ category: 'Adverbs of Degree', question: 'Will AI [BLANK] be able to understand human emotions?', answer: 'fully' },
{ category: 'Adverbs of Time', question: 'AI has [BLANK] been making rapid progress.', answer: 'recently' },
{ category: 'Adverbs of Frequency', question: 'How  will AI [BLANK] be able to learn and adapt?', answer: 'continuously' },
{ category: 'Adverbs of Manner', question: 'How  can we ensure that AI is used [BLANK]?', answer: 'responsibly' },
{ category: 'Adverbs of Degree', question: 'How [BLANK] will AI impact our society?', answer: 'deeply|badly|significantly' },
{ category: 'Adverbs of Frequency', question: "How do you think people will [BLANK] work from home in the future?", answer: 'increasingly' },
{ category: 'Adverbs of Place', question: "Where  can you find [BLANK] the best resources for working from home?", answer: 'online' },
{ category: 'Adverbs of Manner', question: "How [BLANK] can you create a productive home office?", answer: 'effectively' },
{ category: 'Adverbs of Degree', question: "To what extent can working from home [BLANK] improve work-life balance?", answer: 'significantly' },

//
// Adverbs of Frequency  
// Create lots of flash cards 
//   show answer as definition on the other side of the flash card
  
//   create JS valid content
//   wrap the strings in double quotes
// focus on work situations
//   here's an example
  
// { category: 'Adverbs of Frequency', question: "He [BLANK] misses his classes.", answer: "rarely" },

{ category: 'Adverbs of Frequency', question: "They [BLANK] update the project status report.", answer: "regularly" },
{ category: 'Adverbs of Frequency', question: "I [BLANK] check my emails during lunch breaks.", answer: "sometimes" },
{ category: 'Adverbs of Frequency', question: "Our team [BLANK] encounters technical issues.", answer: "occasionally" },
{ category: 'Adverbs of Frequency', question: "She [BLANK] participates in team brainstorming sessions.", answer: "occasionally|often" },
{ category: 'Adverbs of Frequency', question: "He [BLANK] communicates with clients directly.", answer: "usually" },
{ category: 'Adverbs of Frequency', question: "We [BLANK] review project progress every week.", answer: "regularly" },
{ category: 'Adverbs of Frequency', question: "They [BLANK] receive training for new software.", answer: "frequently" },
{ category: 'Adverbs of Frequency', question: "I [BLANK] make presentations in team meetings.", answer: "sometimes" },
{ category: 'Adverbs of Frequency', question: "Our manager [BLANK] conducts performance evaluations.", answer: "annually" },
{ category: 'Adverbs of Frequency', question: "She [BLANK] works overtime to meet deadlines.", answer: "sometimes" },

{ category: 'Adverbs of Frequency', question: "They [BLANK] have team-building events.", answer: "sometimes" },
    { category: 'Adverbs of Frequency', question: "I [BLANK] attend industry conferences.", answer: "rarely" },
    { category: 'Adverbs of Frequency', question: "Our department [BLANK] organizes training sessions.", answer: "frequently" },
    { category: 'Adverbs of Frequency', question: "She [BLANK] contributes ideas to improve processes.", answer: "often" },
    { category: 'Adverbs of Frequency', question: "He [BLANK] takes breaks to relax during the day.", answer: "regularly" },
    { category: 'Adverbs of Frequency', question: "We [BLANK] update our project timelines on Fridays.", answer: "usually" },
    { category: 'Adverbs of Frequency', question: "They [BLANK] have team meetings to discuss goals.", answer: "weekly" },
    { category: 'Adverbs of Frequency', question: "I [BLANK] complete my reports before deadlines.", answer: "always" },
    { category: 'Adverbs of Frequency', question: "Our manager [BLANK] communicates changes to the team.", answer: "regularly" },
    { category: 'Adverbs of Frequency', question: "She [BLANK] reviews documents for accuracy.", answer: "always" },


{ category: 'Adverbs of Frequency', question: "She [BLANK] attends all the meetings on time.", answer: "always" },
    { category: 'Adverbs of Frequency', question: "Our team [BLANK] meets deadlines efficiently.", answer: "usually" },
    { category: 'Adverbs of Frequency', question: "He [BLANK] checks his emails first thing in the morning.", answer: "usually|always" },
    { category: 'Adverbs of Frequency', question: "They [BLANK] have a lunch break at noon.", answer: "usually" },
    { category: 'Adverbs of Frequency', question: "I [BLANK] complete my tasks before the end of the day.", answer: "always" },
    { category: 'Adverbs of Frequency', question: "Our manager [BLANK] holds a team briefing on Mondays.", answer: "usually" },
    { category: 'Adverbs of Frequency', question: "She [BLANK] forgets to submit her weekly report.", answer: "often|regularly|seldom" },
    { category: 'Adverbs of Frequency', question: "We [BLANK] start our day with a team huddle.", answer: "often" },
    { category: 'Adverbs of Frequency', question: "He [BLANK] takes personal calls during work hours.", answer: "rarely" },
    { category: 'Adverbs of Frequency', question: "Our department [BLANK] collaborates with other teams.", answer: "often|rarely|seldom|frequently" },
    //




{
    "category": "Christmas",
    "question": "What do you put on the top of the Christmas tree to make it look festive?",
    "answer": "A star or an angel"
    },
    {
    "category": "Christmas",
    "question": "What do you call the things that people hang on Christmas trees?",
    "answer": "ornaments"
    },
    {
    "category": "Christmas",
    "question": "What do people leave out for Santa Claus on Christmas Eve?",
    "answer": "Milk and cookies"
    },
    {
    "category": "Christmas",
    "question": "What is a popular food that people in the USA eat on Christmas Day?",
    "answer": "Roast turkey|Roast ham|Roast beef"
    },
    {
    "category": "Christmas",
    "question": "What is a common tradition at Christmas?",
    "answer": "giving presents | giving thanks"
    },
    {
    "category": "Christmas",
    "question": "What is a popular Christmas drink?",
    "answer": "Eggnog"
    },
    {
    "category": "Christmas",
    "question": "What is a traditional Christmas activity?",
    "answer": "Caroling"
    },
    {
    "category": "Christmas",
    "question": "What is a popular Christmas decoration on a door or wall?",
    "answer": "A wreath"
    },
//


{ category: 'Pronouns: Interrogative', question: "______ are you going?", answer: "Where|When|Why" },
    { category: 'Pronouns: Interrogative', question: "______ did you meet her?", answer: "Where|When|Why" },
    { category: 'Pronouns: Interrogative', question: "______ is the nearest grocery store?", answer: "Where" },
    { category: 'Pronouns: Interrogative', question: "______ were you last night?", answer: "Where" },
    { category: 'Pronouns: Interrogative', question: "______ can I find the best pizza in town?", answer: "Where" },
    { category: 'Pronouns: Interrogative', question: "______ did she say about the movie?", answer: "What" },
    { category: 'Pronouns: Interrogative', question: "______ are your plans for the weekend?", answer: "What" },
    { category: 'Pronouns: Interrogative', question: "______ is the capital of France?", answer: "What" },
    { category: 'Pronouns: Interrogative', question: "______ time is it?", answer: "What" },
    { category: 'Pronouns: Interrogative', question: "______ are you thinking about?", answer: "What" },
    { category: 'Pronouns: Interrogative', question: "______ do you want to eat tonight?", answer: "What" },
    { category: 'Pronouns: Interrogative', question: "______ is she coming over?", answer: "When" },
    { category: 'Pronouns: Interrogative', question: "______ will the meeting start?", answer: "When" },
    { category: 'Pronouns: Interrogative', question: "______ is your birthday?", answer: "When" },
    { category: 'Pronouns: Interrogative', question: "______ do we have to submit the project?", answer: "When" },
    { category: 'Pronouns: Interrogative', question: "______ are you going to finish your work?", answer: "When" },
    { category: 'Pronouns: Interrogative', question: "______ are you meeting him?", answer: "Where|When" },
    { category: 'Pronouns: Interrogative', question: "______ is your best friend?", answer: "Who" },
    { category: 'Pronouns: Interrogative', question: "______ won the match yesterday?", answer: "Who" },
    { category: 'Pronouns: Interrogative', question: "______ told you this story?", answer: "Who" },
    { category: 'Pronouns: Interrogative', question: "______ are you going to vote for?", answer: "Who" },
  
      { category: 'Pronouns: Interrogative', question: "______ is the deadline for this project?", answer: "What" },
      { category: 'Pronouns: Interrogative', question: "______ are we having the team meeting?", answer: "Where|Why|When" },
      { category: 'Pronouns: Interrogative', question: "______ is responsible for the quarterly report?", answer: "Who" },
      { category: 'Pronouns: Interrogative', question: "______ are the meeting minutes from last week?", answer: "Where" },
      { category: 'Pronouns: Interrogative', question: "______ do we expect the client's feedback?", answer: "When" },
      { category: 'Pronouns: Interrogative', question: "______ should I direct this call to?", answer: "Who" },
      { category: 'Pronouns: Interrogative', question: "______ are the main objectives for this quarter?", answer: "What" },
      { category: 'Pronouns: Interrogative', question: "______ do you think about this proposal?", answer: "What" },
      { category: 'Pronouns: Interrogative', question: "______ will the new intern start?", answer: "When" },
      { category: 'Pronouns: Interrogative', question: "______ is leading the new marketing campaign?", answer: "Who" },
      { category: 'Pronouns: Interrogative', question: "______ can we find the latest sales data?", answer: "Where" },
      { category: 'Pronouns: Interrogative', question: "______ was the decision made to change the strategy?", answer: "Why" },
      { category: 'Pronouns: Interrogative', question: "______ are the requirements for the new software?", answer: "What" },
      { category: 'Pronouns: Interrogative', question: "______ needs to approve these documents?", answer: "Who" },
      { category: 'Pronouns: Interrogative', question: "______ is the budget for this project?", answer: "What" },
      { category: 'Pronouns: Interrogative', question: "______ will the audit take place?", answer: "When" },
      { category: 'Pronouns: Interrogative', question: "______ can I discuss my career progression with?", answer: "Who" },
      { category: 'Pronouns: Interrogative', question: "______ are the risks associated with this plan?", answer: "What" },
      { category: 'Pronouns: Interrogative', question: "______ will we review the project milestones?", answer: "When" },
      { category: 'Pronouns: Interrogative', question: "______ is the procedure for remote work applications?", answer: "Where|What" },
  
//
// Pronouns:demonstrative 

//  // Create flash cards 
//   show answer as definition on the other side of the flash card
  
//   create JS valid content
  
//   here's an example
  
  
//     { category: 'Pronouns:demonstrative', question: "This is the book I was talking about. [BLANK] book is very interesting.", answer: "This" },

{
  category: 'Pronouns:demonstrative',
  question: "I don't have [BLANK] permissions!",
  answer: "those"
},


{
  category: 'Pronouns:demonstrative',
  question: "Do you remember [BLANK] days when we were kids? [BLANK] days were the best!",
  answer: "those"
},
{
  category: 'Pronouns:demonstrative',
  question: "I can't believe [BLANK] is happening to me. [BLANK] moment is unbelievable!",
  answer: "this"
},
{
  category: 'Pronouns:demonstrative',
  question: "[BLANK] are the keys you were looking for.",
  answer: "These"
},
{
  category: 'Pronouns:demonstrative',
  question: "Look at [BLANK] picture. [BLANK] picture was taken on my birthday.",
  answer: "that"
},
{
  category: 'Pronouns:demonstrative',
  question: "Can you see [BLANK] birds over there? [BLANK] birds migrate every year.",
  answer: "those"
},
{
  category: 'Pronouns:demonstrative',
  question: "I need [BLANK] information for my project. [BLANK] information is crucial.",
  answer: "this"
},



{ 
  category: 'Pronouns:demonstrative', 
  question: "This is the book I was talking about. [BLANK] book is very interesting.", 
  answer: "This" 
},
{ 
  category: 'Pronouns:demonstrative', 
  question: "I don't like [BLANK] shoes; they are too tight.", 
  answer: "these" 
},
{ 
  category: 'Pronouns:demonstrative', 
  question: "[BLANK] is the restaurant my family loves. [BLANK] restaurant serves amazing pasta.", 
  answer: "That" 
},
{ 
  category: 'Pronouns:demonstrative', 
  question: "I haven't read [BLANK] books yet. Are [BLANK] books good?", 
  answer: "those" 
},
{ 
  category: 'Pronouns:demonstrative', 
  question: "[BLANK] is my friend's car. [BLANK] car is the one we used last time.", 
  answer: "That" 
},

//
// Adverbs of Manner
 // Create flash cards 
  // show answer as definition on the other side of the flash card
  
  // create JS valid content
  
  // here's an example
  
  // { category: 'Adverbs of Manner', question: "He completed the task [BLANK].", answer: "quickly" },

{ category: 'Adverbs of Manner', question: "He completed the task [BLANK].", answer: "quickly" },
    { category: 'Adverbs of Manner', question: "She speaks [BLANK].", answer: "softly" },
    { category: 'Adverbs of Manner', question: "The dog barked [BLANK].", answer: "loudly" },
    { category: 'Adverbs of Manner', question: "They worked [BLANK].", answer: "diligently" },
    { category: 'Adverbs of Manner', question: "He laughed [BLANK].", answer: "heartily" },
    { category: 'Adverbs of Manner', question: "She danced [BLANK].", answer: "gracefully" },


{ category: "Adverbs of Manner", question: "She cleans the house [BLANK].", answer: "thoroughly" },
  { category: "Adverbs of Manner", question: "He cooks dinner [BLANK].", answer: "skillfully" },
  { category: "Adverbs of Manner", question: "They discuss family matters [BLANK].", answer: "calmly" },
  { category: "Adverbs of Manner", question: "She waters the plants [BLANK].", answer: "religiously|carefully" },
  { category: "Adverbs of Manner", question: "He repairs the leak [BLANK].", answer: "efficiently" },
  { category: "Adverbs of Manner", question: "They play games [BLANK].", answer: "enthusiastically" },
  { category: "Adverbs of Manner", question: "She organizes the room [BLANK].", answer: "neatly" },
  { category: "Adverbs of Manner", question: "He teaches his child [BLANK].", answer: "patiently" },
  { category: "Adverbs of Manner", question: "They decorate the house for the party [BLANK].", answer: "creatively" },
{ category: "Adverbs of Manner", question: "He works [BLANK].", answer: "hard" },
{ category: "Adverbs of Manner", question: "She laughed [BLANK].", answer: "loudly" },
{ category: "Adverbs of Manner", question: "They played [BLANK].", answer: "enthusiastically" },
{ category: "Adverbs of Manner", question: "He spoke [BLANK].", answer: "clearly" },
{ category: "Adverbs of Manner", question: "She dances [BLANK].", answer: "gracefully" },
{ category: "Adverbs of Manner", question: "They listened [BLANK].", answer: "attentively" },
{ category: "Adverbs of Manner", question: "He answered [BLANK].", answer: "quickly" },
{ category: "Adverbs of Manner", question: "She cooked [BLANK].", answer: "skillfully" },
{ category: "Adverbs of Manner", question: "They argued [BLANK].", answer: "fiercely" },
{ category: "Adverbs of Manner", question: "He drove [BLANK].", answer: "carefully" },
{ category: "Adverbs of Manner", question: "She manages the team [BLANK].", answer: "efficiently" },
  { category: "Adverbs of Manner", question: "He presents his ideas [BLANK].", answer: "clearly" },
  { category: "Adverbs of Manner", question: "They collaborate [BLANK].", answer: "cooperatively" },
  { category: "Adverbs of Manner", question: "She handles clients [BLANK].", answer: "professionally" },
  { category: "Adverbs of Manner", question: "He completes tasks [BLANK].", answer: "quickly|promptly" },
  { category: "Adverbs of Manner", question: "They discuss issues [BLANK].", answer: "openly|fiercely" },
  { category: "Adverbs of Manner", question: "She negotiates [BLANK].", answer: "effectively" },
  { category: "Adverbs of Manner", question: "He responds to emails [BLANK].", answer: "quickly" },
  { category: "Adverbs of Manner", question: "They solve problems [BLANK].", answer: "quickly|easily|creatively" },
  { category: "Adverbs of Manner", question: "She delegates tasks [BLANK].", answer: "wisely" },




// //
// possessive pronouns
//  // Create flash cards 
//   show answer as definition on the other side of the flash card
//   create JS valid content
// wrap the strings with double quotes
//   here's an example
  //     { category: 'Pronouns:Possessive ', question: " Where is [BLANK]book?", answer: "my" },

{ category: 'Pronouns: Possessive', question: 'Where is [BLANK] book?', answer: 'my' },
    { category: 'Pronouns: Possessive', question: 'Is this [BLANK] pen?', answer: 'your' },
    { category: 'Pronouns: Possessive', question: 'I have [BLANK] keys.', answer: 'his' },
    { category: 'Pronouns: Possessive', question: 'She forgot [BLANK] wallet.', answer: 'her' },
    { category: 'Pronouns: Possessive', question: 'They lost [BLANK] tickets.', answer: 'their' },
    { category: 'Pronouns: Possessive', question: "It's [BLANK] turn.", answer: 'her|his|their|our|your' },
    { category: 'Pronouns: Possessive', question: 'We will find [BLANK] way home.', answer: 'our' },
    { category: 'Pronouns: Possessive', question: 'Can you send me [BLANK] report?', answer: 'your' },
    { category: 'Pronouns: Possessive', question: 'He needs to update [BLANK] resume.', answer: 'his' },
    { category: 'Pronouns: Possessive', question: "The manager praised [BLANK] team's work.", answer: 'her' },
    { category: 'Pronouns: Possessive', question: 'They missed [BLANK] deadline.', answer: 'their' },
    { category: 'Pronouns: Possessive', question: 'We have to meet [BLANK] new client.', answer: 'our' },
    { category: 'Pronouns: Possessive', question: 'Is this [BLANK] office?', answer: 'your' },
    { category: 'Pronouns: Possessive', question: 'She needs to finish [BLANK] presentation.', answer: 'her' },
    { category: 'Pronouns: Possessive', question: "We should respect [BLANK] company's policy.", answer: 'our' },
    { category: 'Pronouns: Possessive', question: 'He forgot [BLANK] laptop at the meeting.', answer: 'his' },
    { category: 'Pronouns: Possessive', question: 'Can you check [BLANK] email?', answer: 'your' },


    //

    // reflexive pronouns

    // // Create flash cards 
    //  show answer as definition on the other side of the flash card
     
    //  create JS valid content
     
    //  here's an example
     
     
    //    { category: 'Pronouns: Reflexive', question: "I did it all by [BLANK].", answer: "myself" },

    { category: 'Pronouns: Reflexive', question: 'I did it all by [BLANK].', answer: 'myself' },
    { category: 'Pronouns: Reflexive', question: 'You should be proud of [BLANK].', answer: 'yourself' },
    { category: 'Pronouns: Reflexive', question: 'He can do it by [BLANK].', answer: 'himself' },
    { category: 'Pronouns: Reflexive', question: 'She did the work by [BLANK].', answer: 'herself' },
    { category: 'Pronouns: Reflexive', question: 'It can clean [BLANK].', answer: 'itself' },
    { category: 'Pronouns: Reflexive', question: 'We did it on our [BLANK].', answer: 'own' },
    { category: 'Pronouns: Reflexive', question: 'They have to figure it out for [BLANK].', answer: 'themselves' },


    { category: 'Pronouns: Reflexive', question: 'I did it all by [BLANK].', answer: 'myself' },
  { category: 'Pronouns: Reflexive', question: 'You should be proud of [BLANK].', answer: 'yourself' },
  { category: 'Pronouns: Reflexive', question: 'He can do it by [BLANK].', answer: 'himself' },
  { category: 'Pronouns: Reflexive', question: 'She did the work by [BLANK].', answer: 'herself' },
  { category: 'Pronouns: Reflexive', question: 'It can clean [BLANK].', answer: 'itself' },
  { category: 'Pronouns: Reflexive', question: 'We did it on our [BLANK].', answer: 'own' },
  { category: 'Pronouns: Reflexive', question: 'They have to figure it out for [BLANK].', answer: 'themselves' },

    //

  // Create flash cards 
  // Use idomatic phrases
  // show answer as definition on the other side of the flash card
  
  // create JS valid content
  // Do not tag the idiom type
  
  // here's an example
  
  
  //     { category: 'Idioms', question: "Bite the bullet", answer: "To endure a painful or otherwise unpleasant situation that is seen as unavoidable." },

  {
    "category": "Idioms",
    "question": "Bargain hunting: If you spend time in the shops looking for items to buy at the lowest price, you go bargain hunting.",
    "answer": "During the sales I go bargain hunting with my friends!"
  },
  {
    "category": "Idioms",
    "question": "Be your one-stop shop: Your one-stop shop is a location at which you can buy everything you need or want.",
    "answer": "The ‘Shopping Empire' is my one-stop shop for buying Christmas presents."
  },
  {
    "category": "Idioms",
    "question": "Break the bank: The expression break the bank means to spend or lose all your money, or to buy something that costs more than you can afford.",
    "answer": "Come on! Buying a new dress is not going to break the bank!"
  },
  {
    "category": "Idioms",
    "question": "It's a bargain: Said when an article is well below the usual price.",
    "answer": "That handbag goes beautifully with the dress, and at that price it's a bargain!"
  },
  {
    "category": "Idioms",
    "question": "Buy a lemon: If buy something, especially a car, that is defective, unsatisfactory, constantly gives trouble or stops running after a short time, you buy a lemon.",
    "answer": "The car I bought was a real lemon. It broke down two weeks later."
  },
  {
    "category": "Idioms",
    "question": "Hit the shops: If a product hits the shops, it becomes available for purchase for the first time.",
    "answer": "Her latest album will hit the shops next Monday."
  },
  {
    "category": "Idioms",
    "question": "I can't afford it: If you can't afford something you don't have enough money to buy it.",
    "answer": "I'd love that jacket but I can't afford it!"
  },
  {
    "category": "Idioms",
    "question": "It costs an arm and a leg: If an article or service costs an arm and a leg, it is very expensive indeed.",
    "answer": "The diamond engagement ring cost an arm and a leg!"
  },
  {
    "category": "Idioms",
    "question": "It costs a fortune: Something that costs a fortune is very expensive.",
    "answer": "Look at the price of that bag - it costs a fortune!"
  },
  {
    "category": "Idioms",
    "question": "It's a steal: The expression 'it's a steal' means that something is so cheap that it's almost as if you haven't paid anything for it.",
    "answer": "At that price it's a steal. You won't find it cheaper in any other shop."
  },
  {
    "category": "Idioms",
    "question": "It's good value for money: Something that is good value for money is worth the money spent on it.",
    "answer": "The quality is excellent so it's good value for money."
  },
  {
    "category": "Idioms",
    "question": "It's a bit pricey: The expression a bit pricey means that something is a bit expensive.",
    "answer": "Their clothes are a bit pricey but they have a wonderful selection"
  },
  {
    "category": "Idioms",
    "question": "It's a rip-off: Something that costs much more than it should is called a rip-off.",
    "answer": "$10 for an orange juice? That's a rip-off!"
  },
  {
    "category": "Idioms",
    "question": "Pay through the nose: If you pay through the nose, you pay an unreasonably high price or an excessive amount of money for something.",
    "answer": "Amanda has expensive taste. Sam had to pay through the nose for the bracelet she chose."
  },
  {
    "category": "Idioms",
    "question": "A pound shop (primarily heard in the UK): A shop where goods are sold at a low price, usually for a pound or less, is called a pound shop.",
    "answer": "Let's go to the pound shop. We'll find something cheaper there."
  },
  {
    "category": "Idioms",
    "question": "Shop around: If you shop around, you visit a number of shops selling similar articles in order to compare the prices.",
    "answer": "You can usually save money by shopping around."
  },
  {
    "category": "Idioms",
    "question": "Shop till you drop: If you shop till you drop, you go shopping for a very long time, until you are exhausted.",
    "answer": "If you go to London with Ashley, you'll shop till you drop, so take comfortable shoes!"
  },
  {
    "category": "Idioms",
    "question": "Shopper's paradise: A place where a large selection of items are available for sale is called a shopper's paradise by people who love shopping.",
    "answer": "The new mall is real shopper's paradise. I could spend the day there!"
  },
  {
    "category": "Idioms",
    "question": "Shopping spree: If you go on a shopping spree, you enjoy a lively outing, usually with much spending of money.",
    "answer": "Liza is planning to go on a shopping spree as soon as she gets her bonus."
  },
  {
    "category": "Idioms",
    "question": "Shopping therapy: The term shopping therapy refers to the idea that buying things can make you feel better.",
    "answer": "A little shopping therapy can usually cheer up bored teenagers."
  },
  {
    "category": "Idioms",
    "question": "Splash out: If you splash out on something, you buy it even though it costs a lot of money.",
    "answer": "When he got a promotion Andy splashed out on a brand new car."
  },
  {
    "category": "Idioms",
    "question": "Window shopping: When people go window shopping, they look at things in shop windows, without actually purchasing anything.",
    "answer": "I haven't been paid yet, so I can only go window shopping."
  },

  //nowadays

  {
    "category": "Idioms",
    "question": "Pull one's leg: Meaning: To lie.",
    "answer": "That doesn't sound right. Are you pulling my leg?"
},
{
    "category": "Idioms",
    "question": "Spill the beans: Meaning: To tell a secret.",
    "answer": "I already know you did it. Your best friend spilled the beans."
},
{
    "category": "Idioms",
    "question": "Sit on the fence: Meaning: To be undecided.",
    "answer": "I'm still sitting on the fence about whether I'm going to buy that car."
},
{
    "category": "Idioms",
    "question": "Don't cry over spilled milk/ No use in crying over spilled milk: Meaning: What has already happened cannot be undone so you shouldn't cry but you should think of what to do going forward.",
    "answer": "I know it wasn't your fault but there's no use in crying over spilled milk. Think of what you're going to do next."
},
{
    "category": "Idioms",
    "question": "Fair and square: Meaning: To do things in a fair way with no advantages given to either side.",
    "answer": "No do-overs. I won fair and square."
},
{
    "category": "Idioms",
    "question": "Straight from the horse's mouth: Meaning: To hear information directly from the person involved.",
    "answer": "I already know the truth. I heard straight from the horse's mouth."
},
{
    "category": "Idioms",
    "question": "Bigger fish to fry: Meaning: There is something more important to take care of.",
    "answer": "I can't think about that right now. I have bigger fish to fry."
},
// ... [Continue adding the rest in the same format]
{
    "category": "Idioms",
    "question": "Right as rain: Meaning: There is nothing that can be improved.",
    "answer": "The dish was right as rain. I wouldn't change a thing about it."
},



  {
    "category": "Idioms",
    "question": "Back against the wall: Meaning: Forced to do something that you would rather not.",
    "answer": "I really don't want to do this but my back is against the wall."
},
{
    "category": "Idioms",
    "question": "Bite the bullet: Meaning: Doing something you don't want to but also expressing that you're making a proactive choice.",
    "answer": "I'm going to go ahead and bite the bullet rather than waiting around."
},
{
    "category": "Idioms",
    "question": "Wrap one's head around something: Meaning: To understand something that may take a bit of time and effort.",
    "answer": "That's really complicated. It's going to take a moment to wrap my head around that."
},
{
    "category": "Idioms",
    "question": "Under the weather: Meaning: Sick. Typically used to describe minor illnesses like a cold.",
    "answer": "Sorry I'm feeling a bit under the weather and won't be able to come in today."
},
{
    "category": "Idioms",
    "question": "Better late than never: Meaning: Describes things that are better done than not, even if it takes a long time.",
    "answer": "I went back to college at 30 years old and figured better late than never."
},
{
    "category": "Idioms",
    "question": "Cut corners: Meaning: To skip steps or not do things completely.",
    "answer": "This is an important project so don't cut any corners on this one."
},
{
    "category": "Idioms",
    "question": "Get out of hand: Meaning: When a situation gets out of control.",
    "answer": "I meant to just have a small party but too many people came and it quickly got out of hand."
},
// ... [Include other Idioms in the same format]
{
    "category": "Idioms",
    "question": "Throw caution to the wind: Meaning: To stop thinking about something and take the risk.",
    "answer": "My parents told me not to put all my eggs in one basket but I decided to throw caution to the wind and be a full-time artist."
},
{
    "category": "Idioms",
    "question": "Look before you leap: Meaning: To think before you do something.",
    "answer": "The opportunity to move to another country is really exciting but I want you to look before you leap."
},
{
    "category": "Idioms",
    "question": "Jump on the bandwagon: Meaning: To follow a trend or not to do something until it's popular.",
    "answer": "She didn't care about K-pop before but now that it's popular, she's jumped on the bandwagon."
},
{
    "category": "Idioms",
    "question": "Pour one's heart out: Meaning: To tell or confess something emotional.",
    "answer": "I don't like soap operas. They're so unrealistic with the way everyone pours their heart out about everything."
},
{
    "category": "Idioms",
    "question": "Right as rain: Meaning: There is nothing that can be improved.",
    "answer": "The dish was right as rain. I wouldn't change a thing about it."
},


    {
      "category": "Idioms",
      "question": "Break the ice: Meaning: To get the conversation going. Provide a conversation prompt",
      "answer": "Starting class with a joke or subjects students like will help to break the ice."
    },
    {
      "category": "Idioms",
      "question": "A dime a dozen: Meaning: Very common; quite ordinary",
      "answer": "I thought it was something special but it turns out they're a dime a dozen."
    },
    {
      "category": "Idioms",
      "question": "Beat around the bush: Meaning: To avoid saying something",
      "answer": "Don't beat around the bush. Just tell me what happened."
    },
    // ... [Include other Idioms in the same format]
    {
      "category": "Idioms",
      "question": "Pull one's leg: Meaning: To lie.",
      "answer": "That doesn't sound right. Are you pulling my leg?"
    },
 
  

  { 
    category: 'Idioms', 
    question: "Bite the bullet", 
    answer: "To endure a painful or otherwise unpleasant situation that is seen as unavoidable." 
},
{
    category: 'Idioms',
    question: "Break the ice",
    answer: "To initiate a social conversation or interaction."
},
{
    category: 'Idioms',
    question: "Hit the nail on the head",
    answer: "To describe exactly what is causing a situation or problem."
},
{
    category: 'Idioms',
    question: "Spill the beans",
    answer: "To reveal secret information accidentally or without intending to."
},
{
    category: 'Idioms',
    question: "Once in a blue moon",
    answer: "Something that happens very rarely."
},

{
  category: 'Idioms',
  question: "Cut to the chase",
  answer: "To get to the point without wasting time."
},
{
  category: 'Idioms',
  question: "Piece of cake",
  answer: "Something that is very easy to do."
},
{
  category: 'Idioms',
  question: "Hit the sack",
  answer: "To go to bed in order to sleep."
},
{
  category: 'Idioms',
  question: "Miss the boat",
  answer: "To miss an opportunity."
},
{
  category: 'Idioms',
  question: "Under the weather",
  answer: "Feeling ill or unwell."
},
{
  category: 'Idioms',
  question: "The last straw",
  answer: "The final problem in a series of problems."
},
{
  category: 'Idioms',
  question: "Burn the midnight oil",
  answer: "To work late into the night."
},
{
  category: 'Idioms',
  question: "Barking up the wrong tree",
  answer: "To be mistaken or misguided in thinking or acting."
},
{
  category: 'Idioms',
  question: "Cry over spilt milk",
  answer: "To be upset about things that have already been done."
},
{
  category: 'Idioms',
  question: "Let the cat out of the bag",
  answer: "To reveal a secret carelessly or by mistake."
},

{
  category: 'Idioms',
  question: "Cost an arm and a leg",
  answer: "Very expensive or costly."
},
{
  category: 'Idioms',
  question: "Jump on the bandwagon",
  answer: "To join a popular trend or activity."
},
{
  category: 'Idioms',
  question: "Hit the books",
  answer: "To study, especially with particular intensity."
},
{
  category: 'Idioms',
  question: "When pigs fly",
  answer: "Something that will never happen."
},
{
  category: 'Idioms',
  question: "Break a leg",
  answer: "A way to wish someone good luck, especially before a performance."
},
{
  category: 'Idioms',
  question: "Pull someone's leg",
  answer: "To tease or joke with someone in a playful manner."
},
{
  category: 'Idioms',
  question: "Out of the blue",
  answer: "Something happening unexpectedly."
},
{
  category: 'Idioms',
  question: "A piece of the pie",
  answer: "A share of an amount of money or business."
},
{
  category: 'Idioms',
  question: "Bite off more than you can chew",
  answer: "To take on a task that is way too big or beyond one's ability."
},
{
  category: 'Idioms',
  question: "Hit the road",
  answer: "To leave or depart."
},

{
  category: 'Idioms',
  question: "Bet your bottom dollar",
  answer: "To be certain that something will happen."
},
{
  category: 'Idioms',
  question: "Break the bank",
  answer: "To use all of one's savings or funds."
},
{
  category: 'Idioms',
  question: "Cash cow",
  answer: "A business, investment, or product that provides a steady income or profit."
},
{
  category: 'Idioms',
  question: "Dime a dozen",
  answer: "Something that is very common, not unique."
},
{
  category: 'Idioms',
  question: "Foot the bill",
  answer: "To pay for something, typically something expensive."
},
{
  category: 'Idioms',
  question: "In the red",
  answer: "Being in debt or losing money."
},
{
  category: 'Idioms',
  question: "Make ends meet",
  answer: "To have just enough money to pay for the things that you need."
},
{
  category: 'Idioms',
  question: "Nest egg",
  answer: "Savings set aside for future use."
},
{
  category: 'Idioms',
  question: "Pay dirt",
  answer: "A source of substantial profit."
},
{
  category: 'Idioms',
  question: "Penny for your thoughts",
  answer: "A way of asking what someone is thinking."
},


{
  category: 'Idioms',
  question: "Climb the corporate ladder",
  answer: "To advance in one's career."
},
{
  category: 'Idioms',
  question: "Back to the drawing board",
  answer: "To start over from the beginning."
},
{
  category: 'Idioms',
  question: "Burn the candle at both ends",
  answer: "To work extremely hard or excessively."
},
{
  category: 'Idioms',
  question: "Call it a day",
  answer: "To stop working for the day."
},
{
  category: 'Idioms',
  question: "Crack the whip",
  answer: "To increase control or enforcement to make people work harder or faster."
},
{
  category: 'Idioms',
  question: "Get down to business",
  answer: "To start focusing on the important aspects of something."
},
{
  category: 'Idioms',
  question: "Go the extra mile",
  answer: "To do more than what is required or expected."
},
{
  category: 'Idioms',
  question: "Keep one's nose to the grindstone",
  answer: "To work hard and steadily."
},
{
  category: 'Idioms',
  question: "Pull one's weight",
  answer: "To do one's fair share of work."
},
{
  category: 'Idioms',
  question: "Think outside the box",
  answer: "To think creatively, not limited by conventional ideas."
},





//

{ category: 'Pronouns', question: "I went to the store with [BLANK].", answer: "\"you|him|her|them|my friend\"" },
{ category: 'Pronouns', question: "The teacher gave [BLANK] students a homework assignment.", answer: "\"her|his\"" },
{ category: 'Pronouns', question: "The cat chased [BLANK] tail.", answer: "\"its\"" },
{ category: 'Pronouns', question: "The children played with [BLANK] toys.", answer: "\"their\"" },
{ category: 'Pronouns', question: "The dog barked at [BLANK] reflection in the mirror.", answer: "\"her|his|its\"" },
{ category: 'Pronouns', question: "The students studied for [BLANK] exam.", answer: "\"their\"" },
{ category: 'Pronouns', question: "The teacher praised [BLANK] students for their hard work.", answer: "\"her|his\"" },
{ category: 'Pronouns', question: "The cat curled up on [BLANK] lap.", answer: "my|her|his" },
{ category: 'Pronouns', question: "The children shared [BLANK] toys with each other.", answer: "\"their\"" },
{ category: 'Pronouns', question: "The dog wagged [BLANK] tail when it saw its owner.", answer: "\"its\"" },
    // ... more flashcards
    { category: 'Conjunctions: Coordinating', question: "She can play the guitar, [BLANK] she can also sing.", answer: "and" },
{ category: 'Conjunctions: Coordinating', question: "You can either stay here [BLANK] come with us.", answer: "or"},
{ category: 'Conjunctions: Coordinating', question: "He did not win the first prize, [BLANK] he wasn't disappointed.", answer: "but|yet" },
{ category: 'Conjunctions: Coordinating', question: "It was raining, [BLANK] they cancelled the match.", answer: "so" },
{ category: 'Conjunctions: Coordinating', question: "I wanted to go to the concert, [BLANK] I had too much work.", answer: "but" },
{ category: 'Conjunctions: Coordinating', question: "You must study hard, [BLANK] you will not pass the exam.", answer: "for" },
//
{ category: 'Conjunctions: Correlative', question: "Not only did she finish her work early, [BLANK] she also helped others with theirs.", answer: "but" },

{ category: 'Conjunctions: Correlative', question: "You can either go to the gym [BLANK] go for a run outside.", answer: "or" },

{ category: 'Conjunctions: Correlative', question: "Neither will he admit his mistake [BLANK] apologize for it.", answer: "nor" },

{ category: 'Conjunctions: Correlative', question: "She is [BLANK] intelligent [BLANK] hardworking.", answer: "both / and" },

{ category: 'Conjunctions: Correlative', question: "Whether you travel by train [BLANK] by plane, make sure to arrive early.", answer: "or" },

{ category: 'Conjunctions: Correlative', question: "He will have to decide [BLANK] to accept the job offer [BLANK] to continue his studies.", answer: "whether / or" },

{ category: 'Conjunctions: Correlative', question: "She was [BLANK] surprised [BLANK] pleased with the unexpected gift.", answer: "both / and" },
{ category: 'Conjunctions: Correlative', question: "You must [BLANK] follow the rules [BLANK] face the consequences.", answer: "either / or" },
{ category: 'Conjunctions: Correlative', question: "I am [BLANK] going to the concert [BLANK] staying home tonight.", answer: "either / or" },

    { category: 'Conjunctions: Correlative', question: "He will finish the project [BLANK] today [BLANK] tomorrow.", answer: "either / or" },
    { category: 'Conjunctions: Correlative', question: "She is [BLANK] a talented musician [BLANK] a skilled painter.", answer: "both / and" },
    { category: 'Conjunctions: Correlative', question: "They will [BLANK] attend the meeting [BLANK] send a representative.", answer: "either / or" },
    { category: 'Conjunctions: Correlative', question: "The movie was [BLANK] entertaining [BLANK] thought-provoking.", answer: "both / and" },
    { category: 'Conjunctions: Correlative', question: "I will [BLANK] call you [BLANK] leave a message.", answer: "either / or" },
    { category: 'Conjunctions: Correlative', question: "We can [BLANK] watch a movie [BLANK] play a game.", answer: "either / or" },
    { category: 'Conjunctions: Correlative', question: "The restaurant offers [BLANK] vegetarian [BLANK] vegan options.", answer: "both / and" },
    { category: 'Conjunctions: Correlative', question: "He was [BLANK] surprised [BLANK] delighted by the gift.", answer: "both / and" },
    { category: 'Conjunctions: Correlative', question: "The team will [BLANK] win the championship [BLANK] come very close.", answer: "either / or" },
    { category: 'Conjunctions: Correlative', question: "She will [BLANK] accept the proposal [BLANK] suggest an alternative.", answer: "either / or" },

//
{ category: 'Conjunctions: Subordinating', question: "I'll see you [BLANK] I get back from the store.", answer: "when" },
{ category: 'Conjunctions: Subordinating', question: "[BLANK] it rains, the event will be cancelled.", answer: "If" },
{ category: 'Conjunctions: Subordinating', question: "She can't leave [BLANK] she finishes her work.", answer: "until" },
{ category: 'Conjunctions: Subordinating', question: "He was so tired [BLANK] he could barely keep his eyes open.", answer: "that" },
{ category: 'Conjunctions: Subordinating', question: "[BLANK] she is young, she is very responsible.", answer: "Although" },
{ category: 'Conjunctions: Subordinating', question: "You will succeed [BLANK] you work hard.", answer: "provided" },
{ category: 'Conjunctions: Subordinating', question: "I will call you [BLANK] I arrive.", answer: "as soon as" },

    { category: 'Conjunctions: Subordinating', question: "We will start eating [BLANK] everyone arrives.", answer: "after" },
    { category: 'Conjunctions: Subordinating', question: "[BLANK] he was sick, he decided to go to work.", answer: "Although" },
    { category: 'Conjunctions: Subordinating', question: "I will call you [BLANK] I leave the office.", answer: "as soon as" },
    { category: 'Conjunctions: Subordinating', question: "She did well on the test [BLANK] she studied hard.", answer: "because" },
    { category: 'Conjunctions: Subordinating', question: "Finish your homework [BLANK] you go to bed.", answer: "before" },
    { category: 'Conjunctions: Subordinating', question: "[BLANK] the time you arrive, the movie will be over.", answer: "By the time" },
    { category: 'Conjunctions: Subordinating', question: "Take an umbrella [BLANK] it rains.", answer: "in case" },
    { category: 'Conjunctions: Subordinating', question: "[BLANK] you are here, can you help me with this?", answer: "Now that" },
    { category: 'Conjunctions: Subordinating', question: "[BLANK] she has graduated, she can start working.", answer: "Since" },
    { category: 'Conjunctions: Subordinating', question: "I won't be able to attend [BLANK] I get the day off.", answer: "unless" },
    { category: 'Conjunctions: Subordinating', question: "She called me [BLANK] she arrived in New York.", answer: "when" },
    { category: 'Conjunctions: Subordinating', question: "I will go on the trip [BLANK] my parents allow it.", answer: "whether or not" },
    { category: 'Conjunctions: Subordinating', question: "[BLANK] she was cooking, the phone rang.", answer: "While" },

    { category: 'Conjunctions: Subordinating', question: "Please submit the report [BLANK] the meeting starts.", answer: "before" },
    { category: 'Conjunctions: Subordinating', question: "[BLANK] the project deadline is tight, we must ensure quality.", answer: "Although" },
    { category: 'Conjunctions: Subordinating', question: "I'll review the document [BLANK] I receive it.", answer: "as soon as" },
    { category: 'Conjunctions: Subordinating', question: "He got the promotion [BLANK] he has been with the company for ten years.", answer: "since" },
    { category: 'Conjunctions: Subordinating', question: "[BLANK] the time you finish that task, the client might change their requirements.", answer: "By the time" },
    { category: 'Conjunctions: Subordinating', question: "Carry a spare presentation [BLANK] there are technical issues.", answer: "in case" },
    { category: 'Conjunctions: Subordinating', question: "[BLANK] you are now leading the team, we expect great results.", answer: "Now that" },
    { category: 'Conjunctions: Subordinating', question: "We can't proceed [BLANK] we get approval from management.", answer: "unless" },
    { category: 'Conjunctions: Subordinating', question: "The meeting will be rescheduled [BLANK] the manager returns from her trip.", answer: "after" },
    { category: 'Conjunctions: Subordinating', question: "We will implement the changes [BLANK] we understand the customer feedback.", answer: "when" },
    { category: 'Conjunctions: Subordinating', question: "Decide [BLANK] we should expand our team this quarter.", answer: "whether or not" },
    { category: 'Conjunctions: Subordinating', question: "[BLANK] you are preparing the budget report, please check the last quarter's expenses.", answer: "While" },
    { category: 'Conjunctions: Subordinating', question: "We increased our marketing budget [BLANK] sales have been declining.", answer: "because" },








//
  { category: 'Conjunctions', question: "I went to the store and [BLANK] bought some groceries.", answer: "\"then\"" },
  { category: 'Conjunctions', question: "I studied for my exam, but I [BLANK] didn't pass.", answer: "\"still\"" },
  { category: 'Conjunctions', question: "I like to go to the beach, [BLANK] I like to go to the park.", answer: "\"or\"" },
  { category: 'Conjunctions', question: "The teacher gave us a homework assignment,  [BLANK] she told us to finish it by Friday.", answer: "\"and\"" },
  { category: 'Conjunctions', question: "I went to the store to buy some milk, [BLANK] they were all sold out.", answer: "\"but\"" },
  { category: 'Conjunctions', question: "I like to read books,  [BLANK] I like to watch movies.", answer: "\"or\"" },
  { category: 'Conjunctions', question: "The teacher told us to study for our exam,  [BLANK] she told us to get a good night's sleep.", answer: "\"and\"" },
  { category: 'Conjunctions', question: "I went to the beach, [BLANK] it was too crowded so I left.", answer: "\"but\"" },
  { category: 'Conjunctions', question: "I like to play video games, [BLANK] watch videos.", answer: "\"or\"" },
  { category: 'Conjunctions', question: "The teacher told us to be quiet, [BLANK] she would send us out of the classroom.", answer: "\"or\"" },
    
//[
  {
    "category": "Web3",
    "question": "What is the difference between Web2 and Web3?",
    "answer": "Web2 is the current state of the internet, where centralized platforms control our data and experiences. Web3, on the other hand, is a decentralized internet that is powered by blockchain technology. This means that there is no single entity in control, and users have more control over their data and privacy."
  },
  {
    "category": "Web3",
    "question": "What is blockchain technology?",
    "answer": "Blockchain technology is a distributed ledger that allows for secure, transparent, and tamper-proof transactions. It is the foundation of many Web3 applications, including cryptocurrencies, decentralized finance (DeFi), and non-fungible tokens (NFTs)."
  },
  {
    "category": "Web3",
    "question": "What are some of the benefits of Web3?",
    "answer": "Web3 has many potential benefits."},
  {
    "category": "Web3",
    "question": "What are some of the challenges facing Web3?",
    "answer": "Web3 is still a nascent technology, and there are a number of challenges facing its adoption.", 
  },
  {
    "category": "Web3",
    "question": "What is the future of Web3?",
    "answer": "The future of Web3 is still uncertain, but it has the potential to revolutionize the way we interact with the internet. It has the potential to create a more secure, private, and open web that is more beneficial to users. However, there are also a number of challenges that need to be addressed before Web3 can reach its full potential."
  },

{
    "category": "Web3",
    "question": "What is a blockchain?",
    "answer": "A blockchain is a distributed ledger technology that records transactions in a secure and transparent manner. Each block contains a set of transactions, and once added to the chain, it cannot be altered or deleted, ensuring the integrity of the data."
  },
  {
    "category": "Web3",
    "question": "Can you explain what a decentralized application (DApp) is?",
    "answer": "A decentralized application (DApp) is a software application that runs on a distributed network, rather than being controlled by a single entity. DApps often utilize blockchain technology to ensure transparency and security."
  },
  {
    "category": "Web3",
    "question": "What is an airdrop in the context of cryptocurrency?",
    "answer": "An airdrop is a distribution of cryptocurrency tokens or coins to a specific group of users, often as a promotional or incentive-based initiative. Airdrops are commonly used to introduce new projects or reward early adopters."
  },
  {
    "category": "Web3",
    "question": "Can you elaborate on what cryptocurrency is?",
    "answer": "Cryptocurrency is a digital or virtual currency that uses cryptography for security. It is decentralized, meaning it is not subject to government or financial institution control. Bitcoin, Ethereum, and Litecoin are examples of well-known cryptocurrencies."
  },
  {
    "category": "Web3",
    "question": "What does DeFi stand for?",
    "answer": "DeFi stands for decentralized finance, a term used to describe financial applications and services that are built on blockchain technology. DeFi aims to provide an alternative to traditional banking and financial systems, offering greater transparency, accessibility, and control to users."
  },
  {
    "category": "Web3",
    "question": "What is the role of Bitcoin in the Web3 ecosystem?",
    "answer": "Bitcoin is the first and most well-known cryptocurrency, and it has played a significant role in the development of Web3 technologies. Its decentralized nature and secure transactions have inspired other blockchain-based projects and contributed to the growth of the Web3 space."
  },
  {
    "category": "Web3",
    "question": "What is a block in the context of blockchain technology?",
    "answer": "A block is a unit of data in a blockchain that contains a record of transactions. Each block is linked to the previous block, forming a chain of blocks. This chain ensures the integrity and chronological order of the data stored on the blockchain."
  },
  {
    "category": "Web3",
    "question": "What does it mean when something is decentralized?",
    "answer": "Decentralization refers to the distribution of power or control among multiple entities rather than a single centralized authority. In the context of Web3, decentralized systems are not controlled by any single company or government, but rather by a network of users or nodes."
  },
  {
    "category": "Web3",
    "question": "What is a cryptocurrency wallet?",
    "answer": "A cryptocurrency wallet is a software application or hardware device that stores and manages cryptocurrency tokens or coins. It provides a secure way to access, send, and receive cryptocurrency."
  },
  {
    "category": "Web3",
    "question": "What is a bridge in the Web3 context?",
    "answer": "A bridge is a tool that connects different blockchain networks, allowing users to transfer assets and data between them. Bridges play a crucial role in enabling interoperability within the Web3 ecosystem."
  },
  {
    "category": "Web3",
    "question": "What does burning cryptocurrency mean?",
    "answer": "Burning cryptocurrency refers to intentionally sending tokens or coins to an inaccessible address, effectively removing them from circulation. Burning is sometimes used to reduce the supply of a cryptocurrency, potentially increasing its value."
  },


  {
    "category": "Web3",
    "question": "What is consensus in the context of blockchain technology?",
    "answer": "Consensus is the process by which participating nodes in a blockchain network agree on the current state of the ledger. It ensures that all participants have the same version of the blockchain data, preventing conflicts and maintaining the integrity of the network."
  },
  {
    "category": "Web3",
    "question": "What role does cryptography play in Web3 technologies?",
    "answer": "Cryptography is a fundamental component of Web3 technologies, providing security and privacy. It is used to encrypt and decrypt data, protect user identities, and ensure the integrity of transactions on the blockchain."
  },
  {
    "category": "Web3",
    "question": "What is the significance of Ethereum in the Web3 space?",
    "answer": "Ethereum is a decentralized platform that supports smart contracts, enabling the development of dApps and other innovative Web3 applications. Its ability to execute complex logic on the blockchain has made it a popular choice for building Web3 projects."
  },
  {
    "category": "Web3",
    "question": "What is the purpose of market capitalization in the cryptocurrency world?",
    "answer": "Market capitalization, often abbreviated as market cap, is a measure of the total value of a cryptocurrency in circulation. It is calculated by multiplying the circulating supply of the cryptocurrency by its current price."
  },
  {
    "category": "Web3",
    "question": "What is an NFT, and what makes it unique?",
    "answer": "NFT stands for non-fungible token, a unique digital asset that represents ownership of items such as artwork, collectibles, or virtual land. NFTs are stored on a blockchain, ensuring their authenticity and scarcity."
  },
  {
    "category": "Web3",
    "question": "What is the concept of a cryptocurrency address?",
    "answer": "A cryptocurrency address is a unique identifier used to send and receive cryptocurrency tokens or coins. It is similar to a bank account number but is generated from a cryptographic key pair."
  },
  {
    "category": "Web3",
    "question": "What does the term 'alpha' refer to in the Web3 context?",
    "answer": "In the Web3 context, alpha refers to an early stage of development for a project or product, often characterized by limited functionality and a high degree of risk. Alpha testing allows developers to gather feedback and identify potential issues before releasing the project to a wider audience."
  },
  {
    "category": "Web3",
    "question": "What is a block explorer in the world of blockchain technology?",
    "answer": "A block explorer is a tool that allows users to search and view information stored on a blockchain. It provides access to transaction data, block information, and address balances, enabling users to track transactions, analyze network activity, and verify blockchain data."
  },
  {
    "category": "Web3",
    "question": "What does the abbreviation 'CeX' stand for in the cryptocurrency realm?",
    "answer": "CeX stands for centralized exchange, a platform that facilitates the trading of cryptocurrency tokens or coins. CeX platforms are operated by a central authority and often require users to go through Know Your Customer (KYC) and Anti-Money Laundering (AML) procedures."
  },
  {
    "category": "Web3",
    "question": "What is a DAO in the Web3 ecosystem?",
    "answer": "DAO stands for decentralized autonomous organization, a type of organization governed by rules encoded in smart contracts rather than by traditional hierarchical structures. DAOs allow for transparent and democratic decision-making, empowering members to participate in the organization's governance."
  },
  {
    "category": "Web3",
    "question": "What is the meaning of 'diamond hands' in the cryptocurrency community?",
    "answer": "The term 'diamond hands' is used to describe investors who hold their cryptocurrency holdings despite market fluctuations, demonstrating a strong belief in the long-term value of the asset. It is often used in contrast to 'paper hands' investors who sell their holdings out of fear or uncertainty."
  },
  {
    "category": "Web3",
    "question": "What is the impact of gas fees on the Web3 ecosystem?",
    "answer": "Gas fees can have a significant impact on the usability and adoption of Web3 applications. High gas fees can make it expensive to use certain applications or services, potentially discouraging users from engaging with the Web3 ecosystem. However, as blockchain technology and infrastructure continue to develop, gas fees are expected to become more efficient and affordable."
  },
  {
    "category": "Web3",
    "question": "How does scaling and scalability relate to Web3 and blockchain technology?",
    "answer": "Scaling and scalability are crucial aspects of Web3 and blockchain technology. Scaling refers to the ability of a network to handle an increasing number of users and transactions without compromising performance or latency. Scalability, on the other hand, refers to the network's ability to adapt and grow as demand increases. Addressing scaling and scalability challenges is essential for the long-term viability of Web3 technologies."
  },
  {
    "category": "Web3",
    "question": "What role do oracles play in bridging the gap between the real world and the blockchain?",
    "answer": "Oracles are entities or systems that provide real-world data and information to blockchain networks. They act as intermediaries between the off-chain world and the on-chain world, enabling smart contracts to access and utilize external data to execute their programmed functions."
  },
  {
    "category": "Web3",
    "question": "What is the difference between proof of work (PoW) and proof of stake (PoS) consensus mechanisms?",
    "answer": "Proof of work (PoW) and proof of stake (PoS) are two different consensus mechanisms used in blockchain technology to secure the network and validate transactions. PoW relies on miners solving complex cryptographic puzzles to earn the right to add blocks to the blockchain, while PoS requires participants to stake a certain amount of cryptocurrency as collateral to validate transactions and earn rewards."
  },

  //legal terms

  {
    "category": "Legal Terms",
    "question": "What is an implied-in-fact contract?",
    "answer": "An implied-in-fact contract is a contract that is created by the conduct of the parties. It is not necessary for there to be an express agreement between the parties in order for an implied-in-fact contract to exist."
  },
  {
    "category": "Legal Terms",
    "question": "What is an exclusion clause?",
    "answer": "An exclusion clause is a provision in a contract that excludes or limits liability for certain types of damages. For example, a contract for the sale of goods might include an exclusion clause that excludes liability for consequential damages, such as lost profits."
  },
  {
    "category": "Legal Terms",
    "question": "What is a cost-plus contract?",
    "answer": "A cost-plus contract is a type of contract in which the buyer agrees to pay the seller the cost of performing the work plus a fixed fee. This type of contract is often used when the scope of the work is not known in advance."
  },
  {
    "category": "Legal Terms",
    "question": "What is a non-compete clause?",
    "answer": "A non-compete clause is a provision in a contract that prohibits one party from competing with the other party after the contract ends. This type of clause is often used to protect trade secrets or to prevent employees from leaving and taking their clients or customers with them."
  },
  {
    "category": "Legal Terms",
    "question": "What is an aleatory contract?",
    "answer": "An aleatory contract is a type of contract in which the performance of one or both parties is uncertain. This type of contract is often used in insurance contracts, where the insurer agrees to pay a certain sum of money in the event of a certain event, such as a fire or an accident."
  },
  {
    "category": "Legal Terms",
    "question": "What is a meeting of the minds?",
    "answer": "A meeting of the minds is a legal term that refers to the mutual agreement of the parties to a contract to the terms of the contract. A contract cannot be formed unless there is a meeting of the minds."
  },
  {
    "category": "Legal Terms",
    "question": "What is a standard form contract?",
    "answer": "A standard form contract is a pre-printed contract that is offered by one party to another on a take-it-or-leave-it basis. Standard form contracts are often used in commercial transactions, such as contracts for the purchase of goods or services."
  },
  {
    "category": "Legal Terms",
    "question": "What is impossibility?",
    "answer": "Impossibility is a legal defense that can be used to excuse a breach of contract. Impossibility occurs when it is impossible for the breaching party to perform their obligations under the contract. This can be due to factors such as an act of God, a change in the law, or the unavailability of essential materials."
  },
  {
    "category": "Legal Terms",
    "question": "What is accord and satisfaction?",
    "answer": "Accord and satisfaction is a legal doctrine that provides that a party can discharge their obligations under a contract by performing an alternative obligation that is accepted by the other party in satisfaction of the original obligation. For example, a debtor might accord and satisfy a debt by paying the creditor a lesser amount of money than the amount owed."
  },
  {
    "category": "Legal Terms",
    "question": "What is a force majeure clause?",
    "answer": "A force majeure clause is a provision in a contract that excuses both parties from performance in the event of an unforeseen event beyond their control, such as a natural disaster or war. This type of clause is often used in international contracts to protect the parties from the risk of unforeseen events that could make performance impossible or impractical."
  },
  {
    "category": "Legal Terms",
    "question": "What is an indemnification clause?",
    "answer": "An indemnification clause is a provision in a contract that shifts the risk of loss from one party to the other. It is often used to protect one party from liability for the negligence or wrongdoing of the other party. For example, a contract for the purchase of goods might include an indemnification clause that indemnifies the seller from any liability for injuries caused by the product."
  },

{
  "category": "Legal Terms",
  "question": "What is confidentiality?",
  "answer": "Confidentiality is a legal obligation to keep information secret. It is often included in contracts to protect sensitive information, such as trade secrets or personal data."
},
{
  "category": "Legal Terms",
  "question": "What is indemnity?",
  "answer": "Indemnity is a legal agreement in which one party agrees to compensate the other party for any losses or damages they may incur. It is often used in contracts to protect one party from the negligence or wrongdoing of the other party."
},
{
  "category": "Legal Terms",
  "question": "What is acceptance?",
  "answer": "Acceptance is the act of agreeing to the terms of an offer. It is a necessary element of a contract, as there cannot be a contract without both an offer and acceptance."
},
{
  "category": "Legal Terms",
  "question": "What is force majeure?",
  "answer": "Force majeure is a legal term that refers to an event or circumstance beyond the control of either party to a contract that prevents them from performing their obligations under the contract. Examples of force majeure events include natural disasters, war, and government intervention."
},
{
  "category": "Legal Terms",
  "question": "What is a severability clause?",
  "answer": "A severability clause is a provision in a contract that states that if any part of the contract is invalid or unenforceable, the rest of the contract will remain in effect. This is important because it prevents the entire contract from being invalidated if only one part is problematic."
},
{
  "category": "Legal Terms",
  "question": "What is a breach of contract?",
  "answer": "A breach of contract is a failure to perform one's obligations under a contract. This can be a major breach, which goes to the heart of the contract and renders it impossible to perform, or a minor breach, which does not go to the heart of the contract and can be remedied."
},
{
  "category": "Legal Terms",
  "question": "What is a warranty?",
  "answer": "A warranty is a promise that a product or service will be of a certain quality or that it will perform in a certain way. Warranties can be express, which means they are stated explicitly in a contract, or implied, which means they are not stated explicitly but are instead implied by law."
},
{
  "category": "Legal Terms",
  "question": "What is assignment?",
  "answer": "Assignment is the transfer of rights or obligations from one party to another. It is often used in contracts to transfer ownership of property or to transfer the right to perform a contractual obligation."
},
{
  "category": "Legal Terms",
  "question": "What are damages?",
  "answer": "Damages are a legal remedy for a breach of contract. They are awarded to compensate the non-breaching party for the losses they have incurred as a result of the breach."
},
{
  "category": "Legal Terms",
  "question": "What is termination for convenience?",
  "answer": "Termination for convenience is a provision in a contract that allows either party to terminate the contract without cause. This is often used in contracts with long terms, such as contracts for the purchase of goods or services."
},
{
  "category": "Legal Terms",
  "question": "What is an arbitration clause?",
  "answer": "An arbitration clause is a provision in a contract that requires disputes between the parties to be resolved through arbitration instead of litigation. Arbitration is a private process in which a neutral third party decides the dispute."
},
{
  "category": "Legal Terms",
  "question": "What is an integration clause?",
  "answer": "An integration clause is a provision in a contract that states that the written contract is the entire agreement between the parties and that no other representations or agreements are binding. This is important because it prevents one party from claiming that there was an oral agreement that contradicts the written contract."
},
{
  "category": "Legal Terms",
  "question": "What is a bill of sale?",
  "answer": "A bill of sale is a legal document that transfers ownership of personal property from one party to another. It is often used when selling a car, boat, or other valuable item."
},

//
{
  "category": "Dental Terms",
  "question": "What is toothache?",
  "answer": "Pain felt in or around a tooth."
},
{
  "category": "Dental Terms",
  "question": "What are sensitive teeth?",
  "answer": "Pain felt when drinking hot or cold beverages."
},
{
  "category": "Dental Terms",
  "question": "What does sore gums mean?",
  "answer": "A painful sensation in the gums, usually when brushing or flossing."
},
{
  "category": "Dental Terms",
  "question": "What are mouth sores?",
  "answer": "Small, painful blisters in the mouth."
},
{
  "category": "Dental Terms",
  "question": "What is bad breath?",
  "answer": "Unpleasant smell from inside the mouth."
},
{
  "category": "Dental Terms",
  "question": "What is dry mouth?",
  "answer": "Not enough saliva that causes a sticky and dry feeling in the mouth."
},
{
  "category": "Dental Terms",
  "question": "What is a cavity?",
  "answer": "A decayed part of the tooth that forms a hole."
},
{
  "category": "Dental Terms",
  "question": "What is decay?",
  "answer": "An infection that destroys the teeth."
},
{
  "category": "Dental Terms",
  "question": "What is gingivitis?",
  "answer": "Inflammation of the soft gum tissue surrounding the teeth."
},
{
  "category": "Dental Terms",
  "question": "What is plaque?",
  "answer": "A sticky substance containing microorganisms that grow on the surface of teeth."
},
{
  "category": "Dental Terms",
  "question": "What is an infection?",
  "answer": "A disease caused by harmful microorganisms like bacteria or virus (in this case linked to the mouth or area around the mouth)."
},
{
  "category": "Dental Terms",
  "question": "What are broken teeth?",
  "answer": "A crack or chip on the tooth, usually caused by injuries to the mouth."
},
{
  "category": "Dental Terms",
  "question": "What are teeth stains?",
  "answer": "Yellowish discolouration of the teeth caused by food and drinks or by disease and medications."
},
{
  "category": "Dental Terms",
  "question": "What is a filling?",
  "answer": "A protective material like gold, porcelain, or composite resin used to fill a tooth cavity or repair cracked or broken teeth."
},
{
  "category": "Dental Terms",
  "question": "What is flossing?",
  "answer": "Cleaning between your teeth using a thin thread, which is called dental floss."
},
{
  "category": "Dental Terms",
  "question": "What is mouthwash?",
  "answer": "A liquid used for rinsing the mouth."
},
{
  "category": "Dental Terms",
  "question": "What is whitening?",
  "answer": "Bleaching teeth to make them look whiter."
},
{
  "category": "Dental Terms",
  "question": "What are braces?",
  "answer": "Metal or plastic wires that are attached to the teeth to push them into the correct position."
},
{
  "category": "Dental Terms",
  "question": "What are dentures?",
  "answer": "A removable replacement for missing teeth."
},
{
  "category": "Dental Terms",
  "question": "What does extract mean in dentistry?",
  "answer": "To remove a tooth."
},
{
  "category": "Dental Terms",
  "question": "What is an implant?",
  "answer": "A small titanium fixture that replaces the root portion of a missing tooth."
},
{
  "category": "Dental Terms",
  "question": "What is a crown in dentistry?",
  "answer": "A material used to cover a damaged tooth."
},
{
  "category": "Dental Terms",
  "question": "What is anesthesia in dentistry?",
  "answer": "A medication injected to help lessen the pain and discomfort during a dental procedure."
},
{
  "category": "Dental Terms",
  "question": "What is a dental x-ray?",
  "answer": "Pictures of teeth and gums that show a dentist if there are cavities, gum disease, or other dental problems."
},
{
  "category": "Dental Terms",
  "question": "What is a dental check-up?",
  "answer": "A routine examination of the teeth to make sure they are healthy."
},
{
  "category": "Dental Terms",
  "question": "What is teeth cleaning?",
  "answer": "(Usually) twice per year procedures used to clean the gums and teeth in order to promote general teeth health."
},
{
  "category": "Dental Terms",
  "question": "Who is a Dental hygienist?",
  "answer": "A person who cleans the teeth, checks for gum disease, and advises on how to care for your teeth."
},
{
  "category": "Dental Terms",
  "question": "Who is a Dental technician?",
  "answer": "A person who constructs custom dentures, crowns, implants, and other dental appliances."
},
{
  "category": "Dental Terms",
  "question": "Who is an Endodontist?",
  "answer": "A dentist who specializes in treating root canals."
},
{
  "category": "Dental Terms",
  "question": "Who is an Orthodontist?",
  "answer": "A dentist who specializes in straightening teeth."
},


{
  "category": "Dental Terms",
  "question": "What is a periodontist?",
  "answer": "A dentist who specializes in the prevention, diagnosis, and treatment of periodontal disease."
},
{
  "category": "Dental Terms",
  "question": "What is a pediatric dentist?",
  "answer": "A dentist who specializes in the oral health of children from infancy through the teen years."
},
{
  "category": "Dental Terms",
  "question": "What is an oral surgeon?",
  "answer": "A dentist who specializes in surgery of the mouth, face, and jaws."
},
{
  "category": "Dental Terms",
  "question": "What is a prosthodontist?",
  "answer": "A dentist who specializes in the restoration and replacement of missing teeth and other oral structures."
},
{
  "category": "Dental Terms",
  "question": "What is scaling and root planing?",
  "answer": "A deep cleaning procedure that involves removing plaque and tartar from the teeth and smoothing the roots to help gums reattach to the teeth."
},
{
  "category": "Dental Terms",
  "question": "What is a dental bridge?",
  "answer": "A fixed dental restoration used to replace one or more missing teeth by joining an artificial tooth permanently to adjacent teeth or dental implants."
},
{
  "category": "Dental Terms",
  "question": "What is a dental crown?",
  "answer": "A cap that is placed over a tooth to restore its shape, size, strength, and improve its appearance."
},
{
  "category": "Dental Terms",
  "question": "What is dental bonding?",
  "answer": "A procedure in which a tooth-colored resin material is applied and hardened with a special light, ultimately bonding the material to the tooth to improve a person's smile."
},
{
  "category": "Dental Terms",
  "question": "What is a dental sealant?",
  "answer": "A thin, plastic coating painted on the chewing surfaces of teeth, usually the back teeth, to prevent tooth decay."
},
{
  "category": "Dental Terms",
  "question": "What is a root canal?",
  "answer": "A treatment to repair and save a badly damaged or infected tooth instead of removing it."
},
{
  "category": "Dental Terms",
  "question": "What is tooth extraction?",
  "answer": "The process of removing a tooth from its socket in the bone."
},
{
  "category": "Dental Terms",
  "question": "What is a veneer?",
  "answer": "A layer of material placed over a tooth to improve the aesthetics of a smile or protect the tooth's surface from damage."
},
{
  "category": "Dental Terms",
  "question": "What is a night guard?",
  "answer": "A removable appliance worn at night to protect the teeth and jaw from the effects of grinding and clenching."
},
{
  "category": "Dental Terms",
  "question": "What is a bite adjustment?",
  "answer": "A procedure to correct misalignment of the teeth when the jaws are closed."
},

//

{
  "category": "Law Idioms",
  "question": "Caught Red-Handed",
  "answer": "Apprehended while committing a crime"
},
{
  "category": "Law Idioms",
  "question": "Five-Finger Discount",
  "answer": "Shoplifting"
},
{
  "category": "Law Idioms",
  "question": "Foul Play",
  "answer": "Crime, typically murder"
},
{
  "category": "Law Idioms",
  "question": "Get Off Scot Free",
  "answer": "Be accused of wrongdoing but pay no penalty at all"
},
{
  "category": "Law Idioms",
  "question": "(Caught) Bang to Rights",
  "answer": "Caught in an unlawful or immoral act without any mitigating circumstances"
},
{
  "category": "Law Idioms",
  "question": "Above The Law",
  "answer": "Exempt from the laws that apply to everyone else"
},
{
  "category": "Law Idioms",
  "question": "Act Of Congress",
  "answer": "Hard to get, said of authorization"
},
{
  "category": "Law Idioms",
  "question": "All Rights Reserved",
  "answer": "Said of a published work; all reproduction rights are asserted by the copyright holder"
},
{
  "category": "Law Idioms",
  "question": "Bail Out",
  "answer": "To rescue someone from a bad situation, to shield someone from the consequences of his or her actions"
},
{
  "category": "Law Idioms",
  "question": "Ball and Chain",
  "answer": "1. One's spouse (derogatory but often affectionate); 2. an ongoing burden"
},
{
  "category": "Law Idioms",
  "question": "Letter of the Law",
  "answer": "The explicit meaning of a law, as opposed to the spirit of the law, the law's general intention"
},
{
  "category": "Law Idioms",
  "question": "Open-and-Shut Case",
  "answer": "A situation, especially a legal proceeding, with a clear, certain outcome"
},
{
  "category": "Law Idioms",
  "question": "Take the Fifth",
  "answer": "Refuse to answer because answering might incriminate or cause problems for you"
},

//

//noun phrases
//labor shortage
//

// Continuing from the previous entries...
{
  "category": "Phrasal verbs: work",
  "question": "Can you please _____ that important point in the meeting minutes?",
  "answer": "write down|note down"
},
{
  "category": "Phrasal verbs: work",
  "question": "The numbers don't  _____! We need to check the calculations again.",
  "answer": "add up"
},



{
  "category": "Phrasal verbs: work",
  "question": "After ten years of service, the CEO decided to _____ from his position.",
  "answer": "step down|retire|"
},
{
  "category": "Phrasal verbs: work",
  "question": "The new marketing campaign really _____ last month.",
  "answer": "Took off"
},
{
  "category": "Phrasal verbs: work",
  "question": "He's going to _____ a new hobby to relax.",
  "answer": "Take up"
},
{
  "category": "Phrasal verbs: work",
  "question": "Before making a decision, it's important to _____ all options carefully.",
  "answer": "Weigh up|consider"
},
{
  "category": "Phrasal verbs: work",
  "question": "Please _____ your work before submitting it.",
  "answer": "back up|save"
},
{
  "category": "Phrasal verbs: work",
  "question": "A new issue has _____; we need to address it immediately.",
  "answer": "come up|arisen"
},
{
  "category": "Phrasal verbs: work",
  "question": "She is able to _____ with the latest technology trends effortlessly.",
  "answer": "Keep up with"
},
{
  "category": "Phrasal verbs: work",
  "question": "We need to _____ a new system for managing customer feedback.",
  "answer": "Set up"
},
{
  "category": "Phrasal verbs: work",
  "question": "The legal team will _____ the contract details thoroughly.",
  "answer": "Go through"
},


{
  "category": "Phrasal verbs: work",
  "question": "Our company plans to _____ into new markets next year.",
  "answer": "Branch out"
},
{
  "category": "Phrasal verbs: work",
  "question": "After years of research, we're finally ready to _____ the tech industry.",
  "answer": "Break into"
},
{
  "category": "Phrasal verbs: work",
  "question": "After years of acting school she  finally  _____ the film industry.",
  "answer": "Broke into"
},


{
  "category": "Phrasal verbs: work",
  "question": "Despite the difficulties, we must _____ with the project.",
  "answer": "Carry on"
},
{
  "category": "Phrasal verbs: work",
  "question": "The store had to _____ due to financial problems.",
  "answer": "Close down"
},
{
  "category": "Phrasal verbs: work",
  "question": "I _____ to meeting with the team in Cyprus next week.",
  "answer": "look forward to"
},


{
  category: "Phrasal verbs: work",
  question: "What does 'follow up' imply in a business conversation?",
  answer: "'Follow up' means to continue or take additional actions related to a previous activity or discussion, like following up on a client's request."
},
{
  category: "Phrasal verbs: work",
  question: "How is 'look into' used in a professional setting?",
  answer: "'Look into' means to investigate or research something more deeply, like looking into a customer complaint or a technical issue."
},
{
  category: "Phrasal verbs: work",
  question: "Can you define 'sign off on' in a workplace?",
  answer: "'Sign off on' refers to giving formal approval or consent to something, such as signing off on a project plan or a budget."
},
{
  category: "Phrasal verbs: work",
  question: "What does 'work out' mean in a business context?",
  answer: "'Work out' can mean to resolve a problem or to calculate something, like working out the details of a deal or working out a budget."
},
{
  category: "Phrasal verbs: work",
  question: "How would 'touch base' be used in an office environment?",
  answer: "'Touch base' means to make brief contact with someone to discuss something or to get an update, such as touching base with a colleague about a project."
},


{
  category: "Phrasal verbs: work",
  question: "What does 'catch up' mean in a work context?",
  answer: "'Catch up' means to bring oneself up to date in a particular area or topic, like catching up on emails or work progress."
},
{
  category: "Phrasal verbs: work",
  question: "How would you use 'draw up' in a business setting?",
  answer: "'Draw up' refers to the process of preparing or writing a document, plan, or agreement, like drawing up a contract or a proposal."
},
{
  category: "Phrasal verbs: work",
  question: "What does 'lay off' mean in a workplace?",
  answer: "'Lay off' is used when a company dismisses employees, often due to financial constraints or restructuring. I just got fired. I just got laid off."
},


{
  category: "Phrasal verbs: work",
  question: "renew the contract",
  answer: "We have asked them to renew the contract."
},


{
  "category": "Phrasal verbs",
  "question": "When you receive important information and decide to take action because of it, you ___ ___ it.",
  "answer": "act on"
},
{
  "category": "Phrasal verbs",
  "question": "If a machine or part of your body starts to behave badly or strangely, it is said to ___ ___.",
  "answer": "act up"
},
{
  "category": "Phrasal verbs",
  "question": "When you are held responsible for a problem, you ___ ___  it.",
  "answer": "answer for"
},
{
  "category": "Phrasal verbs",
  "question": "If you need information or help and you ask a number of people, you ___ ___.",
  "answer": "ask around"
},
{
  "category": "Phrasal verbs",
  "question": "When an event or a plan is cancelled, it is ___ ___.",
  "answer": "called off"
},
{
  "category": "Phrasal verbs",
  "question": "To continue an activity or process without interruption, you ___ ___.",
  "answer": "carry on"
},
{
  "category": "Phrasal verbs",
  "question": "When you review or revise something, you ___ ___ it.",
  "answer": "go over"
},
{
  "category": "Phrasal verbs",
  "question": "When you ask someone to wait for a short time, you ask them to ___ ___.",
  "answer": "hold on"
},
{
  "category": "Phrasal verbs",
  "question": "To continue doing something, especially an action or a process, you ___ ___.",
  "answer": "keep on"
},
{
  "category": "Phrasal verbs",
  "question": "When you maintain a continuous action or persist in doing something, you ___ it ___ ",
  "answer": "keep up"
},
{
  "category": "Phrasal verbs",
  "question": "If you go somewhere and collect something that someone else has left or sent, you ___ it __.",
  "answer": "pick up"
},
{
  "category": "Phrasal verbs",
  "question": "When you start wearing something, you ___ it ___.",
  "answer": "put on"
},

{
  "category": "Phrasal verbs",
  "question": "When you need to cancel an event or meeting, you ___ it ___",
  "answer": "call off"
},
{
  "category": "Phrasal verbs",
  "question": "To continue with your work or activity, you ___ ___",
  "answer": "carry on"
},
{
  "category": "Phrasal verbs",
  "question": "If you persist in doing something, you ___ ___",
  "answer": "keep on"
},
{
  "category": "Phrasal verbs",
  "question": "When you maintain a continuous action or persist in doing something, you ___ it ___",
  "answer": "keep up"
},
{
  "category": "Phrasal verbs",
  "question": "To decline an opportunity or chance, you ___ it ___",
  "answer": "pass up"
},
{
  "category": "Phrasal verbs",
  "question": "If you need to collect something, perhaps from another department, you ___ it ___",
  "answer": "pick up"
},
{
  "category": "Phrasal verbs",
  "question": "When you postpone a meeting or an event, you ___ it ___",
  "answer": "put off"
},
{
  "category": "Phrasal verbs",
  "question": "To begin wearing something, like a safety vest, you ___ it ___",
  "answer": "put on"
},
{
  "category": "Phrasal verbs",
  "question": "To stop a machine or equipment, you ___ it ___",
  "answer": "turn off"
},
{
  "category": "Phrasal verbs",
  "question": "To start a machine, like a computer, you ___ it ___",
  "answer": "turn on"
},
{
  "category": "Phrasal verbs",
  "question": "If you increase the volume or temperature, you ___ it ___",
  "answer": "turn up"
},
{
  "category": "Phrasal verbs",
  "question": "To stop sleeping, especially in the morning, you ___ ___",
  "answer": "wake up"
},
{
  "category": "Phrasal verbs",
  "question": "To achieve success effortlessly, especially in a competition, you ___ ___ ___ the award",
  "answer": "walk off with"
},
{
  "category": "Phrasal verbs",
  "question": "When you solve a problem or find an answer, you ___ it ___",
  "answer": "work out"
},

{
  "category": "Phrasal verbs",
  "question": "When you need to calm someone down from being angry or emotionally excited, you tell them to ___ ___",
  "answer": "calm down"
},
{
  "category": "Phrasal verbs",
  "question": "If you manage to reach someone who was ahead of you, perhaps in a project or task, you ___ ___",
  "answer": "catch up"
},
{
  "category": "Phrasal verbs",
  "question": "When someone faints or loses consciousness, possibly due to stress or overwork, they ___ ___",
  "answer": "pass out"
},
{
  "category": "Phrasal verbs",
  "question": "If a plane leaves the ground or departs, it is said to ___ ___",
  "answer": "take off"
},

{
  "category": "Phrasal verbs",
  "question": "When you encourage someone to persevere in a difficult situation, you might say, '___ ___ it'",
  "answer": "hang in"
},
{
  "category": "Phrasal verbs",
  "question": "To express the process of making a decision after considering all the options, you ___ ___ a decision",
  "answer": "hammer out"
},
{
  "category": "Phrasal verbs",
  "question": "When a meeting or discussion is temporarily stopped, you ___ it ___",
  "answer": "hold off"
},
{
  "category": "Phrasal verbs",
  "question": "If you are delaying a decision or action, you might be said to ___ it ___",
  "answer": "hold up"
},
{
  "category": "Phrasal verbs",
  "question": "When you want someone to explain or justify their actions in a work scenario, you ask them to ___ it ___",
  "answer": "justify it"
},
{
  "category": "Phrasal verbs",
  "question": "To discuss something in a detailed and serious manner, often to solve a problem, you ___ it ___",
  "answer": "knock around"
},

{
  "category": "Phrasal verbs",
  "question": "If you are reducing something, like expenses or time spent on a task, you ___ it ___",
  "answer": "knock down"
},


{
  "category": "Phrasal verbs",
  "question": "When you successfully deal with a difficult situation or find a solution, you ___ ___ it",
  "answer": "get through"
},
{
  "category": "Phrasal verbs",
  "question": "To start working seriously and with determination, especially after a delay, you ___ ___ to work",
  "answer": "get down"
},
{
  "category": "Phrasal verbs",
  "question": "When you manage to make someone understand or believe something, you ___ it ___ to them",
  "answer": "get across"
},
{
  "category": "Phrasal verbs",
  "question": "To receive information or a message, especially officially or formally, you ___ it ___",
  "answer": "get in"
},
{
  "category": "Phrasal verbs",
  "question": "When you start to seriously think or focus on a task, especially a difficult one, you ___ ___ to it",
  "answer": "get down"
},



{
  category: "Phrasal verbs: work",
  question: "Can you explain 'run by' in a work environment?",
  answer: "'Run by' means to present something to someone for review or approval, such as running a plan by your manager. I would like to run an idea by you!"
},
{
  category: "Phrasal verbs: work",
  question: "What is the meaning of 'set up' in a professional setting?",
  answer: "'Set up' can refer to arranging or organizing something, like setting up a meeting or setting up equipment."
},



//
{ category: "Phrasal verbs:home", question: "To ___ ___ means to tidy or organize a space.", answer: "straighten up" },
  { category: "Phrasal verbs:home", question: "To ___ ___ involves adding something to what is already there.", answer: "add on|build on" },
  { category: "Phrasal verbs:home", question: "To ___ ___ means to make a place neat and free from dirt or disorder.", answer: "clean up" },
  { category: "Phrasal verbs:home", question: "To ___ ___ means to remove dust from a surface.", answer: "dust off" },
  { category: "Phrasal verbs:home", question: "To ___ ___ involves refilling something to its capacity.", answer: "fill up" },
  { category: "Phrasal verbs:home", question: "To ___ ___ means to repair or renovate something.", answer: "fix up" },
  { category: "Phrasal verbs:home", question: "To ___ ___ involves placing something on a hook or receiver.", answer: "hang up" },
  { category: "Phrasal verbs:home", question: "To ___ ___ refers to securing a place by locking doors and windows.", answer: "lock up" },
  { category: "Phrasal verbs:home", question: "To ___ ___ means to clean a surface using a mop.", answer: "mop up" },
  { category: "Phrasal verbs:home", question: "To ___ ___ involves lifting and holding something.", answer: "pick up" },
  { category: "Phrasal verbs:home", question: "To ___ ___ means to store items in their proper place.", answer: "put away" },
  { category: "Phrasal verbs:home", question: "To ___ ___ refers to inserting something into something else.", answer: "put in" },
  { category: "Phrasal verbs:home", question: "To ___ ___ means to dress oneself with an item of clothing.", answer: "put on" },
  { category: "Phrasal verbs:home", question: "To ___ ___ (music) involves starting to play music.", answer: "turn on|put on" },
  { category: "Phrasal verbs:home", question: "To ___ ___ means to extinguish something like a fire.", answer: "put out" },
  { category: "Phrasal verbs:home", question: "To ___ ___ refers to displaying or setting something up.", answer: "put up" },
  { category: "Phrasal verbs:home", question: "To ___ ___ means to amass or gather a supply of something.", answer: "stock up" },
  { category: "Phrasal verbs:home", question: "To ___ ___ involves removing something from a higher place.", answer: "take down" },
  { category: "Phrasal verbs:home", question: "To ___ ___ means to remove something from inside a place.", answer: "take out" },
  { category: "Phrasal verbs:home", question: "To ___ ___ refers to discarding something as waste.", answer: "throw away|throw out|trash it What do you need to throw away?" },
  { category: "Phrasal verbs:home", question: "To ___ ___ means to stop the operation of a device.", answer: "switch off|turn off" },
  { category: "Phrasal verbs:home", question: "To ___ ___ involves starting the operation of a device.", answer: "turn on" },
  { category: "Phrasal verbs:home", question: "To ___ ___ means to clean a surface, especially by rubbing it.", answer: "wipe down" },

//
{
  "category": "Time phrases",
  "question": "We need to update the software ___ ___ ___ ___ ___ .",
  "answer": "every now and then"
},
{
  "category": "Time phrases",
  "question": "She visits her hometown ___ ___ ___ ___ .",
  "answer": "now and then"
},
{
  "category": "Time phrases",
  "question": "The team holds meetings ___ ___ ___ ___ .",
  "answer": "every so often"
},
{
  "category": "Time phrases",
  "question": "He checks his email ___ ___ ___ .",
  "answer": "at times"
},
{
  "category": "Time phrases",
  "question": "I think about changing careers ___ ___ ___ .",
  "answer": "now and again"
},
{
  "category": "Time phrases",
  "question": "The manager evaluates the process ___ ___ .",
  "answer": "on occasion"
},
{
  "category": "Time phrases",
  "question": "Our company organizes team-building activities  ___ .",
  "answer": "occasionally"
},
{
  "category": "Time phrases",
  "question": "Employees are allowed to work remotely ___ ___ ___ .",
  "answer": "off and on"
},

{
  "category": "Time phrases",
  "question": "I hear from my colleagues ___ ___  ___ .",
  "answer": "here and there"
},
{
  "category": "Time phrases",
  "question": "Our office holds casual Fridays ___ ___ ___ .",
  "answer": "at times"
},
{
  "category": "Time phrases",
  "question": "We receive performance reviews ___ ___ ___ ___ .",
  "answer": "every now and again"
},
{
  "category": "Time phrases",
  "question": "The CEO visits our branch ___ ___ ___ .",
  "answer": "sometimes"
},

{
  "category": "Time phrases",
  "question": "The department schedules training sessions ___ ___ ___ .",
  "answer": "now and then"
},
{
  "category": "Time phrases",
  "question": "Our team has brainstorming sessions ___ ___  ___ .",
  "answer": "every so often"
},
{
  "category": "Time phrases",
  "question": "I check the project's progress ___ ___ .",
  "answer": "on occasion"
},
{
  "category": "Time phrases",
  "question": "We update our clients about the project ___  ___ .",
  "answer": "at times"
},
{
  "category": "Time phrases",
  "question": "The IT support is available ___ ___ ___ .",
  "answer": "off and on"
},
{
  "category": "Time phrases",
  "question": "The company reviews its policies ___ ___ ___ ___ .",
  "answer": "every now and again"
},



//
{
  "category": "Verbs: Auxiliary",
  "question": "Context = ability: Which auxiliary verb is best? Can, could, be able to: She [BLANK] reach the top shelf easily.",
  "answer": "can|is able to "
}
,
{
  "category": "Verbs: Auxiliary",
  "question": "Context = past habitual action: Which auxiliary verb is best? Used to, would: They [BLANK] go for a walk every evening.",
  "answer": "used to"
}
,
{
  "category": "Verbs: Auxiliary",
  "question": "Context = necessity: Which auxiliary verb is best? Must, have to, need: We [BLANK] submit the report by Friday.",
  "answer": "must"
}
,
{
  "category": "Verbs: Auxiliary",
  "question": "Context = future plans: Which auxiliary verb is best? ought to, are going to: They [BLANK] visit their grandparents this weekend.",
  "answer": "are going to"
}
,
{
  "category": "Verbs: Auxiliary",
  "question": "Context = possibility: Which auxiliary verb is best? Could, might, may: It [BLANK] rain later this evening.",
  "answer": "might"
}
,
{
  "category": "Verbs: Auxiliary",
  "question": "Context = obligation: Which auxiliary verb is best? Has to, must, should: He [BLANK] attend the meeting tomorrow.",
  "answer": "has to"
}
,
{
  "category": "Verbs: Auxiliary",
  "question": "Context = strong recommendation: Which auxiliary verb is best? Had better, should, ought to: You [BLANK] check your answers before submitting the test.",
  "answer": "had better"
},

//
{
  "category": "Verbs: Auxiliary",
  "question": "Context = polite request: Which auxiliary verb is best? Could, may, might: [BLANK] you please pass the salt?",
  "answer": "Could"
}
,
{
  "category": "Verbs: Auxiliary",
  "question": "Context = future possibility: Which auxiliary verb is best? May, might, could: They [BLANK] come to the party if they finish work early.",
  "answer": "might"
}
,
{
  "category": "Verbs: Auxiliary",
  "question": "Context = past ability: Which auxiliary verb is best? Could, was able to: She [BLANK] speak three languages fluently when she was a child.",
  "answer": "could"
}
,
{
  "category": "Verbs: Auxiliary",
  "question": "Context = future obligation at work: Which auxiliary verb is best? Must, has to, will have to: We [BLANK] complete the project by next Monday.",
  "answer": "must"
}
,
{
  "category": "Verbs: Auxiliary",
  "question": "Context = ability in a professional setting: Which auxiliary verb is best? Can, could, be able to: She [BLANK] operate the new software efficiently.",
  "answer": "can"
}
,
{
  "category": "Verbs: Auxiliary",
  "question": "Context = past responsibility at work: Which auxiliary verb is best? Had to, must, should have: Last year, he [BLANK] manage the entire team alone.",
  "answer": "had to"
}
,
{
  "category": "Verbs: Auxiliary",
  "question": "Context = suggestion in a meeting: Which auxiliary verb is best? Should, could, might: We [BLANK] consider implementing a new marketing strategy.",
  "answer": "should"
}
,
{
  "category": "Verbs: Auxiliary",
  "question": "Context = polite offer at work: Which auxiliary verb is best? May, can, could: [BLANK] I help you with that report?",
  "answer": "Can"
}
,
{
  "category": "Verbs: Auxiliary",
  "question": "Context = necessity for a work task: Which auxiliary verb is best? Need to, have to, must: You [BLANK] wear safety equipment in the lab.",
  "answer": "must"
}
,
{
  "category": "Verbs: Auxiliary",
  "question": "Context = future plans in a professional setting: Which auxiliary verb is best? Will, going to, planning to: The company [BLANK] launch the new product line in June.",
  "answer": "is going to"
}
,
{
  "category": "Verbs: Auxiliary",
  "question": "Context = expressing a work-related possibility: Which auxiliary verb is best? Might, could, may: The meeting [BLANK] extend beyond 5 PM.",
  "answer": "might"
},

{
  "category": "Verbs: Auxiliary",
  "question": "Context = work-related advice: Which auxiliary verb is best? Should, ought to: You [BLANK] double-check your emails before sending them.",
  "answer": "should"
}
,
{
  "category": "Verbs: Auxiliary",
  "question": "Context = request for permission at work: Which auxiliary verb is best? May, can, could: [BLANK] I leave early today for a medical appointment?",
  "answer": "May"
}
,
{
  "category": "Verbs: Auxiliary",
  "question": "Context = expressing a requirement in a job: Which auxiliary verb is best? Must, have to, need to: Employees [BLANK] adhere to the company's code of conduct.",
  "answer": "must"
}
,
{
  "category": "Verbs: Auxiliary",
  "question": "Context = expressing past ability in a professional setting: Which auxiliary verb is best? Could, was able to: Last year, she [BLANK] solve complex problems more effectively.",
  "answer": "could"
}
,
{
  "category": "Verbs: Auxiliary",
  "question": "Context = discussing future possibilities at work: Which auxiliary verb is best? Might, could, may: Sales [BLANK] increase if we improve our online presence.",
  "answer": "might"
}
,
{
  "category": "Verbs: Auxiliary",
  "question": "Context = indicating a strong recommendation in a professional context: Which auxiliary verb is best? Had better, should: You [BLANK] prepare a detailed report for the next board meeting.",
  "answer": "had better"
}
,
{
  "category": "Verbs: Auxiliary",
  "question": "Context = expressing ongoing work: Which auxiliary verb is best? Am, is, are: Our team [BLANK] currently working on the new project.",
  "answer": "is"
}
,
{
  "category": "Verbs: Auxiliary",
  "question": "Context = indicating necessity in a workplace situation: Which auxiliary verb is best? Need to, have to: We [BLANK] meet the client's specifications to secure the contract.",
  "answer": "need to"
},


{
  "category": "Verbs: Auxiliary",
  "question": "Context = expressing future intentions at work: Which auxiliary verb is best? Going to, planning to: The department [BLANK] hold a training session next month.",
  "answer": "is going to"
}
,
{
  "category": "Verbs: Auxiliary",
  "question": "Context = expressing certainty in a professional setting: Which auxiliary verb is best? Must, has to: The report [BLANK] be submitted by tomorrow without fail.",
  "answer": "must"
}
,
{
  "category": "Verbs: Auxiliary",
  "question": "Context = seeking approval at work: Which auxiliary verb is best? May, can, could: [BLANK] I proceed with the proposed plan?",
  "answer": "May"
}
,
{
  "category": "Verbs: Auxiliary",
  "question": "Context = expressing an obligation based on external factors: Which auxiliary verb is best? Have to, must: We [BLANK] comply with industry regulations.",
  "answer": "have to"
}
,
{
  "category": "Verbs: Auxiliary",
  "question": "Context = expressing a conditional action in the workplace: Which auxiliary verb is best? Would, could: I [BLANK] help with the project if I had more time.",
  "answer": "would"
}
,
{
  "category": "Verbs: Auxiliary",
  "question": "Context = expressing past continuous action at work: Which auxiliary verb is best? Was, were: We [BLANK] discussing the budget when the meeting was interrupted.",
  "answer": "were"
}
,
{
  "category": "Verbs: Auxiliary",
  "question": "Context = indicating a strong suggestion in a work environment: Which auxiliary verb is best? Should, ought to: The team [BLANK] focus more on customer feedback.",
  "answer": "should"
}
,
{
  "category": "Verbs: Auxiliary",
  "question": "Context = expressing a hypothetical situation at work: Which auxiliary verb is best? Could, might: If we had more resources, we [BLANK] expand our operations.",
  "answer": "could"
}
,
{
  "category": "Verbs: Auxiliary",
  "question": "Context = indicating a necessity for career growth: Which auxiliary verb is best? Need to, have to: To advance in your career, you [BLANK] develop new skills.",
  "answer": "need to"
}
,
{
  "category": "Verbs: Auxiliary",
  "question": "Context = expressing an ongoing project at work: Which auxiliary verb is best? Am, is, are: The company [BLANK] investing in renewable energy solutions.",
  "answer": "is"
},






{
  "category": "Verbs: Auxiliary",
  "question": "Context = advice: Which auxiliary verb is best? Should, will, ought to: You [BLANK] see the doctor if you feel worse.",
  "answer": "should"
}
,
{
  "category": "Verbs: Auxiliary",
  "question": "Context = present continuous: Which auxiliary verb is best? Am, was, is, are: He [BLANK] working on the project right now.",
  "answer": "is"
}
,
{
  "category": "Verbs: Auxiliary",
  "question": "Context = past continuous: Which auxiliary verb is best? Was, had, were: They [BLANK] watching a movie when the power went out.",
  "answer": "were"
}
,
{
  "category": "Verbs: Auxiliary",
  "question": "Context = present perfect: Which auxiliary verb is best? Have, has: I [BLANK] never seen such a beautiful sunset.",
  "answer": "have"
},


{
  "category": "Verbs: Auxiliary",
  "question": "Context = present : Which Auxiliary verb is best? Be: am, is, are, was, were, been, being Example: She [BLANK] studying for her exam.",  "answer": "is."
},

{
  "category": "Verbs: Auxiliary",
  "question": "Context =past : Which auxiliary verb is best? Have: have, has, had Example: They [BLANK] finished their homework.",
  "answer": "had"
},


{
  "category": "Verbs: Auxiliary",
  "question": "Context =future : Which auxiliary verb is best? could, will, has, had Example: They [BLANK] finish their homework before dinner time.",
  "answer": "will"
},


{
  "category": "Verbs: Auxiliary",
  "question": "Context = present : Which auxiliary verb is best? Be: am, is, are, was, were, been, being Example: She [BLANK] studying for her exam.",
  "answer": "is"
},
{
  "category": "Verbs: Auxiliary",
  "question": "Context = past : Which auxiliary verb is best?  have, has, had: They [BLANK] finished their homework.",
  "answer": "had"
},
{
  "category": "Verbs: Auxiliary",
  "question": "Context = future : Which auxiliary verb is best? could, will, has, had : They [BLANK] finish their homework before dinner time.",
  "answer": "will"
},

{
  "category": "Verbs: Auxiliary",
  "question": "Context = habitual action : Which auxiliary verb is best? Do: do, will, does, did Example: He [BLANK] his chores every day.",
  "answer": "does"
},
{
  "category": "Verbs: Auxiliary",
  "question": "Context = future intention : Which auxiliary verb is best? must, will,might, can, should, shall: I [BLANK] call you later.",
  "answer": "will"
},
{
  "category": "Verbs: Auxiliary",
  "question": "Context = suggestion : Which auxiliary verb is best? must, might, can, shall: [BLANK] we go to the park?",
  "answer": "Shall"
},
{
  "category": "Verbs: Auxiliary",
  "question": "Context = ability : Which auxiliary verb is best? must, might, can, should: She [BLANK] swim very well.",
  "answer": "can"
},
{
  "category": "Verbs: Auxiliary",
  "question": "Context = possibility : Which auxiliary verb is best? must, might, can: It [BLANK] rain later.",
  "answer": "might"
},
{
  "category": "Verbs: Auxiliary",
  "question": "Context = obligation : Which auxiliary verb is best? must, might, can: You [BLANK] complete the assignment.",
  "answer": "must"
},
{
  "category": "Verbs: Auxiliary",
  "question": "Context = advice : Which auxiliary verb is best? must, might, can, should, shall: They [BLANK] arrive soon.",
  "answer": "should"
},


//
{
  "category": "Expressing opinions",
  "question": "context: Agreeing With Someone's Opinion: Yes, definitely!",
  "answer": "Yes, definitely! We should do it!"
},
{
  "category": "Expressing opinions",
  "question": "context: Agreeing With Someone's Opinion: I feel the same way.",
  "answer": "I feel the same way. Your idea is great!"
},
{
  "category": "Expressing opinions",
  "question": "context: Agreeing With Someone's Opinion: I agree with you.",
  "answer": "I agree with you. That's exactly what I was thinking."
},
{
  "category": "Expressing opinions",
  "question": "context: Agreeing With Someone's Opinion: That's a very valid point.",
  "answer": "That's a very valid point. I hadn't considered that aspect."
},
{
  "category": "Expressing opinions",
  "question": "context: Agreeing With Someone's Opinion: I think what you said is true.",
  "answer": "I think what you said is true. It aligns with the facts."
},
{
  "category": "Expressing opinions",
  "question": "context: Agreeing With Someone's Opinion: You're right!",
  "answer": "You're right! This is the best approach."
},

  {
      "category": "Expressing opinions",
      "question": "context: Disagreeing With Someone's Opinion: I understand.",
      "answer": "I understand where you're coming from, but I have a different perspective."
  },
  {
      "category": "Expressing opinions",
      "question": "context: Disagreeing With Someone's Opinion: I see your point.",
      "answer": "I see your point, however, I think there's another side to consider."
  },
  {
      "category": "Expressing opinions",
      "question": "context: Disagreeing With Someone's Opinion: That makes sense.",
      "answer": "That makes sense, but I'd like to add some thoughts of my own."
  },
  {
      "category": "Expressing opinions",
      "question": "context: Disagreeing With Someone's Opinion: I couldn't agree more.",
      "answer": "I couldn't agree more with certain aspects, but here's another viewpoint."
  },
  {
      "category": "Expressing opinions",
      "question": "context: Disagreeing With Someone's Opinion: You've got a good point there.",
      "answer": "You've got a good point there, but let me share a different idea."
  },
  {
      "category": "Expressing opinions",
      "question": "context: Disagreeing With Someone's Opinion: I'm on the same page as you.",
      "answer": "I'm on the same page as you to an extent, but here's what I think."
  },
  {
      "category": "Expressing opinions",
      "question": "context: Disagreeing With Someone's Opinion: Let's agree to disagree, shall we?",
      "answer": "Let's agree to disagree on this topic and consider other perspectives."
  },



{
  "category": "Expressing opinions",
  "question": "context: Disagreeing With Someone's Opinion: I'm not so sure about that.",
  "answer": "I'm not so sure about that. We might need to consider other factors."
},
{
  "category": "Expressing opinions",
  "question": "context: Expressing Doubt: That doesn't sound right to me.",
  "answer": "That doesn't sound right to me. Can we verify that information?"
},
{
  "category": "Expressing opinions",
  "question": "context: Suggesting a Different Perspective: Have you considered...?",
  "answer": "Have you considered a different approach? It might work better."
},
{
  "category": "Expressing opinions",
  "question": "context: Offering a Compromise: Perhaps we could... instead.",
  "answer": "Perhaps we could try a different method instead. What do you think?"
},
{
  "category": "Expressing opinions",
  "question": "context: Asking for More Information: Can you explain that further?",
  "answer": "Can you explain that further? I'd like to understand your point better."
},

{
  "category": "Expressing opinions",
  "question": "context: Concluding Your Opinion: In conclusion...",
  "answer": "In conclusion, I believe my points clearly support my argument."
},
{
  "category": "Expressing opinions",
  "question": "context: Concluding Your Opinion: From this, we can conclude...",
  "answer": "From this, we can conclude that there are several valid perspectives on this issue."
},
{
  "category": "Expressing opinions",
  "question": "context: Concluding Your Opinion: To sum up...",
  "answer": "To sum up, both sides have their merits, but I lean towards one."
},
{
  "category": "Expressing opinions",
  "question": "context: Concluding Your Opinion: This proves that...",
  "answer": "This proves that the approach I support is the most feasible."
},
{
  "category": "Expressing opinions",
  "question": "context: Concluding Your Opinion: What do you think?",
  "answer": "I've shared my views, but what do you think about this topic?"
},
{
  "category": "Expressing opinions",
  "question": "context: Concluding Your Opinion: That is why...",
  "answer": "That is why I firmly stand by my opinion on this matter."
},
{
  "category": "Expressing opinions",
  "question": "context: Concluding Your Opinion: Can you suggest an alternative?",
  "answer": "I've stated my case, but can you suggest an alternative viewpoint?"
},

{
  "category": "Expressing opinions",
  "question": "context: Expressing a strong belief: I firmly believe that...",
  "answer": "I firmly believe that education is key to success."
},
{
  "category": "Expressing opinions",
  "question": "context: Suggesting a possibility: It's possible that...",
  "answer": "It's possible that we can find a solution if we work together."
},
{
  "category": "Expressing opinions",
  "question": "context: Indicating uncertainty: I'm not certain, but...",
  "answer": "I'm not certain, but I think we might be overlooking an important detail."
},
{
  "category": "Expressing opinions",
  "question": "context: Proposing an idea: What if we try...",
  "answer": "What if we try a new approach to solve this problem?"
},
{
  "category": "Expressing opinions",
  "question": "context: Expressing a preference: I prefer...",
  "answer": "I prefer working in a team rather than alone."
},
{
  "category": "Expressing opinions",
  "question": "context: Acknowledging a different perspective: I understand your point, however...",
  "answer": "I understand your point, however, I have a different view on this matter."
},

{
  "category": "Expressing opinions",
  "question": "context: Sharing a New Idea: I've been thinking...",
  "answer": "I've been thinking, perhaps we could streamline our process by adopting new software."
},
{
  "category": "Expressing opinions",
  "question": "context: Responding to a Proposal: That's an interesting proposal...",
  "answer": "That's an interesting proposal, but have we considered the budget constraints?"
},
{
  "category": "Expressing opinions",
  "question": "context: Giving Constructive Feedback: I see what you're aiming for...",
  "answer": "I see what you're aiming for, but maybe we can enhance it by adding more user-friendly features."
},
{
  "category": "Expressing opinions",
  "question": "context: Suggesting an Improvement: What if we tried...",
  "answer": "What if we tried a different approach to increase our team's efficiency?"
},
{
  "category": "Expressing opinions",
  "question": "context: Addressing a Challenge: The challenge here is...",
  "answer": "The challenge here is balancing quality with speed, but I think we can manage it with proper planning."
},
{
  "category": "Expressing opinions",
  "question": "context: Offering a Different Perspective: Have you considered...?",
  "answer": "Have you considered the potential impact this decision will have on our long-term goals?"
},
{
  "category": "Expressing opinions",
  "question": "context: Expressing Agreement with Reservations: I agree, however...",
  "answer": "I agree with the general direction; however, I think we need more data before proceeding."
},
{
  "category": "Expressing opinions",
  "question": "context: Expressing a Strong Opinion: I strongly believe...",
  "answer": "I strongly believe that shifting our focus to customer satisfaction will drive better results."
},
{
  "category": "Expressing opinions",
  "question": "context: Questioning a Decision: Are we sure that...",
  "answer": "Are we sure that this is the best approach given our current market position?"
},
{
  "category": "Expressing opinions",
  "question": "context: Suggesting Caution: We should consider...",
  "answer": "We should consider potential risks before implementing this strategy."
},

  //

  {
    "category": "Errors",
    "question": "I couldn't found it at the store.",
    "answer": "I couldn't find it at the store."
  },

  {
    "category": "Errors",
    "question": "I go to store.",
    "answer": "I go to the store."
  },
  
  {
    "category": "Errors",
    "question": "It helps for us a lot.",
    "answer": "It help us a lot. _or_ It will help us a lot."
  },


  {
    "category": "Errors",
    "question": "I used to work five days week.",
    "answer": "I used to work five days a week. _or_  I used to work five days per week."
  },

  {
    "category": "Errors",
    "question": "He came in Saturday.",
    "answer": "He [arrived|came in|got in] on Saturday."
  },


  {
    "category": "Errors",
    "question": "I am good person.",
    "answer": "I am a good person."
  },

  {
    "category": "Errors",
    "question": "I feel myself hungry.",
    "answer": "I feel hungry."
  },


  {
    "category": "Errors",
    "question": "They want their presentation do before new year.",
    "answer": "They want their presentation done before new year."
  },


{
    "category": "Errors",
    "question": "I will planning on taking a course.",
    "answer": "I am planning on taking a course."
  },

  



  {
    "category": "Errors",
    "question": "She has two years old.",
    "answer": "She is two years old."
  },


  {
    "category": "Errors",
    "question": "He was trying to say me something.",
    "answer": "He was trying to tell me something."
  },


  {
    "category": "Errors",
    "question": "My wife home all the time.",
    "answer": "My wife is home all the time."
  },




  {
    "category": "Errors",
    "question": "I don't understand what she is talking.",
    "answer": "I don't understand what she is saying."
  },


  {
    "category": "Errors",
    "question": "He gave me feedbacks.",
    "answer": "He gave me feedback."
  },
  

  {
    "category": "Errors",
    "question": "I feel myself not confident.",
    "answer": "I don't feel confident."
  },
  {
    "category": "Errors",
    "question": "I was waiting my friend on the library.",
    "answer": "I was waiting for my friend at the library."
  },
  {
    "category": "Errors",
    "question": "I been to Russia.",
    "answer": "I have been to Russia."
  },
 
  {
    "category": "Errors",
    "question": "I go to store.",
    "answer": "I go to the store."
  },
  
  {
    "category": "Errors",
    "question": "I saw a lot of dog.",
    "answer": "I saw a lot of dogs."
  },
  {
    "category": "Errors",
    "question": "One of the problem I have is X.",
    "answer": "One of the problems I have is X."
  },
  {
    "category": "Errors",
    "question": "One of the thing I like is that it work.",
    "answer": "One of the things I like is that it works."
  },
  {
    "category": "Errors",
    "question": "There are many different way.",
    "answer": "There are many different ways."
  },
  {
    "category": "Errors",
    "question": "What are my strength.",
    "answer": "What are my strengths? _or_ What is my strength?"
  },
  
  {
    "category": "Errors",
    "question": "Advices.",
    "answer": "Advice."
  },
  {
    "category": "Errors",
    "question": "I got some good feedbacks.",
    "answer": "I got some good feedback."
  },
  
  {
    "category": "Errors",
    "question": "One time a week.",
    "answer": "Once a week."
  },
  
  {
    "category": "Errors",
    "question": "He has much work.",
    "answer": "He has a lot of work."
  },
  {
    "category": "Errors",
    "question": "I like apples very many.",
    "answer": "I like apples very much."
  },
  {
    "category": "Errors",
    "question": "I live in the Kyiv.",
    "answer": "I live in Kyiv."
  },
  {
    "category": "Errors",
    "question": "This is more better!",
    "answer": "This is the best! or This is better!"
  }
  ,
  {
    "category": "Errors",
    "question": "She told that X is easy.",
    "answer": "She told me that X is easy."
  },
  {
    "category": "Errors",
    "question": "In the nearest past.",
    "answer": "Recently."
  },
  {
    "category": "Errors",
    "question": "In the nearest past.",
    "answer": "Soon."
  },
  {
    "category": "Errors",
    "question": "One time a week.",
    "answer": "Once a week _or_ Once per week."
  },
  {
    "category": "Errors",
    "question": "I answered to all of my emails.",
    "answer": "I answered all of my emails."
  },
  {
    "category": "Errors",
    "question": "I live on Kyiv.",
    "answer": "I live in Kyiv."
  },
  {
    "category": "Errors",
    "question": "I want to explain you something.",
    "answer": "I want to explain something to you."
  },
  {
    "category": "Errors",
    "question": "We are going in car.",
    "answer": "We are going by car."
  },
  {
    "category": "Errors",
    "question": "Your friend was waiting you.",
    "answer": "Your friend was waiting for you."
  },
  {
    "category": "Errors",
    "question": "Everyone have problems.",
    "answer": "Everyone has problems."
  },
  {
    "category": "Errors",
    "question": "I don't understand why she were living with him.",
    "answer": "I don't understand why she was living with him."
  },
  {
    "category": "Errors",
    "question": "She were working with X.",
    "answer": "She was working with X."
  },
  {
    "category": "Errors",
    "question": "Many things was changed.",
    "answer": "Many things were changed."
  },
  {
    "category": "Errors",
    "question": "I was yesterday in the park.",
    "answer": "I was in the park yesterday."
  },
  {
    "category": "Errors",
    "question": "She said me.",
    "answer": "She told me."
  },
  {
    "category": "Errors",
    "question": "His books is very famous.",
    "answer": "His books are very famous."
  },
  {
    "category": "Errors",
    "question": "I'm going to found.",
    "answer": "I'm going to find."
  },
  {
    "category": "Errors",
    "question": "I haven't think about that.",
    "answer": "I haven't thought about that."
  },
  {
    "category": "Errors",
    "question": "It's easy to do a mistake.",
    "answer": "It's easy to make a mistake."
  },
  {
    "category": "Errors",
    "question": "He's doing a lot of mistakes.",
    "answer": "He's making a lot of mistakes."
  },
  
  
  {
    "category": "Errors",
    "question": "Nice to meet you (on seeing someone the second time).",
    "answer": "Nice to see you again!"
  },
  {
    "category": "Errors",
    "question": "It's more safety.",
    "answer": "It's safer."
  },

  {
    "category": "Errors",
    "question": "It's not safety!",
    "answer": "It's not safe!"
  },




  {
    "category": "Errors",
    "question": "On the last week we started.",
    "answer": "Last week, we started."
  },
  {
    "category": "Errors",
    "question": "There are a lot of different type.",
    "answer": "There are a lot of different types."
  },
  {
    "category": "Errors",
    "question": "It takes many time.",
    "answer": "It takes a lot of time."
  },
  {
    "category": "Errors",
    "question": "She wants to study kids to paint.",
    "answer": "She wants to teach kids how to paint."
  },
  {
    "category": "Errors",
    "question": "It consist of.",
    "answer": "It consists of."
  },
  {
    "category": "Errors",
    "question": "I think about.",
    "answer": "I have to think about."
  },
  {
    "category": "Errors",
    "question": "I susceptible to motion to sickness.",
    "answer": "I'm susceptible to motion sickness."
  },
  {
    "category": "Errors",
    "question": "I took participation in a organization.",
    "answer": "I took part in an organization."
  },
  {
    "category": "Errors",
    "question": "I forgot what it is named.",
    "answer": "I forgot what it's called."
  },
  {
    "category": "Errors",
    "question": "I don't know which style I should do.",
    "answer": "I don't know which style I should use."
  },
  {
    "category": "Errors",
    "question": "It's not easy for every people.",
    "answer": "It's not easy for everyone."
  },
  {
    "category": "Errors",
    "question": "I didn't see so many people as I hoped.",
    "answer": "I didn't see as many people as I hoped."
  },
  {
    "category": "Errors",
    "question": "Take a health check.",
    "answer": "Get a health check. _or_ Get a checkup."
  },
  {
    "category": "Errors",
    "question": "I pay a lot of attention for X.",
    "answer": "I pay a lot of attention to X."
  },
  {
    "category": "Errors",
    "question": "I am is interested in X.",
    "answer": "I'm interested in X."
  },
  {
    "category": "Errors",
    "question": "To say at least.",
    "answer": "To say the least."
  },
  {
    "category": "Errors",
    "question": "I have my lovely stores.",
    "answer": "I have my preferred stores."
  },
  {
    "category": "Errors",
    "question": "It's commonly for them to do this.",
    "answer": "It's common for them to do this."
  },
  {
    "category": "Errors",
    "question": "I was study for my bachelor degree.",
    "answer": "I was studying for my bachelor's degree."
  },
  {
    "category": "Errors",
    "question": "For my opinion.",
    "answer": "In my opinion."
  },

  {
    "category": "Errors",
    "question": "There's no much value in this process.",
    "answer": "There's not much value in this process."
  },





  {
    "category": "Errors",
    "question": "I am totally agree.",
    "answer": "I totally agree."
  },
  // past simple

 { 
    category: 'Past Simple Tense', 
    question: "Change to past simple tense: She writes a letter.", 
    answer: "She wrote a letter." 
  },
  { 
    category: 'Past Simple Tense', 
    question: "What is the past simple tense of 'run'?", 
    answer: "ran" 
  },
  { 
    category: 'Past Simple Tense', 
    question: "Form a sentence in past simple tense: They (not / understand) the instructions.", 
    answer: "They didn't understand the instructions." 
  },
  { 
    category: 'Past Simple Tense', 
    question: "Change to past simple tense: He is playing football.", 
    answer: "He played football." 
  },
  { 
    category: 'Past Simple Tense', 
    question: "Complete the sentence in past simple tense: We (visit) the museum last weekend.", 
    answer: "We visited the museum last weekend." 
  }  ,

{ 
    category: 'Past Simple Tense', 
    question: "What is the past simple tense of 'bring'?", 
    answer: "brought" 
  },
  { 
    category: 'Past Simple Tense', 
    question: "Form a sentence in past simple tense with an irregular verb: She (fly) to New York last month.", 
    answer: "She flew to New York last month." 
  },
  { 
    category: 'Past Simple Tense', 
    question: "Complete the sentence with an irregular past simple tense: They (drink) coffee at the café yesterday.", 
    answer: "They drank coffee at the café yesterday." 
  },
  { 
    category: 'Past Simple Tense', 
    question: "Change to past simple tense using an irregular verb: He forgets the answer.", 
    answer: "He forgot the answer." 
  },
  { 
    category: 'Past Simple Tense', 
    question: "Use an irregular verb in past simple tense: I (see) a movie last night.", 
    answer: "I saw a movie last night." 
  },


  { 
    category: 'Past Simple Tense', 
    question: "What is the past simple tense of 'choose'?", 
    answer: "chose" 
  },
  { 
    category: 'Past Simple Tense', 
    question: "Form a sentence in past simple tense with an irregular verb: They (build) a new house last year.", 
    answer: "They built a new house last year." 
  },
  { 
    category: 'Past Simple Tense', 
    question: "Complete the sentence with an irregular past simple tense: He (steal) the cookies from the jar.", 
    answer: "He stole the cookies from the jar." 
  },
  { 
    category: 'Past Simple Tense', 
    question: "Change to past simple tense using an irregular verb: She understands the problem.", 
    answer: "She understood the problem." 
  },
  { 
    category: 'Past Simple Tense', 
    question: "Use an irregular verb in past simple tense: I (speak) to them about the project yesterday.", 
    answer: "I spoke to them about the project yesterday." 
  },

  { 
    category: 'Past Simple Tense', 
    question: "What is the past simple tense of 'swim'?", 
    answer: "swam" 
  },
  { 
    category: 'Past Simple Tense', 
    question: "Form a sentence in past simple tense with an irregular verb: He (drive) to the coast last weekend.", 
    answer: "He drove to the coast last weekend." 
  },
  { 
    category: 'Past Simple Tense', 
    question: "Complete the sentence with an irregular past simple tense: She (throw) the ball to the dog.", 
    answer: "She threw the ball to the dog." 
  },
  { 
    category: 'Past Simple Tense', 
    question: "Change to past simple tense using an irregular verb: I forget his name.", 
    answer: "I forgot his name." 
  },
  { 
    category: 'Past Simple Tense', 
    question: "Use an irregular verb in past simple tense: They (teach) English in that school for years.", 
    answer: "They taught English in that school for years." 
  },




  { 
    category: 'Past Simple Tense', 
    question: "Complete the sentence in past simple tense: I (go) to the store yesterday.", 
    answer: "went" 
  },
  { 
    category: 'Past Simple Tense', 
    question: "Change to past simple tense: She writes a letter.", 
    answer: "She wrote a letter." 
  },
  { 
    category: 'Past Simple Tense', 
    question: "What is the past simple tense of 'run'?", 
    answer: "ran" 
  },
  { 
    category: 'Past Simple Tense', 
    question: "Form a sentence in past simple tense: They (not / understand) the instructions.", 
    answer: "They didn't understand the instructions." 
  },
  { 
    category: 'Past Simple Tense', 
    question: "Change to past simple tense: He is playing football.", 
    answer: "He played football." 
  },

  //past coninuous
  { 
    category: 'Past Continuous Tense', 
    question: "Form a sentence in past continuous tense: I (read) a book when he called.", 
    answer: "I was reading a book when he called." 
  },
  { 
    category: 'Past Continuous Tense', 
    question: "Change to past continuous tense: She sings a song.", 
    answer: "She was singing a song." 
  },
  { 
    category: 'Past Continuous Tense', 
    question: "What is the past continuous form of 'stand'?", 
    answer: "was standing / were standing" 
  },
  { 
    category: 'Past Continuous Tense', 
    question: "Complete the sentence in past continuous tense: They (watch) TV when it started to rain.", 
    answer: "They were watching TV when it started to rain." 
  },
  { 
    category: 'Past Continuous Tense', 
    question: "Change to past continuous tense: He finds a parking place.", 
    answer: "He was finding a parking place." 
  },
  { 
    category: 'Past Continuous Tense', 
    question: "Form a sentence in past continuous tense using an irregular verb: He (swim) in the pool when it started raining.", 
    answer: "He was swimming in the pool when it started raining." 
  },
  { 
    category: 'Past Continuous Tense', 
    question: "Complete the sentence in past continuous tense with an irregular verb: She (drink) coffee at the café when she saw her friend.", 
    answer: "She was drinking coffee at the café when she saw her friend." 
  },
  { 
    category: 'Past Continuous Tense', 
    question: "Change to past continuous tense using an irregular verb: They build a house.", 
    answer: "They were building a house." 
  },
  { 
    category: 'Past Continuous Tense', 
    question: "Use an irregular verb in past continuous tense: We (fly) to Paris during the storm.", 
    answer: "We were flying to Paris during the storm." 
  },
  { 
    category: 'Past Continuous Tense', 
    question: "Form a sentence in past continuous tense with an irregular verb: I (think) about the problem all evening.", 
    answer: "I was thinking about the problem all evening." 
  },
  { 
    category: 'Past Continuous Tense', 
    question: "Complete the sentence in past continuous tense using an irregular verb: They (run) around the park when it began to rain.", 
    answer: "They were running around the park when it began to rain." 
  },
  { 
    category: 'Past Continuous Tense', 
    question: "Form a sentence in past continuous tense with an irregular verb: She (sing) in the choir during the festival.", 
    answer: "She was singing in the choir during the festival." 
  },
  { 
    category: 'Past Continuous Tense', 
    question: "Change to past continuous tense using an irregular verb: He finds a key.", 
    answer: "He was finding a key." 
  },
  { 
    category: 'Past Continuous Tense', 
    question: "Use an irregular verb in past continuous tense: We (speak) about the project when she called.", 
    answer: "We were speaking about the project when she called." 
  },
  { 
    category: 'Past Continuous Tense', 
    question: "Form a sentence in past continuous tense with an irregular verb: They (drive) through the city when the parade started.", 
    answer: "They were driving through the city when the parade started." 
  }
  ,

  //
  { 
    category: 'Past Perfect Tense', 
    question: "Form a sentence in past perfect tense: After they (eat) dinner, they went for a walk.", 
    answer: "After they had eaten dinner, they went for a walk." 
  },
  { 
    category: 'Past Perfect Tense', 
    question: "Change to past perfect tense: She writes a book.", 
    answer: "She had written a book." 
  },
  { 
    category: 'Past Perfect Tense', 
    question: "What is the past perfect form of 'see'?", 
    answer: "had seen" 
  },
  { 
    category: 'Past Perfect Tense', 
    question: "Complete the sentence in past perfect tense: I (not / finish) my homework when my friend called.", 
    answer: "I hadn't finished my homework when my friend called." 
  },
  { 
    category: 'Past Perfect Tense', 
    question: "Change to past perfect tense: He finds the solution.", 
    answer: "He had found the solution." 
  },
  ///
  { 
    category: 'Past Perfect Continuous Tense', 
    question: "Form a sentence in past perfect continuous tense: They (wait) for the bus for 30 minutes before it arrived.", 
    answer: "They had been waiting for the bus for 30 minutes before it arrived." 
  },
  { 
    category: 'Past Perfect Continuous Tense', 
    question: "Change to past perfect continuous tense: She is reading a book.", 
    answer: "She had been reading a book." 
  },
  { 
    category: 'Past Perfect Continuous Tense', 
    question: "What is the past perfect continuous form of 'work'?", 
    answer: "had been working" 
  },
  { 
    category: 'Past Perfect Continuous Tense', 
    question: "Complete the sentence in past perfect continuous tense: I (write) an essay for two hours when she called.", 
    answer: "I had been writing an essay for two hours when she called." 
  },
  { 
    category: 'Past Perfect Continuous Tense', 
    question: "Change to past perfect continuous tense: They are playing football.", 
    answer: "They had been playing football." 
  },
  //
  { 
    category: 'Present Simple Tense', 
    question: "Form a sentence in present simple tense: She (go) to school every day.", 
    answer: "She goes to school every day." 
  },
  { 
    category: 'Present Simple Tense', 
    question: "Change to present simple tense: They are eating lunch.", 
    answer: "They eat lunch." 
  },
  { 
    category: 'Present Simple Tense', 
    question: "What is the present simple form of 'write'?", 
    answer: "writes" 
  },
  { 
    category: 'Present Simple Tense', 
    question: "Complete the sentence in present simple tense: He (not / like) apples.", 
    answer: "He doesn't like apples." 
  },
  { 
    category: 'Present Simple Tense', 
    question: "Change to present simple tense: I am reading a book.", 
    answer: "I read a book." 
  },
  //
  { 
    category: 'Present Continuous Tense', 
    question: "Form a sentence in present continuous tense: She (write) an email now.", 
    answer: "She is writing an email now." 
  },
  { 
    category: 'Present Continuous Tense', 
    question: "Change to present continuous tense: They play football.", 
    answer: "They are playing football." 
  },
  { 
    category: 'Present Continuous Tense', 
    question: "What is the present continuous form of 'sit'?", 
    answer: "is sitting / are sitting" 
  },
  { 
    category: 'Present Continuous Tense', 
    question: "Complete the sentence in present continuous tense: We (not / watch) TV right now.", 
    answer: "We are not watching TV right now. or We aren't watching TV right now." 
  },
  { 
    category: 'Present Continuous Tense', 
    question: "Change to present continuous tense: He reads a book.", 
    answer: "He is reading a book. or He's reading a book.", 
  },
  //
  { 
    category: 'Present Perfect Tense', 
    question: "Form a sentence in present perfect tense: They (finish) their homework.", 
    answer: "They have finished their homework." 
  },
  { 
    category: 'Present Perfect Tense', 
    question: "Change to present perfect tense: She writes a letter.", 
    answer: "She has written a letter." 
  },
  { 
    category: 'Present Perfect Tense', 
    question: "What is the present perfect form of 'go'?", 
    answer: "has gone / have gone" 
  },
  { 
    category: 'Present Perfect Tense', 
    question: "Complete the sentence in present perfect tense: I (never / see) that movie.", 
    answer: "I have never seen that movie." 
  },
  { 
    category: 'Present Perfect Tense', 
    question: "Change to present perfect tense: He finds time to meet with his team.", 
    answer: "He has found time to meet with his team." 
  },

//
{ 
  category: 'Present Perfect Continuous Tense', 
  question: "Form a sentence in present perfect continuous tense: She (study) English since January.", 
  answer: "She has been studying English since January." 
},
{ 
  category: 'Present Perfect Continuous Tense', 
  question: "Change to present perfect continuous tense: They are eating lunch.", 
  answer: "They have been eating lunch." 
},
{ 
  category: 'Present Perfect Continuous Tense', 
  question: "What is the present perfect continuous form of 'work'?", 
  answer: "has been working / have been working" 
},
{ 
  category: 'Present Perfect Continuous Tense', 
  question: "Complete the sentence in present perfect continuous tense: I (write) this essay for two hours.", 
  answer: "I have been writing this essay for two hours." 
},
{ 
  category: 'Present Perfect Continuous Tense', 
  question: "Change to present perfect continuous tense: He reads a book.", 
  answer: "He has been reading a book." 
},

//
{ 
  category: 'Future Simple Tense', 
  question: "Form a sentence in future simple tense: She (go) to Paris next week.", 
  answer: "She will go to Paris next week. or She is going to Paris next week." 
},
{ 
  category: 'Future Simple Tense', 
  question: "Change to future simple tense: They eat lunch.", 
  answer: "They will eat lunch. or They are going to eat lunch." 
},
{ 
  category: 'Future Simple Tense', 
  question: "What is the future simple form of 'write'?", 
  answer: "will write" 
},
{ 
  category: 'Future Simple Tense', 
  question: "Complete the sentence in future simple tense: He (not / play) football tomorrow.", 
  answer: "He will not play football tomorrow. or He won't play football tomorrow." 
},
{ 
  category: 'Future Simple Tense', 
  question: "Change to future simple tense: I am reading a book.", 
  answer: "I will read a book. or I'm going to read a bookd." 
},

//

{ 
  category: 'Future Continuous Tense', 
  question: "Form a sentence in future continuous tense: He (drive) to work at 8 AM tomorrow.", 
  answer: "He will be driving to work at 8 AM tomorrow." 
},
{ 
  category: 'Future Continuous Tense', 
  question: "Change to future continuous tense: She writes a letter.", 
  answer: "She will be writing a letter." 
},
{ 
  category: 'Future Continuous Tense', 
  question: "What is the future continuous form of 'sit'?", 
  answer: "will be sitting" 
},
{ 
  category: 'Future Continuous Tense', 
  question: "Complete the sentence in future continuous tense: They (not / sleep) at this time tomorrow.", 
  answer: "They will not be sleeping at this time tomorrow." 
},
{ 
  category: 'Future Continuous Tense', 
  question: "Change to future continuous tense: We play football.", 
  answer: "We will be playing football." 
},

//
{ 
  category: 'Future Perfect Tense', 
  question: "Form a sentence in future perfect tense: By next year, they (complete) their studies.", 
  answer: "By next year, they will have completed their studies." 
},
{ 
  category: 'Future Perfect Tense', 
  question: "Change to future perfect tense: She writes a book.", 
  answer: "She will have written a book." 
},
{ 
  category: 'Future Perfect Tense', 
  question: "What is the future perfect form of 'go'?", 
  answer: "will have gone" 
},
{ 
  category: 'Future Perfect Tense', 
  question: "Complete the sentence in future perfect tense: By the time you arrive, I (finish) the project.", 
  answer: "By the time you arrive, I will have finished the project." 
},
{ 
  category: 'Future Perfect Tense', 
  question: "Change to future perfect tense: He finds a solution.", 
  answer: "He will have found a solution." 
},

//
{ 
  category: 'Future Perfect Continuous Tense', 
  question: "Form a sentence in future perfect continuous tense: By 3 PM, I (work) on this project for five hours.", 
  answer: "By 3 PM, I will have been working on this project for five hours." 
},
{ 
  category: 'Future Perfect Continuous Tense', 
  question: "Change to future perfect continuous tense: They are eating lunch.", 
  answer: "They will have been eating lunch." 
},
{ 
  category: 'Future Perfect Continuous Tense', 
  question: "What is the future perfect continuous form of 'sit'?", 
  answer: "will have been sitting" 
},
{ 
  category: 'Future Perfect Continuous Tense', 
  question: "Complete the sentence in future perfect continuous tense: She (teach) at that school for ten years by next June.", 
  answer: "She will have been teaching at that school for ten years by next June." 
},
{ 
  category: 'Future Perfect Continuous Tense', 
  question: "Change to future perfect continuous tense: He reads a book.", 
  answer: "He will have been reading a book." 
},


  //
{ category: 'Interjections', question: "Oh no! I [BLANK] my keys!", answer: "\"lost\"" },
{ category: 'Interjections', question: "Ouch! That [BLANK]!", answer: "\"hurt\"" },
{ category: 'Interjections', question: "Wow! That was an [BLANK] game!", answer: "\"amazing | awesome| great\"" },
{ category: 'Interjections', question: "Hey! Can you [BLANK] me a hand over here!", answer: "\"give\"" },
{ category: 'Interjections', question: "Ugh! I feel [BLANK] today.", answer: "\"awful|crushed|bad|sick|terrible\"" },
{ category: 'Interjections', question: "Alas! My [BLANK] plan has failed!", answer: "\"current|awesome|perfect|great|dastardly\"" },
{ category: 'Interjections', question: "Bingo! I [BLANK] the lottery!", answer: "\"won\"" },
{ category: 'Interjections', question: "Eww! That food looks [BLANK]!", answer: "\"gross|terrible\"" },
{ category: 'Interjections', question: "Phew! That was a [BLANK] call!", answer: "\"tough|close|strange\"" },
{ category: 'Interjections', question: "Yeehaw! I'm finally [BLANK]!", answer: "\"free|done|finished|rich\"" },
//Common phrases
//that would be pereftc

{ "category": "Common phrases", "question": "It's pretty cheap!", "answer": "Wow! It's pretty cheap!" },
{ "category": "Common phrases", "question": "It's pretty much the same.", "answer": "Most cities are pretty much the same." },


{ "category": "Common phrases", "question": "Be careful.", "answer": "Be careful while driving.| Be careful the soup is hot!" },
  { "category": "Common phrases", "question": "Can you translate this for me?", "answer": "Can you translate this sentence for me?" },
  { "category": "Common phrases", "question": "Chicago is very different from Boston.", "answer": "Indeed, Chicago's culture is very different from Boston's." },
  { "category": "Common phrases", "question": "Don't worry.", "answer": "Don't worry, everything will be fine." },
  { "category": "Common phrases", "question": "Everyone knows it.", "answer": "Everyone knows it's true." },
  { "category": "Common phrases", "question": "Everything is ready.", "answer": "Everything is ready for the party." },
  { "category": "Common phrases", "question": "Excellent!", "answer": "That's an excellent idea." },
  { "category": "Common phrases", "question": "From time to time.", "answer": "I visit that place from time to time." },
  { "category": "Common phrases", "question": "Good idea.", "answer": "That's a good idea for the project." },
  { "category": "Common phrases", "question": "He likes it very much.", "answer": "He likes the gift very much." },
  { "category": "Common phrases", "question": "Help!", "answer": "Help! I need assistance." },
  { "category": "Common phrases", "question": "He's coming soon.", "answer": "He's coming soon, so we should get ready." },
  { "category": "Common phrases", "question": "He's right.", "answer": "He's right about the solution." },
  { "category": "Common phrases", "question": "He's very annoying.", "answer": "He's very annoying when he's loud." },
  { "category": "Common phrases", "question": "He's very famous.", "answer": "He's very famous in the film industry." },
  { "category": "Common phrases", "question": "How are you?", "answer": "How are you feeling today?" },
  { "category": "Common phrases", "question": "How's work going?", "answer": "How's work going this week?" },
  { "category": "Common phrases", "question": "Hurry!", "answer": "Hurry! We're going to be late." },
  { "category": "Common phrases", "question": "I ate already.", "answer": "I ate already, so I'm not hungry." },
  { "category": "Common phrases", "question": "I can't hear you.", "answer": "I can't hear you, can you speak louder?" },
  { "category": "Common phrases", "question": "I'd like to go for a walk.", "answer": "I'd like to go for a walk in the park." },
  { "category": "Common phrases", "question": "I don't know how to use it.", "answer": "I don't know how to use [it| this device]." },
  { "category": "Common phrases", "question": "I don't like him.", "answer": "I don't like him because he's rude." },
  { "category": "Common phrases", "question": "I don't like it.", "answer": "I don't like it when it rains." },
  { "category": "Common phrases", "question": "I don't like it.", "answer": "I don't like it when it rains." },
  { "category": "Common phrases", "question": "Can I have a glass of water?", "answer": "Sure you can! I'll get you a glass of water!" },
  //can I have a glass of water
  { "category": "Common phrases", "question": "Sorry. I don't speak English very well.", "answer": "I don't speak English very well." },
  { "category": "Common phrases", "question": "I don't understand.", "answer": "I don't understand the instructions." },
  { "category": "Common phrases", "question": "I don't want it.", "answer": "I don't want it, you can have it." },
  { "category": "Common phrases", "question": "I don't want that.", "answer": "I don't want that, I prefer something else." },
  { "category": "Common phrases", "question": "I don't want to bother you.", "answer": "I don't want to bother you, but I need help." },
  { "category": "Common phrases", "question": "I feel good.", "answer": "I feel good after the workout." },
  { "category": "Common phrases", "question": "If you need my help, please let me know.", "answer": "If you need my help with the project, please let me know." },
  { "category": "Common phrases", "question": "I get off of work at 6.", "answer": "I get off of work at 6, so I'll call you then." },
  { "category": "Common phrases", "question": "I have a headache.", "answer": "I have a headache, I might take a break." },
  { "category": "Common phrases", "question": "I hope you and your wife have a nice trip.", "answer": "I hope you and your wife have a nice trip to Italy." },
  { "category": "Common phrases", "question": "I know.", "answer": "I know, I've heard about it before." },
  { "category": "Common phrases", "question": "I like her.", "answer": "I like her, she's very kind." },
  { "category": "Common phrases", "question": "I'll call you when I leave.", "answer": "I'll call you when I leave the office." },
  { "category": "Common phrases", "question": "I'll come back later.", "answer": "I'll come back later to pick up the documents." },
  { "category": "Common phrases", "question": "I'll pay.", "answer": "I'll pay for dinner tonight." },
  { "category": "Common phrases", "question": "I'll take it.", "answer": "I'll take it, it seems like a good deal." },
  { "category": "Common phrases", "question": "I'll take you to the bus stop.", "answer": "I'll take you to the bus stop on my way to work." },
  { "category": "Common phrases", "question": "I lost my watch.", "answer": "I lost my watch, have you seen it?" },
  { "category": "Common phrases", "question": "I love you.", "answer": "I love you more than anything." },
  { "category": "Common phrases", "question": "I'm an American.", "answer": "I'm an American, I was born in New York." },

  { "category": "Common phrases", "question": "I'm cleaning my room.", "answer": "I'm cleaning my room before my guests arrive." },
  { "category": "Common phrases", "question": "I'm cold.", "answer": "I'm cold, I need to get a jacket." },
  { "category": "Common phrases", "question": "I'm coming to pick you up.", "answer": "I'm coming to pick you up in ten minutes." },
  { "category": "Common phrases", "question": "I'm going to leave.", "answer": "I'm going to leave the party early." },
  { "category": "Common phrases", "question": "I'm good, and you?", "answer": "I'm good, and you? How's your day going?" },
  { "category": "Common phrases", "question": "I'm happy.", "answer": "I'm happy to hear your good news." },
  { "category": "Common phrases", "question": "I'm hungry.", "answer": "I'm hungry, let's go grab some lunch." },
  { "category": "Common phrases", "question": "I'm married.", "answer": "I'm married, I have two children." },
  { "category": "Common phrases", "question": "I'm not busy.", "answer": "I'm not busy, I can help you now." },
  { "category": "Common phrases", "question": "I'm not married.", "answer": "I'm not married, I'm still single." },
  { "category": "Common phrases", "question": "I'm not ready yet.", "answer": "I'm not ready yet, give me a few more minutes." },
  { "category": "Common phrases", "question": "I'm not sure.", "answer": "I'm not sure, I need to think about it." },
  { "category": "Common phrases", "question": "I'm sorry, we're sold out.", "answer": "I'm sorry, we're sold out of that item." },
  { "category": "Common phrases", "question": "I'm thirsty.", "answer": "I'm thirsty, could I have a glass of water?" },
  { "category": "Common phrases", "question": "I'm very busy. I don't have time now.", "answer": "I'm very busy. I don't have time now, maybe later." },
  { "category": "Common phrases", "question": "I need to change clothes.", "answer": "I need to change clothes before we go out." },
  { "category": "Common phrases", "question": "I need to go home.", "answer": "I need to go home, it's getting late." },
  { "category": "Common phrases", "question": "I only want a snack.", "answer": "I only want a snack, not a full meal." },
  { "category": "Common phrases", "question": "Is Mr. Smith an American?", "answer": "Is Mr. Smith an American? I thought he was British." },
  { "category": "Common phrases", "question": "Is that enough?", "answer": "Is that enough food for everyone?" },
  { "category": "Common phrases", "question": "I think it's very good.", "answer": "I think it's very good, especially the plot." },
  { "category": "Common phrases", "question": "I have never heard of X before!", "answer": "I have never heard about that before!" },
  
  { "category": "Common phrases", "question": "I think it tastes good.", "answer": "I think it tastes good, but it could use more salt." },
  { "category": "Common phrases", "question": "I thought the clothes were cheaper.", "answer": "I thought the clothes were cheaper, but they're quite expensive." },
  { "category": "Common phrases", "question": "It's longer than 2 miles|kilometers.", "answer": "It's longer than 2 miles|kilometers, maybe around 3 miles|kilometers." },
  { "category": "Common phrases", "question": "I've been here for two days.", "answer": "I've been here for two days, exploring the city." },
  { "category": "Common phrases", "question": "I've heard Texas is a beautiful place.", "answer": "I've heard Texas is a beautiful place, especially in spring." },
  { "category": "Common phrases", "question": "I've never seen that before.", "answer": "I've never seen that before, it's quite unique.| I have never seen such bad acting before! | I have never seen that movie before!" },
  { "category": "Common phrases", "question": "I was about to leave the restaurant when my friends arrived.", "answer": "I was about to leave the restaurant when my friends arrived unexpectedly." },
  { "category": "Common phrases", "question": "Just a little.", "answer": "Just a little more effort is needed to complete the task." },
  { "category": "Common phrases", "question": "Just a moment.", "answer": "Just a moment, I'll be right with you." },
  { "category": "Common phrases", "question": "Let me check.", "answer": "Let me check the schedule and get back to you." },
  { "category": "Common phrases", "question": "Let me think about it.", "answer": "Let me think about it, and I'll decide tomorrow.| Let me think about it and I'll get back to you!" },
  { "category": "Common phrases", "question": "Let's go have a look.", "answer": "Let's go have a look at the new store." },
  { "category": "Common phrases", "question": "Let's practice English.", "answer": "Let's practice English for our upcoming test." },
  { "category": "Common phrases", "question": "May I speak to Mrs. Smith please?", "answer": "May I speak to Mrs. Smith please? I have an appointment with her." },
  { "category": "Common phrases", "question": "More than that.", "answer": "It costs more than that, around $50 more." },
  { "category": "Common phrases", "question": "Never mind.", "answer": "Never mind, it's not important." },
  { "category": "Common phrases", "question": "Next time.", "answer": "Next time, let's plan ahead." },
  { "category": "Common phrases", "question": "No.", "answer": "No, I don't think that's a good idea." },
  { "category": "Common phrases", "question": "Nonsense.", "answer": "That's nonsense, it can't be true." },
  { "category": "Common phrases", "question": "No, thank you.", "answer": "No, thank you, I'm full." },
  { "category": "Common phrases", "question": "Nothing else.", "answer": "Nothing else, that's all I need." },
  { "category": "Common phrases", "question": "Not recently.", "answer": "Not recently, I haven't seen him in a while." },
  { "category": "Common phrases", "question": "Not yet.", "answer": "Have you ever prepared Sushi?|Not yet, but I plan to do it soon." },
  { "category": "Common phrases", "question": "Of course.", "answer": "Of course, I'd be happy to help." },
  { "category": "Common phrases", "question": "Okay.", "answer": "Okay, let's do it your way." },
  { "category": "Common phrases", "question": "Please fill out this form.", "answer": "Please fill out this form with your details." },
  { "category": "Common phrases", "question": "Please take me to this address.", "answer": "Please take me to this address, it's where I'm staying." },
  { "category": "Common phrases", "question": "Please write it down.", "answer": "Please write it down so I don't forget." },
  { "category": "Common phrases", "question": "Really?", "answer": "Really? That's surprising news!" },
  { "category": "Common phrases", "question": "Right here.", "answer": "Right here is where we'll meet." },
  { "category": "Common phrases", "question": "Right there.", "answer": "Right there is where I found it." },
  { "category": "Common phrases", "question": "See you later.", "answer": "See you later, I have to go now." },
  { "category": "Common phrases", "question": "See you tomorrow.", "answer": "See you tomorrow at the meeting." },
  { "category": "Common phrases", "question": "See you tonight.", "answer": "See you tonight at the dinner." },
  { "category": "Common phrases", "question": "She's pretty.", "answer": "She's pretty, and she's also very intelligent." },
  { "category": "Common phrases", "question": "Sorry to bother you.", "answer": "Sorry to bother you, but could you help me?" },
  { "category": "Common phrases", "question": "Stop!", "answer": "Stop! You're going the wrong way." },
  { "category": "Common phrases", "question": "Take a chance.", "answer": "Take a chance, it might be a great opportunity." },
  { "category": "Common phrases", "question": "I'm cleaning my room.", "answer": "I'm cleaning my room right now." },
  { "category": "Common phrases", "question": "I'm cold.", "answer": "I'm cold, could you turn up the heat?" },
  { "category": "Common phrases", "question": "I'm coming to pick you up.", "answer": "I'm coming to pick you up in ten minutes." },
  { "category": "Common phrases", "question": "I'm going to leave.", "answer": "I'm going to leave for the airport shortly." },
  { "category": "Common phrases", "question": "I'm good, and you?", "answer": "I'm good, and you? How have you been?" },
  { "category": "Common phrases", "question": "I'm happy.", "answer": "I'm happy about the good news." },
  { "category": "Common phrases", "question": "I'm hungry.", "answer": "I'm hungry, let's have lunch." },
  { "category": "Common phrases", "question": "I'm married.", "answer": "I'm married, my spouse works in healthcare." },
  { "category": "Common phrases", "question": "I'm not busy.", "answer": "I'm not busy, I can help you now." },
  { "category": "Common phrases", "question": "I'm not married.", "answer": "I'm not married, I'm currently single." },
  { "category": "Common phrases", "question": "I'm not ready yet.", "answer": "I'm not ready yet, give me a few more minutes." },
  { "category": "Common phrases", "question": "I'm not sure.", "answer": "I'm not sure, I need to think about it." },
  { "category": "Common phrases", "question": "I'm sorry, we're sold out.", "answer": "I'm sorry, we're sold out of that item." },
  { "category": "Common phrases", "question": "I'm thirsty.", "answer": "I'm thirsty, could I have a glass of water?" },
  { "category": "Common phrases", "question": "I'm very busy. I don't have time now.", "answer": "I'm very busy with the project, I don't have time now." },
  { "category": "Common phrases", "question": "I need to change clothes.", "answer": "I need to change clothes before we go out." },
  { "category": "Common phrases", "question": "I need to go home.", "answer": "I need to go home, it's getting late." },
  { "category": "Common phrases", "question": "I only want a snack.", "answer": "I only want a snack, not a full meal." },
  { "category": "Common phrases", "question": "Is Mr. Smith an American?", "answer": "Is Mr. Smith an American, or is he from somewhere else?" },
  { "category": "Common phrases", "question": "Is that enough?", "answer": "Is that enough food for everyone?" },
  { "category": "Common phrases", "question": "I think it's very good.", "answer": "I think it's very good, especially the flavor." },
  { "category": "Common phrases", "question": "I think it tastes good.", "answer": "I think it tastes good, what do you think?" },
  { "category": "Common phrases", "question": "I thought the clothes were cheaper.", "answer": "I thought the clothes were cheaper, they're quite expensive." },
  { "category": "Common phrases", "question": "It's longer than 2 miles.", "answer": "It's longer than 2 miles, perhaps 3 or 4." },
  { "category": "Common phrases", "question": "I've been here for two days.", "answer": "I've been here for two days, and I love it." },
  { "category": "Common phrases", "question": "I've heard Texas is a beautiful place.", "answer": "I've heard Texas is a beautiful place with great landscapes." },
  { "category": "Common phrases", "question": "I've never seen that before.", "answer": "I've never seen that before, it's fascinating." },

  


//

{
  "category": "Clarifying Phrases",
  "question": "How do I say it correctly in English?",
  "answer": "You can use this phrase when you're not sure how to pronounce a word or phrase in English. It's a polite way to ask for help with pronunciation.",
},

{
  "category": "Clarifying Phrases",
  "question": "I'm not quite following you. Can you elaborate?",
  "answer": "I'm having difficulty grasping the full meaning of your explanation. Could you please provide more details or expand on your points?"
},

{
  "category": "Clarifying Phrases",
  "question": "I'm having a hard time catching everything you're saying. Could you speak a little louder, please?",
  "answer": "The volume of your speech is making it difficult for me to fully comprehend your words. Would you be able to increase the volume slightly to enhance my understanding?"
},
{
  "category": "Clarifying Phrases",
  "question": "I'm not sure I understood that part. Could you please rephrase it using simpler words?",
  "answer": "A particular aspect of your explanation is causing some confusion. Would you be able to rephrase it using more straightforward language that is easier for me to grasp?"
},
{
  "category": "Clarifying Phrases",
  "question": "I'm having trouble keeping up with the conversation. Could you slow down a bit, please?",
  "answer": "The pace of the conversation is making it challenging for me to follow along effectively. Would you be able to slow down your speech to allow me to process the information more comfortably?"
},
{
  "category": "Clarifying Phrases",
  "question": "I'm not familiar with that reference. Could you please explain it further?",
  "answer": "I'm encountering difficulties with understanding the allusion made in that statement. Would you be able to provide more context or explanation to clarify its meaning?"
},
{
  "category": "Clarifying Phrases",
  "question": "I'm still a bit lost. Could you provide an example to illustrate what you mean?",
  "answer": "I'm struggling to visualize the concept you're explaining. Could you offer a real-world example to make it more tangible and easier for me to understand?"
},
{
  "category": "Clarifying Phrases",
  "question": "Excuse me, but I'm still a bit confused. Could you simplify it for me?",
  "answer": "I'm struggling to understand the intricacies of your explanation. Could you please break it down into simpler terms or provide a more straightforward approach?"
},

{
  "category": "Clarifying Phrases",
  "question": "I'm not familiar with that [word|phrase|idiom]. Could you please explain its meaning?",
  "answer": "I'm encountering difficulties with understanding the figurative language used in that expression. Could you kindly elaborate on its intended meaning?"
},
{
  "category": "Clarifying Phrases",
  "question": "Could you please provide a synonym for that word?",
  "answer": "I'm not sure of the exact meaning of that particular word. Could you offer a similar word with a more recognizable definition?"
},
{
  "category": "Clarifying Phrases",
  "question": "Could you please rephrase that using simpler words?",
  "answer": "I'm finding the vocabulary used in that explanation to be a bit advanced. Could you rephrase it using simpler terms that are more familiar to me?"
},
{
  "category": "Clarifying Phrases",
  "question": "I apologize, but I'm still unsure about [specific point]. Could you clarify that for me?",
  "answer": "I have a lingering question regarding [specific point]. Could you please address that directly to ensure I have a clear understanding?"
},
{
  "category": "Clarifying Phrases",
  "question": "To make sure I'm on the same page, let me summarize what I think you said. Is this correct?",
  "answer": "I want to ensure I've accurately grasped your explanation. Please allow me to summarize your points and confirm if I'm understanding correctly."
},
{
  "category": "Clarifying Phrases",
  "question": "I'm still struggling with [specific concept]. Could you provide a real-world example to illustrate it?",
  "answer": "I'm having difficulty applying [specific concept] to practical scenarios. Could you provide an example from everyday life to help me visualize its application?"
},

{
  "category": "Clarifying Phrases",
  "question": "I'm sorry I don't understand. Can you explain it to me?",
  "answer": "I need more information to understand your question. Could you please rephrase it or provide more context?"
},

{
  "category": "Clarifying Phrases",
  "question": "context asking about meaning: What do you mean by that?",
  "answer": "I'm not sure what you mean by 'formal dress code.' Could you show me some examples?"
},
{
  "category": "Clarifying Phrases",
  "question": "context when not understanding a question: Sorry, I don't understand your question.",
  "answer": "Would you mind rephrasing it for me? I'm not sure I understand."
},
{
  "category": "Clarifying Phrases",
  "question": "context when confused about instructions: Sorry, I'm confused.",
  "answer": "Should I take this medicine three times a day or four?"
},
{
  "category": "Clarifying Phrases",
  "question": "context when not following an explanation: Hmm, I don't quite follow you.",
  "answer": "Could you explain that to me again? I'm afraid I'm not following."
},
{
  "category": "Clarifying Phrases",
  "question": "context for confirming understanding: You mean...?",
  "answer": "This phrase is used to confirm what the other person meant."
},
{
  "category": "Clarifying Phrases",
  "question": "context for specifying meaning: As in...?",
  "answer": "This phrase is used to ask for a specific meaning or example."
},
{
  "category": "Clarifying Phrases",
  "question": "context for confirming a statement: So you're saying...?",
  "answer": "This phrase is used to confirm the other person's statement or opinion."
},
{
  "category": "Clarifying Phrases",
  "question": "context asking about meaning at work: What do you mean by that?",
  "answer": "I'm not sure what you mean by 'streamlining the process.' Can you give an example of how we'd implement that in our team?"
},
{
  "category": "Clarifying Phrases",
  "question": "context when not understanding a question at home: Sorry, I don't understand your question.",
  "answer": "Would you mind rephrasing that? I'm not sure what you're asking about the weekend plans."
},
{
  "category": "Clarifying Phrases",
  "question": "context when confused about instructions at work: Sorry, I'm confused.",
  "answer": "Are you saying I should handle the client meeting alone, or will there be a team with me?"
},
{
  "category": "Clarifying Phrases",
  "question": "context when not following an explanation at home: Hmm, I don't quite follow you.",
  "answer": "Could you explain how the new thermostat works again? I'm not quite getting it."
},
{
  "category": "Clarifying Phrases",
  "question": "context for confirming understanding at work: You mean...?",
  "answer": "So, you mean we should delay the product launch until Q3, correct?"
},
{
  "category": "Clarifying Phrases",
  "question": "context for specifying meaning at home: As in...?",
  "answer": "Do you mean 'early' as in 7 AM, or more like 9 AM for the brunch?"
},
{
  "category": "Clarifying Phrases",
  "question": "context for confirming a statement at work: So you're saying...?",
  "answer": "So you're saying the budget for this project has been cut by 20%?"
},
{
  "category": "Clarifying Phrases",
  "question": "context for understanding a complex statement at home: If I understand you correctly...",
  "answer": "If I understand you correctly, you're suggesting we host Thanksgiving this year instead of going to your parents' house?"
},
//

{
  "category": "Used to",
  "question": "She [BLANK] to live in New York, but now she resides in California.",
  "answer": "used"
},

{
  "category": "Used to",
  "question": "We [BLANK] to go camping in the mountains every summer, but this year we're going to the beach.",
  "answer": "used to"
},

{
  "category": "Used to",
  "question": "They [BLANK] the old train station as a museum now.",
  "answer": "use"
},

{
  "category": "Used to",
  "question": "I [BLANK] work late hours, but I changed my schedule recently.",
  "answer": "used to"
},

{
  "category": "Used to",
  "question": "My sister [BLANK] be a vegetarian, but she started eating meat again.",
  "answer": "used to"
},

{
  "category": "Used to",
  "question": "She [BLANK]  be the manager of the department, but now she's a consultant.",
  "answer": "used to"
},

{
  "category": "Used to",
  "question": "We [BLANK] use traditional paperwork, but now everything is digital.",
  "answer": "used to"
},

{
  "category": "Used to",
  "question": "He [BLANK] travel frequently for business, but now he works remotely.",
  "answer": "used to"
},

{
  "category": "Used to",
  "question": "The team [BLANK] have weekly meetings, but now they meet biweekly.",
  "answer": "used to"
},

{
  "category": "Used to",
  "question": "I [BLANK]  dress formally for the office, but now it's a casual dress code.",
  "answer": "used to"
},
{
  "category": "Used to",
  "question": "They [BLANK] to follow a strict hierarchical structure, but now they promote flat organization.",
  "answer": "used to"
},

{
  "category": "Used to",
  "question": "She [BLANK] use the old software, but now she has upgraded to the latest version.",
  "answer": "used to"
},

{
  "category": "Used to",
  "question": "We [BLANK] have a designated smoking area, but now it's a smoke-free workplace.",
  "answer": "used to"
},

{
  "category": "Used to",
  "question": "I [BLANK]  rely on printed documents, but now I prefer digital files.",
  "answer": "used to"
},

{
  "category": "Used to",
  "question": "He [BLANK] work overtime regularly, but now he values work-life balance.",
  "answer": "used to"
},

{
  "category": "Used to",
  "question": "The company [BLANK] outsource IT support, but now they have an in-house IT team.",
  "answer": "used to"
},

{
  "category": "Use to vs Used to",
"question":"Didn't she [BLANK] play the flute?",
"answer": "use to",
},

{
  "category": "Use to vs Used to",
  "question": "Didn't they [BLANK] attend the same school?",
  "answer": "use to"
},

{
  "category": "Used to",
  "question": "We [BLANK] print a lot of paper documents for meetings, but now we use electronic presentations.",
  "answer": "used to"
},

{
  "category": "Used to",
  "question": "He [BLANK] be the receptionist, but he was promoted to the marketing department.",
  "answer": "used to"
},

{
  "category": "Used to",
  "question": "The team [BLANK] work late into the night to meet deadlines, but they have improved their time management.",
  "answer": "used to"
},

{
  "category": "Used to",
  "question": "I [BLANK] attend monthly seminars, but now I prefer online courses for professional development.",
  "answer": "used to "
},

{
  "category": "Used to",
  "question": "The office [BLANK] have cubicles, but they recently switched to an open workspace layout.",
  "answer": "used to"
},

{
  "category": "Used to",
  "question": "She [BLANK] attend weekly team meetings, but now they're held bi-weekly.",
  "answer": "used to"
},

{
  "category": "Used to",
  "question": "We [BLANK]  use a manual filing system, but now we have a digital document management system.",
  "answer": "used to"
},

{
  "category": "Used to",
  "question": "I [BLANK] send faxes for official documents, but now we use email for most communications.",
  "answer": "used to"
},

{
  "category": "Used to",
  "question": "He [BLANK] be the team leader, but he recently took on a different role in the company.",
  "answer": "used to"
},


//
{
  "category": "Reported speech",
  "question": "Do you like chocolate?",
  "answer": "He asked me if I liked chocolate."
},

{
  "category": "Reported speech",
  "question": "Can you help me with this task?",
  "answer": "She asked if I could help her with that task."
},

{
  "category": "Reported speech",
  "question": "Will you be attending the meeting tomorrow?",
  "answer": "They asked me if I would be attending the meeting the next day."
},

{
  "category": "Reported speech",
  "question": "Have you ever been to Paris?",
  "answer": "He inquired whether I had ever been to Paris."
},

{
  "category": "Reported speech",
  "question": "Are they coming to the party?",
  "answer": "She wondered if they were coming to the party."
},

{
  "category": "Reported speech",
  "question": "Did you eat dinner?",
  "answer": "She asked me if I had eaten dinner."
},

{
  "category": "Reported speech",
  "question": "Can you swim?",
  "answer": "He wanted to know if I could swim."
},

{
  "category": "Reported speech",
  "question": "Will they go to the concert?",
  "answer": "They inquired whether they would go to the concert."
},

{
  "category": "Reported speech",
  "question": "Have you ever seen a ghost?",
  "answer": "She wondered if I had ever seen a ghost."
},

{
  "category": "Reported speech",
  "question": "Are you wearing your new shoes?",
  "answer": "He asked if I was wearing my new shoes."
},




//at that time
//so on and so forth
//I have to do some research.
//my first thought
//Ultimately, I think...
{
  "category": "Clarifying Phrases",
  "question": "context when asking for more details at work: Could you elaborate, please?",
  "answer": "Could you elaborate on why 5G technology is better? Could you elaborate on your expectations for the quarterly report? I want to make sure I include all necessary details."
},
{
  "category": "Clarifying Phrases",
  "question": "context when needing a breakdown of information at home: Could you break that down for me?",
  "answer": "Can you break down the steps for installing the new software on the computer? I'm not very tech-savvy."
},


{
  "category": "Clarifying Phrases",
  "question": "context for understanding a complex statement: If I understand you correctly...",
  "answer": "So if I understand you correctly, you feel that you were unfairly fired from your job?"
},
{
  "category": "Clarifying Phrases",
  "question": "context when asking for more details: Could you elaborate, please?",
  "answer": "I'm not sure I follow. Could you elaborate on that for me?"
},
{
  "category": "Clarifying Phrases",
  "question": "context when needing a breakdown of information: Could you break that down for me?",
  "answer": "How much money did he steal and who are all the victims?"
},

{
  "category": "Clarifying Phrases",
  "question": "Could you please repeat that?",
  "answer": "I apologize, I didn't catch that the first time. Could you please repeat what you just said?"
},
{
  "category": "Clarifying Phrases",
  "question": "I'm not sure I follow. Can you break it down for me?",
  "answer": "I'm having difficulty understanding your explanation. Could you please simplify it or provide more examples?"
},
{
  "category": "Clarifying Phrases",
  "question": "I'm afraid I'm still lost. Could you please provide a different explanation?",
  "answer": "I'm still struggling to grasp the concept. Could you please explain it in a different way or offer an alternative approach?"
},
{
  "category": "Clarifying Phrases",
  "question": "I'm not familiar with that term. Could you please define it for me?",
  "answer": "I'm not sure what you mean by '[term]'. Could you please explain its meaning or provide a synonym?"
},
{
  "category": "Clarifying Phrases",
  "question": "I'm having trouble understanding the connection between [concept] and [concept]. Can you clarify?",
  "answer": "I'm not sure how [concept] relates to [concept]. Could you please explain the relationship between them?"
},
{
  "category": "Clarifying Phrases",
  "question": "Could you give me an example of [concept]?",
  "answer": "I'm having trouble visualizing [concept]. Could you please provide an example to help me understand it better?"
},
{
  "category": "Clarifying Phrases",
  "question": "Are there any synonyms or alternative phrases for [term]?",
  "answer": "I'm not sure how else to say [term]. Could you please provide synonyms or alternative phrases?"
},
//
{ category: 'Determiners', question: "I have [BLANK] apples.", answer: "\"two|three|some\"" },
{ category: 'Determiners', question: "I went to [BLANK] store to buy groceries.", answer: "\"the\"" },
{ category: 'Determiners', question: "I saw [BLANK] cat on my way home.", answer: "\"a\"" },
{ category: 'Determiners', question: "I would like to eat [BLANK] pizza.", answer: "\"some\"" },
{ category: 'Determiners', question: "I have [BLANK] books on my bookshelf.", answer: "\"many\"" },
{ category: 'Determiners', question: "I went to [BLANK] park to play frisbee.", answer: "\"the\"" },
{ category: 'Determiners', question: "I saw [BLANK] birds in the trees.", answer: "\"many|some\"" },
{ category: 'Determiners', question: "I would like to eat [BLANK] ice cream.", answer: "\"some\"" },
{ category: 'Determiners', question: "I have [BLANK] friends who live nearby.", answer: "a few|many|some" },
{ category: 'Determiners', question: "I went to [BLANK] library to study.", answer: "\"the\"" },

//
{ category: 'Zero Conditionals', question: "If the sun [BLANK], it shines.", answer: "\"rises\"" },
{ category: 'Zero Conditionals', question: "If you [BLANK] a button, the light turns on.", answer: "\"press\"" },
{ category: 'Zero Conditionals', question: "If you [BLANK] water, plants grow.", answer: "\"give\"" },
{ category: 'Zero Conditionals', question: "If you [BLANK] a book, you learn new things.", answer: "\"read\"" },
{ category: 'Zero Conditionals', question: "If you [BLANK] exercise, you stay healthy.", answer: "\"do\"" },
{ category: 'Zero Conditionals', question: "If you [BLANK] the door, the bell rings.", answer: "\"open\"" },
{ category: 'Zero Conditionals', question: "If you [BLANK] a car, you can travel to different places.", answer: "\"drive\"" },
{ category: 'Zero Conditionals', question: "If you [BLANK] a language, you can communicate with people from other countries.", answer: "\"speak\"" },
{ category: 'Zero Conditionals', question: "If you [BLANK] a computer, you can access information from all over the world.", answer: "\"use\"" },
{ category: 'Zero Conditionals', question: "If you [BLANK] your teeth, you get cavities.", answer: "\"don't brush\"" },


//adjectives:superlatives go here
// prompt
// Create CLOZE  statements using superlatives.
// "category": "Adjectives:Superlatives"
// Use JS array format.

// example:
// { "category": "Adjectives:Superlatives", "question": "The shop that offers the biggest discounts is often referred to as [BLANK] bargain.", "answer": " the best | the cheapest" },


{ "category": "Adjectives:Superlatives", "question": "The most energetic time of day for young children is often called [BLANK] hour.", "answer": " the craziest | the most aggravating| the busiest | the most active" },
{ "category": "Adjectives:Superlatives", "question": "The most challenging phase of early childhood is often referred to as [BLANK] years.", "answer": " the toughest | the most demanding" },
{ "category": "Adjectives:Superlatives", "question": "The most peaceful moment for parents is often when their child has [BLANK].", "answer": " the soundest sleep | the quietest time" },
{ "category": "Adjectives:Superlatives", "question": "The toy that keeps children engaged the longest is often called [BLANK] toy.", "answer": " the most entertaining | the best | the most favorite|" },
{ "category": "Adjectives:Superlatives", "question": "The most nutritious meal for children is often described as [BLANK].", "answer": " the healthiest | the most balanced" },
{ "category": "Adjectives:Superlatives", "question": "The most memorable family vacation is often referred to as [BLANK] trip.", "answer": " the best | the most unforgettable" },
{ "category": "Adjectives:Superlatives", "question": "The most important quality in a child's education is often seen as [BLANK].", "answer": " the most fundamental | the most crucial" },
{ "category": "Adjectives:Superlatives", "question": "The most challenging subject for many children in school is often [BLANK].", "answer": " the hardest | the most difficult" },
{ "category": "Adjectives:Superlatives", "question": "The bedtime story that children request the most often is called [BLANK].", "answer": " the favorite | the most popular" },
{ "category": "Adjectives:Superlatives", "question": "The period when children grow the fastest is often known as [BLANK] spurt.", "answer": " the growth | the fastest-growing" },
{ "category": "Adjectives:Superlatives", "question": "The most visited tourist attraction in a city is often known as [BLANK] spot.", "answer": " the top | the most popular" },
{ "category": "Adjectives:Superlatives", "question": "The airline with the most international routes is often referred to as [BLANK] carrier.", "answer": " the largest | the most extensive" },
{ "category": "Adjectives:Superlatives", "question": "The hotel offering the most luxurious amenities is often described as [BLANK] hotel.", "answer": " the finest | the most opulent" },
{ "category": "Adjectives:Superlatives", "question": "The country with the most diverse landscapes for travelers is often called [BLANK].", "answer": " the most varied | the most diverse" },
{ "category": "Adjectives:Superlatives", "question": "The train that travels the fastest is often known as [BLANK] train.", "answer": " the fastest | the quickest" },
{ "category": "Adjectives:Superlatives", "question": "The city with the richest historical landmarks is often referred to as [BLANK] city.", "answer": " the most historic | the richest in history" },
{ "category": "Adjectives:Superlatives", "question": "The beach with the clearest water is often called [BLANK] beach.", "answer": " the clearest | the most pristine" },
{ "category": "Adjectives:Superlatives", "question": "The most affordable mode of transportation for long distances is often known as [BLANK].", "answer": " the cheapest | the most economical" },
{ "category": "Adjectives:Superlatives", "question": "The restaurant that serves the most authentic local cuisine is often described as [BLANK] restaurant.", "answer": " the most authentic | the best local" },
{ "category": "Adjectives:Superlatives", "question": "The hiking trail with the most breathtaking views is often referred to as [BLANK] trail.", "answer": " the most scenic | the most spectacular" },
{ "category": "Adjectives:Superlatives", "question": "The store with the widest range of products in a shopping mall is often referred to as [BLANK].", "answer": " the largest|the most diverse" },
{ "category": "Adjectives:Superlatives", "question": "The busiest time of day at the mall is often described as [BLANK] hour.", "answer": " the peak" },
{ "category": "Adjectives:Superlatives", "question": "The most expensive store in a shopping mall is often known as [BLANK] shop.", "answer": " the priciest" },
{ "category": "Adjectives:Superlatives", "question": "In a mall, the food court with the most variety is often called [BLANK] food court.", "answer": " the most diverse" },
{ "category": "Adjectives:Superlatives", "question": "The shop that offers the biggest discounts is often referred to as [BLANK] bargain.", "answer": " the best | the cheapest" },
{ "category": "Adjectives:Superlatives", "question": "The area with the highest foot traffic in a mall is often known as [BLANK] spot.", "answer": " the most trafficked|the busiest|the most crowded" },
{ "category": "Adjectives:Superlatives", "question": "The shop with the longest opening hours in the mall is often called [BLANK] store.", "answer": " the most accessible" },
{ "category": "Adjectives:Superlatives", "question": "In terms of customer service, the store with the friendliest staff is often labeled as [BLANK].", "answer": " the most welcoming" },
{ "category": "Adjectives:Superlatives", "question": "The newest addition to the mall is often referred to as [BLANK] store.", "answer": " the latest|the most recent" },
{ "category": "Adjectives:Superlatives", "question": "The largest store in terms of square footage in a mall is often known as [BLANK].", "answer": " the biggest" },
{ "category": "Adjectives:Superlatives", "question": "In a team, the most efficient worker is often called [BLANK] employee.", "answer": " the hardest-working" },
{ "category": "Adjectives:Superlatives", "question": "In terms of decision-making, the CEO is often [BLANK] authority in a company.", "answer": " the highest" },
{ "category": "Adjectives:Superlatives", "question": "The person who arrives first at the office is often referred to as [BLANK] riser.", "answer": " the earliest" },
{ "category": "Adjectives:Superlatives", "question": "The employee with the most experience is typically called [BLANK] member of the team.", "answer": " the most seasoned" },
{ "category": "Adjectives:Superlatives", "question": "The most creatively designed office in a company is often termed as [BLANK] space.", "answer": "the most comfortable| the most innovative" },
{ "category": "Adjectives:Superlatives", "question": "In terms of speed, the fastest typist in an office is often referred to as [BLANK].", "answer": " the quickest" },
{ "category": "Adjectives:Superlatives", "question": "The most reliable and consistent performer in a team is often labeled as [BLANK] employee.", "answer": " the most dependable" },
{ "category": "Adjectives:Superlatives", "question": "The most technologically advanced equipment in an office is often known as [BLANK] tools.", "answer": " the most cutting-edge" },
{ "category": "Adjectives:Superlatives", "question": "In terms of responsibility, the person holding [BLANK] position often has the most.", "answer": " the highest-ranking" },
{ "category": "Adjectives:Superlatives", "question": "The person with the most innovative ideas in a team is often considered [BLANK] thinker.", "answer": " the most creative" },
{ "category": "Adjectives:Superlatives", "question": "The Sahara Desert is known as [BLANK] desert in the world.", "answer": " the largest" },
{ "category": "Adjectives:Superlatives", "question": "The blue whale is known as [BLANK] animal in the world.", "answer": " the largest" },
{ "category": "Adjectives:Superlatives", "question": "The Amazon River is known as [BLANK] river by volume in the world.", "answer": " the largest" },
{ "category": "Adjectives:Superlatives", "question": "Death Valley is known as [BLANK] place in North America.", "answer": " the hottest" },
{ "category": "Adjectives:Superlatives", "question": "The Mariana Trench is known as [BLANK] part of the Earth's oceans.", "answer": " the deepest" },
{ "category": "Adjectives:Superlatives", "question": "The cheetah is known as [BLANK] land animal in the world.", "answer": " the fastest" },
{ "category": "Adjectives:Superlatives", "question": "Sequoia trees are known as [BLANK] trees in the world.", "answer": " the tallest" },
{ "category": "Adjectives:Superlatives", "question": "The Pacific Ocean is known as [BLANK] ocean in the world.", "answer": " the largest" },
{ "category": "Adjectives:Superlatives", "question": "Russia is known as [BLANK] country in the world by area.", "answer": " the largest" },
{ "category": "Adjectives:Superlatives", "question": "The microbat is known as [BLANK] mammal in the world.", "answer": " the smallest" },

//
{ "category": 'Adjectives', "question": 'Raising children is a [BLANK] task.', "answer": 'challenging' },
{ "category": 'Adjectives', "question": 'Raising children requires [BLANK] patience.', "answer": 'unlimited' },
{ "category": 'Adjectives', "question": 'Children are [BLANK] sponges.', "answer": 'absorbent' },
{ "category": 'Adjectives', "question": 'It is important to set [BLANK] boundaries for children.', "answer": 'clear' },
{ "category": 'Adjectives', "question": 'Children need [BLANK] opportunities to play and explore.', "answer": 'ample' },
{ "category": 'Adjectives', "question": 'Raising children can be a [BLANK] journey.', "answer": 'transformative' },
{ "category": 'Adjectives', "question": 'Children are [BLANK] learners.', "answer": 'eager' },
{ "category": 'Adjectives', "question": 'It is important to provide children with a [BLANK] environment.', "answer": 'nurturing' },
{ "category": 'Adjectives', "question": 'Children need [BLANK] love and support.', "answer": 'unconditional' },
{ "category": 'Adjectives', "question": 'Raising children can be a [BLANK] experience.', "answer": 'rewarding' },

//Pharmaceuticals
{
  "category": "Pharmaceuticals",
  "question": "A [BLANK] is a substance that is used to prevent, diagnose, or treat disease.",
  "answer": "drug|medicine|pharmaceutical"
},
{
  "category": "Pharmaceuticals",
  "question": "A [BLANK] is a type of drug that is used to treat a specific symptom.",
  "answer": "therapeutic agent"
},
{
  "category": "Pharmaceuticals",
  "question": "A [BLANK] is a type of drug that is used to prevent a disease.",
  "answer": "prophylactic"
},
{
  "category": "Pharmaceuticals",
  "question": "A [BLANK] is a type of drug that is used to diagnose a disease.",
  "answer": "diagnostic agent"
},
{
  "category": "Pharmaceuticals",
  "question": "A [BLANK] is a substance that is used to deliver a drug to the body.",
  "answer": "drug delivery system"
},
{
  "category": "Pharmaceuticals",
  "question": "A [BLANK] is a substance that is used to interact with a drug in the body.",
  "answer": "excipient"
},
{
  "category": "Pharmaceuticals",
  "question": "A [BLANK] is a substance that is used to protect a drug from degradation.",
  "answer": "preservative"
},
{
  "category": "Pharmaceuticals",
  "question": "A [BLANK] is a substance that is used to enhance the absorption of a drug.",
  "answer": "penetration enhancer"
},
{
  "category": "Pharmaceuticals",
  "question": "A [BLANK] is a substance that is used to prolong the action of a drug.",
  "answer": "sustained-release formulation"
},
{
  "category": "Pharmaceuticals",
  "question": "A [BLANK] is a substance that is used to target a drug to a specific site in the body.",
  "answer": "drug targeting agent"
},
{
  "category": "Pharmaceuticals",
  "question": "A [BLANK] is a list of medications that a patient is currently taking.",
  "answer": "prescription list |medication list"
},
{
  "category": "Pharmaceuticals",
  "question": "A [BLANK] is a doctor's order to dispense a specific medication to a patient.",
  "answer": "medication order"
},
{
  "category": "Pharmaceuticals",
  "question": "A [BLANK] is a record of a patient's medication history.",
  "answer": "medication profile"
},
{
  "category": "Pharmaceuticals",
  "question": "A [BLANK] is a pharmacist who specializes in the care of hospitalized patients.",
  "answer": "clinical pharmacist"
},
{
  "category": "Pharmaceuticals",
  "question": "A [BLANK] is a medication that is used to treat a serious medical condition.",
  "answer": "critical care medication"
},

{
  "category": "Pharmaceuticals",
  "question": "A [BLANK] is a medication that is used to prevent or treat an infection.",
  "answer": "antimicrobial agent|antibiotic|antifungal|antiviral"
},
{
  "category": "Pharmaceuticals",
  "question": "A [BLANK] is a medication that is used to manage pain.",
  "answer": "analgesic"
},
{
  "category": "Pharmaceuticals",
  "question": "A [BLANK] is a medication that is used to reduce inflammation.",
  "answer": "anti-inflammatory drug"
},
{
  "category": "Pharmaceuticals",
  "question": "A [BLANK] is a medication that is used to regulate blood pressure.",
  "answer": "antihypertensive drug"
},
{
  "category": "Pharmaceuticals",
  "question": "A [BLANK] is a medication that is used to treat cancer.",
  "answer": "chemotherapeutic agent"
},

//medical equipment


    { category: 'Pharmacy Terms', question: "What term refers to the correctness of a result or measurement?", answer: "accuracy" },
    { category: 'Pharmacy Terms', question: "What is the term for a recommendation or guidance offered?", answer: "prescription|advice" },
    { category: 'Pharmacy Terms', question: "What phrase describes careful consideration and thorough examination of details?", answer: "attention to detail" },
    { category: 'Pharmacy Terms', question: "What word describes having a lot of tasks to do?", answer: "busy" },
    { category: 'Pharmacy Terms', question: "What term is used for a demanding situation or problem in a job?", answer: "challenge" },
    { category: 'Pharmacy Terms', question: "What term refers to a group of people living in the same place or having a particular characteristic in common?", answer: "community" },
    { category: 'Pharmacy Terms', question: "What term describes sympathetic pity and concern for the sufferings of others?", answer: "compassion" },
    { category: 'Pharmacy Terms', question: "What term is used for the action of seeking expert advice?", answer: "consultation" },
    { category: 'Pharmacy Terms', question: "What phrase refers to the act of taking care of customer's needs?", answer: "customer care" },
    { category: 'Pharmacy Terms', question: "Who are the individuals purchasing or using pharmacy services?", answer: "customers" },
    { category: 'Pharmacy Terms', question: "What term describes a committed and serious attitude towards a task?", answer: "dedication" },
    { category: 'Pharmacy Terms', question: "What term refers to the ability to do work or produce results without wasting resources?", answer: "efficiency" },
    { category: 'Pharmacy Terms', question: "What term describes the ability to understand and share the feelings of another?", answer: "empathy" },
    { category: 'Pharmacy Terms', question: "What term refers to the provision of medical care?", answer: "healthcare|treatment" },
    { category: 'Pharmacy Terms', question: "What term describes the action of interacting with others?", answer: "interaction" },
    { category: 'Pharmacy Terms', question: "What term refers to the facts, information, and skills acquired through experience or education?", answer: "knowledge" },
    { category: 'Pharmacy Terms', question: "What is the science or practice of the diagnosis, treatment, and prevention of disease?", answer: "medicine" },
    { category: 'Pharmacy Terms', question: "What is the capacity to accept or tolerate delay, problems, or suffering without becoming annoyed?", answer: "patience" },
    { category: 'Pharmacy Terms', question: "Who is a healthcare professional who can help with the use of medication?", answer: "pharmacist" },
    { category: 'Pharmacy Terms', question: "What is the place where medications are dispensed and pharmaceutical services are offered?", answer: "pharmacy" },
    { category: 'Pharmacy Terms', question: "What term refers to the written orders for medication?", answer: "prescriptions" },
    { category: 'Pharmacy Terms', question: "What term describes the conduct and qualities that characterize a professional person?", answer: "character|professionalism" },
    { category: 'Pharmacy Terms', question: "What term describes the state of being accountable or to blame for something?", answer: "responsibility" },
    { category: 'Pharmacy Terms', question: "What term refers to the condition of being protected from or unlikely to cause danger, risk, or injury?", answer: "safety" },
    { category: 'Pharmacy Terms', question: "What term is used for the act of serving customers or clients?", answer: "service" },
    { category: 'Pharmacy Terms', question: "What term refers to a means of solving a problem or dealing with a difficult situation?", answer: "solution" },
    { category: 'Pharmacy Terms', question: "What term describes mental or emotional strain caused by demanding circumstances?", answer: "stress" },
    { category: 'Pharmacy Terms', question: "What term refers to the collaborative effort of a group to achieve a common goal?", answer: "teamwork" },
    { category: 'Pharmacy Terms', question: "What term describes the period of time when one is at work?", answer: "workday" },
   


//marketing

{
  "category": "Marketing",
  "question": "A [BLANK] is a detailed plan of action for achieving a specific marketing goal.",
  "answer": "marketing plan | business plan | strategic plan | roadmap"
},
{
  "category": "Marketing",
  "question": "A [BLANK] consumer is one who is highly engaged with a brand.",
  "answer": "loyal | avid | devoted | passionate"
},
{
  "category": "Marketing",
  "question": "A product that is [BLANK] is one that meets the needs of a specific group of consumers.",
  "answer": "niche | specialized | tailored | specific"
},
{
  "category": "Marketing",
  "question": "A marketing campaign that is [BLANK] is one that is memorable and effective.",
  "answer": "impactful | memorable | effective | successful"
},
{
  "category": "Marketing",
  "question": "A [BLANK] marketing strategy is one that focuses on building relationships with customers.",
  "answer": "relationship-based | customer-centric | focused | personalized"
},
{
  "category": "Marketing",
  "question": "To [BLANK] is to promote a product or service to the public.",
  "answer": "advertise | market | promote | publicize"
},
{
  "category": "Marketing",
  "question": "To [BLANK] is to create a positive image of a brand in the minds of consumers.",
  "answer": "brand | build | establish | create"
},
{
  "category": "Marketing",
  "question": "To [BLANK] is to collect data about consumers in order to understand their needs and wants.",
  "answer": "research | market | study | analyze"
},
{
  "category": "Marketing",
  "question": "To [BLANK] is to develop a strategy for reaching a target audience.",
  "answer": "develop | create | implement | execute"
},
{
  "category": "Marketing",
  "question": "To [BLANK] is to track the results of a marketing campaign.",
  "answer": "measure | track | evaluate | assess"
},
{
  "category": "Marketing",
  "question": "A [BLANK] is a person who creates and implements marketing campaigns.",
  "answer": "marketer | advertiser | promoter | publicist"
},
{
  "category": "Marketing",
  "question": "A [BLANK] is a plan for marketing a product or service.",
  "answer": "strategy | campaign | plan | initiative"
},
{
  "category": "Marketing",
  "question": "A [BLANK] is a message that is designed to persuade consumers to buy a product or service.",
  "answer": "advertisement | ad | message | copy"
},
{
  "category": "Marketing",
  "question": "A [BLANK] is a person who consumes goods and services.",
  "answer": "consumer | customer | purchaser | buyer"
},
{
  "category": "Marketing",
  "question": "A [BLANK] is a group of consumers who share similar characteristics.",
  "answer": "target audience | market | segment | group"
},
{
  "category": "Marketing",
  "question": "A [BLANK] is a plan for marketing a product or service.",
  "answer": "strategy"
},
{
  "category": "Marketing",
  "question": "A [BLANK] is a series of coordinated marketing activities aimed at achieving a specific marketing goal.",
  "answer": "campaign"
},
{
  "category": "Marketing",
  "question": "A [BLANK] is a detailed outline of the steps that will be taken to achieve a marketing goal.",
  "answer": "plan"
},
{
  "category": "Marketing",
  "question": "An [BLANK] is a new or innovative approach to marketing that has the potential to disrupt the market.",
  "answer": "initiative"
},
{
  "category": "Marketing",
  "question": "The [BLANK] of marketing is to create value for customers and build strong relationships with them.",
  "answer": "goal"
},
{
  "category": "Marketing",
  "question": "The [BLANK] of marketing are the four Ps: product, price, place, and promotion.",
  "answer": "principles|elements"
},
{
  "category": "Marketing",
  "question": "Conducting [BLANK] is the process of understanding the needs and wants of consumers.",
  "answer": "market research"
},
{
  "category": "Marketing",
  "question": "The [BLANK] of marketing is the process of creating a brand that is unique, memorable, and desirable.",
  "answer": "development"
},
{
  "category": "Marketing",
  "question": "The [BLANK] of marketing is the process of measuring the effectiveness of marketing campaigns.",
  "answer": "evaluation"
},




// //
// procurement vocabulary
// Create lots of flash cards as JS strings
//   show answer as definition on the other side of the flash card
  



//   create JS valid content
//   wrap the strings in double quotes
// focus on work situations
//   here's an example of the JS output
  
//  { category: 'Procurement Terms', question: "A formal, written request for proposals from suppliers is known as a [BLANK].", answer: "Request for Proposal (RFP)" },



  { category: 'Procurement Terms', question: "What is 'Acknowledgement' in a purchasing context?", answer: "A communication indicating that something has been received or understood, often referring to a form from a supplier accepting or modifying a purchase order." },
  { category: 'Procurement Terms', question: "Define 'Amortization'.", answer: "A method used to lower the cost value of a product incrementally through scheduled charges to income or the paying off of debt with a fixed repayment schedule over time." },
  { category: 'Procurement Terms', question: "What does 'annus mirabilis' refer to?", answer: "A year regarded as pivotal, crucial, or notable for disasters or wonders; a fateful year." },
  { category: 'Procurement Terms', question: "What is 'APS' an abbreviation for?", answer: "American Purchasing Society, a professional organization of buyers and purchasing managers for business." },
  { category: 'Procurement Terms', question: "What does 'ASAP' stand for?", answer: "As soon as possible." },
  { category: 'Procurement Terms', question: "Define 'Asset'.", answer: "Items of value, especially what an organization owns." },
  { category: 'Procurement Terms', question: "What is 'ASTM'?", answer: "The American Society for Testing and Materials, an organization that develops and publishes standard specifications on various products." },
  { category: 'Procurement Terms', question: "Explain 'Bartering'.", answer: "A type of transaction involving no money where one party provides one type of goods in exchange for another type of goods, either domestically or globally." },
  { category: 'Procurement Terms', question: "What is a 'Bill of Lading'?", answer: "A written receipt given by a carrier for goods accepted for transportation." },
  { category: 'Procurement Terms', question: "Define 'Bill of Material'.", answer: "A list of items used in the manufacture of a product, showing which items are required for sub-assemblies and the final product, including manufactured and purchased components." },
  { category: 'Procurement Terms', question: "What is a 'Blanket Order'?", answer: "An agreement to purchase or a purchase order for a given quantity of specific goods over a period of time, often one year." },
  { category: 'Procurement Terms', question: "Define 'BPM'.", answer: "Business process management." },
  { category: 'Procurement Terms', question: "What does 'Capital Equipment' refer to?", answer: "Assets listed on an organization's accounting records that have value and are durable." },
  { category: 'Procurement Terms', question: "What does 'Caveat Emptor' mean?", answer: "Latin for let the buyer beware." },
  { category: 'Procurement Terms', question: "Explain 'Centralized Purchasing'.", answer: "An organizational structure where all buying is conducted and authorized by one department and in one location, as opposed to decentralized systems." },
  { category: 'Procurement Terms', question: "What does 'ceteris paribus' mean?", answer: "Everything else being equal." },
  { category: 'Procurement Terms', question: "Define 'CIF'.", answer: "Cost, Insurance, and Freight. A term indicating that the seller pays for the cost of marine insurance and transportation to the buyer's port of entry." },
  { category: 'Procurement Terms', question: "What does 'COD' stand for?", answer: "Cash on delivery." },
  { category: 'Procurement Terms', question: "Define 'Contract'.", answer: "An agreement between individuals or organizations that is legally enforceable, involving offer, acceptance, and consideration." },
  { category: 'Procurement Terms', question: "What is 'CPI'?", answer: "Consumer Price Index, a figure representing prices of selected products compared to prices at a different base time." },
  { category: 'Procurement Terms', question: "Explain 'CPM'.", answer: "Critical Path Method, a management tool used to determine the shortest way to accomplish a task or project." },
  { category: 'Procurement Terms', question: "What does 'CPP' stand for?", answer: "Certified Purchasing Professional, recognition of purchasing knowledge and business experience." },
  { category: 'Procurement Terms', question: "Define 'CPPM'.", answer: "Certified Professional Purchasing Manager, recognition of purchasing management knowledge." },
  { category: 'Procurement Terms', question: "What is 'CRM'?", answer: "Customer relationship management." },
  { category: 'Procurement Terms', question: "Explain 'Cross-Docking'.", answer: "A process of receiving a product and shipping it out immediately without putting it into storage." },
  { category: 'Procurement Terms', question: "What is 'Direct Purchasing'?", answer: "The purchase of material to be used in manufacturing or for resale, as opposed to indirect purchasing." },
  { category: 'Procurement Terms', question: "Define 'EBITDA'.", answer: "Earnings before interest, taxes, depreciation, and amortization, a measure of a company's operating performance." },
  { category: 'Procurement Terms', question: "What does 'ERP' stand for?", answer: "Enterprise resource planning." },
  { category: 'Procurement Terms', question: "Explain 'Exchange Rate'.", answer: "The value of one country's currency in terms of another country's currency." },
  { category: 'Procurement Terms', question: "Define 'FIFO'.", answer: "First-in, First-out, an accounting method of valuing inventory based on the cost of the oldest purchases." },
  { category: 'Procurement Terms', question: "What does 'FOB' stand for?", answer: "Free on Board, indicating where the title or ownership passes from the seller to the buyer." },
  { category: 'Procurement Terms', question: "Explain 'Force Majeure'.", answer: "A contract clause about an unexpected high force, such as a natural disaster, that excuses the parties from responsibility." },
  { category: 'Procurement Terms', question: "What is a 'Gross Lease'?", answer: "A lease where the owner agrees to pay all expenses normally associated with ownership." },
  { category: 'Procurement Terms', question: "Define 'indemnity insurance'.", answer: "Security or compensation for loss." },
  { category: 'Procurement Terms', question: "What is 'Indirect Purchasing'?", answer: "The purchase of materials and services used internally by the business, such as MRO products." },
  { category: 'Procurement Terms', question: "Explain 'Inventory Turnover'.", answer: "The number of times the average inventory has been sold during the year." },
  { category: 'Procurement Terms', question: "What is an 'IPO'?", answer: "Initial Public Offering, the first public offer of common stock of a company." },
  { category: 'Procurement Terms', question: "Define 'ISO'.", answer: "International Organization for Standardization, which establishes standards for quality." },
  { category: 'Procurement Terms', question: "What does 'IT' refer to?", answer: "Information Technology, usually the department handling computer operations." },
  { category: 'Procurement Terms', question: "Explain 'JIT'.", answer: "Just In Time, a scheduling system that minimizes inventory by having material arrive just as it is to be used." },
  { category: 'Procurement Terms', question: "Define 'LCL'.", answer: "Less carload, often referring to a freight rate higher than for a full carload." },
  { category: 'Procurement Terms', question: "What are 'Lean Processes'?", answer: "A method to reduce unnecessary steps in manufacturing or services to improve efficiency and reduce error." },
  { category: 'Procurement Terms', question: "Explain 'Letter of Credit'.", answer: "A payment form in international trade transferring funds from the buyer's to the seller's bank account." },
  { category: 'Procurement Terms', question: "Define 'Leverage'.", answer: "Using debt to finance operations rather than using equity." },
  { category: 'Procurement Terms', question: "What is a 'Liability' in accounting and law?", answer: "In accounting, it is what a company owes. In law, it's an obligation to perform or refrain from performing an action." },
  { category: 'Procurement Terms', question: "Explain 'LIFO'.", answer: "Last-in, First-out, an accounting method valuing inventory based on the assumption that the last items purchased are the first sold." },
  { category: 'Procurement Terms', question: "What does 'LTL' stand for?", answer: "Less truckload, referring to a freight rate usually higher than for a full truckload." },
  { category: 'Procurement Terms', question: "Define 'Materials Management'.", answer: "The management function that includes responsibility for purchasing, inventory control, traffic, shipping, receiving, and warehousing." },
  { category: 'Procurement Terms', question: "What is the 'Mean'?", answer: "The arithmetic average." },
  { category: 'Procurement Terms', question: "Explain 'Mechanics Lien'.", answer: "Payment protection for parties involved in improvement of real property, involving construction material or services." },
  { category: 'Procurement Terms', question: "Define 'Median'.", answer: "The mid-point in a list of numbers or occurrences." },

{ category: 'Procurement Terms', question: "A formal, written request for proposals from suppliers is known as a [BLANK].", answer: "Request for Proposal (RFP)" },
    { category: 'Procurement Terms', question: "A [BLANK] is a document used to invite bids for goods or services.", answer: "Request for Quotation (RFQ)" },
    { category: 'Procurement Terms', question: "The process of evaluating and choosing the most suitable supplier is known as [BLANK].", answer: "Supplier Selection" },
    { category: 'Procurement Terms', question: "A legally binding agreement between a buyer and a supplier is called a [BLANK].", answer: "Purchase Order (PO)" },
    { category: 'Procurement Terms', question: "A [BLANK] is an assessment of the supplier's ability to meet quality, cost, and schedule requirements.", answer: "Supplier Evaluation" },
    { category: 'Procurement Terms', question: "The total cost of owning a product over its entire lifecycle is referred to as [BLANK].", answer: "Total Cost of Ownership (TCO)" },
    { category: 'Procurement Terms', question: "A [BLANK] is an agreement with a supplier to provide goods or services at predetermined prices and terms.", answer: "Contract" },
    { category: 'Procurement Terms', question: "A process where the procurement function is performed by an external service provider is called [BLANK].", answer: "Outsourcing" },
    { category: 'Procurement Terms', question: "The ongoing process of identifying, prioritizing, and managing supply sources is known as [BLANK].", answer: "Supplier Management" },
    { category: 'Procurement Terms', question: "A strategy to reduce risk by choosing multiple suppliers for a single component is called [BLANK].", answer: "Supplier Diversification" },
    { category: 'Procurement Terms', question: "The process of obtaining goods or services to accomplish a company's goals is known as [BLANK].", answer: "Procurement" },
    { category: 'Procurement Terms', question: "A [BLANK] is a method where suppliers compete against each other to win a business contract.", answer: "Competitive Bidding" },
    { category: 'Procurement Terms', question: "The examination of the financial stability and performance of potential suppliers is called [BLANK].", answer: "Supplier Financial Analysis" },
    { category: 'Procurement Terms', question: "A [BLANK] is a document that specifies the terms and conditions of a purchase.", answer: "Terms and Conditions (T&C)" },
    { category: 'Procurement Terms', question: "The process of planning, implementing, and controlling the efficient flow and storage of goods is known as [BLANK].", answer: "Supply Chain Management (SCM)" },
    { category: 'Procurement Terms', question: "A [BLANK] is a formal declaration from a supplier about the price of goods or services.", answer: "Quotation" },
    { category: 'Procurement Terms', question: "A [BLANK] is a set of criteria that a product, service, or supplier must meet.", answer: "Specification" },
    { category: 'Procurement Terms', question: "The assessment of the value, risk, and importance of items purchased is known as [BLANK].", answer: "Spend Analysis" },
    { category: 'Procurement Terms', question: "Negotiating with a single source rather than opening the bid to competition is known as [BLANK].", answer: "Sole Sourcing" },
    { category: 'Procurement Terms', question: "A [BLANK] is a strategy to centralize purchasing decisions and reduce costs.", answer: "Strategic Sourcing" },

//
{
  "category": "Transition words",
  "question": "Additional comments or ideas: additionally",
  "answer": "Each of the horse jockeys is additionally [accused of|charged with] passing on information for gain."
},
{
  "category": "Transition words",
  "question": "Additional comments or ideas: also",
  "answer": "She is also accused of stealing from her mother-in-law."
},
// Additional comments or ideas
{
  "category": "Transition words",
  "question": "Additional comments or ideas: moreover",
  "answer": "The project is not only environmentally friendly; moreover, it helps reduce electricity costs."
},
{
  "category": "Transition words",
  "question": "Additional comments or ideas: furthermore",
  "answer": "He has no experience in this field; furthermore, he lacks the necessary qualifications."
},
// ... more flashcards for each transition word/phrase in this category ...

// Alternatives
{
  "category": "Transition words",
  "question": "Alternatives: whereas",
  "answer": "He enjoys reading, whereas his brother prefers watching movies."
},
// ... more flashcards for each transition word/phrase in this category ...

// Analysing results
{
  "category": "Transition words",
  "question": "Analysing results: therefore",
  "answer": "The experiment failed to produce any conclusive results; therefore, further research is needed."
},
// ... more flashcards for each transition word/phrase in this category ...

// Cause / Reason
{
  "category": "Transition words",
  "question": "Cause / Reason: as a result of",
  "answer": "As a result of the heavy snow, all flights were canceled."
},
{
  "category": "Transition words",
  "question": "Compare: compared with",
  "answer": "Her performance this season is quite impressive, compared with last year's."
},
{
  "category": "Transition words",
  "question": "Compare: in the same way",
  "answer": "In the same way that a chef uses recipes, a programmer uses algorithms."
},
{
  "category": "Transition words",
  "question": "Compare: likewise",
  "answer": "He is respected for his integrity; likewise, his honesty is beyond reproach."
},

// Contrast
{
  "category": "Transition words",
  "question": "Contrast: by contrast",
  "answer": "The first novel was full of action; by contrast, the second was quite slow."
},
{
  "category": "Transition words",
  "question": "Contrast: although",
  "answer": "Although it was raining, we decided to go hiking."
},
{
  "category": "Transition words",
  "question": "Contrast: conversely",
  "answer": "He prefers classical music; conversely, his sister loves rock music."
},

// Effect / Result
{
  "category": "Transition words",
  "question": "Effect / Result: As a result",
  "answer": "She studied hard for the exams; as a result, she passed with flying colors."
},
{
  "category": "Transition words",
  "question": "Effect / Result: therefore",
  "answer": "The roads were icy; therefore, the school decided to close for the day."
},
{
  "category": "Transition words",
  "question": "Effect / Result: thus",
  "answer": "He failed to submit his report on time; thus, he was not considered for the promotion."
},

// Emphasising earlier statements
{
  "category": "Transition words",
  "question": "Emphasising: however",
  "answer": "The journey was difficult; however, they never lost hope."
},
// ... more flashcards for each transition word/phrase in this category ...

// Introducing examples
{
  "category": "Transition words",
  "question": "Examples: for example",
  "answer": "There are many ways to reduce your carbon footprint; for example, using public transportation."
},

{
  "category": "Transition words",
  "question": "Clarifying: in other words",
  "answer": "We need to optimize the workflow, in other words, make the process more efficient."
},
{
  "category": "Transition words",
  "question": "Clarifying: that is to say",
  "answer": "The project deadline is non-negotiable, that is to say, it must be completed on time."
},
{
  "category": "Transition words",
  "question": "Clarifying: namely",
  "answer": "We have to focus on our core competencies, namely, innovation and customer service."
},

// Indicating Time
{
  "category": "Transition words",
  "question": "Time: subsequently",
  "answer": "The team had a meeting; subsequently, they started working on the project plan."
},
{
  "category": "Transition words",
  "question": "Time: previously",
  "answer": "Previously, we focused on market research; now we're moving to product development."
},
{
  "category": "Transition words",
  "question": "Time: meanwhile",
  "answer": "The software team is working on the new release; meanwhile, the marketing team is preparing the launch campaign."
},

// Indicating Addition
{
  "category": "Transition words",
  "question": "Addition: moreover",
  "answer": "This strategy will increase revenue; moreover, it will improve customer satisfaction."
},
{
  "category": "Transition words",
  "question": "Addition: furthermore",
  "answer": "He's a great team player; furthermore, his expertise in analytics is invaluable."
},
{
  "category": "Transition words",
  "question": "Addition: in addition",
  "answer": "In addition to her managerial skills, she is also fluent in three languages."
},

// Providing Examples
{
  "category": "Transition words",
  "question": "Examples: for instance",
  "answer": "Some tasks require immediate attention, for instance, client complaints."
},
{
  "category": "Transition words",
  "question": "Examples: such as",
  "answer": "There are several strategies we can employ, such as diversification and market penetration."
},

// Indicating Contrast
{
  "category": "Transition words",
  "question": "Contrast: however",
  "answer": "The proposal was well-prepared; however, it did not meet all the client's requirements."
},
{
  "category": "Transition words",
  "question": "Contrast: on the other hand",
  "answer": "The product is expensive; on the other hand, its quality is unmatched."
},
{
  "category": "Transition words",
  "question": "Contrast: despite this",
  "answer": "Despite this setback, the team remains optimistic about the project's future."
},

// Summarizing or Concluding
{
  "category": "Transition words",
  "question": "Summary: in summary",
  "answer": "In summary, the quarter's results exceeded our expectations."
},
{
  "category": "Transition words",
  "question": "Conclusion: in conclusion",
  "answer": "In conclusion, implementing these changes will greatly benefit our workflow."
},


// Re-phrasing
{
  "category": "Transition words",
  "question": "Re-phrasing: in other terms",
  "answer": "She's not happy with the decision; in other terms, she's quite upset about it."
},
// ... more flashcards for each transition word/phrase in this category ...

// Sequencing

// ... more flashcards for each transition word/phrase in this category ...

// Summary or Conclusion
{
  "category": "Transition words",
  "question": "Conclusion: in conclusion",
  "answer": "In conclusion, the evidence clearly supports our hypothesis."
},

{
  "category": "Transition words",
  "question": "Summary: to summarise",
  "answer": "To summarise, the three main points discussed are environment, economy, and culture."
},
{
  "category": "Transition words",
  "question": "Conclusion: hence",
  "answer": "The experiment did not follow the proper protocols; hence, the results are unreliable."
},
{
  "category": "Transition words",
  "question": "Conclusion: altogether",
  "answer": "Altogether, these improvements have significantly increased the efficiency of the process."
},

// Introducing Examples
{
  "category": "Transition words",
  "question": "Examples: for instance",
  "answer": "Several factors contributed to the change, for instance, technological advancements."
},
{
  "category": "Transition words",
  "question": "Examples: such as",
  "answer": "He has expertise in many areas, such as computing, mathematics, and engineering."
},
{
  "category": "Transition words",
  "question": "Examples: namely",
  "answer": "She excels in several sports, namely, swimming, running, and cycling."
},

// Emphasising Earlier Statements
{
  "category": "Transition words",
  "question": "Emphasising: nonetheless",
  "answer": "The weather was terrible; nonetheless, we had a great time at the beach."
},
{
  "category": "Transition words",
  "question": "Emphasising: notwithstanding",
  "answer": "Notwithstanding his lack of experience, he handled the situation very well."
},
{
  "category": "Transition words",
  "question": "Emphasising: in spite of",
  "answer": "In spite of the difficulties, they managed to finish the project on time."
},

// Sequencing

{
  "category": "Transition words",
  "question": "Sequencing: finally",
  "answer": "We discussed several important topics in the meeting; finally, we addressed the issue of funding."
},
{
  "category": "Transition words",
  "question": "Sequencing: subsequently",
  "answer": "He completed his degree and subsequently started his own business."
},
////////////////////////////////  "category": "Adjectives:Weather",

{
  "category": "Adjectives:Weather",
  "question": "A [BLANK] is a type of precipitation that falls as frozen water crystals.",
  "answer": "snow"
},
{
  "category": "Adjectives:Weather",
  "question": "A [BLANK] is a layer of ice that forms on the surface of roads or sidewalks.",
  "answer": "black ice"
},
{
  "category": "Adjectives:Weather",
  "question": "A [BLANK] is a strong wind that blows from the north.",
  "answer": "blizzard"
},
{
  "category": "Adjectives:Weather",
  "question": "A [BLANK] is a period of time when the temperature is very low.",
  "answer": "cold snap"
},
{
  "category": "Adjectives:Weather",
  "question": "A [BLANK] is a sudden drop in temperature.",
  "answer": "freeze"
},
{
  "category": "Adjectives:Weather",
  "question": "A [BLANK] is a white frost that forms on the ground or other surfaces.",
  "answer": "hoar frost"
},
{
  "category": "Adjectives:Weather",
  "question": "A [BLANK] is a thin layer of ice that forms on top of water.",
  "answer": "ice skim"
},
{
  "category": "Adjectives:Weather",
  "question": "[BLANK] is a disease that affects human tissue after freezing.",
  "answer": "Frostbite"
},


{
  "category": "Adjectives:Weather",
  "question": "A [BLANK] is a type of precipitation that falls as small, frozen particles.",
  "answer": "sleet"
},
{
  "category": "Adjectives:Weather",
  "question": "A [BLANK] is a large, open area of land that is covered in snow.",
  "answer": "snowfield"
},


{ "category": 'Adjectives:Weather', "question": "'It's a [BLANK] day to be outside.'" , "answer": 'nice|sunny|great|terrific' },
{ "category": 'Adjectives:Weather', "question": "'The [BLANK] wind is whipping through the trees.'" , "answer": 'strong|gusty' },
{ "category": 'Adjectives:Weather', "question": "'I love the smell of the air after a [BLANK] rain.'" , "answer": 'refreshing' },
{ "category": 'Adjectives:Weather', "question": "'It's so [BLANK] that I can't feel my fingers.'" , "answer": 'cold' },
{ "category": 'Adjectives:Weather', "question": "'The sun is so [BLANK] that it's hard to see.'" , "answer": 'bright' },
{ "category": "Adjectives:Weather", "question": "'It's so [BLANK] that I can't even wear a T-shirt.'" , "answer": 'hot' },
{ "category": "Adjectives:Weather", "question": "'The wind is so [BLANK] that it's hard to walk.'" , "answer": 'strong' },
{ "category": "Adjectives:Weather", "question": "'It's so [BLANK] that I can't see my hand in front of my face.'" , "answer": 'foggy' },
{ "category": "Adjectives:Weather", "question": "'The rain is so [BLANK] that I'm getting soaked.'" , "answer": 'heavy' },
{ "category": "Adjectives:Weather", "question": "'The snow is so [BLANK] that I can't even see the ground.'" , "answer": 'deep' },
{ "category": "Adjectives:Weather", "question": "'It's so [BLANK] that I'm wearing two sweaters.'" , "answer": 'cold' },
{ "category": "Adjectives:Weather", "question": "'The sun is so [BLANK] that it's making my eyes water.'" , "answer": 'bright' },
{ "category": "Adjectives:Weather", "question": "'The sky is so [BLANK] that it looks like it's going to rain.'" , "answer": 'grey|dark|overcast' },
{ "category": "Adjectives:Weather", "question": "'The wind is so [BLANK] that it's making the trees sway.'" , "answer": 'gusty|strong' },
{ "category": "Adjectives:Weather", "question": "'The snow is so [BLANK] that it's making the roads slippery.'" , "answer": 'icy' },
{ "category": "Adjectives:Weather", "question": "'It's so [BLANK] that I'm going to stay inside.'" , "answer": 'rainy' },
{ "category": "Adjectives:Weather", "question": "'The sun is so [BLANK] that it's making the flowers bloom.'" , "answer": 'warm' },
{ "category": "Adjectives:Weather", "question": "'The sky is so [BLANK] that it looks like it's going to be a beautiful day.'" , "answer": 'clear' },

//
{ "category": "Adjectives:Business", "question": "'Our company is [BLANK] with the latest technologies.'" , "answer": 'innovating|modernizing|up-to-date|leading|current|familiar' },
{ "category": "Adjectives:Business", "question": "'We offer a [BLANK] range of products and services.'" , "answer": 'diverse|comprehensive|wide' },
{ "category": "Adjectives:Business", "question": "'Our team is [BLANK] and experienced.'" , "answer": 'professional|well-respected|skilled' },
{ "category": "Adjectives:Business", "question": "'We provide [BLANK] customer service.'" , "answer": 'excellent|indidualized' },
{ "category": "Adjectives:Business", "question": "'Our products are [BLANK] and affordable.'" , "answer": 'reliable|high-quality' },
{ "category": "Adjectives:Business", "question": "'We are a [BLANK] company.'" , "answer": 'reliable' },
{ "category": "Adjectives:Business", "question": "'We offer [BLANK] solutions.'" , "answer": 'innovative|digital|comprehensive|unbeatable' },
{ "category": "Adjectives:Business", "question": "'Our company is [BLANK] in the market.'" , "answer": 'well-established' },
{ "category": "Adjectives:Business", "question": "'We are committed to [BLANK] our customers.'" , "answer": 'satisfying' },
{ "category": "Adjectives:Business", "question": "'We strive to provide a [BLANK] work environment.'" , "answer": 'positive' },
{ "category": "Adjectives:Business", "question": "'Our company is [BLANK] on social responsibility.'" , "answer": 'focused' },
{ "category": "Adjectives:Business", "question": "'We offer [BLANK] opportunities for growth.'" , "answer": 'exciting|some|comprehensive|' },
{ "category": "Adjectives:Business", "question": "'Our company is [BLANK] for its commitment to sustainability.'" , "answer": 'well-known|recognized' },
{
    "category": "Adjectives:Business",
    "question": "'Our company is [BLANK] in providing innovative solutions to our customers.'",
    "answer": "pioneering"
  },
  {
    "category": "Adjectives:Business",
    "question": "'We offer a [BLANK] range of products and services catering to diverse needs.'",
    "answer": "comprehensive"
  },
  {
    "category": "Adjectives:Business",
    "question": "'Our team of [BLANK] professionals is dedicated to exceeding customer expectations.'",
    "answer": "experienced|dedicated"
  },
  {
    "category": "Adjectives:Business",
    "question": "'We are committed to providing [BLANK] customer service that goes above and beyond.'",
    "answer": "exceptional|excellent|outstanding|unparalleled|unmatched|quality|comprehensive|superior|top-notch|world-class"
  },
  {
    "category": "Adjectives:Business",
    "question": "'Our products are renowned for their [BLANK] quality and durability.'",
    "answer": "uncompromising|unparalleled"
  },
  {
    "category": "Adjectives:Business",
    "question": "'Our company has established a [BLANK] reputation for excellence in the industry.'",
    "answer": "stellar|unparalleled"
  },
  {
    "category": "Adjectives:Business",
    "question": "'We constantly strive to implement [BLANK] solutions that streamline our operations.'",
    "answer": "efficient"
  },
  {
    "category": "Adjectives:Business",
    "question": "'Our company is [BLANK] in the market for its innovative approach to product development.'",
    "answer": "forerunner"
  },
  {
    "category": "Adjectives:Business",
    "question": "'We are committed to [BLANK] our customers with transparent and ethical practices.'",
    "answer": "upholding"
  },
  {
    "category": "Adjectives:Business",
    "question": "'We strive to foster a [BLANK] work environment that promotes collaboration and creativity.'",
    "answer": "supportive|modern|positive|healthy|inclusive|welcoming|friendly|professional|safe|diverse"
  },
  {
    "category": "Adjectives:Business",
    "question": "'Our company is [BLANK] for its commitment to social responsibility and environmental sustainability.'",
    "answer": "renowned|commendable"
  },
  {
    "category": "Adjectives:Business",
    "question": "'We offer [BLANK] opportunities for growth and professional development within our organization.'",
    "answer": "ample|many|a lot of|"
  },
  {
    "category": "Adjectives:Business",
    "question": "'Our company is [BLANK] for its commitment to providing exceptional service to its customers.'",
    "answer": "renowned|recognized|known|famous|well known"
  },



//

{
  category: 'Questions:Pharmacy ',
  question: "How do you ask if a specific medication is available?",
  answer: "Do you have [Medication Name] in stock?"
  },
  
  {
  category: 'Questions:Pharmacy ',
  question: "What is a way to inquire about the side effects of a medication?",
  answer: "What are the possible side effects of this medication?"
  },
  
  {
  category: 'Questions:Pharmacy ',
  question: "How can you ask about the correct dosage of a medicine?",
  answer: "What is the recommended dosage for this medicine?"
  },
  
  {
  category: 'Questions:Pharmacy ',
  question: "What is a polite way to ask for a generic alternative to a branded drug?",
  answer: "Is there a generic version available for this brand-name drug?"
  },
  
  {
  category: 'Questions:Pharmacy ',
  question: "How do you inquire about the interaction of a new medication with current ones?",
  answer: "Will this new medication interact with the other medications I'm currently taking?"
  },
  
  {
  category: 'Questions:Pharmacy ',
  question: "What is a way to ask about the storage instructions for a medication?",
  answer: "How should I store this medication?"
  }
  ,
  {
  category: 'Questions:Pharmacy ',
  question: "How can you ask about the expiration date of a medication?",
  answer: "What is the expiration date of this medication?"
  },
  
  {
  category: 'Questions:Pharmacy ',
  question: "How do you ask if a prescription is ready for pickup?",
  answer: "Is my prescription ready for pickup?"
  },
  
  {
  category: 'Questions:Pharmacy ',
  question: "What is a way to inquire about over-the-counter alternatives to a prescription?",
  answer: "Are there any over-the-counter alternatives to this prescription?"
  },
  
  {
  category: 'Questions:Pharmacy ',
  question: "How can you ask about the best time to take a medication?",
  answer: "When is the best time of day to take this medication?"
  },
  {
    category: 'Questions:Pharmacy ',
    question: "How do you ask about the cost of a medication without insurance?",
    answer: "How much does this medication cost without insurance?"
    },
    
    {
    category: 'Questions:Pharmacy ',
    question: "What is a way to inquire if a medication is safe for children?",
    answer: "Is this medication safe for children?"
    },
    
    {
    category: 'Questions:Pharmacy ',
    question: "How can you ask about the renewal process for a prescription?",
    answer: "How do I go about renewing this prescription?"
    },
    
    {
    category: 'Questions:Pharmacy ',
    question: "What is a polite way to ask if a pharmacist can recommend something for a common ailment?",
    answer: "Can you recommend something for a common cold?"
    },
    
    {
    category: 'Questions:Pharmacy ',
    question: "How do you inquire about the availability of a flu vaccine?",
    answer: "Do you have the flu vaccine available here?"
    },
    
    {
    category: 'Questions:Pharmacy ',
    question: "What is a way to ask about special instructions for taking a medication?",
    answer: "Are there any special instructions I should follow when taking this medication?"
    },
    
    {
    category: 'Questions:Pharmacy ',
    question: "How can you ask about the refund or return policy for medications?",
    answer: "What is your policy on medication refunds or returns?"
    },
    
    {
    category: 'Questions:Pharmacy ',
    question: "How do you ask if a medication is covered by your insurance?",
    answer: "Is this medication covered by my insurance plan?"
    },
    
    {
    category: 'Questions:Pharmacy ',
    question: "What is a way to inquire about alternative therapies or supplements?",
    answer: "Can you suggest any alternative therapies or supplements for my condition?"
    },
    
    {
    category: 'Questions:Pharmacy ',
    question: "How can you ask about the procedure for transferring a prescription from another pharmacy?",
    answer: "What is the process for transferring a prescription from another pharmacy to here?"
    },

///////////////////////////////////////
{
  category: 'Questions:Medical Clinic ',
  question: "How do you ask about the wait time for an appointment?",
  answer: "What is the current wait time for an appointment?"
  },
  
  {
  category: 'Questions:Medical Clinic ',
  question: "What is a way to inquire about the availability of a specific doctor?",
  answer: "Is Dr. [Doctor's Name] available for appointments this week?"
  },
  
  {
  category: 'Questions:Medical Clinic ',
  question: "How can you ask about the necessary documents for a clinic visit?",
  answer: "What documents should I bring for my visit?"
  },
  
  {
  category: 'Questions:Medical Clinic ',
  question: "What is a polite way to ask about the clinic's hours of operation?",
  answer: "Could you please tell me the clinic's hours of operation?"
  },
  
  {
  category: 'Questions:Medical Clinic ',
  question: "How do you inquire about the types of services offered at the clinic?",
  answer: "What types of medical services do you offer here?"
  },
  
  {
  category: 'Questions:Medical Clinic ',
  question: "What is a way to ask about the cost of a consultation without insurance?",
  answer: "How much does a consultation cost for someone without insurance?"
  },
  
  {
  category: 'Questions:Medical Clinic ',
  question: "How can you ask about the procedure for getting a lab test done?",
  answer: "What is the procedure for getting a lab test done here?"
  },
  
  {
  category: 'Questions:Medical Clinic ',
  question: "How do you ask if the clinic offers telemedicine services?",
  answer: "Do you offer telemedicine services for consultations?"
  },

{
category: 'Questions:Medical Clinic ',
question: "What is a way to inquire about the follow-up procedure after a visit?",
answer: "What are the follow-up procedures after today's visit?"
},

{
category: 'Questions:Medical Clinic ',
question: "How can you ask about the availability of emergency services at the clinic?",
answer: "Do you provide emergency services here?"
},


{
category: 'Questions:Medical Clinic ',
question: "How do you ask about the confidentiality of medical records?",
answer: "Can you tell me about the confidentiality policy for medical records here?"
},

{
category: 'Questions:Medical Clinic ',
question: "What is a way to inquire about vaccination services?",
answer: "Do you offer vaccination services at this clinic?"
},

{
category: 'Questions:Medical Clinic ',
question: "How can you ask if the clinic accepts walk-in appointments?",
answer: "Do you accept walk-in appointments or do I need to schedule in advance?"
},

{
category: 'Questions:Medical Clinic ',
question: "What is a polite way to ask about the experience of a specific doctor?",
answer: "Could you tell me about Dr. [Doctor's Name]'s experience and specialization?"
}
,
{
category: 'Questions:Medical Clinic ',
question: "How do you inquire about the availability of specialist referrals?",
answer: "Can this clinic provide referrals to specialists if needed?"
},

{
category: 'Questions:Medical Clinic ',
question: "What is a way to ask about the process for a routine check-up?",
answer: "What does the process for a routine check-up involve?"
},

{
category: 'Questions:Medical Clinic ',
question: "How can you ask about the insurance plans accepted by the clinic?",
answer: "Which insurance plans are accepted by your clinic?"
},

{
category: 'Questions:Medical Clinic ',
question: "How do you ask about the availability of mental health services?",
answer: "Do you provide mental health services at this clinic?"
},

{
category: 'Questions:Medical Clinic ',
question: "What is a way to inquire about prenatal care services?",
answer: "Do you offer prenatal care services?"
},

{
category: 'Questions:Medical Clinic ',
question: "How can you ask about the clinic's policy on missed appointments?",
answer: "What is your policy on missed or late appointments?"
},

////////////////////////
{
  category: 'Questions:Travel',
  question: "How do you ask if a reservation is necessary?",
  answer: "Do I need to make a reservation to dine here?"
  },
  
  {
  category: 'Questions:Travel',
  question: "What is a way to inquire about the restaurant's specialty or best dishes?",
  answer: "What are the specialty dishes or best items on the menu?"
  },
  
  {
  category: 'Questions:Travel',
  question: "How can you ask about vegetarian or vegan options on the menu?",
  answer: "Do you have vegetarian or vegan options available?"
  },
  
  {
  category: 'Questions:Travel',
  question: "What is a polite way to request recommendations from the server?",
  answer: "Could you recommend something from the menu?"
  },
  
  {
  category: 'Questions:Travel',
  question: "How do you inquire about possible allergens in a dish?",
  answer: "Are there any allergens, like nuts or dairy, in this dish?"
  },
  
  {
  category: 'Questions:Travel',
  question: "What is a way to ask about the portion sizes of the dishes?",
  answer: "What are the portion sizes like for these dishes?"
  },
  
  {
  category: 'Questions:Travel',
  question: "How can you ask about the availability of a kids' menu?",
  answer: "Do you have a kids' menu?"
  },
  
  {
  category: 'Questions:Travel',
  question: "How do you ask about the dress code of the restaurant?",
  answer: "Is there a dress code for dining in this restaurant?"
  },
  
  {
  category: 'Questions:Travel',
  question: "What is a way to inquire about the restaurant's busiest times?",
  answer: "When are the busiest times at this restaurant?"
  },
  
  {
  category: 'Questions:Travel',
  question: "How can you ask about the availability of outdoor seating?",
  answer: "Do you have outdoor seating available?"
  },

  {
    category: 'Questions:Travel',
    question: "How do you ask if the restaurant offers any special promotions or happy hour deals?",
    answer: "Are there any special promotions or happy hour deals currently available?"
    },
    
    {
    category: 'Questions:Travel',
    question: "What is a way to inquire about the origin of the ingredients used?",
    answer: "Could you tell me about the source of your ingredients? Are they locally sourced?"
    },
    
    {
    category: 'Questions:Travel',
    question: "How can you ask about the options for people with dietary restrictions?",
    answer: "What options do you have for people with dietary restrictions like gluten intolerance?"
    },
    
    {
    category: 'Questions:Travel',
    question: "What is a polite way to ask if a dish can be customized?",
    answer: "Is it possible to customize a dish, for example, to make it less spicy?"
    },
    
    {
    category: 'Questions:Travel',
    question: "How do you inquire about the availability of alcohol or a wine list?",
    answer: "Do you serve alcohol here, and can I see the wine list?"
    },
    
    {
    category: 'Questions:Travel',
    question: "What is a way to ask about the average wait time for a table?",
    answer: "What is the average wait time for a table during dinner hours?"
    },
    
    {
    category: 'Questions:Travel',
    question: "How can you ask if the restaurant can accommodate large groups or events?",
    answer: "Can this restaurant accommodate large groups or events?"
    },
    
    {
    category: 'Questions:Travel',
    question: "How do you ask about the payment methods accepted?",
    answer: "Which payment methods do you accept?"
    },
    
    {
    category: 'Questions:Travel',
    question: "What is a way to inquire about the chef's special or today's special?",
    answer: "What is the chef's special or today's special on the menu?"
    },
    
    {
    category: 'Questions:Travel',
    question: "How can you ask if the restaurant has a quiet area or private dining options?",
    answer: "Do you have a quiet area or offer private dining options?"
    },
{
category: 'Questions:Travel',
question: "How do you ask for the location of the nearest ATM?",
answer: "Where is the nearest ATM?"
},

{
category: 'Questions:Travel',
question: "What is a way to inquire about the best time to visit a particular attraction?",
answer: "When is the best time to visit [Attraction Name]?"
},

{
category: 'Questions:Travel',
question: "How can you ask about local emergency services and contact numbers?",
answer: "What are the local emergency service numbers I should know about?"
},

{
category: 'Questions:Travel',
question: "What is a polite way to ask about language barriers and communication?",
answer: "Do many people speak English here, or should I use a translation app?"
},

{
category: 'Questions:Travel',
question: "How do you inquire about the best places for shopping?",
answer: "Where are the best places to go shopping around here?"
},

{
category: 'Questions:Travel',
question: "What is a way to ask about local festivals or events happening during your stay?",
answer: "Are there any local festivals or events happening during my stay?"
},

{
category: 'Questions:Travel',
question: "How can you ask about visa and entry requirements?",
answer: "Can you tell me about the visa and entry requirements for travelers?"
},

{
category: 'Questions:Travel',
question: "How do you ask if tap water is safe to drink?",
answer: "Is the tap water safe to drink here?"
},

{
category: 'Questions:Travel',
question: "What is a way to inquire about the availability of tour guides?",
answer: "Are there tour guides available for hire in this area?"
},

{
category: 'Questions:Travel',
question: "How can you ask about the reliability of internet connectivity in a location?",
answer: "How reliable is the internet connectivity in this area?"
},

{
category: 'Questions:Travel',
question: "How do you ask for directions to a famous landmark?",
answer: "Can you tell me how to get to [Landmark Name]?"
},

{
category: 'Questions:Travel',
question: "What is a way to inquire about local public transportation options?",
answer: "What are the public transportation options available here?"
},

{
category: 'Questions:Travel',
question: "How can you ask about the best local restaurants?",
answer: "Where are the best local restaurants located?"
},

{
category: 'Questions:Travel',
question: "What is a polite way to ask for recommendations for sightseeing?",
answer: "Could you recommend some must-see places around here?"
},

{
category: 'Questions:Travel',
question: "How do you inquire about the safety of a particular area?",
answer: "Is this area safe for tourists?"
},

{
category: 'Questions:Travel',
question: "What is a way to ask about the currency exchange rate?",
answer: "What is the current exchange rate for [Your Currency]?"
},

{
category: 'Questions:Travel',
question: "How can you ask about the availability of Wi-Fi in a hotel or café?",
answer: "Do you have Wi-Fi available here, and if so, what is the password?"
},

{
category: 'Questions:Travel',
question: "How do you ask if it's necessary to tip in restaurants or taxis?",
answer: "Is it customary to tip in restaurants and taxis here?"
},

{
category: 'Questions:Travel',
question: "What is a way to inquire about local customs or cultural norms?",
answer: "Are there any local customs or cultural norms I should be aware of?"
},

{
category: 'Questions:Travel',
question: "How can you ask about the operating hours of a museum or attraction?",
answer: "What are the operating hours for [Museum/Attraction Name]?"
},


{
category: 'Questions:Travel',
question: "How do you ask about the check-in and check-out times?",
answer: "What are the check-in and check-out times?"
},

{
category: 'Questions:Travel',
question: "What is a way to inquire about the availability of room service?",
answer: "Do you offer room service, and if so, what are the hours?"
},

{
category: 'Questions:Travel',
question: "How can you ask about the hotel's amenities, like a pool or gym?",
answer: "What amenities are available at the hotel, such as a pool or gym?"
},

{
category: 'Questions:Travel',
question: "What is a polite way to request extra items, like towels or pillows?",
answer: "Could I request a few extra towels/pillows for my room, please?"
},

{
category: 'Questions:Travel',
question: "How do you inquire about the Wi-Fi password?",
answer: "What is the Wi-Fi password?"
},

{
category: 'Questions:Travel',
question: "What is a way to ask about the hotel's policy on pets?",
answer: "Is this hotel pet-friendly, and if so, what are the policies regarding pets?"
},

{
category: 'Questions:Travel',
question: "How can you ask if the hotel offers shuttle services?",
answer: "Do you provide shuttle services to nearby attractions or the airport?"
},

{
category: 'Questions:Travel',
question: "How do you ask about the options for breakfast at the hotel?",
answer: "What are the breakfast options available here?"
},

{
category: 'Questions:Travel',
question: "What is a way to inquire about the security features of the hotel?",
answer: "Can you tell me about the security features of the hotel?"
},

{
category: 'Questions:Travel',
question: "How can you ask about nearby tourist attractions?",
answer: "Can you recommend any tourist attractions close to the hotel?"
},


{
category: 'Questions:Travel',
question: "How do you ask if the hotel provides laundry services?",
answer: "Does the hotel offer laundry services?"
},

{
category: 'Questions:Travel',
question: "What is a way to inquire about the hotel's cancellation policy?",
answer: "What is the hotel's cancellation policy?"
},

{
category: 'Questions:Travel',
question: "How can you ask about the availability of non-smoking rooms?",
answer: "Do you have non-smoking rooms available?"
},

{
category: 'Questions:Travel',
question: "What is a polite way to request a room with a view?",
answer: "Is it possible to get a room with a good view?"
},

{
category: 'Questions:Travel',
question: "How do you inquire about the facilities for disabled guests?",
answer: "What facilities do you have for guests with disabilities?"
},

{
category: 'Questions:Travel',
question: "What is a way to ask about the hotel's environmental or sustainability practices?",
answer: "Can you tell me about the hotel's environmental or sustainability practices?"
},

{
category: 'Questions:Travel',
question: "How can you ask if the hotel has a business center or meeting rooms?",
answer: "Does the hotel have a business center or meeting rooms?"
},

{
category: 'Questions:Travel',
question: "How do you ask about the possibility of early check-in or late check-out?",
answer: "Is early check-in or late check-out an option?"
},

{
category: 'Questions:Travel',
question: "What is a way to inquire about the hotel's policy on extra beds or cribs for children?",
answer: "What is your policy on providing extra beds or cribs for children?"
},

{
category: 'Questions:Travel',
question: "How can you ask about discounts or loyalty program benefits?",
answer: "Are there any discounts or loyalty program benefits available?"
},




////////////
{
  category: 'Questions:Projects',
  question: "How do you ask about the budget allocated for a project?",
  answer: "What is the budget allocated for this project?"
  },
  
  {
  category: 'Questions:Projects',
  question: "What is a way to inquire about the key milestones of a project?",
  answer: "Can you outline the key milestones for this project?"
  },
  
  {
  category: 'Questions:Projects',
  question: "How can you ask about the criteria for success of a project?",
  answer: "What are the criteria for the success of this project?"
  },
  
  {
  category: 'Questions:Projects',
  question: "What is a polite way to ask about the challenges faced in a project?",
  answer: "What challenges are we facing in this project?"
  },
  
  {
  category: 'Questions:Projects',
  question: "How do you inquire about the decision-making process for a project?",
  answer: "How will decisions be made for this project?"
  },
  
  {
  category: 'Questions:Projects',
  question: "What is a way to ask about the communication plan for a project?",
  answer: "What is our communication plan for this project?"
  },
  
  {
  category: 'Questions:Projects',
  question: "How can you ask for the stakeholder's expectations for a project?",
  answer: "What are the stakeholder's expectations for this project?"
  },
  
  {
  category: 'Questions:Projects',
  question: "How do you ask about the dependencies between tasks in a project?",
  answer: "What are the dependencies between the various tasks in this project?"
  },
  
  {
  category: 'Questions:Projects',
  question: "What is a way to ask about the project's alignment with company goals?",
  answer: "How does this project align with the company's overall goals?"
  },
  
  {
  category: 'Questions:Projects',
  question: "How can you inquire about the review and approval process for project deliverables?",
  answer: "What is the review and approval process for the project's deliverables?"
  },

{
  category: 'Questions:Projects',
  question: "How do you ask about the overall timeline of a project?",
  answer: "What is the expected timeline for this project?"
  },
  
  {
  category: 'Questions:Projects',
  question: "What is a way to inquire about specific roles and responsibilities in a project?",
  answer: "Can you clarify the roles and responsibilities of each team member in this project?"
  },
  
  {
  category: 'Questions:Projects',
  question: "How can you ask for updates on a project's progress?",
  answer: "Can you provide an update on how the project is progressing?"
  },
  
  {
  category: 'Questions:Projects',
  question: "What is a polite way to ask about potential risks in a project?",
  answer: "What are the potential risks associated with this project?"
  },
  
  {
  category: 'Questions:Projects',
  question: "How do you inquire about the resources needed for a project?",
  answer: "What resources will we need to successfully complete this project?"
  },
  
  {
  category: 'Questions:Projects',
  question: "What is a way to ask about the priority of different aspects of a project?",
  answer: "Which aspects of the project should we prioritize?"
  },
  
  {
  category: 'Questions:Projects',
  question: "How can you ask about the expected outcomes of a project?",
  answer: "What are the expected outcomes or deliverables of this project?"
  },
  
  {
  category: 'Questions:Projects',
  question: "How do you ask for feedback on a project proposal?",
  answer: "Could you give me your feedback on this project proposal?"
  },
  
  {
  category: 'Questions:Projects',
  question: "What is a way to ask about the feasibility of a project idea?",
  answer: "How feasible do you think this project idea is?"
  },
  
  {
  category: 'Questions:Projects',
  question: "How can you inquire about the impact of a project on other teams?",
  answer: "What impact will this project have on other teams within the organization?"
  },

{
  category: 'Questions',
  question: "How do you inquire about someone's well-being?",
  answer: "How are you doing today?"
  },
  
  {
    category: 'Generic Questions',
    question: "How do you ask someone if they have finished a task?",
    answer: "Have you finished that task yet?"
    },
    
    {
    category: 'Generic Questions',
    question: "What is a way to inquire if someone understands a concept or explanation?",
    answer: "Do you understand what I'm saying?"
    },
    
    {
    category: 'Generic Questions',
    question: "How can you ask someone if they need assistance?",
    answer: "Do you need any help with that?"
    },
    
    {
    category: 'Generic Questions',
    question: "What is a polite way to ask if someone agrees with a decision?",
    answer: "Do you agree with this decision?"
    },
    
    {
    category: 'Generic Questions',
    question: "How do you inquire if someone is going to attend an event?",
    answer: "Are you going to the event this weekend?"
    },
    
    {
    category: 'Generic Questions',
    question: "What is a way to ask if someone has made a decision?",
    answer: "Have you made a decision yet?"
    },
    
    {
    category: 'Generic Questions',
    question: "How can you ask someone if they have seen a recent movie?",
    answer: "Have you seen the new movie that just came out?"
    },
    
    {
    category: 'Generic Questions',
    question: "How do you ask if someone can hear you?",
    answer: "Can you hear me?"
    },
    
    {
    category: 'Generic Questions',
    question: "What is a way to inquire if someone has visited a certain place before?",
    answer: "Have you ever been to [Place Name] before?"
    },
    
    {
    category: 'Generic Questions',
    question: "How can you ask if someone remembers a particular event or person?",
    answer: "Do you remember [Event/Person]?"
    },
    {
      category: 'Questions:WH words',
      question: "What is a way to ask about choosing from different options?",
      answer: "What should we choose, the blue one or the red one?"
      },
      
      {
      category: 'Questions:WH words',
      question: "How do you ask about a location's specifics?",
      answer: "Where is the nearest grocery store?"
      },
      
      {
      category: 'Questions:WH words',
      question: "What is a way to inquire about a person's identity in a specific context?",
      answer: "Who is in charge of this department?"
      },
      
      {
      category: 'Questions:WH words',
      question: "How can you ask about the timing of an event?",
      answer: "When does the concert start?"
      },
      
      {
      category: 'Questions:WH words',
      question: "What is a polite way to ask for the reason behind an action?",
      answer: "Why did you choose this career path?"
      },
      
      {
      category: 'Questions:WH words',
      question: "How do you inquire about the method of doing something?",
      answer: "How can I apply for this job?"
      },
      
      {
      category: 'Questions:WH words',
      question: "What is a way to ask about the quantity of something?",
      answer: "How many pages are in this book?"
      },
      
      {
      category: 'Questions:WH words',
      question: "How can you ask about the cost of something?",
      answer: "How much does this laptop cost?"
      },
      
      {
      category: 'Questions:WH words',
      question: "What is a way to inquire about the frequency of an activity?",
      answer: "How often do you go to the gym?"
      },
      
      {
      category: 'Questions:WH words',
      question: "How do you ask about selecting from a group of items?",
      answer: "Which of these desserts should we order?"
      },
      
      {
category: 'Questions:WH words',
question: "What is a way to ask about the purpose of an object?",
answer: "What is this tool used for?"
},

{
category: 'Questions:WH words',
question: "How do you ask about the location of a specific place within a larger area?",
answer: "Where in the city is the historical museum located?"
},

{
category: 'Questions:WH words',
question: "What is a way to inquire about someone's identity in a group setting?",
answer: "Who among you is the team leader?"
},

{
category: 'Questions:WH words',
question: "How can you ask about the timing of a recurring event?",
answer: "When do the weekly meetings usually take place?"
},

{
category: 'Questions:WH words',
question: "What is a polite way to ask for the reason behind someone's feelings?",
answer: "Why do you seem upset today?"
},

{
category: 'Questions:WH words',
question: "How do you inquire about the process of accomplishing a task?",
answer: "How do we go about completing this application?"
},

{
category: 'Questions:WH words',
question: "What is a way to ask about the number of people involved in an event?",
answer: "How many guests are expected at the wedding?"
},

{
category: 'Questions:WH words',
question: "How can you ask about the price range of services?",
answer: "How much does it typically cost to have a car serviced here?"
},

{
category: 'Questions:WH words',
question: "What is a way to inquire about the regularity of a person's habits?",
answer: "How often do you travel for work?"
},
{
  category: 'Questions:WH words',
  question: "What is a way to ask about the contents of a package or box?",
  answer: "What is inside this box?"
  },
  
  {
  category: 'Questions:WH words',
  question: "How do you ask about the location of a historical event?",
  answer: "Where did the Battle of Hastings take place?"
  },
  
  {
  category: 'Questions:WH words',
  question: "What is a way to inquire about someone responsible for an action?",
  answer: "Who made this beautiful painting?"
  },
  
  {
  category: 'Questions:WH words',
  question: "How can you ask about the timing of a future event?",
  answer: "When will the new shopping mall be opened?"
  },
  
  {
  category: 'Questions:WH words',
  question: "What is a polite way to ask for the reason behind a decision?",
  answer: "Why did you choose to study medicine?"
  },
  
  {
  category: 'Questions:WH words',
  question: "How do you inquire about the way to use a new appliance?",
  answer: "How does this coffee maker work?"
  },
  
  {
  category: 'Questions:WH words',
  question: "What is a way to ask about the amount of time needed for a task?",
  answer: "How long will it take to complete this project?"
  },
  
  {
  category: 'Questions:WH words',
  question: "How can you ask about the cost of a meal at a restaurant?",
  answer: "How much is the total for our meal?"
  },
  

  {
    category: 'Questions:WH words ',
    question: "What is a way to ask about the ingredients in a dish?",
    answer: "What ingredients are in this soup?"
    },
    
    {
    category: 'Questions:WH words ',
    question: "How do you ask about the location of a specific service in a town?",
    answer: "Where can I find a good hair salon in this town?"
    },
    
    {
    category: 'Questions:WH words ',
    question: "What is a way to inquire about the person responsible for a task?",
    answer: "Who is in charge of customer service here?"
    },
    
    {
    category: 'Questions:WH words ',
    question: "How can you ask about the exact time an event will occur?",
    answer: "When does the train leave?"
    },
    
    {
    category: 'Questions:WH words ',
    question: "What is a polite way to ask for the reason behind a rule?",
    answer: "Why do we have to wear badges in the office?"
    },
    
    {
    category: 'Questions:WH words ',
    question: "How do you inquire about the method for solving a problem?",
    answer: "How should we tackle this issue?"
    },
    
    {
    category: 'Questions:WH words ',
    question: "What is a way to ask about the duration of a movie or play?",
    answer: "How long is the movie?"
    },
    
    {
    category: 'Questions:WH words ',
    question: "How can you ask about the expense of a service or product?",
    answer: "How much does this service cost? or How much is it?"
    },
    
    {
      category: 'Questions:WH words ',
      question: "What is a way to ask about the objectives of a meeting?",
      answer: "What are the main objectives of today's meeting?"
      },
      
      {
      category: 'Questions:WH words ',
      question: "How do you ask about the location of a work-related event?",
      answer: "Where is the team-building event being held?"
      },
      
      {
      category: 'Questions:WH words ',
      question: "What is a way to inquire about the person responsible for a report or task?",
      answer: "Who is responsible for submitting the monthly report?"
      },
      
      {
      category: 'Questions:WH words ',
      question: "How can you ask about the timing of a deadline?",
      answer: "When is the deadline for this project?"
      },
      
      {
      category: 'Questions:WH words ',
      question: "What is a polite way to ask for the reason behind a business decision?",
      answer: "Why was it decided to change our marketing strategy?"
      },
      
      {
      category: 'Questions:WH words ',
      question: "How do you inquire about the method for completing a specific task?",
      answer: "How should I go about completing this task efficiently?"
      },
      
      {
      category: 'Questions:WH words ',
      question: "What is a way to ask about the length of a business trip?",
      answer: "How long will the business trip last?"
      },
      
      {
      category: 'Questions:WH words ',
      question: "How can you ask about the cost of a business expense?",
      answer: "How much is allocated for the travel budget?"
      },
      
      {
      category: 'Questions:WH words ',
      question: "What is a way to inquire about the frequency of team meetings?",
      answer: "How often do we have team meetings?"
      },
      
      {
      category: 'Questions:WH words ',
      question: "How do you ask about choosing the right approach for a project?",
      answer: "Which approach should we take for this project?"
      },


      
    {
    category: 'Questions:WH words ',
    question: "What is a way to inquire about the regularity of an event or activity?",
    answer: "How often do these meetings occur?"
    },
    
    {
    category: 'Questions:WH words ',
    question: "How do you ask about selecting the correct answer in a quiz or test?",
    answer: "Which answer is correct for question number 5?"
    },
    {
      category: 'Questions:WH words ',
      question: "What is a way to ask about the purpose of a new company policy?",
      answer: "What is the purpose behind the new company policy?"
      },
      
      {
      category: 'Questions:WH words ',
      question: "How do you ask about the location for an upcoming company event?",
      answer: "Where is the next company outing going to be held?"
      },
      
      {
      category: 'Questions:WH words ',
      question: "What is a way to inquire about the person managing a particular project?",
      answer: "Who is managing the client project this quarter?"
      },
      
      {
      category: 'Questions:WH words ',
      question: "How can you ask about the time allocated for a lunch break?",
      answer: "When is our lunch break scheduled?"
      },
      
      {
      category: 'Questions:WH words ',
      question: "What is a polite way to ask for the reason behind a sudden meeting?",
      answer: "Why was the emergency meeting called?"
      },
      
      {
      category: 'Questions:WH words ',
      question: "How do you inquire about the method for accessing company resources?",
      answer: "How can I access the company's online resource library?"
      },
      
      {
      category: 'Questions:WH words ',
      question: "What is a way to ask about the duration of a training session?",
      answer: "How long will the training session last?"
      },
      
      {
      category: 'Questions:WH words ',
      question: "How can you ask about the expense of office supplies?",
      answer: "How much are we spending on office supplies monthly?"
      },
      
      {
      category: 'Questions:WH words ',
      question: "What is a way to inquire about the regularity of performance reviews?",
      answer: "How often do performance reviews take place?"
      },
      
      {
      category: 'Questions:WH words ',
      question: "How do you ask about selecting the right software for a task?",
      answer: "Which software should we use for data analysis?"
      },


  {
  category: 'Questions:WH words',
  question: "What is a way to inquire about the frequency of a service?",
  answer: "How often does the cleaning service come?"
  },
  
  {
  category: 'Questions:WH words',
  question: "How do you ask about choosing the right tool for a job?",
  answer: "Which screwdriver should I use for this task?"
  },
{
category: 'Questions:WH words',
question: "How do you ask about making a choice among options in a survey?",
answer: "Which option should I choose on this feedback form?"
},



  {
  category: 'Questions',
  question: "What is a way to ask for the time?",
  answer: "What time is it?"
  },
  
  {
  category: 'Questions',
  question: "How can you ask if a store is open?",
  answer: "Is the store open right now?"
  },
  
  {
  category: 'Questions',
  question: "What is a polite way to ask where the bathroom is?",
  answer: "Could you tell me where the bathroom is, please?"
  },
  
  {
  category: 'Questions',
  question: "How do you ask about the price of an item?",
  answer: "How much does this cost?"
  },
  
  {
  category: 'Questions',
  question: "What is a way to ask if someone speaks English?",
  answer: "Do you speak English?"
  },
  
  {
  category: 'Questions',
  question: "How can you ask for directions to the train station?",
  answer: "Can you direct me to the nearest train station?"
  },
  
  {
  category: 'Questions',
  question: "How do you inquire about the weather tomorrow?",
  answer: "What will the weather be like tomorrow?"
  },
  
  {
  category: 'Questions',
  question: "What is a way to ask if a meal contains nuts?",
  answer: "Does this dish contain any nuts?"
  },
  
  {
  category: 'Questions',
  question: "How can you ask someone if they need help?",
  answer: "Do you need any help?"
  },

  {
    category: 'Questions',
    question: "How do you inquire about someone's well-being?",
    answer: "How are you doing today?"
    },
    
    {
    category: 'Questions',
    question: "What is a way to ask for the time?",
    answer: "What time is it?"
    },
    
    {
    category: 'Questions',
    question: "How can you ask if a store is open?",
    answer: "Is the store open right now?"
    },
    
    {
    category: 'Questions',
    question: "What is a polite way to ask where the bathroom is?",
    answer: "Could you tell me where the bathroom is, please?"
    },
    
    {
    category: 'Questions',
    question: "How do you ask about the price of an item?",
    answer: "How much does this cost?"
    },
    
    {
    category: 'Questions',
    question: "What is a way to ask if someone speaks English?",
    answer: "Do you speak English?"
    },
    
    {
    category: 'Questions',
    question: "How can you ask for directions to the train station?",
    answer: "Can you direct me to the nearest train station?"
    },
    
    {
    category: 'Questions',
    question: "How do you inquire about the weather tomorrow?",
    answer: "What will the weather be like tomorrow?"
    },
    
    {
    category: 'Questions',
    question: "What is a way to ask if a meal contains nuts?",
    answer: "Does this dish contain any nuts?"
    },
    
    {
    category: 'Questions',
    question: "How can you ask someone if they need help?",
    answer: "Do you need any help?"
    },

    {
      category: 'Questions:WH words ',
      question: "What is a way to ask about the objectives for a new project?",
      answer: "What are our key objectives for this new project?"
      },
      
      {
      category: 'Questions:WH words ',
      question: "How do you ask about the location of a specific department in the office?",
      answer: "Where is the marketing department located in the office?"
      },
      
      {
      category: 'Questions:WH words ',
      question: "What is a way to inquire about the person responsible for IT support?",
      answer: "Who is in charge of IT support here?"
      },
      
      {
      category: 'Questions:WH words ',
      question: "How can you ask about the timing for submitting an annual report?",
      answer: "When is the annual report due?"
      },
      
      {
      category: 'Questions:WH words ',
      question: "What is a polite way to ask for the reason behind a new workflow process?",
      answer: "Why are we changing to this new workflow process?"
      },
      
      {
      category: 'Questions:WH words ',
      question: "How do you inquire about the method for submitting expense claims?",
      answer: "How do I submit my expense claims?"
      },
      
      {
      category: 'Questions:WH words ',
      question: "What is a way to ask about the length of time to complete a certification course?",
      answer: "How long does it take to complete the certification course?"
      },
      
      {
      category: 'Questions:WH words ',
      question: "How can you ask about the cost of a new office equipment?",
      answer: "How much does the new printer cost?"
      },
      {
        category: 'Questions:WH words ',
        question: "What is a way to ask about the goals of a team building activity?",
        answer: "What are the goals of this team building activity?"
        },
        
        {
        category: 'Questions:WH words ',
        question: "How do you ask about the location for the next company off-site meeting?",
        answer: "Where will our next company off-site meeting be held?"
        },
        
        {
        category: 'Questions:WH words ',
        question: "What is a way to inquire about the person heading a new initiative?",
        answer: "Who is heading the new sustainability initiative?"
        },
        
        {
        category: 'Questions:WH words ',
        question: "How can you ask about the schedule for a recurring team update?",
        answer: "When are our regular team updates scheduled?"
        },
        
        {
        category: 'Questions:WH words ',
        question: "What is a polite way to ask for the reason behind a change in policy?",
        answer: "Why was there a change in the company's vacation policy?"
        },
        
        {
        category: 'Questions:WH words ',
        question: "How do you inquire about the process for reporting technical issues?",
        answer: "How should I report a technical issue I'm experiencing?"
        },
        
        {
        category: 'Questions:WH words ',
        question: "What is a way to ask about the duration of a client project?",
        answer: "How long is the client project expected to last?"
        },
        
        {
        category: 'Questions:WH words ',
        question: "How can you ask about the expense involved in attending a conference?",
        answer: "How much will it cost to attend the industry conference?"
        },
        
        {
        category: 'Questions:WH words ',
        question: "What is a way to inquire about the regularity of inventory checks?",
        answer: "How often do we conduct inventory checks?"
        },
        
        {
        category: 'Questions:WH words ',
        question: "How do you ask about selecting the right vendor for a service?",
        answer: "Which vendor should we choose for our office supplies?"
        },


        {
          category: 'Questions:WH words ',
          question: "What is a way to ask about the purpose of a specific meeting?",
          answer: "What is the purpose of our meeting next Thursday?"
          },
          
          {
          category: 'Questions:WH words ',
          question: "How do you ask about the location where office supplies are stored?",
          answer: "Where do we keep the office supplies, like paper and pens?"
          },
          
          {
          category: 'Questions:WH words ',
          question: "What is a way to inquire about the person handling customer complaints?",
          answer: "Who handles customer complaints in our department?"
          },
          
          {
          category: 'Questions:WH words ',
          question: "How can you ask about the time for an upcoming performance review?",
          answer: "When is my performance review scheduled?"
          },
          
          {
          category: 'Questions:WH words ',
          question: "What is a polite way to ask for the reason behind a sudden project change?",
          answer: "Why was there a sudden change in the project's direction?"
          },
          
          {
          category: 'Questions:WH words ',
          question: "How do you inquire about the method for accessing remote work tools?",
          answer: "How can I access the remote work tools from my home computer?"
          },
          
          {
          category: 'Questions:WH words ',
          question: "What is a way to ask about the length of time for a lunch break?",
          answer: "How long is our lunch break?"
          },
          
          {
            category: 'Questions:WH words ',
            question: "What is a way to ask about the main goals of a negotiation?",
            answer: "What are our main goals for this negotiation?"
            },
            
            {
            category: 'Questions:WH words ',
            question: "How do you ask about the location where the negotiation will take place?",
            answer: "Where will the negotiation meeting be held?"
            },
            
            {
            category: 'Questions:WH words ',
            question: "What is a way to inquire about the person leading the negotiation from the other side?",
            answer: "Who is leading the negotiation on their team?"
            },
            
            {
            category: 'Questions:WH words ',
            question: "How can you ask about the timing of a negotiation deadline?",
            answer: "When is the deadline for concluding these negotiations?"
            },
            
            {
            category: 'Questions:WH words ',
            question: "What is a polite way to ask for the reason behind a counteroffer?",
            answer: "Why did you make this particular counteroffer?"
            },
            
            {
            category: 'Questions:WH words ',
            question: "How do you inquire about the strategy to be used in a negotiation?",
            answer: "How should we approach this negotiation to be successful?"
            },
            
            {
            category: 'Questions:WH words ',
            question: "What is a way to ask about the duration of the negotiation process?",
            answer: "How long do you anticipate the negotiation process will take?"
            },
            
            {
            category: 'Questions:WH words ',
            question: "How can you ask about the financial limits or budget in a negotiation?",
            answer: "How much are we willing to spend in this negotiation?"
            },
            
            {
            category: 'Questions:WH words ',
            question: "What is a way to inquire about the frequency of negotiation sessions?",
            answer: "How often will we be meeting for negotiation sessions?"
            },
            
            {
            category: 'Questions:WH words ',
            question: "How do you ask about determining the right terms in a contract negotiation?",
            answer: "Which terms are we prioritizing in this contract negotiation?"
            },
            {
              category: 'Questions:WH words ',
              question: "What is a way to ask about the objectives of the opposing party in a negotiation?",
              answer: "What do you think are their main objectives in this negotiation?"
              },
              
              {
              category: 'Questions:WH words ',
              question: "How do you ask about the location preference for future negotiation meetings?",
              answer: "Where would be the most convenient location for our next negotiation meeting?"
              },
              
              {
              category: 'Questions:WH words ',
              question: "What is a way to inquire about the key decision-makers in a negotiation?",
              answer: "Who are the key decision-makers in their negotiation team?"
              },
              
              {
              category: 'Questions:WH words ',
              question: "How can you ask about the best time to propose a deal during negotiations?",
              answer: "When is the best time to present our proposal during the negotiation?"
              },
              
              {
              category: 'Questions:WH words ',
              question: "What is a polite way to ask for the rationale behind a negotiation stance?",
              answer: "Why have you decided to take this particular stance in the negotiation?"
              },
              
              {
              category: 'Questions:WH words ',
              question: "How do you inquire about effective negotiation techniques or strategies?",
              answer: "How can we effectively negotiate to achieve our desired outcome?"
              },
              
              {
              category: 'Questions:WH words ',
              question: "What is a way to ask about the expected length of a negotiation session?",
              answer: "How long is today's negotiation session expected to last?"
              },
              
              {
              category: 'Questions:WH words ',
              question: "How can you ask about the budget limitations for a negotiation?",
              answer: "How much budgetary flexibility do we have in this negotiation?"
              },
              
              {
              category: 'Questions:WH words ',
              question: "What is a way to inquire about the regularity of updates during a negotiation process?",
              answer: "How often will we receive updates during the negotiation process?"
              },
              
              {
              category: 'Questions:WH words ',
              question: "How do you ask about selecting the most beneficial terms in a negotiation?",
              answer: "Which terms should we focus on to maximize benefits in this negotiation?"
              },

              {
                category: 'Questions:WH words ',
                question: "What is a way to ask about the main features of a software?",
                answer: "What are the main features of this software?"
                },
                
                {
                category: 'Questions:WH words ',
                question: "How do you ask about the location for accessing software documentation?",
                answer: "Where can I find the documentation for this software?"
                },
                
                {
                category: 'Questions:WH words ',
                question: "What is a way to inquire about the person responsible for software maintenance?",
                answer: "Who is responsible for maintaining this software?"
                },
                
                {
                category: 'Questions:WH words ',
                question: "How can you ask about the timing for the next software update?",
                answer: "When is the next update scheduled for this software?"
                },
                
                {
                category: 'Questions:WH words ',
                question: "What is a polite way to ask for the reason behind a software bug or issue?",
                answer: "Why is this software bug occurring?"
                },
                
                {
                category: 'Questions:WH words ',
                question: "How do you inquire about the process for installing or setting up software?",
                answer: "How do I install or set up this software?"
                },
                
                {
                  category: 'Questions:WH words ',
                  question: "What is a way to ask about compatibility of software with certain hardware?",
                  answer: "What hardware is compatible with this software?"
                  },
                  
                  {
                  category: 'Questions:WH words ',
                  question: "How do you ask about the location where software data is stored?",
                  answer: "Where is the data from this software stored?"
                  },
                  
                  {
                  category: 'Questions:WH words ',
                  question: "What is a way to inquire about the person to contact for technical support?",
                  answer: "Who should I contact for technical support with this software?"
                  },
                  
                  {
                  category: 'Questions:WH words ',
                  question: "How can you ask about the best time to perform system updates?",
                  answer: "When is the best time to perform system updates for this software?"
                  },
                  
                  {
                  category: 'Questions:WH words ',
                  question: "What is a polite way to ask for the reason behind a software feature?",
                  answer: "Why was this particular feature included in the software?"
                  },
                  
                  {
                  category: 'Questions:WH words ',
                  question: "How do you inquire about the steps to troubleshoot a software issue?",
                  answer: "How can I troubleshoot this issue with the software?"
                  },
                  
                  {
                  category: 'Questions:WH words ',
                  question: "What is a way to ask about the duration of software support?",
                  answer: "How long will support be provided for this software version?"
                  },
                  
                  {
                  category: 'Questions:WH words ',
                  question: "How can you ask about the cost of upgrading software?",
                  answer: "How much does it cost to upgrade to the latest version of this software?"
                  },
                  
                  {
                  category: 'Questions:WH words ',
                  question: "What is a way to inquire about the regularity of software maintenance?",
                  answer: "How often is maintenance performed on this software?"
                  },
                  
                  {
                  category: 'Questions:WH words ',
                  question: "How do you ask about choosing the right software for managing a project?",
                  answer: "Which software would be best for managing a large project?"
                  },

                {
                category: 'Questions:WH words ',
                question: "What is a way to ask about the duration of a software trial period?",
                answer: "How long does the trial period last for this software?"
                },
                
                {
                category: 'Questions:WH words ',
                question: "How can you ask about the cost of a software license?",
                answer: "How much does a license for this software cost?"
                },
                
                {
                category: 'Questions:WH words ',
                question: "What is a way to inquire about the frequency of software backups?",
                answer: "How often does this software perform backups?"
                },
                
                {
                category: 'Questions:WH words ',
                question: "How do you ask about determining the right software for a specific task?",
                answer: "Which software is best suited for this particular task?"
                },


          {
          category: 'Questions:WH words ',
          question: "How can you ask about the cost of a new company software?",
          answer: "How much does the new accounting software cost?"
          },
          
          {
          category: 'Questions:WH words ',
          question: "What is a way to inquire about the frequency of safety drills?",
          answer: "How often do we have safety drills?"
          },
          
          {
          category: 'Questions:WH words ',
          question: "How do you ask about choosing the right supplier for a particular product?",
          answer: "Which supplier should we use for our printing needs?"
          },

      {
      category: 'Questions:WH words ',
      question: "What is a way to inquire about the frequency of client meetings?",
      answer: "How often do we meet with clients?"
      },
      
      {
      category: 'Questions:WH words ',
      question: "How do you ask about choosing the right strategy for a marketing campaign?",
      answer: "Which strategy should we choose for the upcoming marketing campaign?"
      },



    {
      category: 'Questions:Workplace',
      question: "How do you ask a colleague for an update on a project?",
      answer: "Can you give me an update on the project status?"
      },
      
      {
      category: 'Questions:Workplace',
      question: "What is a way to inquire about a meeting's schedule?",
      answer: "When is our next team meeting scheduled?"
      }, 
      
      {
      category: 'Questions:Workplace',
      question: "How can you ask for clarification on a task?",
      answer: "Could you please clarify the requirements for this task?"
      },
      
      {
      category: 'Questions:Workplace',
      question: "What is a polite way to ask for a deadline extension?",
      answer: "Is it possible to get an extension on the deadline for this project?"
      },
      
      {
        category: 'Questions:Workplace',
        question: "How do you ask a colleague for their opinion on a project?",
        answer: "What do you think about the approach we're taking with this project?"
        },
        
        {
        category: 'Questions:Workplace',
        question: "What is a way to inquire about the availability of a conference room?",
        answer: "Is the conference room available for a meeting this afternoon?"
        },
        

        {
          category: 'Questions:Workplace',
          question: "How do you ask about the next steps after completing a task?",
          answer: "What are the next steps now that this task is completed?"
          },
          
          {
          category: 'Questions:Workplace',
          question: "What is a way to inquire about the results of a client meeting?",
          answer: "How did the meeting with the client go?"
          },
          
          {
          category: 'Questions:Workplace',
          question: "How can you ask a colleague if they have spare time to assist with a project?",
          answer: "Do you have some time to help me with a project I'm working on?"
          },
          
          {
          category: 'Questions:Workplace',
          question: "What is a polite way to ask for someone's expertise on a subject?",
          answer: "Could I get your expert opinion on this matter?"
          },
          
          {
          category: 'Questions:Workplace',
          question: "How do you ask for the preferred communication method?",
          answer: "What is your preferred method of communication for work-related matters?"
          },
          
          {
          category: 'Questions:Workplace',
          question: "What is a way to ask about changes in a project's scope?",
          answer: "Have there been any changes to the scope of our project?"
          },
          
          {
          category: 'Questions:Workplace',
          question: "How can you inquire about the availability of a team member for a new project?",
          answer: "Are you available to take on a new project in the coming weeks?"
          },
          
          {
          category: 'Questions:Workplace',
          question: "How do you ask about the effectiveness of a new workflow?",
          answer: "How effective has the new workflow been in improving our productivity?"
          },
          
          {
          category: 'Questions:Workplace',
          question: "What is a way to ask for suggestions for improving a process?",
          answer: "Do you have any suggestions on how we could improve this process?"
          },
          
          {
          category: 'Questions:Workplace',
          question: "How can you ask about the status of a pending approval?",
          answer: "What's the status of the approval for my request?"
          },
        {
        category: 'Questions:Workplace',
        question: "How can you ask about the company's policy on remote work?",
        answer: "What is our company's policy on remote working?"
        },
        
        {
        category: 'Questions:Workplace',
        question: "What is a polite way to ask a manager for a one-on-one meeting?",
        answer: "Could we schedule a one-on-one meeting sometime this week?"
        },
        
        {
        category: 'Questions:Workplace',
        question: "How do you ask for information about annual leave policies?",
        answer: "Could you tell me more about our annual leave policy?"
        },
        
        {
        category: 'Questions:Workplace',
        question: "What is a way to request technical support?",
        answer: "Who can I contact for technical support with my computer?"
        },
        
        {
        category: 'Questions:Workplace',
        question: "How can you ask a coworker about the status of a shared resource?",
        answer: "Do you know if the printer is working now?"
        },
        
        {
        category: 'Questions:Workplace',
        question: "How do you inquire about the agenda for a meeting?",
        answer: "What's on the agenda for our meeting today?"
        },
        
        {
        category: 'Questions:Workplace',
        question: "What is a way to ask if anyone has objections to a proposal?",
        answer: "Does anyone have any concerns or objections to this proposal?"
        },
        
        {
        category: 'Questions:Workplace',
        question: "How can you ask about the procedure for filing expense reports?",
        answer: "Can you explain how to file an expense report?"
        },

        {
          category: 'Questions:Workplace',
          question: "How do you ask for the deadline of a report?",
          answer: "When is the deadline for submitting this report?"
          },
          
          {
          category: 'Questions:Workplace',
          question: "What is a way to ask about the dress code for a company event?",
          answer: "What is the dress code for the upcoming company event?"
          },
          
          {
          category: 'Questions:Workplace',
          question: "How can you inquire about the process for requesting equipment?",
          answer: "What is the process for requesting new equipment or supplies?"
          },
          
          {
          category: 'Questions:Workplace',
          question: "What is a polite way to ask someone to review a document?",
          answer: "Could you take a look at this document and give me your feedback?"
          },
          
          {
          category: 'Questions:Workplace',
          question: "How do you ask if there are any updates from a recent meeting?",
          answer: "Were there any important updates from the meeting I missed?"
          },
          
          {
          category: 'Questions:Workplace',
          question: "What is a way to ask a coworker if they need support with their workload?",
          answer: "Do you need any assistance with your current workload?"
          },
          
          {
          category: 'Questions:Workplace',
          question: "How can you ask about the status of an IT issue?",
          answer: "Has the IT issue been resolved yet?"
          },
          
          {
          category: 'Questions:Workplace',
          question: "How do you inquire about opportunities for professional development?",
          answer: "Are there any professional development opportunities available that I could explore?"
          },
          
          {
          category: 'Questions:Workplace',
          question: "What is a way to ask about the impact of a new policy on your work?",
          answer: "How will the new policy affect our current workflow?"
          },
          
          {
          category: 'Questions:Workplace',
          question: "How can you ask for clarification on a colleague's email?",
          answer: "Could you clarify the points you made in your last email?"
          },



      {
      category: 'Questions:Workplace',
      question: "How do you ask a colleague if they are available for a meeting?",
      answer: "Are you available for a meeting this afternoon?"
      }
      ,

      {
      category: 'Questions:Workplace',
      question: "What is a way to request assistance from a coworker?",
      answer: "Could you help me with this task?"
      },
      
      {
      category: 'Questions:Workplace',
      question: "How can you ask about the priority of different tasks?",
      answer: "Which task should I prioritize right now?"
      },
      
      {
      category: 'Questions:Workplace',
      question: "How do you inquire about the progress of a team member?",
      answer: "How is your part of the project coming along?"
      },
      
      {
      category: 'Questions:Workplace',
      question: "What is a way to ask for feedback on your work?",
      answer: "Could you provide some feedback on my recent work?"
      },
      
      {
      category: 'Questions:Workplace',
      question: "How can you ask about the procedure for a specific process?",
      answer: "Can you explain the procedure for this process to me?"
      },

//
{ category: 'Adjectives:People', question: "My [BLANK] friend is always there for me.", answer: "loyal" },
{ category: 'Adjectives:People', question: "I have a very [BLANK] teacher who makes learning fun.", answer: "creative" },
{ category: 'Adjectives:People', question: "My [BLANK] sister is always willing to help me with my homework.", answer: "kind|helpful" },
{ category: 'Adjectives:People', question: "I met a very [BLANK] person at the party who was interesting to talk to.", answer: "intelligent" },
{ category: 'Adjectives:People', question: "I have a [BLANK] neighbor who always brings me cookies.", answer: "generous" },
{ category: 'Adjectives:People', question: "My [BLANK] friend always makes me laugh.", answer: "funny" },
{ category: 'Adjectives:People', question: "I have a very [BLANK] coworker who is always willing to go the extra mile.", answer: "reliable" },
{ category: 'Adjectives:People', question: "My [BLANK] friend is always up for an adventure.", answer: "courageous" },
{ category: 'Adjectives:People', question: "I have a very [BLANK] teacher who is always willing to answer my questions.", answer: "patient" },
{ category: 'Adjectives:People', question: "My [BLANK] friend is always looking on the bright side of things.", answer: "optimistic" },

//
{category: 'Adjectives:animals', question: "The [BLANK] lion is the king of the jungle.", answer: "mighty|majestic" },
{category: 'Adjectives:animals', question: "The [BLANK] cheetah is the fastest land animal on Earth.", answer: "graceful" },
{category: 'Adjectives:animals', question: "The [BLANK] elephant is the largest land animal on Earth.", answer: "giant" },
{category: 'Adjectives:animals', question: "The [BLANK] giraffe has the longest neck of any land animal.", answer: "graceful" },
{category: 'Adjectives:animals', question: "The [BLANK] zebra has distinctive black and white stripes.", answer: "striking" },
{category: 'Adjectives:animals', question: "The [BLANK] penguin is flightless bird that lives in the Southern Hemisphere.", answer: "adaptable" },
{category: 'Adjectives:animals', question: "The [BLANK] chameleon can change its color to match its surroundings.", answer: "amazing" },
{category: 'Adjectives:animals', question: "The [BLANK] eagle is a symbol of freedom and power.", answer: "majestic" },
{category: 'Adjectives:animals', question: "The [BLANK] dolphin is a playful and intelligent marine mammal.", answer: "curious" },
{category: 'Adjectives:animals', question: "The [BLANK] owl is a nocturnal bird with excellent night vision.", answer: "wise" },

//
{"category": 'Adjectives:work', "question": "My job as a teacher is very [BLANK].", "answer": "fast-paced|stressful|emotional|rewarding|challenging|exciting|inspiring|interesting|demanding"},
{"category": 'Adjectives:work', "question": "My job as a nurse is very [BLANK].", "answer": "demanding|stressful|emotional|rewarding|challenging|exciting|inspiring|interesting|fast-paced"},
{category: 'Adjectives:work', question: "My job as a firefighter is very [BLANK].", answer: "stressful"},
{category: 'Adjectives:work', question: "My job as an engineer is very [BLANK].", answer: "challenging"},
{category: 'Adjectives:work', question: "My job as a writer is very [BLANK].", answer: "inconsistent|time consuming |creative"},
{category: 'Adjectives:work', question: "My job as a social worker is very [BLANK].", answer: "rewarding"},
{category: 'Adjectives:work', question: "My job as a lawyer is very [BLANK].", answer: "demanding|exciting|inspiring|stressful|interesting"},

//
{ category: 'Adjectives:Food', question: 'A [BLANK] meal is a satisfying one.', answer: 'delicious|hearty' },
{ category: 'Adjectives:Food', question: 'I love the [BLANK] taste of fresh strawberries.', answer: 'sweet' },
{ category: 'Adjectives:Food', question: 'This soup is so [BLANK] that it warms my soul.', answer: 'comforting' },
{ category: 'Adjectives:Food', question: 'The aroma of freshly baked bread is [BLANK] irresistible.', answer: 'enticing' },
{ category: 'Adjectives:Food', question: "I crave the [BLANK] taste of my grandmother's chocolate chip cookies.", answer: 'homey' },
{ category: 'Adjectives:Food', question: "A [BLANK] salad is full of fresh, vibrant flavors.", answer: "refreshing" },
{ category: 'Adjectives:Food', question: "I love the [BLANK] combination of sweet and savory in this dish.", answer: "delectable" },
{ category: 'Adjectives:Food', question: "This |steak|chicken|pasta|mango|fruit] is so [BLANK] that it melts in your mouth.", answer: "tender" },
{ category: 'Adjectives:Food', question: "The [BLANK] aroma of freshly brewed coffee is always a welcome morning greeting.", answer: "invigorating" },
{ category: 'Adjectives:Food', question: "I crave the [BLANK] taste of my favorite childhood snack.", answer: "nostalgic" },

//
{ category: 'Verbs:irregular', question: "I [BLANK] to the store yesterday.", answer: "went" },
{ category: 'Verbs:irregular', question: "I [BLANK] a book yesterday.", answer: "read" },
{ category: 'Verbs:irregular', question: "I [BLANK] dinner at 7:00 PM last night.", answer: "had|ate|went to|went out for|" },
{ category: 'Verbs:irregular', question: "I [BLANK] a walk in the park this morning.", answer: "took|went for" },
{ category: 'Verbs:irregular', question: "I [BLANK] a game of chess with my friend last night.", answer: "played" },
{ category: 'Verbs:irregular', question: "I [BLANK] a new dress for the party last week.", answer: "bought" },
{ category: 'Verbs:irregular', question: "I [BLANK] a letter to my grandmother last month.", answer: "wrote" },
{ category: 'Verbs:irregular', question: "I [BLANK] my homework last night.", answer: "did" },
{ category: 'Verbs:irregular', question: "I [BLANK] a movie last night.", answer: "saw" },
{ category: 'Verbs:irregular', question: "I [BLANK] a delicious meal for lunch today.", answer: "ate" },
{ category: 'Verbs:irregular', question: "I [BLANK] a gift for my friend's birthday last week.", answer: "gave" },
{ category: 'Verbs:irregular', question: "I [BLANK] a new pair of shoes last month.", answer: "bought" },
{ category: 'Verbs:irregular', question: "I [BLANK] a poem for my English class last week.", answer: "wrote" },
{ category: 'Verbs:irregular', question: "I [BLANK] a nap after lunch today.", answer: "took" },
{ category: 'Verbs:irregular', question: "I [BLANK] a quiz in math class today.", answer: "had" },
{ category: 'Verbs:irregular', question: "I [BLANK] a bike ride with my friends this morning.", answer: "went" },
{ category: 'Verbs:irregular', question: "I [BLANK] a new plant for my apartment last week.", answer: "bought" },
{ category: 'Verbs:irregular', question: "I [BLANK] a song for my talent show last month.", answer: "sang|wrote" },
{ category: 'Verbs:irregular', question: "I [BLANK] a delicious dinner for my family tonight.", answer: "made" },

//
{ category: 'Verbs:common', question: "I [BLANK] to the store yesterday.", answer: "went" },
{ category: 'Verbs:common', question: "I [BLANK] a book yesterday.", answer: "read" },
{ category: 'Verbs:common', question: "I [BLANK] dinner at 7:00 PM last night.", answer: "had" },
{ category: 'Verbs:common', question: "I [BLANK] a walk in the park this morning.", answer: "took" },
{ category: 'Verbs:common', question: "I [BLANK] a game of chess with my friend last night.", answer: "played" },
{ category: 'Verbs:common', question: "I [BLANK] a new dress for the party last week.", answer: "bought" },
{ category: 'Verbs:common', question: "I [BLANK] a letter to my grandmother last month.", answer: "wrote" },
{ category: 'Verbs:common', question: "I [BLANK] my homework last night.", answer: "did" },
{ category: 'Verbs:common', question: "I [BLANK] a movie last night.", answer: "saw" },
{ category: 'Verbs:common', question: "I [BLANK] a delicious meal for lunch today.", answer: "ate" },
{ category: 'Verbs:common', question: "I [BLANK] a gift for my friend's birthday last week.", answer: "gave|got" },
{ category: 'Verbs:common', question: "I [BLANK] a new pair of shoes last month.", answer: "bought" },
{ category: 'Verbs:common', question: "I [BLANK] a poem for my English class last week.", answer: "wrote" },
{ category: 'Verbs:common', question: "I [BLANK] a nap after lunch today.", answer: "took" },
{ category: 'Verbs:common', question: "I [BLANK] a quiz in math class today.", answer: "had" },
{ category: 'Verbs:common', question: "I [BLANK] a bike ride with my friends this morning.", answer: "went" },
{ category: 'Verbs:common', question: "I [BLANK] a new plant for my apartment last week.", answer: "bought" },
{ category: 'Verbs:common', question: "I [BLANK] a song for my talent show last month.", answer: "wrote" },
{ category: 'Verbs:common', question: "I [BLANK] a delicious dinner for my family last night.", answer: "made|cooked|prepared" },
{ category: 'Verbs:common', question: "I [BLANK] to the beach yesterday.", answer: "went" },
{ category: 'Verbs:common', question: "I [BLANK] a swimming pool at my house.", answer: "have" },
{ category: 'Verbs:common', question: "I [BLANK] a sandwich for lunch today.", answer: "made" },
{ category: 'Verbs:common', question: "I [BLANK] my teeth every morning and night.", answer: "brush" },
{ category: 'Verbs:common', question: "I [BLANK] my hair every day.", answer: "wash" },
{ category: 'Verbs:common', question: "I [BLANK] my clothes every week.", answer: "wash" },
{ category: 'Verbs:common', question: "I [BLANK] my room every week.", answer: "clean|sweep|vacuum|tidy|straighten up" },
{ category: 'Verbs:common', question: "I [BLANK] my dog for a walk every day.", answer: "take" },
{ category: 'Verbs:common', question: "I [BLANK] my homework every night.", answer: "do" },
{ category: 'Verbs:common', question: "I [BLANK] to school every day.", answer: "go" },
{ category: 'Verbs:common', question: "I [BLANK] to bed early every night.", answer: "go" },
{ category: 'Verbs:common', question: "I [BLANK] my parents for everything they do for me.", answer: "love" },
{ category: 'Verbs:common', question: "I [BLANK] my friends very much.", answer: "love" },
{ category: 'Verbs:common', question: "I [BLANK] to play video games.", answer: "like" },
{ category: 'Verbs:common', question: "I [BLANK] to read books.", answer: "like" },
{ category: 'Verbs:common', question: "I [BLANK] to listen to music.", answer: "like" },

// past perfect
{ category: 'Verbs:past perfect', question: "I [BLANK] to the store before I went to the park.", answer: "had been" },
{ category: 'Verbs:past perfect', question: "I [BLANK] my homework before I went to bed.", answer: "had finished" },
{ category: 'Verbs:past perfect', question: "I [BLANK] dinner before I watched TV.", answer: "had eaten" },
{ category: 'Verbs:past perfect', question: "I [BLANK] a shower before I went to bed.", answer: "had taken" },
{ category: 'Verbs:past perfect', question: "I [BLANK] my teeth before I went to sleep.", answer: "had brushed" },
{ category: 'Verbs:past perfect', question: "I [BLANK] my clothes before I went to the party.", answer: "had put on" },
{ category: 'Verbs:past perfect', question: "I [BLANK] my hair before I went out.", answer: "had done" },
{ category: 'Verbs:past perfect', question: "I [BLANK] my makeup before I went to the party.", answer: "had put on" },
{ category: 'Verbs:past perfect', question: "I [BLANK] my nails before I went out.", answer: "had painted" },
{ category: 'Verbs:past perfect', question: "I [BLANK] breakfast before I went to school.", answer: "had eaten" },
{ category: 'Verbs:past perfect', question: "I [BLANK] my homework before I went to the library.", answer: "had finished" },
{ category: 'Verbs:past perfect', question: "I [BLANK] my lunch before I went to the park.", answer: "had eaten" },
{ category: 'Verbs:past perfect', question: "I [BLANK] a nap before I went to work.", answer: "had taken" },
{ category: 'Verbs:past perfect', question: "I [BLANK] a shower before I went to the gym.", answer: "had taken" },
{ category: 'Verbs:past perfect', question: "I [BLANK] my clothes before I went to bed.", answer: "had taken off" },
{ category: 'Verbs:past perfect', question: "I [BLANK] my makeup before I went to sleep.", answer: "had taken off" },
{ category: 'Verbs:past perfect', question: "I [BLANK] my nails before I went to bed.", answer: "had taken off" },
{ category: 'Verbs:past perfect', question: "I [BLANK] to the store before I went to the park.", answer: "had gone" },
{ category: 'Verbs:past perfect', question: "I [BLANK] to the library before I went to the park.", answer: "had gone" },
{ category: 'Verbs:past perfect', question: "I [BLANK] to the gym before I went to the park.", answer: "had gone" },
{ category: 'Verbs:past perfect', question: "I [BLANK] to the movies before I went to the park.", answer: "had gone" },
{ category: 'Verbs:past perfect', question: "I [BLANK] to the zoo before I went to the park.", answer: "had gone" },
{ category: 'Verbs:past perfect', question: "I [BLANK] to the beach before I went to the park.", answer: "had gone" },
{ category: 'Verbs:past perfect', question: "I [BLANK] to the park before I went to the store.", answer: "had been" },
{ category: 'Verbs:past perfect', question: "I [BLANK] to the library before I went to the store.", answer: "had been" },
{ category: 'Verbs:past perfect', question: "I [BLANK] to the gym before I went to the store.", answer: "had been" },
{ category: 'Verbs:past perfect', question: "I [BLANK] to the movies before I went to the store.", answer: "had been" },
{ category: 'Verbs:past perfect', question: "I [BLANK] to the zoo before I went to the store.", answer: "had been" },
{ category: 'Verbs:past perfect', question: "I [BLANK] to the beach before I went to the store.", answer: "had been" },
{ category: 'Verbs:past perfect', question: "I [BLANK] to the park before I went to the library.", answer: "had been" },
{ category: 'Verbs:past perfect', question: "I [BLANK] to the library before I went to the gym.", answer: "had been" },
{ category: 'Verbs:past perfect', question: "I [BLANK] to the gym before I went to the movies.", answer: "had been" },
//

  { category: 'Adverbs of Place', question: "I left my keys [BLANK], but I can't remember where.", answer: "somewhere" },
  { category: 'Adverbs of Place', question: "We will meet [BLANK] near the fountain.", answer: "here" },
  { category: 'Adverbs of Place', question: "The park is located [BLANK] across from the library.", answer: "there" },
  { category: 'Adverbs of Place', question: "The children looked for their dog [BLANK].", answer: "everywhere" },
  { category: 'Adverbs of Place', question: "I searched for my glasses, but they were [BLANK].", answer: "nowhere" },
  { category: 'Adverbs of Place', question: "The birds flew [BLANK] for the winter.", answer: "southwards" },
  { category: 'Adverbs of Place', question: "The wind is blowing [BLANK].", answer: "eastwards" },
  { category: 'Adverbs of Place', question: "They decided to explore the town [BLANK].", answer: "westwards" },
  { category: 'Adverbs of Place', question: "The car moved [BLANK] after hitting the bump.", answer: "backwards" },
  { category: 'Adverbs of Place', question: "She walked [BLANK] the sunset.", answer: "towards" },
  { category: 'Adverbs of Place', question: "The team is moving [BLANK] with their project.", answer: "forward" },
  { category: 'Adverbs of Place', question: "The cafe is [BLANK] to our office.", answer: "nearby" },
  { category: 'Adverbs of Place', question: "Their houses are [BLANK].", answer: "miles apart" },
  { category: 'Adverbs of Place', question: "The balloon floated [BLANK].", answer: "up" },
  { category: 'Adverbs of Place', question: "She sat [BLANK] to tie her shoelaces.", answer: "down" },
  { category: 'Adverbs of Place', question: "He decided to walk [BLANK] from the crowd.", answer: "away" },
  { category: 'Adverbs of Place', question: "The children ran [BLANK] around the park.", answer: "around" },
  { category: 'Adverbs of Place', question: "The cat jumped [BLANK] of the box.", answer: "out" },
  { category: 'Adverbs of Place', question: "Please come [BLANK]; dinner is ready.", answer: "in" },
  { category: 'Adverbs of Place', question: "The treasure was buried [BLANK] the old oak tree.", answer: "below" },
  { category: 'Adverbs of Place', question: "You will find the spare keys [BLANK] the cupboard.", answer: "behind" },
  { category: 'Adverbs of Place', question: "We are traveling [BLANK] for the conference.", answer: "north" },
  { category: 'Adverbs of Place', question: "They moved to a small town [BLANK].", answer: "southeast" },
  { category: 'Adverbs of Place', question: "The hiking trail starts [BLANK] of the lake.", answer: "northeast" },
  { category: 'Adverbs of Place', question: "The sun sets in the [BLANK].", answer: "west" },
  { category: 'Adverbs of Place', question: "The birds migrate [BLANK] each spring.", answer: "north" },
  { category: 'Adverbs of Place', question: "After the vacation, we headed [BLANK].", answer: "homeward" },
  { category: 'Adverbs of Place', question: "I think I left my phone [BLANK] in the house.", answer: "someplace" },
  { category: 'Adverbs of Place', question: "They moved [BLANK] last year.", answer: "abroad" },
  { category: 'Adverbs of Place', question: "The old photographs are stored [BLANK].", answer: "upstairs" },
  { category: 'Adverbs of Place', question: "The laundry room is [BLANK].", answer: "downstairs" },
  { category: 'Adverbs of Place', question: "You can find a quiet place to read [BLANK].", answer: "anywhere" },


//SCRUM

{
  "category": "SCRUM",
  "question": "SCRUM is a [BLANK] framework for managing software development.",
  "answer": "lightweight"
},
{
  "category": "SCRUM",
  "question": "The goal of SCRUM is to [BLANK] complex projects into smaller, more manageable tasks.",
  "answer": "break down"
},
{
  "category": "SCRUM",
  "question": "SCRUM is based on three core values: [BLANK], [BLANK], and [BLANK].",
  "answer": "transparency, accountability, and self-organization"
},
{
  "category": "SCRUM",
  "question": "A SCRUM team is typically composed of three roles: [BLANK], [BLANK], and [BLANK].",
  "answer": "product owner, scrum master, and development team"
},
{
  "category": "SCRUM",
  "question": "The product owner is responsible for [BLANK] the backlog, which is a prioritized list of features for the product.",
  "answer": "prioritizing"
},
{
  "category": "SCRUM",
  "question": "The scrum master is responsible for [BLANK] the scrum team and ensuring that the team is following the scrum process.",
  "answer": "facilitating"
},
{
  "category": "SCRUM",
  "question": "The development team is responsible for [BLANK] the work in the backlog.",
  "answer": "completing"
},
{
  "category": "SCRUM",
  "question": "A SCRUM project is divided into [BLANK], which are short, iterative development cycles.",
  "answer": "sprints"
},
{
  "category": "SCRUM",
  "question": "At the beginning of each sprint, the team holds a [BLANK] meeting to plan the work for the sprint.",
  "answer": "sprint planning"
},
{
  "category": "SCRUM",
  "question": "At the end of each sprint, the team holds a [BLANK] meeting to review the work that was completed and to demo the work to stakeholders.",
  "answer": "sprint review"
},
//
{
  "category": "Negotiations",
  "question": "Your price is higher than what we've budgeted for.",
  "answer": "I understand your concern about the budget. Could we explore what features are most important to you? Perhaps there's flexibility in our offering that can align with your budget. We also offer payment plans and discounts on longer-term commitments that might make this more feasible for you."
}
,
{
  "category": "Negotiations",
  "question": "Can you deliver the project in a shorter timeframe?",
  "answer": "Let's discuss your timeline requirements. We are committed to meeting our clients' needs, and if possible, we'll adjust our schedule. However, it's important to balance speed with quality. Could we identify the most critical elements of the project to prioritize?"
},

{
  "category": "Negotiations",
  "question": "We need more favorable payment terms.",
  "answer": "We're open to discussing payment terms. What specific terms are you looking for? We might be able to offer staggered payments or adjust the payment schedule to better fit your cash flow situation, ensuring a partnership that is beneficial for both of us."
},

{
  "category": "Negotiations",
  "question": "How can you guarantee the quality of your service?",
  "answer": "Quality assurance is a key aspect of our service. We offer a comprehensive quality guarantee which includes regular updates, a dedicated account manager, and post-service support. We also welcome feedback to continually improve our services."
},

{
  "category": "Negotiations",
  "question": "What makes your product better than your competitors'?",
  "answer": "Our product stands out due to its unique features [list specific features], reliable customer support, and a proven track record of customer satisfaction. We have also invested in [specific technology or approach] to ensure superior performance."
},

{
  "category": "Negotiations",
  "question": "What if we are not satisfied with the product after purchase?",
  "answer": "Customer satisfaction is paramount for us. We offer a satisfaction guarantee which includes a [specific time period] return policy and comprehensive support to resolve any issues. We're committed to working with you to ensure the product meets your expectations."
},

{
  "category": "Negotiations",
  "question": "Can you offer a bulk purchase discount?",
  "answer": "We appreciate your interest in a large order. Let's discuss the quantities you're considering. We can certainly explore bulk pricing options and find a discount structure that aligns with the size of your order."
},
{
  "category": "Negotiations",
  "question": "The delivery timeline is too long. Can it be shortened?",
  "answer": "Understanding your urgency is important to us. Let's review our production and delivery capabilities. We might be able to expedite your order or offer partial deliveries to meet your timeline."
},
{
  "category": "Negotiations",
  "question": "We're looking for additional post-purchase support. What can you offer?",
  "answer": "Post-purchase support is crucial. We offer various support packages including training, maintenance, and dedicated customer service. Let's identify the level of support that best suits your needs."
},
{
  "category": "Negotiations",
  "question": "Can you match the pricing offered by another vendor?",
  "answer": "Competitive pricing is important. While we strive to offer the best value, we also focus on quality and service. Let's discuss how our offering compares in terms of overall value and not just pricing."
},
{
  "category": "Negotiations",
  "question": "Do you provide any warranties or guarantees for your products?",
  "answer": "Yes, we stand behind our products. We offer a [specific period] warranty which covers [list of what is covered]. We believe in the quality of our products and want to ensure your confidence in them as well."
},
{
  "category": "Negotiations",
  "question": "Can the salary be increased to match industry standards?",
  "answer": "We understand the importance of competitive compensation. Let's review the industry standards together and discuss how we can align the offer with them, considering your experience and the value you bring to the team."
},
{
  "category": "Negotiations",
  "question": "Is there room for negotiation in the base salary?",
  "answer": "We're open to discussing the base salary. Let's consider your qualifications and the responsibilities of the position. We aim to offer a package that is fair and acknowledges your expertise."
},
{
  "category": "Negotiations",
  "question": "Can you provide a higher salary given my advanced degree and experience?",
  "answer": "Your advanced degree and experience are certainly valuable. Let's discuss how they align with the role's requirements and how we can reflect this in the compensation package."
},
{
  "category": "Negotiations",
  "question": "Apart from the base salary, what other benefits are included?",
  "answer": "In addition to the base salary, our comprehensive benefits package includes [list benefits such as health insurance, retirement plans, etc.]. We believe in supporting our employees both financially and in their overall well-being."
},
{
  "category": "Negotiations",
  "question": "Is there a possibility for performance-based bonuses or raises?",
  "answer": "Yes, performance is highly valued in our organization. We offer performance-based bonuses and the opportunity for annual raises, contingent upon individual and company performance."
},

{
  "category": "Negotiations",
  "question": "Can we modify the termination clause to include a more flexible notice period?",
  "answer": "We understand the need for flexibility. Let's discuss your concerns with the current termination clause and explore options for a notice period that works for both parties while ensuring operational stability."
},
{
  "category": "Negotiations",
  "question": "The liability terms seem too restrictive. Can these be adjusted?",
  "answer": "Liability is an important aspect for both parties. We're open to reviewing the terms to find a balance that mitigates risk for both sides. Perhaps we can consider a cap on liability or adjust the terms to better reflect the scope of our engagement."
},
{
  "category": "Negotiations",
  "question": "Can we include a clause for regular performance reviews in the contract?",
  "answer": "Regular reviews can be beneficial for continuous improvement. Let's determine an appropriate frequency and format for these reviews to ensure they are constructive and aligned with our mutual goals."
},
{
  "category": "Negotiations",
  "question": "The current payment terms are challenging for our cash flow. Can we negotiate a more suitable schedule?",
  "answer": "Cash flow considerations are important. Let's explore a payment schedule that aligns with your cash flow while maintaining the project's financial feasibility for us. Staggered payments or milestone-based payments might be options."
},
{
  "category": "Negotiations",
  "question": "Is it possible to revise the confidentiality clause to be more specific about what is considered confidential information?",
  "answer": "Ensuring clarity around confidentiality is key. We can work together to define more specifically what constitutes confidential information in our agreement to protect both parties' interests effectively."
},
{
  "category": "Negotiations",
  "question": "Can we agree on an earlier delivery date?",
  "answer": "We understand the importance of timely delivery for your operations. Let's review our production and logistics capabilities to see if an earlier date is feasible without compromising the quality of the product or service."
},
{
  "category": "Negotiations",
  "question": "If delivery is delayed, are you willing to provide compensation?",
  "answer": "On-time delivery is a priority for us. In the rare event of a delay, we're open to discussing a fair compensation mechanism. This might include discounts on future orders or a direct compensation for the delay, depending on the circumstances."
},
{
  "category": "Negotiations",
  "question": "Can the penalty clause for late delivery be adjusted to be less severe?",
  "answer": "We aim for a balanced approach in our contracts. Let's discuss the penalty clause and see how we can adjust it to ensure it is fair and proportionate to the potential impact of a delay, while still maintaining a commitment to timely delivery."
},
{
  "category": "Negotiations",
  "question": "How can we ensure timely delivery for our high-priority projects?",
  "answer": "For high-priority projects, we can explore options like dedicated resources, frequent updates, and possibly a premium service for expedited delivery. Let's identify the specific needs of your project to ensure timely completion."
},
{
  "category": "Negotiations",
  "question": "Is there flexibility in the delivery schedule for bulk orders?",
  "answer": "For bulk orders, we recognize the need for flexibility in delivery scheduling. We can look at options like phased delivery or scheduling deliveries according to your inventory capacity and demand cycle."
},

{
  "category": "Negotiations",
  "question": "We find your initial offer quite high. Can you reduce the price?",
  "answer": "We're committed to finding a mutually beneficial agreement. While we offer competitive pricing, we understand your budget constraints. Let's explore the possibility of a reduced price in exchange for a longer-term commitment or a larger order volume."
},
{
  "category": "Negotiations",
  "question": "The proposed timeline is too long for us. Can it be shortened?",
  "answer": "We value your time constraints. To expedite the timeline, we might be able to allocate additional resources or prioritize your project. In return, we would appreciate flexibility on other terms, such as payment schedule or scope adjustments."
},
{
  "category": "Negotiations",
  "question": "Can we get more favorable payment terms given the size of our order?",
  "answer": "Larger orders indeed present an opportunity for revised payment terms. We could consider a staggered payment plan or extended payment terms. In exchange, we would look for a commitment to future business or referrals."
},
{
  "category": "Negotiations",
  "question": "The current service level agreement (SLA) terms are too stringent. Can they be relaxed?",
  "answer": "We aim for a balance in our SLAs to maintain high-quality service. We're open to discussing a relaxation of certain terms, perhaps in exchange for a longer contract duration or an understanding that certain non-critical services might be deprioritized."
},
{
  "category": "Negotiations",
  "question": "We need additional features that are not included in the standard package. Can these be included at no extra cost?",
  "answer": "Adding extra features usually comes at a cost, but we value our relationship with you. We can include some additional features at no extra cost, provided we can agree on certain other aspects, such as extending the contract term or providing us with testimonials."
},

{
  "category": "Negotiations",
  "question": "Can the length of the lease be extended to provide more stability for our business?",
  "answer": "We're open to discussing a longer lease term. Extending the lease can provide stability for both parties. Let's explore terms that can accommodate an extended duration while ensuring mutual benefits and flexibility."
},
{
  "category": "Negotiations",
  "question": "Is there any flexibility to reduce the lease payments in the first year?",
  "answer": "Understanding your financial planning is important to us. We can consider lower lease payments in the first year, potentially offset by slightly higher payments in subsequent years, or other compensatory terms that work for both of us."
},
{
  "category": "Negotiations",
  "question": "Can we include a clause that allows for subleasing, should the need arise?",
  "answer": "Subleasing can be a flexible option. We can add a subleasing clause with certain conditions to protect the property and ensure compliance with our leasing policies. Let's discuss the specifics to ensure it aligns with our mutual interests."
},
{
  "category": "Negotiations",
  "question": "How can we address potential rent increases in the future?",
  "answer": "Rent stability is crucial for planning. We can agree on a fixed rate of increase or tie increases to an inflation index. This approach provides transparency and predictability for both parties regarding future rent adjustments."
},
{
  "category": "Negotiations",
  "question": "Is it possible to negotiate improvements or modifications to the leased space?",
  "answer": "We are open to discussing improvements or modifications. Depending on the nature and extent of the changes, we could negotiate who bears the cost or consider it as part of the lease agreement, potentially adjusting the lease terms accordingly."
},

{
  "category": "Negotiations",
  "question": "We'd like to remodel the leased space. Can we discuss adjustments in the lease to accommodate this?",
  "answer": "Remodeling can add value to the property. We're open to discussing how these changes align with our property vision. We could consider rent adjustments or lease term extensions in exchange for approved renovations."
},
{
  "category": "Negotiations",
  "question": "Who will bear the costs of necessary renovations to the property?",
  "answer": "The cost allocation for renovations depends on their nature and benefit. If they're essential for your business, we might ask you to bear the costs. However, if they enhance the property value long-term, we could share costs or offer rent concessions."
},
{
  "category": "Negotiations",
  "question": "Can we negotiate a rent-free period to offset the costs of significant renovations?",
  "answer": "A rent-free period can be a fair trade-off for significant renovations. Let's discuss the scope of the renovations and how they benefit the property. We can consider a rent-free period based on the extent and value of the improvements made."
},
{
  "category": "Negotiations",
  "question": "What are the limitations on the types of renovations we can make?",
  "answer": "It's important to maintain the integrity of the property. We can outline specific guidelines for renovations, focusing on maintaining structural integrity and adhering to zoning laws. Let's discuss what you have in mind and find a mutually agreeable solution."
},
{
  "category": "Negotiations",
  "question": "Upon lease termination, how are the renovations handled? Do they need to be undone?",
  "answer": "Upon termination, the handling of renovations depends on their nature. If they're beneficial to the property, they can remain. Otherwise, we may require the space to be returned to its original state, potentially sharing the restoration costs."
},

{
  "category": "Negotiations",
  "question": "Given the recent issues with your service, can we negotiate a discount on our next billing cycle?",
  "answer": "We apologize for the inconvenience caused. As a gesture of our commitment to quality service, we can offer a discount on your next billing cycle. Let's discuss a reasonable percentage that acknowledges the impact while ensuring we can continue to provide you with high-quality service."
},
{
  "category": "Negotiations",
  "question": "The service disruptions have significantly affected our business. Can we discuss a compensation package?",
  "answer": "Understanding the impact on your business is crucial for us. We're open to discussing a compensation package. This might include service credits, additional support services, or direct financial compensation, depending on the extent of the impact."
},
{
  "category": "Negotiations",
  "question": "Can we extend our current service agreement at no additional cost due to the recent service issues?",
  "answer": "Extending your current service agreement is a fair request. We can offer an extension for a certain period at no additional cost. This extension would be a way for us to demonstrate our commitment to rectifying the situation and maintaining your trust."
},
{
  "category": "Negotiations",
  "question": "In light of the poor service, can we renegotiate the terms of our agreement for future services?",
  "answer": "Renegotiating the terms of our agreement is something we can consider. Let's discuss which terms you'd like to adjust. We aim to ensure that our future service meets your expectations and restores your confidence in us."
},
{
  "category": "Negotiations",
  "question": "Is it possible to get a one-time service upgrade as compensation for the issues we've experienced?",
  "answer": "Offering a one-time service upgrade is a potential solution. We can provide an upgrade to a higher tier of service for a limited time, allowing you to experience additional benefits and enhanced service as compensation for the inconvenience caused."
},


//

{
  "category": "Objections",
  "question": "This doesn't align with our current strategy.",
  "answer": "May I ask what is your strategy?I understand that you need to make sure that any new product you adopt aligns with your current strategy. We can help you understand how our product can support your strategic goals."
},
{
  "category": "Objections",
  "question": "We've had a bad experience with similar products.",
  "answer": "Can you tell me more? Which product? Which company? What was the problem? We understand that you've had a bad experience with similar products in the past. We're confident that our product is different and that it can help you achieve your business goals."
},
{
  "category": "Objections",
  "question": "I'm not the right person to make this decision.",
  "answer": "Who is the right person to speak with? I understand that you may not be the right person to make this decision. We're always happy to speak with the decision-maker at your company."
},
{
  "category": "Objections",
  "question": "We're locked into a contract with another provider.",
  "answer": "Can you tell me which company which you are working with? How long is the contract? When does the contract end? We understand that you may be locked into a contract with another provider. We can help you understand your options and make a decision that's right for your business."
},
{
  "category": "Objections",
  "question": "I need to see more evidence of its success.",
  "answer": "How many references would you like? We understand that you need to see evidence of our product's success before you invest in it. We can provide you with case studies, testimonials, and other evidence that shows how our product has helped our customers achieve their business goals."
},
{
  "category": "Objections",
  "question": "I'm not interested right now.",
  "answer": "May I ask, what are your business goals? We understand that you're not interested right now. We're always here if you have any questions or want to learn more about our product."
},
{
  "category": "Objections",
  "question": "I'm not the decision-maker.",
  "answer": "Who is the decision maker? Can I have their contact details? I understand that you may not be the decision-maker at your company. We're always happy to speak with the decision-maker."
},
{
  "category": "Objections",
  "question": "I need to think about it.",
  "answer": "May I ask what questions you still have? Of course, we understand that you need to take some time to think about your decision. We're always here if you have any questions or want to learn more about our product."
},
{
  "category": "Objections",
  "question": "Your product is too expensive.",
  "answer": "I understand that our product is an investment, but we're confident that the value it provides far outweighs the cost. We also offer a variety of pricing options to fit your budget, and we're always happy to work with you to find a solution that's affordable for your business."
},
{
  "category": "Objections",
  "question": "We're already satisfied with our current solution.",
  "answer": "May I ask who is your current provider? That's great to hear! We're always happy to hear that our customers are happy with their current solution. However, we're confident that our product has a number of advantages that you'll find appealing."
},
{
  "category": "Objections",
  "question": "We've had a bad experience with similar products in the past.",
  "answer": "We understand that you've had a bad experience with similar products in the past. We're confident that our product is different and that it can help you achieve your business goals."
},
{
  "category": "Product",
  "question": "I'm not sure if your product is right for us.",
  "answer": "What would meet your needs? That's okay! We're always happy to help you determine if our product is a good fit for your business. We can provide you with a demo, case studies, and other resources to help you make an informed decision."
},
{
  "category": "Product",
  "question": "I don't have the time to talk right now.",
  "answer": "When is a good time to call? I understand that you're busy. We can schedule a call or demo at your convenience. In the meantime, you can learn more about our product on our website."
},



  {
    "category": "Objections",
    "question": "Thank you, but we're not interested at this time.",
    "answer": "Thank you for your time. We understand that you're not ready to make a decision right now. We're always here if you have any questions or want to learn more about our product."
  },
  {
    "category": "Objections",
    "question": "I don't think this meets our needs right now.",
    "answer": "What part doesn't meet you needs? Can you clarify what are your needs? Why doesn't it meet your needs? What are your specific needs? I understand that our product may not be the right fit for you right now. We have a wide range of features and options to choose from, so I'm confident we can find a solution that meets your specific needs."
  },
  {
    "category": "Objections",
    "question": "We're not in the position to invest in this.",
    "answer": "I understand that investing in a new product can be a big decision. We offer a variety of pricing options to fit your budget, and we're always happy to work with you to find a solution that's affordable for your business."
  },
  {
    "category": "Objections",
    "question": "I need to consult with my team first.",
    "answer": "Of course, we understand that you need to consult with your team before making a decision. We're always happy to provide you with more information or answer any questions you may have."
  },
  {
    "category": "Objections",
    "question": "Can you send us more information? We'll review it and get back to you.",
    "answer": "Absolutely. We'd be happy to send you more information about our product. We can also schedule a demo to show you how our product can help you achieve your business goals."
  },

  {
    "category": "Objections",
    "question": "This isn't a priority for us at the moment.",
    "answer": "What is the main priority for your company? What are your market goals? We understand that you have other priorities right now. We're always here when you're ready to learn more about how our product can help you."
  },

  {
    "category": "Objections",
    "question": "We already have a similar solution in place.",
    "answer": "What is the name of that solution?  We're always happy to hear that our customers are happy with their current solution. However, we're confident that our product has a number of advantages that you'll find appealing."
  },
  {
    "category": "Objections",
    "question": "The price point is out of our budget.",
    "answer": "What would be a price that you would consider? I understand that pricing can be a concern. We offer a variety of pricing options to fit your budget, and we're always happy to work with you to find a solution that's affordable for your business."
  },
  {
    "category": "Objections",
    "question": "Our intergration pipeline is full.",
    "answer": "What are you working on? I understand that you have a lot on your plate right now. We're always happy to work with you to schedule a time for implementation that works for your team."
  },
  {
    "category": "Objections",
    "question": "We don't need your product. We're good!",
    "answer": "Can you please explain why you don't need our product? We have other options! What does your company need? We understand that you may not need our product right now. However, we're confident that our product can help you achieve your business goals. We're always happy to provide you with more information or answer any questions you may have."
  },
  {
    "category": "Objections",
    "question": "We're not interested in your product.",
    "answer": "What services does your company need? We understand that you're not interested in our product right now. We're always here if you have any questions or want to learn more about it."
  },
  {
    "category": "Objections",
    "question": "We're looking for something different.",
    "answer": "What exactly is your company looking for? I understand that you're looking for something different. We have a wide range of features and options to choose from, so I'm confident we can find a solution that meets your specific needs."
  },


  {
    "category": "Objections",
    "question": "We're already using a similar product.",
    "answer": "I understand that you're already using a similar product. However, our product offers several unique features and benefits that can help you improve your results."
  },

  {
    "category": "Objections",
    "question": "We're not convinced that your product will make us money.",
    "answer": "I understand that you're concerned about ROI. We can provide you with a case study that demonstrates how our product has helped other businesses save money."
  },

  {
    "category": "Objections",
    "question": "We're not convinced that it will save us money.",
    "answer": "I understand that you're concerned about ROI. We can provide you with a case study that demonstrates how our product has helped other businesses save money."
  },
  {
    "category": "Objections",
    "question": "We're worried about the learning curve.",
    "answer": "I understand that you're concerned about training. We offer a variety of training resources to help your team get up to speed quickly."
  },
  {
    "category": "Objections",
    "question": "We don't have the bandwidth to implement it right now.",
    "answer": "When would be a good time? Maybe we can draft an integration roadmap for next year?I understand that you're busy. We can help you prioritize the implementation so it fits into your schedule."
  },
  {
    "category": "Objections",
    "question": "We're not sure if it's secure enough for our data.",
    "answer": "What are your security concerns? I understand that security is a top priority. Our product meets the highest industry standards for data security."
  },

  {
    "category": "Objections",
    "question": "Why is the integration taking so long?",
    "answer": "How can we help? What exactly are the issues? "
  },


  {
    "category": "Objections",
    "question": "Your timeline API implementation will take too long in our opinion.",
    "answer": "How can we help? What exactly are the issues? We understand that you need a solution quickly. We are committed to providing you with a timeline that meets your needs, and we will work closely with you to prioritize implementation tasks."
  },
  {
    "category": "Objections",
    "question": "We are worried about the impact on our business during implementation.",
    "answer": "I understand that implementing a new solution can disrupt your business operations. We have a proven implementation methodology that minimizes disruption and ensures a smooth transition."
  },
  {
    "category": "Objections",
    "question": "We don't have the resources to dedicate to implementation at this time.",
    "answer": "When does your roadmap open up? I understand that staffing is a concern. We offer a variety of implementation options to fit your resources and budget, including self-service, guided assistance, and fully managed implementation."
  },
  {
    "category": "Objections",
    "question": "We are concerned about the risk of project delays or failures.",
    "answer": "I understand that project delays can be costly. We have a proven track record of successful implementations, and we employ project management best practices to mitigate risk and ensure project success."
  },
  {
    "category": "Objections",
    "question": "We are not sure if we can meet your timeline for testing and user acceptance.",
    "answer": "I understand that testing and user acceptance are critical steps in the implementation process. We will work with you to create a testing plan that meets your specific needs and timeline, and we offer a variety of testing tools and resources to support your testing efforts."
  },


  {
    "category": "Objections",
    "question": "Your API documentation is not comprehensive enough.",
    "answer": "I understand that you need comprehensive API documentation to successfully integrate our product with your systems. We are constantly working on improving our API documentation, and we can provide you with additional resources if needed."
  },
  {
    "category": "Objections",
    "question": "We are concerned about the stability and performance of your APIs.",
    "answer": "I understand that you need reliable and performant APIs to support your business-critical applications. Our APIs are designed and tested to meet the highest standards of stability and performance."
  },
  {
    "category": "Objections",
    "question": "Your timeline for API is not realistic.",
    "answer": "I understand that you need a solution quickly. We are committed to providing you with a timeline that meets your needs, and we will work closely with you to prioritize API development tasks."
  },
  {
    "category": "Objections",
    "question": "We are worried about maintaining our integration with your APIs as they evolve.",
    "answer": "I understand that maintaining integrations can be challenging. We provide a comprehensive API roadmap and notification system to keep you informed of upcoming changes, and we offer support to help you smoothly transition to new versions."
  },
  {
    "category": "Objections",
    "question": "We are not sure if your APIs are secure enough for our sensitive data.",
    "answer": "I understand that data security is a top priority. Our APIs are built with security in mind, and we employ industry-best practices to protect your data. We can provide you with detailed security documentation to address any specific concerns."
  },



  {
    "category": "Objections",
    "question": "We're looking for something different.",
    "answer": "I understand that you're looking for something different. We have a wide range of features and options to choose from, so I'm confident we can find a solution that meets your specific needs."
  },
  {
    "category": "Objections",
    "question": "It's too expensive.",
    "answer": "I understand that cost is a factor. However, when you consider the value that our product provides, we believe it's a worthwhile investment."
  },
  {
    "category": "Objections",
    "question": "We don't have the time to implement it.",
    "answer": "I understand that time is a concern. However, we offer a variety of implementation options to fit your schedule and budget."
  },
  {
    "category": "Objections",
    "question": "We're not sure if it will work for us.",
    "answer": "What part won't work? I understand that you're concerned about compatibility. We offer a free trial so you can try our product risk-free."
  },

  {
    "category": "Objections",
    "question": "We don't have the staff to support your product.",
    "answer": "How can we help? How do you plan to grow your revenue? Where are you not staffed? Do you have your own support team? We have support staff that can assist. I understand that staffing is a concern. We offer a variety of training and support options to help you get the most out of our product. NOTE: This is a bullshit objection."
  },



//
{ category: 'Pronouns:Indefinite', question: "Someone left [BLANK] phone in the conference room.", answer: "their" },
    { category: 'Pronouns:Indefinite', question: "Everybody needs [BLANK] to feel important.", answer: "someone" },
    { category: 'Pronouns:Indefinite', question: "Anyone can join the club, but [BLANK] has to follow the rules.", answer: "everyone" },
    { category: 'Pronouns:Indefinite', question: "I will bring snacks, but [BLANK] needs to bring their own drinks.", answer: "everyone" },
    { category: 'Pronouns:Indefinite', question: "[BLANK] knows that honesty is important in relationships.", answer: "Everyone" },
    { category: 'Pronouns:Indefinite', question: "In the lost and found box, there are somethings that [BLANK] forgot.", answer: "someone" },
    { category: 'Pronouns:Indefinite', question: "Nobody understood the joke, so [BLANK] laughed.", answer: "no one|nobody" },

    
      { category: 'Pronouns:Indefinite', question: "Can [BLANK] help me with this task?", answer: "anyone" },
      { category: 'Pronouns:Indefinite', question: "I haven't got [BLANK] to wear for the event.", answer: "anything" },
      { category: 'Pronouns:Indefinite', question: "[BLANK] of the two options seems suitable for our needs.", answer: "Either" },
      { category: 'Pronouns:Indefinite', question: "There isn't [BLANK] milk left in the fridge.", answer: "much" },
      { category: 'Pronouns:Indefinite', question: "[BLANK] received an invitation to the meeting.", answer: "Everyone|They" },
      { category: 'Pronouns:Indefinite', question: "[BLANK] in the audience clapped after the performance.", answer: "Everybody|Nobody" },
      { category: 'Pronouns:Indefinite', question: "She has [BLANK] to say about the new policy.", answer: "something|nothing" },
      { category: 'Pronouns:Indefinite', question: "[BLANK] knows the truth about what happened.", answer: "No one" },
      { category: 'Pronouns:Indefinite', question: "[BLANK] in the team is responsible for their own tasks.", answer: "Each" },
      { category: 'Pronouns:Indefinite', question: "We have [BLANK] time to finish the project.", answer: "enough" },
      { category: 'Pronouns:Indefinite', question: "I need to find [BLANK] else to help me with this.", answer: "someone" },
      { category: 'Pronouns:Indefinite', question: "There's [BLANK] important in this folder.", answer: "something" },
      { category: 'Pronouns:Indefinite', question: "[BLANK] of the cakes were eaten at the party.", answer: "All" },
      { category: 'Pronouns:Indefinite', question: "[BLANK] has borrowed my pen and not returned it.", answer: "Somebody" },
      { category: 'Pronouns:Indefinite', question: "We need [BLANK] more chairs for the meeting room.", answer: "a few|some|a lot" },
      { category: 'Pronouns:Indefinite', question: "There is [BLANK] sugar left in the jar.", answer: "little" },
      { category: 'Pronouns:Indefinite', question: "[BLANK] of them knew the answer to the question.", answer: "Neither" },
      { category: 'Pronouns:Indefinite', question: "Is there [BLANK] in the office who can fix the printer?", answer: "anybody" },
      { category: 'Pronouns:Indefinite', question: "I offered her two options, but she didn't like [BLANK].", answer: "either" },
      { category: 'Pronouns:Indefinite', question: "There's [BLANK] in the rule book about this situation.", answer: "nothing" },
      { category: 'Pronouns:Indefinite', question: "[BLANK] must have taken my book; it's gone.", answer: "Somebody|Someone|They" },
      { category: 'Pronouns:Indefinite', question: "I don't think [BLANK] will be able to solve this problem.", answer: "anyone" },
      { category: 'Pronouns:Indefinite', question: "Can [BLANK] pass me the salt, please?", answer: "someone" },
  
  


// quantifiers
// Create lots of flash cards as JS strings
//   show answer as definition on the other side of the flash card
  

// Much of, many of, few of, a little of, plenty of, lots of, some of, a number of, none of, several of, etc. plenty of, a lot of, lots of, a number of, a couple of, 

//   create JS valid content
//   wrap the strings in double quotes
// focus on work situations
//   here's an example
  
//     { category: 'Quantifiers', question: "In the annual report, there is [BLANK] evidence of progress.", answer: "plenty of" },



{ category: 'Quantifiers', question: "There is [BLANK] demand for our new product in the market.", answer: "a lot of|some|a high amount of" },
  { category: 'Quantifiers', question: "Our team has [BLANK] innovative ideas for the next project.", answer: "a multitude of" },
  { category: 'Quantifiers', question: "In this quarter, we observed [BLANK] growth in sales.", answer: "significant" },
  { category: 'Quantifiers', question: "There are [BLANK] reports that need to be completed by next week.", answer: "numerous" },
  { category: 'Quantifiers', question: "We have [BLANK] clients who prefer personalized services.", answer: "a number of" },
  { category: 'Quantifiers', question: "There is [BLANK] urgency to resolve these customer issues.", answer: "considerable" },
  { category: 'Quantifiers', question: "Our office has [BLANK] space for new employees.", answer: "ample" },
  { category: 'Quantifiers', question: "We need to ensure [BLANK] accuracy in our financial reporting.", answer: "utmost" },
  { category: 'Quantifiers', question: "The new policy has received [BLANK] support from the staff.", answer: "some|a lot of |huge|widespread" },
  { category: 'Quantifiers', question: "There are [BLANK] differences between the two business models.", answer: "substantial" },
  { category: 'Quantifiers', question: "Our research team has [BLANK] knowledge in this field.", answer: "extensive" },
  { category: 'Quantifiers', question: "We've had [BLANK] success with our latest marketing campaign.", answer: "tremendous" },
  { category: 'Quantifiers', question: "There is [BLANK] information we need to review before making a decision.", answer: "a great deal of" },
  { category: 'Quantifiers', question: "In the workshop, there was [BLANK] participation from all departments.", answer: "active" },
  { category: 'Quantifiers', question: "We've received [BLANK] responses to our customer satisfaction survey.", answer: "no|a few|some| quite a few| an overwhelming number of" },

{ category: 'Quantifiers', question: "In the annual report, there is [BLANK] evidence of progress.", answer: "plenty of" },
  { category: 'Quantifiers', question: "During the meeting, we discussed [BLANK] strategies for improvement.", answer: "several of" },
  { category: 'Quantifiers', question: "There are [BLANK] opportunities for advancement in this company.", answer: "many|a few|some" },
  { category: 'Quantifiers', question: "Our team has [BLANK] experience in handling such projects.", answer: "a lot of|a little" },
  { category: 'Quantifiers', question: "We received [BLANK] feedback from the client on our recent work.", answer: "a number of" },
  { category: 'Quantifiers', question: "There is [BLANK] data to support our new marketing strategy.", answer: "plenty of" },
  { category: 'Quantifiers', question: "In our inventory, there are [BLANK] items that need to be restocked soon.", answer: "a few of" },
  { category: 'Quantifiers', question: "I have [BLANK] time to finish this task today.", answer: "a little of" },
  { category: 'Quantifiers', question: "Our budget has [BLANK] room for additional expenses.", answer: "some of" },
  { category: 'Quantifiers', question: "There is [BLANK] need for concern about the deadline.", answer: "no|little" },
  { category: 'Quantifiers', question: "We have [BLANK] team members proficient in the new software.", answer: "several of" },
  { category: 'Quantifiers', question: "This project requires [BLANK] resources than initially anticipated.", answer: "more of" },
  { category: 'Quantifiers', question: "There are [BLANK] discrepancies in the financial report.", answer: "a lot of |some| a few|a couple of" },
  { category: 'Quantifiers', question: "We have [BLANK] chances to win this contract.", answer: "plenty of" },
  { category: 'Quantifiers', question: "In our department, there are [BLANK] skilled professionals.", answer: "lots of" },


//
{
  "category": "Verbs:transitive",
  "question": "The instructor [BLANK] the student's question.",
  "answer": "addresses",
},
{
  "category": "Verbs:transitive",
  "question": "The store [BLANK] a wide variety of products.",
  "answer": "offered",
},
{
  "category": "Verbs:transitive",
  "question": "The employer [BLANK] the employee a raise.",
  "answer": "will pay",
},
{
  category: "Verbs:transitive",
  question: "The friend [BLANK] the book from the library.",
  answer: "has borrowed",
},
{
  category: "Verbs:transitive",
  question: "The teacher [BLANK] the students to the museum.",
  answer: "had brought",
},
{
  category: "Verbs:transitive",
  question: "The parent [BLANK] a letter to the school.",
  answer: "will have sent",
},
{
  category: "Verbs:transitive",
  question: "The child [BLANK] the toy to the dog.",
  answer: "is giving",
},
{
  category: "Verbs:transitive",
  question: "The thief [BLANK] the money from the bank.",
  answer: "was taking",
},
{
  category: "Verbs:transitive",
  question: "The tour guide [BLANK] the tourists around the city.",
  answer: "will be showing",
},
{
  category: "Verbs:transitive",
  question: "The author [BLANK] a book about their travels.",
  answer: "has been writing",
},
{
  category: "Verbs:transitive",
  question: "The student [BLANK] a book for their research.",
  answer: "had been reading",
},
{
  category: "Verbs:transitive",
  question: "The chef [BLANK] a delicious meal for the guests.",
  answer: "will have been cooking",
},
{
  category: "Verbs:transitive",
  question: "The family [BLANK] dinner together every night.",
  answer: "eats",
},
{
  category: "Verbs:transitive",
  question: "The friends [BLANK] drinks at the bar.",
  answer: "drank",
},
{
  category: "Verbs:transitive",
  question: "The teacher [BLANK] the students about the history of the country.",
  answer: "will tell",
},
{
  category: "Verbs:transitive",
  question: "The detective [BLANK] the suspect about the murder.",
  answer: "is asking",
},
{
  category: "Verbs:transitive",
  question: "The student [BLANK] new vocabulary words.",
  answer: "was learning",
},
{
  category: "Verbs:transitive",
  question: "The professor [BLANK] a class on computer science.",
  answer: "will be teaching",
},
{
  category: "Verbs:transitive",
  question: "The carpenter [BLANK] a table for the kitchen.",
  answer: "has been building",
},

{
  category: "Verbs:transitive",
  question: "The mechanic [BLANK] the car and it is now running smoothly.",
  answer: "will have been fixing",
},


{
  category: "Verbs:transitive",
  question: "The instructor [BLANK] the student's question.",
  answer: "addressed",
},
{
  category: "Verbs:transitive",
  question: "The store [BLANK] a wide variety of products.",
  answer: "offers",
},
{
  category: "Verbs:transitive",
  question: "The employer [BLANK] the employee a raise.",
  answer: "paid",
},
{
  category: "Verbs:transitive",
  question: "My friend [BLANK] a book from the library.",
  answer: "borrowed",
},
{
  category: "Verbs:transitive",
  question: "The teacher [BLANK] the students to the museum.",
  answer: "brought",
},
{
  category: "Verbs:transitive",
  question: "The parent [BLANK] a letter to the school.",
  answer: "sent",
},
{
  category: "Verbs:transitive",
  question: "The child [BLANK] the chew toy to the dog.",
  answer: "gave",
},
{
  category: "Verbs:transitive",
  question: "The thief [BLANK] the money from the bank.",
  answer: "takes",
},
{
  category: "Verbs:transitive",
  question: "The tour guide [BLANK] the tourists around the city.",
  answer: "showed",
},
{
  category: "Verbs:transitive",
  question: "The author [BLANK] a book about their travels.",
  answer: "wrote",
},
{
  category: "Verbs:transitive",
  question: "The student [BLANK] a book for their research.",
  answer: "reads",
},
{
  category: "Verbs:transitive",
  question: "The chef [BLANK] a delicious meal for the guests.",
  answer: "cooks",
},
{
  category: "Verbs:transitive",
  question: "The family [BLANK] dinner together every night.",
  answer: "eats",
},
{
  category: "Verbs:transitive",
  question: "The friends [BLANK] beer at the bar.",
  answer: "drink",
},
{
  category: "Verbs:transitive",
  question: "The teacher is [BLANK] the students about the history of the country.",
  answer: "telling",
},
{
  category: "Verbs:transitive",
  question: "The detective [BLANK] the suspect about the murder.",
  answer: "asks",
},
{
  category: "Verbs:transitive",
  question: "The student is [BLANK] new vocabulary words.",
  answer: "learning",
},
{
  category: "Verbs:transitive",
  question: "The professor [BLANK] a class on computer science.",
  answer: "teaches",
},
{
  category: "Verbs:transitive",
  question: "The carpenter is [BLANK] a table for the kitchen.",
  answer: "building",
},
{
  category: "Verbs:transitive",
  question: "The child [BLANK] the vase and it shattered.",
  answer: "broke",
},
{
  category: "Verbs:transitive",
  question: "The mechanic [BLANK] the car and it is now running smoothly.",
  answer: "fixed",
},
{
  category: "Verbs:transitive",
  question: "The designer [BLANK] the color of the room.",
  answer: "changed",
},
{
  category: "Verbs:transitive",
  question: "The customer [BLANK] from a variety of options.",
  answer: "chose",
},
{
  category: "Verbs:transitive",
  question: "The traveler [BLANK] their passport at the airport.",
  answer: "lost",
},
//intransitive verbs
{ category: "Verbs:Intransitive", question: "The athlete will [BLANK] over the hurdle.", answer: "jump" },
{ category: "Verbs:Intransitive", question: "We couldn't help but [BLANK] at the joke.", answer: "laugh" },
{ category: "Verbs:Intransitive", question: "It's time to [BLANK] this place for good.", answer: "leave" },
{ category: "Verbs:Intransitive", question: "Sometimes people [BLANK] on the grass in the park.", answer: "lie" },
{ category: "Verbs:Intransitive", question: "Always [BLANK] to good advice.", answer: "listen" },
{ category: "Verbs:Intransitive", question: "We all [BLANK] in different ways.", answer: "live" },
{ category: "Verbs:Intransitive", question: "She likes to [BLANK] at the stars.", answer: "look" },
{ category: "Verbs:Intransitive", question: "To [BLANK] is a wonderful feeling.", answer: "love" },
{ category: "Verbs:Intransitive", question: "Soldiers [BLANK] during the parade.", answer: "march" },
{ category: "Verbs:Intransitive", question: "Clouds [BLANK] across the sky.", answer: "move" },
{ category: "Verbs:Intransitive", question: "People [BLANK] during emergencies.", answer: "panic" },
{ category: "Verbs:Intransitive", question: "Children [BLANK] at the playground.", answer: "play" },
{ category: "Verbs:Intransitive", question: "It will [BLANK] tomorrow.", answer: "rain" },
{ category: "Verbs:Intransitive", question: "She loves to [BLANK] in the mornings.", answer: "run" },
{ category: "Verbs:Intransitive", question: "The child will [BLANK] when frightened.", answer: "scream" },
{ category: "Verbs:Intransitive", question: "Can you [BLANK] what I see?", answer: "see" },
{ category: "Verbs:Intransitive", question: "Leaves [BLANK] in the wind.", answer: "shake" },
{ category: "Verbs:Intransitive", question: "He likes to [BLANK] in the shower.", answer: "sing" },
{ category: "Verbs:Intransitive", question: "Please [BLANK] and rest for a while.", answer: "sit" },
{ category: "Verbs:Intransitive", question: "We [BLANK] for about eight hours each night.", answer: "sleep" },
{ category: "Verbs:Intransitive", question: "She can't help but [BLANK] when she's happy.", answer: "smile" },
{ category: "Verbs:Intransitive", question: "He started to [BLANK] after smelling the flowers.", answer: "sneeze" },
{ category: "Verbs:Intransitive", question: "It will [BLANK] in the mountains tonight.", answer: "snow" },
{ category: "Verbs:Intransitive", question: "We need to [BLANK] clearly to be understood.", answer: "speak" },
{ category: "Verbs:Intransitive", question: "He can [BLANK] for hours about history.", answer: "talk" },
{ category: "Verbs:Intransitive", question: "Let's take a moment to [BLANK].", answer: "think" },
{ category: "Verbs:Intransitive", question: "Many people [BLANK] to new places for vacation.", answer: "travel" },
{ category: "Verbs:Intransitive", question: "She had to [BLANK] in the line for hours.", answer: "wait" },
{ category: "Verbs:Intransitive", question: "Every morning, he [BLANK] to the park.", answer: "walks" },
{ category: "Verbs:Intransitive", question: "They [BLANK] softly so as not to wake the baby.", answer: "whisper" },
{ category: "Verbs:Intransitive", question: "Many people [BLANK] from nine to five.", answer: "work" },
{ category: "Verbs:Intransitive", question: "The child will [BLANK] when he is upset.", answer: "yell" },
{ category: "Verbs:Intransitive", question: "After a while, we had to [BLANK] again.", answer: "wait" },
{ category: "Verbs:Intransitive", question: "Every evening, she likes to [BLANK] the stars.", answer: "watch" },



  { category: "Verbs:Intransitive", question: "The lawyers [BLANK] fiercely in the courtroom.", answer: "argue" },
  { category: "Verbs:Intransitive", question: "The guests [BLANK] right on time for the party.", answer: "arrive" },
  { category: "Verbs:Intransitive", question: "The dog [BLANK] loudly at the strangers.", answer: "bark" },
  { category: "Verbs:Intransitive", question: "To [BLANK] is to exist.", answer: "be" },
  { category: "Verbs:Intransitive", question: "The caterpillar will [BLANK] into a butterfly.", answer: "become" },
  { category: "Verbs:Intransitive", question: "The child [BLANK] for another piece of candy.", answer: "beg" },
  { category: "Verbs:Intransitive", question: "This book [BLANK] on the shelf.", answer: "belongs" },
  { category: "Verbs:Intransitive", question: "The warrior [BLANK] for his country.", answer: "bleeds" },
  { category: "Verbs:Intransitive", question: "In spring, flowers [BLANK] beautifully.", answer: "bloom" },
  { category: "Verbs:Intransitive", question: "The water [BLANK] when it reaches 100 degrees Celsius.", answer: "boils" },
  { category: "Verbs:Intransitive", question: "We all [BLANK] to stay alive.", answer: "breathe" },
  { category: "Verbs:Intransitive", question: "Bees [BLANK] around the flowers.", answer: "buzz" },
  { category: "Verbs:Intransitive", question: "She will [BLANK] him tonight.", answer: "call" },
  { category: "Verbs:Intransitive", question: "It's important to [BLANK] for others.", answer: "care" },
  { category: "Verbs:Intransitive", question: "Seasons [BLANK] with time.", answer: "change" },
  { category: "Verbs:Intransitive", question: "Christmas will [BLANK] soon.", answer: "come" },
  { category: "Verbs:Intransitive", question: "He began to [BLANK] after catching a cold.", answer: "cough" },
  { category: "Verbs:Intransitive", question: "The baby will [BLANK] if you take away her toy.", answer: "cry" },
  { category: "Verbs:Intransitive", question: "They love to [BLANK] at parties.", answer: "dance" },
  { category: "Verbs:Intransitive", question: "All living things eventually [BLANK].", answer: "die" },
  { category: "Verbs:Intransitive", question: "At night, I [BLANK] of adventures.", answer: "dream" },
  { category: "Verbs:Intransitive", question: "She will [BLANK] for the wedding.", answer: "dress" },
  { category: "Verbs:Intransitive", question: "We need to [BLANK] to survive.", answer: "eat" },
  { category: "Verbs:Intransitive", question: "The actor will [BLANK] the stage.", answer: "enter" },
  { category: "Verbs:Intransitive", question: "Do ghosts really [BLANK]?", answer: "exist" },
  { category: "Verbs:Intransitive", question: "Leaves [BLANK] from the trees in autumn.", answer: "fall" },
  { category: "Verbs:Intransitive", question: "Children [BLANK] so fast.", answer: "grow" },
  { category: "Verbs:Intransitive", question: "Accidents [BLANK] unexpectedly.", answer: "happen" },
  { category: "Verbs:Intransitive", question: "Can you [BLANK] me?", answer: "hear" },
  { category: "Verbs:Intransitive", question: "It [BLANK] when I think of those moments.", answer: "hurts" },
  { category: "Verbs:Intransitive", question: "He likes to [BLANK] every morning.", answer: "jog" },
  




//

  { "category": "Adjectives:Music", "question": "The melody was [BLANK] and captivating.", "answer": "magical|calm|harmonious" },
  { "category": "Adjectives:Music", "question": "Her voice sounded [BLANK] in the high notes.", "answer": "crisp" },
  { "category": "Adjectives:Music", "question": "The rhythm of the song was very [BLANK], perfect for dancing.", "answer": "lively" },
  { "category": "Adjectives:Music", "question": "His guitar solo was [BLANK], leaving the audience in awe.", "answer": "electrifying" },
  { "category": "Adjectives:Music", "question": "The new album has a [BLANK] and soothing quality.", "answer": "calm|restful|mellow" },
  { "category": "Adjectives:Music", "question": "This piece is [BLANK] and full of energy.", "answer": "vibrant" },
  { "category": "Adjectives:Music", "question": "Her performance was [BLANK] and filled with deep emotion.", "answer": "amazing|great|charming|soulful" },
  { "category": "Adjectives:Music", "question": "The choir's harmony was incredibly [BLANK].", "answer": "resonant" },
  { "category": "Adjectives:Music", "question": "The beat of the drum was [BLANK], setting a powerful pace.", "answer": "thunderous" },
  { "category": "Adjectives:Music", "question": "His compositions are known for their [BLANK] complexity.", "answer": "intricate" },



//
{ "category": "Adjectives:Comparatives", "question": "Her backpack is [BLANK] than mine.", "answer": "heavier" },
{ "category": "Adjectives:Comparatives", "question": "This puzzle is [BLANK] than the other one.", "answer": "easier" },
{ "category": "Adjectives:Comparatives", "question": "Our garden is [BLANK] than theirs.", "answer": "bigger" },
{ "category": "Adjectives:Comparatives", "question": "The water in the pool is [BLANK] than the ocean.", "answer": "warmer" },
{ "category": "Adjectives:Comparatives", "question": "Your drawing is [BLANK] than your brother's.", "answer": "more colorful" },
{ "category": "Adjectives:Comparatives", "question": "My ice cream is melting [BLANK] than yours.", "answer": "faster" },
{ "category": "Adjectives:Comparatives", "question": "This book is [BLANK] than that one.", "answer": "more interesting" },
{ "category": "Adjectives:Comparatives", "question": "Her dress is [BLANK] than my skirt.", "answer": "longer" },
{ "category": "Adjectives:Comparatives", "question": "This road is [BLANK] than the highway.", "answer": "narrower" },
{ "category": "Adjectives:Comparatives", "question": "His jokes are [BLANK] than mine.", "answer": "funnier" },
  { "category": "Adjectives:Comparatives", "question": "This report is [BLANK] than the last one.", "answer": "more detailed" },
  { "category": "Adjectives:Comparatives", "question": "Our team is [BLANK] than their team.", "answer": "larger" },
  { "category": "Adjectives:Comparatives", "question": "His presentation was [BLANK] than hers.", "answer": "more engaging" },
  { "category": "Adjectives:Comparatives", "question": "The new software is [BLANK] to use than the old one.", "answer": "easier" },
  { "category": "Adjectives:Comparatives", "question": "This year's sales figures are [BLANK] than last year's.", "answer": "higher" },
  { "category": "Adjectives:Comparatives", "question": "The office on the fifth floor is [BLANK] than ours.", "answer": "more spacious" },
  { "category": "Adjectives:Comparatives", "question": "Her approach to the problem was [BLANK] than his.", "answer": "more creative" },
  { "category": "Adjectives:Comparatives", "question": "The morning meetings are usually [BLANK] than the afternoon ones.", "answer": "shorter" },
  { "category": "Adjectives:Comparatives", "question": "Our coffee machine makes [BLANK] coffee than the one in the lobby.", "answer": "better" },
  { "category": "Adjectives:Comparatives", "question": "The feedback from the manager was [BLANK] this time.", "answer": "more constructive" },


];

let currentCategory = 'All';
let currentCardIndex = 0;
let showingAnswer = false;
let filteredFlashcards = flashcards;
let shownCardsIndices = []; // Declare this array to keep track of shown cards

function getNewCardIndex() {
    let newCardIndex;
    do {
        newCardIndex = Math.floor(Math.random() * filteredFlashcards.length);
    } while (shownCardsIndices.includes(newCardIndex));
    return newCardIndex;
}


// Populate category dropdown
const categorySelect = document.getElementById('categorySelect');
const allCategories = ['All', ...new Set(flashcards.map(card => card.category))];
allCategories.sort(); // Add this line to sort the categories alphabetically

allCategories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
});

// Function to filter and show flashcard
const flashcardDisplay = document.getElementById('flashcardDisplay');
const historyLog = document.getElementById('historyLog');
function filterAndShowFlashcard() {
    filteredFlashcards = currentCategory === 'All' ? flashcards : flashcards.filter(card => card.category === currentCategory);
    currentCardIndex = 0;
    showFlashcard();
}

function showFlashcard() {
    if (filteredFlashcards.length > 0) {
        const card = filteredFlashcards[currentCardIndex];
        flashcardDisplay.textContent = showingAnswer ? card.answer : card.question;
    } else {
        flashcardDisplay.textContent = "No flashcards available in this category.";
    }
}

// Event listeners
categorySelect.addEventListener('change', () => {
    currentCategory = categorySelect.value;
    shownCardsIndices = []; // Reset the shown cards tracking
    filterAndShowFlashcard();
}); // This closing brace was missing


const flipButton = document.getElementById('flipButton');
flipButton.addEventListener('click', () => {
    if (filteredFlashcards.length > 0) {
        showingAnswer = !showingAnswer; // Update showingAnswer first
        const card = filteredFlashcards[currentCardIndex];

        if (showingAnswer) {
            // Append question and answer when showing the answer
            historyLog.value += `Q: ${card.question}\nA: ${card.answer}\n\n`;
        }

        showFlashcard();
    }
});


const nextButton = document.getElementById('nextButton');
nextButton.addEventListener('click', () => {
    if (filteredFlashcards.length > 0) {
        // Check if all cards have been shown
        if (shownCardsIndices.length === filteredFlashcards.length) {
            shownCardsIndices = []; // Reset the tracking array
        }

        currentCardIndex = getNewCardIndex(); // Get a new card index
        shownCardsIndices.push(currentCardIndex);
        showingAnswer = false;
        showFlashcard();
    }
});

// Initialize
filterAndShowFlashcard();
