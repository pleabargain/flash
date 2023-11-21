// Sample flashcard data
const flashcards = [
    { category: 'Math', question: '2 + 2', answer: '4' },
    { category: 'Science', question: 'Water formula', answer: 'H2O' },
    { category: 'Prepositions', question: 'The book is [BLANK] the table.', answer: 'on|under|near' },
{ category: 'Prepositions', question: 'I know her [BLANK] her name.', answer: 'by' },
{ category: 'Prepositions', question: 'I am [BLANK] the store.', answer: 'in|at|near|close to' },
{ category: 'Prepositions', question: 'I will be there [BLANK] 5 minutes.', answer: 'in|for' },
{ category: 'Prepositions', question: 'I am not good [BLANK] math.', answer: 'at' },
{ category: 'Prepositions', question: 'I got a gift [BLANK] my friend.', answer: 'from|for' },
{ category: 'Prepositions', question: "The meeting is [BLANK] 10 o'clock.", answer: 'at' },
{ category: 'Prepositions', question: 'I am [BLANK] the exam.', answer: 'at' },
{ category: 'Prepositions', question: 'I know her [BLANK]  name.', answer: 'by' },
{ category: 'Prepositions', question: "I saw her [BLANK] the bookstore.", answer: "at|in|inside" },
{ category: 'Prepositions', question: "I went to the park [BLANK] my dog.", answer: "with" },
{ category: 'Prepositions', question: "I put the book [BLANK] the table.", answer: "on|under|next to" },
{ category: 'Prepositions', question: "I got a gift [BLANK] my friend.", answer: "for|from" },
{ category: 'Prepositions', question: "I'm afraid [BLANK] heights.", answer: "of" },
{ category: 'Prepositions', question: "I'm good [BLANK] math.", answer: "at" },
{ category: 'Prepositions', question: "I'm thinking [BLANK] going to the beach.", answer: "about" },
{ category: 'Prepositions', question: "I'm tired [BLANK] work.", answer: "of" },
{ category: 'Prepositions', question: "I'm waiting [BLANK] my friend.", answer: "for|next to" },
{ category: 'Prepositions', question: "I'm worried [BLANK] my exam.", answer: "about" },


//
{
    "category": "Christmas",
    "question": "'The [Christmas tree|scented candle] is so [BLANK] that it fills the whole room with a festive smell.'",
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


{ category: 'Pronouns: Interrogative', question: "______ are you going?", answer: "Where|When" },
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
    { category: 'Pronouns: Interrogative', question: "______ are you meeting him?", answer: "Who" },
    { category: 'Pronouns: Interrogative', question: "______ is your best friend?", answer: "Who" },
    { category: 'Pronouns: Interrogative', question: "______ won the match yesterday?", answer: "Who" },
    { category: 'Pronouns: Interrogative', question: "______ told you this story?", answer: "Who" },
    { category: 'Pronouns: Interrogative', question: "______ are you going to vote for?", answer: "Who" },
  
      { category: 'Pronouns: Interrogative', question: "______ is the deadline for this project?", answer: "What" },
      { category: 'Pronouns: Interrogative', question: "______ are we having the team meeting?", answer: "Where" },
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
      { category: 'Pronouns: Interrogative', question: "______ is the procedure for remote work applications?", answer: "What" },
  
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
  { category: "Adverbs of Manner", question: "She waters the plants [BLANK].", answer: "carefully" },
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

{ category: 'Pronouns', question: "I went to the store with [BLANK].", answer: "\"my friend\"" },
{ category: 'Pronouns', question: "The teacher gave [BLANK] students a homework assignment.", answer: "\"her\"" },
{ category: 'Pronouns', question: "The cat chased [BLANK] tail.", answer: "\"its\"" },
{ category: 'Pronouns', question: "The children played with [BLANK] toys.", answer: "\"their\"" },
{ category: 'Pronouns', question: "The dog barked at [BLANK] reflection in the mirror.", answer: "\"its\"" },
{ category: 'Pronouns', question: "The students studied for [BLANK] exam.", answer: "\"their\"" },
{ category: 'Pronouns', question: "The teacher praised [BLANK] students for their hard work.", answer: "\"her|his\"" },
{ category: 'Pronouns', question: "The cat curled up on [BLANK] lap.", answer: "\"my\"" },
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
    
//
{ category: 'Interjections', question: "Oh no! I [BLANK] my keys!", answer: "\"lost\"" },
{ category: 'Interjections', question: "Ouch! That [BLANK]!", answer: "\"hurt\"" },
{ category: 'Interjections', question: "Wow! That was an [BLANK] game!", answer: "\"amazing | awesome\"" },
{ category: 'Interjections', question: "Hey! Can you [BLANK] me a hand over here!", answer: "\"give\"" },
{ category: 'Interjections', question: "Ugh! I feel [BLANK] today.", answer: "\"awful|crushed|bad|sick|terrible\"" },
{ category: 'Interjections', question: "Alas! My [BLANK] plan has failed!", answer: "\"awesome|perfect|great|dastardly\"" },
{ category: 'Interjections', question: "Bingo! I [BLANK] the lottery!", answer: "\"won\"" },
{ category: 'Interjections', question: "Eww! That food looks [BLANK]!", answer: "\"gross|terrible\"" },
{ category: 'Interjections', question: "Phew! That was a [BLANK] call!", answer: "\"close\"" },
{ category: 'Interjections', question: "Yeehaw! I'm finally [BLANK]!", answer: "\"free|done|finished|rich\"" },

//
{ category: 'Determiners', question: "I have [BLANK] apples.", answer: "\"two|three|\"" },
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
{ "category": "Adjectives:Superlatives", "question": "The store with the widest range of products in a shopping mall is often referred to as [BLANK].", "answer": " the most diverse" },
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
  "answer": "drug"
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
  "answer": "medication list"
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
  "answer": "antimicrobial agent"
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
  "answer": "elements"
},
{
  "category": "Marketing",
  "question": "The [BLANK] of marketing is the process of understanding the needs and wants of consumers.",
  "answer": "research"
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
  { category: 'Procurement Terms', question: "What does 'Capital Equipment' refer to?", answer: "Assets listed on an organization’s accounting records that have value and are durable." },
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
  { category: 'Procurement Terms', question: "Define 'EBITDA'.", answer: "Earnings before interest, taxes, depreciation, and amortization, a measure of a company’s operating performance." },
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
  { category: 'Procurement Terms', question: "Explain 'Letter of Credit'.", answer: "A payment form in international trade transferring funds from the buyer’s to the seller’s bank account." },
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
  "question": "A [BLANK] is a period of time when the temperature is below freezing.",
  "answer": "frostbite"
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
}


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
{ "category": "Adjectives:Business", "question": "'Our company is [BLANK] with the latest technologies.'" , "answer": 'innovating|up-to-date|leading|current|familiar' },
{ "category": "Adjectives:Business", "question": "'We offer a [BLANK] range of products and services.'" , "answer": 'diverse|comprehensive|wide' },
{ "category": "Adjectives:Business", "question": "'Our team is [BLANK] and experienced.'" , "answer": 'professional|well-respected|skilled' },
{ "category": "Adjectives:Business", "question": "'We provide [BLANK] customer service.'" , "answer": 'excellent' },
{ "category": "Adjectives:Business", "question": "'Our products are [BLANK] and affordable.'" , "answer": 'reliable|high-quality' },
{ "category": "Adjectives:Business", "question": "'We are a [BLANK] company.'" , "answer": 'reliable' },
{ "category": "Adjectives:Business", "question": "'We offer [BLANK] solutions.'" , "answer": 'innovative|digital|comprehensive|unbeatable' },
{ "category": "Adjectives:Business", "question": "'Our company is [BLANK] in the market.'" , "answer": 'well-established' },
{ "category": "Adjectives:Business", "question": "'We are committed to [BLANK] our customers.'" , "answer": 'satisfying' },
{ "category": "Adjectives:Business", "question": "'We strive to provide a [BLANK] work environment.'" , "answer": 'positive' },
{ "category": "Adjectives:Business", "question": "'Our company is [BLANK] on social responsibility.'" , "answer": 'focused' },
{ "category": "Adjectives:Business", "question": "'We offer [BLANK] opportunities for growth.'" , "answer": 'exciting|some|comprehensive|' },
{ "category": "Adjectives:Business", "question": "'Our company is [BLANK] for its commitment to sustainability.'" , "answer": 'recognized' },
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
    "answer": "dedicated"
  },
  {
    "category": "Adjectives:Business",
    "question": "'We are committed to providing [BLANK] customer service that goes above and beyond.'",
    "answer": "exceptional|excellent|outstanding|unparalleled|unmatched|quality|comprehensive|superior|top-notch|world-class"
  },
  {
    "category": "Adjectives:Business",
    "question": "'Our products are renowned for their [BLANK] quality and durability.'",
    "answer": "uncompromising"
  },
  {
    "category": "Adjectives:Business",
    "question": "'Our company has established a [BLANK] reputation for excellence in the industry.'",
    "answer": "stellar"
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
    "answer": "ample"
  },
  {
    "category": "Adjectives:Business",
    "question": "'Our company is [BLANK] for its commitment to providing exceptional service to its customers.'",
    "answer": "renowned|recognized|known|famous|well known"
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
{category: 'Adjectives:animals', question: "The [BLANK] lion is the king of the jungle.", answer: "mighty" },
{category: 'Adjectives:animals', question: "The [BLANK] cheetah is the fastest land animal on Earth.", answer: "quick" },
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
{category: 'Adjectives:work', question: "My job as a writer is very [BLANK].", answer: "creative"},
{category: 'Adjectives:work', question: "My job as a social worker is very [BLANK].", answer: "rewarding"},
{category: 'Adjectives:work', question: "My job as a lawyer is very [BLANK].", answer: "demanding|exciting|inspiring|stressful|interesting"},

//
{ category: 'Adjectives:Food', question: 'A [BLANK] meal is a satisfying one.', answer: 'hearty' },
{ category: 'Adjectives:Food', question: 'I love the [BLANK] taste of fresh strawberries.', answer: 'sweet' },
{ category: 'Adjectives:Food', question: 'This soup is so [BLANK] that it warms my soul.', answer: 'comforting' },
{ category: 'Adjectives:Food', question: 'The aroma of freshly baked bread is [BLANK] irresistible.', answer: 'enticing' },
{ category: 'Adjectives:Food', question: "I crave the [BLANK] taste of my grandmother's chocolate chip cookies.", answer: 'homey' },
{ category: 'Adjectives:Food', question: "A [BLANK] salad is full of fresh, vibrant flavors.", answer: "refreshing" },
{ category: 'Adjectives:Food', question: "I love the [BLANK] combination of sweet and savory in this dish.", answer: "delectable" },
{ category: 'Adjectives:Food', question: "This pasta is so [BLANK] that it melts in your mouth.", answer: "tender" },
{ category: 'Adjectives:Food', question: "The [BLANK] aroma of freshly brewed coffee is always a welcome morning greeting.", answer: "invigorating" },
{ category: 'Adjectives:Food', question: "I crave the [BLANK] taste of my favorite childhood snack.", answer: "nostalgic" },

//
{ category: 'Verbs:irregular', question: "I [BLANK] to the store yesterday.", answer: "went" },
{ category: 'Verbs:irregular', question: "I [BLANK] a book yesterday.", answer: "read" },
{ category: 'Verbs:irregular', question: "I [BLANK] dinner at 7:00 PM last night.", answer: "had|ate|went to|went out for|" },
{ category: 'Verbs:irregular', question: "I [BLANK] a walk in the park this morning.", answer: "took" },
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
{ category: 'Verbs:irregular', question: "I [BLANK] a song for my talent show last month.", answer: "wrote" },
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
{ category: 'Verbs:common', question: "I [BLANK] a gift for my friend's birthday last week.", answer: "gave" },
{ category: 'Verbs:common', question: "I [BLANK] a new pair of shoes last month.", answer: "bought" },
{ category: 'Verbs:common', question: "I [BLANK] a poem for my English class last week.", answer: "wrote" },
{ category: 'Verbs:common', question: "I [BLANK] a nap after lunch today.", answer: "took" },
{ category: 'Verbs:common', question: "I [BLANK] a quiz in math class today.", answer: "had" },
{ category: 'Verbs:common', question: "I [BLANK] a bike ride with my friends this morning.", answer: "went" },
{ category: 'Verbs:common', question: "I [BLANK] a new plant for my apartment last week.", answer: "bought" },
{ category: 'Verbs:common', question: "I [BLANK] a song for my talent show last month.", answer: "wrote" },
{ category: 'Verbs:common', question: "I [BLANK] a delicious dinner for my family tonight.", answer: "made" },
{ category: 'Verbs:common', question: "I [BLANK] to the beach yesterday.", answer: "went" },
{ category: 'Verbs:common', question: "I [BLANK] a swimming pool at my house.", answer: "have" },
{ category: 'Verbs:common', question: "I [BLANK] a sandwich for lunch today.", answer: "made" },
{ category: 'Verbs:common', question: "I [BLANK] my teeth every morning and night.", answer: "brush" },
{ category: 'Verbs:common', question: "I [BLANK] my hair every day.", answer: "wash" },
{ category: 'Verbs:common', question: "I [BLANK] my clothes every week.", answer: "wash" },
{ category: 'Verbs:common', question: "I [BLANK] my room every week.", answer: "clean" },
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




//
{ category: 'Pronouns:Indefinite', question: "Someone left [BLANK] phone in the conference room.", answer: "their" },
    { category: 'Pronouns:Indefinite', question: "Everybody needs [BLANK] to feel important.", answer: "someone" },
    { category: 'Pronouns:Indefinite', question: "Anyone can join the club, but [BLANK] has to follow the rules.", answer: "everyone" },
    { category: 'Pronouns:Indefinite', question: "I will bring snacks, but [BLANK] needs to bring their own drinks.", answer: "everyone" },
    { category: 'Pronouns:Indefinite', question: "[BLANK] knows that honesty is important in relationships.", answer: "Everyone" },
    { category: 'Pronouns:Indefinite', question: "In the lost and found box, there are somethings that [BLANK] forgot.", answer: "someone" },
    { category: 'Pronouns:Indefinite', question: "Nobody understood the joke, so [BLANK] laughed.", answer: "no one" },

    
      { category: 'Pronouns:Indefinite', question: "Can [BLANK] help me with this task?", answer: "anyone" },
      { category: 'Pronouns:Indefinite', question: "I haven't got [BLANK] to wear for the event.", answer: "anything" },
      { category: 'Pronouns:Indefinite', question: "[BLANK] of the two options seems suitable for our needs.", answer: "Either" },
      { category: 'Pronouns:Indefinite', question: "There isn't [BLANK] milk left in the fridge.", answer: "much" },
      { category: 'Pronouns:Indefinite', question: "[BLANK] received an invitation to the meeting.", answer: "Everyone" },
      { category: 'Pronouns:Indefinite', question: "[BLANK] in the audience clapped after the performance.", answer: "Everybody" },
      { category: 'Pronouns:Indefinite', question: "She has [BLANK] to say about the new policy.", answer: "nothing" },
      { category: 'Pronouns:Indefinite', question: "[BLANK] knows the truth about what happened.", answer: "No one" },
      { category: 'Pronouns:Indefinite', question: "[BLANK] in the team is responsible for their own tasks.", answer: "Each" },
      { category: 'Pronouns:Indefinite', question: "We have [BLANK] time to finish the project.", answer: "enough" },
      { category: 'Pronouns:Indefinite', question: "I need to find [BLANK] else to help me with this.", answer: "someone" },
      { category: 'Pronouns:Indefinite', question: "There's [BLANK] important in this folder.", answer: "something" },
      { category: 'Pronouns:Indefinite', question: "[BLANK] of the cakes were eaten at the party.", answer: "All" },
      { category: 'Pronouns:Indefinite', question: "[BLANK] has borrowed my pen and not returned it.", answer: "Somebody" },
      { category: 'Pronouns:Indefinite', question: "We need [BLANK] more chairs for the meeting room.", answer: "a few" },
      { category: 'Pronouns:Indefinite', question: "There is [BLANK] sugar left in the jar.", answer: "little" },
      { category: 'Pronouns:Indefinite', question: "[BLANK] of them knew the answer to the question.", answer: "Neither" },
      { category: 'Pronouns:Indefinite', question: "Is there [BLANK] in the office who can fix the printer?", answer: "anybody" },
      { category: 'Pronouns:Indefinite', question: "I offered her two options, but she didn't like [BLANK].", answer: "either" },
      { category: 'Pronouns:Indefinite', question: "There's [BLANK] in the rule book about this situation.", answer: "nothing" },
      { category: 'Pronouns:Indefinite', question: "[BLANK] must have taken my book; it's gone.", answer: "Somebody" },
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
