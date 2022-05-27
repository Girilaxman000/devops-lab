import {
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
  import { InjectRepository } from '@nestjs/typeorm';
  import { SignInDto } from './dto/sign-in.dto';
  import { SignUpDto } from './dto/sign-up.dto';
  import { JwtPayload } from './jwt-payload';
  import { UserRepository } from './user.repository';
  import { User } from './user.entity';

  @Injectable()
  export class AuthService {
    constructor(
      @InjectRepository(UserRepository)
      private userRepository: UserRepository,
      private jwtService: JwtService,
    ) {}
  
    async signUp(signUpDto: SignUpDto): Promise<User> {
      return this.userRepository.signUp(signUpDto);
    }
  
    async signIn(signInDto: SignInDto): Promise<any> {
      const user = await this.userRepository.validatePassword(signInDto);
      if (!user) {
        throw new UnauthorizedException('Invalid credentials');
      }
      const payload: JwtPayload = { email: user.email };
      const accessToken = await this.jwtService.sign(payload);
      return {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        contactNumber: user.contactNumber,
        id: user.id,
        accessToken,
      };
    }
  }
  