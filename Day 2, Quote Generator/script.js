// Data: Array of 100 Quote Objects
const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", author: "Helen Keller" },
    { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Happiness depends upon ourselves.", author: "Aristotle" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
    { text: "Whatever you are, be a good one.", author: "Abraham Lincoln" },
    { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    { text: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
    { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { text: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" },
    { text: "The mind is everything. What you think you become.", author: "Buddha" },
    { text: "The best revenge is massive success.", author: "Frank Sinatra" },
    { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
    { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas A. Edison" },
    { text: "A person who never made a mistake never tried anything new.", author: "Albert Einstein" },
    { text: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
    { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "You can never plan the future by the past.", author: "Edmund Burke" },
    { text: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche" },
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
    { text: "Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas A. Edison" },
    { text: "If you look at what you have in life, you'll always have more.", author: "Oprah Winfrey" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { text: "Well done is better than well said.", author: "Benjamin Franklin" },
    { text: "You learn more from failure than from success. Don't let it stop you. Failure builds character.", author: "Unknown" },
    { text: "It is better to be hated for what you are than to be loved for what you are not.", author: "André Gide" },
    { text: "A friend is someone who knows all about you and still loves you.", author: "Elbert Hubbard" },
    { text: "Always remember that you are absolutely unique. Just like everyone else.", author: "Margaret Mead" },
    { text: "Do not let making a living prevent you from making a life.", author: "John Wooden" },
    { text: "The price of anything is the amount of life you exchange for it.", author: "Henry David Thoreau" },
    { text: "It is never too late to be what you might have been.", author: "George Eliot" },
    { text: "We become what we think about.", author: "Earl Nightingale" },
    { text: "Life shrinks or expands in proportion to one's courage.", author: "Anaïs Nin" },
    { text: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
    { text: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth" },
    { text: "Money and success don’t change people; they merely amplify what is already there.", author: "Will Smith" },
    { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "Not how long, but how well you have lived is the main thing.", author: "Seneca" },
    { text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
    { text: "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.", author: "Henry Ford" },
    { text: "In order to write about life first you must live it.", author: "Ernest Hemingway" },
    { text: "The big lesson in life, baby, is never be scared of anyone or anything.", author: "Frank Sinatra" },
    { text: "Curiosity about life in all of its aspects, I think, is still the secret of great creative people.", author: "Leo Burnett" },
    { text: "Life is not a problem to be solved, but a reality to be experienced.", author: "Søren Kierkegaard" },
    { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
    { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
    { text: "Great minds discuss ideas; average minds discuss events; small minds discuss people.", author: "Eleanor Roosevelt" },
    { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
    { text: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain" },
    { text: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "We accept the love we think we deserve.", author: "Stephen Chbosky" },
    { text: "I am not afraid of storms, for I am learning how to sail my ship.", author: "Louisa May Alcott" },
    { text: "No one can make you feel inferior without your consent.", author: "Eleanor Roosevelt" },
    { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
    { text: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.", author: "Martin Luther King Jr." },
    { text: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.", author: "J.K. Rowling" },
    { text: "Without music, life would be a mistake.", author: "Friedrich Nietzsche" },
    { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
    { text: "It takes courage to grow up and become who you really are.", author: "E.E. Cummings" },
    { text: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", author: "Maya Angelou" },
    { text: "We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.", author: "Maya Angelou" },
    { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },
    { text: "The only thing necessary for the triumph of evil is for good men to do nothing.", author: "Edmund Burke" },
    { text: "Know thyself.", author: "Socrates" },
    { text: "He who conquers himself is the mightiest warrior.", author: "Confucius" },
    { text: "Do not pray for an easy life, pray for the strength to endure a difficult one.", author: "Bruce Lee" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.", author: "Thomas A. Edison" },
    { text: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.", author: "Martin Luther King Jr." },
    { text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa" },
    { text: "If you judge people, you have no time to love them.", author: "Mother Teresa" },
    { text: "Love all, trust a few, do wrong to none.", author: "William Shakespeare" },
    { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
    { text: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle" },
    { text: "The unexamined life is not worth living.", author: "Socrates" },
    { text: "Happiness depends upon ourselves.", author: "Aristotle" },
    { text: "Friendship is born at that moment when one person says to another: 'What! You too? I thought I was the only one.'", author: "C.S. Lewis" }
];

// DOM Elements
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');
const copyBtn = document.getElementById('copy-btn');
const toast = document.getElementById('toast');
const historyList = document.getElementById('history-list');
const quoteCard = document.getElementById('quote-card');

// State
let currentQuote = {};
let history = [];

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    generateQuote();
});

// Function to generate a random quote
function generateQuote() {
    // Visual feedback: Fade out slightly before changing
    quoteText.style.animation = 'none';
    quoteText.offsetHeight; /* trigger reflow */
    quoteText.style.animation = 'fadeIn 0.8s forwards';
    
    quoteAuthor.style.animation = 'none';
    quoteAuthor.offsetHeight; /* trigger reflow */
    quoteAuthor.style.animation = 'slideUp 0.8s 0.2s forwards';

    // Logic: Pick a random quote different from the current one
    let randomIndex;
    let newQuote;
    
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
        newQuote = quotes[randomIndex];
    } while (newQuote === currentQuote && quotes.length > 1);

    currentQuote = newQuote;

    // Update DOM
    quoteText.textContent = currentQuote.text;
    quoteAuthor.textContent = currentQuote.author;

    // Update Background Gradient for visual variety
    const hues = [230, 280, 340, 200, 160]; // Predefined nice hues
    const randomHue = hues[Math.floor(Math.random() * hues.length)];
    document.body.style.background = `linear-gradient(135deg, hsl(${randomHue}, 60%, 95%), hsl(${randomHue}, 60%, 85%))`;
    document.documentElement.style.setProperty('--primary-color', `hsl(${randomHue}, 70%, 60%)`);

    // Add to history
    addToHistory(currentQuote);
}

// Function to add quote to history list
function addToHistory(quote) {
    // Prevent duplicates at the top of the list
    if (history.length > 0 && history[0].text === quote.text) return;

    history.unshift(quote);
    
    // Limit history to 10 items
    if (history.length > 10) {
        history.pop();
    }

    renderHistory();
}

// Function to render history list
function renderHistory() {
    historyList.innerHTML = '';

    history.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'history-item';
        // Display truncated text
        const truncatedText = item.text.length > 50 ? item.text.substring(0, 50) + '...' : item.text;
        
        li.innerHTML = `
            ${truncatedText}
            <small>— ${item.author}</small>
        `;

        // Click history item to restore it
        li.addEventListener('click', () => {
            currentQuote = item;
            quoteText.textContent = item.text;
            quoteAuthor.textContent = item.author;
            
            // Re-trigger animations
            quoteText.style.animation = 'none';
            quoteText.offsetHeight; 
            quoteText.style.animation = 'fadeIn 0.8s forwards';
            quoteAuthor.style.animation = 'none';
            quoteAuthor.offsetHeight; 
            quoteAuthor.style.animation = 'slideUp 0.8s 0.2s forwards';
        });

        historyList.appendChild(li);
    });
}

// Function to copy text to clipboard
function copyToClipboard() {
    const textToCopy = `"${currentQuote.text}" — ${currentQuote.author}`;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        showToast("Quote copied to clipboard!");
    }).catch(err => {
        console.error('Failed to copy: ', err);
        showToast("Failed to copy text.");
    });
}

// Function to show toast notification
function showToast(message) {
    const toastMsg = document.getElementById('toast-message');
    toastMsg.textContent = message;
    
    toast.classList.add('show');
    
    // Hide after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Event Listeners
newQuoteBtn.addEventListener('click', generateQuote);
copyBtn.addEventListener('click', copyToClipboard);
