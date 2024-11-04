import { TOGGLE_THEME } from './actions';

const initialState = {
    isDarkTheme: false, // Начальная тема - светлая
};

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return {
                ...state,
                isDarkTheme: !state.isDarkTheme, // Переключаем тему
            };
        default:
            return state;
    }
};

export default themeReducer;
