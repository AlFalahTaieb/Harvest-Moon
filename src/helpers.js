export function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')   // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '')     // Trim - from start of text
    .replace(/-+$/, '');    // Trim - from end of text
}

export function getFunName() {
  const adjectives = ['adorable', 'beautiful', 'clean', 'drab', 'elegant', 'fancy', 'glamorous', 'handsome', 'long', 'magnificent', 'old-fashioned', 'plain', 'quaint', 'sparkling', 'ugliest', 'unsightly', 'angry', 'bewildered', 'clumsy', 'defeated', 'embarrassed', 'fierce', 'grumpy', 'helpless', 'itchy', 'jealous', 'lazy', 'mysterious', 'nervous', 'obnoxious', 'panicky', 'repulsive', 'scary', 'thoughtless', 'uptight', 'worried'];

  const nouns = [ "apple","apricot","avocado","banana","bell pepper","bilberry","blackberry","blackcurrant","blood orange","blueberry","boysenberry","breadfruit","canary melon","cantaloupe","cherimoya","cherry","chili pepper","clementine","cloudberry","coconut","cranberry","cucumber","currant","damson","date","dragonfruit","durian","eggplant","elderberry","feijoa","fig","goji berry","gooseberry","grape","grapefruit","guava","honeydew","huckleberry","jackfruit","jambul","jujube","kiwi fruit","kumquat","lemon","lime","loquat","lychee","mandarine","mango","mulberry","nectarine","nut","olive","orange","pamelo","papaya","passionfruit","peach","pear","persimmon","physalis","pineapple","plum","pomegranate","pomelo","purple mangosteen","quince","raisin","rambutan","raspberry","redcurrant","rock melon","salal berry","satsuma","star fruit","strawberry","tamarillo","tangerine","tomato","ugli fruit","watermelon"];

  return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
}
