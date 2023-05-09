import { Controller, Body, Get, Post, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './DTO/create-product.dto';

@Controller('productos')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll() {
    return this.productsService.findAll();
  }

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get(':id')
  async findOne(@Param() { id }: { id: object }) {
    return this.productsService.findOne((id));
  }
}
