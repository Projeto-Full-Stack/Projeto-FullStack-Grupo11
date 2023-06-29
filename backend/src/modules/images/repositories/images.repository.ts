import { CreateImageDto } from '../dto/create-image.dto';
import { UpdateImageDto } from '../dto/update-image.dto';
import { Image } from '../entities/image.entity';

export abstract class ImagesRepository {
  abstract create(data: CreateImageDto[], annId: string): Promise<Image>;
  abstract findAll(annId: string): Promise<Image[]>;
  abstract findOne(imageId: string): Promise<Image>;
  abstract update(imageId: string, data: UpdateImageDto): Promise<Image>;
  abstract deleteMany(ids: string[]): Promise<void>;
}
