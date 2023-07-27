// JavaScript Classes are templates for JavaScript Objects. Class is not an object!

// Use the keyword class to create a class.

// Always add a method named constructor()


// This method is Class declaration, let Cars = class {....} <-- this is Class exspresion
class Cars {
    constructor(brand, model, color){
        this.brand = brand;
        this.model = model;
        this.color = color;

    }

}

console.log(Cars)

// The example above uses the Car class to create two Car objects.

const myCars = new Cars('Subaru', 'Crosstrack', 'Blue')
const myFriendsCar = new Cars('Honda', 'Civic', 'Gray')
console.log(myCars)
// Cars { brand: 'Subaru', model: 'Crosstrack', color: 'Blue' }

console.log(myCars.color) //Blue

console.log(myFriendsCar)
//Cars { brand: 'Honda', model: 'Civic', color: 'Gray' }


/**
 * ამ Cars კლასში ხდება ინიცილიზაცია რაღაც ობიექტის, ეს კლასი არის ანუ ობიექტის შაბლონი
 * შაბლონი ნიშნავს თემფლეთს,
 * 
 * ამ კონსტრუქტორის დახმარებით ჩვენ ავაწყეთ Cars { brand: 'Subaru', model: 'Crosstrack', color: 'Blue' }
 * რომელის ფროპერთიებიც (brand, model, color) გადმოყოლილია კონსტრუქტორიდან და
 * მნიშვნელობები (ვალიუს) რომლებიცაა 'Subaru', 'Crosstrack', 'Blue' მივანჭეთ--> const myCars = new Cars დან
 * 
 * და კალსის დახმარებით შეიქმნა ობიექტი--> const myCars = new Cars('Subaru', 'Crosstrack', 'Blue')
 * 
 * და ასევე როგორც ობიექტში ვიღებთ კონკრეტულ ინპორმაციას "დათ ნოთეიშენით" მივწვდებოდით აქაც შეგვიძლია
 * გავიგოთ მაგალითად ფერი console.log(myCars.color) //Blue
 * 
 * ასევე შეგვიძლია გავაკეთოთ სხვა ობიექტიც იგივე კლასის გამოყენებით
 * მაგ: const myFriendsCar = new Cars('Honda', 'Civic', 'Gray') უბრალოდ სხვა პარამეტრების გამოყენებით
 * 
 * new ქივორდით ხდება ამ myCars ცვლადში ახალი Cars ობიექტის ინიციალიზაცია
 * რომლის დახმარებიტაც გადაეცემა კონსტრუქტორს ჩვენი არგუმენტები
 * შემდეგ ჩვენი კოსტრუქტორი ამ არგუმენტებს და ამ კონსტრუქტორ მეთოდში ვაწყობთ ობიექტს სასურველი გროპერთიებით
 * 
 * 
 */



// Real example
// კლასების ინჰერიტენსი --> ერთმანეთში ინფორმაციის გაცვლა, ნათესაობა ))

class User {
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// extends აქ ნიშნავს რომ Student კლასიი დაესესხება User-ს დუპლიკატ ინფოს
class Student extends User{
    constructor(firstName,lastName, grade){
        // this.firstName; ამის დუბლიკაცია ავირიდეთ თავიდან და გამოვიყენეთ super
        // this.lastName; გამოვიყენეთ მშობელი კონსტრუქტორი ანუ User-ი Super მეთოდის დახმარებით
        super(firstName, lastName)
        this.grade = grade;
    }
}

const fullname = new User('Mariam', 'Ostatoshvili')
const studentFullname = new Student("Mariam", "Ostatoshvili", 85);
console.log(fullname);
console.log(studentFullname);

// User { firstName: 'Mariam', lastName: 'Ostatoshvili' }
// Student { firstName: 'Mariam', lastName: 'Ostatoshvili', grade: 85 }