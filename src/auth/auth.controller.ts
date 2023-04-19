import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

// Value passed to Controller decorator is the initial path for the URLs of this
// module
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signup')
  signup() {
    return this.authService.signup();
  }

  @Post('signin')
  signin() {
    return this.authService.siging();
  }

  @Get('sky_api')
  sky_api() {
    return this.authService.getSomething();
  }
}
