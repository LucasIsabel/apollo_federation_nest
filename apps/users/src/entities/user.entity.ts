import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID, { description: 'this field represent user id' })
  id: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
