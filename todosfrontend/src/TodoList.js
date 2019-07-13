import React, {Component} from 'react';

class TodoList extends Component{
	constructor(props){
		super(props);
		this.state = {
			todos: []
		};
	}
	
	componentWillMount(){
		fetch('/api/todos')
		.then(data =>data.json())
		.then(todos => this.setState({todos}))
		;
	}
	
	render() {
		return(
			<h1>Todo List!</h1>
		)
	
	}
}

export default TodoList;
