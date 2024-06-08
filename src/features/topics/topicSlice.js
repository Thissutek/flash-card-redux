import { createSlice } from '@reduxjs/toolkit'

//Slice 
export const topicsSlice = createSlice({
    name: "topics",
    //Initial State
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics[id] = {
                id,
                name,
                icon,
                quizIds: []
            };
        },
    extraReducers: {
        'quizzes/addQuiz': (state, action) => {
            const { id, topicId } = action.payload;
            state.topics[topicId].quizIds.push(id);
        }
    }
    }
});

export const { addTopic } = topicsSlice.actions;
export const selectTopics = (state) => state.topics.topics
export default topicsSlice.reducer;