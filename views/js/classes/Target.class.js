
export default class Target {
    
    /**
     * constructor for an object target
     * @param {double} x 
     * @param {double} y 
     * @param {int} r 
     * @param {object} color 
     */
    constructor(x, y, r, color ){
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
    }

    //SETTER
    set setX(x){
        this.x = x;
    }

    set setY(y){
        this.y = y;
    }

    set setR(r){
        this.r = r;
    }

    set setColor(color){
        this.color = color;
    }

    //GETTER
    get getX(){
        return this.x;
    }

    get getY(){
        return this.y;
    }

    get getR(){
        return this.r;
    }

    get getColor(){
        return this.color;
    }
}