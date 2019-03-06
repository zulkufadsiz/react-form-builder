import React, { Component } from 'react';

let Tools = [
    {
        title:"Single Field",
        name: "SINGLE_FIELD",
        icon:"fa fa-wpforms"
    },
    {
        title : 'Drop Down',
        name : 'SELECT_FIELD',
        icon : 'fa fa-chevron-circle-down'
    },
    {
        title : 'Check Boxes',
        name : 'CHECK_BOXES',
        icon : 'fa fa-check-square'
    },
    {
        title : 'Radio Buttons',
        name : 'RADIO_BUTTONS',
        icon : 'fa fa-circle'
    },
    {
        title : 'Paragraph',
        name : 'PARAGRAPH',
        icon : 'fa fa-paragraph'
    },
    {
        title : 'Duration Picker',
        name : 'DURATION_PICKER',
        icon : 'fa fa-calendar'
    }

]



class ToolBox extends Component {
    render() {
        return (
            <div className="toolbox">
                <div className="card card-default">
                    <div className="card-header">
                        Drag to add a Field
                    </div>
                    <div className="card-body toolbox-list p-0">
                        <ul className="list-group" ref={(tools) => this._tools = tools}>
                            {
                                Tools.map((types) => {
                                    return <li data-tool={types.name}
                                               onDragStart={(e) => this.dragField(e, types.name)}
                                               key={types.name}
                                               className='list-group-item singleField'>
                                        <i className={types.icon + " mr-3"}></i>
                                        {types.title}
                                        </li>
                                })
                            }
                            {
                                this.renderCustomTools()
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default ToolBox;