function stringChop(str, size) {
  // your code here
	if(str==null) return [];
	const res=[];
	let i;
	for i=0;i<str.length;){
		res.push(str.splice(i,i+size));
		i+=size;
	}
	return res;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
