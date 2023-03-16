import { PostsService } from './posts.service';
import { User } from './entities/user.entity';
import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Post } from './entities/post.entity';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly postService: PostsService) {}

  @ResolveField(() => [Post])
  posts(@Parent() user: User): Post[] {
    return this.postService.findByAuthor(user.id);
  }
}
