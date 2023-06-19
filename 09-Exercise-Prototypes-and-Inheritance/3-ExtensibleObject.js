

//03. Extensible Object

// Create an object that can clone the functionality of another object into itself. Implement an extend(template)
// function that would copy all of the properties of the template to the parent object and if the 
// property is a function, add it to the object’s prototype instead.


function extensibleObject() {
    const obj = {
      extend: function (template) {
        for (const parentProp of Object.keys(template)) {
          const templateElement = template[parentProp];
  
          if (typeof templateElement === "function") {
            Object.getPrototypeOf(obj)[parentProp] = templateElement;
          } else {
            obj[parentProp] = templateElement;
          }
        }
      },
    };
  
    return obj;
  }




// test:
const myObj = extensibleObject();
const template = {
  extensionMethod: function () {},
  extensionProperty: "someString",
};
myObj.extend(template);

console.log(myObj.__proto__.extensionMethod);
console.log(myObj.extensionProperty);