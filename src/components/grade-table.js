import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGradeData } from '../actions';
import GradeRow from './grade-row';

class GradeTable extends Component {
    componentDidMount(){
        this.props.getGradeData();
    }

    render(){
        const { grades } = this.props;

        const rowElements = grades.map(grade => {
            return <GradeRow key={grade.id} {...grade} />
        });

        return (
            <table className="table table-hover mx-2">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Grade</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rowElements}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state){
    return {
        grades: state.grades.list
    }
}

export default connect(mapStateToProps, {
    getGradeData: getGradeData
})(GradeTable);
