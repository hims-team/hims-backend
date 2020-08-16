import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

enum UserType {
  Admin,
  Patient,
};

@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column()
  public role: UserType;
}

export default User;
