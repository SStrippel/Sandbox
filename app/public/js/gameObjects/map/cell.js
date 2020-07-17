export default class Cell 
{
    constructor(size, position) 
    {
        this.update(size, position);
    }
    
    update(size, position) 
    {
        let {height, width} = size;
        let {posX, posY} = position;
        
        this.height = height;
        this.width = width

        this.posX = posX;
        this.posY = posY;
    }

    draw (ctx) 
    {
        ctx.fillRect(this.posX, this.posY, this.width, this.height);
    }
}