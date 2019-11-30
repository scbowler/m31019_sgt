import types from '../actions/types';

const DEFAULT_STATE = {
    average: 0,
    edit: null,
    list: []
};

export default (state = DEFAULT_STATE, action) => {

    switch(action.type){
        case types.ADD_GRADE_RECORD:
            return { ...state, list: [...state.list, action.grade] };
        case types.DELETE_GRADE_RECORD:
            return { ...state, list: action.list };
        case types.GET_GRADE_DATA:
            return { ...state, list: action.grades }
        default:
            return state;
    }
}
