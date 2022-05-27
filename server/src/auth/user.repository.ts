import {EntityRepository, Repository} from "typeorm";

import {
  ConflictException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto';
import { v4 } from 'uuid';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(signUpDto: SignUpDto): Promise<User> {
    const { firstName, lastName, email, contactNumber, password } = signUpDto;
    const user = new User();
    user.id = v4();
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.contactNumber = contactNumber;
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassword(password, user.salt);
    try {
       await this.save(user);
       return user
    } catch (error) {
        throw new ConflictException('Username already exists');
    }
  }

  async validatePassword(signInDto: SignInDto): Promise<User> {
    const { email, password } = signInDto;
    const user = await this.findOne({ email });
    return user && (await user.validatePassword(password)) ? user : null;
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }

}
