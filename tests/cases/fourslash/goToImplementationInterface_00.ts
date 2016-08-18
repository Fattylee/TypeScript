/// <reference path='fourslash.ts'/>

// Should go to definitions in object literals in variable like declarations when invoked on interface

//// interface Fo/*interface_definition*/o {
////     hello: () => void
//// }
////
//// interface Baz extends Foo {}
////
//// var bar: Foo = [|{ hello: helloImpl /**0*/ }|];
////
//// function helloImpl () {}
////
//// function whatever(x: Foo = [|{ hello() {/**1*/} }|] ) {
//// }
////
//// class Bar {
////     x: Foo = [|{ hello() {/*2*/} }|]
////
////     constructor(public f: Foo = [|{ hello() {/**3*/} }|] ) {}
//// }


goTo.marker("interface_definition");
verify.allRangesAppearInImplementationList();