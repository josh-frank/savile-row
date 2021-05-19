import { createSlice } from "@reduxjs/toolkit";

const artboardSlice = createSlice( {
    name: "artboardDisplayOptions",
    initialState: {
        width: 300,
        height: 300,
        zoom: 1.0,
        offsetX: 50.0,
        offsetY: 50.0
    },
    reducers: {
        setArtboardDimensions( state, action ) {
            return { ...state, width: action.payload.width || state.width, height: action.payload.height || state.height };
        },
        zoomIn( state ) {
            return { ...state, zoom: Math.min( state.zoom + 0.0625, 6.25 ) };
        },
        zoomOut( state ) {
            return { ...state, zoom: Math.max( state.zoom - 0.0625, 0.0625 ) };
        },
        moveArtboardLeft( state ) {
            return { ...state, offsetY: state.offsetY - 0.5 };
        },
        moveArtboardRight( state ) {
            return { ...state, offsetY: state.offsetY + 0.5 };
        },
        moveArtboardUp( state ) {
            return { ...state, offsetX: state.offsetX - 0.5 };
        },
        moveArtboardDown( state ) {
            return { ...state, offsetX: state.offsetX + 0.5 };
        }
    }
} );

export const {
    setArtboardDimensions,
    zoomIn,
    zoomOut,
    moveArtboardLeft,
    moveArtboardRight,
    moveArtboardUp,
    moveArtboardDown
} = artboardSlice.actions;
export default artboardSlice.reducer;