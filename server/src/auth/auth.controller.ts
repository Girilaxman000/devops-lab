import { Body, Controller, Put, Param, Post, Get } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { SignUpDto } from 'src/auth/dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto';

import { User } from './user.entity';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signUp')
  signUp(@Body() signUpDto: SignUpDto): Promise<User> {
    return this.authService.signUp(signUpDto);
  }

  @Post('/signIn')
  signIn(@Body() signInDto: SignInDto): Promise<any> {
    return this.authService.signIn(signInDto);
  }

}
