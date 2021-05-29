import { createSlice } from "@reduxjs/toolkit";

const artboardSlice = createSlice( {
    name: "artboardDisplayOptions",
    initialState: {
        width: 500,
        height: 400,
        zoom: 100,
        offsetX: 50.0,
        offsetY: 50.0
    },
    reducers: {
        setArtboardDimensions( state, action ) {
            return { ...state, width: action.payload.width || state.width, height: action.payload.height || state.height };
        },
        setZoom( state, action ) {
            return { ...state, zoom: action.payload };
        },
        zoomIn( state ) {
            return { ...state, zoom: Math.min( state.zoom + 6.25, 625 ) };
        },
        zoomOut( state ) {
            return { ...state, zoom: Math.max( state.zoom - 6.25, 6.25 ) };
        },
        setArtboardOffset( state, action ) {
            return { ...state, offsetX: action.payload.offsetX || state.offsetX, offsetY: action.payload.offsetY || state.offsetY };
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
    setZoom,
    zoomIn,
    zoomOut,
    setArtboardOffset,
    moveArtboardLeft,
    moveArtboardRight,
    moveArtboardUp,
    moveArtboardDown
} = artboardSlice.actions;
export default artboardSlice.reducer;
