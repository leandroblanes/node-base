import { PrimaryGeneratedColumn, Column, Entity, OneToMany, ManyToOne } from "typeorm";

@Entity("client")
export class Client {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public document: string;

    @Column({ name: "birth_date" })
    public birthDate: Date;

    @Column()
    public email: string;

    @Column({ name: "phone_number" })
    public phoneNumber: string;

    @Column({ name: "face_matched" })
    public faceMatched: Boolean;

    @Column()
    public active: Boolean;
}
