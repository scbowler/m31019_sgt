import types from './types';
import axios from 'axios';

export function getGradeData(){
    return async function (dispatch) {
        const resp = await axios.get('/api/grades');

        dispatch({
            type: types.GET_GRADE_DATA,
            grades: resp.data
        });
    }
}


// export async function getGradeData() { 
//     const resp = await axios.get('/api/grades');

//     console.log('Get Data Response:', resp);

//     return {
//         type: 'GET_GRADE_DATA',
//         data: resp.data
//     }
// }
