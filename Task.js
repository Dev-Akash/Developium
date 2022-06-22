class Task{
	constructor(name, description, status){
		this.name = name;
		this.description = description;
		this.status = status;
	}
	setName(name){
		this.name = name;
	}
	getName(){
		return this.name;
	}
	setDescription(description){
		this.description = description;
	}
	getDescription(){
		return this.description;
	}
	setStatus(status){
		this.status = status;
	}
	getStatus(){
		return this.status;
	}
}

export default Task;