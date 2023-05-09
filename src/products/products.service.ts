import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from 'src/products/schema/product.schema';
import { CreateProductDto } from './DTO/create-product.dto'

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private productModule: Model<ProductDocument>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const productCreated = await this.productModule.create(createProductDto)
    return productCreated
  }

  async findAll() {
    return this.productModule.find();
  }

  async findOne(id: object) {
    return this.productModule.findById(id);
  }
}
