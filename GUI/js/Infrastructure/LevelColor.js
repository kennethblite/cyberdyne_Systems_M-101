/*
 * Singleton that implements color differeciating betwwen levels
 */
var LevelColor = {
    getColor: function(level, colorScheme){
        if (colorScheme == 9) {
            return this._getColorBy9(level);
        } 
        else if (colorScheme == 10){
            return this._getColorBy10(level);
        }
    },
    
    _getColorBy9: function(level){
        switch (level) {
            case 9: return '#3ab54b';
            case 8: return '#6bb43e';
            case 7: return '#99b232';
            case 6: return '#ccb124';
            case 5: return '#fdaf17';
            case 4: return '#f88a1b';
            case 3: return '#f4661e';
            case 2: return '#f24022';
            case 1: return '#f4661e';            
        }
    },
    
    _getColorBy10: function(level){
        switch (level) {
            case 10: return '#3ab54b';
            case 9: return '#6bb43e';
            case 8: return '#99b232';
            case 7: return '#afb12c';
            case 6: return '#ccb124';
            case 5: return '#fdaf17';
            case 4: return '#f88a1b';
            case 3: return '#f4661e';
            case 2: return '#f4661e';      
            case 1: return '#ed1b24';            
        }
    }   
}
