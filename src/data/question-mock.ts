export const questions = [
  {
    id: 1,
    number: 1,
    question:
      "The professor ____ the results of the study to the class yesterday.",
    options: [
      { id: "a", value: "explains" },
      { id: "b", value: "explained" },
      { id: "c", value: "explaining" },
      { id: "d", value: "was explain" },
    ],
    correct_answer: "b",
    reason:
      "Kalimat berada dalam bentuk lampau (yesterday), jadi kita butuh bentuk past tense dari “explain” yaitu “explained”.",
  },
  {
    id: 2,
    number: 2,
    question:
      "It is important that every student ____ their ID during the exam.",
    options: [
      { id: "a", value: "bring" },
      { id: "b", value: "brings" },
      { id: "c", value: "brought" },
      { id: "d", value: "bringing" },
    ],
    correct_answer: "a",
    reason:
      "Bentuk subjunctive: setelah “that” digunakan bentuk dasar (base form) dari kata kerja.",
  },
  {
    id: 3,
    number: 3,
    question:
      "Neither the manager nor the employees ____ responsible for the error.",
    options: [
      { id: "a", value: "is" },
      { id: "b", value: "are" },
      { id: "c", value: "be" },
      { id: "d", value: "being" },
    ],
    correct_answer: "a",
    reason:
      "TOEFL lebih memilih struktur formal, dan dalam “Neither…nor…” fokus pada subjek pertama jika singular.",
  },
  {
    id: 4,
    number: 4,
    question: "The book, along with the notes, ____ on the desk.",
    options: [
      { id: "a", value: "is" },
      { id: "b", value: "are" },
      { id: "c", value: "were" },
      { id: "d", value: "have been" },
    ],
    correct_answer: "a",
    reason:
      "Frasa tambahan tidak memengaruhi subjek utama “The book” yang tunggal.",
  },
  {
    id: 5,
    number: 5,
    question:
      "Not only ____ the budget reduced, but also several employees were laid off.",
    options: [
      { id: "a", value: "has" },
      { id: "b", value: "was" },
      { id: "c", value: "have" },
      { id: "d", value: "is" },
    ],
    correct_answer: "a",
    reason:
      "Struktur inversi setelah “Not only” menggunakan auxiliary verb “has” untuk subject tunggal.",
  },
  {
    id: 6,
    number: 6,
    question: "Each of the players ____ a locker in the changing room.",
    options: [
      { id: "a", value: "have" },
      { id: "b", value: "has" },
      { id: "c", value: "having" },
      { id: "d", value: "are having" },
    ],
    correct_answer: "b",
    reason:
      "“Each” adalah subjek tunggal, jadi kata kerja yang digunakan adalah “has”.",
  },
  {
    id: 7,
    number: 7,
    question: "The committee ____ made a final decision on the proposal.",
    options: [
      { id: "a", value: "has" },
      { id: "b", value: "have" },
      { id: "c", value: "having" },
      { id: "d", value: "was" },
    ],
    correct_answer: "a",
    reason:
      "“The committee” dianggap sebagai satu kesatuan (singular), jadi menggunakan “has”.",
  },
  {
    id: 8,
    number: 8,
    question: "If she ____ earlier, she would not have missed the meeting.",
    options: [
      { id: "a", value: "left" },
      { id: "b", value: "leaves" },
      { id: "c", value: "had left" },
      { id: "d", value: "was leaving" },
    ],
    correct_answer: "c",
    reason:
      "Ini adalah bentuk third conditional, sehingga membutuhkan “had” + past participle.",
  },
  {
    id: 9,
    number: 9,
    question: "The more he practices, ____ he becomes.",
    options: [
      { id: "a", value: "better" },
      { id: "b", value: "the better" },
      { id: "c", value: "best" },
      { id: "d", value: "the best" },
    ],
    correct_answer: "b",
    reason: "Struktur komparatif ganda: “The more..., the better...”",
  },
  {
    id: 10,
    number: 10,
    question: "The report must ____ before the end of the day.",
    options: [
      { id: "a", value: "submit" },
      { id: "b", value: "submits" },
      { id: "c", value: "be submitted" },
      { id: "d", value: "submitted" },
    ],
    correct_answer: "c",
    reason:
      "Kata kerja modal + “be” + past participle membentuk kalimat pasif.",
  },
  {
    id: 11,
    number: 11,
    question: "By the time she arrives, we ____ eating.",
    options: [
      { id: "a", value: "finish" },
      { id: "b", value: "will finish" },
      { id: "c", value: "have finished" },
      { id: "d", value: "are finishing" },
    ],
    correct_answer: "c",
    reason:
      "Untuk menyatakan sesuatu yang selesai sebelum waktu tertentu di masa depan, gunakan future perfect (“will have + past participle”), tapi di sini “will” sudah dihilangkan karena waktu jelas.",
  },
  {
    id: 12,
    number: 12,
    question:
      "Although the test was difficult, most of the students ____ it well.",
    options: [
      { id: "a", value: "do" },
      { id: "b", value: "did" },
      { id: "c", value: "doing" },
      { id: "d", value: "done" },
    ],
    correct_answer: "b",
    reason:
      "Kalimat dalam bentuk lampau (“was difficult”), jadi jawabannya adalah “did”.",
  },
  {
    id: 13,
    number: 13,
    question: "There ____ a number of interesting articles in the journal.",
    options: [
      { id: "a", value: "is" },
      { id: "b", value: "are" },
      { id: "c", value: "was" },
      { id: "d", value: "has" },
    ],
    correct_answer: "b",
    reason: "“A number of” selalu diikuti oleh plural verb.",
  },
  {
    id: 14,
    number: 14,
    question: "He is the only one of the students who ____ passed the exam.",
    options: [
      { id: "a", value: "have" },
      { id: "b", value: "has" },
      { id: "c", value: "is" },
      { id: "d", value: "was" },
    ],
    correct_answer: "b",
    reason:
      "“Who has passed” merujuk ke “the only one”, jadi verb-nya tunggal.",
  },
  {
    id: 15,
    number: 15,
    question: "Not until the sun set ____ able to see the mountain clearly.",
    options: [
      { id: "a", value: "he was" },
      { id: "b", value: "was he" },
      { id: "c", value: "he is" },
      { id: "d", value: "is he" },
    ],
    correct_answer: "b",
    reason:
      "“Not until…” di awal kalimat menyebabkan inversi: auxiliary + subject.",
  },
  {
    id: 16,
    number: 16,
    question:
      "The student <u>was</u> late to class <u>because</u> he <u>forget</u> to set his alarm <u>clock</u>.",
    options: [
      { id: "a", value: "was" },
      { id: "b", value: "because" },
      { id: "c", value: "forget" },
      { id: "d", value: "clock" },
    ],
    correct_answer: "c",
    reason: "Kata kerja “forget” harus dalam bentuk lampau: “forgot”.",
  },
  {
    id: 17,
    number: 17,
    question:
      "She <u>enjoys</u> to <u>listen</u> to music <u>while</u> she <u>studies</u>.",
    options: [
      { id: "a", value: "enjoys" },
      { id: "b", value: "to listen" },
      { id: "c", value: "while" },
      { id: "d", value: "studies" },
    ],
    correct_answer: "b",
    reason:
      "Setelah “enjoys”, bentuk verb yang tepat adalah gerund: “listening”.",
  },
  {
    id: 18,
    number: 18,
    question:
      "Neither of the answers <u>are</u> <u>correct</u>, so the teacher <u>asked</u> the class to <u>try</u> again.",
    options: [
      { id: "a", value: "are" },
      { id: "b", value: "correct" },
      { id: "c", value: "asked" },
      { id: "d", value: "try" },
    ],
    correct_answer: "a",
    reason: "“Neither” dianggap sebagai subjek tunggal, jadi seharusnya “is”.",
  },
  {
    id: 19,
    number: 19,
    question:
      "My brother <u>who</u> lives in Jakarta <u>have</u> three <u>cats</u> and a <u>dog</u>.",
    options: [
      { id: "a", value: "who" },
      { id: "b", value: "have" },
      { id: "c", value: "cats" },
      { id: "d", value: "dog" },
    ],
    correct_answer: "b",
    reason: "Subjek tunggal “my brother” membutuhkan kata kerja “has”.",
  },
  {
    id: 20,
    number: 20,
    question:
      "The <u>informations</u> you gave me <u>was</u> very <u>helpful</u> and <u>appreciated</u>.",
    options: [
      { id: "a", value: "informations" },
      { id: "b", value: "was" },
      { id: "c", value: "helpful" },
      { id: "d", value: "appreciated" },
    ],
    correct_answer: "a",
    reason: "“Information” adalah uncountable noun dan tidak berbentuk jamak.",
  },
  {
    id: 21,
    number: 21,
    question:
      "Each of the <u>employee</u> in the company <u>are</u> given a bonus <u>at</u> the end of the <u>year</u>.",
    options: [
      { id: "a", value: "employee" },
      { id: "b", value: "are" },
      { id: "c", value: "at" },
      { id: "d", value: "year" },
    ],
    correct_answer: "b",
    reason: "Subjek “Each” bersifat tunggal, jadi kata kerjanya harus “is”.",
  },
  {
    id: 22,
    number: 22,
    question:
      "He <u>don’t</u> know <u>where</u> the <u>library</u> is <u>located</u>.",
    options: [
      { id: "a", value: "don’t" },
      { id: "b", value: "where" },
      { id: "c", value: "library" },
      { id: "d", value: "located" },
    ],
    correct_answer: "a",
    reason: "Untuk subjek “He”, gunakan “doesn’t”.",
  },
  {
    id: 23,
    number: 23,
    question:
      "The children <u>was</u> excited <u>about</u> the <u>trip</u> to the <u>zoo</u>.",
    options: [
      { id: "a", value: "was" },
      { id: "b", value: "about" },
      { id: "c", value: "trip" },
      { id: "d", value: "zoo" },
    ],
    correct_answer: "a",
    reason: "Subjek plural “children” memerlukan kata kerja “were”.",
  },
  {
    id: 24,
    number: 24,
    question:
      "If she <u>will arrive</u> early, we <u>can</u> start the <u>meeting</u> <u>on time</u>.",
    options: [
      { id: "a", value: "will arrive" },
      { id: "b", value: "can" },
      { id: "c", value: "meeting" },
      { id: "d", value: "on time" },
    ],
    correct_answer: "a",
    reason: "Dalam klausa “if”, gunakan simple present: “arrives”.",
  },
  {
    id: 25,
    number: 25,
    question:
      "I <u>look</u> forward to <u>meet</u> you <u>at</u> the <u>conference</u>.",
    options: [
      { id: "a", value: "look" },
      { id: "b", value: "meet" },
      { id: "c", value: "at" },
      { id: "d", value: "conference" },
    ],
    correct_answer: "b",
    reason: "Setelah “look forward to”, gunakan bentuk gerund: “meeting”.",
  },
  {
    id: 26,
    number: 26,
    question:
      "The book <u>that</u> you gave me <u>are</u> <u>very</u> interesting <u>to read</u>.",
    options: [
      { id: "a", value: "that" },
      { id: "b", value: "are" },
      { id: "c", value: "very" },
      { id: "d", value: "to read" },
    ],
    correct_answer: "b",
    reason: "Subjek “The book” adalah tunggal, jadi kata kerja harus “is”.",
  },
  {
    id: 27,
    number: 27,
    question:
      "The <u>news</u> <u>were</u> announced <u>during</u> the <u>meeting</u>.",
    options: [
      { id: "a", value: "news" },
      { id: "b", value: "were" },
      { id: "c", value: "during" },
      { id: "d", value: "meeting" },
    ],
    correct_answer: "b",
    reason: "“News” adalah uncountable noun, jadi gunakan “was”.",
  },
  {
    id: 28,
    number: 28,
    question:
      "The teacher <u>encourages</u> students <u>read</u> books <u>outside</u> class <u>to improve</u> their vocabulary.",
    options: [
      { id: "a", value: "encourages" },
      { id: "b", value: "read" },
      { id: "c", value: "outside" },
      { id: "d", value: "to improve" },
    ],
    correct_answer: "b",
    reason: "Setelah “encourages”, gunakan “to read” atau “reading”.",
  },
];
