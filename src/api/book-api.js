const books = [
    {
        id: "_wnzd23udy",
        name: "In Search of Lost Time",
        description: "Swann's Way, the first part of A la recherche de temps perdu, Marcel Proust's seven-part cycle, was published in 1913. In it, Proust introduces the themes that run through the entire work. The narrator recalls his childhood, aided by the famous madeleine; and describes M. Swann's passion for Odette. The work is incomparable. Edmund Wilson said '[Proust] has supplied for the first time in literature an equivalent in the full scale for the new theory of modern physics.'",
        author: "Marcel Proust",
        photo: "https://images-na.ssl-images-amazon.com/images/I/51A685AMYoL._SL160_.jpg"
    },
    {
        id: "_wmzd88udx",
        name: "Don Quixote",
        description: "Alonso Quixano, a retired country gentleman in his fifties, lives in an unnamed section of La Mancha with his niece and a housekeeper. He has become obsessed with books of chivalry, and believes their every word to be true, despite the fact that many of the events in them are clearly impossible. Quixano eventually appears to other people to have lost his mind from little sleep and food and because of so much reading.",
        author: "Miguel de Cervantes",
        photo: "https://images-na.ssl-images-amazon.com/images/I/41u9Jedk-mL._SL160_.jpg"
    },
    {
        id: "_xnzr29ido",
        name: "Ulysses",
        description: "Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904. The title parallels and alludes to Odysseus (Latinised into Ulysses), the hero of Homer's Odyssey (e.g., the correspondences between Leopold Bloom and Odysseus, Molly Bloom and Penelope, and Stephen Dedalus and Telemachus). Joyce fans worldwide now celebrate June 16 as Bloomsday",
        author: "James Joyce",
        photo: "https://images-na.ssl-images-amazon.com/images/I/51wTLf4JVwL._SL160_.jpg"
    },
    {
        id: "_abcv46uff",
        name: "The Great Gatsby",
        description: "The novel chronicles an era that Fitzgerald himself dubbed the 'Jazz Age'. Following the shock and chaos of World War I, American society enjoyed unprecedented levels of prosperity during the 'roaring' 1920s as the economy soared. At the same time, Prohibition, the ban on the sale and manufacture of alcohol as mandated by the Eighteenth Amendment, made millionaires out of bootleggers and led to an increase in organized crime, for example the Jewish mafia. Although Fitzgerald, like Nick Carraway in his novel, idolized the riches and glamor of the age, he was uncomfortable with the unrestrained materialism and the lack of morality that went with it, a kind of decadence",
        author: "F. Scott Fitzgerald",         
        photo: "https://images-na.ssl-images-amazon.com/images/I/51vv75oglyL._SL160_.jpg"
    },
    {
        id: "_yyzd02udd",
        name: "Hamlet",
        description: "The Tragedy of Hamlet, Prince of Denmark, or more simply Hamlet, is a tragedy by William Shakespeare, believed to have been written between 1599 and 1601. The play, set in Denmark, recounts how Prince Hamlet exacts revenge on his uncle Claudius, who has murdered Hamlet's father, the King, and then taken the throne and married Gertrude, Hamlet's mother. The play vividly charts the course of real and feigned madness—from overwhelming grief to seething rage—and explores themes of treachery, revenge, incest, and moral corruption",
        author: "William Shakespeare",         
        photo: "https://images-na.ssl-images-amazon.com/images/I/51dhOwUuI3L._SL160_.jpg"
    },
    {
        id: "_onzp79uuu",
        name: "War and Peace",
        description: "Epic in scale, War and Peace delineates in graphic detail events leading up to Napoleon's invasion of Russia, and the impact of the Napoleonic era on Tsarist society, as seen through the eyes of five Russian aristocratic families",
        author: "Leo Tolstoy",         
        photo: "https://images-na.ssl-images-amazon.com/images/I/51J1nb00FLL._SL160_.jpg"
    },
    {
        id: "_obzd66urz",
        name: "The Odyssey",
        description: "The Odyssey is one of two major ancient Greek epic poems attributed to Homer. It is, in part, a sequel to the Iliad, the other work traditionally ascribed to Homer. The poem is fundamental to the modern Western canon. Indeed it is the second—the Iliad being the first—extant work of Western literature. It was probably composed near the end of the eighth century BC, somewhere in Ionia, the Greek-speaking coastal region of what is now Turkey. The poem mainly centers on the Greek hero Odysseus (or Ulysses, as he was known in Roman myths) and his long journey home following the fall of Troy. It takes Odysseus ten years to reach Ithaca after the ten-year Trojan War. In his absence, it is assumed he has died, and his wife Penelope and son Telemachus must deal with a group of unruly suitors, the Mnesteres or Proci, competing for Penelope's hand in marriage",
        author: "Homer",         
        photo: "https://images-na.ssl-images-amazon.com/images/I/51FR8mSgqoL._SL160_.jpg"
    },
    {
        id: "_opzd19yyy",
        name: "The Divine Comedy",
        description: "Belonging in the immortal company of the great works of literature, Dante Alighieri's poetic masterpiece, The Divine Comedy, is a moving human drama, an unforgettable visionary journey through the infinite torment of Hell, up the arduous slopes of Purgatory, and on to the glorious realm of Paradise — the sphere of universal harmony and eternal salvation",
        author: "Dante Alighieri",         
        photo: "https://images-na.ssl-images-amazon.com/images/I/61Ml8RHqxrL._SL160_.jpg"
    },
    {
        id: "_wfzd00udd",
        name: "The Brothers Karamazov",
        description: "Dostoevskys last and greatest novel, The Karamazov Brothers, is both a brilliantly told crime story and a passionate philosophical debate. The dissolute landowner Fyodor Pavlovich Karamazov is murdered; his sons — the atheist intellectual Ivan, the hot-blooded Dmitry, and the saintly novice Alyosha — are all at some level involved. Bound up with this intense family drama is Dostoevsky's exploration of many deeply felt ideas about the existence of God, the question of human freedom, the collective nature of guilt, the disastrous consequences of rationalism. The novel is also richly comic: the Russian Orthodox Church, the legal system, and even the author's most cherished causes and beliefs are presented with a note of irreverence, so that orthodoxy and radicalism, sanity and madness, love and hatred, right and wrong are no longer mutually exclusive. Rebecca West considered it 'the allegory for the world's maturity, but with children to the fore.' This new translation does full justice to Dostoevsky's genius, particularly in the use of the spoken word, which ranges over every mode of human expression",
        author: "Fyodor Dostoyevsky",         
        photo: "http://ecx.images-amazon.com/images/I/51c4Gb6Uo0L._SL160_.jpg"
    },
    {
        id: "_nnzd69udd",
        name: "The Adventures of Huckleberry",
        description: "Revered by all of the town's children and dreaded by all of its mothers, Huckleberry Finn is indisputably the most appealing child-hero in American literature. Unlike the tall-tale, idyllic world of Tom Sawyer, The Adventures of Huckleberry Finn is firmly grounded in early reality. From the abusive drunkard who serves as Huckleberry's father, to Huck's first tentative grappling with issues of personal liberty and the unknown, Huckleberry Finn endeavors to delve quite a bit deeper into the complexities — both joyful and tragic of life",
        author: "Mark Twain",         
        photo: "http://ecx.images-amazon.com/images/I/51Ht1M-GPXL._SL160_.jpg"
    },
    {
        id: "_oezd03por",
        name: "The Iliad",
        description: "The Iliad is an epic poem in dactylic hexameters, traditionally attributed to Homer. Set in the Trojan War, the ten-year siege of Ilium by a coalition of Greek states, it tells of the battles and events during the weeks of a quarrel between King Agamemnon and the warrior Achilles. Although the story covers only a few weeks in the final year of the war, the Iliad mentions or alludes to many of the Greek legends about the siege. Along with the Odyssey, also attributed to Homer, the Iliad is among the oldest extant works of Western literature, and its written version is usually dated to around the eighth century BC. The Iliad contains approximately 15,700 lines, and is written in a literary amalgam of several Greek dialects. The authorship of the poem is disputed",
        author: "Homer",         
        photo: "http://ecx.images-amazon.com/images/I/512j6byhjvL._SL160_.jpg"
    },
    {
        id: "_wfpd93upe",
        name: "Alice's Adventures in Wonderland",
        description: "In 1862 Charles Lutwidge Dodgson, a shy Oxford mathematician with a stammer, created a story about a little girl tumbling down a rabbit hole. Thus began the immortal adventures of Alice, perhaps the most popular heroine in English literature. Countless scholars have tried to define the charm of the Alice books–with those wonderfully eccentric characters the Queen of Hearts, Tweedledum, and Tweedledee, the Cheshire Cat, Mock Turtle, the Mad Hatter et al.–by proclaiming that they really comprise a satire on language, a political allegory, a parody of Victorian children’s literature, even a reflection of contemporary ecclesiastical history. Perhaps, as Dodgson might have said, Alice is no more than a dream, a fairy tale about the trials and tribulations of growing up–or down, or all turned round–as seen through the expert eyes of a child",
        author: "Lewis Carroll",         
        photo: "http://ecx.images-amazon.com/images/I/41h9Pz2qeIL._SL160_.jpg"
    },
    {
        id: "_wozd33zdf",
        name: "To the Lighthouse",
        description: "A landmark novel of high modernism, the text, centering on the Ramsay family and their visits to the Isle of Skye in Scotland between 1910 and 1920, skillfully manipulates temporality and psychological exploration. The novel includes little dialogue and almost no action; most of it is written as thoughts and observations. The novel recalls the power of childhood emotions and highlights the impermanence of adult relationships. Among the book's many tropes and themes are those of loss, subjectivity, and the problem of perception",
        author: "Virginia Woolf",         
        photo: "https://images-na.ssl-images-amazon.com/images/I/512RH0o4H2L._SL160_.jpg"
    }
]

const delay = 500;

class BookApi {
    static getAllBooks() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Object.assign([], books));
            }, delay);
        });
    }

    static saveBook(book) {
        book = Object.assign({}, book); 
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(book);
            }, delay);
        });
    }

    static getBook(bookId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const existingBookIndex = books.findIndex(book => book.id === bookId);
                const bookFound = Object.assign({}, books[existingBookIndex]);
                resolve(bookFound);
            }, delay);
        });
    }

    static deleteBook(bookId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const indexOfBookToDelete = books.findIndex(book => book.id === bookId);
                books.splice(indexOfBookToDelete, 1);
                resolve();
            }, delay);
        });
    }
}

export default BookApi;