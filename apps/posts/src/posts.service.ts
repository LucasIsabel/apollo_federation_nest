import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  private readonly posts: Post[] = [];

  create(createPostInput: CreatePostInput): Post {
    this.posts.push(createPostInput);
    return createPostInput;
  }

  findAll(): Post[] {
    return this.posts;
  }

  findOne(id: string): Post {
    return this.posts.find((post) => post.id === id);
  }

  findByAuthor(authorId: string) {
    return this.posts.filter((posts) => posts.id === authorId);
  }
}
