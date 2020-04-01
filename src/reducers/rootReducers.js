// action name
const REMOVE_ITEM = 'REMOVE_ITEM';
const ADD_ITEM = 'ADD_ITEM';
// actions
export const removeItemAction = (itemType, id) => ({
    type: REMOVE_ITEM,
    payload: {
        itemType,
        id,
    },
});
export const addItemAction = (itemType, itemContent) => {
    const getId = () => `_${Math.random().toString(36).substr(2, 9)}`;

    return {
        type: ADD_ITEM,
        payload: {
            itemType,
            item: {
                id: getId(),
                ...itemContent,
            },
        },
    };
};

// initial state
const initialState = {
    twitters: [
        {
            id: 1,
            title: 'Hello Roman',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            created: '1 day',
            twitterName: 'hello_roman',
        },
    ],
    articles: [
        {
            id: 1,
            title: 'Hello Roman',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            created: '1 day',
            articleUrl: 'https://youtube.com/helloroman',
        },
    ],
    notes: [
        {
            id: 1,
            title: 'Hello Roman',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            created: '1 day',
        },
    ],
};

const rootReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'ADD_ITEM':
            return {
                ...state,
                [payload.itemType]: [...state[payload.itemType], action.payload.item],
            };
        case REMOVE_ITEM:
            return {
                ...state,
                [payload.itemType]: [
                    ...state[payload.itemType].filter((item) => item.id !== payload.id),
                ],
            };
        default:
            return state;
    }
};

export default rootReducer;
