import React from 'react'
import {connect} from 'react-redux'

class EmployeeForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name:this.props.employee ? this.props.employee.name : '',
            email:this.props.employee ? this.props.employee.email : '',
            mobile:this.props.employee ? this.props.employee.mobile :'',
            department:this.props.employee ? this.props.employee.department.name :''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile,
            department : this.state.department

        }
        this.props.handleSubmit(formData)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" onChange={this.handleChange} value={this.state.name} name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" onChange={this.handleChange} value={this.state.email} name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile</label>
                        <input type="number" className="form-control" id="mobile" onChange={this.handleChange} value={this.state.mobile} name="mobile" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="department">department</label>
                        <select id="department" value={this.state.department} className="form-control" name="department" onChange={this.handleChange}>
                            <option key="one">select</option>
                            
                            {
                                this.props.department ? this.props.department.map(depart=>{
                                    return (<option value={depart._id} key={depart._id}>{depart.name}</option>)
                                }) : 'loading'
                            }

                        </select>
                    </div>
                    <input type="submit" value="submit" className="btn btn-primary" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        department : state.departments
    }
}

export default connect(mapStateToProps)(EmployeeForm)