// ● შექმენი <button> და <div> ელემენტები და
// მიანიჭეთ საკუთარი უნიკალური id
// ● <div> - ში ჩაწერე პატარა random ტექსტი
// ● ღილაკზე დაჭერის შემთხვევაში დამალე
// <div> ელემენტი

const hideButton = document.getElementById('hideButton');
const myDiv = document.getElementById('myDiv');

hideButton.addEventListener('click', () => {
    myDiv.style.display = 'none';
  });
