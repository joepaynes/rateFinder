import NZPOSTdom from '../actions';

export default function(state = null, action) {
    switch(action.type) {
        case NZPOSTdom:
        return action.payload
    }

    return state;
}