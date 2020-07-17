import Cell from "./cell.js";

export default class Map 
{
    constructor(options)
    {
        this.options = {};
        this.update(options.cells, options.map);        
        this.generate();
    }

    update(cellOptions, mapOptions) 
    {
        this.options.cells = cellOptions;
        this.options.map = mapOptions;
    }

    generate() 
    {
        this.cells = [];
        
        const {borderSize, height, width} = this.options.cells;
        const {cols, rows} = this.options.map;
                        
        for (var y = 0; y < rows; y++ )
        {
            let row = [];

            for (var x = 0; x < cols; x++ )
            {
                let posX = 1 + borderSize * x + width * x; 
                let posY = 1 + borderSize * y + height * y;

                row[x] = new Cell({height, width}, {posX, posY});
            } 

            this.cells[y] = row;
        }
    }

    draw(ctx) 
    {        
        ctx.fillStyle = this.options.map.backgroundColor;

        for (var y = 0; y < this.cells.length; y++ )
        {
            let row = this.cells[y];

            for (var x = 0; x < row.length; x++ )
            {
                let cell = row[x]; 
                
            ctx.fillStyle = this.options.cells.backgroundColor;
                cell.draw(ctx);
            } 
        }
    }
}