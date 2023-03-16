import { User } from './user.entity';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(() => ID, { description: 'this field represent user id' })
  id: string;

  @Field()
  body: string;

  @Field()
  authorId: string;

  @Field(() => User)
  user?: User;
}
