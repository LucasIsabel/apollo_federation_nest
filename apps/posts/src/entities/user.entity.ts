import { Directive, Field, ObjectType, ID } from '@nestjs/graphql';
import { Post } from './post.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class User {
  @Field(() => ID, { description: 'this fields represent id' })
  id: string;

  @Field(() => [Post])
  posts?: Post[];
}
