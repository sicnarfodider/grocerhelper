import React, { Component } from 'react';


class AddList extends Component{
    constructor(props){
        super(props)

        this.state = {
            listTitle: '',
            taskList: [
                {
                    taskName: ''
                }
            ]
        }

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleListUpdate = this.handleListUpdate.bind(this);
        this.discardTask = this.discardTask.bind(this);
        this.addNewInput = this.addNewInput.bind(this);
        this.saveList = this.saveList.bind(this);
    }

    handleTitleChange(event){
        const { name, value } = event.target;
        this.setState({ listTitle: value });
    }

    handleListUpdate(event, taskIndex){
        const { value } = event.target;
        const updatedList = this.state.taskList.map((task, index)=>{
            if(taskIndex !== index){
                return task
            }
            return { ...task, taskName: value }
        });
        this.setState({ taskList: updatedList });
        console.log('value', value);
    }

    addNewInput(){
        this.setState({taskList: [ ...this.state.taskList, [{taskName: ''}] ] });
    }

    discardTask(taskIndex){
        const updatedList = this.state.taskList.filter((task, index)=>{
            return taskIndex !== index;
        })
        this.setState({ taskList: updatedList })
    }

    saveList(){

    }

    render(){
        const { listTitle, taskList } = this.state
        const listInput = taskList.map((task, index)=>{
            return (
                <div key={ index } className="input-group mb-3">
                    <input name="task" placeholder={`Task # ${index+1}`} type="text" className="form-control mr-2" value={ task.name } onChange={(e)=>{this.handleListUpdate(e, index)}}/>
                    <button type="button" className="btn btn-danger input-group-addon" onClick={()=>{ this.discardTask(index) }}> DISCARD </button>
                </div>
            )
        });

        return(
            <div className="container">

                <form>
                    <div className="form-group">
                        <label>Task Title</label>
                        <input name="title" value={ listTitle } type="text" className="form-control" onChange={(e)=>{this.handleTitleChange(e)}}/>
                    </div>
                    <h3> Tasks </h3>
                    { listInput }
                    <button type="button" className="btn btn-primary mr-2" onClick={this.addNewInput}>Add New Task</button>
                    <button className="btn btn-success" onClick={this.saveList}> Save List </button>
                </form>

            </div>
        )
    }
}

export default AddList
