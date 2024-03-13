import { registerUserDto } from './user.dto';
import db from '@/lib/prisma-db';
import bcrypt from 'bcrypt';

const registerUser = async (data: registerUserDto) => {
  try {
    const hashedPassword = await bcrypt.hash(data?.password, 10);
    return db.collector.create({
      data: {
        docId: data?.docId,
        fName: data?.firstName,
        mName: data?.middleName,
        fLastName: data?.firstLastName,
        mLastName: data?.middleLastName,
        email: data?.email,
        password: hashedPassword,
        gender: data?.gender,
        birthDate: data?.birthDate,
        phoneNumber: data?.phoneNumber,
      },
    });
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
};

export const userService = {
  registerUser,
};
