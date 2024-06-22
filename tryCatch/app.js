// let hello = "hello";

try {

    console.log(hello.toUpperCase());
} catch (e) {
    console.log("No Such thing as hello")
    throw e;
}