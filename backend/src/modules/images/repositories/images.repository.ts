import { CreateImageDto } from '../dto/create-image.dto';
import { Image } from '../entities/image.entity';

export abstract class ImagesRepository {
  abstract create(data: CreateImageDto, announcementId: string): Promise<Image>;
  abstract findOne(id: string): Promise<Image | undefined>;
  abstract findAll(
    announcementId: string | undefined,
  ): Promise<Image[] | object>;
}
