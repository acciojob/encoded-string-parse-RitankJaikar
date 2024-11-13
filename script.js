const parseCode = (str) => {
  // your code here
	str= str.split("0").filter(s => s.length!==0);
	return { firstName: str[0], lastName: str[1], id: str[2] }
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
//parseCode("John000Doe000123");




