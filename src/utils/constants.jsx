// export const BASE_URL="http://localhost:4000"
export const BASE_URL = "https://api.kind.movies.nomoredomainsicu.ru";

export const MOVIE_BASE_URL = "https://api.nomoreparties.co";

export const BAD_REQUEST = 400;
export const UNAUTHORIZED = 401;
export const CONFLICT = 409;
export const INTERNAL_SERVER_ERROR = 500;

export const MESSAGE_ERROR_AUTH = "Вы ввели неправильные логин или пароль";
export const MESSAGE_ERROR_REGISTER = "При регистрации пользователя произошла ошибка";
export const MESSAGE_ERROR_PROFILE = "При обновлении профиля произошла ошибка";
export const MESSAGE_ERROR_EMAIL = "Пользователь с таким email уже существует";
export const MESSAGE_ERROR_TOKEN =  "При авторизации произошла ошибка. Токен не передан или передан не в том формате"
export const MESSAGE_ERROR_LOGIN = "При авторизации произошла ошибка. Переданный токен некорректен";
export const MESSAGE_ERROR_MOVIES = "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз";
export const MESSAGE_SUCCESS ="Данные профиля успешно изменены";

export const MESSAGE_INPUT_WORD = "Нужно ввести ключевое слово";
export const MESSAGE_ERROR_NOT_FOUND = "По вашему запросу ничего не найдено";
export const MESSAGE_ERROR_SERVER = "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
//размер экрана при котором перестраиваются карточки
export const SCREEN_SIZE_DESKTOP = 1100;
export const SCREEN_SIZE_TABLET = 735;
// export const SCREEN_SIZE_MOBILE = 654;

//стартовый набор карточек
export const MOVIES_DESKTOP = 12;
export const MOVIES_TABLET = 8;
export const MOVIES_MOBILE = 5;

// кол-во подгружаемых карточек
export const MOVIES_ADD_DESKTOP = 3;
export const MOVIES_ADD_TABLET = 2;
export const MOVIES_ADD_MOBILE = 2;

export const SHORT_MOVIE_DURATION = 40;

