import React from 'react'

export const productReducer = (productState, action) => {
    switch (action.type) {
        // https://jsonplaceholder.typicode.com/posts/5
        case 'TODO_SINGLE':
            let payload = action.payload;
            console.log(payload.userId);
            console.log(productState);

            return productState
        default:
            return payload

    }
}
