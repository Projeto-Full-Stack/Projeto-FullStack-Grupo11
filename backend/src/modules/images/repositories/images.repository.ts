import { CreateImageDto } from '../dto/create-image.dto';
import { Image } from '../entities/image.entity';

export abstract class ImagesRepository {
  abstract create(data: CreateImageDto[], annId: string): Promise<Image>;
  abstract findAll(annId: string): Promise<Image[]>;
  abstract delete(id: string): Promise<void>;
}
