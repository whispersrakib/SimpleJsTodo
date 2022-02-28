
let input= prompt('what would you like to do!!!!!');
const todo=['me','and','you'];
while(input!== 'quit'&&input!=='q'){
	if(input==='list'){
		console.log('***************************');
		for(let i=0;i<=todo.length-1;i++){
			console.log(`${i}:${todo[i]}`);
		}
      	console.log('***************************');
	}else if(input==='new'){
		const add= prompt('okay, what would you like to add ??');
		todo.push(add);
		console.log(`${add} added to list`);
	}else if(input==='delete'){
		const index= parseInt(prompt('okay,enter a valid index to delete:'));
		if(!Number.isNaN(index)){
			const Delete= todo.splice(index, 1);
		console.log(`okay deleted ${Delete[0]}`);

		}else{
			console.log('unknown index')
		}

		
	}
	input= prompt('what would you like to do!!!!!');
}console.log('you quited');
