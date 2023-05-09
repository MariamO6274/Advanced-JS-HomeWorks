/// Hell of callbacks where in you cannot really make out the code.
// Not very developers friendly code.
//
// There is always a fear of Inversion of Control.

// func1 (func2) {
//     func2(func3) {
//         func3 (func4) {
//             func4(func5){
//                 func5() // serve(burger)
//             }
//         }
//     }
// }

// func(cbFunc) {
//     cbFunc()
// }

// Why did they start using this kind of nested callbacks
// To achieve Async code
// They wanted, that
// func2 should get called only after func1 is executed
// func3 should get called only after func2 is executed
// func4 should get called only after func3 is executed
// func5 should get called only after func4 is executed
