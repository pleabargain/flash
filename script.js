// Sample flashcard data
const flashcards = [
    { category: 'Math', question: "Welcome to Dennis Daniels' English Lesson!", answer: '4' },
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
{ category: 'Prepositions', question: "I'm thinking [BLANK] going to the store.", answer: "about" },

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

// Continuing from the previous entries...
{
  "category": "Phrasal verbs: work",
  "question": "Can you please _____ that important point in the meeting minutes?",
  "answer": "Note down"
},
{
  "category": "Phrasal verbs: work",
  "question": "After ten years of service, the CEO decided to _____ from his position.",
  "answer": "Step down"
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
  "answer": "Weigh up"
},
{
  "category": "Phrasal verbs: work",
  "question": "Please _____ your work before submitting it.",
  "answer": "Back up"
},
{
  "category": "Phrasal verbs: work",
  "question": "A new issue has _____; we need to address it immediately.",
  "answer": "Come up"
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
// ... continue adding more flashcards in the same format


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
  "question": "I _____ to meeting with the team next week.",
  "answer": "Look forward to"
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
  answer: "'Lay off' is used when a company dismisses employees, often due to financial constraints or restructuring. I just got laid off."
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
  { category: "Phrasal verbs:home", question: "To ___ ___ refers to discarding something as waste.", answer: "throw away" },
  { category: "Phrasal verbs:home", question: "To ___ ___ means to stop the operation of a device.", answer: "switch off|turn off" },
  { category: "Phrasal verbs:home", question: "To ___ ___ involves starting the operation of a device.", answer: "turn on" },
  { category: "Phrasal verbs:home", question: "To ___ ___ means to clean a surface, especially by rubbing it.", answer: "wipe down" },


  //

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
//

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
  "answer": "Each of the jockeys is additionally charged with passing on information for gain."
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
  "category": "Objections",
  "question": "This doesn't align with our current strategy.",
  "answer": "I understand that you need to make sure that any new product you adopt aligns with your current strategy. We can help you understand how our product can support your strategic goals."
},
{
  "category": "Objections",
  "question": "We've had a bad experience with similar products.",
  "answer": "We understand that you've had a bad experience with similar products in the past. We're confident that our product is different and that it can help you achieve your business goals."
},
{
  "category": "Objections",
  "question": "I'm not the right person to make this decision.",
  "answer": "I understand that you may not be the right person to make this decision. We're always happy to speak with the decision-maker at your company."
},
{
  "category": "Objections",
  "question": "We're locked into a contract with another provider.",
  "answer": "We understand that you may be locked into a contract with another provider. We can help you understand your options and make a decision that's right for your business."
},
{
  "category": "Objections",
  "question": "I need to see more evidence of its success.",
  "answer": "We understand that you need to see evidence of our product's success before you invest in it. We can provide you with case studies, testimonials, and other evidence that shows how our product has helped our customers achieve their business goals."
},
{
  "category": "Objections",
  "question": "I'm not interested right now.",
  "answer": "We understand that you're not interested right now. We're always here if you have any questions or want to learn more about our product."
},
{
  "category": "Objections",
  "question": "I'm not the decision-maker.",
  "answer": "I understand that you may not be the decision-maker at your company. We're always happy to speak with the decision-maker."
},
{
  "category": "Objections",
  "question": "I need to think about it.",
  "answer": "Of course, we understand that you need to take some time to think about your decision. We're always here if you have any questions or want to learn more about our product."
},
{
  "category": "Objections",
  "question": "Your product is too expensive.",
  "answer": "I understand that our product is an investment, but we're confident that the value it provides far outweighs the cost. We also offer a variety of pricing options to fit your budget, and we're always happy to work with you to find a solution that's affordable for your business."
},
{
  "category": "Objections",
  "question": "We're already satisfied with our current solution.",
  "answer": "That's great to hear! We're always happy to hear that our customers are happy with their current solution. However, we're confident that our product has a number of advantages that you'll find appealing."
},
{
  "category": "Objections",
  "question": "We've had a bad experience with similar products in the past.",
  "answer": "We understand that you've had a bad experience with similar products in the past. We're confident that our product is different and that it can help you achieve your business goals."
},
{
  "category": "Product",
  "question": "I'm not sure if your product is right for us.",
  "answer": "That's okay! We're always happy to help you determine if our product is a good fit for your business. We can provide you with a demo, case studies, and other resources to help you make an informed decision."
},
{
  "category": "Product",
  "question": "I don't have the time to talk right now.",
  "answer": "I understand that you're busy. We can schedule a call or demo at your convenience. In the meantime, you can learn more about our product on our website."
},



  {
    "category": "Objections",
    "question": "Thank you, but we're not interested at this time.",
    "answer": "Thank you for your time. We understand that you're not ready to make a decision right now. We're always here if you have any questions or want to learn more about our product."
  },
  {
    "category": "Objections",
    "question": "I don't think this meets our needs right now.",
    "answer": "I understand that our product may not be the right fit for you right now. We have a wide range of features and options to choose from, so I'm confident we can find a solution that meets your specific needs."
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
    "answer": "We understand that you have other priorities right now. We're always here when you're ready to learn more about how our product can help you."
  },
  {
    "category": "Objections",
    "question": "We already have a similar solution in place.",
    "answer": "That's great to hear! We're always happy to hear that our customers are happy with their current solution. However, we're confident that our product has a number of advantages that you'll find appealing."
  },
  {
    "category": "Objections",
    "question": "The price point is out of our budget.",
    "answer": "I understand that pricing can be a concern. We offer a variety of pricing options to fit your budget, and we're always happy to work with you to find a solution that's affordable for your business."
  },
  {
    "category": "Objections",
    "question": "Our intergration pipeline is full.",
    "answer": "I understand that you have a lot on your plate right now. We're always happy to work with you to schedule a time for implementation that works for your team."
  },
  {
    "category": "Objections",
    "question": "We don't need your product.",
    "answer": "We understand that you may not need our product right now. However, we're confident that our product can help you achieve your business goals. We're always happy to provide you with more information or answer any questions you may have."
  },
  {
    "category": "Objections",
    "question": "We're not interested in your product.",
    "answer": "We understand that you're not interested in our product right now. We're always here if you have any questions or want to learn more about it."
  },
  {
    "category": "Objections",
    "question": "We're looking for something different.",
    "answer": "I understand that you're looking for something different. We have a wide range of features and options to choose from, so I'm confident we can find a solution that meets your specific needs."
  },


  {
    "category": "Objections",
    "question": "We're already using a similar product.",
    "answer": "I understand that you're already using a similar product. However, our product offers several unique features and benefits that can help you improve your results."
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
    "answer": "I understand that you're busy. We can help you prioritize the implementation so it fits into your schedule."
  },
  {
    "category": "Objections",
    "question": "We're not sure if it's secure enough for our data.",
    "answer": "I understand that security is a top priority. Our product meets the highest industry standards for data security."
  },

  {
    "category": "Objections",
    "question": "Your timeline for implementation is too long.",
    "answer": "I understand that you need a solution quickly. We are committed to providing you with a timeline that meets your needs, and we will work closely with you to prioritize implementation tasks."
  },
  {
    "category": "Objections",
    "question": "We are worried about the impact on our business during implementation.",
    "answer": "I understand that implementing a new solution can disrupt your business operations. We have a proven implementation methodology that minimizes disruption and ensures a smooth transition."
  },
  {
    "category": "Objections",
    "question": "We don't have the resources to dedicate to implementation at this time.",
    "answer": "I understand that staffing is a concern. We offer a variety of implementation options to fit your resources and budget, including self-service, guided assistance, and fully managed implementation."
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
    "answer": "I understand that you're concerned about compatibility. We offer a free trial so you can try our product risk-free."
  },
  {
    "category": "Objections",
    "question": "We don't have the staff to support it.",
    "answer": "I understand that staffing is a concern. We offer a variety of training and support options to help you get the most out of our product."
  },



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
