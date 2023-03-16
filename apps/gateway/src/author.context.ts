import { UnauthorizedException } from '@nestjs/common';

export const authContext = ({ req }) => {
  // jwt validation
  if (req.headers?.authorization) {
    return {
      user: { id: 1234 },
    };
  }

  throw new UnauthorizedException();
};
