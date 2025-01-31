const today = new Date();
const date = new Date('2025-01-31')
console.log(date.getMonth());
console.log(date.getDay());
const specificDate = new Date(2091, 0, 26)
console.log(specificDate)
specificDate.setMonth(10);
console.log(specificDate.toLocaleString('en-GB'));


// const today = new Date();
// এখানে today ভেরিয়েবলে বর্তমান তারিখ ও সময় সংরক্ষণ করা হচ্ছে।
// javascript
// Copy
// Edit
// const date = new Date('2025-01-31')
// console.log(date.getMonth());
// console.log(date.getDay());
// date ভেরিয়েবলে 2025-01-31 তারিখ সেট করা হয়েছে।
// date.getMonth() → এই ফাংশন মাসের ইনডেক্স (0-11) ফেরত দেয়।
// যেহেতু জানুয়ারি (January) 0 থেকে গণনা শুরু হয়, 31 জানুয়ারি 2025-এর জন্য getMonth() 0 ফেরত দেবে।
// date.getDay() → এই ফাংশন সপ্তাহের দিনের ইনডেক্স (0-6) ফেরত দেয়, যেখানে:
// 0 = রবিবার, 1 = সোমবার, ..., 6 = শনিবার।
// 31 জানুয়ারি 2025 শুক্রবার, তাই এটি 5 ফেরত দেবে।
// আউটপুট:

// javascript
// Copy
// Edit
// 0
// 5
// javascript
// Copy
// Edit
// const specificDate = new Date(2091, 0, 26)
// console.log(specificDate)
// specificDate ভেরিয়েবলে ২৬ জানুয়ারি ২০৯১ সেট করা হয়েছে।
// new Date(2091, 0, 26):
// মাসের ইনডেক্স 0-11 হয়, তাই 0 = জানুয়ারি।
// এই লাইনটি 26 জানুয়ারি 2091 সেট করছে।
// আউটপুট (সম্ভাব্য ফরম্যাট):

// javascript
// Copy
// Edit
// 2091-01-26T00:00:00.000Z
// javascript
// Copy
// Edit
// specificDate.setMonth(10);
// console.log(specificDate.toLocaleString('en-GB'));
// specificDate.setMonth(10); → মাস পরিবর্তন করা হচ্ছে (10 = নভেম্বর)।
// এখন তারিখ হবে ২৬ নভেম্বর ২০৯১।
// toLocaleString('en-GB'):
// en-GB মানে "ইউকে (United Kingdom) ফরম্যাট" অর্থাৎ DD/MM/YYYY HH:MM:SS।
// ফলে ২৬ নভেম্বর ২০৯১ এই ফরম্যাটে দেখাবে।
// আউটপুট (সম্ভাব্য):

// javascript
// Copy
// Edit
// 26/11/2091, 00:00:00
// সারাংশ:
// getMonth() → মাসের ইনডেক্স ফেরত দেয় (0-11)।
// getDay() → সপ্তাহের দিনের ইনডেক্স ফেরত দেয় (0-6)।
// setMonth() → নির্দিষ্ট তারিখের মাস পরিবর্তন করে।
// toLocaleString('en-GB') → ইউকে ফরম্যাটে তারিখ ও সময় দেখায়।
// সম্পূর্ণ সম্ভাব্য আউটপুট:
// javascript
// Copy
// Edit
// 0
// 5
// 2091-01-26T00:00:00.000Z
// 26/11/2091, 00:00:00