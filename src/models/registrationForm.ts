import { Client } from './client';
import { PrimaryGeneratedColumn, Column, Entity, OneToMany, ManyToOne, JoinColumn, RelationId } from "typeorm";

@Entity("registration_form")
export class RegistrationForm {
    @PrimaryGeneratedColumn()
    public id: number;

    @ManyToOne(type => Client)
    @JoinColumn({
        name: "client_holder_id",
        referencedColumnName: "id"
    })
    public clientHolder: Client;

    @Column({ name: "client_holder_id" })
    public clientHolderId: number;

    @Column({ name: "partner_id" })
    public partnerId: number;

    @Column({ name: "create_dt" })
    public createDate: Date;

    @Column({ name: "update_dt" })
    public updateDate: Date;

    @Column({ name: "registration_form_type" })
    public registrationFormType: number;

    @Column({ name: "mail_id" })
    public mailId: number;

    @Column({ name: "investor_segment" })
    public investorSegment: number;

    @Column({ name: "investor_declaration_id" })
    public investorDeclarationId: number;

    @Column({ name: "responsible_authorization" })
    public responsibleAuthorization: number;

    @Column({ name: "holder_signature" })
    public holderSignature: number;

    @Column({ name: "distributor_use_id" })
    public distributorUse: number;

    @Column({ name: "third_part_account" })
    public thirdPartAccount: Boolean;

    @Column({ name: "intermediate_link" })
    public intermediateLink: Boolean;

    @Column({ name: "client_coholder_id" })
    public clientCoholderId: number;

    @Column({ name: "coholder_signature" })
    public coholderSignature: string;

    @Column({ name: "holder_signature_verified" })
    public holderSignatureVerified: Boolean;

    @Column({ name: "coholder_signature_verified" })
    public coholderSignatureVerified: Boolean;

    @Column({ name: "signature_verified" })
    public signatureVerified: Boolean;

    @Column({ name: "holder_check_list_form_id" })
    public holderCheckListFormId: number;

    @Column({ name: "holder_bank_information_id" })
    public holderBankInformationId: number;

    @Column({ name: "coholder_bank_information_id" })
    public coHolderBankInformationId: number;

    @Column({ name: "is_approved_adm" })
    public isApprovedAdm: number;

    @Column({ name: "is_approved_fiduc" })
    public isApprovedFiduc: number;

    @Column({ name: "message_not_approved" })
    public messageNotApproved: string;

    @Column({ name: "message_pending" })
    public messagePending: string;

    @Column({ name: "coholder_check_list_form_id" })
    public coholderCheckListFormId: number;

    @Column({ name: "need_coholder" })
    public needCoholder: Boolean;

    @Column({ name: "account_id" })
    public accountId: number;
}