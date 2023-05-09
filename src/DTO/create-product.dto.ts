export class CreateProductDto {
    
    readonly timestamp: Date
    readonly title: string;
    readonly thumbnail: string;
    readonly description: string;
    readonly stock: number;
    readonly code: string;
    readonly price: number;

    constructor(createProductDto: CreateProductDto) {
        Object.assign(this, createProductDto);
        this.timestamp = new Date();
      }
}



