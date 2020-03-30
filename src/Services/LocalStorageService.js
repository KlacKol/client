const LocalStorageService = (function(){

    function _setToken(token) {
        localStorage.setItem('access_token', token);
    }
    function _getAccessToken() {
        return localStorage.getItem('access_token');
    }
    function _clearToken() {
        localStorage.removeItem('access_token');
    }
    function _setIdUser(id) {
        localStorage.setItem('user_id', id);
    }
    function _getIdUser() {
        return localStorage.getItem('user_id');
    }
    function _clearIdUser() {
        localStorage.removeItem('user_id');
    }
    return {
        setToken : _setToken,
        getAccessToken : _getAccessToken,
        clearToken : _clearToken,
        setIdUser: _setIdUser,
        getIdUser: _getIdUser,
        clearIdUser: _clearIdUser
    }
})();
export default LocalStorageService;